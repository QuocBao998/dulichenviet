const fs = require('fs');

let code = fs.readFileSync('src/app/components/GioiThieuPage.tsx', 'utf8');

const newCoreValuesSection = `
        {/* NEW SECTION: GIÁ TRỊ CỐT LÕI (Sơ đồ) */}
        <div className="mb-24 mt-12">
          <Motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003B5C] mb-4 uppercase tracking-wide">GIÁ TRỊ CỐT LÕI</h2>
            <div className="w-24 h-1 bg-[#00A651] mx-auto rounded-full" />
          </Motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Node (Core) */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-[#1e64ae] to-[#00A651] rounded-full z-10 items-center justify-center shadow-[0_0_40px_rgba(0,166,81,0.4)] border-4 border-white">
              <div className="text-center">
                <span className="block text-white font-black text-2xl uppercase tracking-widest">Én Việt</span>
                <span className="block text-white/80 font-bold text-sm tracking-[0.2em] mt-1">Group</span>
              </div>
            </div>

            {/* Connecting lines for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border-2 border-dashed border-gray-300 rounded-full z-0 animate-[spin_60s_linear_infinite]" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-48 md:gap-y-16 relative z-20">
              {/* UY TÍN */}
              <Motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col md:items-end text-left md:text-right group hover:-translate-y-2 transition-transform"
              >
                <div className="w-14 h-14 bg-blue-50 text-[#1e64ae] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#1e64ae] group-hover:text-white transition-colors">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#003B5C] mb-3">UY TÍN</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Chúng tôi luôn hướng đến mục tiêu mang những trải nghiệm – dịch vụ tốt nhất cho khách hàng. Các dịch vụ Du Lịch Sự Kiện Én Việt cung cấp luôn được thực hiện một cách chuyên nghiệp và nhanh chóng đáp ứng đúng nhu cầu của khách hàng.
                </p>
              </Motion.div>

              {/* CHUYÊN NGHIỆP */}
              <Motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col text-left group hover:-translate-y-2 transition-transform"
              >
                <div className="w-14 h-14 bg-green-50 text-[#00A651] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#00A651] group-hover:text-white transition-colors">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#003B5C] mb-3">CHUYÊN NGHIỆP</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Tất cả đội ngũ nhân viên của Du Lịch Sự Kiện Én Việt luôn được đào tạo chuyên nghiệp từ nghiệp vụ chuyên môn đến tinh thần trách nhiệm. Đội ngũ nhân viên luôn sẵn sàng phục vụ khách hàng một cách “CHUYÊN NGHIỆP VÀ HIỆU QUẢ”.
                </p>
              </Motion.div>

              {/* MỨC GIÁ CẠNH TRANH */}
              <Motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col md:items-end text-left md:text-right group hover:-translate-y-2 transition-transform"
              >
                <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-white transition-colors">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#003B5C] mb-3">MỨC GIÁ CẠNH TRANH</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Luôn mang đến cho khách hàng những chiếc vé máy bay và dịch vụ du lịch với mức giá tốt nhất từ đối tác. Bên cạnh đó thường xuyên có chính sách ưu đãi riêng của công ty hàng tháng, dịp lễ, tết.
                </p>
              </Motion.div>

              {/* TẬN TÂM */}
              <Motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col text-left group hover:-translate-y-2 transition-transform"
              >
                <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <Headphones className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#003B5C] mb-3">TẬN TÂM</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Đội ngũ chuyên viên Du Lịch Sự Kiện Én Việt luôn sẵn sàng phục vụ, tư vấn hỗ trợ nhiệt tình 24/7. Sẵn sàng giải đáp mọi thắc mắc của khách hàng liên quan đến vé máy bay và các dịch vụ.
                </p>
              </Motion.div>
            </div>
          </div>
        </div>
`;

// Remove the old 3-grid containing the generic Giá trị cốt lõi, since we are replacing it with the detailed one.
// We will also just keep Tầm nhìn & Sứ mệnh in the top block and remove the 3-grid completely to avoid repetition.
const oldGridRegex = /<div className="grid md:grid-cols-3 gap-8 mb-24">[\s\S]*?<\/div>\s*<\/div>\s*\{\/\* ── Why Én Việt \(3D Modern View\) ── \*\/\}/;

code = code.replace(oldGridRegex, newCoreValuesSection + '\n      </div>\n\n      {/* ── Why Én Việt (3D Modern View) ── */}');

fs.writeFileSync('src/app/components/GioiThieuPage.tsx', code);
console.log('GioiThieuPage core values diagram added');
