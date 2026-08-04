const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// The current initial array is 6 items:
// Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6
// For a 4-column layout, 6 items often leave a large gap on the right.
// Let's change it to 8 items to balance out the 4 columns nicely.
code = code.replace(
  /Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6\s*\]\)/,
  `Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8])`
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Gallery balanced with 8 images');
