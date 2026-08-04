const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

const oldPromoRegex = /\{\/\* CTA overlay block \*\/\}[\s\S]*?\{\/\* Always visible CTA if user doesn't hover \(mobile fallback\) \*\/\}[\s\S]*?<\/div>\s*<\/div>/;

const newPromoBlock = `{/* Static Registration Button centered at the bottom */}
                <div className="absolute bottom-[10%] md:bottom-[15%] left-1/2 -translate-x-1/2 w-3/4 max-w-sm">
                  <Motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setIsPromoOpen(false); setIsFormOpen(true); }}
                    className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-[#003B5C] font-black py-3 md:py-4 px-6 rounded-2xl shadow-[0_10px_30px_rgba(251,191,36,0.5)] w-full text-center uppercase tracking-widest border-2 border-amber-200 text-sm md:text-base transition-all"
                  >{t(lang, "Đăng Ký Có Hạn", "Limited Registration")}</Motion.button>
                </div>
              </div>`;

code = code.replace(oldPromoRegex, newPromoBlock);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Promo button updated to static');
