# Style CSS pseudo-classes using TypeStyle
> TypeStyle is intentionally a very thin layer on top of CSS. In this lesson we show how to change styles based on pseudo classes e.g. :focus :hover and :active which matches very closely with what you would write with raw CSS.

Here we have simple React Application that renders a div with some content that is being styled by a CSS class generated using TypeStyle.


```js
import * as React from "react";
import * as ReactDOM from "react-dom";
import { style } from "typestyle";

const className = style(
);

ReactDOM.render(
  <div className={className}>
    Hello World States
  </div>,
  document.getElementById('root')
);
```

We can easily make the div `red` by passing in a style object.
```js
const className = style(
  {
    color: 'red'
  }
);
```

* In addition to CSS Property names, the style object also takes a $nest property which allows you to style arbitrary child selectors (show $nest).
* Every key in $nest is considered a selector. Any `&` in the selector will be replaced by the generated className (show `&`).
* This allows us to use `&:hover` to add styles specific to the hover pseduo class.

As an example we will simply bump up the font size to 50 pixels when you hover over the div.

```js
const className = style(
  {
    color: '#333',
    $nest: {
      '&:hover': {
        fontSize: '50px'
      }
    }
  },
);
```

It is always fun and super easy to add a CSS transition for the properties you are going to change in different pseudo classes.

With this transition in place even our excessively exaggerated property change feel much more smooth.

```js
const className = style(
  {
    color: '#333',
    transition: 'font-size .2s',
    $nest: {
      '&:hover': {
        fontSize: '50px'
      }
    }
  },
);
```

One thing worth pointing out is the encapsulation of pseudo class styles under the className which results in more maintainable CSS.

You can add styles for as many pseudo classes as you need using different keys under the nest property.

To demonstrate that, lets change our div to a button so that it supports the focus pseudo class.

```js
ReactDOM.render(
  <button className={className}>
    Hello World States
  </button>,
  document.getElementById('root')
);
```
* We will go ahead and add a selector for the `:focus` class.
* And within its style object we will bump up the fontsize to 30px.


```js
const className = style(
  {
    color: '#333',
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
* You can see that if I tab into the button to give it focus the font size bumps up.
* If I tab away it goes down.
* If I hover over the button it gets a nice big font size of 50px which goes back if I hover away.

One interesting thing to note is that both hover and focus are changing the fontSize so there are bound to be conflicts.

* If I click the button to `focus` it, the focus style works fine.
* But while it is focused, hover styles do not work.
* This is because the focus style is winning over the hover style.

If you want to ensure that the `&:hover` always takes precedence over `&:focus` you can do that by simply adding another `&` in your nested selector.

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
* And now if we tab to the button to focus it
* And then hover over it. The hover styles take precedence

There isn't any TypeStyle magic here. This works simply because in CSS repeated classnames `.foo.foo:hover` increase CSS specificity. So the first selector takes precedence over the second one.

* One final thing worth mentioning is
* that its conventional to write selectors in increasing order of significance if it matters. So we will go ahead and move hover down.

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
