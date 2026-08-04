const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Replace the Lang toggles in Header
const langHtmlOld = `{/* Lang */}
            <div className="flex items-center bg-white/20 hover:bg-white/30 transition-all border border-white/40 rounded-full p-1 h-[40px] 2xl:h-[44px] shrink-0">
              <button className="px-3 2xl:px-4 h-full text-[11px] 2xl:text-[12px] font-black rounded-full bg-white text-[#1e64ae] shadow-sm">VN</button>
              <button className="px-3 2xl:px-4 h-full text-[11px] 2xl:text-[12px] font-black rounded-full text-white/80 hover:text-white transition-colors">EN</button>
            </div>`;

const langHtmlNew = `{/* Lang */}
            <div className="flex items-center bg-white/20 hover:bg-white/30 transition-all border border-white/40 rounded-full p-1 h-[40px] 2xl:h-[44px] shrink-0">
              <button onClick={() => setLang("vi")} className={\`px-3 2xl:px-4 h-full text-[11px] 2xl:text-[12px] font-black rounded-full transition-colors \${lang === "vi" ? "bg-white text-[#1e64ae] shadow-sm" : "text-white/80 hover:text-white"}\`}>VN</button>
              <button onClick={() => setLang("en")} className={\`px-3 2xl:px-4 h-full text-[11px] 2xl:text-[12px] font-black rounded-full transition-colors \${lang === "en" ? "bg-white text-[#1e64ae] shadow-sm" : "text-white/80 hover:text-white"}\`}>EN</button>
            </div>`;

code = code.replace(langHtmlOld, langHtmlNew);

// Replace CTA button
code = code.replace(/ĐẶT TOUR/, '{t(lang, "ĐẶT TOUR", "BOOK TOUR")}');

fs.writeFileSync('src/app/App.tsx', code);
