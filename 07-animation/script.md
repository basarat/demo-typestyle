# Add CSS keyframe animations using TypeStyle
> We cover CSS keyframes and how to create them using TypeStyle. We then show how to use keyframes to create an animation.

We have simple React Application that renders a div with a generated className to a root div in our `index.html`

(change `Hello World `)
```js
import * as React from "react";
import * as ReactDOM from "react-dom"; 
import { style } from "typestyle";

const className = style(
  { color : '#333' },
);

ReactDOM.render(
  <div className={className}>
    
  </div>
, document.getElementById('root'));
```
