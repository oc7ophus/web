---
tags:
  - pages/refined
  - dsa/linked-lists
---

There are two ways to maintain a list in memory:

Arrays [ {1}, {2}, {3}, {4}, {5} ]
list: [ {data, addr} -> {data, addr} -> ... ]

Arrays have some limitations and disadvantages (cont)

Single Linked List: Navigation is forward only
Doubly Linked List: Navigation is bidirectional
Circular Linked List: Last element is linked to the first element

### Single Linked List

A single linked list is a list made up of nodes that consists of two parts

- Node
	- Data
		- Contains the actual information
	- Link
		- Contains the address of the next node of the list

Representation of a single linked list:

[{23, 2000}]
address: 1000

[{56, 3000}]
address: 2000

[{75, 4000}]
address: 3000

[{89, null}]
address: 4000

But how do we access the first node of the linked list?:

head: 1000

[{23, 2000}]
address: 1000

...

---

Node class

```java
node() {
	this.data = null
	this.link = null
}
```