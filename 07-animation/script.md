# Add CSS animations using TypeStyle
> We cover CSS keyframes and how to create them using TypeStyle. We then show how to use keyframes to create an animation.

We have simple React Application with the root div being styled using TypeStyle.

(change `{ fontSize: '20px' },`)
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

const className = style(

);

ReactDOM.render(
  <div className={className}>
    Hello world
  </div>,
  document.getElementById('root')
);
```

* about import
```js
import { style, keyframes } from 'typestyle';
```
The keyframes function takes a single object as an argument. Each key in this object is a time point and each value is a CSS style.

Here we generate an animation that transitions the color from black to blue.

```js
const colorAnimationName = keyframes({
  '0%': { color: 'black' },
  '50%': { color: 'blue' }
});
```

The keyframes function returns a generated CSS animation name similar to how the style function returns a generated CSS className.

We can go ahead and use this generated animationName as a value for hte animationName css property in our style.

```js
const className = style(
  {
    fontSize: '20px',
    animationName: colorAnimationName,
  },
);
```

* CSS keyframe animations are controlled using additional css properties in the `animation` namespace.
* E.g. we can set the animation duration using the `animationDuration` CSS property. With a value of `1s` the animation time points are scaled to 1 second.
* If we go ahead and run the application you will see the animation change the color from black to blue and then back to black over 1 second.

```js
const className = style(
  {
    fontSize: '20px',
    animationName: colorAnimationName,
    animationDuration: '1s',
  },
);
```

* As an example of another animation CSS property, We can make the animation play in a continuous loop using the `animationIterationCount` CSS property which we will set to infinte.

```js
const className = style(
  {
    fontSize: '20px',
    animationName: colorAnimationName,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  },
);
```

* And now when we run the application you get a continuous smooth infinite animation between black and blue.

* Similar to how the `style` function simply takes a style object (cursor around the style object) and returns a generated css className (cursor around className). The keyframes function takes CSS keyframes and returns a generated css animation name.

If you only plan to use the keyframes only once, you can use the `keyframes` function, inline as well, e.g. I can take this keyframes function call, and simply move it to the animationName value.


* As another example, lets create a fade in transition.
* We will fade in over a duration of 1seconds.
* We will generate an animationName using keyframe that go from an opacity of `0` to an opacity of `1`.

```js
const className = style(
  {
    fontSize: '20px',
    animationDuration: '1s',
    animationName: keyframes({ from: { opacity: 0 }, to: { opacity: 1 } }),
  },
);
```

And now when we run the application you can see a nice fade in effect.
