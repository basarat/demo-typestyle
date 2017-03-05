# Add TypeStyle responsive styles using Media Queries
> Media queries are very important for designs that you want to work on both mobile and desktop browers. TypeStyle gives it special attention to make it easy to write them in CSS in JS. We show the `media` function. We also demonstrate how you can add non standard media queries that you want.

We have simple React Application that renders a div with a generated className to a root div in our `index.html`

(change `Hello World` to `Hello World Media Queries`)
```js
import * as React from "react";
import * as ReactDOM from "react-dom";
import { style } from "typestyle";

const className = style(
  { color: '#333' },
);

ReactDOM.render(
  <div className={className}>
    Hello World Media Queries
  </div>,
  document.getElementById('root')
);
```

TypeStyle provides a `media` function to make it easy to write media queries which we can import from the main module

```js
import { style, media } from "typestyle";
```

You can use the media function to specify CSS breakpoints. e.g. we can change the fontSize when the width becomes greater than 300px

```js
const className = style(
  { color : '#333' },
  media({minWidth:300}, {fontSize: '30px'}) 
);
``` 

To make the UI feel more fluent we can easily add a CSS transition on fontSize e.g. here I am going to apply a transition of `.2s` on fontSize

```js
const className = style(
  { 
    color: '#333',
    transition: 'font-size .2s',
  },
  media({minWidth:300}, {fontSize: '30px'}) 
);
```

You can add as many media queries as you want. This is because the media function just returns a new NestedCSS object. Here we add another distinct media query for when the width is great than 600.

```js
const className = style(
  { 
    color: '#333',
    transition: 'font-size .2s',
  },
  media({minWidth:300, maxWidth: 600}, {fontSize: '30px'}),
  media({minWidth:601}, {fontSize: '50px'}) 
);
```

(show the responsivenss of the layout)

You can even write non standard media queries if you wanted using TypeStyle by simply using the `$nest` property of the style object.

```js
const className = style(
  { 
    color: '#333',
    transition: 'font-size .2s',
    $nest: {
      /** iPhone */
      '@media screen and (-webkit-min-device-pixel-ratio: 2)': {
        color: 'red'
      }
    }
  },
  media({minWidth:300, maxWidth: 600}, {fontSize: '30px'}),
  media({minWidth:601}, {fontSize: '50px'}),
);
```

Note that you have true encapsulation of the media query (show the cursor at the media) i.e. all these three media queries are nested under a className (show the cursor at className) something that is lacking in plain CSS.
