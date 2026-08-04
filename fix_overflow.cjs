const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Add overflow-x-hidden to the main root container
code = code.replace(
  /className="min-h-screen font-sans selection:bg-\[#00A651\] selection:text-white bg-\[#f8fcfb\]"/,
  'className="min-h-screen font-sans selection:bg-[#00A651] selection:text-white bg-[#f8fcfb] overflow-x-hidden relative max-w-[100vw]"'
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Fixed horizontal overflow');
