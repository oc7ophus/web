
`npm run dev`

---

[routing](https://nextjs.org/docs/app/building-your-application/routing)


![[Pasted image 20240909175139.png]]

- **URL Segment:** Part of the URL path delimited by slashes.
- **URL Path:** Part of the URL that comes after the domain (composed of segments).


## The app Router

In version 13, Next.js introduced a new **App Router** built on [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components), which supports shared layouts, nested routing, loading states, error handling, and more.

The App Router works in a new directory named `app`. The `app` directory works alongside the `pages` directory to allow for incremental adoption. This allows you to opt some routes of your application into the new behaviour while keeping other routes in the `pages` directory for previous behaviour. If your application uses the `pages` directory, please also see the [Pages Router](https://nextjs.org/docs/pages/building-your-application/routing) documentation.


**Good to know**: The App Router takes priority over the Pages Router. Routes across directories should not resolve to the same URL path and will cause a build-time error to prevent a conflict.

![[Pasted image 20240909175316.png]]

By default, components inside `app` are [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components). This is a performance optimization and allows you to easily adopt them, and you can also use [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components).



## Roles of Folders and Files

Next.js uses a file-system based router where:

- **Folders** are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the **root folder** down to a final **leaf folder** that includes a `page.js` file. See [Defining Routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes).
- **Files** are used to create UI that is shown for a route segment. See [special files](https://nextjs.org/docs/app/building-your-application/routing#file-conventions).


## Route Segments

Each folder in a route represents a **route segment**. Each route segment is mapped to a corresponding **segment** in a **URL path**.

![[Pasted image 20240909175424.png]]

## Nested Routes

To create a nested route, you can nest folders inside each other. For example, you can add a new `/dashboard/settings` route by nesting two new folders in the `app` directory.

The `/dashboard/settings` route is composed of three segments:

- `/` (Root segment)
- `dashboard` (Segment)
- `settings` (Leaf segment)

[File Conventions](https://nextjs.org/docs/app/building-your-application/routing#file-conventions)

![[Pasted image 20240909175500.png]]

## Component Hierarchy

The React components defined in special files of a route segment are rendered in a specific hierarchy:

- `layout.js`
- `template.js`
- `error.js` (React error boundary)
- `loading.js` (React suspense boundary)
- `not-found.js` (React error boundary)
- `page.js` or nested `layout.js`

![[Pasted image 20240909175554.png]]

In a nested route, the components of a segment will be nested **inside** the components of its parent segment.

![[Pasted image 20240909175606.png]]


Colocation

In addition to special files, you have the option to colocate your own files (e.g. components, styles, tests, etc) inside folders in the `app` directory.

This is because while folders define routes, only the contents returned by `page.js` or `route.js` are publicly addressable.

![[Pasted image 20240909175629.png]]

Learn more about [Project Organization and Colocation](https://nextjs.org/docs/app/building-your-application/routing/colocation).


---

[rendering](https://nextjs.org/docs/app/building-your-application/rendering)

Rendering converts the code you write into user interfaces. React and Next.js allow you to create hybrid web applications where parts of your code can be rendered on the server or the client. This section will help you understand the differences between these rendering environments, strategies, and runtimes.

## Fundamentals 

To start, it's helpful to be familiar with three foundational web concepts:

- The [Environments](https://nextjs.org/docs/app/building-your-application/rendering#rendering-environments) your application code can be executed in: the server and the client.
- The [Request-Response Lifecycle](https://nextjs.org/docs/app/building-your-application/rendering#request-response-lifecycle) that's initiated when a user visits or interacts with your application.
- The [Network Boundary](https://nextjs.org/docs/app/building-your-application/rendering#network-boundary) that separates server and client code.


## Rendering Environments

There are two environments where web applications can be rendered: the client and the server.

![[Pasted image 20240909175739.png]]

- The **client** refers to the browser on a user's device that sends a request to a server for your application code. It then turns the response from the server into a user interface.
- The **server** refers to the computer in a data center that stores your application code, receives requests from a client, and sends back an appropriate response.


## Request-Response Lifecycle

Broadly speaking, all websites follow the same **Request-Response Lifecycle**:

![[Pasted image 20240909175936.png]]

A major part of building a hybrid web application is deciding how to split the work in the lifecycle, and where to place the Network Boundary.

## Network Boundary

In web development, the **Network Boundary** is a conceptual line that separates the different environments. For example, the client and the server, or the server and the data store.

In React, you choose where to place the client-server network boundary wherever it makes the most sense.

Behind the scenes, the work is split into two parts: the **client module graph** and the **server module graph**. The server module graph contains all the components that are rendered on the server, and the client module graph contains all components that are rendered on the client.

It may be helpful to think about module graphs as a visual representation of how files in your application depend on each other.

You can use the React `"use client"` convention to define the boundary. There's also a `"use server"` convention, which tells React to do some computational work on the server.

---

[styling](https://nextjs.org/docs/app/building-your-application/styling)

Next.js supports different ways of styling your application, including:

- **CSS Modules**: Create locally scoped CSS classes to avoid naming conflicts and improve maintainability.
- **Global CSS**: Simple to use and familiar for those experienced with traditional CSS, but can lead to larger CSS bundles and difficulty managing styles as the application grows.
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid custom designs by composing utility classes.
- **Sass**: A popular CSS preprocessor that extends CSS with features like variables, nested rules, and mixins.
- **CSS-in-JS**: Embed CSS directly in your JavaScript components, enabling dynamic and scoped styling.

Learn more about each approach by exploring their respective documentation: https://nextjs.org/docs/app/building-your-application/styling

