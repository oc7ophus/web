---
tags:
  - pages/refined
  - dsa/dynamic-array
---


[coursera](https://www.coursera.org/lecture/data-structures/dynamic-arrays-EwbnV)

Problem: static arrays are static!

```c
int my_array[100];
```

Static arrays are static, once declared, they can't change size. 
And that size must be determined at compile time

Semi-solution: dynamically-allocated arrays:

```c
int *my_array = new int[size];
```

Here, you can allocate the array, determining the size of the array at runtime, which gets allocated from dynamic memory

Problem: might not know max size when allocating an array?

i.e. Reading a lot of numbers into an array

- "All problems in computer science can be solved by another level of indirection"

Here we use a level of indirection.
Rather than directly storing a reference to the either static or dynamically allocated array, we're going to store a pointer.

If we start adding more and more elements, we add too many, we can go ahead and allocate a new array, copy over the old elements, delete the old array and update our pointer to the new array.

These are called Dynamic arrays, and are defined as:
- Abstract data type with the following operations (at a minimum):
	- `Get(i):` returns element at location `i*`
	- `Set(i, val):` Sets element `i` to `val*`
	- `PushBack(val):` Adds `val` to the end
	- `Remove(i):` Removes element at location `i`
	- `Size():` Returns number of elements

Implementation:
- Store:
	- `arr:` dynamically-allocated array
	- `capacity:` size of the dynamically-allocated array
	- `size:` number of elements currently in the array

Example:

| init |     | size: 0 | cap: 2 |
| ---- | --- | ------- | ------ |
| arr* | arr |         |        |

| PushBack(A) |     | size: 1 | cap: 2 |
| ----------- | --- | ------- | ------ |
| arr*        | arr | A       |        |

| PushBack(B) |     | size: 2 | cap: 2 |
| ----------- | --- | ------- | ------ |
| arr*        | arr | A       | B      |

Now, the size is equal to it's capacity which means our dynamically allocated array is full.
So, if we get asked to do another PushBack, we have got to allocate a new dynamically allocated array.

| PushBack(C) |     | size: 2 | cap: 2 |
| ----------- | --- | ------- | ------ |
| arr*        | arr | A       | B      |

We're going to make that larger, and then copy over each of the elements from the old array, to our new array

|     |     | size: 0 | cap: 4 |     |     |
| --- | --- | ------- | ------ | --- | --- |
|     | arr |         |        |     |     |

Once the elements are copied over, we can go ahead and update our array pointer to this new dynamically allocated array and then dispose of the old array.

|     |     | size: 0 | cap: 4 |     |     |
| --- | --- | ------- | ------ | --- | --- |
|     | arr | A       | B      |     |     |

At this point now, we finally have our new dynamically allocated array which has room to push another element.

|     |     | size: 0 | cap: 4 |     |     |
| --- | --- | ------- | ------ | --- | --- |
|     | arr | A       | B      | C   |     |

Implementation
- `Get(i)`
	- $\t {if}\; i < 0 \;\t{or}\; i \me \t {size}:$
		- $\t{ERROR: index out of range}$
	- $\t{return} \; \t{arr}[i]$
- `Set(i,val)`
	- $\t {if}\; i < 0 \;\t{or}\; i \me \t {size}:$
		- $\t{ERROR: index out of range}$
	- $\t{arr}[i] = \t{val}$


> [!example] Get(i)
> 
> ```c
> if (i < 0 || i >= size):
> 	ERROR: index out of range
> return arr[i]
> ```

> [!example] Set(i, val)
> 
> ```c
> if (i < 0 || i >= size):
> 	ERROR: index out of range
> arr[i] = val
> ```

> [!example] PushBack(val)
> 
> ```c
> if size = capacity:
> 	allocate new_arr[2 * capacity]
> 	for i from 0 to size - 1:
> 		new_arr[i] <- arr[i]
> 	free arr
> 	arr <- new_arr; capacity <- 2 * capacity
> arr[size] <- val
> size <- size + 1
> ```

> [!example] Remove(i)
> 
> ```c
> if i < 0 or i >= size:
> 	ERROR: index out of range
> for j from i to size - 2:
> 	arr[j] <- arr[j + 1]
> size <- size - 1
> ```

> [!example] Size()
> ```
> return size
> ```

Common implementations:
- c++: `vector`
- Java: `ArrayList`
- Python: `list` (the only kind of array)

| Runtimes      |      |
| ------------- | ---- |
| Get(i)        | O(1) |
| Set(i, val)   | O(1) |
| PushBack(val) | O(n) |
| Remove(i)     | O(n) |
| Size()        | O(1) |

Summary:
- Unlike static arrays, dynamic arrays can be resized.
- Appending a new element to a dynamic array is often constant time, but can take O(n)
- Some space is wasted
- Dynamic Arrays can also be resized smaller
