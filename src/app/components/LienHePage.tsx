import { motion as Motion } from "motion/react";
import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";

export function LienHePage() {
  return (
    <div className="pt-12 pb-24 min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#ffffff] to-[#e8f5e9]">
      <div className="max-w-7xl mx-auto px-4">
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-4">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.</p>
        </Motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Thông tin liên hệ */}
          <Motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#001D2E] text-white p-10 rounded-[2rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e64ae] opacity-20 rounded-full blur-[80px]" />
            <h2 className="text-2xl font-bold mb-8 relative z-10">Thông Tin Liên Hệ</h2>
            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#00A651] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#00E676] mb-1">Trụ Sở Chính</h4>
                  <p className="text-gray-300">45B Ông Ích Khiêm, Phường Bình Thới, TP.HCM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#00A651] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#00E676] mb-1">Hotline</h4>
                  <p className="text-gray-300">0964.110.000 - 0983.056.056 - 0971.33.55.33</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#00A651] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#00E676] mb-1">Email</h4>
                  <p className="text-gray-300">sale1.dulichenviet@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#00A651] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#00E676] mb-1">Giờ Làm Việc</h4>
                  <p className="text-gray-300">Thứ 2 - Thứ 7: 8h00 - 22h00<br/>Chủ Nhật: 8h00 - 17h30</p>
                </div>
              </div>
            </div>
          </Motion.div>

          {/* Form */}
          <Motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-[#003B5C] mb-8">Gửi Lời Nhắn</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Họ và tên</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A651]/50 text-[#003B5C]" placeholder="Nhập họ tên của bạn" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Số điện thoại</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A651]/50 text-[#003B5C]" placeholder="Nhập SĐT" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A651]/50 text-[#003B5C]" placeholder="Nhập Email" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Nội dung</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A651]/50 text-[#003B5C]" placeholder="Nhập nội dung cần tư vấn..." />
              </div>
              <button className="w-full bg-gradient-to-r from-[#1e64ae] to-[#00A651] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg">
                Gửi Yêu Cầu <Send className="w-5 h-5" />
              </button>
            </form>
          </Motion.div>
        </div>
      </div>
    </div>
  );
}