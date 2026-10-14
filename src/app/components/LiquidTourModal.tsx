import React from "react";
import { motion as Motion } from "motion/react";
import { X, Clock, Calendar, MapPin, Plane, CheckCircle, Phone, Sparkles, Shield, Award } from "lucide-react";
import { TourItem } from "../../data/toursData";
import { useLang, t } from "../App";

interface LiquidTourModalProps {
  tour: TourItem;
  onClose: () => void;
  openForm?: () => void;
}

export function LiquidTourModal({ tour, onClose, openForm }: LiquidTourModalProps) {
  const { lang } = useLang();
  const isContact = tour.price === null || tour.priceFormatted === "Liên hệ";

  const standardIncludes = [
    `Phương tiện di chuyển: ${tour.airline} khứ hồi và xe đời mới chất lượng cao suốt tuyến`,
    "Khách sạn tiêu chuẩn 3 - 5 sao tiện nghi, vị trí trung tâm",
    "Các bữa ăn tiêu chuẩn chất lượng cao theo chương trình",
    "Vé vào cổng tất cả các điểm tham quan theo lịch trình",
    "Hướng dẫn viên chuyên nghiệp, nhiệt tình hỗ trợ 24/7",
    "Bảo hiểm du lịch quốc tế tối đa 1.000.000.000 VNĐ/người/vụ",
    "Quà tặng độc quyền: Nón du lịch Én Việt, nước suối hằng ngày"
  ];

  return (
    <>
      {/* Backdrop */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
      />

      {/* Modal Dialog */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 overflow-y-auto pointer-events-none">
        <Motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="pointer-events-auto relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: "1px solid rgba(255, 255, 255, 0.9)",
            boxShadow: "0 25px 60px -15px rgba(0, 30, 60, 0.25)"
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Banner */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
            <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002238] via-[#002238]/40 to-transparent" />
            
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[#003B5C] font-black text-xs shadow-md">
                {tour.code}
              </span>
              {tour.badge && (
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#1e64ae] to-[#00A651] text-white font-black text-xs shadow-md">
                  {tour.badge}
                </span>
              )}
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold mb-2">
                {tour.country}
              </span>
              <h2 className="text-xl sm:text-2xl font-black leading-snug drop-shadow-md">
                {tour.title}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            {/* Quick stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-100/80">
                <div className="text-[10px] font-black uppercase text-blue-600 mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Thời Gian</span>
                </div>
                <div className="text-xs sm:text-sm font-black text-[#003B5C]">{tour.duration}</div>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100/80">
                <div className="text-[10px] font-black uppercase text-emerald-600 mb-1 flex items-center gap-1">
                  <Plane className="w-3 h-3" />
                  <span>Hàng Không</span>
                </div>
                <div className="text-xs sm:text-sm font-black text-[#003B5C] truncate">{tour.airline}</div>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-100/80">
                <div className="text-[10px] font-black uppercase text-amber-600 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Khởi Hành</span>
                </div>
                <div className="text-xs sm:text-sm font-black text-[#003B5C]">{tour.departure}</div>
              </div>

              <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-100/80">
                <div className="text-[10px] font-black uppercase text-purple-600 mb-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>Hành Trình</span>
                </div>
                <div className="text-xs sm:text-sm font-black text-[#003B5C] truncate" title={tour.itinerary}>
                  {tour.itinerary}
                </div>
              </div>
            </div>

            {/* Highlights List from dataset */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-[#003B5C] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Trải Nghiệm & Điểm Nổi Bật Nhất</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tour.highlights.map((hl, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-gray-100 shadow-sm"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#003B5C]">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-[#003B5C] mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#1e64ae]" />
                <span>Dịch Vụ Bao Gồm Trọn Gói</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                {standardIncludes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00A651] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust note */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100/60 flex items-center gap-3">
              <Award className="w-8 h-8 text-[#00A651] shrink-0" />
              <div className="text-xs text-gray-600 leading-relaxed">
                <strong className="text-[#003B5C]">Cam kết chất lượng Én Việt:</strong> Khởi hành đúng lịch trình, giá niêm yết rõ ràng không phát sinh chi phí ẩn, đội ngũ hướng dẫn viên giàu kinh nghiệm đồng hành tận tâm.
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-5 bg-white/95 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div>
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                {isContact ? "Báo giá tour" : "Giá trọn gói khuyến mãi"}
              </div>
              {isContact ? (
                <div className="text-xl font-black text-[#1e64ae]">Liên hệ tư vấn</div>
              ) : (
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#00A651]">
                  {tour.priceFormatted}
                  <span className="text-xs text-gray-400 font-normal ml-1">/ khách</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="tel:0964110000"
                className="flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl border-2 border-[#1e64ae] text-[#1e64ae] hover:bg-[#1e64ae] hover:text-white font-black text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>0964.110.000</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  openForm?.();
                }}
                className="flex-1 sm:flex-initial px-7 py-3 rounded-xl bg-gradient-to-r from-[#1e64ae] to-[#00A651] hover:brightness-110 text-white font-black text-sm shadow-lg shadow-blue-900/20 transition-all uppercase tracking-wide"
              >
                {t(lang, "Đăng Ký Tư Vấn / Đặt Tour", "Book / Inquire Now")}
              </button>
            </div>
          </div>
        </Motion.div>
      </div>
    </>
  );
}
