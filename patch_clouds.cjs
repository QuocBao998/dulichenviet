const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Fix the overlap issue by changing "fixed" to "sticky" so it pushes content down automatically.
code = code.replace(
  /"fixed bg-gradient-to-r/,
  '"sticky bg-gradient-to-r'
);

// 2. Remove the old horizontal white strip
code = code.replace(
  /\{\/\* Full-width white gradient strip \*\/\}\s*<div className="absolute top-1\/2 -translate-y-1\/2 left-1\/2 -translate-x-1\/2 w-\[100vw\] h-\[100px\] bg-gradient-to-r from-transparent via-white\/80 to-transparent pointer-events-none" \/>/,
  ''
);

// 3. Add the "cloud" white effect that reaches the top of the screen
const logoDivRegex = /(<Motion\.div \s*initial=\{\{ opacity: 0, scale: 0\.8, y: -20 \}\}\s*animate=\{\{ opacity: 1, scale: 1, y: 0 \}\}\s*transition=\{\{ duration: 0\.8, ease: "easeOut" \}\}\s*className="relative z-10"\s*>)/;

const cloudEffect = `$1
          {/* Cloud-like white background behind logo, reaching the top */}
          <div className="absolute top-[-50px] md:top-[-80px] left-1/2 -translate-x-1/2 w-[150vw] md:w-[120vw] h-[200px] md:h-[250px] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.9)_30%,_rgba(255,255,255,0)_70%)] pointer-events-none blur-md z-[-1]" />
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[80vw] h-[150px] bg-white opacity-80 blur-3xl rounded-full pointer-events-none z-[-1]" />`;

code = code.replace(logoDivRegex, cloudEffect);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Clouds added and header set to sticky');
