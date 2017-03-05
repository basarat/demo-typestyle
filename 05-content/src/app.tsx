import * as React from "react";
import * as ReactDOM from "react-dom";
import { style } from "typestyle";

const className = style(
  { 
    color: '#333',
    transition: 'font-size .2s',
    $nest: {
      '&:hover': {
        fontSize: '50px'
      }
    }
  },
);

ReactDOM.render(
  <div className={className}>
    Hello World States
  </div>,
  document.getElementById('root')
);
