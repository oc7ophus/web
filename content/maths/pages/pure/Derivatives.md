---
tags:
  - derivatives
  - proofs
  - pages/refined
  - pure
---
We can find the gradient from two points, but how would you find a gradient on a curve with just one point?


> [!info]- Slopes
> 
> Derivatives are used to find a slope at a certain point along a line.
> 
> ![[Pasted image 20240430181705.png]]
> 
> ![[Pasted image 20240707182106.png]]

> [!info]- Two vs One point
> 
> Take the following curve with two points:
> 
> ![[Pasted image 20240430181725.png]]
> 
> We find the average between these two points to be $\frac{24}{15}$
> 
> However, how would you be able to find the slope at a single point?
> 
> ![[Pasted image 20240430181753.png]]


Using derivatives, we allow ourselves to use a small difference, $\Delta x$, and have it *tend towards* 0.

![[Pasted image 20240430181837.png]]

Essentially we are observing our function reacting as the change in $x$ becomes infinitesimally small.

Now, we use the following slope formula, where we compare the difference $(\Delta)$ between $y$ and $x$:

$$
\frac{\d y}{\d x}
$$


![[Pasted image 20240430182034.png]]

From the diagram, we can fill in our slope formula with our two points.

First, $\Delta x$ remains as simply $\d x$
Second, $\Delta y$ becomes $f(x + \Delta x) - f(x)$

Substituting this into our slope formula, we get:

$$
\frac{\d y}{\d x} = \frac{f(x+\d x) - f(x)}{\d x}
$$


---

## Applying the formula

Say we have a curve. $f(x) = x^2$

We can substitute this into our slope formula:

$$
\begin{align}
 & \frac{f(x+\d x) - f(x)}{\d x} \\ \\ 
 & \frac{f(x+\d x)^2 - x^2}{\d x}
\end{align}
$$

*We expand out $f(x + \Delta x)^{2}$:*

$$
\frac{(x^2 + 2x \d x + (\d x )^2) - x^2}{\d x}
$$

*We simplify:*

$$\frac{2x \d x + (\d x)^2}{\d x}$$

*Then we divide through by $\d x$:*

$$2x + \d x$$

*Finally, as $\d x$ tends towards 0, we get:*

$$ 2x$$

Success! We have found the derivative of $x^2$. The slope at $x$ will be $2x$

- Put simply, for our function $x^2$, the slope or "rate of change" at any point is $2x$.

So when $x=2$, the slope is $2x = 4$. This is shown here:

![[Pasted image 20240430183508.png]]

Or when $x=5$, the slope is $2x = 10$, and so on.

This whole process of substitution; simplification; then allowing $\Delta x$ tend to zero to find the **Derivative** is called **Differentiation**!

---

## Notation


$f’(x)$ means "the derivative of":

$$
f'(x) = 2x
$$

Derivative can be written as:

$$
\frac{dy}{dx} \quad \t{or}\quad f'(x)
$$

And second derivatives are written like so:

$$
\frac{d^2y}{dx^2} \quad \t{or} \quad f''(x)
$$

"Tend towards zero" is actually written as a limit:

$$f'(x) = \lim_{{\d x} \rightarrow 0}{\frac{f(x+ \d x) - f(x)}{\d x}}$$

And now we have our full formula!