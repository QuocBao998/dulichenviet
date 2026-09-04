import { useState, useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { useLang, t } from "../App";
import {
  Search, MapPin, Calendar, Clock, Globe, ChevronDown, Phone, X,
  CheckCircle, XCircle, ChevronLeft, ChevronRight, Plane, Tag,
} from "lucide-react";

const W = "https://dulichenviet.vn/wp-content/uploads/";
const PER_PAGE = 8;

interface Tour {
  id: number;
  code: string;
  title: string;
  dest: string;
  duration: string;
  departure: string;
  price: string;
  image: string;
  cats: string[];
  region: string;
}

const tourData: Tour[] = [
  { id:1,  code:"EVG-HH2",   title:"Tour Sơn Tây Ngũ Đài Sơn Huyền Không Tự 7N7Đ | No Shopping",          dest:"Ngũ Đài Sơn, Sơn Tây (Trung Quốc)",           duration:"7 ngày 7 đêm", departure:"Tháng 5, 6",               price:"30.009.999 đ", image:W+"2026/07/Thanh-co-Binh-Dao-4-1024x682.webp",                                                                                    cats:["all","nuoc-ngoai","hanh-huong","hanh-huong-phat-giao"], region:"Tour Trung Quốc" },
  { id:2,  code:"EVG-HH1",   title:"Hành Hương Giang Nam: Ninh Ba – Hàng Châu – Vô Tích – An Huy – Nam Kinh 7N7Đ", dest:"Ninh Ba, Hàng Châu, Vô Tích, Nam Kinh",  duration:"7 ngày 7 đêm", departure:"Tháng 6 – 10",              price:"29.990.000 đ", image:W+"2026/07/Vinh-Niem-Hoa-2.jpg",                                                                                                    cats:["all","nuoc-ngoai","hanh-huong","hanh-huong-phat-giao"], region:"Tour Trung Quốc" },
  { id:3,  code:"EVG-SBT",   title:"Cảnh Sắc Giang Nam: Thượng Hải – Tô Châu – Hàng Châu – Ô Trấn – Vô Tích", dest:"Thượng Hải, Tô Châu, Hàng Châu, Ô Trấn",  duration:"5 ngày 4 đêm", departure:"Liên hệ",                   price:"16.790.000 đ", image:W+"2025/11/8-5-1024x564.jpg",                                                                                                       cats:["all","nuoc-ngoai"], region:"Tour Trung Quốc" },
  { id:4,  code:"EVG-THT",   title:"Khám Phá Nhật Bản: Lãng Mạn Mùa Hoa Tử Đằng",                            dest:"Tokyo, Yamanashi, Kyoto, Osaka",               duration:"6 ngày 5 đêm", departure:"30/4, 1/5",               price:"45.888.000 đ", image:W+"2025/07/KHAM-PHA-NHAT-BAN-1024x447.jpg",                                                                                           cats:["all","nuoc-ngoai"], region:"Tour Nhật Bản" },
  { id:5,  code:"EVG-THT",   title:"Du Lịch Thái Lan: Bangkok – Pattaya 2026",                                 dest:"Bangkok, Pattaya",                             duration:"5 ngày 4 đêm", departure:"2/9",                     price:"7.490.000 đ",  image:W+"2024/05/bangkok_-_pattaya_64d1603968834f99990868eba1a3780a.png",                                                                  cats:["all","nuoc-ngoai"], region:"Tour Thái Lan" },
  { id:6,  code:"EVG-THT",   title:"Du Lịch Hàn Quốc: Busan – Seoul",                                         dest:"Busan, Seoul",                                 duration:"6 ngày 5 đêm", departure:"Liên hệ",                   price:"18.990.000 đ", image:W+"2025/10/Cung-dien-Kyeongbok-Canh-Phuc-Cung-5-1024x667.jpg",                                                                       cats:["all","nuoc-ngoai"], region:"Tour Hàn Quốc" },
  { id:7,  code:"EVG-THT",   title:"Tour Du Lịch Khám Phá Dubai – Abu Dhabi",                                  dest:"Dubai, Abu Dhabi",                             duration:"5 ngày 4 đêm", departure:"30/4 – 1/5",             price:"30.990.000 đ", image:W+"2026/03/Dubai.png",                                                                                                               cats:["all","nuoc-ngoai"], region:"Tour nước ngoài" },
  { id:8,  code:"EVG-THT",   title:"Hành Trình Vàng Đến Thổ Nhĩ Kỳ – Istanbul – Bursa – Kusadasi – Cappadocia", dest:"Istanbul, Bursa, Kusadasi, Cappadocia",     duration:"8 ngày 7 đêm", departure:"30/4 – 1/5",             price:"48.800.000 đ", image:W+"2026/03/Thanh-pho-ngam-Kayasehir-1.jpg",                                                                                        cats:["all","nuoc-ngoai"], region:"Tour nước ngoài" },
  { id:9,  code:"EVG-THT",   title:"Tour Vũ Hán: Khai Phong – Đăng Phong – Lạc Dương – Tây An 2026",           dest:"Vũ Hán, Khai Phong, Lạc Dương, Tây An",      duration:"7 ngày 6 đêm", departure:"16/2 (29 Tết)",           price:"31.990.000 đ", image:W+"2025/12/3-1024x522.png",                                                                                                          cats:["all","nuoc-ngoai"], region:"Tour Trung Quốc" },
  { id:10, code:"EVG-THT",   title:"Thượng Hải – Vô Tích – Tô Châu – Hàng Châu Tết 2026",                      dest:"Thượng Hải, Vô Tích, Tô Châu, Hàng Châu",   duration:"5 ngày 4 đêm", departure:"Tết Nguyên Đán 2026",     price:"19.490.000 đ", image:W+"2025/12/2-1024x498.png",                                                                                                          cats:["all","nuoc-ngoai"], region:"Tour Trung Quốc" },
  { id:11, code:"EVG-DLT",   title:"Hàn Quốc Mùa Đông: Seoul – Đảo Nami – Lotte World – Trượt Tuyết Elysian", dest:"Seoul, Đảo Nami, Elysian Ski Resort",         duration:"6 ngày 5 đêm", departure:"Tết Nguyên Đán 2026",     price:"15.900.000 đ", image:W+"2025/12/8-1.jpg",                                                                                                                cats:["all","nuoc-ngoai"], region:"Tour Hàn Quốc" },
  { id:12, code:"",          title:"Du Lịch Hành Hương – Nam Bộ Chùa Xưa 2026",                                dest:"Các chùa cổ Miền Nam",                         duration:"2 ngày 1 đêm", departure:"Liên hệ",                   price:"Liên hệ",      image:W+"2026/04/Chua-Vam-Ray-2-1024x768.jpg",                                                                                                    cats:["all","trong-nuoc","hanh-huong","hanh-huong-phat-giao"], region:"Tour Miền Nam" },
  { id:13, code:"ENG-HDT",   title:"Tour Liên Tuyến: Đà Lạt – Nha Trang",                                      dest:"Đà Lạt, Nha Trang",                           duration:"4 ngày 4 đêm", departure:"Tối 18/2, 19/2 (M2, M3 Tết)", price:"2.790.000 đ", image:W+"2026/01/VINWONDERS-6-1024x341.jpg",                                                                                    cats:["all","trong-nuoc"], region:"Tour Miền Nam" },
  { id:14, code:"ENG-HDT",   title:"Săn Mây Đà Lạt – Langbiang Land – Que Garden",                             dest:"Đà Lạt, Langbiang",                           duration:"3 ngày 2 đêm", departure:"Mùng 2 – Mùng 8 Tết",     price:"2.790.000 đ",  image:W+"2026/01/Langbiang-Land-7.jpeg",                                                                                                   cats:["all","trong-nuoc"], region:"Tour Tây Nguyên" },
  { id:15, code:"ENG-HDT",   title:"Du Xuân Tết 2026: Khám Phá Đà Lạt Thung Lũng Các Vị Thần",                dest:"Đà Lạt",                                       duration:"3 ngày 2 đêm", departure:"Mùng 2 – Mùng 8 Tết",     price:"2.790.000 đ",  image:W+"2026/01/du-lich-Da-Lat-3-1024x606.webp",                                                                                          cats:["all","trong-nuoc"], region:"Tour Tây Nguyên" },
  { id:16, code:"ENG-HDT",   title:"Du Xuân Tết 2026: Đà Lạt – Hành Hương Samten Hills Chùa Tây Tạng",        dest:"Đà Lạt, Samten Hills",                        duration:"3 ngày 2 đêm", departure:"Tết âm lịch",              price:"Liên hệ",      image:W+"2026/01/Samten-Hills-Da-Lat-6-1024x575.webp",                                                                                     cats:["all","trong-nuoc","hanh-huong","hanh-huong-phat-giao"], region:"Tour Tây Nguyên" },
  { id:17, code:"ENG-HDT",   title:"Hành Trình Khám Phá Bắc Cát Tiên – Bảo Lộc – Tà Đùng",                   dest:"Bắc Cát Tiên, Bảo Lộc, Tà Đùng",             duration:"2 ngày 2 đêm", departure:"Mùng 2, 3, 4",            price:"2.990.000 đ",  image:W+"2026/01/2-ho-ta-dung-1024x767.jpg",                                                                                                   cats:["all","trong-nuoc"], region:"Tour Tây Nguyên" },
  { id:18, code:"EVG-TNBT",  title:"Tour Tây Ninh 1 Ngày: Núi Bà Đen – Cáp Treo – Đỉnh Vân Sơn – Buffet – Tòa Thánh – Chùa Gò Kén", dest:"Núi Bà Đen, Tòa Thánh Tây Ninh", duration:"1 ngày", departure:"Thứ 7, CN hàng tuần", price:"1.150.000 đ", image:W+"2025/05/1-2-1024x774.jpg", cats:["all","trong-nuoc"], region:"Tour Miền Nam" },
  { id:19, code:"EVG-AVT",   title:"Chương Trình Tham Quan Trải Nghiệm Vùng Chè Tà Xùa",                       dest:"Sơn La, Tà Xùa",                              duration:"4 ngày 3 đêm", departure:"Tháng 10/2025",            price:"5.642.000 đ",  image:W+"2025/09/Ta-Xua-6-1024x1024.jpg",                                                                                                  cats:["all","trong-nuoc"], region:"Tour Miền Bắc" },
  { id:20, code:"",          title:"Tour Miền Tây 2 Ngày 1 Đêm – Mỹ Tho – Bến Tre – Cần Thơ",                 dest:"Mỹ Tho, Bến Tre, Cần Thơ",                   duration:"2 ngày 1 đêm", departure:"Liên hệ",                   price:"Liên hệ",      image:W+"2024/08/TOUR-HANH-HUONG-TRA-VINH-SOC-TRANG-CAN-THO-3N2D-14.jpg",                                                                     cats:["all","trong-nuoc"], region:"Tour Miền Nam" },
  { id:21, code:"EVG-HLCLUB",title:"Tour Hành Hương Đức Mẹ Lavang – 2026",                                      dest:"La Vang (Quảng Trị)",                         duration:"3 ngày 2 đêm", departure:"Hàng tháng",               price:"Liên hệ",      image:W+"2025/08/Vieng-Duc-Me-Sao-Bien.jpg",                                                                                                    cats:["all","hanh-huong","hanh-huong-cong-giao"], region:"Tour Miền Trung" },
  { id:22, code:"EVG-DHV",   title:"Hành Hương Đức Mẹ Akita",                                                   dest:"Akita (Nhật Bản)",                             duration:"8 ngày 7 đêm", departure:"Liên hệ",                   price:"Liên hệ",      image:W+"2025/08/Tuong-Duc-Me-Akita.jpg",                                                                                                        cats:["all","nuoc-ngoai","hanh-huong","hanh-huong-cong-giao"], region:"Tour Nhật Bản" },
  { id:23, code:"EVG-DHV",   title:"Hành Hương Năm Thánh 2025: Đức – Thụy Sỹ – Ý – Vatican – Pháp (12N11Đ)",  dest:"Đức, Thụy Sỹ, Ý, Vatican, Pháp",             duration:"12 ngày 11 đêm",departure:"Liên hệ",                   price:"91.990.000 đ", image:W+"2025/08/Hang-da-Massabielle-2-1024x576.webp",                                                                                         cats:["all","nuoc-ngoai","hanh-huong","hanh-huong-cong-giao"], region:"Tour Châu Âu" },
  { id:24, code:"EVG-LTOUR", title:"Viếng Đức Mẹ Mekong – Campuchia",                                           dest:"Phnom Penh (Campuchia)",                       duration:"2 ngày 1 đêm", departure:"Thứ 3 & Thứ 7 hàng tuần", price:"2.550.000 đ",  image:W+"2025/08/Duc-Me-Mekong.jpg",                                                                                                           cats:["all","nuoc-ngoai","hanh-huong","hanh-huong-cong-giao"], region:"Tour Campuchia" },
  { id:25, code:"EVG-DHV",   title:"Hành Hương Năm Thánh 2025: Pháp – Tây Ban Nha – Bồ Đào Nha – Ý – Vatican (11N10Đ)", dest:"Pháp, Tây Ban Nha, Bồ Đào Nha, Ý, Vatican", duration:"11 ngày 10 đêm", departure:"Liên hệ", price:"Liên hệ", image:W+"2025/08/vatican-city-a-city-state-surrounded-by-rome-italy-is-the-headquarters-of-the-roman-catholic-church-desktop-hd-wallpaper-1024x683.jpg", cats:["all","nuoc-ngoai","hanh-huong","hanh-huong-cong-giao"], region:"Tour Châu Âu" },
  { id:26, code:"EVG-DHV",   title:"Hành Hương Năm Thánh 2025: Tour Pháp – Ý – Israel",                         dest:"Pháp, Ý, Israel",                              duration:"13 ngày 12 đêm",departure:"Liên hệ",                   price:"Liên hệ",      image:W+"2025/08/dai-lo-Champs-Elysees3-1024x580.jpg",                                                                                           cats:["all","nuoc-ngoai","hanh-huong","hanh-huong-cong-giao"], region:"Tour Châu Âu" },
  { id:27, code:"EVG-THT",   title:"Tour Hành Hương Phật Giáo Thái Lan",                                         dest:"Bangkok, Chiang Mai (Thái Lan)",              duration:"5 ngày 4 đêm", departure:"Liên hệ",                   price:"Liên hệ",      image:W+"2025/08/MA-TOUR-EVG-THT-HANH-HUONG-PHAT-GIAO-THAI-LAN-2-724x1024.jpg",                                                                  cats:["all","nuoc-ngoai","hanh-huong","hanh-huong-phat-giao"], region:"Tour Thái Lan" },
  { id:28, code:"EVG-LTOUR", title:"Viếng Vườn Chùa Puthkiri – Phnom Penh",                                      dest:"Phnom Penh (Campuchia)",                       duration:"2 ngày 1 đêm", departure:"Liên hệ",                   price:"2.950.000 đ",  image:W+"2025/06/Chua_Putkiri_1-1024x768.jpg",                                                                                                   cats:["all","nuoc-ngoai","hanh-huong","hanh-huong-phat-giao"], region:"Tour Campuchia" },
  { id:29, code:"EVG-HPT",   title:"Tour Tây Ninh 1 Ngày: Núi Bà Đen – Lễ Dâng Đăng – Chùa Gò Kén",           dest:"Núi Bà Đen, Tây Ninh",                        duration:"1 ngày",        departure:"Hàng tuần",                price:"1.150.000 đ",  image:W+"2025/08/Ba-Den-4-1024x683.jpg",                                                                                                          cats:["all","trong-nuoc","hanh-huong","hanh-huong-phat-giao"], region:"Tour Miền Nam" },
];

/* ── Constants ──────────────────────────────────────────────────────────────── */
const CAT_MAP: Record<string, string> = {
  "tour": "all", "tour-trong-nuoc": "trong-nuoc", "tour-nuoc-ngoai": "nuoc-ngoai",
  "tour-gio-chot": "gio-chot", "tour-hanh-huong": "hanh-huong",
  "tour-hanh-huong-cong-giao": "hanh-huong-cong-giao",
  "tour-hanh-huong-phat-giao": "hanh-huong-phat-giao",
};

const PAGE_TITLE: Record<string, { vi: string; en: string }> = {
  "tour":                       { vi: "Tất Cả Tour Du Lịch",          en: "All Tours" },
  "tour-trong-nuoc":            { vi: "Tour Du Lịch Trong Nước",       en: "Domestic Tours" },
  "tour-nuoc-ngoai":            { vi: "Tour Du Lịch Nước Ngoài",       en: "International Tours" },
  "tour-gio-chot":              { vi: "Tour Giờ Chót – Giá Tốt",       en: "Last Minute Deals" },
  "tour-hanh-huong":            { vi: "Tour Hành Hương",               en: "Pilgrimage Tours" },
  "tour-hanh-huong-cong-giao":  { vi: "Tour Hành Hương Công Giáo",     en: "Catholic Pilgrimage" },
  "tour-hanh-huong-phat-giao":  { vi: "Tour Hành Hương Phật Giáo",     en: "Buddhist Pilgrimage" },
};

const REGIONS = [
  "Tất cả khu vực", "Tour Châu Âu", "Tour Châu Úc", "Tour Châu Mỹ",
  "Tour trong nước", "Tour nước ngoài",
  "Tour Miền Bắc", "Tour Miền Trung", "Tour Tây Nguyên", "Tour Miền Nam",
  "Tour Ấn Độ", "Tour Thái Lan", "Tour Lào", "Tour Campuchia",
  "Tour Singapore", "Tour Singapore – Malaysia", "Tour Bali (Indonesia)",
  "Tour Hàn Quốc", "Tour Nhật Bản", "Tour Trung Quốc", "Tour Đài Loan",
];

const DEPARTURES = ["Tất cả", "Tp. Hồ Chí Minh", "Hà Nội"];

type SortOpt = "newest" | "price-asc" | "price-desc" | "name-az" | "name-za";

const parsePrice = (p: string) =>
  p === "Liên hệ" ? Infinity : parseInt(p.replace(/[^0-9]/g, "")) || 0;

function getPageRange(cur: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (cur <= 4) return [1, 2, 3, 4, 5, "...", total];
  if (cur >= total - 3) return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
  return [1, "...", cur - 1, cur, cur + 1, "...", total];
}

/* ── Tour Detail Modal ──────────────────────────────────────────────────────── */
function TourDetailModal({ tour, onClose, openForm }: { tour: Tour; onClose: () => void; openForm?: () => void }) {
  const isIntl     = tour.cats.includes("nuoc-ngoai");
  const isCatholic = tour.cats.includes("hanh-huong-cong-giao");
  const isBuddhist = tour.cats.includes("hanh-huong-phat-giao");
  const isContact  = tour.price === "Liên hệ";
  const vehicle    = isIntl ? "Máy bay + Xe du lịch" : "Xe du lịch cao cấp";

  const included = [
    ...(isIntl ? ["Vé máy bay khứ hồi (7kg xách tay + 20kg ký gửi)"] : []),
    "Xe đưa đón sân bay và di chuyển suốt tuyến",
    "Hướng dẫn viên song ngữ kinh nghiệm",
    isIntl ? "Khách sạn 3–5* theo lịch trình" : "Khách sạn tiêu chuẩn theo lịch trình",
    "Bữa ăn theo chương trình (sáng + trưa + tối)",
    "Vé tham quan các điểm trong chương trình",
    "Bảo hiểm du lịch toàn diện",
    "Nón du lịch EnViet Group",
  ];

  const notIncluded = [
    "Hộ chiếu và lệ phí gia hạn (nếu cần)",
    ...(isIntl ? ["Phí tip hướng dẫn viên và tài xế", "Hành lý quá cước"] : []),
    "Chi phí cá nhân: đồ uống, giặt ủi, mua sắm...",
    "Các dịch vụ phát sinh ngoài chương trình",
  ];

  return (
    <>
      <Motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/65 backdrop-blur-sm z-[80]"
        onClick={onClose}
      />
      <Motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="fixed inset-x-3 top-14 bottom-3 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[640px] md:max-h-[88vh] z-[90] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero image */}
        <div className="relative h-48 md:h-56 shrink-0 overflow-hidden">
          <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          {tour.code && (
            <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-black px-2.5 py-1 rounded-lg tracking-wide">
              {tour.code}
            </span>
          )}
          <span className="absolute bottom-3 right-3 bg-white/90 text-[#003B5C] text-[10px] font-bold px-2.5 py-1 rounded-lg">
            {tour.region}
          </span>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-5 py-4">
          <h2 className="text-lg font-black text-[#003B5C] leading-snug mb-4">{tour.title}</h2>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-2.5 mb-4">
            {[
              { label: "Thời Gian",      value: tour.duration,  icon: <Clock className="w-3.5 h-3.5 text-[#1e64ae]" /> },
              { label: "Khởi Hành",      value: tour.departure, icon: <Calendar className="w-3.5 h-3.5 text-[#00A651]" /> },
              { label: "Hành Trình",     value: tour.dest,      icon: <MapPin className="w-3.5 h-3.5 text-orange-500" /> },
              { label: "Phương Tiện",    value: vehicle,        icon: <Plane className="w-3.5 h-3.5 text-[#1e64ae]" /> },
            ].map(({ label, value, icon }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-3">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1">{label}</div>
                <div className="text-sm font-bold text-[#003B5C] flex items-start gap-1.5 leading-snug">
                  <span className="mt-0.5 shrink-0">{icon}</span>
                  <span className="line-clamp-2">{value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="bg-[#003B5C]/5 border border-[#1e64ae]/20 rounded-xl p-4 mb-4">
            <div className="text-[10px] font-black text-gray-500 uppercase tracking-wider mb-1">Giá chỉ từ</div>
            {isContact ? (
              <div className="text-[#1e64ae] font-black text-lg flex items-center gap-2">
                <Phone className="w-4 h-4" /> Liên hệ để nhận báo giá
              </div>
            ) : (
              <>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#00A651] font-black text-2xl">
                  {tour.price}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">/người lớn · Phụ thu phòng đơn theo yêu cầu</div>
              </>
            )}
          </div>

          {/* Included */}
          <div className="mb-4">
            <h3 className="font-black text-[#003B5C] text-[13px] mb-2.5 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#00A651] rounded-full" /> Tour Bao Gồm
            </h3>
            <div className="space-y-1.5">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-3.5 h-3.5 text-[#00A651] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not included */}
          <div>
            <h3 className="font-black text-[#003B5C] text-[13px] mb-2.5 flex items-center gap-2">
              <span className="w-1 h-4 bg-red-400 rounded-full" /> Tour Không Bao Gồm
            </h3>
            <div className="space-y-1.5">
              {notIncluded.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-500">
                  <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="shrink-0 border-t border-gray-100 bg-white px-5 py-3.5 flex gap-2.5">
          <button
            onClick={() => { onClose(); openForm?.(); }}
            className="flex-1 bg-gradient-to-r from-[#1e64ae] to-[#77c14d] text-white font-black py-3 rounded-xl text-sm hover:brightness-110 transition-all shadow-lg uppercase tracking-wide"
          >
            {isContact ? "Liên Hệ Ngay" : "Đặt Tour Ngay"}
          </button>
          <a
            href="tel:0964110000"
            className="flex items-center gap-2 border-2 border-[#1e64ae] text-[#1e64ae] font-black px-4 py-3 rounded-xl text-sm hover:bg-[#1e64ae] hover:text-white transition-all whitespace-nowrap"
          >
            <Phone className="w-4 h-4" /> 0964.110.000
          </a>
        </div>
      </Motion.div>
    </>
  );
}

/* ── Pagination ─────────────────────────────────────────────────────────────── */
function Pagination({ current, total, onChange }: { current: number; total: number; onChange: (n: number) => void }) {
  if (total <= 1) return null;
  const pages = getPageRange(current, total);
  return (
    <div className="mt-8 flex justify-center items-center gap-1.5">
      <button
        onClick={() => onChange(current - 1)} disabled={current === 1}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`d${i}`} className="w-9 h-9 flex items-center justify-center text-gray-400 text-sm font-bold">…</span>
        ) : (
          <button
            key={p} onClick={() => onChange(p as number)}
            className={`w-9 h-9 flex items-center justify-center rounded-lg font-bold text-sm transition-colors ${
              p === current ? "bg-[#1e64ae] text-white shadow-md" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {p}
          </button>
        )
      )}
      <button
        onClick={() => onChange(current + 1)} disabled={current === total}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

/* ── TourPage ────────────────────────────────────────────────────────────────── */
export function TourPage({ category = "tour", openForm }: { category?: string; openForm?: () => void }) {
  const { lang } = useLang();
  const [searchText, setSearchText]           = useState("");
  const [filterRegion, setFilterRegion]       = useState("Tất cả khu vực");
  const [filterDep, setFilterDep]             = useState("Tất cả");
  const [filterPrices, setFilterPrices]       = useState<string[]>([]);
  const [sortBy, setSortBy]                   = useState<SortOpt>("newest");
  const [currentPage, setCurrentPage]         = useState(1);
  const [selectedTour, setSelectedTour]       = useState<Tour | null>(null);

  const resultsRef = useRef<HTMLDivElement>(null);
  const catKey = CAT_MAP[category] ?? "all";
  const pageTitle = PAGE_TITLE[category] ?? PAGE_TITLE["tour"];
  const isGioChot = category === "tour-gio-chot";

  // Reset page when any filter changes
  useEffect(() => { setCurrentPage(1); }, [catKey, filterRegion, filterDep, filterPrices, searchText, sortBy]);

  const togglePrice = (range: string) =>
    setFilterPrices((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );

  // Filtering
  let filtered = tourData.filter((t) => t.cats.includes(catKey));
  if (filterRegion !== "Tất cả khu vực") {
    filtered = filtered.filter((t) => t.region === filterRegion);
  }
  if (filterDep === "Tp. Hồ Chí Minh") {
    // All tours depart from HCM — no additional filter needed
  }
  if (filterDep === "Hà Nội") {
    // Hanoi mainly serves international routes + northern domestic tours
    filtered = filtered.filter((t) =>
      t.cats.includes("nuoc-ngoai") || t.region === "Tour Miền Bắc"
    );
  }
  if (filterPrices.length > 0) {
    filtered = filtered.filter((t) => {
      const p = parsePrice(t.price);
      if (p === Infinity) return false;
      return filterPrices.some((range) => {
        if (range === "Dưới 5 triệu")  return p < 5_000_000;
        if (range === "5 – 15 triệu")  return p >= 5_000_000 && p <= 15_000_000;
        if (range === "15 – 30 triệu") return p >= 15_000_000 && p <= 30_000_000;
        if (range === "Trên 30 triệu") return p > 30_000_000;
        return false;
      });
    });
  }
  if (searchText.trim()) {
    const q = searchText.toLowerCase();
    filtered = filtered.filter(
      (t) => t.title.toLowerCase().includes(q) || t.dest.toLowerCase().includes(q) || t.region.toLowerCase().includes(q)
    );
  }

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc")  return parsePrice(a.price) - parsePrice(b.price);
    if (sortBy === "price-desc") return parsePrice(b.price) - parsePrice(a.price);
    if (sortBy === "name-az")    return a.title.localeCompare(b.title, "vi");
    if (sortBy === "name-za")    return b.title.localeCompare(a.title, "vi");
    return b.id - a.id;
  });

  // Pagination
  const totalPages  = Math.ceil(sorted.length / PER_PAGE);
  const paginated   = sorted.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);
  const resultStart = sorted.length === 0 ? 0 : (currentPage - 1) * PER_PAGE + 1;
  const resultEnd   = Math.min(currentPage * PER_PAGE, sorted.length);

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clearFilters = () => {
    setFilterRegion("Tất cả khu vực");
    setFilterDep("Tất cả");
    setFilterPrices([]);
    setSearchText("");
    setSortBy("newest");
    setCurrentPage(1);
  };

  return (
    <div className="pb-24 min-h-screen bg-[#f7f9fc]">

      {/* ── Header ── */}
      <div className="bg-gradient-to-br from-[#003B5C] to-[#1e64ae] py-10 px-4 mb-8">
        <div className="max-w-7xl mx-auto text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight"
          >
            {t(lang, pageTitle.vi, pageTitle.en)}
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }}
            className="text-blue-200 text-sm max-w-lg mx-auto"
          >
            {t(lang, "Dịch vụ trọn gói · Hướng dẫn viên chuyên nghiệp · Giá tốt nhất", "All-inclusive · Expert guides · Best price guaranteed")}
          </Motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* ── Tour Giờ Chót ── */}
        {isGioChot ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-5">
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-2xl font-black text-[#003B5C] mb-2">Tour Giờ Chót Cập Nhật Liên Tục</h2>
            <p className="text-gray-500 max-w-sm mx-auto mb-7 text-sm">
              Các tour giờ chót với giá ưu đãi đặc biệt được cập nhật thường xuyên. Liên hệ ngay để nhận danh sách mới nhất!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={openForm}
                className="bg-gradient-to-r from-[#1e64ae] to-[#77c14d] text-white font-black px-7 py-3 rounded-xl shadow-lg hover:brightness-110 transition-all text-sm"
              >
                Đăng Ký Nhận Thông Tin
              </button>
              <a
                href="tel:0964110000"
                className="flex items-center justify-center gap-2 border-2 border-[#1e64ae] text-[#1e64ae] font-black px-7 py-3 rounded-xl hover:bg-[#1e64ae] hover:text-white transition-all text-sm"
              >
                <Phone className="w-4 h-4" /> 0964.110.000
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 items-start">

            {/* ── Sidebar ── */}
            <Motion.aside
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
              className="w-full lg:w-[240px] shrink-0 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 sticky top-28 self-start"
            >
              <h3 className="font-extrabold text-sm text-[#003B5C] mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#00A651] rounded-full" />
                {t(lang, "Tìm Kiếm Tour", "Filter Tours")}
              </h3>

              {/* Text search */}
              <div className="mb-4">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider block mb-1.5">
                  {t(lang, "Từ Khoá", "Keyword")}
                </label>
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}
                    placeholder={t(lang, "Tên tour, điểm đến...", "Name, destination...")}
                    className="w-full pl-3 pr-9 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#003B5C] font-medium focus:outline-none focus:ring-2 focus:ring-[#1e64ae]/20 focus:border-[#1e64ae]"
                  />
                  <button
                    type="submit"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1e64ae] transition-colors"
                  >
                    <Search className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              {/* Departure city */}
              <div className="mb-4 pb-4 border-b border-gray-100">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider block mb-2">
                  {t(lang, "Điểm Khởi Hành", "From")}
                </label>
                <div className="space-y-1.5">
                  {DEPARTURES.map((d) => {
                    const active = filterDep === d;
                    return (
                      <label
                        key={d}
                        className={`flex items-center gap-2 cursor-pointer rounded-lg px-2 py-1.5 transition-colors ${
                          active ? "bg-[#1e64ae]/8 text-[#1e64ae]" : "hover:bg-gray-50 text-gray-600"
                        }`}
                      >
                        <input type="radio" name="dep" value={d} checked={active} onChange={() => setFilterDep(d)} className="w-3.5 h-3.5 accent-[#1e64ae] shrink-0" />
                        <span className={`text-sm font-medium ${active ? "font-bold text-[#1e64ae]" : ""}`}>{d}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Region */}
              <div className="mb-4 pb-4 border-b border-gray-100">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider block mb-1.5">
                  {t(lang, "Địa Điểm Du Lịch", "Region")}
                </label>
                <div className="relative">
                  <Globe className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#00A651]" />
                  <select
                    value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)}
                    className="w-full pl-8 pr-7 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#003B5C] font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#1e64ae]/20 focus:border-[#1e64ae] cursor-pointer"
                  >
                    {REGIONS.map((r) => <option key={r}>{r}</option>)}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Price range */}
              <div className="mb-5 pb-4 border-b border-gray-100">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider block mb-2">
                  {t(lang, "Khoảng Giá", "Price Range")}
                </label>
                <div className="space-y-1.5">
                  {["Dưới 5 triệu", "5 – 15 triệu", "15 – 30 triệu", "Trên 30 triệu"].map((r) => {
                    const checked = filterPrices.includes(r);
                    return (
                      <label
                        key={r}
                        className={`flex items-center gap-2 cursor-pointer rounded-lg px-2 py-1.5 transition-colors ${
                          checked ? "bg-[#1e64ae]/8 text-[#1e64ae]" : "hover:bg-gray-50 text-gray-600"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => togglePrice(r)}
                          className="w-3.5 h-3.5 accent-[#1e64ae] shrink-0"
                        />
                        <span className={`text-sm font-medium ${checked ? "font-bold text-[#1e64ae]" : ""}`}>{r}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Clear filters */}
              {(() => {
                const hasFilter =
                  filterRegion !== "Tất cả khu vực" ||
                  filterDep !== "Tất cả" ||
                  filterPrices.length > 0 ||
                  searchText.trim() !== "";
                return (
                  <button
                    onClick={clearFilters}
                    className={`w-full font-bold py-2.5 rounded-lg text-sm transition-all ${
                      hasFilter
                        ? "bg-red-50 hover:bg-red-100 text-red-500 border border-red-200"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-500"
                    }`}
                  >
                    Xóa Bộ Lọc{hasFilter ? ` (${[
                      filterRegion !== "Tất cả khu vực" ? 1 : 0,
                      filterDep !== "Tất cả" ? 1 : 0,
                      filterPrices.length,
                      searchText.trim() ? 1 : 0,
                    ].reduce((a, b) => a + b, 0)})` : ""}
                  </button>
                );
              })()}
            </Motion.aside>

            {/* ── Main ── */}
            <div ref={resultsRef} className="flex-1 min-w-0">
              {/* Sort bar */}
              <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                <span className="text-gray-500 text-sm">
                  {sorted.length === 0 ? (
                    <span>{t(lang, "Không tìm thấy kết quả", "No results found")}</span>
                  ) : (
                    <>
                      {t(lang, "Hiển thị", "Showing")} <strong className="text-[#003B5C]">{resultStart}–{resultEnd}</strong> {t(lang, "trong tổng số", "of")} <strong className="text-[#003B5C]">{sorted.length}</strong> {t(lang, "tour", "tours")}
                    </>
                  )}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-semibold hidden sm:block">Sắp xếp:</span>
                  <select
                    value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOpt)}
                    className="bg-white border border-gray-200 text-[#003B5C] text-sm rounded-lg px-3 py-1.5 font-semibold outline-none focus:border-[#1e64ae] cursor-pointer"
                  >
                    <option value="newest">Mới nhất</option>
                    <option value="price-asc">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                    <option value="name-az">Tên: A – Z</option>
                    <option value="name-za">Tên: Z – A</option>
                  </select>
                </div>
              </div>

              {/* Empty state */}
              {sorted.length === 0 && (
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                  <Globe className="w-12 h-12 mx-auto mb-4 text-gray-200" />
                  <p className="font-bold text-gray-400 mb-3">Không tìm thấy tour phù hợp</p>
                  <button onClick={clearFilters} className="text-[#1e64ae] font-bold text-sm underline">Xóa bộ lọc</button>
                </div>
              )}

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paginated.map((tour, idx) => {
                  const isContact = tour.price === "Liên hệ";
                  return (
                    <Motion.div
                      key={tour.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(idx, 7) * 0.06 }}
                      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={tour.image} alt={tour.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        {tour.code && (
                          <span className="absolute top-2.5 left-2.5 bg-black/55 backdrop-blur-sm text-white text-[10px] font-black px-2 py-0.5 rounded-md">
                            {tour.code}
                          </span>
                        )}
                        <span className="absolute top-2.5 right-2.5 bg-white/90 text-[#003B5C] text-[10px] font-bold px-2 py-0.5 rounded-md">
                          {tour.region}
                        </span>
                      </div>

                      {/* Card body */}
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="font-extrabold text-[#003B5C] text-[14px] leading-snug mb-3 line-clamp-2 group-hover:text-[#1e64ae] transition-colors min-h-[2.5rem]">
                          {tour.title}
                        </h3>

                        {/* Info list */}
                        <ul className="space-y-1.5 text-xs text-gray-600 mb-3">
                          {tour.code && (
                            <li className="flex items-center gap-2">
                              <Tag className="w-3 h-3 text-[#1e64ae] shrink-0" />
                              <span><strong>Mã tour:</strong> {tour.code}</span>
                            </li>
                          )}
                          <li className="flex items-start gap-2">
                            <MapPin className="w-3 h-3 text-orange-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1"><strong>Hành trình:</strong> {tour.dest}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Clock className="w-3 h-3 text-[#00A651] shrink-0" />
                            <span><strong>Thời gian:</strong> {tour.duration}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-[#1e64ae] shrink-0" />
                            <span className="truncate"><strong>Ngày KH:</strong> {tour.departure}</span>
                          </li>
                        </ul>

                        {/* Price + buttons */}
                        <div className="mt-auto flex items-end justify-between pt-3 border-t border-gray-100">
                          <div>
                            {isContact ? (
                              <div className="text-[#1e64ae] font-black text-sm flex items-center gap-1">
                                <Phone className="w-3.5 h-3.5" /> Liên hệ
                              </div>
                            ) : (
                              <>
                                <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Giá từ</div>
                                <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#00A651] font-black text-lg leading-none">
                                  {tour.price}
                                </div>
                              </>
                            )}
                          </div>
                          <button
                            onClick={() => setSelectedTour(tour)}
                            className="flex items-center gap-1.5 bg-[#1e64ae] hover:bg-[#1a55a0] text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors"
                          >
                            Xem chi tiết <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </Motion.div>
                  );
                })}
              </div>

              {/* Pagination */}
              <Pagination current={currentPage} total={totalPages} onChange={(n) => { setCurrentPage(n); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
            </div>
          </div>
        )}
      </div>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {selectedTour && (
          <TourDetailModal
            tour={selectedTour}
            onClose={() => setSelectedTour(null)}
            openForm={openForm}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
