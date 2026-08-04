const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Replace the max-w-lg with larger max-width variants for medium and large screens
code = code.replace(
  /className="relative w-full max-w-lg z-10"/,
  'className="relative w-full max-w-lg md:max-w-2xl lg:max-w-4xl z-10"'
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Banner size updated');
