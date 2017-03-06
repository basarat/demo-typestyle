import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

const className = style(
  { color: 'red' },
);

ReactDOM.render(
  <div className={className}>
    Hello World
  </div>,
  document.getElementById('root')
);
