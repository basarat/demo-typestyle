import * as React from "react";
import * as ReactDOM from "react-dom";
import { style, media } from "typestyle";

const className = style(
  {
    color: '#333',
    transition: 'font-size .2s',
  },
  media({ minWidth: 500, maxWidth: 700 }, { fontSize: '30px' }),
  media({ minWidth: 701 }, { fontSize: '50px' })
);

ReactDOM.render(
  <div className={className}>
    Hello World Media Queries
  </div>,
  document.getElementById('root')
);
