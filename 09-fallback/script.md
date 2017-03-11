# Greater CSS browser support with fallback values and vendor prefixes using TypeStyle
> You can increase the browser support of your CSS using fallback values and vendor prefixes. This lesson covers using vendor prefixes and fallback values (single prop multiple values) with TypeStyle. It also shows best practices for maintaining variables in the presence of vendor prefixing.

We have simple div, that is being styled using TypeStyle e.g. we can bump up the font size and set the backgroundColor

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
* With CSS you sometimes need to provide fallback values for old browsers. As an example you might want to provide a graceful fallback for browsers that do not support the rgba css function. (highlight rgba)

* In raw CSS you would simply duplicate the CSS key value pair (in our case the background-color key) and write the fallback value followed by the graceful upgrade value.

```js
`
background-color: rgb(200, 54, 54); // Fallback
background-color: rgba(200, 54, 54, 0.5); // Upgrade
`
```
* With CSS in JS, because of the way JavaScript works, you can have a given key e.g. backgroundColor, only once.
* Since we are using TypeScript it will even warn you if you duplicate a key by mistake.

```js
const className = style(
  {
    backgroundColor: 'rgba(200, 54, 54, 0.5)',
    backgroundColor: 'rgba(200, 54, 54, 0.5)', // Error
  },
);
```
* To support graceful fallbacks, TypeStyle allows you to provide an array instead of a single value.

```js
const className = style(
  {
    backgroundColor: [
      'rgba(200, 54, 54, 0.5)',
    ]
  },
);
```

* And now we can provide a graceful fallback

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

This gives us the same behaviour as raw CSS because TypeStyle will essentially generates the same stylesheet.

Another kind of fallback needed in CSS is vendor prefixing.

* For this purpose, TypeStyle allows you to provide keys with a `-` in them (show `-` with autocomplete). All dashes are preserved by TypeStyle when generating the CSS.
* e.g. we can add smooth touch scrolling support for old iOS devices using the `webkit-overflow-scrolling` property and setting it to touch.

```js
const className = style(
  {
    '-webkit-overflow-scrolling': 'touch',
    fontSize: '30px',
    backgroundColor: [
      'rgb(200, 54, 54)',
      'rgba(200, 54, 54, 0.5)',
    ]
  },
);
```

* You are encouraged to move stuff with vendor prefixes into semantic names e.g. I can move the scroll handling into a variable. I will also go ahead and specify that the element should show a scrollbar automatically if required.

```js
const scroll = {
  '-webkit-overflow-scrolling': 'touch',
  overflow: 'auto',
}
```

* And now I can use this scroll object as a mixin whenever I need smooth touch scrolling support,

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
