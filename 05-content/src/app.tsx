import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

const className = style(
  {
    fontSize: '20px',
    $nest: {
      '&:hover': {
        fontSize: '30px'
      }
    }
  },
);

ReactDOM.render(
  <div className={className}>
    Hello world
  </div>,
  document.getElementById('root')
);
