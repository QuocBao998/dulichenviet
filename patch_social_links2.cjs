const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Update Facebook link
code = code.replace(
  /href="https:\/\/www\.facebook\.com\/dulichsukienenviet\/photos"/,
  'href="https://www.facebook.com/dulichsukienenviet"'
);

// Update YouTube link
code = code.replace(
  /<a href="#" (className="(.*?from-red-500.*?)")>\s*<Youtube className="w-5 h-5" \/>\s*<\/a>/s,
  '<a href="https://www.youtube.com/@DuLịchÉnViệt" target="_blank" rel="noopener noreferrer" $1>\n          <Youtube className="w-5 h-5" />\n        </a>'
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Social links updated');
