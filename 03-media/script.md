# Add TypeStyle responsive styles using Media Queries
> Media queries are very important for designs that you want to work on both mobile and desktop browers. TypeStyle gives it special attention to make it easy to write them in CSS in JS. We show the `media` function. We also demonstrate how you can add non standard media queries that you want.

Here we have simple React Application that renders a div with some content to the document.

(change `Hello World` to `Hello World Media Queries`)
```js
import * as React from "react";
import * as ReactDOM from "react-dom";
import { style } from "typestyle";

const className = style(
  { color: 'red' },
);

ReactDOM.render(
  <div className={className}>
    Hello World Media Queries
  </div>,
  document.getElementById('root')
);
```

We bring in TypeStyle and use its style function to generate a css class that sets the color to red. We then use this css class to style the root div.

TypeStyle provides a `media` function to make it easy to write media queries which we can import from the main module

```js
import { style, media } from "typestyle";
```
The first argument to the media function is the media query. This argument can be  followed by any number of style objects. Here we have specified that when the width becomes at least 500px bump up the fontSize for this className.

```js
const className = style(
  { color: 'red' },
  media({ minWidth: 500 }, { fontSize: '30px' })
);
```

Now as we play around with the width of the viewport you can see the fontsize change because of this media query.

To make the UI feel more fluent we can easily add a CSS transition e.g. here I specfying a transition for font-size over a duration of `.2` seconds

```js
const className = style(
  {
    color: 'red',
    transition: 'font-size .2s',
  },
  media({ minWidth: 500 }, { fontSize: '30px' })
);
```

And now we if play around with the viewport width you can see it feels much more fluent.

You can add as many media queries as you want for a class. This is because the media function just returns a new NestedCSS object, which fits well with TypeStyle's mixin model.

For example we can restrict this first media query to a maximum width of 700px.

Next we go ahead and another distinct media query for when the width is great than 700 and bump up the font size even more.

```js
const className = style(
  {
    color: 'red',
    transition: 'font-size .2s',
  },
  media({ minWidth: 500, maxWidth: 700 }, { fontSize: '30px' }),
  media({ minWidth: 701 }, { fontSize: '50px' })
);
```

(show the responsivenss of the layout)

You can even write non standard media queries if you wanted. You simply nest the query it under the `$nest` property of the style object.

```js
const className = style(
  {
    color: 'red',
    transition: 'font-size .2s',
    $nest: {
      /** iPhone */
      '@media screen and (-webkit-min-device-pixel-ratio: 2)': {
        backgroundColor: 'blue'
      }
    }
  },
  media({ minWidth: 500, maxWidth: 700 }, { fontSize: '30px' }),
  media({ minWidth: 701 }, { fontSize: '50px' }),
);
```

One final thing worth mentioning here is that you have true encapsulation of the media query (show the cursor at the media) i.e. all these media queries are nested under a className (show the cursor at className) something that is lacking in plain CSS.
