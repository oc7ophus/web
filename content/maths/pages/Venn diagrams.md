---
tags:
  - pages/dirty
  - stats
---

![[Pasted image 20240316030116.png]]

![[Pasted image 20240316030128.png]]


Venn diagram page
	Mutual exclusivity
	Addition law
	Order of operations (Multiplication law)
	[Venn Source](https://www.savemyexams.com/a-level/maths_statistics/edexcel/18/revision-notes/3-probability/3-1-basic-probability/3-1-2-venn-diagrams/)
	Probability notation in questions

## Order
AND before OR (double check?)

## Union $\cup$

$P(A\cup B)$
$(A + B)$
"A or B"

Inclusive OR

## Intersection $\cup$

$P(A \cap B)$
$(A \land B)$
"A and B"

Exclusive AND

## Tri Venn

$P(A \cup B \cap C)$

*Nasty question; because there is no bracket. You have to use logical order*

$(A \cup (B \cap C))$

$(B \cap C)$

$((A \cup B) \cap C)$

$(A \cup B)$

Try out thinking about nots as negative area and add together

$P((A\cap B')')$

$\r P(A'\cup B)$


$\circ A(0.6)$
$\circ B (0.5)$
$P(A\cap B) = 0.3$
$\therefore P(A \cup B') = 0.3, P(A' \cup B) = 0.2$

Addition law:
$P(A\cup B) = P(A) + P(B) - P(A\cap B)$

A person picked at random attends the gym session. What is the probability that they are female?

$P(10/17)$
$P(G \cap F)$

| Activity | Gym | Circuit | Pilates | Total  |
| -------- | --- | ------- | ------- | ------ |
| M        | 7   | a (12)  | 1       | 20     |
| F        | 10  | b (8)   | c (7)   | d (25) |
| Total    | 17  | 20      | 8       | e (45) |

---

Events A and B are independent if knowing the outcome of A does not affect the probability of B.
This can be written as P(B) = P(B|A) or in words.

For example, rolling a die and flipping a coin.

---

|         | Walk | Cycle | Bus  | (Total) |
| ------- | ---- | ----- | ---- | ------- |
| Rita    | 0.65 | 0.10  | 0.25 | 1       |
| Said    | 0.40 | 0.45  | 0.15 | 1       |
| Ting    | 0.25 | 0.55  | 0.20 | 1       |
| (Total) | 1.30 | 1.10  | 0.60 | 3       |

Calculate the probability that, on any given school-day morning

1. all 3 students walk to school

$R(0.65) \times S(0.40) \times T(0.25)$
$\r 0.065$

2. only rita travels by bus to school

$R(0.25) \times S(0.15') \times T(0.20')$
$\r 0.25 \times 0.85 \times 0.8$
$\r P(RB \cap SB' \cap TB') = 0.17$

3. at least 2 of the 3 students cycle to school

$P((RC \cap SC) \cup (SC \cap TC) \cup (RC \cap SC) \cup (RC \cup SC \cup TC))$
---

#### Worked example

40 people were surveyed regarding which games consoles they owned.

8 people said they owned a Playstation 5 $(P)$ and an Xbox Series X $(X)$; 
11 people said they owned a Playstation 5 $(P)$ and a Nintendo Switch $(N)$;
7 people said they owned an Xbox Series X $(X)$ and a Nintendo Switch $(N)$.

4 people said they owned none of these consoles whilst 2 people said they owned all 3.

Of those people that owned only one games console, twice as many owned a Nintendo Switch as a Playstation 5 and half as many owned an Xbox Series X as a Playstation 5.

(a) Draw a complete Venn diagram to illustrate the information given above.

(b) One of the 40 people is chosen at random. Find the probability that this person

(i)owns all three consoles,
(ii)owns exactly two consoles,
(iii)doesn’t own a Playstation 5.

(c) Determine if the events X and N are independent.


$S(P \cap X) = 8$
$S(P \cap N) = 11$
$S(X \cap N) = 7$

$S((P \cup X)') = 4$
$S(P \cap N \cap X) = 2$


















