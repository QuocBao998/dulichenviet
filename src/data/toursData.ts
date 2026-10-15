import imgTourHarbin from "@/assets/images/tour-harbin.jpg";
import imgTour11 from "@/assets/images/tour-11-tham-quyen-quang-chau.jpg";
import imgTour12 from "@/assets/images/tour-12-phuket-phi-phi.jpg";
import imgTour13 from "@/assets/images/tour-13-malaysia-singapore.jpg";
import imgTour14 from "@/assets/images/tour-14-hongkong-chu-hai.jpg";
import imgTour15 from "@/assets/images/tour-15-tho-nhi-ky.jpg";
import imgTour16 from "@/assets/images/tour-16-le-giang-shangrila.jpg";
import imgTour17 from "@/assets/images/tour-17-le-giang-dai-ly.jpg";
import imgTour18 from "@/assets/images/tour-18-singapore.jpg";
import imgTour19 from "@/assets/images/tour-19-nhat-ban-mua-dong.jpg";
import imgTour20 from "@/assets/images/tour-20-nhat-ban-mua-thu.jpg";
import imgTour21 from "@/assets/images/tour-21-phuong-hoang-co-tran.jpg";
import imgTour22 from "@/assets/images/tour-22-tay-au.jpg";

export interface TourItem {
  id: string;
  code: string;
  title: string;
  itinerary: string;
  duration: string;
  durationDays: number;
  airline: string;
  price: number | null;
  priceFormatted: string;
  highlights: string[];
  country: string;
  region: string;
  category: "nuoc-ngoai" | "trong-nuoc";
  cats: string[];
  badge?: string;
  image: string;
  departure: string;
  isFeatured?: boolean;
}

/**
 * Fallback image helper:
 * Returns the project asset image if valid, otherwise falls back to placeholder https://placehold.co/600x400
 */
export function getTourImage(assetImg?: string, placeholder = "https://placehold.co/600x400"): string {
  if (assetImg && typeof assetImg === "string" && assetImg.trim().length > 0) {
    return assetImg;
  }
  return placeholder;
}

// 13 Exclusive International Tours matching provided JSON dataset
export const TOUR_NGOAI_NUOC_DATASET: TourItem[] = [
  {
    id: "tour-01-harbin",
    code: "EVG-TQ01",
    title: "Xứ Sở Băng Tuyết Cáp Nhĩ Tân - Làng Tuyết Hương",
    itinerary: "Cáp Nhĩ Tân - Làng Tuyết Hương",
    duration: "6 Ngày 5 Đêm (No Shopping)",
    durationDays: 6,
    airline: "Vietnam Airlines",
    price: 28990000,
    priceFormatted: "28.990.000 đ",
    highlights: [
      "Lưu trú tại Làng Tuyết Hương",
      "Tàu điện văn hóa tuyến 54",
      "Nhà thờ Thánh Sophia"
    ],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "trung-quoc"],
    badge: "Băng Tuyết",
    image: getTourImage(imgTourHarbin, "https://images.unsplash.com/photo-1542833278-f027813a30c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
    departure: "Mùa Đông",
    isFeatured: true
  },
  {
    id: "tour-11",
    code: "EVG-TQ11",
    title: "Khám Phá Đô Thị Hiện Đại Trung Quốc (Thâm Quyến - Quảng Châu)",
    itinerary: "Thâm Quyến - Quảng Châu",
    duration: "5 Ngày 4 Đêm",
    durationDays: 5,
    airline: "Hàng không",
    price: null,
    priceFormatted: "Liên hệ",
    highlights: [
      "Hầm vượt biển Thẩm Trung",
      "Drone giao hàng & xe không người lái",
      "Tháp truyền hình Quảng Châu",
      "Trung Hoa Cẩm Tú"
    ],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "trung-quoc"],
    badge: "Công Nghệ",
    image: getTourImage(imgTour11),
    departure: "Hàng tuần",
    isFeatured: true
  },
  {
    id: "tour-12",
    code: "EVG-TL12",
    title: "Khám Phá Phuket – Phi Phi",
    itinerary: "Phuket - Đảo Phi Phi",
    duration: "4 Ngày 3 Đêm",
    durationDays: 4,
    airline: "Vietnam Airlines",
    price: 11690000,
    priceFormatted: "11.690.000 đ",
    highlights: [
      "Laem Promthep View Point",
      "Patong Waking Street",
      "Đảo Phi Phi",
      "Đền Chalong"
    ],
    country: "Thái Lan",
    region: "Tour Thái Lan",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "thai-lan"],
    badge: "Giá Tốt",
    image: getTourImage(imgTour12),
    departure: "Thứ 5 & Chủ Nhật",
    isFeatured: true
  },
  {
    id: "tour-13",
    code: "EVG-MY13",
    title: "Du Lịch Malaysia – Singapore",
    itinerary: "Singapore - Malacca - Kuala Lumpur - Genting",
    duration: "5 Ngày 4 Đêm",
    durationDays: 5,
    airline: "VietJet Air",
    price: 11590000,
    priceFormatted: "11.590.000 đ",
    highlights: [
      "Gardens by the Bay",
      "Thành phố cổ Malacca",
      "Tháp đôi Petronas",
      "Cao nguyên Genting"
    ],
    country: "Malaysia - Singapore",
    region: "Tour Singapore – Malaysia",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "dong-nam-a"],
    badge: "Bán Chạy",
    image: getTourImage(imgTour13),
    departure: "Thứ 4 & Thứ 7",
    isFeatured: true
  },
  {
    id: "tour-14",
    code: "EVG-HK14",
    title: "Hong Kong – Chu Hải – Thâm Quyến – Quảng Châu",
    itinerary: "Hong Kong - Chu Hải - Thâm Quyến - Quảng Châu",
    duration: "5 Ngày 4 Đêm",
    durationDays: 5,
    airline: "Vietnam Airlines",
    price: 18990000,
    priceFormatted: "18.990.000 đ",
    highlights: [
      "Vòng đu quay khổng lồ Hong Kong",
      "Cầu vượt biển HongKong – Chu Hải – Macau",
      "Đại Lộ Ngôi Sao",
      "Tượng Nữ Thần Cá"
    ],
    country: "Hong Kong - Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "trung-quoc"],
    badge: "Hot",
    image: getTourImage(imgTour14),
    departure: "Hàng tuần",
    isFeatured: true
  },
  {
    id: "tour-15",
    code: "EVG-TK15",
    title: "Hành Trình Vàng Đến Thổ Nhĩ Kỳ: Istanbul - Cappadocia",
    itinerary: "Istanbul - Bursa - Kusadasi - Pamukkale - Konya - Cappadocia",
    duration: "8 Ngày 7 Đêm",
    durationDays: 8,
    airline: "Turkish Airlines",
    price: 48800000,
    priceFormatted: "48.800.000 đ",
    highlights: [
      "Trải nghiệm khinh khí cầu Cappadocia",
      "Lâu đài bông Pamukkale",
      "Thánh đường Blue Mosque"
    ],
    country: "Thổ Nhĩ Kỳ",
    region: "Tour Trung Đông - Thổ Nhĩ Kỳ",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "tho-nhi-ky"],
    badge: "Hành Trình Vàng",
    image: getTourImage(imgTour15, "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
    departure: "Hàng tháng",
    isFeatured: true
  },
  {
    id: "tour-16",
    code: "EVG-LG16",
    title: "Hành Trình Di Sản Vân Nam: Lệ Giang - Shangrila",
    itinerary: "Lệ Giang - Shangrila",
    duration: "5 Ngày 4 Đêm",
    durationDays: 5,
    airline: "Ruili Airlines",
    price: 19490000,
    priceFormatted: "19.490.000 đ",
    highlights: [
      "Thành Cổ Lệ Giang ngàn năm",
      "Núi Tuyết Ngọc Long hùng vĩ",
      "Đền Songzanlin (Tùng Tán Lâm)"
    ],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "trung-quoc"],
    badge: "Di Sản",
    image: getTourImage(imgTour16, "https://images.unsplash.com/photo-1582650517303-b42616d56f04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
    departure: "Thứ 3 & Thứ 7",
    isFeatured: true
  },
  {
    id: "tour-17",
    code: "EVG-DL17",
    title: "Lệ Giang – Đại Lý – Shangrila",
    itinerary: "Lệ Giang - Đại Lý - Shangrila",
    duration: "6 Ngày 5 Đêm",
    durationDays: 6,
    airline: "Ruili Airlines",
    price: 19490000,
    priceFormatted: "19.490.000 đ",
    highlights: [
      "Núi Tuyết Ngọc Long hùng vĩ",
      "Lam Nguyệt Cốc - Bạch Thủy Hà",
      "Thành cổ Đại Lý",
      "Hồ Nhĩ Hải thơ mộng"
    ],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "trung-quoc"],
    badge: "Đặc Sắc",
    image: getTourImage(imgTour17),
    departure: "Thứ 4 & Thứ 6",
    isFeatured: true
  },
  {
    id: "tour-18",
    code: "EVG-SG18",
    title: "Khám Phá Singapore",
    itinerary: "Singapore",
    duration: "3 Ngày 2 Đêm",
    durationDays: 3,
    airline: "Vietjet Air",
    price: 11290000,
    priceFormatted: "11.290.000 đ",
    highlights: [
      "Phố nghệ thuật Haji Lane",
      "Công viên sư tử biển Merlion Park",
      "Thác nước Jewel Changi",
      "Khu giải trí Resort World"
    ],
    country: "Singapore",
    region: "Tour Singapore",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "dong-nam-a"],
    badge: "Giá Tốt",
    image: getTourImage(imgTour18),
    departure: "Thứ 6 hàng tuần",
    isFeatured: true
  },
  {
    id: "tour-19",
    code: "EVG-NB19",
    title: "Nhật Bản Cung Đường Vàng (Mùa Đông)",
    itinerary: "Tokyo - Núi Phú Sĩ - Nagoya - Kyoto - Osaka",
    duration: "6 Ngày 5 Đêm",
    durationDays: 6,
    airline: "Vietnam Airlines",
    price: 37888000,
    priceFormatted: "37.888.000 đ",
    highlights: [
      "Trải nghiệm trượt tuyết Fujiten",
      "Lễ hội ánh sáng Nabana no Sato",
      "Chùa Asakusa Kannon cổ kính",
      "Lâu đài Osaka uy nghiêm"
    ],
    country: "Nhật Bản",
    region: "Tour Nhật Bản",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "nhat-ban"],
    badge: "Mùa Đông",
    image: getTourImage(imgTour19),
    departure: "Mùa Đông",
    isFeatured: true
  },
  {
    id: "tour-20",
    code: "EVG-NB20",
    title: "Đón Thu Cung Đường Vàng Nhật Bản",
    itinerary: "Tokyo - Phú Sĩ - Kyoto - Osaka",
    duration: "6 Ngày 5 Đêm",
    durationDays: 6,
    airline: "Vietjet Air",
    price: 32888000,
    priceFormatted: "32.888.000 đ",
    highlights: [
      "Làng cổ tích Shirakawa-go",
      "Con đường lá đỏ trạm 5 Núi Phú Sĩ",
      "Tắm khoáng nóng Onsen truyền thống"
    ],
    country: "Nhật Bản",
    region: "Tour Nhật Bản",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "nhat-ban"],
    badge: "Mùa Thu",
    image: getTourImage(imgTour20, "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
    departure: "Mùa Thu Lá Đỏ",
    isFeatured: true
  },
  {
    id: "tour-21",
    code: "EVG-PH21",
    title: "Phượng Hoàng Cổ Trấn - Trương Gia Giới",
    itinerary: "Trương Gia Giới - Phượng Hoàng Cổ Trấn",
    duration: "5 Ngày 4 Đêm",
    durationDays: 5,
    airline: "Vietjet Air",
    price: 16990000,
    priceFormatted: "16.990.000 đ",
    highlights: [
      "Phượng Hoàng Cổ Trấn huyền ảo",
      "Thiên Môn Sơn & Hành Lang Kính",
      "Tháp 72 tầng Kỳ Lâu rực rỡ",
      "Mặc Nhung Miêu Trại"
    ],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "trung-quoc"],
    badge: "Trend",
    image: getTourImage(imgTour21),
    departure: "Thứ 3 & Thứ 7",
    isFeatured: true
  },
  {
    id: "tour-22",
    code: "EVG-EU22",
    title: "Hành Trình Tây Âu: Pháp - Thụy Sỹ - Ý - Vatican",
    itinerary: "Pháp - Thụy Sỹ - Ý - Vatican",
    duration: "10 Ngày 9 Đêm",
    durationDays: 10,
    airline: "Turkish Airlines",
    price: 75900000,
    priceFormatted: "75.900.000 đ",
    highlights: [
      "Du thuyền sông Seine ngắm Paris",
      "Làng cổ Colmar & Hồ Brienz",
      "Trải nghiệm tàu hỏa ngắm dãy Alps",
      "Khám phá Venice & Đấu trường Colosseum"
    ],
    country: "Tây Âu",
    region: "Tour Châu Âu",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "chau-au"],
    badge: "Độc Bản",
    image: getTourImage(imgTour22),
    departure: "Hàng tháng",
    isFeatured: true
  }
];

// Unified dataset structure matching requested schema
export const TOUR_DATASET = {
  Tour_Trong_Nuoc: [] as TourItem[],
  Tour_Ngoai_Nuoc: TOUR_NGOAI_NUOC_DATASET
};

// ALL_TOURS contains only the verified dataset tours (no legacy foreign tours)
export const ALL_TOURS: TourItem[] = [...TOUR_NGOAI_NUOC_DATASET];

// Filter definitions for subpages
export const COUNTRIES = [
  "Tất cả quốc gia",
  "Trung Quốc",
  "Thái Lan",
  "Malaysia - Singapore",
  "Singapore",
  "Thổ Nhĩ Kỳ",
  "Nhật Bản",
  "Tây Âu"
];

export const PRICE_RANGES = [
  { id: "all", label: "Tất cả mức giá", en: "All prices", min: 0, max: Infinity },
  { id: "under-5m", label: "Dưới 5 triệu", en: "Under 5M", min: 0, max: 5000000 },
  { id: "5m-15m", label: "5 – 15 triệu", en: "5M – 15M", min: 5000000, max: 15000000 },
  { id: "15m-25m", label: "15 – 25 triệu", en: "15M – 25M", min: 15000000, max: 25000000 },
  { id: "25m-45m", label: "25 – 45 triệu", en: "25M – 45M", min: 25000000, max: 45000000 },
  { id: "over-45m", label: "Trên 45 triệu", en: "Over 45M", min: 45000000, max: Infinity },
  { id: "contact", label: "Giá Liên Hệ", en: "Price on request", min: -1, max: -1 }
];

export const DURATION_FILTERS = [
  { id: "all", label: "Tất cả thời lượng", en: "All durations", minDays: 0, maxDays: Infinity },
  { id: "short", label: "Ngắn ngày (1 – 3 ngày)", en: "Short (1-3 days)", minDays: 1, maxDays: 3 },
  { id: "medium", label: "Trung bình (4 – 6 ngày)", en: "Medium (4-6 days)", minDays: 4, maxDays: 6 },
  { id: "long", label: "Dài ngày (từ 7 ngày trở lên)", en: "Long (7+ days)", minDays: 7, maxDays: Infinity }
];
