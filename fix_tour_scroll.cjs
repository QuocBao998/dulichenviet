const fs = require('fs');

// 1. Fix sticky not working by removing overflow-x-hidden from App.tsx root div
// (overflow-x-hidden on a parent wrapper breaks position: sticky for all children)
let appCode = fs.readFileSync('src/app/App.tsx', 'utf8');
appCode = appCode.replace(
  /className="min-h-screen font-sans selection:bg-\[#00A651\] selection:text-white bg-\[#f8fcfb\] overflow-x-hidden relative max-w-\[100vw\]"/,
  'className="min-h-screen font-sans selection:bg-[#00A651] selection:text-white bg-[#f8fcfb]"'
);
fs.writeFileSync('src/app/App.tsx', appCode);


// 2. Add scroll animations and fix sticky properties in TourPage.tsx
let tourCode = fs.readFileSync('src/app/components/TourPage.tsx', 'utf8');

// Sidebar sticky fix: needs h-fit and self-start to prevent stretching
tourCode = tourCode.replace(
  /sticky top-24"/,
  'sticky top-32 self-start h-fit z-20"'
);

// Animate title and search bar
tourCode = tourCode.replace(
  /animate=\{\{ opacity: 1, y: 0 \}\}/g,
  'whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }}'
);
tourCode = tourCode.replace(
  /animate=\{\{ opacity: 1, y: 0, rotateX: 0 \}\}/g,
  'whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: false, amount: 0.1 }}'
);

// Animate sidebar
tourCode = tourCode.replace(
  /animate=\{\{ opacity: 1, x: 0 \}\}/g,
  'whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }}'
);

// Animate tour cards
tourCode = tourCode.replace(
  /animate=\{\{ opacity: 1, scale: 1 \}\}/g,
  'whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.1 }}'
);

fs.writeFileSync('src/app/components/TourPage.tsx', tourCode);
console.log('Fixed sticky sidebar and added scroll animations to TourPage');
