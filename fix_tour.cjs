const fs = require('fs');
let code = fs.readFileSync('src/app/components/TourPage.tsx', 'utf8');

if (!code.includes('useLang')) {
  code = `import { useLang, t } from "../App";\n` + code;
  code = code.replace(
    /export function TourPage\(\) \{/,
    'export function TourPage() {\n  const { lang } = useLang();\n'
  );
  
  // Also we need Flame to be imported
  if (!code.includes('Flame')) {
    code = code.replace(/import \{ Clock, Plane, ArrowRight, Star \}/, 'import { Clock, Plane, ArrowRight, Star, Flame }');
  }
}

fs.writeFileSync('src/app/components/TourPage.tsx', code);
