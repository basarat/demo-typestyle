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

* Now let create a simple server to pre-render this component and its CSS and return it as an http response.

* First I will go ahead and install express `npm install express @types/express -S`. Next we will create a `server.tsx` file.

```js
import * as React from 'react';
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
Some notes ^ :
* We will go ahead and create a utility renderPage function which will take some html and css and return a rendered index.html content as a string.
* Our main html page contains html with a head tag containing a style tag with id  ... which contains all our server rendered css.
* Next it has a body tag with a root div (of id root) which contains all our server rendered html
* Finally our index page loads our client side script `bundle.js` which will redydrate the style-target and root div.

* We will create our http server using express.
* We will add a root handler to return our index page.
  * We will pre-render the html using ReactDOMServer.renderToString passing in our app component.
  * We will get the server collected styles using typestyle's getStyles function.
  * And we will send the response by rendering into the page, this html and css.

* To serve our client `bundle.js` file we will simply serve up the public folder.

* Finally our application will listen on port 3000 and once it starts it will log out the message "App listening on port 3000".

* The `bundle.js` file in our index page is being generated using webpack, which is configured using `webpack.config.js`. (show wepback.config.js).
  * The output section of our config is writing `bundle.js` to the public folder.
  * Our application entry in the config points to `src/app/main.tsx` file

* Lets go ahead and create this main.tsx file which is our client side entry point.
* We will bring and react and react dom for hydrating the html.
* We will also bring in TypeStyle for hydrating the css.
* Next we bring in our root app component.
* We will hydrate the html using React DOM at the root div
* To hydrate the CSS we will set typestyle styles target to the style tag in the document head.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as typestyle from 'typestyle';
import { App } from './app';

ReactDOM.render(<App />, document.getElementById('root'));
typestyle.setStylesTarget(document.getElementById('styles-target'));
```

* To demonstrate this project, we have `start` target in our  package.json, that runs webpack to generate our bundle.js and then starts the server by running our `server.tsx`.

* So we jump back to the terminal and run `npm start`
  * This kicks off webpack which will generate our `public/bundle.js` file
  * And then the express server starts, listening for requests on port 3000.

* If we open up our browser on localhost:3000, you can see that the application works as expected.

* If we look at the network tab in our developer tools, the HTML and CSS was pre rendered on the server and sent as a part of the original response.
* It was then redyrated by bundle.js on the client.
* And now the dom contains the rehydrated style and the root div.

* To recap.
  * We created our styles and react components,
  * render them on the server and send them down as a part of the response.
  * Then finally rehydrated them on the client.
