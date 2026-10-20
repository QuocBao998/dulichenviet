import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import {
  X, Clock, Calendar, MapPin, Plane, CheckCircle, Phone, Sparkles, Shield,
  Award, FileText, Eye, Printer, Download, ChevronDown, ChevronUp, Utensils,
  ExternalLink, Check, Info, ZoomIn
} from "lucide-react";
import { TourItem } from "../../data/toursData";
import { useLang, t } from "../App";
import LogoImage from "../../imports/Logo.png";

interface LiquidTourModalProps {
  tour: TourItem;
  onClose: () => void;
  openForm?: () => void;
}

export const LiquidTourModal = React.forwardRef<HTMLDivElement, LiquidTourModalProps>(
  function LiquidTourModal({ tour, onClose, openForm }, ref) {
    const { lang } = useLang();
    const [showPdfViewer, setShowPdfViewer] = useState(false);
    const [showFullDetails, setShowFullDetails] = useState(false);
    const [activePdfTab, setActivePdfTab] = useState<"all" | "gallery" | "itinerary" | "pricing" | "policy">("all");

    const isContact = tour.price === null || tour.priceFormatted === "Liên hệ";

    const standardIncludes = tour.inclusions && tour.inclusions.length > 0 ? tour.inclusions : [
      `Phương tiện di chuyển: ${tour.airline} khứ hồi và xe đời mới chất lượng cao suốt tuyến`,
      "Khách sạn tiêu chuẩn 3 - 5 sao tiện nghi, vị trí trung tâm",
      "Các bữa ăn tiêu chuẩn chất lượng cao theo chương trình",
      "Vé vào cổng tất cả các điểm tham quan theo lịch trình",
      "Hướng dẫn viên chuyên nghiệp, nhiệt tình hỗ trợ 24/7",
      "Bảo hiểm du lịch quốc tế tối đa 1.000.000.000 VNĐ/người/vụ",
      "Quà tặng độc quyền: Nón du lịch Én Việt, nước suối hằng ngày"
    ];

    const pdfFileName = tour.pdfFile || `CHUONG_TRINH_TOUR_${tour.code}.pdf`;

    return (
      <div ref={ref} className="fixed inset-0 z-[100] flex items-center justify-center">
        {/* Backdrop */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window Container */}
        <div className="relative z-10 w-full max-w-2xl max-h-[92vh] mx-4 flex flex-col pointer-events-auto">
          <Motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="w-full bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/80 max-h-[90vh]"
            style={{
              boxShadow: "0 25px 60px -15px rgba(0, 30, 60, 0.25)"
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Banner */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
              <img
                src={tour.image || "https://images.unsplash.com/photo-1508248467877-aec1b08de376?w=1000&q=85"}
                alt={tour.title}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1508248467877-aec1b08de376?w=1000&q=85";
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002238] via-[#002238]/45 to-transparent" />

              {/* Badges top-left */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/60 text-[#003B5C] font-black text-xs shadow-md">
                  {tour.code}
                </span>
                {tour.badge && (
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#1e64ae] to-[#00A651] text-white font-black text-xs shadow-md">
                    {tour.badge}
                  </span>
                )}
              </div>

              {/* Title & country bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold mb-2">
                  {tour.country}
                </span>
                <h2 className="text-xl sm:text-2xl font-black leading-snug drop-shadow-md">
                  {tour.title}
                </h2>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
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

              {/* ── CỤM TRẢI NGHIỆM & ĐIỂM NỔI BẬT NHẤT ── */}
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-[#003B5C] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Trải Nghiệm & Điểm Nổi Bật Nhất</span>
                </h3>

                <div className="space-y-3">
                  {/* Highlights list */}
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

                  {/* ── MỤC PDF Ở CHỖ CỤM TRẢI NGHIỆM & ĐIỂM NỔI BẬT NHẤT ĐỂ XEM FILE ── */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white shadow-lg shadow-red-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 shadow-inner">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full bg-white text-red-600 font-black text-[10px] uppercase tracking-wider shadow-sm">
                            FILE PDF ĐÍNH KÈM
                          </span>
                          <span className="text-[11px] text-white/90 font-medium hidden sm:inline">
                            Chi tiết toàn bộ hình ảnh & chương trình
                          </span>
                        </div>
                        <div className="text-sm font-black text-white truncate mt-1" title={pdfFileName}>
                          {pdfFileName}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => setShowPdfViewer(true)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50 text-red-600 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
                      >
                        <Eye className="w-4 h-4 text-red-600" />
                        <span>Xem File PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── DỊCH VỤ BAO GỒM TRỌN GÓI ── */}
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

              {/* Expandable details button for day-by-day & pricing schedule */}
              {(tour.itineraryDays || tour.pricingTable || tour.flightInfo) && (
                <div className="border border-gray-200/80 rounded-2xl overflow-hidden bg-white/70">
                  <button
                    type="button"
                    onClick={() => setShowFullDetails(!showFullDetails)}
                    className="w-full px-4 py-3 flex items-center justify-between text-xs font-black text-[#003B5C] hover:bg-blue-50/50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#1e64ae]" />
                      <span>
                        {showFullDetails ? "Thu gọn thông tin chi tiết" : "Xem thêm: Lịch trình từng ngày & Bảng giá ngày khởi hành"}
                      </span>
                    </span>
                    {showFullDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {showFullDetails && (
                    <div className="p-4 border-t border-gray-100 space-y-5 bg-white">
                      {/* Flight times */}
                      {tour.flightInfo && (
                        <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs space-y-1">
                          <div className="font-black text-[#1e64ae] uppercase mb-1 flex items-center gap-1.5">
                            <Plane className="w-3.5 h-3.5" />
                            <span>Thông Tin Chuyến Bay ({tour.flightInfo.airline})</span>
                          </div>
                          <div className="text-gray-700"><strong>Chặng đi:</strong> {tour.flightInfo.outbound}</div>
                          <div className="text-gray-700"><strong>Chặng về:</strong> {tour.flightInfo.returnFlight}</div>
                          {tour.flightInfo.baggage && (
                            <div className="text-gray-700"><strong>Hành lý:</strong> {tour.flightInfo.baggage}</div>
                          )}
                        </div>
                      )}

                      {/* Pricing table */}
                      {tour.pricingTable && tour.pricingTable.length > 0 && (
                        <div>
                          <div className="text-xs font-black text-[#003B5C] uppercase mb-2">
                            Bảng Giá Tour Khởi Hành Chi Tiết
                          </div>
                          <div className="overflow-x-auto rounded-xl border border-gray-100 text-xs">
                            <table className="w-full text-left">
                              <thead className="bg-gray-50 text-[11px] font-black text-gray-600">
                                <tr>
                                  <th className="py-2 px-3">Đợt Đi</th>
                                  <th className="py-2 px-3">Ngày Khởi Hành</th>
                                  <th className="py-2 px-3 text-right">Người Lớn</th>
                                  <th className="py-2 px-3 text-right">Trẻ Em</th>
                                  <th className="py-2 px-3 text-right">Em Bé</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100">
                                {tour.pricingTable.map((p, idx) => (
                                  <tr key={idx} className="hover:bg-gray-50/80">
                                    <td className="py-2 px-3 font-bold text-[#003B5C]">{p.month}</td>
                                    <td className="py-2 px-3">{p.dates}</td>
                                    <td className="py-2 px-3 text-right font-black text-[#1e64ae]">{p.adult} đ</td>
                                    <td className="py-2 px-3 text-right text-gray-700">{p.child ? `${p.child} đ` : "—"}</td>
                                    <td className="py-2 px-3 text-right text-gray-500">{p.infant ? `${p.infant} đ` : "—"}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          {tour.singleRoomSurcharge && (
                            <div className="text-[11px] text-gray-500 mt-1.5 font-medium">
                              • Phụ thu phòng đơn: <strong>{tour.singleRoomSurcharge}</strong>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Day-by-day Itinerary */}
                      {tour.itineraryDays && tour.itineraryDays.length > 0 && (
                        <div>
                          <div className="text-xs font-black text-[#003B5C] uppercase mb-2">
                            Hành Trình Từng Ngày
                          </div>
                          <div className="space-y-3">
                            {tour.itineraryDays.map((d) => (
                              <div key={d.day} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs space-y-1">
                                <div className="font-black text-[#003B5C] flex items-center justify-between">
                                  <span>{d.title}</span>
                                  {d.meals && <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">{d.meals}</span>}
                                </div>
                                <div className="text-gray-600 leading-relaxed">
                                  {d.activities.map(a => a.desc).join(" ")}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

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
                  <div className="text-xl font-black text-[#1e64ae]">Liên hệ</div>
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
                  className="flex-1 sm:flex-initial px-7 py-3 rounded-xl bg-gradient-to-r from-[#1e64ae] to-[#00A651] hover:brightness-110 text-white font-black text-sm shadow-lg shadow-blue-900/20 transition-all uppercase tracking-wide cursor-pointer"
                >
                  {t(lang, "Đăng Ký Tư Vấn / Đặt Tour", "Book / Inquire Now")}
                </button>
              </div>
            </div>
          </Motion.div>
        </div>

        {/* ── MODAL XEM CHI TIẾT FILE PDF VỚI TOÀN BỘ NỘI DUNG VÀ HÌNH ẢNH ── */}
        <AnimatePresence>
          {showPdfViewer && (
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md">
              <Motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-5xl max-h-[96vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              >
                {/* PDF Viewer Top Toolbar */}
                <div className="p-4 bg-[#003B5C] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shrink-0 shadow-md">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-red-200 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Tài Liệu PDF Chương Trình Tour Chính Thức</span>
                      </div>
                      <div className="font-mono text-sm sm:text-base font-bold truncate text-white" title={pdfFileName}>
                        {pdfFileName}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 justify-end">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-3.5 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span className="hidden sm:inline">In Tài Liệu</span>
                    </button>
                    <a
                      href={`#`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.print();
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-[#00A651] hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span className="hidden sm:inline">Tải Về</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setShowPdfViewer(false)}
                      className="w-9 h-9 rounded-full bg-white/20 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                      title="Đóng xem PDF"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* PDF Document Paper Body (Scrollable Document Canvas) */}
                <div className="p-4 sm:p-8 overflow-y-auto bg-slate-100 flex-1 space-y-6">
                  {/* Digital Paper Sheet */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-10 max-w-4xl mx-auto text-gray-800 space-y-8">
                    
                    {/* 1. Official Header with Logos & License */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b-2 border-red-500 pb-6">
                      <div className="flex items-center gap-4">
                        <img src={LogoImage} alt="Én Việt" className="h-14 w-auto object-contain" />
                        <div>
                          <div className="font-black text-sm sm:text-base text-[#003B5C] uppercase tracking-tight">
                            CÔNG TY CỔ PHẦN ĐẦU TƯ GIÁO DỤC VÀ DỊCH VỤ LỮ HÀNH ÉN VIỆT
                          </div>
                          <div className="text-xs text-gray-600 mt-0.5">
                            45B Ông Ích Khiêm - Phường 10 - Quận 11 - TP. Hồ Chí Minh
                          </div>
                          <div className="text-[11px] text-[#1e64ae] font-semibold">
                            Giấy phép kinh doanh Lữ hành Quốc tế số: GP-79-888/TCDL-GP LHQT
                          </div>
                        </div>
                      </div>

                      <div className="text-right text-xs text-gray-600 shrink-0">
                        <div className="font-bold text-red-600 text-sm">Hotline: 0983 056 056 &bull; 0964 110 000</div>
                        <div>Email: sale1.dulichenviet@gmail.com</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase mt-1">PATA &bull; VITA &bull; SINCE 2004</div>
                      </div>
                    </div>

                    {/* 2. Document Title Banner */}
                    <div className="text-center py-6 px-4 bg-gradient-to-r from-red-50 via-rose-50 to-amber-50 rounded-2xl border-2 border-red-200">
                      <span className="inline-block px-4 py-1 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-wider mb-2">
                        CHƯƠNG TRÌNH DU LỊCH ĐẶC BIỆT
                      </span>
                      <h1 className="text-xl sm:text-3xl font-black text-red-700 tracking-tight uppercase leading-snug">
                        {tour.title}
                      </h1>
                      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-[#003B5C] mt-2">
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-red-600" /> Thời gian: {tour.duration}</span>
                        <span className="flex items-center gap-1.5"><Plane className="w-4 h-4 text-[#1e64ae]" /> Hàng không: {tour.airline}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-600" /> Khởi hành: {tour.departure}</span>
                      </div>
                    </div>

                    {/* 3. Hero Feature Photo with Overview Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-200">
                      <div className="md:col-span-2 relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-md">
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <span className="px-2.5 py-0.5 rounded bg-red-600 text-[11px] font-bold uppercase tracking-wider">
                            Hình ảnh thực tế điểm đến
                          </span>
                          <div className="font-black text-base sm:text-lg mt-1 drop-shadow">
                            {tour.country} &bull; {tour.itinerary}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                          <div className="text-[11px] font-bold text-gray-500 uppercase">Mã tour chính thức</div>
                          <div className="text-base font-black text-[#003B5C]">{tour.code}</div>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                          <div className="text-[11px] font-bold text-gray-500 uppercase">Hãng hàng không</div>
                          <div className="text-sm font-black text-[#1e64ae]">{tour.airline}</div>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                          <div className="text-[11px] font-bold text-gray-500 uppercase">Giá trọn gói từ</div>
                          <div className="text-xl font-black text-red-600">{tour.priceFormatted}</div>
                        </div>
                      </div>
                    </div>

                    {/* 4. Flight Information Box */}
                    {tour.flightInfo && (
                      <div className="p-5 rounded-2xl bg-blue-50/80 border-2 border-blue-200 text-xs sm:text-sm space-y-2">
                        <div className="font-black text-blue-900 uppercase flex items-center gap-2 text-sm border-b border-blue-200 pb-2">
                          <Plane className="w-4 h-4 text-blue-600" />
                          <span>LỊCH TRÌNH CHUYẾN BAY CHI TIẾT ({tour.flightInfo.airline})</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          <div className="p-3 bg-white rounded-xl border border-blue-100">
                            <span className="text-[11px] font-bold text-blue-600 uppercase block mb-1">Chuyến bay đi:</span>
                            <strong className="text-[#003B5C] font-mono text-xs sm:text-sm">{tour.flightInfo.outbound}</strong>
                          </div>
                          <div className="p-3 bg-white rounded-xl border border-blue-100">
                            <span className="text-[11px] font-bold text-emerald-600 uppercase block mb-1">Chuyến bay về:</span>
                            <strong className="text-[#003B5C] font-mono text-xs sm:text-sm">{tour.flightInfo.returnFlight}</strong>
                          </div>
                        </div>
                        {tour.flightInfo.baggage && (
                          <div className="text-gray-700 pt-1 font-medium">
                            • <strong>Tiêu chuẩn hành lý:</strong> {tour.flightInfo.baggage}
                          </div>
                        )}
                      </div>
                    )}

                    {/* 5. Rich Image Gallery of Program Destinations */}
                    <div>
                      <div className="flex items-center justify-between border-b-2 border-red-500 pb-2 mb-4">
                        <h3 className="text-base font-black text-red-700 uppercase tracking-wider flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-amber-500" />
                          <span>TOÀN BỘ HÌNH ẢNH DANH THẮNG CÓ TRONG FILE CHƯƠNG TRÌNH</span>
                        </h3>
                        <span className="text-xs text-gray-500 font-semibold">Tài liệu hình ảnh HD</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        {tour.galleryImages && tour.galleryImages.length > 0 ? (
                          tour.galleryImages.map((imgUrl, idx) => (
                            <div key={idx} className="group relative h-40 rounded-xl overflow-hidden shadow-sm border border-gray-200">
                              <img
                                src={imgUrl}
                                alt={`Điểm đến ${idx + 1}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                              <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-bold line-clamp-1">
                                {tour.highlights[idx] || `Thắng cảnh ${tour.country}`}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-span-4 relative h-56 rounded-xl overflow-hidden shadow-sm border border-gray-200">
                            <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 6. Program Highlights & Special Experience Meals */}
                    <div>
                      <h3 className="text-base font-black text-[#003B5C] uppercase tracking-wider mb-3 border-b pb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00A651]" />
                        <span>ĐIỂM NỔI BẬT & TRẢI NGHIỆM ĐẶC SẮC TRONG FILE</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tour.highlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm">
                            <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                              ★
                            </div>
                            <span className="text-gray-800 font-semibold">{hl}</span>
                          </div>
                        ))}
                      </div>

                      {tour.giftMeals && tour.giftMeals.length > 0 && (
                        <div className="mt-4 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm space-y-1.5">
                          <div className="font-black text-amber-900 uppercase flex items-center gap-2 text-xs">
                            <Utensils className="w-4 h-4 text-amber-600" />
                            <span>QUÀ TẶNG & ẨM THỰC ĐẶC BIỆT TRONG TOUR</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            {tour.giftMeals.map((g, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-gray-700">
                                <span className="text-amber-600 font-bold">•</span>
                                <span>{g}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 7. Day by Day Detailed Itinerary with Images & Activities */}
                    {tour.itineraryDays && tour.itineraryDays.length > 0 && (
                      <div>
                        <div className="flex items-center justify-between border-b-2 border-red-500 pb-2 mb-6">
                          <h3 className="text-base font-black text-red-700 uppercase tracking-wider flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-red-600" />
                            <span>LỊCH TRÌNH CHI TIẾT TỪNG NGÀY TRONG CHƯƠNG TRÌNH</span>
                          </h3>
                          <span className="text-xs text-gray-500 font-semibold">{tour.duration}</span>
                        </div>

                        <div className="space-y-6">
                          {tour.itineraryDays.map((d) => (
                            <div
                              key={d.day}
                              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3 relative overflow-hidden"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                                <div className="flex items-center gap-3">
                                  <span className="px-3 py-1 rounded-xl bg-red-600 text-white font-black text-xs uppercase tracking-wider shadow-sm">
                                    NGÀY {d.day}
                                  </span>
                                  <h4 className="font-black text-sm sm:text-base text-[#003B5C]">
                                    {d.title}
                                  </h4>
                                </div>
                                {d.meals && (
                                  <span className="text-xs text-amber-800 font-bold bg-amber-100 px-3 py-1 rounded-full w-fit">
                                    Bữa ăn: {d.meals}
                                  </span>
                                )}
                              </div>

                              {d.image && (
                                <div className="relative h-44 sm:h-56 rounded-xl overflow-hidden shadow-sm my-2">
                                  <img
                                    src={d.image}
                                    alt={d.title}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-black/60 text-white text-[11px] font-semibold backdrop-blur-sm">
                                    Điểm tham quan Ngày {d.day}
                                  </div>
                                </div>
                              )}

                              <div className="space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                                {d.activities.map((a, idx) => (
                                  <div
                                    key={idx}
                                    className={`flex items-start gap-2.5 ${
                                      a.highlight ? "font-semibold text-gray-900 bg-blue-50/50 p-2 rounded-lg" : ""
                                    }`}
                                  >
                                    <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                                    <span>{a.desc}</span>
                                  </div>
                                ))}
                              </div>

                              {d.hotel && (
                                <div className="text-[11px] text-gray-500 font-semibold pt-1 border-t border-gray-100">
                                  Khách sạn: {d.hotel}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 8. Official Departure & Pricing Table */}
                    {tour.pricingTable && tour.pricingTable.length > 0 && (
                      <div>
                        <div className="border-b-2 border-emerald-600 pb-2 mb-4">
                          <h3 className="text-base font-black text-emerald-800 uppercase tracking-wider flex items-center gap-2">
                            <Award className="w-5 h-5 text-emerald-600" />
                            <span>BẢNG GIÁ TOUR CHI TIẾT THEO NGÀY KHỞI HÀNH</span>
                          </h3>
                        </div>

                        <div className="overflow-x-auto rounded-2xl border-2 border-gray-200 text-xs sm:text-sm">
                          <table className="w-full text-left">
                            <thead className="bg-gray-100 font-black text-xs text-gray-700">
                              <tr>
                                <th className="py-3 px-4">Đợt Khởi Hành</th>
                                <th className="py-3 px-4">Ngày Đi Chi Tiết</th>
                                <th className="py-3 px-4 text-right">Người Lớn (từ 11t)</th>
                                <th className="py-3 px-4 text-right">Trẻ Em (2-11t)</th>
                                <th className="py-3 px-4 text-right">Em Bé (&lt;2t)</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {tour.pricingTable.map((p, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                  <td className="py-3 px-4 font-black text-[#003B5C]">{p.month}</td>
                                  <td className="py-3 px-4 font-semibold">{p.dates}</td>
                                  <td className="py-3 px-4 text-right font-black text-red-600 text-sm">{p.adult} VNĐ</td>
                                  <td className="py-3 px-4 text-right font-bold text-[#1e64ae]">{p.child ? `${p.child} VNĐ` : "—"}</td>
                                  <td className="py-3 px-4 text-right text-gray-600">{p.infant ? `${p.infant} VNĐ` : "—"}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {tour.singleRoomSurcharge && (
                          <div className="text-xs text-gray-600 font-bold mt-2 bg-gray-50 p-3 rounded-xl border border-gray-200">
                            • Phụ thu phòng đơn (khi có nhu cầu ở phòng riêng 1 người): <strong>{tour.singleRoomSurcharge}</strong>
                          </div>
                        )}
                      </div>
                    )}

                    {/* 9. Inclusions & Exclusions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                      <div className="p-5 rounded-2xl bg-emerald-50/70 border-2 border-emerald-200 space-y-3">
                        <div className="font-black text-emerald-900 uppercase flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>GIÁ TOUR BAO GỒM TRỌN GÓI</span>
                        </div>
                        <ul className="space-y-1.5 text-gray-700">
                          {standardIncludes.map((inc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-emerald-600 font-bold">✓</span>
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-rose-50/70 border-2 border-rose-200 space-y-3">
                        <div className="font-black text-rose-900 uppercase flex items-center gap-2">
                          <X className="w-4 h-4 text-rose-600" />
                          <span>GIÁ TOUR KHÔNG BAO GỒM</span>
                        </div>
                        <ul className="space-y-1.5 text-gray-700">
                          {tour.exclusions && tour.exclusions.length > 0 ? (
                            tour.exclusions.map((exc, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-rose-600 font-bold">✕</span>
                                <span>{exc}</span>
                              </li>
                            ))
                          ) : (
                            <>
                              <li className="flex items-start gap-2">
                                <span className="text-rose-600 font-bold">✕</span>
                                <span>Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-rose-600 font-bold">✕</span>
                                <span>Tiền bồi dưỡng (Tip) cho hướng dẫn viên và tài xế địa phương</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-rose-600 font-bold">✕</span>
                                <span>Chi phí cá nhân ngoài hành trình và chi phí phòng đơn</span>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>

                    {/* 10. Visa Requirements & Cancellation Policies */}
                    {tour.visaRequirements && tour.visaRequirements.length > 0 && (
                      <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm space-y-2">
                        <div className="font-black text-amber-900 uppercase flex items-center gap-2">
                          <Info className="w-4 h-4 text-amber-600" />
                          <span>HƯỚNG DẪN HỒ SƠ XIN VISA NHẬP CẢNH</span>
                        </div>
                        <ul className="space-y-1 text-gray-700">
                          {tour.visaRequirements.map((v, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-amber-600 font-bold">•</span>
                              <span>{v}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 11. Official Footer & Booking Hotline */}
                    <div className="border-t-2 border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                      <div>
                        <div className="font-black text-sm text-[#003B5C]">
                          Én Việt Travel &bull; Khám Phá Thế Giới Trọn Vẹn
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          Tài liệu chương trình được lưu hành chính thức tại hệ thống văn phòng Én Việt.
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href="tel:0964110000"
                          className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Hotline: 0964.110.000</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* PDF Viewer Footer status bar */}
                <div className="p-3 bg-gray-100 border-t border-gray-200 flex items-center justify-between text-xs text-gray-600 px-6 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span>Đang xem file: <strong>{pdfFileName}</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="text-blue-600 hover:underline font-bold"
                    >
                      In trang này
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowPdfViewer(false)}
                      className="text-gray-500 hover:text-red-600 font-bold"
                    >
                      Đóng
                    </button>
                  </div>
                </div>

              </Motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);
