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
* We can set the content of this new dom element using `content`

```js
const className = style(
  { 
    color : '#333',
    $nest: {
      '&::after': {
        content: 'Pseudo Elements'
      }
    }
  },
);
```
