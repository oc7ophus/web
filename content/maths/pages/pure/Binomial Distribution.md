---
tags:
  - binomial/distribution
  - pages/refined
---

## What is a Binomial Distribution?

A binomial distribution is a a discrete probability distribution that describes the number of successes where there are two possible outcomes, under the following assumptions:

1. **Fixed Number of Trials ($n$)**: Consisting of a fixed number of independent trials, denoted by $n$. Each trial can result in one of two outcomes: success or failure.
    
2. **Independent Trials**: Each trial is independent of the others. The outcome of one trial does not affect the outcome of any other trial.
    
3. **Constant Probability of Success ($p$)**: The probability of success, denoted by $p$, remains constant from trial to trial.

> [!info]- Denotation
> If X follows a binomial distribution:
> It can be denoted as $X \sim B(n,p)$
> > [!abstract] $X \sim \dots$
> >
> > $X:$ represents a variable, likely representing the number of successes.
> > $\sim:$ (Tilda) "follows" or "is distributed as".
> 
> > [!abstract] $B(n,p)$
> > $B :$ Indicates a binomial distribution
> > $n :$ number of trials
> > $p :$ probability of success
> 
> 
> So for example: $X \sim B(20,0.5)$
> 
> We are declaring $X$ has a binomial distribution with 20 trials each with a 50% chance of success

> [!info]- Visualisation 
The distribution can be represented visually using a vertical line graph
>
> > [!abstract] $p: 0.2$ 
> > ![[Pasted image 20240419140528.png]]
> > Graph has a tail to the right
>
> > [!abstract] $p: 0.8$ 
> >  ![[Pasted image 20240419140617.png]]
> > Graph has a tail to the left
>
> > [!abstract] $p: 0.5$ 
> > ![[Pasted image 20240419140555.png]]
> > Graph is symmetrical

> [!tip] Exam Tip
> If you are asked to criticise a binomial model always consider whether the trials are independent, this is usually the one that stops a variable from following a binomial distribution!
