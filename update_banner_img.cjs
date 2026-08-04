const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Replace the import path for the new banner
code = code.replace(
  /import HeroImageNew from "\.\.\/imports\/Gemini_Generated_Image_8udbo58udbo58udb-1\.png";/,
  `import HeroImageNew from "../imports/Banner_Khuyen_mai.png";`
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Banner image updated');
