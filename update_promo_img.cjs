const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Replace PromoImage import
code = code.replace(
  /import PromoImage from "\.\.\/imports\/Gemini_Generated_Image_8udbo58udbo58udb\.png";/,
  'import PromoImage from "../imports/Gemini_Generated_Image_z8oi6gz8oi6gz8oi.png";'
);

// Fallback if the import was already changed to something else
code = code.replace(
  /import PromoImage from "\.\.\/imports\/Banner_Khuyen_mai\.png\.png";/,
  'import PromoImage from "../imports/Gemini_Generated_Image_z8oi6gz8oi6gz8oi.png";'
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('PromoImage updated');
