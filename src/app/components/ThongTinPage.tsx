import { motion as Motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";

export function ThongTinPage() {
  const news = [
    { title: "Cẩm nang du lịch Nhật Bản mùa hoa anh đào", date: "15/03/2026", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80" },
    { title: "Những lưu ý khi xin Visa Schengen bạn cần biết", date: "10/03/2026", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
    { title: "Top 5 điểm đến không thể bỏ qua tại Phú Quốc", date: "05/03/2026", img: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800&q=80" },
    { title: "Kinh nghiệm săn mây Tà Xùa cực chuẩn", date: "01/03/2026", img: "https://images.unsplash.com/photo-1506501139174-099022df5260?w=800&q=80" }
  ];

  return (
    <div className="pt-12 pb-24 min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#ffffff] to-[#e8f5e9]">
      <div className="max-w-7xl mx-auto px-4">
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-4">Thông Tin & Cẩm Nang Du Lịch</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Những tin tức mới nhất, mẹo hay và kinh nghiệm du lịch quý báu dành cho bạn.</p>
        </Motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, i) => (
            <Motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg flex flex-col sm:flex-row group cursor-pointer"
            >
              <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold mb-3">
                  <Calendar className="w-4 h-4" /> {item.date}
                </div>
                <h3 className="text-xl font-bold text-[#003B5C] mb-4 group-hover:text-[#1e64ae] transition-colors line-clamp-2">{item.title}</h3>
                <div className="flex items-center gap-2 text-[#00A651] font-bold text-sm">
                  Đọc tiếp <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}