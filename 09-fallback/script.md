# Ensure greater browser support with vendor prefixes using TypeStyle

> This lesson covers using vendor prefixes and fallback values (single prop multiple values) with TypeStyle.

We have simple React Application that renders a div with a generated className to a root div in our `index.html`

(change `Hello World `)
```js
import * as React from "react";
import * as ReactDOM from "react-dom"; 
import { style } from "typestyle";

const className = style({
  backgroundColor: 'rgba(200, 54, 54, 0.5)',
});

ReactDOM.render(
  <div className={className}>
    Hello world
  </div>
, document.getElementById('root'));
```
Assume that we want to provide a graceful fallback for browers that do not support the rgba css function. In raw CSS you would write it like the following

```
background-color: 'rgb(200, 54, 54, 0.5)'; // Fallback 
background-color: 'rgba(200, 54, 54, 0.5)'; // Graceful upgrade
```

Notice that with CSS in JS you can only have one value against a key. Since we are using TypeScript it will warn us if we duplicate a key by mistake.

```js
const className = style(
  { 
    backgroundColor: 'rgba(200, 54, 54, 0.5)',
    backgroundColor: 'rgba(200, 54, 54, 0.5)', // Error
  },
);
```
TypeStyle allows you to provide an array instead of a single value. 
