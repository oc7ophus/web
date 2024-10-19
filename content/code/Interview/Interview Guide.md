---
tags:
  - guide
  - interview
---

## What is it?

![Coding at the whiteboard - from HBO's Silicon Valley](https://d3j2pkmjtin6ou.cloudfront.net/coding-at-the-whiteboard-silicon-valley.png)

This is my multi-month study plan for becoming a software engineer for a large company.

**Required:**
* A little experience with coding (variables, loops, methods/functions, etc)
* Patience
* Time

Note this is a study plan for **software engineering**, not frontend engineering or full-stack development. There are really
super roadmaps and coursework for those career paths elsewhere (see https://roadmap.sh/ for more info).

There is a lot to learn in a university Computer Science program, but only knowing about 75% is good enough for an interview, so that's what I cover here.
For a complete CS self-taught program, the resources for my study plan have been included in Kamran Ahmed's Computer Science Roadmap: https://roadmap.sh/computer-science

## Why use it?

If you want to work as a software engineer for a large company, these are the things you have to know.

If you missed out on getting a degree in computer science, like I did, this will catch you up and save four years of your life.

When I started this project, I didn't know a stack from a heap, didn't know Big-O anything, or anything about trees, or how to
traverse a graph. If I had to code a sorting algorithm, I can tell ya it would have been terrible.

Every data structure I had ever used was built into the language, and I didn't know how they worked
under the hood at all. I never had to manage memory unless a process I was running would give an "out of
memory" error, and then I'd have to find a workaround.

I used a few multidimensional arrays in my life and
thousands of associative arrays, but I never created data structures from scratch.

It's a long plan. It may take you months. If you are familiar with a lot of this already it will take you a lot less time.

## Don't feel you aren't smart enough

- Successful software engineers are smart, but many have an insecurity that they aren't smart enough.
- The following videos may help you overcome this insecurity:
    - [The myth of the Genius Programmer](https://www.youtube.com/watch?v=0SARbwvhupQ)
    - [It's Dangerous to Go Alone: Battling the Invisible Monsters in Tech](https://www.youtube.com/watch?v=1i8ylq4j_EY)

## A Note About Video Resources

Some videos are available only by enrolling in a Coursera or EdX class. These are called MOOCs.
Sometimes the classes are not in session so you have to wait a couple of months, so you have no access.

It would be great to replace the online course resources with free and always-available public sources,
such as YouTube videos (preferably university lectures), so that you people can study these anytime,
not just when a specific online course is in session.

---

## Choose a Programming Language

You'll need to choose a programming language for the coding interviews you do,
but you'll also need to find a language that you can use to study computer science concepts.

Preferably the language would be the same, so that you only need to be proficient in one.

### For this Study Plan

When I did the study plan, I used 2 languages for most of it: C and Python

* C: Very low level. Allows you to deal with pointers and memory allocation/deallocation, so you feel the data structures
    and algorithms in your bones. In higher-level languages like Python or Java, these are hidden from you. In day-to-day work, that's terrific,
    but when you're learning how these low-level data structures are built, it's great to feel close to the metal.
    - C is everywhere. You'll see examples in books, lectures, videos, *everywhere* while you're studying.
    - [The C Programming Language, 2nd Edition](https://www.amazon.com/Programming-Language-Brian-W-Kernighan/dp/0131103628)
        - This is a short book, but it will give you a great handle on the C language and if you practice it a little
            you'll quickly get proficient. Understanding C helps you understand how programs and memory work.
        - You don't need to go super deep in the book (or even finish it). Just get to where you're comfortable reading and writing in C.
* Python: Modern and very expressive, I learned it because it's just super useful and also allows me to write less code in an interview.

This is my preference. You do what you like, of course.

You may not need it, but here are some sites for learning a new language:
- [Exercism](https://exercism.org/tracks)
- [Codewars](http://www.codewars.com)
- [HackerEarth](https://www.hackerearth.com/for-developers/)
- [Scaler Topics (Java, C++)](https://www.scaler.com/topics/)
- [Programiz PRO Community Challenges)](https://programiz.pro/)

### For your Coding Interview

You can use a language you are comfortable in to do the coding part of the interview, but for large companies, these are solid choices:

- C++
- Java
- Python

You could also use these, but read around first. There may be caveats:

- JavaScript
- Ruby

Here is an article I wrote about choosing a language for the interview:
[Pick One Language for the Coding Interview](https://startupnextdoor.com/important-pick-one-language-for-the-coding-interview/).
This is the original article my post was based on: [Choosing a Programming Language for Interviews](https://web.archive.org/web/20210516054124/http://blog.codingforinterviews.com/best-programming-language-jobs/)

You need to be very comfortable in the language and be knowledgeable.

Read more about choices:
- [Choose the Right Language for Your Coding Interview](http://www.byte-by-byte.com/choose-the-right-language-for-your-coding-interview/)

[See language-specific resources here](Prog%20lang%20Resources.md)

---

## The Daily Plan

This course goes over a lot of subjects. Each will probably take you a few days, or maybe even a week or more. It depends on your schedule.

Each day, take the next subject in the list, watch some videos about that subject, and then write an implementation
of that data structure or algorithm in the language you chose for this course.

You can see my code here:
 - [C](https://github.com/jwasham/practice-c)
 - [C++](https://github.com/jwasham/practice-cpp)
 - [Python](https://github.com/jwasham/practice-python)

You don't need to memorize every algorithm. You just need to be able to understand it enough to be able to write your own implementation.

## Coding Question Practice

    Why is this here? I'm not ready to interview.

[Then go back and read this.](#3-do-coding-interview-questions-while-youre-learning)

Why you need to practice doing programming problems:
- Problem recognition, and where the right data structures and algorithms fit in
- Gathering requirements for the problem
- Talking your way through the problem like you will in the interview
- Coding on a whiteboard or paper, not a computer
- Coming up with time and space complexity for your solutions (see Big-O below)
- Testing your solutions

There is a great intro for methodical, communicative problem-solving in an interview. You'll get this from the programming
interview books, too, but I found this outstanding:
[Algorithm design canvas](http://www.hiredintech.com/algorithm-design/)

Write code on a whiteboard or paper, not a computer. Test with some sample inputs. Then type it and test it out on a computer.

If you don't have a whiteboard at home, pick up a large drawing pad from an art store. You can sit on the couch and practice.
This is my "sofa whiteboard". I added the pen in the photo just for scale. If you use a pen, you'll wish you could erase.
Gets messy quickly. **I use a pencil and eraser.**

![my sofa whiteboard](https://d3j2pkmjtin6ou.cloudfront.net/art_board_sm_2.jpg)

**Coding question practice is not about memorizing answers to programming problems.**

## Coding Problems

Don't forget your key coding interview books [here](#interview-prep-books).

Solving Problems:
- [How to Find a Solution](https://www.topcoder.com/thrive/articles/How%20To%20Find%20a%20Solution)
- [How to Dissect a Topcoder Problem Statement](https://www.topcoder.com/thrive/articles/How%20To%20Dissect%20a%20Topcoder%20Problem%20Statement%20Content)

Coding Interview Question Videos:
- [IDeserve (88 videos)](https://www.youtube.com/playlist?list=PLamzFoFxwoNjPfxzaWqs7cZGsPYy0x_gI)
- [Tushar Roy (5 playlists)](https://www.youtube.com/user/tusharroy2525/playlists?shelf_id=2&view=50&sort=dd)
    - Super for walkthroughs of problem solutions
- [Nick White - LeetCode Solutions (187 Videos)](https://www.youtube.com/playlist?list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-)
    - Good explanations of the solution and the code
    - You can watch several in a short time
- [FisherCoder - LeetCode Solutions](https://youtube.com/FisherCoder)

Challenge/Practice sites:
- [LeetCode](https://leetcode.com/)
    - My favorite coding problem site. It's worth the subscription money for the 1-2 months you'll likely be preparing.
    - See Nick White and FisherCoder Videos above for code walk-throughs.
- [HackerRank](https://www.hackerrank.com/)
- [TopCoder](https://www.topcoder.com/)
- [Codeforces](https://codeforces.com/)
- [Codility](https://codility.com/programmers/)
- [Geeks for Geeks](https://practice.geeksforgeeks.org/explore/?page=1)
- [AlgoExpert](https://www.algoexpert.io/product)
    - Created by Google engineers, this is also an excellent resource to hone your skills.
- [Project Euler](https://projecteuler.net/)
    - very math-focused, and not really suited for coding interviews
