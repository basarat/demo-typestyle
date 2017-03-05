import { style } from 'typestyle';
const className = style({
  color: 'darkorange'
});
document.getElementById('root').innerHTML = `
  <div class="${className}">
    Hello world
  </div>
`;
