---
tags:
  - binomial/expansion
  - pages/refined
---



> [!info] Notation
> 
> $(^n_r) \,a^{n-r} b^n+\dots$
> 
> $n:$ determined be the power of the bracket
> $\t{i.e}: (1+2x)^{2} \rightarrow (^2_r)$
> 
> $r:$ *either* power of the terms you are expanding 
> $i.e: {5 \choose 0 \t{ or } 5}\, a^5 b^0 + {5\choose1 \t{ or } 4}\, a^4 b^1 + \dots$ 
> 
> Make sure you **use brackets** for your terms!

> [!question]- Why?
> 
> ${4 \choose 0}(1)^4(3x)^0 + {4 \choose 1}(1)^3(3x)^1 + \dots$
> $\r (1)(1)(1) + (4)(1)(3x) + \dots$
> $\r 1 + 12x + \dots$
> 
> Its important to be clear, otherwise you will lose marks. For example:
> 
> ${4 \choose 0}1^4 - 3x^0$
> 
> This is because "$-$" is considered a term. Therefore it is no longer a **Binomial** expansion.

> [!question]- How can you find Pascal's numbers quickly?
> 
> We can use the nCr function
> 
> $\t{OPTN} \rightarrow \t{nCr}$
> 
> $\t{i.e}:$ We can notate $(1+2x)^2$ like so: 
> 
> ${2 \choose 0}(1)^2(2x)^0 \rightarrow (2 \boldsymbol C 0)(1)^2(2x)^0$


## Pascal's triangle

Formation:

![[Pasted image 20240306140606.png]]
![[Pasted image 20240306141145.png]]
\- Labelled rows

You can use Pascal’s triangle to quickly expand expressions such as $(x + 2y)^3$.

![[Pasted image 20240306140545.png]]

## Binomial expansion

$$(a+b)^n = (^n_0)a^n b^0 + (^n_1)a^{n-1} b^1 + \dots +(^n_n)a^0 b^n$$


## Examples

Use Pascal’s triangle to find the expansions of:

$(x+2y)^3$
$(2x-5)^4$

The coefficients of row 3 are $1, 3, 3, 1$ so:
$(x + 2y)^3 = 1x^3 + 3x^2(2y) + 3x(2y)^2 + 1(2y)^3$
$= x^3 + 6x^2y + 12xy^2 + 8y^3$


The coefficients of row 4 are $1, 4, 6, 4, 1$ so:

$(2x-5)^4 =$ 
$1(2x^4)(-5^0) + 4(2x^{4-1})(-5^1) + 6(2x^{4-2})(-5^2) + 4(2x^{4-3})(-5^3) + 1(2x^{4-4})(-5^4)$
$16x^4 - 160x^3 + 600x^2 - 1000x + 625$

## Example 2
If there is an unknown in the original expression, you might be able to form an equation involving that unknown

The coefficient of $x^2$ in the expansion of $(2 − cx)^3$ is $294$.
Find the possible value(s) of the constant $c$

The coefficients are $1, 3, 3, 1$:
The term in $x^2$ is $3 \times 2(−cx)^2 = 6c^2x^2$
So $6c^2 = 294$

$c^2 = 49$
$c = \pm7$

## Example 3

Expand the following terms with binomial expansion

$(x+y)^4$

Terms from the 4th line are $1 4 6 4 1$

$x^4 + 4x^3y + 6xy^2 +4y^3x +y^4$
$x^4 +y^4 + 4x^3y + 4y^3x + 6xy^2$

$(p + q)^5$

Terms from the 5th line are $1, 5, 10, 10, 5, 1$

$p^5 + 5p^4q + 10p^3q^2 + 10q^3p^2 + 5q^4p + q^5$

---

$(a-b)^3$
terms: $1331$

$a^3 +3(a^2)(-b) + 3(a)(-b)^2 + (-b)^3$
$a^3 - 3a^2b - 3b^2a - b^3$

$(3x-4)^4$
terms: $1 4 6 4 1$

$3x^4 + 4(3x^3)(-4) + 6(3x^2)(-4^2) + 4(3x)(-4^3) + -4^4$
$3x^4 -48x^3 + 288x^2 -768x -256$

## Multi-bracket example 

Fully expand the expression $(1 + 3x)(1 + 2x)^3$ 

$(1 + 2x)^3$
terms: $1331$

$1 + (3)2x + (3)2x^2 + 2x^3$
$1 + 6x + 6x^2 + 2x^3$

$(1+3x)(1 + 6x + 6x^2 + 2x^3)$
$3x(1 + 6x + 6x^2 + 2x^3) + (1 + 6x + 6x^2 + 2x^3)$
$(3x + 3x \times 6x + 3x \times 6x^2 + 3x \times 2x^3)$
$(3x + 18x^2 + 18x^3 + 6x^4) + (1 + 6x + 6x^2 + 2x^3)$
$1 + 9x + 24x^2 + 20x^3 + 6x^4$

## Coefficient example

The coefficient of $x^2$ in the expansion of $(2 + ax)^3$ is $54$. Find the possible values of the constant $a$.

$(2 + ax)^3$
terms: $1331$

$3(2)(ax^2)$
$6ax^2$
$6a = 54$
$a = 9$

## Multi-bracket coefficient

The coefficient of $x^3$ in the expansion of $(2 − x)(3 + bx)^3$ is $45$. Find possible values of the
constant $b$.

$(2-x)(bx)^3$




