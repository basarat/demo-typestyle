# Add styles for pseudo states using TypeStyle

> TypeStyle is a very thin layer on top of CSS. In this lesson we show how to change styles based on pseudo states e.g. :focus :hover and :active which matches very closely with what you would write with raw CSS.

We have simple React Application that renders a div with a generated className to a root div in our `index.html`

(change `Hello World` to `Hello World States`)
```js
import * as React from "react";
import * as ReactDOM from "react-dom"; 
import { style } from "typestyle";

const className = style(
  { color : '#333' },
);

ReactDOM.render(
  <div className={className}>
    Hello World States
  </div>
, document.getElementById('root'));
```

* The style object takes a $nest property which allows you to style arbitrary child selectors (show $nest). 
* Any `&` in the selector will be replaced by the generated className (show `&`). 
* We can add a pseudo state such as `:hover` as a suffix to the & (show :hover) to add styles specific to the pseduo state. 

Here we make the font size blow up when you hover over the div.

```js
const className = style(
  { 
    color : '#333',
    $nest: {
      '&:hover': {
        fontSize: '50px'
      }
    }
  },
);
```

Of course it is always fun to add a transition for the properties you are going to animation.

```js
const className = style(
  { 
    color : '#333',
    transition: 'font-size .2s',
    $nest: {
      '&:hover': {
        fontSize: '50px'
      }
    }
  },
);
```

Notice again the encapsulation of the states under the className which results in more maintainable CSS.
