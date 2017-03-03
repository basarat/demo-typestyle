# Reuse styles using TypeStyle mixins
> TypeStyle’s style function allows you to give multiple objects as an argument. This provides a simple extensible reusability model. We cover mixin and mixin creators in this lesson.

We have simple React Application that renders a div with a generated className to a root div in our `index.html`

(change `Hello World` to `Hello World Mixins`)
```js
import * as React from "react";
import * as ReactDOM from "react-dom"; 
import { style } from "typestyle";

const className = style({});

ReactDOM.render(
  <div className={className}>
    Hello World Mixins
  </div>
, document.getElementById('root'));
```
TypeStyle provide a `media` function to make it easy to write media queries.