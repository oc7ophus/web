
```latex
{
\text{Hello!}
	\begin{cases}
		{\displaylines
			{
				{\text{Line 1}}\\
				{\text{Line 2}}\\
				{\text{Line 3}}
			}
		}
	\end{cases}
}

## This defines a newline
\\

## Multi-line wrapper
\displaylines

## Determines a state of a variable (must be nested correctly)
\begin{<var>}
\end{<var>}
```

```latex
\documentclass{article}
\usepackage{amsmath}
\begin{document}
This example shows \verb|aligned| equations within
an \verb|align| environment.
\begin{align}
  \begin{aligned}
a &= b + c + d\\
  &\qquad + e + f + g
  \end{aligned}\\
  \begin{aligned}
k &= l + m + n + m + n + m + n\\
  &\qquad + o + p + q
  \end{aligned}
\end{align}

This example shows text and  equations within
an \verb|align| environment.
\begin{align}
a &= b + c + d\\
  &\qquad + e + f + g
\intertext{A small amount of text can go here with $x=2$ inline math
 and     $$\int_a^b f(x)\,dx=F(b)-F(a)$$ (even inline math). But not a lot 
of text. }
k &= l + m + n + m + n + m + n\\
  &\qquad + o + p + q
\end{align}

\end{document}
```


$${
\text{Hello!}
	\begin{cases}
		{\displaylines
			{
				{\text{Line 1}}\\
				{\text{Line 2}}\\
				{\text{Line 3}}\\
			}
		}
	\end{cases}
}$$


$$
\displaylines{
\begin{align}
\ni Tdij (Ti,Tj,Sk,t)& = Tdij(Ti,Tj,Sk,t) \nonumber \\
& Tddir (Ti,Tj,Sk,t) \bigoplus \nonumber \\
& Tdrecom (Ti,Tj,Sk,t) \bigoplus \nonumber \\
& Tdiv (Ti,Tj,Sk,t)
\end{align}
}
$$


```latex
\displaylines
{
	\begin{align}
		&\hspace {0.025cm} s \hspace {0.025cm} : {1} \\
		&u \hspace {0cm} : {2} \\
		&\hspace {0.02cm} v \hspace {0.02cm} : {3} \\
		&\hspace {0.008cm} a \hspace {0.008cm} : {4} \\
		&\hspace {0.05cm} t \hspace {0.05cm} : {5} \\
	\end{align}
}
```

```latex
\newcommand{suvat}[5]{\displaylines{\begin{align}&\hspace {0.025cm} s \hspace {0.025cm}:{{#1}}\\ &u\hspace{0cm}:{{#2}}\\ &\hspace{0.02cm}v\hspace{0.02cm}:{{#3}}\\ &\hspace{0.008cm}a\hspace{0.008cm}:{{#4}}\\ &\hspace{0.05cm}t\hspace {0.05cm}:{{#5}}\\ \end{align}}}
```


rpl