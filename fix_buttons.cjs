const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// In Header, line 241, we have `onClick={openForm}` and `ĐẶT TOUR`.
code = code.replace(
  /onClick=\{openForm\}([\s\S]*?ĐẶT TOUR)/,
  `onClick={() => nav("tour")}$1`
);

// In HomePage, we have `onClick={() => nav("tour")}` and `ĐĂNG KÝ NGAY ĐỂ NHẬN ƯU ĐÃI`.
code = code.replace(
  /onClick=\{\(\) => nav\("tour"\)\}([\s\S]*?ĐĂNG KÝ NGAY ĐỂ NHẬN ƯU ĐÃI)/,
  `onClick={openForm}$1`
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Buttons fixed');
