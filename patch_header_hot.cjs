const fs = require('fs');

// App.tsx
let appCode = fs.readFileSync('src/app/App.tsx', 'utf8');

appCode = appCode.replace(
  /import HeroImageNew from "\.\.\/imports\/Banner_Khuyen_mai\.png";/,
  'import HeroImageNew from "../imports/Banner_Khuyen_mai.png";\nimport HotIcon from "../imports/1108.png";'
);

appCode = appCode.replace(
  /<Flame className="w-3 h-3 inline-block ml-0\.5 -mt-0\.5" \/>/g,
  '<img src={HotIcon} className="w-4 h-4 inline-block ml-1 -mt-1 drop-shadow-sm" alt="hot" />'
);

appCode = appCode.replace(
  /className=\{\`top-0 left-0 right-0 z-50 pt-2 transition-all duration-500 \$\{current !== "home" \? "sticky bg-gradient-to-r from-\[#1e64ae\] via-\[#00A651\] to-\[#77c14d\] pb-2 shadow-xl" : "absolute"\}\`\}/,
  'className={`top-0 left-0 right-0 z-50 pt-1 absolute transition-all duration-500 ${current !== "home" ? "bg-gradient-to-r from-[#1e64ae] via-[#00A651] to-[#77c14d] pb-1 shadow-md" : ""}`}'
);

fs.writeFileSync('src/app/App.tsx', appCode);

// TourPage.tsx
let tourCode = fs.readFileSync('src/app/components/TourPage.tsx', 'utf8');

if (!tourCode.includes('HotIcon')) {
  tourCode = tourCode.replace(
    /import \{ useLang, t \} from "\.\.\/App";/,
    'import { useLang, t } from "../App";\nimport HotIcon from "../../imports/1108.png";'
  );
}

tourCode = tourCode.replace(
  /<Flame className="w-3 h-3 inline-block ml-0\.5 -mt-0\.5" \/>/g,
  '<img src={HotIcon} className="w-4 h-4 inline-block ml-1 -mt-1 drop-shadow-sm" alt="hot" />'
);

fs.writeFileSync('src/app/components/TourPage.tsx', tourCode);
console.log('Update finished');
