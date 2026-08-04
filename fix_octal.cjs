const fs = require('fs');

let code = fs.readFileSync('src/app/components/GioiThieuPage.tsx', 'utf8');

// The error tells us: { val: 05, suf: "+", l: "Văn Phòng, Chi Nhánh" }
// We need to remove the leading zero. 05 -> 5
code = code.replace(/val:\s*05/g, 'val: 5');

fs.writeFileSync('src/app/components/GioiThieuPage.tsx', code);
console.log('Fixed octal literal issue');
