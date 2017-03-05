# Add CSS keyframe animations using TypeStyle
> We cover CSS keyframes and how to create them using TypeStyle. We then show how to use keyframes to create an animation.

We have simple React Application that renders a div with a generated className to a root div in our `index.html`

(change `Hello World`)
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

const className = style(
  { fontSize: '20px' },
);

ReactDOM.render(
  <div className={className}>

  </div>,
  document.getElementById('root')
);
```

* TypeStyle provides a keyframes function that takes CSS keyframes and returns a generated animation name.

```js
import { style, keyframes } from 'typestyle';
```

Here we generate an animation that transitions the color from black to blue. 

```js
const colorAnimationName = keyframes({
  '0%': { color: 'black' },
  '50%': { color: 'blue' }
});
```

We can use this generated animationName as a CSS property for our style object

```js
const className = style(
  { 
    fontSize : '20px',
    animationName: colorAnimationName,
  },
);
```
CSS keyframe animations are controlled using additional properties in the `animation` namespace. E.g. 
* we can control the animation duration using the `animationDuration` CSS property. 

```js
const className = style(
  { 
    fontSize : '20px',
    animationName: colorAnimationName,
    animationDuration: '1s',
  },
);
```
Now the animation plays for `1s`. 

* We can make the animation play in a continuous loop using the `animationIterationCount` CSS property

```js
const className = style(
  { 
    fontSize : '20px',
    animationName: colorAnimationName,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  },
);
```

* Note that The keyframes function very similar to the `style` function which simply takes a style object (cursor around the style object) and returns a className (cursor around className). The keyframes function takes CSS keyframes and returns an animation name.

You can use `keyframes` inline as well e.g. lets create a fade in transition.

* We only want this to run once so we remove the animationIterationCount
* Use keyframes, from an opacity of `0` to an opacity of `1`. And now the div is rendered with a fade in.

```js
const className = style(
  { 
    fontSize : '20px',
    animationName: keyframes({from: {opacity: 0}, to: {opacity: 1}}),
    animationDuration: '1s',
  },
);
```