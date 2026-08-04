const fs = require('fs');

let code = fs.readFileSync('src/app/components/TourPage.tsx', 'utf8');

// The layout right now is just a SearchBar + Grid of Tours.
// I will change it into a 2-column layout (Sidebar + Main Content)
// To do this, I will wrap the grid in a flex container.

const oldGrid = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">[\s\S]*?<\/div>\n      <\/div>/;

const newLayout = `<div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar Filter */}
          <Motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/4 shrink-0 bg-white rounded-3xl p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 sticky top-24"
          >
            <h3 className="font-extrabold text-lg text-[#003B5C] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#00A651] rounded-full" />
              {t(lang, "Lọc Kết Quả", "Filter Results")}
            </h3>
            
            <div className="space-y-6">
              {/* Filter 1 */}
              <div>
                <h4 className="font-bold text-[#003B5C] text-sm mb-3">{t(lang, "Điểm Đến", "Destination")}</h4>
                <div className="space-y-2">
                  {["Châu Á", "Châu Âu", "Châu Mỹ", "Trong Nước"].map((f) => (
                    <label key={f} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 rounded border-2 border-gray-300 group-hover:border-[#1e64ae] flex items-center justify-center transition-colors">
                         {/* Checkbox logic would go here */}
                      </div>
                      <span className="text-sm text-gray-600 font-medium group-hover:text-[#1e64ae] transition-colors">{f}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter 2 */}
              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-bold text-[#003B5C] text-sm mb-3">{t(lang, "Thời Gian", "Duration")}</h4>
                <div className="space-y-2">
                  {["1 - 3 Ngày", "4 - 7 Ngày", "Trên 7 Ngày"].map((f) => (
                    <label key={f} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 rounded border-2 border-gray-300 group-hover:border-[#1e64ae] flex items-center justify-center transition-colors" />
                      <span className="text-sm text-gray-600 font-medium group-hover:text-[#1e64ae] transition-colors">{f}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter 3 */}
              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-bold text-[#003B5C] text-sm mb-3">{t(lang, "Khoảng Giá", "Price Range")}</h4>
                <div className="space-y-2">
                  {["Dưới 5 Triệu", "5 - 15 Triệu", "15 - 30 Triệu", "Trên 30 Triệu"].map((f) => (
                    <label key={f} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 rounded border-2 border-gray-300 group-hover:border-[#1e64ae] flex items-center justify-center transition-colors" />
                      <span className="text-sm text-gray-600 font-medium group-hover:text-[#1e64ae] transition-colors">{f}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-50 text-[#1e64ae] hover:bg-[#1e64ae] hover:text-white font-bold py-3 rounded-xl transition-colors text-sm uppercase tracking-wide">
                {t(lang, "Áp Dụng Lọc", "Apply Filters")}
              </button>
            </div>
          </Motion.div>

          {/* Main Grid */}
          <div className="flex-1 w-full">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-medium text-sm">
                {t(lang, "Hiển thị", "Showing")} <strong className="text-[#003B5C]">6</strong> {t(lang, "kết quả", "results")}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-medium">{t(lang, "Sắp xếp:", "Sort by:")}</span>
                <select className="bg-white border border-gray-200 text-[#003B5C] text-sm rounded-lg px-3 py-1.5 font-semibold outline-none focus:border-[#1e64ae]">
                  <option>{t(lang, "Nổi bật nhất", "Most Featured")}</option>
                  <option>{t(lang, "Giá thấp đến cao", "Price: Low to High")}</option>
                  <option>{t(lang, "Giá cao đến thấp", "Price: High to Low")}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000">
              {tours.map((tour, idx) => (
                <Motion.div
                  key={tour.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02, rotateX: 2, rotateY: -2 }}
                  className="group cursor-pointer rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D2E]/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <span className={\`text-[11px] font-black px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md uppercase tracking-wide \${
        tour.tag === "Hot" ? "bg-red-500/90 text-white" : "bg-white/90 text-[#003B5C]"
      }\`}>
        {tour.tag} {tour.tag === "Hot" && <img src={HotIcon} className="w-4 h-4 inline-block ml-1 -mt-1 drop-shadow-sm" alt="hot" />}
      </span>
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-2 text-white shadow-sm border border-white/30">
                         <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-extrabold text-[#003B5C] text-lg leading-snug mb-4 line-clamp-2 group-hover:text-[#1e64ae] transition-colors">{tour.title}</h3>
                    <div className="mt-auto">
                      <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 mb-4 bg-gray-50 p-3 rounded-xl">
                        <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#00A651]" /> {tour.duration}</div>
                        <div className="w-1 h-1 rounded-full bg-gray-300" />
                        <div className="flex items-center gap-1.5"><Plane className="w-4 h-4 text-[#1e64ae]" /> Bay khứ hồi</div>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{t(lang, "Giá từ", "From")}</div>
                          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#00A651] font-black text-xl">{tour.price}</div>
                        </div>
                        <div className="bg-blue-50 text-[#1e64ae] group-hover:bg-[#1e64ae] group-hover:text-white p-3 rounded-xl transition-colors shadow-sm">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center gap-2">
              <button className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-[#1e64ae] shadow-md">1</button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-gray-500 bg-white hover:bg-gray-100 transition-colors border border-gray-200">2</button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-gray-500 bg-white hover:bg-gray-100 transition-colors border border-gray-200">3</button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-gray-500 bg-white hover:bg-gray-100 transition-colors border border-gray-200">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>`;

code = code.replace(oldGrid, newLayout);

fs.writeFileSync('src/app/components/TourPage.tsx', code);
console.log('Layout patched with sidebar');
