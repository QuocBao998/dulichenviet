const fs = require('fs');
const code = fs.readFileSync('src/app/App.tsx', 'utf8');
const headerMatch = code.match(/function Header[\s\S]*?\/\* ── Footer ── \*\//);
if (headerMatch) {
  console.log(headerMatch[0]);
} else {
  console.log("Not found");
}
