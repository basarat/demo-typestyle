import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

const className = style(
  {
    fontSize: '20px',
    backgroundColor: 'rgba(200, 54, 54, 0.5)',
  }
);

ReactDOM.render(
  <div className={className}>
    Hello world
  </div>,
  document.getElementById('root')
);