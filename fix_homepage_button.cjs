const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

code = code.replace(
  /onClick=\{\(\) => nav\("tour"\)\}(\s*className="bg-gradient-to-r from-\[#1e64ae\] to-\[#77c14d\] text-white font-extrabold[\s\S]*?ĐĂNG KÝ NGAY ĐỂ NHẬN ƯU ĐÃI)/,
  `onClick={openForm}$1`
);

fs.writeFileSync('src/app/App.tsx', code);
