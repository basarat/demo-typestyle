# Generate static css + html files using TypeStyle
> You can easily use TypeStyle to build static html files with encapsulated CSS. You can use this pattern to generate email and pdf template files. Since TypeStyle supports cssRaw all your css can be easily inlined into a single file making it easy to work with template rendering engines.

Let's go ahead and create a CSS classname using TypeStyle's style function setting up a color and a fontSize.

Next we are going to create a react App component that uses this CSS className to style a div. We put in some demo text "hello world" into the div.

(change `Hello World `)
```js
import * as React from 'react';
import { style } from 'typestyle';

const className = style({
  color: 'red',
  fontSize: '30px',
});

const App = () => {
  return (
    <div className={className}>
      Hello World
    </div>
  );
}
```

We can easily render this App component to a string using `ReactDOMServer`.
* We bring in the ReactDOMServer module.
* We get the html as a string using ReactDOMServer.renderToStaticMarkup function passin in the app component.  
* Lets log out this html string as a demo.

```js
import * as ReactDOMServer from 'react-dom/server';
const html = ReactDOMServer.renderToStaticMarkup(<App />);
console.log({ html });
```

Similar to how you can get all the HTML for a react component, you can get all the CSS managed by TypeStyle using the `getStyles()` function which you can bring in from the main `typestyle` module

```js
import { style, getStyles } from 'typestyle';
```
* It simply returns as a string, all the CSS that is being managed by TypeStyle at a particular point in time.

* Let's log out this CSS next to our HTML.

```js
import * as ReactDOM from 'react-dom/server';
const html = ReactDOMServer.renderToString(<App/>);
const css = getStyles();
console.log({html, css});
```

Now that you have a pattern for getting all the css and html for your application, you can use these to create a static html file that is fully self contained quite easily.

* Lets create a reuseable `renderPage` function that takes some component html and css strings and returns a rendered static html string.

* Our static html file will contain a root html tag,
* A `head` tag containing a style tag which contains all our `css`. Now we can close out our document head.
* Next we add a `body` tag,
  * containing a `div`
   * which will contain all our `html`.
  * and then close out the root div and body tags.

```js
export const renderPage = ({ html, css }) => `
<html>
  <head>
    <style>${css}</style>
  </head>
  <body>
    <div>${html}</div>
  </body>
</html>
`;
```
* Now with this reuseable renderPage function in place,

* we can call this it with our generated html and css to get the rendered page as a string.

```js
const renderedPage = renderPage({ html, css });
```

Now if we wanted we can write this rendered page string to a file on disk e.g.

```js
import * as fs from 'fs';
fs.writeFileSync(__dirname + '/index.html', renderedPage);
```

* Now if we run the application this `index.html` will appear on disk.
* If we go ahead and open this file in our browser.
* You can see that we get a properly styled div based on our CSS .
* If we inspect the source code for this html file, you can see that it is fully contained
  * in term of CSS present in the document head
  *  and html present in the document body.
