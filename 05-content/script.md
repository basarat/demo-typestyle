# Insert new content into the DOM using CSS psuedo elements with TypeStyle

> In this lesson we show how you can insert new content into the DOM using CSS pseudo elements.

We have simple React Application that renders a div with a generated className to a root div in our `index.html`

(change `Hello World`)
```js
import * as React from "react";
import * as ReactDOM from "react-dom"; 
import { style } from "typestyle";

const className = style(
  { color : '#333' },
);

ReactDOM.render(
  <div className={className}>
    Hello World
  </div>
, document.getElementById('root'));
```

* The style object takes a $nest property which allows you to style arbitrary child selectors (show $nest). 
* Any `&` in the selector will be replaced by the generated className (show `&`). 
* We can add a pseudo state such as `::after` as a suffix to the & (show ::after) to add styles specific to the pseduo state. 
* We can set the content of this new dom element using the `content` pure CSS property

```js
const className = style(
  { 
    color : '#333',
    $nest: {
      '&::after': {
        content: `' Pseudo Elements'`
      }
    }
  },
);
```
And you can see that it shows up.

Note that there are a few gotcha's with the CSS content property. Notice that we added explicit quotes around the content. This is required by CSS if you are going to pass in a simple string. 

CSS also allows you to power the `content` of before and after pseudo elements using the `attr` expression. 

* E.g. lets replace the content with the value that will be derived from `attr(data-after)`. Notice the lack of quotes here as this is a CSS expression. 

* You can pass any `data-`prop to a dom component in react e.g. `data-after="Pseduo Elements"`.

```
<div className={className} data-after="Pseudo Elements">
```

And you can see that we get the same effect. But now the content of the after is being driven by this attribute, "Pseudo Elements Attribute Powered".
