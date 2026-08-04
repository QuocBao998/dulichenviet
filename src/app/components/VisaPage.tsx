import { motion as Motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export function VisaPage() {
  const visas = [
    { country: "Visa Châu Á", desc: "Nhật Bản, Hàn Quốc, Trung Quốc, Đài Loan...", price: "Từ 1.200.000đ" },
    { country: "Visa Châu Âu", desc: "Schengen (Pháp, Ý, Thụy Sĩ, Đức...), Anh...", price: "Từ 3.500.000đ" },
    { country: "Visa Châu Mỹ", desc: "Mỹ, Canada, Brazil...", price: "Từ 4.000.000đ" },
    { country: "Visa Úc & New Zealand", desc: "Du lịch, thăm thân, công tác...", price: "Từ 3.800.000đ" },
  ];

  return (
    <div className="pt-12 pb-24 min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#ffffff] to-[#e8f5e9]">
      <div className="max-w-7xl mx-auto px-4">
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-4">Dịch Vụ Visa Chuyên Nghiệp</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Thủ tục nhanh chóng, tỷ lệ đậu cao, hỗ trợ tận tình từ A đến Z.</p>
        </Motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visas.map((v, i) => (
            <Motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <h3 className="text-xl font-bold text-[#1e64ae] mb-2">{v.country}</h3>
              <p className="text-sm text-gray-500 mb-4 h-10">{v.desc}</p>
              <div className="text-[#00A651] font-black text-lg">{v.price}</div>
            </Motion.div>
          ))}
        </div>

        <div className="my-20 border-t border-gray-200" />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <Motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-bold text-[#003B5C] mb-6">Tại sao chọn dịch vụ Visa của Én Việt?</h2>
            <ul className="space-y-4">
              {["Tư vấn miễn phí và đánh giá hồ sơ chính xác", "Quy trình xử lý hồ sơ nhanh gọn, chuyên nghiệp", "Bảo mật thông tin khách hàng tuyệt đối", "Hỗ trợ công chứng, dịch thuật, điền form", "Giao nhận hồ sơ tận nơi"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-gray-700">
                  <CheckCircle className="w-6 h-6 text-[#00A651]" /> {item}
                </li>
              ))}
            </ul>
          </Motion.div>
          <Motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" alt="Passport & Visa" className="rounded-3xl shadow-2xl" />
          </Motion.div>
        </div>

        
      </div>
    </div>
  );
}