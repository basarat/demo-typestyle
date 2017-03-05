# Render HTML/CSS server-side using TypeStyle 
> Here we show how to return CSS + HTML as a server response. And then rehydrate it on the client. Server side rendering is great for SEO and TypeStyle supports it out of the box.

Here I have a simple file containing an app component that is styled using TypeStyle.

(change `Hello World`)
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

Now let create a simple server (server.ts).

```js

import * as ReactDOMServer from 'react-dom/server';
import { App } from './app/app';
import { getStyles } from 'typestyle';
import * as express from 'express';

export const renderPage = ({ html, css }: { html: string, css: string }) => `
<html>
  <head>
    <style id="styles-target">${css}</style>
  </head>
  <body>
    <div id='root'>${html}</div>
    <script src="./bundle.js"></script>
  </body>
</html>
`;

const app = express();

app.get('/', function (req, res) {
  const html = ReactDOMServer.renderToString(<App/>);
  const css = getStyles();
  res.send(renderPage({ html,css }));
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});
```
