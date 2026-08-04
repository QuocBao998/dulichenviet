const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Update Facebook link
code = code.replace(
  /<a href="#" className="(.*?from-blue-500.*?)">\s*<Facebook className="w-5 h-5" \/>\s*<\/a>/s,
  '<a href="https://www.facebook.com/dulichsukienenviet/photos" target="_blank" rel="noopener noreferrer" className="$1">\n          <Facebook className="w-5 h-5" />\n        </a>'
);

// Update TikTok (Music2) link
code = code.replace(
  /<a href="#" className="(.*?from-black.*?)">\s*<Music2 className="w-5 h-5" \/>\s*<\/a>/s,
  '<a href="https://www.tiktok.com/@envietofficial" target="_blank" rel="noopener noreferrer" className="$1">\n          <Music2 className="w-5 h-5" />\n        </a>'
);

fs.writeFileSync('src/app/App.tsx', code);
