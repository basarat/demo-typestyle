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

```
document.body.innerHtml = `
  <div>
    Hello world
  </div>
`
``` 

Now to style this simple div using CSS classes lets use TypeStyle. You simply install it from `npm`

```
npm install typestyle
```

And then you can bring in the `style` function from typestyle. This function simply takes a style object

```
style({
  color: 'darkorange'
});
```

And returns a generated CSS class name:

```
const className = style({
  color: 'darkorange'
});
```

* Notice that since TypeStyle is written in TypeScript you get autocomplete for free.
* It also you a level of protection against typos e.g. 

```
const className = style({
  colour: 'darkorange' // Error : typo
});
```

This is because TypeStyle is completely framework agnostic. It is a simple (CSS objects -> )