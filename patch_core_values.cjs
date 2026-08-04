const fs = require('fs');

let code = fs.readFileSync('src/app/components/GioiThieuPage.tsx', 'utf8');

const oldCenterNode = `<div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-[#1e64ae] to-[#00A651] rounded-full z-10 items-center justify-center shadow-[0_0_40px_rgba(0,166,81,0.4)] border-4 border-white">
              <div className="text-center">
                <span className="block text-white font-black text-2xl uppercase tracking-widest">Én Việt</span>
                <span className="block text-white/80 font-bold text-sm tracking-[0.2em] mt-1">Group</span>
              </div>
            </div>`;

const newCenterNode = `<Motion.div 
              initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="hidden md:flex absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-[#1e64ae] to-[#00A651] rounded-full z-10 items-center justify-center shadow-[0_0_40px_rgba(0,166,81,0.4)] border-4 border-white"
            >
              <div className="text-center">
                <span className="block text-white font-black text-2xl uppercase tracking-widest">Én Việt</span>
                <span className="block text-white/80 font-bold text-sm tracking-[0.2em] mt-1">Group</span>
              </div>
            </Motion.div>`;

code = code.replace(oldCenterNode, newCenterNode);

const oldLines = `<div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border-2 border-dashed border-gray-300 rounded-full z-0 animate-[spin_60s_linear_infinite]" />`;

const newLines = `<Motion.div 
              initial={{ opacity: 0, x: "-50%", y: "-50%", scale: 0.8 }}
              whileInView={{ opacity: 1, x: "-50%", y: "-50%", scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block absolute top-1/2 left-1/2 w-[60%] h-[60%] border-2 border-dashed border-gray-300 rounded-full z-0 animate-[spin_60s_linear_infinite]" 
            />`;

code = code.replace(oldLines, newLines);

fs.writeFileSync('src/app/components/GioiThieuPage.tsx', code);
console.log('Added animations to center node and lines');
