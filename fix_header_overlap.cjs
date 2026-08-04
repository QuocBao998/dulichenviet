const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

code = code.replace(
  /className=\{\`top-0 left-0 right-0 z-50 pt-1 absolute transition-all duration-500 \$\{current !== "home" \? "bg-gradient-to-r from-\[#1e64ae\] via-\[#00A651\] to-\[#77c14d\] pb-1 shadow-md" : ""\}\`\}/,
  'className={`top-0 left-0 w-full z-50 pt-1 transition-all duration-500 ${current !== "home" ? "relative bg-gradient-to-r from-[#1e64ae] via-[#00A651] to-[#77c14d] pb-1 shadow-md" : "absolute"}`}'
);

fs.writeFileSync('src/app/App.tsx', code);
