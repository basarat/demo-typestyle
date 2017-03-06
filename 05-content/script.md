# Style CSS psuedo elements with TypeStyle

> Just like pseudo-classes, pseudo-elements are added to selectors but instead of describing a special state, they allow you to style certain parts of an element.

> In this lesson we show how you can insert new content into the DOM using CSS pseudo elements. We also cover user other pseudo element selectors.

* Here we have simple React Application that renders a div with the text hello world to the DOM. (write hello world)
* This div is styled using TypeStyle (goto definition of className)

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

const className = style(
  {
    fontSize: '20px',
  },
);

ReactDOM.render(
  <div className={className}>
    Hello world
  </div>,
  document.getElementById('root')
);
```

* The style object takes a $nest property which allows you to style arbitrary child selectors (show $nest).
* Any `&` in the selector will be replaced by the generated className (show `&`).
* We can add a pseudo state such as `::after` as a suffix to create a selector specific to this pseudo element (show ::after).
* We can use different CSS properties to style this selector e.g.  set the content of this new dom element using the `content` CSS property

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

* There is one thing worth mentioning about the CSS content property (highlight the content property name).
* Notice that we added explicit quotes around the content value. This is required by CSS if you are going to pass in a simple string. (highlight the content value).

An alternative to a simple string is the `attr` expression.

* E.g. lets replace the content with the value that will be derived from `attr(data-after)`. Notice the lack of quotes in this case.

```js
content: `attr(data-after)`
```

* You can pass any `data-`prop to a dom component in react e.g. `data-after="Pseduo Again"`.

```js
<div className={className} data-after=" Pseudo Again">
```

And you can see that we get the same effect. But now the content of the after is being driven by this attribute, "Pseudo Elements Attribute Powered".

* And if this attribute is not there it doesn't show up.

* You can target different pseudo element selectors by using different keys under the `$nest` property.
* To demonstrate that let change the styles of our div when its selected using the `&::selection` selector
* Right now if we select the div you can see the browser default of black text with blue background
* We can change it to white text with a black background.
```js
  color: 'black',
  background: 'black',
```
* And now if we select the div you can see this new black and gold effect.
