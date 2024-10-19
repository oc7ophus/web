---
tags:
  - proofs
  - derivatives
  - pages/refined
---

## Proof of Derivatives

$$\lim_{h \rightarrow 0} \frac{f(x+h)-f(x)}{h}$$

The top of the fraction means, change in $y$
The bottom of the fraction is our change in $x$
i.e, the approximate gradient.

Example:

*We create an approximate equation*

$$\lim_{h \rightarrow 0} \frac{(x+h)^5-(x)^5}{h}$$

*Simplify; or no more dividing by 0.*
*We can start by expanding out the brackets*

$1x^5h^0 + 5x^4h^1 + 10x^3h^2 + 10x^2h^3 + 5x^1h^4 + 1x^0h^5 +    -(x)^5$
$5x^4h + 10x^3h^2 + 10x^2h^3 + 5x^1h^4 + h^5$

$\lim_{h \rightarrow 0} \frac{5x^4h + 10x^3h^2 + 10x^2h^3 + 5x^1h^4 + h^5}{h}$

*Factorising $h$ **then** cancelling out will keep you safe from losing marks!*

$h(5x^4 + 10x^3h + 10x^2h^2 + 5h^3x + h^4)$

$\lim_{h \rightarrow 0} {5x^4 + 10x^3h + 10x^2h^2 + 5h^3x + h^4}$

*As h->0*

$\r 5x^4$

