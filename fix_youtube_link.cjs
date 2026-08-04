const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

code = code.replace(
  /<a href="#" className="(w-10 h-10 bg-gradient-to-br from-red-500[^>]+)">\s*<Youtube/s,
  '<a href="https://www.youtube.com/@DuL%E1%BB%8Bch%C3%89nVi%E1%BB%87t" target="_blank" rel="noopener noreferrer" className="$1">\n          <Youtube'
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('YouTube link actually updated this time!');
