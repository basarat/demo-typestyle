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

Of course it is always fun to add a transition for the properties you are going to change.

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

Notice again the encapsulation of the states under the className which results in more maintainable CSS. If you want to order your pseudo classes e.g. * lets say we have a button: 

```js
ReactDOM.render(
  <button className={className}>
    Hello World States
  </button>
, document.getElementById('root'));
```
* And you have a different style for `&:focus` 

```js
const className = style(
  { 
    color : '#333',
    transition: 'font-size .2s',
    $nest: {
      '&:hover': {
        fontSize: '50px'
      },
      '&:focus': {
        fontSize: '30px'
      },
    }
  },
);
```
* You can see that the hover style works fine. 
* And if I click the button to `focus` it the focus style works fine too. 
* But once its focused, hover no longer works.

If you want to ensure that `&:hover` always takes precedece over `&:focus` you can do that by simply adding another `&` in your nested selector.

```js
const className = style(
  { 
    color : '#333',
    transition: 'font-size .2s',
    $nest: {
      '&&:hover': {
        fontSize: '50px'
      },
      '&:focus': {
        fontSize: '30px'
      },
    }
  },
);
```
* And now if you click the button to focus it 
* And then hover over it. The hover styles take precedence

This is because in CSS `.foo.foo:hover` would take precedece over `.foo:focus` due to CSS specificity rules. Note that its conventional to write rules in increasing order of significance

```js
const className = style(
  { 
    color : '#333',
    transition: 'font-size .2s',
    $nest: {
      '&:focus': {
        fontSize: '30px'
      },
      '&&:hover': {
        fontSize: '50px'
      },
    }
  },
);
```