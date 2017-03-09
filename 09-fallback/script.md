# Greater CSS browser support with fallback values and vendor prefixes using TypeStyle
> You can increase the browser support of your CSS using fallback values and vendor prefixes. This lesson covers using vendor prefixes and fallback values (single prop multiple values) with TypeStyle.

We have simple div that we can set the font size and backgroundColor for using TypeStyle.

(add fontSize and backgroundColor)
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

const className = style(
  {
    fontSize: '30px',
    backgroundColor: 'rgba(200, 54, 54, 0.5)',
  }
);

ReactDOM.render(
  <div className={className}>
    Hello world
  </div>,
  document.getElementById('root')
);
```
* In this example you might want to provide a graceful fallback for browsers that do not support the rgba css function. (highlight rgba)

* In raw CSS you would write it with fallback follwed by gracefull upgrade

```js
`
background-color: 'rgb(200, 54, 54, 0.5)'; // Fallback
background-color: 'rgba(200, 54, 54, 0.5)'; // Graceful upgrade
`
```
With CSS in JS you can only have one value against a key. Since we are using TypeScript it will even warn you if you duplicate a key by mistake.

```js
const className = style(
  {
    backgroundColor: 'rgba(200, 54, 54, 0.5)',
    backgroundColor: 'rgba(200, 54, 54, 0.5)', // Error
  },
);
```
To support graceful fallbacks, TypeStyle allows you to provide an array instead of a single value.

```js
const className = style(
  {
    backgroundColor: [
      'rgba(200, 54, 54, 0.5)',
    ]
  },
);
```
And now we can provide a graceful fallback

```js
const className = style(
  {
    backgroundColor: [
      'rgb(200, 54, 54)',
      'rgba(200, 54, 54, 0.5)',
    ]
  },
);
```

Another kind of fallback needed in CSS is vendor prefixing. TypeStyle allows you to provide objects with a `-` in them (show `-` with autocomplete). Any dash is not case changed by TypeStyle. e.g.

```js
const className = style(
  {
    '-webkit-overflow-scrolling': 'touch',
    backgroundColor: [
      'rgb(200, 54, 54)',
      'rgba(200, 54, 54, 0.5)',
    ]
  },
);
```

You are encouraged to move stuff with vendor prefixes into semantic names e.g. I can move the scroll handling into a variable

```js
const scroll = {
  '-webkit-overflow-scrolling': 'touch',
  overflow: 'auto',
}
```

And this as a mixin whenever I need scrolling support,

```js
const className = style(
  scroll,
  {
    backgroundColor: [
      'rgb(200, 54, 54)',
      'rgba(200, 54, 54, 0.5)',
    ]
  },
);
```
