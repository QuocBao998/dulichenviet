const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Restore the relative container
code = code.replace(
  /<div className="rounded-\[2rem\] overflow-hidden shadow-2xl border-4 border-white flex flex-col bg-white">/,
  '<div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative bg-white">'
);

// Put the button back ON the image, but positioned lower (e.g. bottom 5% instead of 10/15%)
const oldBlock = /<img src=\{PromoImage\} alt="Khuyến mãi đặc biệt" className="w-full h-auto object-cover" \/>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

const newBlock = `<img src={PromoImage} alt="Khuyến mãi đặc biệt" className="w-full h-auto object-cover" />
                
                {/* Static Registration Button placed carefully on the image */}
                <div className="absolute bottom-[3%] md:bottom-[5%] left-1/2 -translate-x-1/2 w-[85%] max-w-sm">
                  <Motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setIsPromoOpen(false); setIsFormOpen(true); }}
                    className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-[#003B5C] font-black py-2.5 md:py-3.5 px-6 rounded-2xl shadow-[0_10px_30px_rgba(251,191,36,0.6)] w-full text-center uppercase tracking-widest border-2 border-amber-200 text-sm md:text-base transition-all"
                  >{t(lang, "Đăng Ký Có Hạn", "Limited Registration")}</Motion.button>
                </div>
              </div>`;

code = code.replace(oldBlock, newBlock);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Fixed promo button to be overlay again');
