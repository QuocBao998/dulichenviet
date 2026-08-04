const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// I see `useLang` wasn't injected correctly because the regex might not have matched perfectly. Let's do it manually.

code = code.replace(
  /function Header\(\{ current, nav \}: \{ current: Page; nav: \(p: Page\) => void \}\) \{/,
  `function Header({ current, nav }: { current: Page; nav: (p: Page) => void }) {\n  const { lang, setLang } = useLang();`
);

code = code.replace(
  /function Footer\(\{ nav \}: \{ nav: \(p: Page\) => void \}\) \{/,
  `function Footer({ nav }: { nav: (p: Page) => void }) {\n  const { lang } = useLang();`
);

code = code.replace(
  /function HomePage\(\{ nav, openForm \}: \{ nav: \(p: Page\) => void, openForm: \(\) => void \}\) \{/,
  `function HomePage({ nav, openForm }: { nav: (p: Page) => void, openForm: () => void }) {\n  const { lang } = useLang();`
);

code = code.replace(
  /function AppContent\(\) \{/,
  `function AppContent() {\n  const { lang } = useLang();`
);

fs.writeFileSync('src/app/App.tsx', code);
