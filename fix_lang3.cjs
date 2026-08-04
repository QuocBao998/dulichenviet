const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// AppContent accidentally got double injected
code = code.replace(/const \{ lang \} = useLang\(\);\n\s*const \{ lang, setLang \} = useLang\(\);/, 'const { lang, setLang } = useLang();');

fs.writeFileSync('src/app/App.tsx', code);
