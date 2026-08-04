const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

const oldPromoBlock = /<img src=\{PromoImage\} alt="Khuyến mãi đặc biệt" className="w-full h-auto object-cover" \/>[\s\S]*?<\/div>\s*<\/div>/;

const newPromoBlock = `<img src={PromoImage} alt="Khuyến mãi đặc biệt" className="w-full h-auto object-cover" />
                
                {/* Static Registration Button moved BELOW the image to prevent text overlap */}
                <div className="bg-white p-4 md:p-5 flex justify-center border-t border-gray-100">
                  <div className="w-full max-w-sm">
                    <Motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => { setIsPromoOpen(false); setIsFormOpen(true); }}
                      className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-[#003B5C] font-black py-3 md:py-4 px-6 rounded-2xl shadow-[0_5px_20px_rgba(251,191,36,0.4)] w-full text-center uppercase tracking-widest border-2 border-amber-200 text-sm md:text-base transition-all"
                    >{t(lang, "Đăng Ký Có Hạn", "Limited Registration")}</Motion.button>
                  </div>
                </div>
              </div>`;

code = code.replace(oldPromoBlock, newPromoBlock);

// Remove the "relative group" from the container to ensure proper flow if needed, though it's fine.
code = code.replace(
  /<div className="rounded-\[2rem\] overflow-hidden shadow-2xl border-4 border-white relative group bg-white">/,
  '<div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white flex flex-col bg-white">'
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Fixed promo button overlap');
