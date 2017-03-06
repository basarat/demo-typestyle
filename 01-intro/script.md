# Add type safety to CSS using TypeStyle

> TypeStyle is the only current CSS in JS solution that is designed with TypeSafety and TypeScript developer ergonomics in mind.

> In this lesson we will show how easy it is to setup with zero configuration and also demonstrate its UI framework agnostic nature. We will also show how to integrate it with your application framework of choice using ReactJS as an example

(Show `webpack.config.js`)
Here we have a bare bones webpack application setup for TypeScript.

* Our entry file is src/app.tsx
* Our output goes to the public folder as bundle.js
* We tell webpack to support `.ts` and `.tsx` files
* And we will be using ts-loader for these ts and tsx files.

(Show package.json)
In our package.json we have a `start` target that runs webpack dev server, serving up our `public` folder.

(Show `index.html`)
Within our public folder we have an index.html file. This file contains a simple div with id root and then we load the webpack generated bundle file.

(Show `app.tsx`)
Now lets jump to our application entry point. Note that right now this application is completely framework free. Using just plain JavaScript we can access the root div in our index.html file and write some html to it.

```js
document.getElementById('root').innerHTML = `
  <div>
    Hello world
  </div>
`;
```

We can run our application using our package.json's `npm start` target. And now if we open localhost:8080, can see that this div shows up in the dom and we can update it with new content as needed.

Now to style this div using TypeStyle. We can get TypeStyle from `npm`.

* Simply run npm install typestyle and save it to our dependencies.

```sh
npm install typestyle --save
```

* And then you can bring in the `style` function from typestyle.
* This function simply takes a style object containing CSS property value pairs.

```js
import { style } from "typestyle";
style({
  color: 'darkorange'
});
```

It generates a CSS class based on this object and returns the name of the class as a string.

```js
import { style } from "typestyle";
const className = style({
  color: 'darkorange'
});
```

Because it is just a simple CSS class, you can apply to the div quite easily by using the html class attribute and assigning it the generated CSS className.

```js
import { style } from 'typestyle';
const className = style({
  color: 'darkorange'
});
document.getElementById('root').innerHTML = `
  <div class="${className}">
    Hello world
  </div>
`;
```

Note that style function is completely UI framework  agnostic. It is a simple (CSS Style object -> CSS class name) transform.

TypeStyle is also designed to have a zero config setup.

If we go ahead and inspect the div in the dom it has the generated classname as expected. This classname is derived from the style object so you don't have to worry about coming up with globally unique names. Each style object with the same properties would get the same class name.

Simultaneuously there is a style tag in the document head that is inserted by TypeStyle and contains the relevant CSS. Because it generates an actual stylesheet, this means that it has the full power of CSS at its disposal.

* Now if we jump back to the style function, Notice that since TypeStyle is written in TypeScript you get autocomplete for free.
```js
const className = style({
  color: 'darkorange',
  position: 'relative', // Show autocomplete
});
```

* I will also protect against typos in CSS values if the CSS property only accepts a restricted set.

* and TypeStyle will always prevent typos in CSS property names e.g. if you misspell colour TypeScript will complain.

```js
const className = style({
  color: 'darkorange',
  position: 'relativee', // Show Error : typo
});
```
```js
const className = style({
  colour: 'darkorange', // Show Error : typo
  position: 'relative',
});
```
To demonstrate TypeStyle's framework agnostic nature, lets integrate TypeStyle into a React Application. I'll simply go ahead in install react react-dom and its types.

```
npm install react react-dom @types/react @types/react-dom --save
```

Now within our file, we will bring in react and react-dom. I'll simply use ReactDom to render a simple div.

```js
import * as React from "react";
import * as ReactDOM from "react-dom";
import { style } from "typestyle";

const className = style({
  color: 'darkorange',
  position: 'relative',
});

ReactDOM.render(
  <div>
    Hello world
  </div>
, document.getElementById('root'));
```
And now we will apply a css class to this div using React's className property.

It can use the TypeStyle generated className just as easily as we did with framework free JS.

```js
import * as React from "react";
import * as ReactDOM from "react-dom";
import { style } from "typestyle";

const className = style({
  color: 'darkorange',
  position: 'relative',
});

ReactDOM.render(
  <div className={className}>
    Hello world react
  </div>,
  document.getElementById('root')
);
```

And you can see that TypeStyle just generates and manages CSS classes, you can use it with any framework you want.
