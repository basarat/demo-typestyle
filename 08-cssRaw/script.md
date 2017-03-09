# Load raw CSS in TypeStyle
> TypeStyle tries to be an all in one CSS in JS management solution so you can always fall back to raw CSS if you ever need to migrate old code quickly. This lesson will demonstrate how to use the `cssRaw` function along with the real world use case of CSS resets e.g. `normalize.css`.

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

* The cssRaw function simply takes a string containing any raw CSS you want typestyle to manage.
* e.g. here we have some raw css that adds a css classname called red, that sets the color to `red`

```js
cssRaw(`
.red {
  color: red;
}
`);
```

* Note that raw CSS is pure CSS by its very nature global.
* In our example the class name `red` is global css class.

* We can use this css class anywhere in our application e.g. lets apply it to the root div that we are rendering by simply concatenating `red` the className.

```js
ReactDOM.render(
  <div className={className + ' red'}>
    Hello world
  </div>,
  document.getElementById('root')
);
```
* And when we run the application you can see the div turns red.

You can call cssRaw multiple times and the new CSS is simply appended to the buffer of the CSS that is managed by TypeStyle.

```js
cssRaw(`
.bold {
  font-weight: bold;
}
`);
```

And we can use this class just like we used the bold class.

```js
<div className={className + ' red bold'}>
```

And now when we run the application you can see the font-weight change to bold.


`cssRaw` is great for quickly *migrating existing CSS*, writing proof of concepts and even bringing in a global CSS reset e.g. https://necolas.github.io/normalize.css/

```js
cssRaw(`
button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0} menu,article,aside,details,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{}button,select{text-transform:none}[type=submit], [type=reset],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}/*# sourceMappingURL=normalize.min.css.map */
`)
```

* I can just jump to the CDN,
* copy all the raw CSS
* jump back to my project.
* Call cssRaw
* paste it in
* and we are done.

Re writing such global css in a cssInJS format would be a waste of time and using `cssRaw` for this is perfectly fine.
