const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

code = code.replace(
  /import HeroImageNew from "\.\.\/imports\/Banner_Khuyen_mai\.png";/g,
  'import HeroImageNew from "../imports/Banner_Khuyen_mai.png.png";'
);

code = code.replace(
  /import PromoImage from "\.\.\/imports\/Banner_Khuyen_mai\.png";/g,
  'import PromoImage from "../imports/Banner_Khuyen_mai.png.png";'
);

// also just in case it was imported exactly like that
code = code.replace(
  /"\.\.\/imports\/Banner_Khuyen_mai\.png"/g,
  '"../imports/Banner_Khuyen_mai.png.png"'
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Fixed banner import');
