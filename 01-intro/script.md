# Add type safety to CSS using TypeStyle

> TypeStyle is the only current CSS in JS solution that is designed with TypeSafety and TypeScript developer ergonomics in mind. 

> In this lesson we will show a basic web application and then how easy it is to add TypeStyle to the workflow showing easy it is to style your DOM.

(Show `webpack.config.js`)
Here we have a simple application setup using webpack 2 with a barebones TypeScript setup.

(Show package.json)
In our package.json we have a `start` target that runs webpack dev server serving up our `public` folder. 

(Show `index.html`) 
Within our index.html file we simply load the webpack generated bundle file.

(Show `index.ts`)
Note that this application is completely framework free at the moment. We can quite easily write to the document body using Just plain JavaScript

```js
document.getElementById('root').innerHtml = `
  <div>
    Hello world
  </div>
`
``` 

Now to style this simple div using CSS classes lets use TypeStyle. You simply install it from `npm`

```sh
npm install typestyle
```

And then you can bring in the `style` function from typestyle. This function simply takes a style object

```js
style({
  color: 'darkorange'
});
```

And returns a generated CSS class name:

```js
const className = style({
  color: 'darkorange'
});
```

You can apply this CSS class to the div quite easily: 

```js
const className = style({
  color: 'darkorange'
});

document.body.innerHtml = `
  <div class="${className}">
    Hello world
  </div>
`
```

Note that TypeStyle is completely framework agnostic. It is a simple (CSS Style object -> CSS class name) framework. 

It is designed to have a zero config setup. Here the generated CSS is actually getting written a `style` tag that is managed by TypeStyle. *inspect the page and show the style tag in the head*. Because it generates an actual stylesheet, this means that it has the full power of CSS at its disposal.


* Notice that since TypeStyle is written in TypeScript you get autocomplete for free.
```js
const className = style({
  color: 'darkorange',
  position: 'relative',
});
```

* It also you a level of quick compile time protection against typos e.g. 

```js
const className = style({
  color: 'darkorange',
  position: 'reletive', // Error : typo
});
```
```js
const className = style({
  colour: 'darkorange', // Error : typo
  position: 'relative',
});
```

To demonstrate TypeStyle's framework agnostic nature, lets integrate TypeStyle into a React Application. I'll simply go ahead in install react react-dom and its types 

```
npm install react react-dom @types/react @types/react-dom -D
```

Now within our file. I'll simply use ReactDom to render a similar div to the document body. It still uses the same className that TypeStyle generated for us with vanilla JavaScript.

```
todo
```