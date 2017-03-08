# Compose CSS classes using TypeStyle

> We will demonstrate composing classes using the utility classes function. `classes` is also what we recommend for theming. Using pure CSS classes means that the component consumers are free to customize the component using any technology (not just TypeStyle). `classes` is also what is recommended for conditionally applied TypeStyle CSS class names. 

We have simple React Application that renders a div with a generated className to the dom.

(change `Hello World`)
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

const baseClassName = style(
  { color: '#333' },
);

ReactDOM.render(
  <div className={baseClassName}>

  </div>,
  document.getElementById('root')
);
```

* Lets go ahead and move this div into a stateless component.
* Then we simply render this new component in to the root dom element.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

const baseClassName = style(
  { color: '#333' },
);
const App = () => {
  return (
    <div className={baseClassName}>
      Hello World
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```

* At the heart of TypeStyle is the `style` function which very simply takes a style object (cursor around the style object) and returns a generated CSS className (cursor around className).

* Because it generates just classNames it is very easy to integrate theming into our component by simply taking a `className` property. (add a class name prop)

* The users of our component can use any framework they want to author the CSS class.

* They can even use TypeStyle's style function to generate a CSS class on the fly, e.g. we just generated a css class that bumps up the fontSize.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

const baseClassName = style(
  { color : '#333' },
);
const App = () => {
  return (
    <div className={baseClassName}>
      Hello World
    </div>
  );
}

ReactDOM.render(
  <App className={style({ fontSize: '30px' })} />,
  document.getElementById('root')
);
```

* We accept this className as an argument to our App component

```js
const App = ({ className }) => {
  return (
    <div className={baseClassName}>
      Hello World
    </div>
  );
}
```

* And then we can append it to our base className

```js
const App = ({ className }) => {
  return (
    <div className={baseClassName + ' ' + className}>
      Hello World
    </div>
  );
}
```
* And when we run the application you can see that this bumped up font size customization gets applied.

This app component works fine if the className property is always provided. However if you want to make this className property optional

```js
const App = ({ className }: { className?: string }) => {
  return (
    <div className={baseClassName + ' ' + className}>
      Hello World
    </div>
  );
}
```
and someone uses our component without any customization

```js
<App />
```

and when we run the app the `className` prop will be undefined within the app component. if you look at the dom (show the dom), we get this ugly and potentional style breaking className called `undefined`.

* Instead of doing this plain string concatenation, we can make this better with code that checks if a className was passed in.

```js
baseClassName
+ (className ? ' ' + className : '')
```

Now lets create a CSS class to denote some error condition in the UI. This class simply applies a background color of `red`.

```js
const errorClassName = style(
  { backgroundColor: 'red' }
)
```

Our `App` accepts a hasError property

```js
const App = ({ className, hasError }: { className?, hasError?}) => {
```
It then uses this `hasError` property to create a string for className concatenation similar to what we did for the previous optional class:

```js
baseClassName
+ (className ? ' ' + className : '')
+ (hasError ? ' ' + errorClassName : '')
```

You can see this whole string concatenation for different CSS classnames which may or may not be present is becoming needless verbose. Fortunately TypeStyle provides a handly `classes` function for composing CSS classes

```js
import { style, classes } from 'typestyle';
```

This function filters out any non string values and falsy values and combines the classNames with spaces inbetween.

* So we can replace this hacky concatenation with
* a simple call to classes
* baseClassName which should always be applied
* className which will automatically be ignored if it is undefined
* if hasError `hasError` is true then also the errorClassName.

```js
// baseClassName + (className ? ' ' + className : '') + (hasError ? ' ' + errorClassName : '')
classes(
  baseClassName,
  className,
  hasError && errorClassName
)
```

In short `classes` is for concatenating CSS classes and can be used for theming and composing condition driven CSS classes.
