const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Replace whileHover
code = code.replace(
  /whileHover=\{\{ scale: 1\.05, backgroundColor: "rgba\(255,255,255,0\.3\)" \}\}/,
  'whileHover={{ scale: 1.05 }}'
);

// Add hover:bg-white/30 to the button
code = code.replace(
  /className="(\$\{glass\} bg-white\/10 text-white font-bold px-10 py-4 rounded-2xl transition-all text-sm md:text-base tracking-wide border-white\/50 backdrop-blur-2xl hover:border-white shadow-xl)"/,
  'className="$1 hover:bg-white/30"'
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Fixed oklab error by removing JS background color animation');
