---
tags:
  - derivatives
  - proofs
  - pages/refined
---

> [!info]- Notation
> 
> A derivative can also be shown as:
> 
> $$\frac{dy}{dx} \quad \t{or}\quad f'(x)$$
> 
> and the second derivative shown as:
> 
> $$\frac{d^2y}{dx^2} \quad \t{or} \quad f''(x)$$

![[Pasted image 20240707182106.png]]

![[Pasted image 20240430181705.png]]

We can find an average slope between two points.

![[Pasted image 20240430181725.png]]

But how do we find the slope at a point?

![[Pasted image 20240430181753.png]]

Using derivatives we use a small difference and have it tend towards 0.

![[Pasted image 20240430181837.png]]

## Finding a Derivative

To find the derivative of a function $y = f(x)$ we can use the slope formula $= \frac{\d y}{\d x}$

![[Pasted image 20240430182034.png]]

From the diagram we can see that:
- $x \rightarrow x+\d x$
- $f(x) \rightarrow f(x+\d x)$

We can use this to fill in our slope formula:
$\frac{\d y}{\d x} = \frac{f(x+\d x) - f(x)}{\d x}$

Then, we can shrink $\d x$ towards 0.

## Example

We have the function $f(x) = x^2$

We can substitute this into our slope formula:

$$\frac{f(x+\d x)^2 - x^2}{\d x}$$

We expand out:

$$\frac{x^2 + 2x \d x + (\d x )^2 - x^2}{\d x}$$

We simplify:

$$\frac{2x \d x + (\d x)^2}{\d x}$$

Then we divide through by $\d x$:

$$2x + \d x$$

Finally, as $\d x$ tends towards 0, we get:

$$ 2x$$

So, the derivative of $x^2$ is $2x$ (In other words, the slope at $x$ is $2x$)

## So, what does this mean?

Put simply, for the function $x^2$, the slope or "rate of change" at any point is $2x$.

So when $x=2$ the slope is $2x = 4,$ as shown here:

![[Pasted image 20240430183508.png]]

Or when $x=5$ the slope is $2x = 10,$ and so on.

> [!note]
> 
> $f’(x)$ means "the derivative of":
> 
> $f’(x) = 2x$


## Example $\frac{d}{dx}x^3$

Start with $f(x+\d x) = (x + \d x)^3$

We expand the brackets: 
$$f(x+\d x) = x^3 + 3x^2 \d x + 3x (Δx)^2 + (Δx)^3$$

We substitute this into the slope formula:

$$\frac{x^3 + 3x^2 \d x + 3x (Δx)^2 + (Δx)^3 - x^3}{\d x}$$

Simplify:

$$\frac{ 3x^2 \d x + 3x (Δx)^2 + (Δx)^3}{\d x}$$

We divide by $\d x$:

$3x^2 + 3x \d x + (\d x) ^2$

Then, as $\d x$ approaches 0, we get:

$3x^2 + (3x \times 0) + 0$
$\r 3x^2$

So, the derivative of $x^3$ in $3x^2$

## Notation

"Shrink towards zero" is actually written as a limit like this:

$$f'(x) = \lim_{{\d x} \rightarrow 0}{\frac{f(x+ \d x) - f(x)}{\d x}}$$

In words, "The derivative of $f$ equals the limit as $\d x$ approaches zero of $f(x+\d x) - f(x)$ over $\d x$"

Alternatively, the derivatives can be written as:

$\frac{dy}{dx} = \frac{f(x+\d x - f(x))}{\d x}$

And the process of finding a derivative is called "differentiation".

## Example:

$\frac{dy}{dx} 2x \sqrt x + 3e ^{2x}$

$\r 3e ^{2x} + (2x^1 \times x^{1/2})$

$\r 3e ^{2x} + 2x^{3/2}$

$6e ^{2x} + x^{1/2}$

