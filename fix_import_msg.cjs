const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

code = code.replace(
  /Shield, Headphones, Award, ChevronRight, Flame, Facebook, Youtube, Music2/,
  'Shield, Headphones, Award, ChevronRight, Flame, Facebook, Youtube, Music2, MessageCircle'
);

fs.writeFileSync('src/app/App.tsx', code);
