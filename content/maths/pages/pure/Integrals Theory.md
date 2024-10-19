---
tags:
  - pages/refined
  - integrals
  - proofs
  - pure
---

 
 Integration can be used to find areas, volumes, central points and many useful things. But it is easiest to start with finding the area between a function and the $x-$axis like this:

![[Pasted image 20240430175432.png]]

## Slices

We could calculate the function at a few points and add up slices of width $\d x$ like this (but the answer won't be very accurate):

![[Pasted image 20240430175536.png]]

We can make $\d x$ a lot smaller and add up many small slices (answer is getting better):

![[Pasted image 20240430175619.png]]

And as the slices approach zero in width, the answer approaches the true answer.

![[Pasted image 20240430175648.png]]

We now write $\t {dx}$ to mean the $\d x$ slices are approaching zero in width $(x \rightarrow 0)$

Finding an Integral is the reverse of finding a Derivative

![[Pasted image 20240430175901.png]]

## Notation

The symbol for "Integral" is an "S" for "Sum", the idea of summing slices: 

$\intop x {\,_{\mathrm{dx}}}$

After the Integral Symbol we put the function we want to find. This is called the Integrand.

Finally, we end with $\t{dx}$ to mean the slices go in the $x$ direction approaching zero in width.

And here is how you write the answer:

$\intop 2x {\,_{\mathrm{dx}}} = x^2 + C$

## Plus C

$+C$ is the "Constant of Integration". It is there because the derivative of a constant is zero.

So when we reverse the operation to find the integral, we know about $2x$, but there could also be a constant of any value.

## Practical Example: Tap and Tank

Let us use a tap to fill a tank.

The input is the flow rate from the tap. We can integrate that flow to give us the volume of water in the tank.

Imagine a Constant Flow Rate of 1:

![[Pasted image 20240430180637.png]]

With a flow rate of 1, the tank volume increases by x. That is Integration.

## Now For An Increasing Flow Rate

Imagine the flow starts at 0 and gradually increases (maybe a motor is slowly opening the tap):

![[Pasted image 20240430181034.png]]

As the flow rate increases, the tank fills up faster and faster:
- Integration: With a flow rate of $2x$, the tank volume increases by $x^2$
- Derivative: If the tank volume increases by $x^2$, then the flow rate must be $2x$

The integral of the flow rate $2x$ tells the volume of the water:
$\intop 2x {\,_{\mathrm{dx}}} = x^2 + C$

The derivative of the volume $x^2+C$ gives us back the flow rate:
$\frac{d}{dx} (x^2+C) = 2x$

![[Pasted image 20240430181352.png]]


## Example:

$\intop 2x \sqrt x + 3e ^{2x}$

$\r \intop 3e^{2x} + 2x^{3/2}$

$\r \frac{3e^{2x}}{2} + \frac{2x^{5/2}}{5/2}$

$\r \frac{3}{2}e^{2x} + \frac{4}{5}x^{5/2}$

