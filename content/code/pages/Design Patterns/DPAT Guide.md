---
tags:
  - guide
  - dpat
---


https://refactoring.guru/design-patterns/java

- Design Patterns:
	- SOLID:
		- Single Responsibility Principle
		- Open/Closed Principle
		- Liskov Substitution Principle
		- Interface Segregation Principle
		- Dependency Inversion Principle
	- Functional:
		- Pure Functions
		- Higher-Order Functions
		- Immutable Data Structures
		- Monads and Functors
	- https://refactoring.guru/design-patterns/java
	- Creational:
		- [ ] Abstract Factory
		- [ ] [[Builder]]
		- [x] [[Factory Method]]
		- [ ] Prototype
		- [ ] Singleton
	- Structural:
		- [x] [[Adapter]]
		- [ ] Bridge
		- [ ] Composite
		- [ ] Decorator
		- [ ] Facade
		- [ ] Flyweight
		- [ ] Proxy
	- Behavioural:
		- [ ] [[Chain of Responsibility]]
		- [ ] Command
		- [ ] Iterator
		- [ ] Mediator
		- [ ] Momento
		- [ ] Observer
		- [ ] State
		- [ ] Strategy
		- [ ] Template Method
		- [ ] Visitor

### **Context**

A **context** object is an object that holds all the necessary information about the environment or the situation in which a design pattern operates.
It is particularly useful in patterns like **State** or **Strategy**, where the context holds a reference to a strategy or state that governs the current behavior.

- **Example**: In the **State Pattern**, a context object keeps track of the current state of an object and delegates requests to the current state.

