import * as React from 'react';
import { style, getStyles } from 'typestyle';

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

import * as ReactDOMServer from 'react-dom/server';
const html = ReactDOMServer.renderToString(<App />);
const css = getStyles();

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
const renderedPage = renderPage({ html, css });
import * as fs from 'fs';
fs.writeFileSync(__dirname + '/index.html', renderedPage);