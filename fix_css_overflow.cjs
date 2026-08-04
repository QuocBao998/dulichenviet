const fs = require('fs');

let css = fs.readFileSync('src/styles/theme.css', 'utf8');

if (!css.includes('overflow-x: hidden')) {
  css = css.replace(
    /body \{/,
    'body {\n    overflow-x: hidden;\n    max-width: 100vw;'
  );
  fs.writeFileSync('src/styles/theme.css', css);
  console.log('Fixed in CSS too');
}
