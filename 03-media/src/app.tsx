import * as React from "react";
import * as ReactDOM from "react-dom";
import { style, media } from "typestyle";

const className = style(
  { color: '#333' },
  media({ minWidth: 300 }, { fontSize: '30px' })
);

ReactDOM.render(
  <div className={className}>
    Hello World Media Queries
  </div>,
  document.getElementById('root')
);
