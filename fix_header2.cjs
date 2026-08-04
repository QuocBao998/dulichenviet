const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

const headerRegex = /function Header\(\{\s*current,\s*nav\s*\}\s*:\s*\{\s*current:\s*Page;\s*nav:\s*\(p:\s*Page\)\s*=>\s*void\s*\}\)\s*\{[\s\S]*?\/\*\s*── Footer ──\s*\*\//;

const newHeader = `function Header({ current, nav }: { current: Page; nav: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const subMenus: Record<string, { label: string; page: Page; sub?: { label: string; page: Page }[] }[]> = {
    "tour": [
      { label: "Tour Trong Nước", page: "tour" },
      { label: "Tour Nước Ngoài", page: "tour" },
      { label: "Tour Giờ Chót", page: "tour" },
      { 
        label: "Tour Hành Hương", 
        page: "tour",
        sub: [
          { label: "Tour Hành Hương Công Giáo", page: "tour" },
          { label: "Tour Hành Hương Phật Giáo", page: "tour" }
        ]
      },
    ],
    "ve-may-bay": [
      { label: "Vé Nội Địa", page: "ve-may-bay" },
      { label: "Vé Quốc Tế", page: "ve-may-bay" },
    ],
    "visa": [
      { label: "Dịch Vụ Passport", page: "visa" },
      { label: "Tư Vấn Visa", page: "visa" },
    ],
    "thong-tin": [
      { label: "Tin Tức Du Lịch", page: "thong-tin" },
      { label: "Nhật Ký Du Lịch", page: "thong-tin" },
      { label: "Cẩm Nang Du Lịch", page: "thong-tin" },
      { label: "Tư Vấn Du Lịch", page: "thong-tin" },
      { label: "Khuyến Mãi", page: "thong-tin" },
    ]
  };

  return (
    <header className={\`top-0 left-0 right-0 z-50 pt-4 md:pt-6 transition-all duration-500 \${current !== "home" ? "sticky bg-gradient-to-r from-[#1e64ae] via-[#00A651] to-[#77c14d] pb-6 shadow-xl" : "absolute"}\`}>
      {/* Soft top gradient glow for better readability */}
      {current === "home" && <div className="absolute inset-0 h-40 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />}
      
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-6 relative z-10 flex flex-col items-center gap-3">
        
        {/* Logo - Free floating */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <button onClick={() => nav("home")} className="relative group transition-all duration-700 hover:scale-110 active:scale-95">
            <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl opacity-60 scale-150 group-hover:opacity-100 transition-opacity" />
            <ImageWithFallback 
              src={LogoImage} 
              className="w-20 h-20 md:w-28 md:h-28 object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(255,255,255,0.5)]" 
              alt="Én Việt Logo" 
            />
          </button>
        </Motion.div>

        {/* Navigation Bar - Sleek Glass Pill */}
        <Motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden xl:flex w-full max-w-[1400px] mx-auto h-[60px] 2xl:h-[66px] rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] items-center justify-between px-2 2xl:px-4 py-2 gap-2 relative z-20"
        >
          {/* Main Menu */}
          <nav className="flex items-center justify-center gap-0.5 2xl:gap-1 flex-1 w-full overflow-visible">
            {NAV.map((item, index) => {
              // Position submenus perfectly: middle items centered, right items align-right
              const popoverPos = index > NAV.length - 3 ? "right-0" : index < 2 ? "left-0" : "left-1/2 -translate-x-1/2";
              return (
              <div 
                key={item.page} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveMenu(item.page)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => nav(item.page)}
                  className={\`relative px-2 xl:px-3 2xl:px-4 py-2 text-[12px] 2xl:text-[13px] font-black rounded-full transition-all duration-300 whitespace-nowrap flex items-center gap-1 shrink-0 \${
                    current === item.page
                      ? "text-white shadow-md"
                      : "text-white hover:text-white hover:bg-white/30"
                  }\`}
                >
                  {current === item.page && (
                    <Motion.div 
                      layoutId="nav-bg"
                      className="absolute inset-0 bg-gradient-to-r from-[#1e64ae] to-[#77c14d] rounded-full z-0" 
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  {subMenus[item.page] && (
                    <ChevronDown className="relative z-10 w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform" />
                  )}
                </button>

                {/* Submenu Popover */}
                {subMenus[item.page] && (
                  <div className={\`absolute top-[110%] \${popoverPos} pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-[100]\`}>
                    <div className="backdrop-blur-3xl border border-white/50 rounded-2xl shadow-2xl py-3 min-w-[240px] bg-white/95 ring-1 ring-black/5 overflow-hidden">
                      {subMenus[item.page].map((sub) => (
                        <div key={sub.label} className="group/sub relative">
                          <button 
                            onClick={() => { nav(sub.page); setActiveMenu(null); }}
                            className="w-full text-left px-6 py-2.5 text-[13px] font-bold text-[#003B5C] hover:bg-gradient-to-r hover:from-[#1e64ae] hover:to-[#77c14d] hover:text-white transition-all flex items-center justify-between"
                          >
                            {sub.label}
                            {sub.sub ? (
                              <ChevronRight className="w-3 h-3 opacity-50" />
                            ) : (
                              <ChevronRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-1 transition-all" />
                            )}
                          </button>
                          
                          {/* Nested Submenu (Level 3) if exists */}
                          {sub.sub && (
                            <div className="absolute top-0 left-[100%] ml-1 opacity-0 -translate-x-2 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:pointer-events-auto transition-all duration-300">
                              <div className="backdrop-blur-3xl border border-white/50 rounded-2xl shadow-2xl py-2 min-w-[240px] bg-white/95 ring-1 ring-black/5">
                                {sub.sub.map((deepSub) => (
                                  <button 
                                    key={deepSub.label}
                                    onClick={() => { nav(deepSub.page); setActiveMenu(null); }}
                                    className="w-full text-left px-6 py-2.5 text-[13px] font-bold text-[#003B5C] hover:bg-gradient-to-r hover:from-[#1e64ae] hover:to-[#77c14d] hover:text-white transition-all flex items-center justify-between group/deep"
                                  >
                                    {deepSub.label}
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover/deep:opacity-100 group-hover/deep:translate-x-1 transition-all" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )})}
          </nav>

          {/* Right Utilities */}
          <div className="flex items-center justify-end gap-1.5 2xl:gap-3 shrink-0">
            {/* Search - Always visible text on XL+ */}
            <div className="flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 rounded-full w-32 xl:w-40 2xl:w-48 h-[40px] 2xl:h-[44px] transition-all hover:shadow-md focus-within:w-48 focus-within:bg-white focus-within:shadow-md group/search shrink-0 px-3 overflow-hidden">
              <Search className="w-4 h-4 text-white group-hover/search:text-[#003B5C] focus-within:text-[#003B5C] transition-colors shrink-0" />
              <input 
                type="text" 
                placeholder="Tìm kiếm..." 
                className="bg-transparent border-none text-[12px] font-bold text-white group-hover/search:text-[#003B5C] focus-within:text-[#003B5C] focus:ring-0 w-full placeholder:text-white/70 focus-within:placeholder:text-[#003B5C]/50 ml-2 outline-none block" 
              />
            </div>

            {/* Lang */}
            <div className="flex items-center bg-white/20 hover:bg-white/30 transition-all border border-white/40 rounded-full p-1 h-[40px] 2xl:h-[44px] shrink-0">
              <button className="px-3 2xl:px-4 h-full text-[11px] 2xl:text-[12px] font-black rounded-full bg-white text-[#1e64ae] shadow-sm">VN</button>
              <button className="px-3 2xl:px-4 h-full text-[11px] 2xl:text-[12px] font-black rounded-full text-white/80 hover:text-white transition-colors">EN</button>
            </div>

            {/* CTA */}
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => nav("tour")}
              className="bg-gradient-to-r from-[#1e64ae] to-[#77c14d] hover:brightness-110 text-white text-[11px] xl:text-[12px] 2xl:text-[13px] font-black px-4 xl:px-5 2xl:px-6 h-[40px] 2xl:h-[44px] rounded-full transition-all shadow-lg whitespace-nowrap uppercase tracking-tight shrink-0 flex items-center justify-center"
            >
              ĐẶT TOUR
            </Motion.button>
          </div>
        </Motion.div>

        {/* Mobile Menu Toggle */}
        <div className="xl:hidden w-full flex justify-end px-4 text-[16px]">
           <button 
             className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-xl" 
             onClick={() => setOpen(!open)}
           >
             {open ? <X className="w-6 h-6 text-[#003B5C]" /> : <Menu className="w-6 h-6 text-[#003B5C]" />}
           </button>
        </div>
      </div>

      {open && (
        <Motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden mt-4 max-w-7xl mx-4 overflow-hidden rounded-2xl border border-white/50 bg-white/95 backdrop-blur-2xl shadow-2xl relative z-40 max-h-[70vh] overflow-y-auto"
        >
          <div className="p-3 flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.page} className="flex flex-col">
                <div className="flex items-center">
                  <button
                    onClick={() => { nav(item.page); setOpen(false); }}
                    className={\`flex-1 text-left px-5 py-3 text-sm font-bold rounded-xl transition-all \${
                      current === item.page 
                        ? "bg-gradient-to-r from-[#1e64ae] to-[#77c14d] text-white shadow-md" 
                        : "text-[#003B5C] hover:bg-blue-50 active:bg-blue-100"
                    }\`}
                  >
                    {item.label}
                  </button>
                  {subMenus[item.page] && (
                    <button 
                      onClick={() => setMobileExpanded(mobileExpanded === item.page ? null : item.page)}
                      className="p-3 text-[#003B5C]"
                    >
                      <ChevronDown className={\`w-5 h-5 transition-transform \${mobileExpanded === item.page ? "rotate-180" : ""}\`} />
                    </button>
                  )}
                </div>
                
                {/* Mobile Submenu Accordion */}
                {subMenus[item.page] && mobileExpanded === item.page && (
                  <div className="pl-6 pr-2 py-2 flex flex-col gap-1 border-l-2 border-[#1e64ae]/20 ml-6 my-1">
                    {subMenus[item.page].map((sub) => (
                      <div key={sub.label} className="flex flex-col">
                        <button 
                          onClick={() => { if(!sub.sub) { nav(sub.page); setOpen(false); } }}
                          className="text-left px-4 py-2 text-[13px] font-bold text-[#003B5C]/80 hover:text-[#1e64ae] hover:bg-blue-50 rounded-lg transition-colors flex justify-between items-center"
                        >
                          {sub.label}
                        </button>
                        {/* Mobile Deep Submenu */}
                        {sub.sub && (
                          <div className="pl-4 py-1 flex flex-col gap-1 border-l-2 border-[#1e64ae]/10 ml-4 my-1">
                            {sub.sub.map((deepSub) => (
                              <button 
                                key={deepSub.label}
                                onClick={() => { nav(deepSub.page); setOpen(false); }}
                                className="text-left px-4 py-1.5 text-[12px] font-bold text-[#003B5C]/60 hover:text-[#1e64ae] transition-colors"
                              >
                                {deepSub.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Motion.div>
      )}
    </header>
  );
}

/* ── Footer ── */`;

code = code.replace(headerRegex, newHeader);
fs.writeFileSync('src/app/App.tsx', code);
console.log('Header updated successfully for strict desktop display.');
