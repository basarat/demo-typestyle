import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

const baseClassName = style(
  { color: '#333' },
);

ReactDOM.render(
  <div className={baseClassName}>
  
  </div>,
  document.getElementById('root')
);
