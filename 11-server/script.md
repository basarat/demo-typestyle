# Render HTML/CSS server-side using TypeStyle 
> Here we show how to return CSS + HTML as a server response. And then rehydrate it on the client. Server side rendering is great for SEO and TypeStyle supports it out of the box.

Here I have a simple file containing an app component that is styled using TypeStyle.

(change `Hello World `)
```js
import * as React from "react";
import { style } from "typestyle";

const className = style(
  { color : '#333' },
);
const App = () => {
  return (
    <div className={className}>
      Hello World
    </div>
  );
}
```

Now let create a simple server that renders out the 

```js
var {html, css} = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToString(<App/>);
});

// Return the base HTML, which contains your rendered HTML as well as a
// simple rehydration script.
return `
<html>
    <head>
        <style id="styles-target">${css}</style>
    </head>
    <body>
        <div id='root'>${html}</div>
        <script src="./bundle.js"></script>
        <script>
            ReactDOM.render(<App/>, document.getElementById('root'));
            setStylesTarget(document.getElementById('styles-target'));
        </script>
    </body>
</html>
`;
```