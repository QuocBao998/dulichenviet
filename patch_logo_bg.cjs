const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Remove the white box from the logo
code = code.replace(
  /className="w-20 h-20 md:w-24 md:h-24 object-contain relative z-10 bg-white\/20 border-2 border-white rounded-2xl p-1 md:p-2 backdrop-blur-md drop-shadow-\[0_0_15px_rgba\(255,255,255,0\.8\)\]"/,
  'className="w-20 h-20 md:w-28 md:h-28 object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(255,255,255,0.5)]"'
);

// 2. Add the full-width white gradient strip behind the logo
// Find the <Motion.div> for the logo
const logoDivRegex = /(<Motion\.div\s*initial=\{\{ opacity: 0, scale: 0\.8, y: -20 \}\}\s*animate=\{\{ opacity: 1, scale: 1, y: 0 \}\}\s*transition=\{\{ duration: 0\.8, ease: "easeOut" \}\}\s*className="relative z-10"\s*>)/;

const newLogoDiv = `$1
          {/* Full-width white gradient strip */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[100vw] h-[100px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />`;

code = code.replace(logoDivRegex, newLogoDiv);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Logo background updated to full-width horizontal gradient');
