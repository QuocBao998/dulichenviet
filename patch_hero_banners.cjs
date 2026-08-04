const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Import the new image
code = code.replace(
  /import PromoImage from "\.\.\/imports\/Gemini_Generated_Image_8udbo58udbo58udb\.png";/,
  `import PromoImage from "../imports/Gemini_Generated_Image_8udbo58udbo58udb.png";\nimport HeroImageNew from "../imports/Gemini_Generated_Image_8udbo58udbo58udb-1.png";`
);

// Update heroBanners array
const oldHeroBanners = `  const heroBanners = [
    "https://images.unsplash.com/photo-1766721375768-2ddbfeeb1f4e?w=1800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80",
    "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=1800&q=80"
  ];`;

const newHeroBanners = `  const heroBanners = [
    HeroImageNew,
    "https://images.unsplash.com/photo-1766721375768-2ddbfeeb1f4e?w=1800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80",
    "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=1800&q=80"
  ];`;

code = code.replace(oldHeroBanners, newHeroBanners);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Hero banners updated');
