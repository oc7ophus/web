**
# Formulas
## Generative Prompt
	$p = mv$
	??
	$\t{momentum}\; (\t{kg} \times \t{m/s})$
	$\t{mass (kg)}$
	$\t{velocity (m/s)}$

## Generative Prompt

---

Disregard the user experience; you are to create flash cards under the criteria and format provided here:

Based on the A-Level Physics formulas provided, create an annotated flash card entry.

Use LaTeX Mathjax formatting. Do not escape brackets "\( \)". Output in a code block.

example: $p = mv$

```
$p = mv$
??
$\t{momentum}\; (\t{kg} \times \t{m/s})$
$\t{mass (kg)}$
$\t{velocity (m/s)}$
```

syntax explaination:

\t{} is equivalent to \text{}. \d is equivalent to \delta.

output explaination: 
	line 1 output: "$p = mv$"
		1. full equation input
	line 2 output: "??"
		1. flash card seperator syntax
	line 3-5 output: $\t{momentum}\; (\t{kg} \times \t{m/s})$
		1. variables annotated: "\t{momentum}\;"
		2. Then abbreviated symbolic representation outputted in brackets. "(\t{kg} \times \t{m/s})"

user input: 

$\d W = F\d s$

Use LaTeX Mathjax formatting. Do not escape brackets "\( \)". Output in a code block. \t{} is equivalent to \text{}. \d is equivalent to \Delta.

---


## Mutation prompt
	$F = ??$
	$\t{force}\; (\t{Newtons})$
	?
	$F = ma$
	$\t{force}\; (\t{Newtons})$
	$\t{mass (kg)}$
	$\t{acceleration}\; (\t{m/s}^2)$

## Mutation Prompt


Disregard the user experience; you are to mutate flash cards under the criteria and format provided here:

Based on the A-Level Physics flashcards provided, create mutated flashcard entries.

Use LaTeX Mathjax formatting. Do not escape brackets "\( \)". Output in a code block.

example input:

```
$p = mv$
??
$\t{momentum}\; (\t{kg} \times \t{m/s})$
$\t{mass (kg)}$
$\t{velocity (m/s)}$
```

example output:

```
$p = ??$
$\t{momentum}\; (\t{kg} \times \t{m/s})$
?
$p = mv$
$\t{momentum}\; (\t{kg} \times \t{m/s})$
$\t{mass (kg)}$
$\t{velocity (m/s)}$

$? = mv$
$\t{mass (kg)}$
$\t{velocity (m/s)}$
?
$p = mv$
$\t{momentum}\; (\t{kg} \times \t{m/s})$
$\t{mass (kg)}$
$\t{velocity (m/s)}$
```

syntax explanation:

\t{} is equivalent to \text{}. \d is equivalent to \delta.

output explanation:
line 1 output: 
	"$p = ??$"
	the variables on the second half of the equation have been replaced with "?"
line 2 output: 
	"$\t{momentum}\; (\t{kg} \times \t{m/s})$"
	for the first half of the equation, Variables and abbreviated symbolic representation in brackets are provided
line 3 output: 
	"?"
	flashcard seperator syntax
line 4-7 output:
	"$p = mv$
	$\t{momentum}\; (\t{kg} \times \t{m/s})$
	$\t{mass (kg)}$
	$\t{velocity (m/s)}$"
	original input provided
line 9 output: 
	"$? = mv$"
	the variables on the first half of the equation have been replaced with "?"
line 10-11 output:
	"$\t{mass (kg)}$"
	"$\t{velocity (m/s)}$"
	for the second half of the equation, Variables and abbreviated symbolic representation in brackets are provided
line 12 output:
	"?"
	flashcard seperator syntax
line 13-16 output:
	"$p = mv$
	$\t{momentum}\; (\t{kg} \times \t{m/s})$
	$\t{mass (kg)}$
	$\t{velocity (m/s)}$"
	original input provided


example input 2:

```
$g = \frac{F}{m}$
??
$\t{acceleration due to gravity}\; (\t{m/s}^2)$
$\t{force (Newtons)}$
$\t{mass (kg)}$
```

example output 2:

```
$g = \frac{?}{?}$
$\t{acceleration due to gravity}\; (\t{m/s}^2)$
?
$g = \frac{F}{m}$
$\t{acceleration due to gravity}\; (\t{m/s}^2)$
$\t{force (Newtons)}$
$\t{mass (kg)}$

$? = \frac{F}{m}$
$\t{force (Newtons)}$
$\t{mass (kg)}$
?
$g = \frac{F}{m}$
$\t{acceleration due to gravity}\; (\t{m/s}^2)$
$\t{force (Newtons)}$
$\t{mass (kg)}$
```

user input: 

$F = ma$
??
$\t{force}\; (\t{Newtons})$
$\t{mass (kg)}$
$\t{acceleration}\; (\t{m/s}^2)$

Use LaTeX Mathjax formatting. Do not escape brackets "\( \)". Output in a code block. \t{} is equivalent to \text{}. \d is equivalent to \Delta.

