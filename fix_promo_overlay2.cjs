const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// The regex needs to replace the section from "Static Registration Button moved BELOW" to the end of that specific button's wrapper
const oldPattern = /\{\/\* Static Registration Button moved BELOW the image to prevent text overlap \*\/\}\s*<div className="bg-white p-4 md:p-5 flex justify-center border-t border-gray-100">\s*<div className="w-full max-w-sm">[\s\S]*?<\/Motion\.button>\s*<\/div>\s*<\/div>/;

const newPattern = `{/* Static Registration Button placed carefully on the image */}
                <div className="absolute bottom-[2%] md:bottom-[4%] left-1/2 -translate-x-1/2 w-[85%] max-w-sm">
                  <Motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setIsPromoOpen(false); setIsFormOpen(true); }}
                    className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-[#003B5C] font-black py-2.5 md:py-3.5 px-6 rounded-2xl shadow-[0_10px_30px_rgba(251,191,36,0.6)] w-full text-center uppercase tracking-widest border-2 border-amber-200 text-sm md:text-base transition-all"
                  >{t(lang, "Đăng Ký Có Hạn", "Limited Registration")}</Motion.button>
                </div>`;

code = code.replace(oldPattern, newPattern);

// Ensure the container is `relative` and not `flex flex-col bg-white` that causes extra space
code = code.replace(
  /<div className="rounded-\[2rem\] overflow-hidden shadow-2xl border-4 border-white flex flex-col bg-white">/,
  '<div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative group">'
);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Fixed overlay again!');
