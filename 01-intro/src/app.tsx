import { style } from 'typestyle';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
const className = style({
  color: 'darkorange',
  position: 'relative'
});
// document.getElementById('root').innerHTML = `
//   <div class="${className}">
//     Hello world
//   </div>
// `;
ReactDOM.render(<div className={className}>Hello world react</div>,
  document.getElementById('root'));