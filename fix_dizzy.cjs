const fs = require('fs');

let tourCode = fs.readFileSync('src/app/components/TourPage.tsx', 'utf8');

// Thay đổi hiệu ứng lặp đi lặp lại (once: false) thành chỉ chạy 1 lần duy nhất (once: true)
tourCode = tourCode.replace(/once: false/g, 'once: true');

fs.writeFileSync('src/app/components/TourPage.tsx', tourCode);
console.log('Removed repetitive scroll animations in TourPage');
