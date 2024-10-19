---
tags:
  - pages/dirty
  - dpat/factory
---

The Factory Method pattern suggests that you replace direct object construction calls (using the `new` operator) with calls to a special _factory_ method.

Don’t worry: 

- The objects are still created via the `new` operator, but it’s being called from within the factory method. 
- Objects returned by a factory method are often referred to as _products._

![[Pasted image 20240814212523.png]]

At first glance, this change may look pointless: we just moved the constructor call from one part of the program to another. However, consider this: now you can override the factory method in a subclass and change the class of products being created by the method.

There’s a slight limitation though: subclasses may return different types of products only if these products have a common base class or interface. Also, the factory method in the base class should have its return type declared as this interface.