
Find prime factors:

```

2000002

2 * 101 * ...

2000000
2^7 * 5^6

1999998
2* 3^3 * ...

1999996
2^2 * 31 * ...

1999994
2 * 757 * ...

...

200
2^3 * 5^2

198
2 * 3^2 * 11

196
2^2 * 7^2

...

24
2^3 * 3

22
2 * 11

20
2^2 * 5

18
2 * 3^2

16
2^4

14
2 * 7

12
2^2 * 3

```


Let $n$ be an even integer $(1<n<10^{18})$.

1. The integer $n$ has either $2^x$ or $2^1$ prime factors of $2$.
2. If $n$ has $2^x$ prime factors of $2$, then $n-2$ must have exactly $2^1$, and vice versa.




---


I realized that during some edgecases, you could possibly obtain more cards somehow

```yaml
alice will take 1 card 0 times

n = 24
aliceTotal = 16
bobTotal = 8

alice will take 1 card 1 time

n = 24
aliceTotal = 20
bobTotal = 4

alice will take 1 card 2 times

n = 24
aliceTotal = 14
bobTotal = 10

alice will take 1 card 3 times

n = 24
aliceTotal = 17
bobTotal = 7
```

I first started by analysing the question, creating a document where i tried to wrap my head around this problem.

On the surface, this problem looked very simple. I first came to the conclusion that the ideal strategy would be to take half every time where possible.

If each player did so, they could get an advantage of $\frac{1}{2}n-1$ or $\frac{1}{4}n$ each turn. Whereas if both players took 1 card, they would both end up with $\sim \frac{1}{2}n$

I soon got an idea of a more optimal way of playing, and asked about it to one of my friends at the time

> im doing the alice and bob question
> but im trying to find out if there's any edgecases where taking one card would be more beneficial than half
> i was thinking of a case where by imposing your opponent into having an odd number, you are able to take half twice or something
> 
> no
> 
> no?
> 
> doesn't seem like it
> 
> hmm
> maybe im overthinking it

well, it looked like the challenge was solved. i was pretty sure that there couldn't really be a better way of playing. but just to make sure.... I started looking if there were any cases where opting not to take half the cards would be optimal.

I tried my best to analyse the numbers, and break down each iteration step by step

$n = 16$
$+1; -1$
$n = 14$
$+7 \;(7)$
$-1\; (6)$
$+3\; (3)$
$-1\; (2)$
$+1 \;(1)$
$-1$

$n = 14: +11; \; -3$
$n = 16: +12; -4$

$n = 16$
$+8\; (8)$
$-4\; (4)$
$+2\; (2)$
$-1\; (1)$
$+1$

$+11; \;-5$

After inconclusive tests, i dove deeper into the game, mapping out all possible actions and states of the game.

` 1 `
- impose opponent to skip their turn
- decrease number $-2$

`1/2 -> odd`
- impose opponent to skip their turn
- $-\frac{1}{2} n$ deck value
- $n-1$ advantage

`1/2 -> even`
- opponent has their turn
- $-\frac{3}{4}n$ deck value
- $\frac{1}{4}$ advantage

Here, I realised that the action of taking one card each was much more useful than I first thought. Sure, it didn't guarantee you a $\frac{1}{4}n$ advantage, but it could be used to change the deck value, and by extension, the properties of the numbers.

it was here where I started looking at each numbers' prime factors, having the idea to compare those values somehow.

 
$2^3\times 5 = 40$
+1 -1 -> 38
+20 -10 -> 10

$2 \times 19 = 38$
+1 -1 -> 36
+19 -1 -> 18

$2 \times 3^2= 18$


$2^2 \times 5 = 20$


Unfortunately, this appeared to be a waste of time, as I couldn't really get anything to work. I took this time to make a quick and dirty implementation of always taking half the cards when possible.

then, i decided to do a little test. just to satisfy my curiosity and make sure there weren't any edgecases.

Instead of always taking half when possible, Alice would take 1 card $x$ number of times.

n = 24 ; x = 0
aliceTotal = 16 
bobTotal = 8

n = 24 ; x = 1
aliceTotal = 20 
bobTotal = 4

hmm, thats interesting. I had realised that for some numbers, taking one card once, then half the rest of the time would be beneficial.

I had boiled it down to:
if alice had an even number, 2n, she could make the decision to decrease the number of cards by 2 for free, as they would both be guaranteed to get one point, with bob never having the opportunity to take half of the cards.

> it varies a lot but i'm sure theres something here
> i believe now what i have to do is make a tree or minimax or something
> since its such a simple game brute forcing it would probably be faster and easier than finding some mathematical way i'm too stupid to figure out
> i was thinking of adding checks to see if after halving, if the number of cards are odd or even and determining if it's worth it that way
> or alternatively finding all the prime factors since they contain all the 2's ? but im pretty sure thats a goofy idea

so logically, the next step seemed to be creating a tree, as I wasn't sure when it would be beneficial to take one card. we could instead find all the possibilities.

However, i quickly ran into a big issue. the author of the challenge had set the limits of n to 1-10e18. which, for my solution, was not good.

at first, i considered some sort of optimization like alpha beta pruning to speed up the algorithm, then multithreading, with no real luck.

taking a step back, i wondered if it was even possible to brute force this realistically

$2 ^n \le 10^{18}$

$n = \log_2(10^{18})$

$\log_2(10^{18}) = \frac{\log_{10}(10^{18})}{\log_{10}(2)}$

$n = [ \frac{18}{0.3010} ] \approx [59.7947]$

$59! \approx 1.3\e {80}$

> suppose each node takes 2ms to compute fully
> that would take longer than how long it would take the last black holes in the universe to decay
> 1.7e108
> and 9.6e138
> :(
> 
> author is from the future
> this can be done in 10 seconds on a single thread on their supercomputers in 7 years

I used this revelation to take a step back, and rethink what I knew so far.

I took the time to look through some comments on people who had attempted the same programming challenge

![[Pasted image 20240812045420.png]]
![[Pasted image 20240812045516.png]]

hmm.....

I quickly came to the realization that a brute force solution would be pretty bad.

not only would my barely-working solution break down if the challenge decided to choose bigger numbers, i felt this approach was pretty thoughtless. and I had to be missing something.

so, i went back to looking at the numbers. I started manually finding the prime factors for a handful of numbers, trying to see if there was some pattern i could find.

i realised that looking at the prime factors of any odd number would be pretty useless for my use-case, as you would only ever be able to take 1 card

so, I looked at all even numbers decrementing by 2, and looked at their prime factors.

```
2000000
2^7 * 5^6

1999998
2* 3^3 * ...

1999996
2^2 * 31 * ...

...

200
2^3 * 5^2

198
2 * 3^2 * 11

196
2^2 * 7^2

...

20
2^2 * 5

18
2 * 3^2

16
2^4

```

hmm, it looks like by taking away two from the card total, the prime factors of two would flip flop from 2^x to 2^1. i wonder if this works for all numbers? so, i wrote a quick script that would see if this pattern would really work

```java
package org.example;

public class Main {
    private static final long two = 2L;
    private static final long LOWER_LIMIT = 4L;
    private static final long UPPER_LIMIT = 10000000L; // 10^18
//    private static final long UPPER_LIMIT = 1000000000000000000L; // 10^18
    
    public static void main(String[] args) {
        
        int lastResult = primeFactors(LOWER_LIMIT + 2);
        
        for (long i = LOWER_LIMIT; i < UPPER_LIMIT; i += 2) {
            int currentResult = primeFactors(i);
            
            boolean isValidPattern = (lastResult == 1 && currentResult > 1) ||
                                    (lastResult > 1 && currentResult == 1);
            
            if (!isValidPattern) {
                System.out.println("Error! Pattern invalid at " + i);
                return;
            }
            
            System.out.println(currentResult);
            lastResult = currentResult;
        }
        System.out.println("All patterns matched");
    }
    
    public static int primeFactors(long n)
    {
        int i = 0;
        // Print the number of 2s that divide n
        while (n % two == 0) {
            n /= 2;
            i++;
        }
        return i;
    }
}
```

```
2
1
3
1
2
1
4
1
2
1
3
1
2
1
All patterns matched 
```

hmm... this pattern showed that seemingly every other large number (of 2n -> 2n-2) would flip flop from 1 prime factor of two, to many.

ignoring the fact that i was yet again, bashing my head against a brick wall by wrangling with this gargantuan number, I was 99% sure I could use this to find the solution. so, I drew up a conjecture

Let $n$ be an even integer $(1<n<10^{18})$. 

1. The factorization $n = 2^k\times m,$ where $m$ is odd, is either $2^x$ $(x \me 0)$ or $k = 1$
2. If $n = 2^k \times m$ with $k = 2^x$, then $n-2$ has $k = 2^1$, and vice versa.

in simple terms, if we have an even integer with one prime factor of two (2*3^2*5...), we can expect that even integer minus two to have MORE than one prime factor of two
and vice versa

say we have 200 cards on alice's turn
200 = 2^3 * 5^2
200 has more than one prime factor of two, meaning the optimal move would be to take one card, as this reduces the total number of cards by two
198 = 2 * 3^2 * 11
now, 198 has only ONE prime factor of two, as our conjecture says
the optimal move is now to take half of the cards, as we know that bob will never get an even number, and therefore will not take 25% of 200
we know this because if our number has no prime factors of two, it must be odd
3^2 * 11 = 99
and from here we can rinse and repeat

I had finally put the pieces together, i could use this to create a great solution.

i decided to 

we can do two checks, n%2 == 0 to determine if we have the option of taking half or not, then n%4 == 0 to determine if we should take 1 to convert our number into one with one prime factor of 2 or not
Alice wants only ONE prime factor of 2 on her turn, because this means all other numbers are odd for bob
i'm not very confident that this'll work 100% of the time though

```java
public static long getAliceMax(long cardInput) { 
	if (cardInput == 1) {  
		return 1;  
	}
	
	if (cardInput % 2 != 0) {
		return cardInput - calculateMax(cardInput - 1);
	}
	return calculateMax(cardInput);
}

private static long calculateMax(long numberOfCards) {
	long maxScore = 0;
	 
	while (numberOfCards > 4) { 
		if (numberOfCards % 4 == 0) {
			numberOfCards -= 2;  
			maxScore++;  
		}
		numberOfCards /= 2;  
		maxScore += numberOfCards;  
		numberOfCards--;
	}
	
	/* 
		edgecase where 4's prime factors
		are 2^k * 0, instead of 2^k * m
		this causes the player to erroneously
		take 1 card, instead of 2 
	*/
	
	if (numberOfCards == 4) {
		numberOfCards /= 2;
		maxScore += numberOfCards;
	}
	maxScore++;
		
	return maxScore;  
}

```