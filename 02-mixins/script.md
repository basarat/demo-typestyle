# Reuse styles using TypeStyle mixins
> TypeStyle’s style function allows you to give multiple objects as an argument. This provides a simple extensible reusability model. We cover typestyle mixin and mixin creators in this lesson.

We have simple React Application that renders a div with some content to the document

(change `Hello World` to `Hello World Mixins`)
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

const className = style(
  { color: 'red' },
);

ReactDOM.render(
  <div className={className}>
    Hello World Mixins
  </div>,
  document.getElementById('root')
);
```

The style function allows you to pass in as many style objects as you want and internally merges them all together before generating the CSS class. e.g.

```js
const className = style(
  { fontSize: '30px' },
  { color: 'red' },
);
```
Supporting multiple objects within the style function allows you to easily move reusable styles out of the style function into their own variables e.g.

* we can move out the fontSize object into a variable and
* then resuse whenever we want the same fontSize.

At this point `fontSize` is essentially a mixin.

```js
const fontSize = { fontSize: '30px' };
const className = style(
  fontSize,
  { color: 'red' },
);
```

You can an even make utility functions out of such common things in your code.
* As an example we can convert the `fontSize` variable into a function that
* takes a value of type number and returns an object with the fontSize property as desired.
* We finally call this function with the desired value for a particular class.

```js
const fontSize = (value: number) => ({ fontSize: `${value}px` });
const className = style(
  fontSize(30),
  { color: 'red' },
);
```
Since such mixin creators are real JavaScript functions you can make them as powerful as you want e.g. lets add support for string or numbers as the value argument for the font size mixin creator.
* If the value passed in is a string we assume it already has the correct unit and use it as it is.
* Otherwise for numbers we assume that the intended unit is pixels and add then when converting it to a string.
* Finally we return our mixin which contains the fontSize css property.

```js
const fontSize = (value: number | string) => {
  const valueStr = typeof value === 'string' ? value : value + 'px';
  return { fontSize: valueStr });
}
```

We can now pass in an explicit px value, or an em value or just a number which is assumed to be px.

```js
const className = style(
  fontSize('30px'), // Show 30px , 3em, 30
  { color: 'red' },
);

ReactDOM.render(
  <div className={className}>
    Hello World Mixins
  </div>
, document.getElementById('root'));
```

Using such mixin and mixin creators like the fontSize function allows you to use your JavaScript code matainainability practices to manage your CSS.
