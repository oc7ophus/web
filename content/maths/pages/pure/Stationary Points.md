---
tags:
  - graphs
  - derivatives/points
  - pages/dirty
  - pure
---


Also called "Critical Points"

In a smoothly changing function a Stationary Point is a point where the function stops increasing or decreasing:

![[Pasted image 20240707180733.png]]

- **Local Maximum**: 
	- where the value of the function is higher than at nearby points, like the peak of a hill.
	
- **Local Minimum:** 
	- where the value of the function is lower than at nearby points, like the bottom of a valley.
	
- **Saddle Point:** 
	- where it becomes flat on an otherwise rising (or falling) hillside.

> [!example]- Example: Thrown Ball Maximum 
> 
> A ball is thrown in the air. Its height at any time $t$ is given by:
> 
> $$h = 3+14t - 5t^2$$
> 
> What is its maximum height?
> 
> Using **derivatives** we can find the slope of that function:
> 
> $h' = 0 + 14 - 5(2t)$
> $\r 14 - 10t$
> 
> Now, we find when the **slope is zero**:
> 
> $14 - 10t = 0$
> $10t = 14$
> 
> $t = \frac{14}{10}$
> 
> The slope is zero at $t = 1.4\t s,$ and the height at that time is:
> 
> $h = 3 + 14(1.4) - 5(1.4)^2$
> $\;\,\,\r 3 + 19.6 - 9.8$
> 
> $h = 12.8$
> 
> And so: The maximum height is $12.8\t m$, at $t = 1.4\t s$

---
## Minima or Maxima?

Take the derivative of the slope (the second derivative of the original function):

$\frac{dy}{dx} = 14 - 10x$

$\frac{d^2y}{dx^2} = -10$

This means the slope is continually getting smaller

![[Pasted image 20240707182451.png]]

From left to right, the slope starts out:
	"positive", as the function's rising
	goes through zero, as the $\t{Slope} = 0$
	then becomes negative, as the function starts to fall.

This is the Second Derivative test:

- When a function's **slope is zero at x**, and the **second derivative at x** is:
	- $< 0,$ a local maximum
	- $> 0,$ a local minimum
	- $= 0,$ test inconclusive

> [!example]- Example: Min Max Cubic
> 
> > $y = 5x^3 + 2x^2 -3x$
> > 
> > $y' = 15x^2 + 4x - 3$
> 
> We can solve this quadratic to find where it is equal to 0:
> 
> > $\qformula {15} {4} {-3}$
> > 
> > $x = -\frac{3}{5}, \frac{1}{3}$
> 
> Lets determine if these are maxima or minima:
> 
> > $y'' = 30x + 4$
> 
> > $f(-\frac{3}{5})= 30 (-\frac{3}{5}) + 4$
> > $\r -14$
> > 
> > $-14 < 0, \;\therefore x = -\frac{3}{5} \;\t{is a local maximum}$
> 
> > $f(\frac{1}{3})= 30 (\frac{1}{3}) + 4$
> > $\r +14$
> > 
> > $14 > 0, \;\therefore x = \frac{1}{3} \;\t{is a local minimum}$
> 
> > ![[Pasted image 20240707183740.png]]

---
## Guide

Lets take this example: The parabola $f(x) = −x^2 + 4x$

- We find the derivative of the function $f'(x)$.
	- This represents the slope of the function.
	- $f'(x) = -2x + 4$
- Solve the derivative equation $f'(x) = 0$
	- This finds the x-values where the function is zero (the stationary points).
	- $f'(0) = -2x + 4$
		- $x = 2$
- Take the second derivative $f''(x)$
	- This determines if $x = 2$ is a minima or maxima
	- $f''(x) = -2$
		- $\therefore x = 2 \;\t{is a local maximum}$

> [!example]- Example: Min Max Inconclusive
> 
> > $y = x^3 - 6x^2 + 12x - 5$
> 
> *Finding derivative*
> 
> > $y' = 3x^2 - 12x + 12$
> 
> *Solve for $x$*
> 
> > 3x^2 - 12x + 12 = 0
> > 
> > $x = 2$
> 
> *Determine type*
> 
> > $y'' = 6x - 12$
> > 
> > $f''(2) = 6(2) - 12$
> > $\r 0$
> 
> *Test inconclusive*
> 
> > ![[Pasted image 20240707184936.png]]
> > 
> > $x = 2$ is an inflection point, but the slope becomes zero, meaning it is neither a maximum nor minimum.



