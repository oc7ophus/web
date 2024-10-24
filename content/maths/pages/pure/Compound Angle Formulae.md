---
tags:
  - pure
  - trig/identities/compoundangle
  - pages/refined
---

## Derivation

$$
\begin{align}
 & \quad\quad \tan (\theta + \phi) = 
    \frac{\tan \theta + \tan \phi}{1 - \tan \theta \tan \phi} \\ 
 & \quad\quad \tan (\theta + \phi) = 
    \frac{\sin (\theta + \phi)}{\cos (\theta + \phi)} \\ \\
 & \text{Divide numerator and denominator by} \cos \theta \cos \phi
\end{align}
$$

---

## Sum and Difference

$$
\begin{align}
 & \sin (\theta + \phi) \neq \sin \theta + \sin \phi \\ \\ 
 & \sin (\theta + \phi) = \sin \theta \cos \phi + \cos \theta \sin \phi \\ 
 & \cos (\theta + \phi) = \cos \theta \cos \phi - \sin \theta \sin \phi \\ 
 & \tan (\theta + \phi) = \frac{\tan \theta + \tan \phi}{1 - \tan \theta \tan \phi}
\end{align}
$$

You can find $\sin (\theta - \phi)$ and other negative compound angle identities by flipping the operators.

$$
\begin{align}
 & \sin (\theta - \phi) = 
    \sin \theta \cos \phi - 
    \cos \theta \sin \phi \\ 
 & \cos (\theta - \phi)  = 
    \cos \theta \cos \phi + 
    \sin \theta \sin \phi \\ 
 & \tan (\theta - \phi) = 
    \frac{\tan \theta - \tan \phi}{1 + \tan \theta \tan \phi}
\end{align}
$$

As a result, you are able to write these identities with plus-minus symbols.

$$
\begin{align}
 & \sin (\theta \pm \phi) = 
    \sin \theta \cos \phi \pm \cos \theta \sin \phi \\ 
 & \cos (\theta \pm \phi) = 
    \cos \theta \cos \phi \mp \sin \theta \sin \phi \\ 
 & \tan (\theta \pm \phi) = 
    \frac{\tan \theta \pm \tan \phi}{a \mp \tan \theta \tan \phi}
\end{align}
$$

---

## Product to Sum Formulae

It can sometimes be beneficial to write functions as a sum of simpler trig functions.

$$
\begin{align}
 & \cos (\theta + \phi)  = 
    \cos \theta \cos \phi - \sin \theta \sin \phi \\ 
 & \cos (\theta - \phi) = 
    \cos \theta \cos \phi + \sin \theta \sin \phi \\ 
 & \cos (\theta + \phi) + \cos (\theta - \phi) = 
    2 \cos \theta \cos \phi \\ 
 & \cos (\theta - \phi) - \cos (\theta + \phi) = 
    2\sin \theta \sin \phi \\ \\ 
 & \text{Similar formula can be obtained using } \sin (\theta + \phi)
\end{align}
$$

---

## Worked example

> (a) Express $\tan (225^{\boldsymbol{\circ}}) - 30 ^{\boldsymbol{\circ}}$ in terms of $\tan 225^{\boldsymbol{\circ}}$ and $\tan 30 ^{\boldsymbol{\circ}}$
> 
> (b) Hence show that $\tan 195^{\boldsymbol{\circ}} = 2 - \sqrt{ 3 }$

$$
\begin{align} a)\;
 & \tan (\theta - \phi) = 
    \frac{\tan \theta - \tan \phi}{1 + \tan \theta \tan \phi} \\ 
 & \tan (225^{\boldsymbol{\circ}} - 30^{\boldsymbol{\circ}}) = 
    \frac{\tan 225^{\boldsymbol{\circ}} - \tan 30^{\boldsymbol{\circ}}}{1 + \tan 225^{\boldsymbol{\circ}} \tan 30^{\boldsymbol{\circ}}} \\ \\ 
\end{align}
$$

That's it, $\tan$ has been fully expressed in the terms we have been given.

$$
\begin{align} b)\; 
 & \tan 225^{\boldsymbol{\circ}} = 
    1 \quad\quad \tan 30^{\boldsymbol{\circ}} = 
    \frac{ \sqrt{ 3 }}{3} \\ 
 & \tan (195^{\boldsymbol{\circ}}) = \tan (225^{\boldsymbol{\circ}} - 30^{\boldsymbol{\circ}}) \\ \\
 & \r \frac{1 - \sqrt{ 3 } \div 3}{1 + (1)( \sqrt{ 3 } \div 3)} \\ 
 & \r \frac{3 - \sqrt{ 3 }}{3 + \sqrt{ 3 } } \\ \\
 & \frac{3 - \sqrt{ 3 } }{3 + \sqrt{ 3 } } \times
    \frac{3 - \sqrt{ 3 } }{3 - \sqrt{ 3 } } 
    \quad\quad \tiny\text{Rationalising denom.}
    \\ \\ 
 & \r \frac{12 - 6 \sqrt{ 3 } }{6} \\ 
 & \r 2 \sqrt{ 3 } 
\end{align}
$$


