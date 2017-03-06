# Style CSS pseudo elements with TypeStyle

> Just like pseudo-classes, pseudo-elements are added to selectors but instead of describing a special state, they allow you to style certain parts of an element.

> In this lesson we show how you can insert new content into the DOM using CSS pseudo elements. We also cover using other pseudo element selectors to change default browser behaviors.

* Here we have simple React Application that renders a div with some content to the DOM. (write hello world)
* This div is being styled with a CSS class generated using TypeStyle's style function. As an example we can bump up the fontSize.

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

* In addition to CSS property names, the style object accepts an optional $nest property which allows you to style arbitrary child selectors (show $nest).
* Each key in $nest is a selector. Any `&` in the selector will be replaced by the generated className (show `&`).
* We can style pseudo elements simply by adding the relevant suffix to `&`. e.g. here we are going to style the `after` pseudo element (show ::after).
* We can change any CSS property e.g. set the content of this new dom element using the `content` CSS property
* Here we are setting the content to a string Pseudo Elements

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

An alternative to a simple string is the `attr` expression which takes its value from an attribute on selected element.

* E.g. lets replace the content with the value that will be derived from `attr(data-after)`. Notice the lack of quotes in this case.

```js
content: `attr(data-after)`
```

* You can pass any `data-`prop to a dom component in react. Here we will set the data-after property to Pseudo again.

```js
<div className={className} data-after=" Pseudo Again">
```

And now if we run the application you can see it shows up as expected "Pseudo Elements Attribute Powered".

* And if this attribute is not there it doesn't show up.

* You can target different pseudo element selectors by using different keys under the `$nest` property.
* To demonstrate that let change the styles of our div when its selected using the `&::selection` pseudo-element selector
* If we select the div right now, you can see the browser default of white text with blue background
* We can override the browser defaults and change it to a gold text with black background.
```js
  color: 'gold',
  background: 'black',
```
* And now if we go ahead, ... , and select the div using our mouse you can see this new black and gold effect.
