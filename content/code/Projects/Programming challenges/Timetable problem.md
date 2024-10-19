---
tags:
  - programming
---


The University of Maths are having issues with their new timetable. They have carved up each weekday into four, 90 minute periods.

Each subject requires 4.5-5 hours of learning time per week, and students may pick up to 4 unique subjects.

The problem is, every subject UoM offers takes up three periods per week.

Each subject has two to  an equal amount of classes split between two year groups



How many possible permutations based on criteria
What is the maximum number of subjects/students




Teachers can only teach one class at a time

Input:
- Teachers:
	- Teachable subjects
	- Subject ratio preferences (1:2, etc)
	- Number of class preferences
	- Number of students per class preferences
	- Workday preferences / requirements
- Students
	- 1-4 Subject choices 
		- Subject
		- Year

Output a json list of:
- subjects
- teacher timetables
- student timetables
- any warnings (<12)

Possibly, based on data on commonly taken subjects, give a predicted timetable for the most popular subjects (Maths)
Live updating application minimum and maximum offered places

| Subject | Y1 Students | Y2 Students | Teachers |
| ------- | ----------- | ----------- | -------- |
| a       | 20          | 22          |          |
| b       | 52          | 21          |          |
| c       | 36          | 53          |          |
| d       | 26          | 21          |          |
| e       | 16          | 22          |          |
| f       | 27          | 37          |          |
| ...     | 32          | 16          |          |

Heuristics: 
- Timetable:
	- Lessons of the same subject cannot repeat (in a day || be adjacent) for the same class of students
- Teachers:
	- Prefer an even split of classes between year groups, 1:1
	- Prefer <25 students per class 
	- Prefer >12 students per class
- Students:
	- Prefer classes to be together

Limits:
- Upper student lim (per year group per teacher)
	- $2 \t{ periods} \cdot 5 \t{ days} \cdot (12 \le S \le 25)$
- Lower student lim (per year group per teacher)
	- $6 S$




# Object decomposition

Each student has:
- 1-4 Subjects, of any combination (typically 3-4)
- Student timetable

Each Student timetable has:
- Inherits timetable
- 

Each timetable has:
- Periods per day ( || $n$ periods)
- Days per week

Each Subject has:
- 3 lessons
- 

Each lesson has:
- 6-25 students (typically 12-25)
- A year group
- An occupied teacher period
- Student periods



---

To create a timetable:

Steps:
- Divide up students into appropriately sized y1 & y2 classes
- Divide up teacher periods by classes based on criteria



Students -> Subject choice

(Subject choice && Teacher criteria) -> Lesson count

Lesson count
