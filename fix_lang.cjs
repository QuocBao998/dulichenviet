const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// The LangContext is probably not correctly being destructured since `useLang` wasn't added to NAV mapping
// Actually NAV is outside the component, so it can't use `lang` directly. We must pass `lang` or call `t` inside the component.

// 1. Let's fix NAV mapping in Header.
// Since NAV is outside, we just need to ensure `const { lang, setLang } = useLang();` is inside Header.
// Check if it's there:
if (!code.includes('const { lang, setLang } = useLang();')) {
  console.log("Adding useLang hooks");
  
  code = code.replace(
    /function Header\(\{[^}]*\}\) \{/g,
    `$& \n  const { lang, setLang } = useLang();\n`
  );
  
  code = code.replace(
    /function HomePage\(\{[^}]*\}\) \{/g,
    `$& \n  const { lang, setLang } = useLang();\n`
  );
  
  code = code.replace(
    /function Footer\(\{[^}]*\}\) \{/g,
    `$& \n  const { lang, setLang } = useLang();\n`
  );
}

// 2. Also AppContent needs it to translate the modals
if (!code.includes('function AppContent() {\n  const { lang, setLang }')) {
  code = code.replace(
    /function AppContent\(\) \{/,
    `$& \n  const { lang, setLang } = useLang();\n`
  );
}

// 3. Make sure useLang is defined at the top
if (!code.includes('export const useLang = () => useContext(LangContext);')) {
  const contextCode = `
import { createContext, useContext } from "react";

export type Lang = "vi" | "en";
export const LangContext = createContext<{lang: Lang, setLang: (l: Lang) => void}>({lang: "vi", setLang: () => {}});
export const useLang = () => useContext(LangContext);
export const t = (lang: Lang, vi: string, en: string) => lang === "vi" ? vi : en;

`;
  code = code.replace(/import \{ motion as Motion/g, contextCode + 'import { motion as Motion');
}

fs.writeFileSync('src/app/App.tsx', code);
