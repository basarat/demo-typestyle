# Compose CSS classes using TypeStyle

> We will demonstrate composing classes using the utility classes function. `classes` is also what we recommend for theming.

We have simple React Application that renders a div with a generated className to a root div in our `index.html`

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

* At the heart of TypeStyle is the `style` function which very simply takes a style object (cursor around the style object) and returns a className (cursor around className).

* Because it generates just classNames it is very easy to integrate theming into our component by simply taking a `className` property. (add a class name prop)

* We can generate a class on the fly using TypeStyle.

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
const App = ({className}) => {
  return (
    <div className={baseClassName}>
      Hello World
    </div>
  );
}
```

* And then we can append it to our base className 

```js
const App = ({className}) => {
  return (
    <div className={baseClassName + ' ' + className}>
      Hello World
    </div>
  );
}
```
This works fine if the className is always provided. However if you want to make this className property optional 

```js
const App = ({className} : {className?}) => {
  return (
    <div className={baseClassName + ' ' + className}>
      Hello World
    </div>
  );
}
```
and we don't pass in any customization class: 

```js
<App />
```
You can see that `className` will be undefined and if you look at the dom (show the dom), we get this ugly and potentional style breaking class applied to the element.

* You can make this better with code that checks if a className was passed in.

```js
baseClassName + (className ? ' ' + className : '') 
```

Now lets create another CSS class that applies a background color of `red`.

```js
const errorClassName = style({
  backgroundColor: 'red'
})
```

Our `App` accepts a hasError property 

```js
const App = ({className, hasError} : {className?, hasError?}) => {
```
It these uses this `hasError` property to create a string for className concatenation :

```js
baseClassName + (className ? ' ' + className : '') + (hasError ? ' ' + errorClassName : '')
```

You can see this quickly becoming needless verbose. Fortunately TypeStyle provides a handly `classes` function for composing CSS classes

```js
import { style, classes } from 'typestyle';
```

This function filters out any non string values and combines the classNames. 
* So we can replace this hacky concatenation with 
* a simple call to classes
* baseClassName which should always be applied
* className which will automatically be ignored if it is undefined
* if hasError `hasError` is true then also the errorClassName.

```js
// baseClassName + (className ? ' ' + className : '') + (hasError ? ' ' + errorClassName : '')
classes(baseClassName, className, hasError && errorClassName)
```

In short `classes` is for style customization using CSS classes and can be used for theming and composing CSS classes. (show arrows against the items).
