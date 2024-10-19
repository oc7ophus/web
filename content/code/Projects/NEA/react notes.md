[Chapter 2](https://nextjs.org/learn/react-foundations/rendering-ui)

When a user visits a web page, the server returns an HTML file to the browser

The browser then reads the HTML and constructs the Document Object Model (DOM).

![[Pasted image 20240910150736.png]]

The DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships.

![[Pasted image 20240910150757.png]]

You can use DOM methods and JavaScript, to listen to user events and [manipulate the DOM](https://developer.mozilla.org/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) by selecting, adding, updating, and deleting specific elements in the user interface. DOM manipulation allows you to not only target specific elements, but also change their style and content.

[Chapter 3](https://nextjs.org/learn/react-foundations/updating-ui-with-javascript)

[NEA/testCode/index.html]

<html>
  <body>
    <div id ="app"></div>
    <script type="text/javascript">
      // Select the div element with 'app' id
      const app = document.getElementById('app');
      
      const header = document.createElement('h1'); // Creates a new h1 element
      
      const text = 'hello.';
      const headerContent = document.createTextNode(text);
      
      header.appendChild(headerContent);
      
      app.appendChild(header);
    </script>
  </body>
</html>
<html>
  <body>
    <div id ="app"></div>
    <script type="text/javascript">
      // Select the div element with 'app' id
      const app = document.getElementById('app');
      
      const header = document.createElement('h1'); // Creates a new h1 element
      
      const text = 'hello.';
      const headerContent = document.createTextNode(text);
      
      header.appendChild(headerContent);
      
      app.appendChild(header);
    </script>
  </body>
</html>
<html>
  <body>
    <div id ="app"></div>
    <script type="text/javascript">
      // Select the div element with 'app' id
      const app = document.getElementById('app');
      
      const header = document.createElement('h1'); // Creates a new h1 element
      
      const text = 'hello.';
      const headerContent = document.createTextNode(text);
      
      header.appendChild(headerContent);
      
      app.appendChild(header);
    </script>
  </body>
</html>
```html
<html>
  <body>
    <div id ="app"></div>
    <script type="text/javascript">
      // Select the div element with 'app' id
      const app = document.getElementById('app');
      
      const header = document.createElement('h1'); // Creates a new h1 element
      
      const text = 'hello.';
      const headerContent = document.createTextNode(text);
      
      header.appendChild(headerContent);
      
      app.appendChild(header);
    </script>
  </body>
</html>
```

## HTML vs. the DOM

If you look at the DOM elements inside your [browser developer tools](https://developer.mozilla.org/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools), you will notice the DOM includes the `<h1>` element. The DOM of the page is different from the source code - or in other words, the original HTML file you created.

![[Pasted image 20240910151328.png]]

This is because the HTML represents the **initial page content**, whereas the DOM represents the **updated page content** which was changed by the JavaScript code you wrote.

Updating the DOM with plain JavaScript is very powerful but verbose. You've written all this code to add an `<h1>` element with some text:

```html
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const text = 'Develop. Preview. Ship.';
  const headerContent = document.createTextNode(text);
  header.appendChild(headerContent);
  app.appendChild(header);
</script>```


## Imperative vs Declarative programming

The code above is a good example of **imperative** **programming.** You're writing the steps for **how** the user interface should be updated. But when it comes to building user interfaces, a declarative approach is often preferred because it can speed up the development process. Instead of having to write DOM methods, it would be helpful if developers were able to declare **what** they want to show (in this case, an `h1` tag with some text).

In other words, **imperative programming** is like giving a chef step-by-step instructions on how to make a pizza. **Declarative programming** is like ordering a pizza without being concerned about the steps it takes to make the pizza. 

---

## Getting started with react

[Chapter 4](https://nextjs.org/learn/react-foundations/getting-started-with-react)

lots of syntax specifics and JSX is a compiler for react

---

### Building UI

React core concepts:

There are three core concepts of React that you'll need to be familiar with to start building React applications. These are:

- Components
- Props
- State

## Creating components

In React, components are **functions.** Inside your `script` tag, create a new function called `header`:

```html
<script type="text/jsx">
  const app = document.getElementById("app")
 
  function header() {
  }
 
  const root = ReactDOM.createRoot(app);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
```

A component is a function that **returns UI elements**. Inside the return statement of the function, you can write JSX:

```html
<script type="text/jsx">
  const app = document.getElementById("app")
 
  function header() {
     return (<h1>Develop. Preview. Ship.</h1>)
   }
 
  const root = ReactDOM.createRoot(app);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
```

To render this component to the DOM, pass it as the first argument in the `root.render()` method:

```html
<script type="text/jsx">
  const app = document.getElementById("app")
 
  function header() {
     return (<h1>Develop. Preview. Ship.</h1>)
   }
 
  const root = ReactDOM.createRoot(app);
  root.render(header);
</script>
```

But, wait a second. If you try to run the code above in your browser, you'll get an error. To get this to work, there are two things you have to do:

First, React components should be capitalized to distinguish them from plain HTML and JavaScript:

```js
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
const root = ReactDOM.createRoot(app);
// Capitalize the React Component
root.render(Header);
```

Second, you use React components the same way you'd use regular HTML tags, with angle brackets `<>`:

```js
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
const root = ReactDOM.createRoot(app);
root.render(<Header />);
```


## Nesting components

Applications usually include more content than a single component. You can **nest** React components inside each other like you would regular HTML elements.

In your example, create a new component called `HomePage`:

```js
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
function HomePage() {
  return <div></div>;
}
 
const root = ReactDOM.createRoot(app);
root.render(<Header />);
```

Then nest the `<Header>` component inside the new `<HomePage>`component:

```js
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
    </div>
  );
}
 
const root = ReactDOM.createRoot(app);
root.render(<Header />);
```

## Component trees

You can keep nesting React components this way to form component trees.

![[Pasted image 20240916112156.png]]

For example, your top-level `HomePage` component could hold a `Header`, an `Article`, and a `Footer` Component. And each of those components could in turn have their own child components and so on. For example, the `Header` component could contain a `Logo`, `Title` and `Navigation` component.

This modular format allows you to reuse components in different places inside your app.

In your project, since `<HomePage>` is now your top-level component, you can pass it to the `root.render()` method:

```js
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}
 
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
```

[Your First Component](https://react.dev/learn/your-first-component)
[Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components)


---

## Displaying Data with Props

So far, if you were to reuse your `<Header />` component, it would display the same content both times.

```js
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
function HomePage() {
  return (
    <div>
      <Header />
      <Header />
    </div>
  );
}
```

But what if you want to pass different text or you don't know the information ahead of time because you're fetching data from an external source?

Regular HTML elements have attributes that you can use to pass pieces of information that change the behavior of those elements. For example, changing the `src` attribute of an `<img>` element changes the image that is shown. Changing the `href` attribute of an `<a>` tag changes the destination of the link.

In the same way, you can pass pieces of information as properties to React components. These are called `props`. Take for instance, the possible variations of a button:

![[Pasted image 20240916112452.png]]

Similar to a JavaScript function, you can design components that accept custom arguments (or props) that change the component's behavior or what is visibly shown when it's rendered to the screen. Then, you can pass down these props from parent components to child components.


## Using props

In your `HomePage` component, you can pass a custom `title` prop to the `Header` component, just like you'd pass HTML attributes:

```js
function HomePage() {
  return (
    <div>
      <Header title="React" />
    </div>
  );
}
```

And `Header`, the child component, can accept those props as its first **function parameter**:

```js
function Header(props) {
  return <h1>Develop. Preview. Ship.</h1>;
}
```

If you `console.log()` props, you can see that it's an **object** with a title property.

```js
function Header(props) {
  console.log(props); // { title: "React" }
  return <h1>Develop. Preview. Ship.</h1>;
}
```

Since props is an object, you can use [**object destructuring**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to explicitly name the values of props inside your function parameters:

```js
function Header({ title }) {
  console.log(title); // "React"
  return <h1>Develop. Preview. Ship.</h1>;
}
```

Then you can replace the content of the `<h1>` tag with your title variable.

```js
function Header({ title }) {
  console.log(title);
  return <h1>title</h1>;
}
```

If you open your file in the browser, you will see that it is displaying the actual word "title". This is because React thinks you're intending to render a plain text string to the DOM.

You need a way to tell React that this is a JavaScript variable.

---

## Using variables in JSX

To use the `title` prop, add **curly braces** `{}`. These are a special JSX syntax that allows you to write regular JavaScript directly inside your JSX markup.

```js
function Header({ title }) {
  console.log(title);
  return <h1>{title}</h1>;
}
```

You can think of curly braces as a way to enter "JavaScript land" while you are in "JSX land". You can add any **JavaScript expression** (something that evaluates to a single value) inside curly braces. For example:

An **object property** with dot notation:

```js
function Header(props) {
  return <h1>{props.title}</h1>;
}
```

A **template literal**:

```js
function Header({ title }) {
  return <h1>{`Cool ${title}`}</h1>;
}
```

The **returned value of a function**:

```js
function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title';
  }
}
 
function Header({ title }) {
  return <h1>{createTitle(title)}</h1>;
}
```

Or **ternary operators**:

```js
function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}
```

You can now pass any string to your title prop, or, if you used the ternary operator, you could even not pass a title prop at all, since you've accounted for the default case in your component:

```js
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

Your component now accepts a generic title prop which you can reuse in different parts of your application. All you need to do is change the title string:

```js
function HomePage() {
  return (
    <div>
      <Header title="React" />
      <Header title="A new title" />
    </div>
  );
}
```


---

## Iterating through lists

It's common to have data that you need to show as a list. You can use array methods to manipulate your data and generate UI elements that are identical in style but hold different pieces of information.

Add the following array of names to your `HomePage` component:

```js
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

You can then use the `array.map()` method to iterate over the array and use an **arrow function** to map a name to a list item:

```js
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

Notice how you've used curly braces to weave in and out of "JavaScript" and "JSX" land.

If you run this code, React will give us a warning about a missing `key` prop. This is because React needs something to uniquely identify items in an array so it knows which elements to update in the DOM.

You can use the names for now since they are currently unique, but it's recommended to use something guaranteed to be unique, like an item ID.

```js
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

[Passing props to a component](https://react.dev/learn/passing-props-to-a-component)
[Rendering lists](https://react.dev/learn/rendering-lists)
[Conditional rendering](https://react.dev/learn/conditional-rendering)

---

## Adding Interactivity with State

Let's explore how React helps us add interactivity with **state** and **event handlers**.

As an example, let's create a "Like" button inside your `HomePage` component. First, add a button element inside the `return()` statement:

```js
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button>Like</button>
    </div>
  );
}
```

## Listening to events

To make the button do something when clicked, you can use the `onClick` event:

```js
function HomePage() {
  // ...
  return (
    <div>
      {/* ... */}
      <button onClick={}>Like</button>
    </div>
  );
}
```

In React, event names are camelCased. The `onClick` event is one of many possible events you can use to respond to user interaction. For example, you can use `onChange` for input fields or `onSubmit` for forms.


---

## Handling events

You can define a function to "handle" events whenever they are triggered. Create a function before the return statement called `handleClick()`:

```js
function HomePage() {
  // ...
 
  function handleClick() {
    console.log("increment like count")
  }
 
  return (
    <div>
      {/* ... */}
	  <button onClick={}>Like</button>
    </div>
     )
   }
```

Then, you can call the `handleClick` function when the `onClick` event is triggered:

```js
function HomePage() {
  // 	...
  function handleClick() {
    console.log('increment like count');
  }
 
  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Like</button>
    </div>
  );
}
```

Try running this in your browser. Notice in your developer tools how the log output increases.

---

## State and hooks

React has a set of functions called [hooks](https://react.dev/learn). Hooks allow you to add additional logic such as **state** to your components. You can think of state as any information in your UI that changes over time, usually triggered by user interaction.

![[Pasted image 20240916114115.png]]

You can use _state_ to store and increment the number of times a user has clicked the "Like" button. In fact, the React hook used to manage state is called: `useState()`

Add `useState()` to your project. It returns an array, and you can access and use those array values inside your component using **array destructuring**:

```js
function HomePage() {
  // ...
  const [] = React.useState();
 
  // ...
}
```

The first item in the array is the state `value`, which you can name anything. It's recommended to name it something descriptive:

```js
function HomePage() {
  // ...
  const [likes] = React.useState();
 
  // ...
}
```

The second item in the array is a function to `update` the value. You can name the update function anything, but it's common to prefix it with `set` followed by the name of the state variable you're updating:

```js
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState();
 
  // ...
}
```

You can also take the opportunity to add the initial value of your `likes` state to `0`:

```js
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);
}
```

Then, you can check the initial state is working by using the state variable inside your component.

```js
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);
  // ...
 
  return (
    // ...
    <button onClick={handleClick}>Like({likes})</button>
  );
}
```

Finally, you can call your state updater function, `setLikes` in your `HomePage` component, let's add it inside the `handleClick()` function you previously defined:

```js
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);
 
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}
```

Clicking the button will now call the `handleClick` function, which calls the `setLikes` state updater function with a single argument of the current number of likes + 1.


> [!tip] Note:
> 
> Unlike props which are passed to components as the first function parameter, the state is initiated and stored within a component. 
> You can pass the state information to children components as props, but the logic for updating the state should be kept within the component where state was initially created.

---

## Managing state

Unlike props which are passed to components as the first function parameter, the state is initiated and stored within a component.
You can pass the state information to children components as props, but the logic for updating the state should be kept within the component where state was initially created.


[State: A component's memory](https://react.dev/learn/state-a-components-memory)
[Meet your first hook](https://react.dev/learn/state-a-components-memory#meet-your-first-hook)
[Responding to Events](https://react.dev/learn/responding-to-events)

---

## From React to Next.js

So far, we explored how you can get started with React. This is what the final code looked like. If you're starting from here, paste this code into an `index.html` file in your code editor.

```html
<html>
  <body>
    <div id="app"></div>
 
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
 
    <script type="text/jsx">
      const app = document.getElementById("app")
 
      function Header({ title }) {
        return <h1>{title ? title : "Default title"}</h1>
      }
 
      function HomePage() {
        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]
 
        const [likes, setLikes] = React.useState(0)
 
        function handleClick() {
          setLikes(likes + 1)
        }
 
        return (
          <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
 
            <button onClick={handleClick}>Like ({likes})</button>
          </div>
        )
      }
 
      const root = ReactDOM.createRoot(app);
      root.render(<HomePage />);
    </script>
  </body>
</html>
```

In the last few chapters, you were introduced to three essential React concepts: **components**, **props**, and **state**. Having a strong foundation in these will help you get started building React applications.

When it comes to learning React, **the best way to learn is to build**. You can gradually adopt React by using `<script>` and what you've learned so far to add small components to an existing website. However, many developers have found the user and developer experience React enables valuable enough to dive right in and write their whole frontend application in React.

## From React to Next.js

While React excels at building UI, it does take some work to independently build that UI into a fully functioning scalable application. There are also newer React features, like Server and Client Components, that require a framework. The good news is that Next.js handles much of the setup and configuration and has additional features to help you build React applications.

Next, we'll migrate the example from React to Next.js, discuss how Next.js works, and introduce you to the differences between Server and Client Components.

---

## Installing Next.js

creating a [new project with npm](https://nextjs.org/learn/react-foundations/installation)

Create a new directory and file in the same directory as your `index.html` file called `package.json` with an empty object `{}`.

```bash
npm install react@latest react-dom@latest next@latest
```

Jumping back to the `index.html` file, you can delete the following code:

1. The `<html>` and `<body>` tags.
2. The `<div>` element with the `id` of `app`.
3. The `react` and `react-dom` scripts since you've installed them with NPM.
4. The `Babel` script because Next.js has a compiler that transforms JSX into valid JavaScript browsers can understand.
5. The `<script type="text/jsx">` tag.
6. The `document.getElementById()` and `ReactDom.createRoot()` methods.
7. The `React.` part of the `React.useState(0)` function

After deleting the lines above, add the following import to the top of your file:

```js
import { useState } from 'react';
```

The only code left in the HTML file is JSX, so you can change the file type from `.html` to `.js` or `.jsx`.



