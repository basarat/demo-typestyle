import * as React from "react";
import * as ReactDOM from "react-dom";
import { style } from "typestyle";

const className = style(
  { color: '#333' },
);

ReactDOM.render(
  <div className={className}>

  </div>,
  document.getElementById('root')
);
