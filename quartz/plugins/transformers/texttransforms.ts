import { visit } from "unist-util-visit";
import { findAndReplace } from 'mdast-util-find-and-replace';
import { QuartzTransformerPlugin } from "../types";

export const TextTransforms: QuartzTransformerPlugin = () => {
  return {
    name: "TextTransforms",
    textTransform(_ctx, src) {

      // Simple replacements
      const simpleReplacements = [
        [/\\group(?=[\s{])/g, '\\mathbb '],
        [/\\deg(?=[\s{])/g, '^{\\boldsymbol{\\circ}}'],
        [/\\me(?=[\s{])/g, '\\ge'],
        [/\\lb(?=[\s{])/g, '\\bigg ['],
        [/\\rb(?=[\s{])/g, '\\bigg ]'],
        [/\\d(?=[\s{])/g, '\\Delta'],
        [/\\r(?=[\s{])/g, '\\Rightarrow'],
        [/\\t(?=[\s{])/g, '\\text'],
        [/\\b(?=[\s{])/g, '\\big'],
      ];

      // Apply simple replacements
      let transformedText = simpleReplacements.reduce((text, [pattern, replacement]) => {
        return text.replace(pattern, replacement);
      }, src);

      // Complex macro replacements
      const complexReplacements = [
        [
          /\\qformula\{([^}]*)\}\{([^}]*)\}\{([^}]*)\}/g,
          (_, arg1, arg2, arg3) => `{\\frac{-{${arg2}}\\pm\\sqrt{{${arg2}}^2-4({${arg1}})({${arg3}})}}{2({${arg1}})}}`
        ],
        [
          /\\longdiv\{([^{}]*)\}\{([^{}]*)\}/g,
          (_, arg1, arg2) => (
          `{\\strut{${arg1}} \\kern.0em\\smash{ \\raise.5ex \\hbox{ \\$\\big )\\$ }} \\mkern-12mu \\overline{\\enspace\\strut{ \\kern.2em{${arg2}}\\; }}}`
          )
        ],
      ];

      // Apply complex replacements
      transformedText = complexReplacements.reduce((text, [pattern, replacer]) => {
        return text.replace(pattern, replacer);
      }, transformedText);

      return transformedText;
    },
    markdownPlugins() {
      return [() => {
        return (tree, file) => {
          // replace _text_ with the italics version
          findAndReplace(tree, [
            [/_(.+)_/, (_value: string, ...capture: string[]) => {
              const [inner] = capture;
              return {
                type: "emphasis",
                children: [{ type: 'text', value: inner }]
              };
            }]
          ]);

          // Handle links
          visit(tree, "link", (link: Link) => {
            return {
              type: "paragraph",
              children: [{ type: 'text', value: link.title ?? link.url }]
            };
          });
        };
      }];
    }
  };
};
