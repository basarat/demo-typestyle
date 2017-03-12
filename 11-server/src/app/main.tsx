import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as typestyle from 'typestyle';
import { App } from './app';

ReactDOM.render(<App />, document.getElementById('root'));
typestyle.setStylesTarget(document.getElementById('styles-target'));
