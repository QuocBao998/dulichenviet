const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Add context definitions at the top
const contextCode = `
import { createContext, useContext } from "react";

export type Lang = "vi" | "en";
export const LangContext = createContext<{lang: Lang, setLang: (l: Lang) => void}>({lang: "vi", setLang: () => {}});
export const useLang = () => useContext(LangContext);
export const t = (lang: Lang, vi: string, en: string) => lang === "vi" ? vi : en;

`;

code = code.replace(/import \{ motion as Motion/g, contextCode + 'import { motion as Motion');

// Add context provider to App
code = code.replace(
  /export default function App\(\) \{/,
  `export default function App() {
  const [lang, setLang] = useState<Lang>("vi");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <AppContent />
    </LangContext.Provider>
  );
}

function AppContent() {`
);

// Close AppContent properly
code = code.replace(
  /<Footer nav=\{navigateTo\} \/>\s*\{\/\* Registration Form Modal \*\/\}/,
  `<Footer nav={navigateTo} />
      {/* Registration Form Modal */}`
);

// Ensure we find the final closing div and bracket to rename App to AppContent
// We replaced `export default function App() {` with `AppContent`, so the closing bracket is still there.

// Inject useLang into components
function injectUseLang(componentName) {
  const regex = new RegExp(`(function ${componentName}\\([^)]*\\)\\s*\\{)`);
  code = code.replace(regex, `$1\n  const { lang, setLang } = useLang();\n`);
}

injectUseLang('Header');
injectUseLang('Footer');
injectUseLang('HomePage');
injectUseLang('AppContent');

fs.writeFileSync('src/app/App.tsx', code);
console.log('Context injected');
