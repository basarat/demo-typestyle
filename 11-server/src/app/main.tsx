import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { setStylesTarget } from 'typestyle';
import { App } from './app';

ReactDOM.render(<App />, document.getElementById('root'));
setStylesTarget(document.getElementById('styles-target'));
