---
tags:
  - trig/identities/doubleangle
  - pages/refined
  - pure
---
## Derivation

1. $\sin 2\theta \equiv 2 \sin \theta \cos \theta$

$$
\begin{align}
 & \sin (\theta + \phi) \equiv \sin \theta \cos \phi + \cos \theta \sin \phi \\ 
 & \text{Let } \phi = \theta,\quad   \text{Then} \\
 & \hspace{2.7cm}\begin{aligned}
\sin (2\theta) & = \sin (\theta + \theta) \\ 
 & = \sin \theta \cos \theta + \cos \theta \sin \theta \\ 
 & = 2 \sin \theta \cos \theta
\end{aligned}
\end{align}
$$

2. $\cos 2\theta \equiv \cos^{2}\theta - \sin^{2}\theta \equiv 2 \cos^{2}\theta - 1 \equiv 1 - 2 \sin^{2}\theta$

$$
\begin{align}
 & \cos (\theta + \phi) \equiv \cos \theta \cos \phi - \sin \theta \sin \phi \\ 
 & \text{Let } \phi = \theta,\quad   \text{Then} \\
 & \hspace{2.7cm}\begin{aligned}
\cos (2\theta) & \equiv \cos (\theta + \theta) \\ 
 & \equiv \cos \theta \cos \theta - \sin \theta \sin \theta \\ 
 & \equiv \cos^{2}\theta - \sin^{2}\theta
\end{aligned} \\ \\ 
 & \begin{aligned}
 & \cos (2\theta) \equiv \cos^{2}\theta - \sin^{2}\theta \\ 
 & \cos^{2}\theta \equiv \cos (2\theta) + \sin^{2}\theta \\ 
 & 2\cos^{2}\theta \equiv \cos (2\theta) + \sin^{2}\theta + \cos^{2}\theta \\ \\
 & \quad \quad \cos (2\theta) \equiv 2 \cos^{2}\theta - 1 \\ \\ 
 & (2\cos^{2}\theta - 1) + \sin^{2} \theta + \cos^{2} \theta \equiv 2\cos^{2}\theta \\ 
 & \sin^{2}\theta + \cos^{2}\theta \equiv 1
\end{aligned} \\
\end{align}
$$

3. $\tan 2\theta \equiv \frac{2\tan \theta}{1 - \tan^{2}\theta}$

$$
\begin{align}
 & \tan (\theta + \phi) \equiv \frac{\tan \theta + \tan \phi}{1 - \tan \theta \tan \phi} \\ \\
 & \text{Let } \phi = \theta,\quad   \text{Then} \\
 & \hspace{2.7cm}\begin{aligned}
\tan (2\theta)
 & \equiv \tan (\theta + \theta) \\ 
 & \equiv \frac{\tan \theta + \tan \theta}{1 - \tan \theta \tan \theta} \\ 
 & \equiv \frac{2\tan \theta}{1 - \tan^{2} \theta}
\end{aligned}
\end{align}
$$

---

## Worked example

> Show that $7\sin 2\theta - 3\sin \theta = 0$ can be written in the form:
> 
> $$
> a \sin \theta (b\cos \theta + c) = 0
> $$
> 
> stating the values of $a, b$ and $c$.

$$
\begin{align}
 & \text{Using the double angle formula} \\ \\
 & \quad \quad 7 \sin 2\theta = 7(2\sin \theta \cos \theta) \\ 
 & \quad \quad 7\sin 2\theta= 14 \sin \theta \cos \theta \\ \\
 & \text{We can substitute this into our equation} \\ \\
 & \quad \quad 14\sin \theta \cos \theta - 3\sin \theta = 0 \\ 
 & \quad \quad \sin \theta (14 \cos \theta - 3) = 0 \\ \\ 
 & \therefore\; a = 1, \quad b = 14,\quad 3 = -3
\end{align}
$$

> Hence solve, for $0 \leq \theta < 360^{\boldsymbol{\circ}}$, the equation $7\sin 2\theta - 3\sin \theta = 0$
> 
> Give your answers to 1 decimal place.

$$
\begin{align}
 & \sin \theta (14 \cos \theta - 3) = 0 \\ 
 & \text{So } \sin \theta = 0 \quad \text{or} \quad \cos \theta = \frac{3}{14} \\ 
 & \text{If } \sin \theta = 0 \\ \\
 & \quad \quad \quad \theta = 0 \quad \text{or} \quad \theta = 180 \\ \\ 
 & \text{If } \cos \theta = \frac{3}{14} \\ \\
 & \quad \quad \quad \theta = 77.63 \quad \text{or} \quad \theta = 360 - 77.63 \\ \\ 
 & \therefore\; \theta = 0^{\boldsymbol{\circ}},\,  77.6^{\boldsymbol{\circ}},\, 180^{\boldsymbol{\circ}}, \, 282.4^{\boldsymbol{\circ}} \;(1\;\text{d.p.})
\end{align}
$$
