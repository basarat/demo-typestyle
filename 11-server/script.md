# Render HTML/CSS server-side using TypeStyle 
> Here we show how to return CSS + HTML as a server response. And then rehydrate it on the client. Server side rendering is great for SEO and TypeStyle supports it out of the box.

Here I have a simple file containing an app component that is styled using TypeStyle.

(change `Hello World`)
```js
import * as React from 'react';
import { style } from 'typestyle';

const className = style({
  color: 'red',
  fontSize: '30px',
});

export const App = () => {
  return (
    <div className={className}>
      Hello World
    </div>
  );
}
```

Now let create a simple server. First I will go ahead and install express `npm install express @types/express -S`. Next we will create a `server.ts` file.

```js
import * as ReactDOMServer from 'react-dom/server';
import { getStyles } from 'typestyle';
import { App } from './app/app';
import * as express from 'express';

export const renderPage = ({ html, css }) => `
<html>
  <head>
    <style id="styles-target">${css}</style>
  </head>
  <body>
    <div id="root">${html}</div>
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

Our `bundle.js` is being generated using webpack and points to `app/main.tsx` file. 
* Lets go ahead and create this main.tsx file 
* We will bring and react and react dom for the html.
* From TypeStyle we will bring in `setStylesTarget` for the css.
* We will hydrate the html using React DOM at the root div 
* We will hydrate the css using `setStylesTarget` at the `styles-target` tag.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { setStylesTarget } from 'typestyle';

ReactDOM.render(<App/>, document.getElementById('root'));
setStylesTarget(document.getElementById('styles-target'));
```
