const fs = require('fs');

let code = fs.readFileSync('src/app/components/GioiThieuPage.tsx', 'utf8');

code = code.replace(
  /<img src="https:\/\/images\.unsplash\.com\/photo-1469854523086-cc02fe5d8800\?w=800&q=80" alt="Én Việt Travel" className="w-full h-\[400px\] object-cover" \/>/,
  '<img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" alt="Máy bay - Én Việt Travel" className="w-full h-[400px] object-cover" />'
);

fs.writeFileSync('src/app/components/GioiThieuPage.tsx', code);
console.log('Image updated');
