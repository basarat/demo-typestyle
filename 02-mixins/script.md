# Reuse styles using TypeStyle mixins
> TypeStyle’s style function allows you to give multiple objects as an argument. This provides a simple extensible reusability model. We cover mixin and mixin creators in this lesson.

We have simple React Application that renders a div with a generated className to a root div in our `index.html`

(change `Hello World` to `Hello World Mixins`)
```js
import * as React from "react";
import * as ReactDOM from "react-dom"; 
import { style } from "typestyle";

const className = style(
  { color: 'red' },
);

ReactDOM.render(
  <div className={className}>
    Hello World Mixins
  </div>
, document.getElementById('root'));
```

The style function allows you to pass in as many style objects as you want. e.g. 

```js
import * as React from "react";
import * as ReactDOM from "react-dom"; 
import { style } from "typestyle";

const className = style(
  { fontSize: '30px' },
  { color: 'red' },
);

ReactDOM.render(
  <div className={className}>
    Hello World Mixins
  </div>
, document.getElementById('root'));
```

This allows you to easily move reusable style objects out of the style function e.g.

```js
import * as React from "react";
import * as ReactDOM from "react-dom"; 
import { style } from "typestyle";

const fontSize = { fontSize: '30px' };
const className = style(
  fontSize,
  { color: 'red' },
);

ReactDOM.render(
  <div className={className}>
    Hello World Mixins
  </div>
, document.getElementById('root'));
```

Finally you an even make utility functions out of such common things in your code. As an example we can convert the `fontSize` variable into a function that takes a value and returns an object with the fontSize property as desired. We finally call this function with the desired value for a particular class.

```js
import * as React from "react";
import * as ReactDOM from "react-dom"; 
import { style } from "typestyle";

const fontSize = (value: number) => ({ fontSize: `${value}px` });
const className = style(
  fontSize(30),
  { color: 'red' },
);

ReactDOM.render(
  <div className={className}>
    Hello World Mixins
  </div>
, document.getElementById('root'));
```

Since such mixin creators are real JavaScript functions you can make them as powerful as you want e.g. lets add support for string or numbers to the fontSize mixin 

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
