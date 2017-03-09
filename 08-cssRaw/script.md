# Load raw CSS in TypeStyle
> TypeStyle tries to be an all in one CSS in JS management solution so you can always fall back to raw CSS if you ever need to migrate old code quickly. This lesson will demonstrate how to use it along with the real world use case of e.g. using `normalize.css`.

Here we have a simple div being styled using TypeStyle.


(  `{ fontSize: '30px' }, `)
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

const className = style(

);

ReactDOM.render(
  <div className={className}>
    Hello world
  </div>,
  document.getElementById('root')
);
```

* TypeStyle allows you to use *raw unencapsulated* CSS using the `cssRaw` function that is exported from the main module.

```js
import { style, cssRaw } from 'typestyle';
```

It simply takes any raw CSS you want typestyle to manage as a simple string. e.g. here we have some raw css that adds a red color to items with className `red`

```js
cssRaw(`
.red {
  color: red;
}
`);
```

We can show that this css is loaded by applying this className to the div that we are rendering.

```js
ReactDOM.render(
  <div className={className + ' red'}>
    Hello world
  </div>,
  document.getElementById('root')
);
```

You can call cssRaw multiple times and the new CSS is simply appended to the buffer of the CSS that is managed by TypeStyle.

```js
cssRaw(`
.bold {
  font-weight: bold;
}
`);
```
```js
<div className={className + ' red bold'}>
```

Using cssRaw is highly discouraged as it suffers from global namespace pollution e.g. here the `red` and `bold` CSS classnames are global and can interfer with any other library stylesheet you might have in your project.

That said it is great for quickly *migrating existing CSS*, writing proof of concepts and even bringing in a global CSS reset e.g. https://necolas.github.io/normalize.css/

```js
cssRaw(`
button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0} menu,article,aside,details,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{}button,select{text-transform:none}[type=submit], [type=reset],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}/*# sourceMappingURL=normalize.min.css.map */
`)
```
Re writing such global css in a cssInJS format would be a waste of time and using `cssRaw` for this is perfectly fine.
