# Add raw CSS as an escape hatch using TypeStyle
> TypeStyle tries to be an all in one CSS in JS management solution so you can always fall back to raw CSS if you ever need to migrate old code quickly. This lesson will demonstrate how to use it along with the real world use case of e.g. using `normalize.css`.

We have simple React Application that renders a div with a generated className to a root div in our `index.html`

(change `Hello World `)
```js
import * as React from "react";
import * as ReactDOM from "react-dom"; 
import { style } from "typestyle";

const className = style(
  { fontSize : '20px' },
);

ReactDOM.render(
  <div className={className}>
    
  </div>
, document.getElementById('root'));
```

* TypeStyle allows you to use *raw unencapsulated* CSS using the `cssRaw` function that is exported from the main module.

```js
import { style, cssRaw } from "typestyle";
```
