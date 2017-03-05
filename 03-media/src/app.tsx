import * as React from "react";
import * as ReactDOM from "react-dom";
import { style, media } from "typestyle";

const className = style(
  {
    color: '#333',
    transition: 'font-size .2s',
    $nest: {
      /** iPhone */
      '@media screen and (-webkit-min-device-pixel-ratio: 2)': {
        color: 'red'
      }
    }
  },
  media({ minWidth: 300, maxWidth: 600 }, { fontSize: '30px' }),
  media({ minWidth: 601 }, { fontSize: '50px' }),
);

ReactDOM.render(
  <div className={className}>
    Hello World Media Queries
  </div>,
  document.getElementById('root')
);
