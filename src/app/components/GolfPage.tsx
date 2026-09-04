import { motion as Motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import img3 from "../../imports/img_3.png";
import img4 from "../../imports/img_4.png";

export function GolfPage() {
  const courses = [
    { name: "Sân Golf The Bluffs Hồ Tràm", loc: "Bà Rịa - Vũng Tàu", img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80" },
    { name: "Sân Golf BRG Đà Nẵng", loc: "Đà Nẵng", img: img4 },
    { name: "Sân Golf FLC Hạ Long", loc: "Quảng Ninh", img: img3 },
  ];

  return (
    <div className="pt-12 pb-24 min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#ffffff] to-[#e8f5e9]">
      <div className="max-w-7xl mx-auto px-4">
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-4">Sân Golf</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">GolfTrip chuyên đặt sân Golf, tour Golf, sản phẩm giải Golf và các dịch vụ chuyên về Golf...</p>
        </Motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((c, i) => (
            <Motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-[#003B5C]">
                  5.0 <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#00A651] font-bold mb-2 uppercase">{c.loc}</div>
                <h3 className="text-xl font-extrabold text-[#003B5C] mb-4">{c.name}</h3>
                <button className="flex items-center gap-2 text-[#1e64ae] font-bold hover:gap-4 transition-all">
                  Đặt sân ngay <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}