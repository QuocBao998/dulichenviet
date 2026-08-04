const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Add video imports
const importsToAdd = `import IntroVideo from "../imports/Gio__i_thie__u.mp4";
import TeamBuildingVideo from "../imports/Teambuilding.mp4";
import ChaoCamVideo from "../imports/Cha_o_Cam.mp4";
`;

code = code.replace('import LogoImage from "../imports/Logo.png";', `${importsToAdd}import LogoImage from "../imports/Logo.png";`);

// Find the "Featured Tours" section
const featuredToursRegex = /\{\/\* ── Featured Tours ── \*\/\}/;

const videoSection = `{/* ── Video Section ── */}
      <section className="max-w-7xl mx-auto px-4 mt-24 mb-16">
        <Motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-4">Trải Nghiệm Cùng Én Việt</h2>
          <div className="w-24 h-1 bg-[#00A651] mx-auto rounded-full" />
        </Motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: IntroVideo, title: "Giới Thiệu Én Việt Group" },
            { src: TeamBuildingVideo, title: "Teambuilding & Sự Kiện" },
            { src: ChaoCamVideo, title: "Khám Phá Các Điểm Đến" }
          ].map((vid, idx) => (
            <Motion.div 
              key={idx}
              variants={fadeInUp}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-[2rem] overflow-hidden shadow-2xl relative group bg-black"
            >
              <video 
                src={vid.src} 
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                controls 
                preload="metadata"
              />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                {vid.title}
              </div>
            </Motion.div>
          ))}
        </div>
      </section>

      `;

code = code.replace(featuredToursRegex, videoSection + '{/* ── Featured Tours ── */}');

// Remove Why En Viet section and AnimatedNumber
const whySectionRegex = /\{\/\* ── Why Én Việt \(3D Modern View\) ── \*\/\}[\s\S]*?(?=\{\/\* ── Call To Action Banner ── \*\/\})/m;

const reviewsSection = `{/* ── Customer Reviews ── */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f8fcfb] via-[#e6f4ea] to-[#eef7f2]">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#77c14d] text-sm font-extrabold tracking-[0.2em] uppercase mb-3 drop-shadow-sm inline-block">Khách Hàng Nói Gì</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#003B5C]">Đánh Giá Từ Khách Hàng</h2>
          </Motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Chị Minh Thư", role: "Du khách Tour Nhật Bản", text: "Trải nghiệm tuyệt vời! Hướng dẫn viên rất chu đáo và nhiệt tình. Chuyến đi Nhật ngắm hoa tử đằng thực sự để lại nhiều kỷ niệm đẹp cho cả gia đình." },
              { name: "Anh Hoàng Nam", role: "Khách hàng Teambuilding", text: "Công ty chúng tôi đã có một chương trình teambuilding thành công rực rỡ. Tổ chức chuyên nghiệp, trò chơi thú vị, ẩm thực ngon miệng." },
              { name: "Cô Phương Lan", role: "Du khách Tour Thái Lan", text: "Giá cả hợp lý mà dịch vụ lại rất tốt. Khách sạn đẹp, xe di chuyển thoải mái. Lần sau tôi chắc chắn sẽ tiếp tục ủng hộ Én Việt." }
            ].map((review, i) => (
              <Motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 relative"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1e64ae] to-[#00A651] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(4)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003B5C]">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      `;

code = code.replace(whySectionRegex, reviewsSection);

// Remove reasons array
code = code.replace(/const reasons = \[\s*\{[\s\S]*?\}\s*\];/m, '');

// Remove AnimatedNumber
code = code.replace(/function AnimatedNumber\(\{[\s\S]*?return <span ref=\{nodeRef\}>0\{suffix\}<\/span>;\s*\}/m, '');

fs.writeFileSync('src/app/App.tsx', code);
console.log('Done');
