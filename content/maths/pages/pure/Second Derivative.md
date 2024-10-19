---
tags:
  - derivatives/second
  - pages/refined
  - pure
---


The "Second Derivative" is **the derivative of** the derivative of a function. So:

- Find the derivative of a function
- Then find the derivative of **that**

A derivative is often shown with a little tick mark: $f'(x)$

The second derivative is shown with **two** tick marks like this: $f''(x)$

> [!example]- Example: $f(x) = x^3$
> 
> $f'(x) = 3x^2$
> 
> $f''(x) = 6x$

A common real world example of this is distance, speed and acceleration:

Example: A bike race!

You are cruising along in a bike race, going a steady **10 m every second**.

![[Pasted image 20240707175905.png]]

- **Distance**: is how far you have moved along your path
- **Speed:** is how much your distance $s$ changes over time $t$
	- The **first derivative** of distance with respect to time: $\frac{ds}{dt}$

We know you are doing 10m per second, so: $\frac{ds}{dt} = 10\text{ms}^{-1}$

- **Acceleration**: Now you start cycling faster! 
	- You increase your speed to **14 m every second** over the next 2 seconds:

![[Pasted image 20240707180150.png]]

When you are accelerating your **speed is changing** over time, so $\frac{ds}{dt}$ is changing over time!

We could express this like so: $\frac{d\frac{ds}{dt}}{dt}$

But it is usually written as: $\frac{d^2s}{dt^2}$

Your speed is **increasing by 4 m/s** over **2 seconds**, so:

$\frac{d^2s}{dt^2} = \frac{4}{2}$
$\r 2 \text{ms}^{-2}$

Here it is in one table:

| Distance                        | $s$                 | $100\t m$          |
| ------------------------------- | ------------------- | ------------------ |
| First Derivative: Speed         | $\frac{ds}{dt}$     | $10\text{ms}^{-1}$ |
| Second Derivative: Acceleration | $\frac{d^2s}{dt^2}$ | $2\text{ms}^{-2}$  |

