---
tags:
  - pages/refined
  - dpat/adapter
---


https://refactoring.guru/design-patterns/adapter/java/example#example-0

An adapter wraps one of the objects to hide the complexity of conversion happening behind the scenes. The wrapped object isn’t even aware of the adapter.

For example:

- You can wrap an object that operates in meters and kilometres, with an adapter that converts all of the data to imperial units such as feet and miles.

**Identification:** Adapter is recognizable by a constructor which takes an instance of a different abstract/interface type. 

When the adapter receives a call to any of its methods, it translates parameters to the appropriate format and then directs the call to one or several methods of the wrapped object.

```
new interface -> adapter -> old interface
```

Adapters can not only convert data into various formats but can also help objects with different interfaces collaborate. Here’s how it works:

1. The adapter gets an interface, compatible with one of the existing objects.
2. Using this interface, the existing object can safely call the adapter’s methods.
3. Upon receiving a call, the adapter passes the request to the second object, but in a format and order that the second object expects.

> [!example]- **adapters/SquarePegAdapter.java**
> 
> ```java
> package refactoring_guru.adapter.example.adapters;
> 
> import refactoring_guru.adapter.example.round.RoundPeg;
> import refactoring_guru.adapter.example.square.SquarePeg;
> 
> /**
>  * Adapter allows fitting square pegs into round holes.
>  */
> public class SquarePegAdapter extends RoundPeg {
>     private SquarePeg peg;
> 	
>     public SquarePegAdapter(SquarePeg peg) {
>         this.peg = peg;
>     }
> 	
>     @Override
>     public double getRadius() {
>         double result;
>         // Calculate a minimum circle radius,
>         // which can fit this peg.
>         
>         result = (Math.sqrt(Math.pow((peg.getWidth() / 2), 2) * 2));
>         return result;
>     }
> }
> ```


