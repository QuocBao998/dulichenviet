const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');
code = code.replace(/Tư V..n Visa/g, 'Tư Vấn Visa');
fs.writeFileSync('src/app/App.tsx', code);
