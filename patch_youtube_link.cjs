const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

code = code.replace(
  /href="https:\/\/www\.youtube\.com\/@DuLịchÉnViệt"/,
  'href="https://www.youtube.com/@DuL%E1%BB%8Bch%C3%89nVi%E1%BB%87t"'
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('YouTube link updated');
