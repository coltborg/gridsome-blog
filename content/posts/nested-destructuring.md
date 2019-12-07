---
canonical_url: true
date: 2019-06-22
published: true
tags: ['JavaScript']
title: Nested Destructuring
description: "I always forget the syntax for nested object destructuring. So I wrote this article so that I don't forget again."
---

## Object Destructuring

> The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. - [MDN Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Destructing is one of my favorite ES6 syntax improvements. But when I need to pull things out of nested objects, I can never remember the syntax. So I'm writing this so I can focus on how to remember the syntax and so that I can refer to this article if I forget. 😆

But first, lets looks at destructuring from one object.

```jsx
const MyAwesomeButton = props => (
  <button type="button" className="button">
    {props.label}
  </button>
)
```

Here we have `MyAwesomeButton` that takes a `label` prop and puts it inside of a `<button>`. We can use object destructing to only show the parts that we need to use, such as `label`.

```diff
+ const MyAwesomeButton = ({ label }) => (
- const MyAwesomeButton = props => (
  <button type="button" className="button">
+   {label}
-   {props.label}
  </button>
)
```

Now we've eliminated the reference to `props` and are only pulling out `label` so that we can use it as a variable name by itself. We need to wrap `{ label }` in parentheses because without them, JavaScript would interpret it as an [object literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Creating_objects).

Our final result looks like:

```jsx
const MyAwesomeButton = ({ label }) => (
  <button type="button" className="">
    {label}
  </button>
)
```

## Now Lets Try Nesting

Here is where the syntax gets confusing. If I want to pull from an object within an object, I totally can, but I never remember the right way to do it.

```jsx
const MyAwesomeButton = props => (
  <button type="button" className="button">
    {props.constants.icon}
    {props.constants.label}
  </button>
)
```

So now I have an object inside of my props that have two different values, but they're nested inside of an object.

Before we look at how we can pull `icon` and `label` out of the prop, lets look at how an object literal is defined:

```javascript
const myObject = {
  property: 'value',
  nestedObject: {
    nestedProperty: 'nested value'
  }
};
```

Ok we have curly braces, property names, and values. You can take the "shape" and apply it to how our destructuring will look.

```javascript
// Pseudo code of how we would pull out `nestedProperty`
{
  nestedObject: {
    nestedProperty
  }
}
```

Now reduce that format to one line.

```javascript
{ nestedObject: { nestedProperty } }
```

💡 Ah ha! I usually forget when I need to add another set of curly braces to get to the nested property!

Back to our React button example, I want to pull `icon` and `label` out of `props.constants`.

```diff
+ const MyAwesomeButton = { constants: { icon }, constants: { label }  } => (
- const MyAwesomeButton = props => (
  <button type="button" className="button">
+   {icon}
-   {props.constants.icon}
+   {label}
-   {props.constants.label}
  </button>
)
```

Our component now doesn't reference `props` or `constants` and has a cleaning look.

```jsx
const MyAwesomeButton = { constants: { icon }, constants: { label }  } => (
  <button type="button" className="button">
    {icon}
    {label}
  </button>
)
```

## GatsbyJS Example

I got this wrong several times while building this website. Pulling from nested objects seems like a normal thing when working with GraphQL, the query language I'm using in Gatsby. I like how clean it looks, but it took a little while to get use to.

Here is one of the craziest examples of nested destructuring that I had to do:

```jsx
{quotes.map(
  ({
    node: { avatar },
    node: { company },
    node: { id },
    node: { person },
    node: { quote },
    node: { url },
  }) => (
    <li key={id} className="mb-8">
      <Quote
        avatarAlt={`Avatar of ${person}`}
        avatarUrl={avatar}
        company={company}
        linkUrl={url}
        name={person}
        quote={quote}
      />
    </li>
  )
)}
```

For each quote, I'm pulling out each piece of data as its own variable and then using it where I need to. And there's not all these references to `node`, which I like.

## Conclusion

The syntax for nested destructuring on the left side mirrors what defining a nested object would look like on the right side.
