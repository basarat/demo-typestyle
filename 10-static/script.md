# Generate static html files using TypeStyle
> You can easily use TypeStyle to build static html + css files. You can use the same pattern to generate email and pdf template files. Since TypeStyle supports cssRaw all your css can be easily inlined into a single file.

Here I have a simple file containing an app component that is styled using TypeStyle.

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

* We can easily render this component to a string using `ReactDOMServer.renderToString()`.
* Lets log it out to see the output.

```js
import * as ReactDOMServer from 'react-dom/server';
const html = ReactDOMServer.renderToString(<App />);
console.log({ html });
```

Similar to how you can get all the HTML for a react component, you can get all the CSS managed by TypeStyle using the `getStyles()` function. We can bring in this function from `typestyle` 

```js
import { style, getStyles } from 'typestyle';
```
It simply returns all the CSS as a string 

```js
import * as ReactDOM from 'react-dom/server'; 
const html = ReactDOMServer.renderToString(<App/>);
const css = getStyles();
console.log({html, css});
```
We can use this pattern to create static html files that are fully self contained with all the `html` and `css` we can do that quite easily. 

* First we write a `renderPage` function that takes `html` and css`.
* It uses string templates populate our template page with the provided html and css

```js
export const renderPage = ({ html, css }: { html: string, css: string }) => `
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

* Finally we can call this function with our generated html and css to get the rendered page.

```js
const renderedPage = renderPage({ html, css });
```

Now if we wanted we can write this rendered page to a file on disk e.g. 

```js
import * as fs from 'fs';
fs.writeFileSync(__dirname + '/index.html', renderedPage);
```
This html file is fully self contained and can be pushed to an online hosting like `github pages` or `s3`. You can also use this pattern to write template files which can then be sent as an email or rendered to pdf etc.
