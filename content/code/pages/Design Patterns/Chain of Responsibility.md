---
tags:
  - pages/refined
  - dpat/chain-of-responsibility
---


**Chain of Responsibility** is a behavioural design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

![[Pasted image 20240814211924.png]]

Like many other behavioural design patterns, the **Chain of Responsibility** relies on transforming particular behaviours into stand-alone objects called _handlers_.

In our case, each check should be extracted to its own class with a single method that performs the check. The request, along with its data, is passed to this method as an argument.

![[Pasted image 20240814211908.png]]

1. The **Handler** declares the interface, common for all concrete handlers. It usually contains just a single method for handling requests, but sometimes it may also have another method for setting the next handler on the chain.
    
2. The **Base Handler** is an optional class where you can put the boilerplate code that’s common to all handler classes.
    
    Usually, this class defines a field for storing a reference to the next handler. The clients can build a chain by passing a handler to the constructor or setter of the previous handler. The class may also implement the default handling behavior: it can pass execution to the next handler after checking for its existence.
    
3. **Concrete Handlers** contain the actual code for processing requests. Upon receiving a request, each handler must decide whether to process it and, additionally, whether to pass it along the chain.
    
    Handlers are usually self-contained and immutable, accepting all necessary data just once via the constructor.
    
4. The **Client** may compose chains just once or compose them dynamically, depending on the application’s logic. Note that a request can be sent to any handler in the chain—it doesn’t have to be the first one.

```diff
// 1. Handler (BaseHandler child)

+ setNext(h: Handler)
+ handle(request)

// 2. BaseHandler

+ setNext(h: Handler)
+ handle(request)

	if (next != null):
		next.handle(request)

// 3. ConcreteHandlers

+ handle(request)

	if (canHandle(request)):
		// ...
	else:
		parent::handle(request)

// 4. Client

	h1 = new HandlerA()
	h2 = new HandlerB()
	h3 = new HandlerC()
	
	h1.setNext(h2)
	h2.setNext(h3)
	// ...
	
	h1.handle(request)

```

