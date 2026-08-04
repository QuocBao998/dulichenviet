const fs = require('fs');

let code = fs.readFileSync('src/app/components/GioiThieuPage.tsx', 'utf8');

// 1. Change top sections' static animate to whileInView so they trigger on scroll
code = code.replace(
  /animate=\{\{ opacity: 1, y: 0 \}\}/g,
  'whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }}'
);

code = code.replace(
  /animate=\{\{ opacity: 1, x: 0 \}\}/g,
  'whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }}'
);

// 2. Change existing whileInView elements that trigger only once to trigger every time
code = code.replace(
  /viewport=\{\{\s*once:\s*true/g,
  'viewport={{ once: false'
);

fs.writeFileSync('src/app/components/GioiThieuPage.tsx', code);
console.log('Scroll animations set to trigger multiple times on GioiThieuPage');
