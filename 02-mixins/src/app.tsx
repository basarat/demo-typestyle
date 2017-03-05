import * as React from "react";
import * as ReactDOM from "react-dom";
import { style } from "typestyle";

const className = style(
  { fontSize: '30px' },
  { color: 'red' },
);

ReactDOM.render(
  <div className={className}>
    Hello World Mixins
  </div>,
  document.getElementById('root')
);
