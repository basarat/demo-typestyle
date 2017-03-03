# Add TypeStyle responsive styles using Media Queries
> Media queries are very important for designs that you want to work on both mobile and desktop browers. TypeStyle gives it special attention to make it easy to write then in CSS in JS

We have simple React Application that renders a div with a generated className to a root div in our `index.html`

(change `Hello World` to `Hello World Media Queries`)
```js
import * as React from "react";
import * as ReactDOM from "react-dom"; 
import { style } from "typestyle";

const className = style({});

ReactDOM.render(
  <div className={className}>
    Hello World Media Queries
  </div>
, document.getElementById('root'));
```
