import { motion as Motion } from "motion/react";
import { Plane, Calendar, CreditCard, ChevronRight } from "lucide-react";

export function VeMayBayPage() {
  return (
    <div className="pt-12 pb-24 min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#ffffff] to-[#e8f5e9]">
      <div className="max-w-7xl mx-auto px-4">
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-4">Tổng Đại Lý Vé Máy Bay</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Cung cấp vé máy bay trong nước và quốc tế với giá tốt nhất thị trường.</p>
        </Motion.div>

        <div className="bg-white rounded-[2rem] shadow-xl p-8 max-w-4xl mx-auto mb-16 border border-gray-100">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
            <button className="px-6 py-2 bg-[#003B5C] text-white rounded-full font-bold text-sm">Vé Khứ Hồi</button>
            <button className="px-6 py-2 text-gray-500 hover:bg-gray-50 rounded-full font-bold text-sm transition-colors">Một Chiều</button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500">Điểm đi</label>
              <div className="relative">
                <Plane className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A651] rotate-45" />
                <input type="text" placeholder="TP Hồ Chí Minh (SGN)" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-4 text-[#003B5C] font-bold focus:ring-2 focus:ring-[#00A651]/50 outline-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500">Điểm đến</label>
              <div className="relative">
                <Plane className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1e64ae] rotate-90" />
                <input type="text" placeholder="Hà Nội (HAN)" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-4 text-[#003B5C] font-bold focus:ring-2 focus:ring-[#1e64ae]/50 outline-none" />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500">Ngày đi - Ngày về</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Chọn ngày" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-4 text-[#003B5C] font-bold focus:ring-2 focus:ring-gray-300 outline-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500">Hành khách & Hạng ghế</label>
              <div className="relative">
                <input type="text" placeholder="1 Người lớn, Phổ thông" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-[#003B5C] font-bold focus:ring-2 focus:ring-gray-300 outline-none" />
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-[#1e64ae] to-[#00A651] text-white font-black py-4 rounded-xl text-lg hover:brightness-110 transition-all shadow-lg">
            TÌM CHUYẾN BAY
          </button>
        </div>
      </div>
    </div>
  );
}