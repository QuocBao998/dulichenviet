const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Add PromoImage import
code = code.replace(
  /import LogoImage from "\.\.\/imports\/Logo\.png";/,
  `import LogoImage from "../imports/Logo.png";\nimport PromoImage from "../imports/Gemini_Generated_Image_8udbo58udbo58udb.png";`
);

// 2. Modify HomePage signature
code = code.replace(
  /function HomePage\(\{ nav \}: \{ nav: \(p: Page\) => void \}\) \{/,
  `function HomePage({ nav, openForm }: { nav: (p: Page) => void, openForm: () => void }) {`
);

// 3. Modify Hero button
code = code.replace('Bắt Đầu Hành Trình', 'ĐĂNG KÝ NGAY ĐỂ NHẬN ƯU ĐÃI');
// Assuming the first onClick={() => nav("tour")} inside the Hero section is the one for the button
// Let's replace the one right before "ĐĂNG KÝ NGAY"
code = code.replace(
  /onClick=\{\(\) => nav\("tour"\)\}([\s\S]*?)>(\s*)ĐĂNG KÝ NGAY ĐỂ NHẬN ƯU ĐÃI/m,
  `onClick={openForm}$1>$2ĐĂNG KÝ NGAY ĐỂ NHẬN ƯU ĐÃI`
);

// 4. Update App State
const appState = `export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [dismissCount, setDismissCount] = useState(0);

  useEffect(() => {
    const storedDismiss = localStorage.getItem('promoDismissCount');
    if (storedDismiss) {
      setDismissCount(parseInt(storedDismiss));
    }
  }, []);

  useEffect(() => {
    if (dismissCount >= 3) return;
    
    const interval = setInterval(() => {
      if (!isFormOpen && !isPromoOpen) {
        setIsPromoOpen(true);
      }
    }, 20000);
    
    return () => clearInterval(interval);
  }, [dismissCount, isFormOpen, isPromoOpen]);

  const handleDismissPromo = () => {
    setIsPromoOpen(false);
    const newCount = dismissCount + 1;
    setDismissCount(newCount);
    localStorage.setItem('promoDismissCount', newCount.toString());
  };

  const navigateTo = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };`;

code = code.replace(
  /export default function App\(\) \{[\s\S]*?window\.scrollTo\(\{ top: 0, behavior: "smooth" \}\);\n\s*\};/,
  appState
);

// 5. Update HomePage call in App
code = code.replace(
  /\{page === "home" && <HomePage nav=\{navigateTo\} \/>\}/,
  `{page === "home" && <HomePage nav={navigateTo} openForm={() => setIsFormOpen(true)} />}`
);

// 6. Add Modals to App return
const footerRegex = /<Footer nav=\{navigateTo\} \/>\s*<\/div>/;

const modals = `<Footer nav={navigateTo} />

      {/* Registration Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <Motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsFormOpen(false)}
            />
            <Motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              <div className="bg-gradient-to-r from-[#1e64ae] to-[#00A651] p-6 text-center relative">
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 rounded-full p-2 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">Nhận Ưu Đãi Ngay</h3>
                <p className="text-white/90 text-sm font-medium">Để lại thông tin, chuyên viên sẽ liên hệ ngay!</p>
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#003B5C] mb-1">Họ và tên *</label>
                  <input type="text" placeholder="Nhập họ tên của bạn" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/20 outline-none transition-all text-sm font-medium bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#003B5C] mb-1">Số điện thoại *</label>
                  <input type="tel" placeholder="Nhập số điện thoại" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/20 outline-none transition-all text-sm font-medium bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#003B5C] mb-1">Điểm đến mong muốn</label>
                  <input type="text" placeholder="Ví dụ: Nhật Bản, Châu Âu..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/20 outline-none transition-all text-sm font-medium bg-gray-50 focus:bg-white" />
                </div>
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="w-full bg-[#00A651] hover:bg-[#008f45] text-white font-black py-4 rounded-xl shadow-lg transition-colors mt-4 uppercase tracking-wider"
                >
                  Gửi Thông Tin
                </button>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Promo Banner Popup */}
      <AnimatePresence>
        {isPromoOpen && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
            <Motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={handleDismissPromo}
            />
            <Motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 3 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-lg z-10"
            >
              <button 
                onClick={handleDismissPromo}
                className="absolute -top-4 -right-4 z-20 bg-white hover:bg-gray-100 text-[#003B5C] rounded-full p-2.5 shadow-xl transition-transform hover:scale-110 border border-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5 font-bold" />
              </button>
              
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative group bg-white">
                <img src={PromoImage} alt="Khuyến mãi đặc biệt" className="w-full h-auto object-cover" />
                
                {/* CTA overlay block */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setIsPromoOpen(false); setIsFormOpen(true); }}
                    className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-[#003B5C] font-black py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.6)] w-full text-center uppercase tracking-widest border border-amber-300/50"
                  >
                    Đăng Ký Có Hạn
                  </Motion.button>
                </div>
                
                {/* Always visible CTA if user doesn't hover (mobile fallback) */}
                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                   <button 
                    onClick={() => { setIsPromoOpen(false); setIsFormOpen(true); }}
                    className="bg-gradient-to-r from-amber-400 to-orange-500 text-[#003B5C] font-black py-3 px-4 rounded-xl shadow-lg w-full text-center uppercase tracking-widest text-sm"
                  >
                    Đăng Ký Có Hạn
                  </button>
                </div>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>`;

code = code.replace(footerRegex, modals);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Promo added successfully!');
