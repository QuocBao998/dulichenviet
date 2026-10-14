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

// 12 Original Primary Dataset Tours
export const PRIMARY_TOUR_DATASET: TourItem[] = [
  {
    id: "tour-11",
    code: "EVG-TQ01",
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
    cats: ["all", "nuoc-ngoai"],
    badge: "Công Nghệ",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
    departure: "Hàng tuần",
    isFeatured: true
  },
  {
    id: "tour-12",
    code: "EVG-TL01",
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
    cats: ["all", "nuoc-ngoai"],
    badge: "Giá Tốt",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1000&q=80",
    departure: "Thứ 5 & Chủ Nhật",
    isFeatured: true
  },
  {
    id: "tour-13",
    code: "EVG-MYSG",
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
    cats: ["all", "nuoc-ngoai"],
    badge: "Bán Chạy",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1000&q=80",
    departure: "Thứ 4 & Thứ 7",
    isFeatured: true
  },
  {
    id: "tour-14",
    code: "EVG-HK01",
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
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Siêu Phẩm",
    image: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?w=1000&q=80",
    departure: "Thứ 3 hàng tuần",
    isFeatured: true
  },
  {
    id: "tour-15",
    code: "EVG-TNK01",
    title: "Hành Trình Vàng Thổ Nhĩ Kỳ",
    itinerary: "Istanbul - Bursa - Kusadasi - Pamukkale - Konya - Cappadocia",
    duration: "8 Ngày 7 Đêm",
    durationDays: 8,
    airline: "Turkish Airlines",
    price: 48800000,
    priceFormatted: "48.800.000 đ",
    highlights: [
      "Làng Cumalikizik cổ kính",
      "Lâu đài bông Pamukkale",
      "Khinh khí cầu Cappadocia",
      "Du thuyền eo biển Bosphorus"
    ],
    country: "Thổ Nhĩ Kỳ",
    region: "Tour nước ngoài",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Mới",
    image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1000&q=80",
    departure: "Định kỳ hàng tháng",
    isFeatured: true
  },
  {
    id: "tour-16",
    code: "EVG-VN01",
    title: "Hành Trình Di Sản Vân Nam (Lệ Giang - Shangrila)",
    itinerary: "Lệ Giang - Shangrila",
    duration: "5 Ngày 4 Đêm",
    durationDays: 5,
    airline: "Ruili Airlines",
    price: 19490000,
    priceFormatted: "19.490.000 đ",
    highlights: [
      "Chinh phục Núi Tuyết Ngọc Long",
      "Khe Hổ Nhảy",
      "Đền Songzanlin",
      "Thành cổ Lệ Giang"
    ],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Hot Trend",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1000&q=80",
    departure: "Thứ 3 & Thứ 6",
    isFeatured: true
  },
  {
    id: "tour-17",
    code: "EVG-VN02",
    title: "Hành Trình Di Sản Vân Nam (Lệ Giang - Đại Lý - Shangrila)",
    itinerary: "Lệ Giang - Đại Lý - Shangrila",
    duration: "6 Ngày 5 Đêm",
    durationDays: 6,
    airline: "Ruili Airlines",
    price: 21490000,
    priceFormatted: "21.490.000 đ",
    highlights: [
      "Hỷ Châu cổ trấn",
      "Tam tháp Đại Lý",
      "Thành cổ Độc Khắc Tông",
      "Núi Tuyết Ngọc Long"
    ],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Đặc Sắc",
    image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=1000&q=80",
    departure: "Thứ 4 hàng tuần",
    isFeatured: true
  },
  {
    id: "tour-18",
    code: "EVG-SG01",
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
    cats: ["all", "nuoc-ngoai"],
    badge: "Giá Tốt",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1000&q=80",
    departure: "Thứ 6 hàng tuần",
    isFeatured: true
  },
  {
    id: "tour-19",
    code: "EVG-NB01",
    title: "Khám Phá Nhật Bản – Mùa Hoa Tử Đằng Tuyệt Đẹp",
    itinerary: "Tokyo - Núi Phú Sĩ - Kyoto - Osaka",
    duration: "6 Ngày 5 Đêm",
    durationDays: 6,
    airline: "Vietjet Air",
    price: 45888000,
    priceFormatted: "45.888.000 đ",
    highlights: [
      "Vườn hoa tử đằng Ashikaga",
      "Trải nghiệm tắm Onsen truyền thống",
      "Làng cổ Oshino Hakkai",
      "Chinh phục Núi Phú Sĩ"
    ],
    country: "Nhật Bản",
    region: "Tour Nhật Bản",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1000&q=80",
    departure: "Tháng 4, Tháng 5",
    isFeatured: true
  },
  {
    id: "tour-20",
    code: "EVG-NB02",
    title: "Nhật Bản Cung Đường Vàng (Mùa Thu)",
    itinerary: "Tokyo - Phú Sĩ - Nagoya - Kyoto - Osaka",
    duration: "6 Ngày 5 Đêm",
    durationDays: 6,
    airline: "Vietjet Air",
    price: 32888000,
    priceFormatted: "32.888.000 đ",
    highlights: [
      "Làng cổ tích Shirakawa-go",
      "Phố cổ Takayama",
      "Đón thu tại Meiji Jingu Gaien Mae",
      "Công viên nai Nara Park"
    ],
    country: "Nhật Bản",
    region: "Tour Nhật Bản",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Mùa Thu",
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1000&q=80",
    departure: "Mùa Thu Lá Đỏ",
    isFeatured: true
  },
  {
    id: "tour-21",
    code: "EVG-PHCT",
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
    cats: ["all", "nuoc-ngoai"],
    badge: "Trend",
    image: "https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?w=1000&q=80",
    departure: "Thứ 3 & Thứ 7",
    isFeatured: true
  },
  {
    id: "tour-22",
    code: "EVG-EU01",
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
    cats: ["all", "nuoc-ngoai"],
    badge: "Độc Bản",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&q=80",
    departure: "Hàng tháng",
    isFeatured: true
  }
];

// Rich Tour Catalog generator reflecting dulichenviet.vn/tour/
const RAW_ADDITIONAL_TOURS: Omit<TourItem, "id" | "code">[] = [
  // Domestic
  {
    title: "Săn Mây Trùng Điệp Đà Lạt – Langbiang",
    itinerary: "Đà Lạt - Langbiang - Que Garden",
    duration: "3 Ngày 2 Đêm",
    durationDays: 3,
    airline: "Xe du lịch VIP",
    price: 2790000,
    priceFormatted: "2.790.000 đ",
    highlights: ["Săn mây Cầu Đất", "Chinh phục đỉnh Langbiang", "Que Garden phong cách Nhật", "Chợ đêm Đà Lạt"],
    country: "Việt Nam",
    region: "Tour Tây Nguyên",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc"],
    badge: "Nội Địa",
    image: "https://images.unsplash.com/photo-1688952397229-d4260e2630ba?w=800&q=80",
    departure: "Thứ 6 hàng tuần",
    isFeatured: true
  },
  {
    title: "Bangkok – Pattaya Thiên Đường Mua Sắm 2026",
    itinerary: "Bangkok - Pattaya",
    duration: "5 Ngày 4 Đêm",
    durationDays: 5,
    airline: "Vietnam Airlines",
    price: 7490000,
    priceFormatted: "7.490.000 đ",
    highlights: ["Chùa Thuyền Wat Yannawa", "Đảo San Hô Coral Island", "Chợ nổi Bốn Miền", "IconSiam mua sắm"],
    country: "Thái Lan",
    region: "Tour Thái Lan",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Giá Tốt",
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80",
    departure: "Khởi hành hàng tuần",
    isFeatured: true
  },
  {
    title: "Tour Sơn Tây Ngũ Đài Sơn Huyền Không Tự | No Shopping",
    itinerary: "Thái Nguyên - Ngũ Đài Sơn - Đại Đồng",
    duration: "7 Ngày 7 Đêm",
    durationDays: 7,
    airline: "Vietnam Airlines",
    price: 30009999,
    priceFormatted: "30.009.999 đ",
    highlights: ["Chùa Huyền Không chênh vênh vách núi", "Thánh địa Phật giáo Ngũ Đài Sơn", "Thành cổ Bình Dao", "Hang đá Vân Cương"],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "hanh-huong", "hanh-huong-phat-giao"],
    badge: "Hành Hương",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
    departure: "Tháng 5 & 6"
  },
  {
    title: "Hành Hương Giang Nam: Ninh Ba – Hàng Châu – Vô Tích – Nam Kinh",
    itinerary: "Ninh Ba - Hàng Châu - Vô Tích - Nam Kinh",
    duration: "7 Ngày 7 Đêm",
    durationDays: 7,
    airline: "Vietnam Airlines",
    price: 29990000,
    priceFormatted: "29.990.000 đ",
    highlights: ["Phổ Đà Sơn thánh địa Quan Âm", "Tây Hồ Hàng Châu", "Đại Phật Linh Sơn", "Miếu Phu Tử Nam Kinh"],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "hanh-huong", "hanh-huong-phat-giao"],
    badge: "Hành Hương",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    departure: "Tháng 6 – 10"
  },
  {
    title: "Cảnh Sắc Giang Nam: Thượng Hải – Tô Châu – Hàng Châu – Ô Trấn",
    itinerary: "Thượng Hải - Tô Châu - Hàng Châu - Ô Trấn",
    duration: "5 Ngày 4 Đêm",
    durationDays: 5,
    airline: "Vietjet Air",
    price: 16790000,
    priceFormatted: "16.790.000 đ",
    highlights: ["Thủy trấn cổ Ô Trấn", "Bến Thượng Hải hoa lệ", "Sư Tử Lâm Tô Châu", "Du thuyền Tây Hồ"],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Bán Chạy",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&q=80",
    departure: "Hàng tuần"
  },
  {
    title: "Du Lịch Hàn Quốc: Busan – Seoul Đảo Nami",
    itinerary: "Busan - Seoul - Đảo Nami",
    duration: "6 Ngày 5 Đêm",
    durationDays: 6,
    airline: "Vietjet Air",
    price: 18990000,
    priceFormatted: "18.990.000 đ",
    highlights: ["Làng văn hóa Gamcheon", "Cung điện Gyeongbokgung", "Tháp Namsan", "Đảo Nami lãng mạn"],
    country: "Hàn Quốc",
    region: "Tour Hàn Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
    departure: "Thứ 4 & Thứ 6"
  },
  {
    title: "Hàn Quốc Mùa Đông: Seoul – Nami – Trượt Tuyết Elysian",
    itinerary: "Seoul - Nami - Elysian Ski Resort - Lotte World",
    duration: "6 Ngày 5 Đêm",
    durationDays: 6,
    airline: "Vietjet Air",
    price: 15900000,
    priceFormatted: "15.900.000 đ",
    highlights: ["Trượt tuyết tại Elysian Gangchon", "Công viên giải trí Lotte World", "Chợ Myeongdong sầm uất", "Đảo Nami tuyết phủ"],
    country: "Hàn Quốc",
    region: "Tour Hàn Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Mùa Đông",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
    departure: "Mùa Đông 2026"
  },
  {
    title: "Khám Phá Dubai – Abu Dhabi Xứ Sở Thần Thoại",
    itinerary: "Dubai - Sa Mạc Safari - Abu Dhabi",
    duration: "5 Ngày 4 Đêm",
    durationDays: 5,
    airline: "Emirates",
    price: 30990000,
    priceFormatted: "30.990.000 đ",
    highlights: ["Tòa tháp cao nhất thế giới Burj Khalifa", "Đua xe sa mạc Safari", "Đại thánh đường Sheikh Zayed", "Khách sạn 7 sao Burj Al Arab"],
    country: "Dubai",
    region: "Tour nước ngoài",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Sang Trọng",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    departure: "Định kỳ hàng tháng"
  },
  {
    title: "Tour Vũ Hán: Khai Phong – Đăng Phong – Lạc Dương – Tây An",
    itinerary: "Vũ Hán - Khai Phong - Thiếu Lâm Tự - Lạc Dương - Tây An",
    duration: "7 Ngày 6 Đêm",
    durationDays: 7,
    airline: "China Southern",
    price: 31990000,
    priceFormatted: "31.990.000 đ",
    highlights: ["Thiếu Lâm Tự danh bất hư truyền", "Đội quân đất nung Binh Mã Dũng", "Long Môn Thạch Quật", "Thành cổ Tây An"],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Di Sản",
    image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=800&q=80",
    departure: "Khởi hành hàng tháng"
  },
  {
    title: "Đài Loan Mùa Hoa: Đài Bắc – Đài Trung – Cao Hùng – Hồ Nhật Nguyệt",
    itinerary: "Đài Bắc - Đài Trung - Cao Hùng",
    duration: "5 Ngày 4 Đêm",
    durationDays: 5,
    airline: "Eva Air",
    price: 13990000,
    priceFormatted: "13.990.000 đ",
    highlights: ["Tháp Taipei 101", "Du thuyền Hồ Nhật Nguyệt", "Làng cổ Cửu Phần Jiufen", "Thả đèn trời Thập Phần"],
    country: "Đài Loan",
    region: "Tour Đài Loan",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Giá Tốt",
    image: "https://images.unsplash.com/photo-1508247967583-7d982ea01526?w=800&q=80",
    departure: "Thứ 5 hàng tuần"
  },
  {
    title: "Khám Phá Đảo Ngọc Bali – Cổng Trời Lempuyang – Nusa Penida",
    itinerary: "Bali - Đảo Nusa Penida - Ubud",
    duration: "4 Ngày 3 Đêm",
    durationDays: 4,
    airline: "Vietjet Air",
    price: 10890000,
    priceFormatted: "10.890.000 đ",
    highlights: ["Cổng trời Lempuyang huyền thoại", "Sống lưng khủng long Kelingking", "Xích đu Bali Swing giữa rừng", "Hoàng hôn biển Jimbaran"],
    country: "Indonesia",
    region: "Tour Bali (Indonesia)",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Hot Trend",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    departure: "Thứ 5 & Thứ 7"
  },
  {
    title: "Du Lịch Úc Mùa Hoa Phượng Tím: Sydney – Melbourne",
    itinerary: "Sydney - Blue Mountains - Melbourne - Great Ocean Road",
    duration: "7 Ngày 6 Đêm",
    durationDays: 7,
    airline: "Vietnam Airlines",
    price: 52990000,
    priceFormatted: "52.990.000 đ",
    highlights: ["Nhà hát Con Sò Sydney Opera House", "Cung đường ven biển Great Ocean Road", "Thung lũng rượu vang Yarra Valley", "Công viên hoang dã Kangaroo & Koala"],
    country: "Úc",
    region: "Tour Châu Úc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai"],
    badge: "Độc Bản",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    departure: "Định kỳ tháng 10 – 12"
  },
  {
    title: "Hành Hương Năm Thánh 2025: Đức – Thụy Sỹ – Ý – Vatican – Pháp",
    itinerary: "Đức - Thụy Sỹ - Ý - Vatican - Pháp",
    duration: "12 Ngày 11 Đêm",
    durationDays: 12,
    airline: "Turkish Airlines",
    price: 91990000,
    priceFormatted: "91.990.000 đ",
    highlights: ["Tham dự Đại lễ Năm Thánh tại Vatican", "Viếng Vương cung thánh đường Thánh Phêrô", "Lộ Đức miền Nam nước Pháp", "Núi tuyết Titlis Thụy Sỹ"],
    country: "Tây Âu",
    region: "Tour Châu Âu",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "hanh-huong", "hanh-huong-cong-giao"],
    badge: "Năm Thánh",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    departure: "Liên hệ"
  },
  {
    title: "Viếng Đức Mẹ Mê Kông – Campuchia Cuối Tuần",
    itinerary: "TP.HCM - Phnom Penh - Đức Mẹ Mê Kông",
    duration: "2 Ngày 1 Đêm",
    durationDays: 2,
    airline: "Xe du lịch VIP",
    price: 2550000,
    priceFormatted: "2.550.000 đ",
    highlights: ["Cầu nguyện tại tượng Đức Mẹ Mê Kông", "Hoàng Cung Campuchia", "Chùa Vàng Chùa Bạc", "Thưởng thức lẩu băng chuyền Sou Sou"],
    country: "Campuchia",
    region: "Tour Campuchia",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "hanh-huong", "hanh-huong-cong-giao"],
    badge: "Cuối Tuần",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
    departure: "Thứ 7 hàng tuần"
  },
  {
    title: "Tour Tây Ninh 1 Ngày: Núi Bà Đen – Cáp Treo – Đỉnh Vân Sơn",
    itinerary: "TP.HCM - Núi Bà Đen - Chùa Gò Kén",
    duration: "1 Ngày",
    durationDays: 1,
    airline: "Xe Limousine",
    price: 1150000,
    priceFormatted: "1.150.000 đ",
    highlights: ["Cáp treo Vân Sơn hiện đại", "Tượng Phật Bà Tây Bổ Đà Sơn", "Buffet ẩm thực trên đỉnh núi", "Chùa Gò Kén trăm tuổi"],
    country: "Việt Nam",
    region: "Tour Miền Nam",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc"],
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
    departure: "Thứ 7 & Chủ Nhật hàng tuần"
  },
  {
    title: "Thiên Đường Biển Đảo Phú Quốc: Hòn Thơm – Grand World",
    itinerary: "Phú Quốc - Nam Đảo - Grand World",
    duration: "3 Ngày 2 Đêm",
    durationDays: 3,
    airline: "Vietnam Airlines",
    price: 4990000,
    priceFormatted: "4.990.000 đ",
    highlights: ["Cáp treo Hòn Thơm vượt biển dài nhất", "Thành phố không ngủ Grand World", "Trải nghiệm lặn ngắm san hô 4 đảo", "Hoàng hôn Sunset Sanato"],
    country: "Việt Nam",
    region: "Tour Miền Nam",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc"],
    badge: "Bán Chạy",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    departure: "Khởi hành hàng ngày"
  },
  {
    title: "Nha Trang Biển Hát: VinWonders – Du Thuyền Vịnh Nha Trang",
    itinerary: "Nha Trang - VinWonders - Vịnh Nha Trang",
    duration: "3 Ngày 2 Đêm",
    durationDays: 3,
    airline: "Vietjet Air",
    price: 3690000,
    priceFormatted: "3.690.000 đ",
    highlights: ["Khu vui chơi giải trí VinWonders", "Du thuyền ngắm vịnh biển Nha Trang", "Tháp Bà Ponagar nghìn năm", "Tắm bùn khoáng nóng thư giãn"],
    country: "Việt Nam",
    region: "Tour Miền Nam",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc"],
    badge: "Giá Tốt",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
    departure: "Thứ 5 & Thứ 6"
  },
  {
    title: "Hạ Long – Ninh Bình – Hà Nội: Kỳ Quan Đất Rồng",
    itinerary: "Hà Nội - Vịnh Hạ Long - Tràng An Bái Đính",
    duration: "4 Ngày 3 Đêm",
    durationDays: 4,
    airline: "Vietnam Airlines",
    price: 6890000,
    priceFormatted: "6.890.000 đ",
    highlights: ["Du thuyền 5 sao vịnh Hạ Long", "Di sản thế giới Tràng An", "Chùa Bái Đính linh thiêng", "36 phố phường Hà Nội cổ kính"],
    country: "Việt Nam",
    region: "Tour Miền Bắc",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc"],
    badge: "Kỳ Quan",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
    departure: "Hàng tuần"
  },
  {
    title: "Khám Phá Sapa Huyền Ảo – Chinh Phục Đỉnh Fansipan",
    itinerary: "Hà Nội - Sapa - Bản Cát Cát - Fansipan",
    duration: "3 Ngày 2 Đêm",
    durationDays: 3,
    airline: "Xe Limousine VIP",
    price: 3290000,
    priceFormatted: "3.290.000 đ",
    highlights: ["Cáp treo lên nóc nhà Đông Dương Fansipan", "Bản Cát Cát thơ mộng của người H'Mông", "Đèo Ô Quy Hồ hùng vĩ", "Ẩm thực lẩu cá tầm Tây Bắc"],
    country: "Việt Nam",
    region: "Tour Miền Bắc",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc"],
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    departure: "Thứ 6 hàng tuần"
  },
  {
    title: "Hà Giang Vòng Cung Mùa Hoa Tam Giác Mạch",
    itinerary: "Hà Nội - Đồng Văn - Mèo Vạc - Lũng Cú",
    duration: "4 Ngày 3 Đêm",
    durationDays: 4,
    airline: "Xe du lịch cao cấp",
    price: 4590000,
    priceFormatted: "4.590.000 đ",
    highlights: ["Chinh phục Cột cờ Lũng Cú cực Bắc", "Hẻm tu sản đèo Mã Pí Lèng", "Du thuyền sông Nho Quế", "Phố cổ Đồng Văn đậm đà bản sắc"],
    country: "Việt Nam",
    region: "Tour Miền Bắc",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc"],
    badge: "Mùa Hoa",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    departure: "Thứ 5 cách tuần"
  },
  {
    title: "Miền Tây Sông Nước: Mỹ Tho – Cần Thơ – Rừng Tràm Trà Sư",
    itinerary: "Mỹ Tho - Bến Tre - Cần Thơ - Châu Đốc",
    duration: "3 Ngày 2 Đêm",
    durationDays: 3,
    airline: "Xe du lịch VIP",
    price: 2490000,
    priceFormatted: "2.490.000 đ",
    highlights: ["Chợ nổi Cái Răng nhộn nhịp sáng sớm", "Tắc ráng len lỏi Rừng tràm Trà Sư", "Viếng Miếu Bà Chúa Xứ Núi Sam", "Thưởng thức đờn ca tài tử Nam Bộ"],
    country: "Việt Nam",
    region: "Tour Miền Nam",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc"],
    badge: "Dân Dã",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    departure: "Thứ 6 hàng tuần"
  },
  {
    title: "Đà Nẵng – Bà Nà Hills – Hội An – Cố Đô Huế",
    itinerary: "Đà Nẵng - Bà Nà - Hội An - Huế",
    duration: "4 Ngày 3 Đêm",
    durationDays: 4,
    airline: "Vietjet Air",
    price: 5490000,
    priceFormatted: "5.490.000 đ",
    highlights: ["Cầu Vàng bàn tay khổng lồ Bà Nà", "Phố cổ Hội An lung linh đèn lồng", "Đại Nội kinh thành Huế cổ kính", "Viếng Chùa Linh Ứng Bán Đảo Sơn Trà"],
    country: "Việt Nam",
    region: "Tour Miền Trung",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc"],
    badge: "Di Sản",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
    departure: "Thứ 5 & Thứ 7"
  }
];

// Helper to expand to 128 tours (16 pages x 8 tours) with realistic unique variations
export function generateFullTourList(): TourItem[] {
  const result: TourItem[] = [...PRIMARY_TOUR_DATASET];
  let counter = 23;

  // Add all handcrafted additional tours first
  RAW_ADDITIONAL_TOURS.forEach((item, idx) => {
    result.push({
      ...item,
      id: `tour-evg-${counter++}`,
      code: `EVG-${String(counter).padStart(3, "0")}`
    });
  });

  // Base archetypes to generate the remainder up to 128 tours (16 full pages)
  const templates = [
    {
      title: "Du Lịch Nhật Bản Mùa Hoa Anh Đào (Tokyo – Phú Sĩ – Kyoto)",
      itinerary: "Tokyo - Núi Phú Sĩ - Kyoto - Osaka",
      duration: "6 Ngày 5 Đêm",
      durationDays: 6,
      airline: "Vietnam Airlines",
      price: 38888000,
      country: "Nhật Bản",
      region: "Tour Nhật Bản",
      category: "nuoc-ngoai" as const,
      cats: ["all", "nuoc-ngoai"],
      badge: "Mùa Hoa Sakura",
      highlights: ["Công viên Ueno hoa anh đào rực rỡ", "Ngắm núi Phú Sĩ soi bóng hồ Kawaguchi", "Chùa Vàng Kinkakuji Kyoto", "Lâu đài Osaka cổ kính"],
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      departure: "Tháng 3 & Tháng 4"
    },
    {
      title: "Du Lịch Hàn Quốc Mùa Thu Lá Vàng: Seoul – Seorak – Nami",
      itinerary: "Seoul - Công viên Quốc gia Seoraksan - Nami",
      duration: "5 Ngày 4 Đêm",
      durationDays: 5,
      airline: "Vietjet Air",
      price: 17490000,
      country: "Hàn Quốc",
      region: "Tour Hàn Quốc",
      category: "nuoc-ngoai" as const,
      cats: ["all", "nuoc-ngoai"],
      badge: "Mùa Thu",
      highlights: ["Rừng phong đỏ Seoraksan", "Trải nghiệm làm Kimchi & mặc Hanbok", "Phố đi bộ Hongdae trẻ trung", "Cung điện Hoàng Gia Deoksugung"],
      image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
      departure: "Tháng 10 & 11"
    },
    {
      title: "Khám Phá Cửu Trại Câu – Thiên Đường Nơi Hạ Giới",
      itinerary: "Thành Đô - Cửu Trại Câu - Hoàng Long",
      duration: "6 Ngày 5 Đêm",
      durationDays: 6,
      airline: "Sichuan Airlines",
      price: 18880000,
      country: "Trung Quốc",
      region: "Tour Trung Quốc",
      category: "nuoc-ngoai" as const,
      cats: ["all", "nuoc-ngoai"],
      badge: "Kỳ Quan",
      highlights: ["Hồ Ngũ Sắc nước trong vắt", "Thác nước Thác Trân Châu hùng tráng", "Khu bảo tồn Gấu Trúc Thành Đô", "Phố cổ Cẩm Lý"],
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
      departure: "Khởi hành hàng tuần"
    },
    {
      title: "Hành Trình Bắc Kinh – Thượng Hải – Vạn Lý Trường Thành",
      itinerary: "Bắc Kinh - Vạn Lý Trường Thành - Thượng Hải",
      duration: "7 Ngày 6 Đêm",
      durationDays: 7,
      airline: "Air China",
      price: 24900000,
      country: "Trung Quốc",
      region: "Tour Trung Quốc",
      category: "nuoc-ngoai" as const,
      cats: ["all", "nuoc-ngoai"],
      badge: "Kinh Điển",
      highlights: ["Chinh phục Vạn Lý Trường Thành Cư Dung Quan", "Tử Cấm Thành tráng lệ", "Quảng trường Thiên An Môn", "Tháp truyền hình Đông Phương Minh Châu"],
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
      departure: "Thứ 4 & Thứ 7"
    },
    {
      title: "Khám Phá Thái Lan: Chiang Mai – Chiang Rai Đóa Hồng Phương Bắc",
      itinerary: "Chiang Mai - Chiang Rai - Tam Giác Vàng",
      duration: "4 Ngày 3 Đêm",
      durationDays: 4,
      airline: "AirAsia",
      price: 8990000,
      country: "Thái Lan",
      region: "Tour Thái Lan",
      category: "nuoc-ngoai" as const,
      cats: ["all", "nuoc-ngoai"],
      badge: "Văn Hóa",
      highlights: ["Chùa Trắng Wat Rong Khun kiệt tác kiến trúc", "Chùa Xanh Wat Rong Suea Ten", "Khu Tam Giác Vàng huyền bí", "Trải nghiệm văn hóa làng cổ tích"],
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
      departure: "Hàng tuần"
    },
    {
      title: "Du Lịch Châu Âu 5 Nước: Pháp – Luxembourg – Đức – Bỉ – Hà Lan",
      itinerary: "Paris - Luxembourg - Frankfurt - Brussels - Amsterdam",
      duration: "9 Ngày 8 Đêm",
      durationDays: 9,
      airline: "Qatar Airways",
      price: 68900000,
      country: "Tây Âu",
      region: "Tour Châu Âu",
      category: "nuoc-ngoai" as const,
      cats: ["all", "nuoc-ngoai"],
      badge: "Bán Chạy",
      highlights: ["Bảo tàng Louvre Paris", "Làng cối xay gió Zaanse Schans", "Quảng trường Grand Place Brussels", "Du thuyền kênh đào Amsterdam"],
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
      departure: "Tháng 4, 6, 8, 10"
    },
    {
      title: "Hành Hương Đất Phật Ấn Độ – Nepal: Tứ Động Tâm",
      itinerary: "Bồ Đề Đạo Tràng - Lộc Uyển - Câu Thi Na - Lâm Tỳ Ni",
      duration: "10 Ngày 9 Đêm",
      durationDays: 10,
      airline: "IndiGo",
      price: 36900000,
      country: "Ấn Độ",
      region: "Tour Ấn Độ",
      category: "nuoc-ngoai" as const,
      cats: ["all", "nuoc-ngoai", "hanh-huong", "hanh-huong-phat-giao"],
      badge: "Tâm Linh",
      highlights: ["Chiêm bái Cây Bồ Đề nơi Đức Phật thành đạo", "Nơi Đức Phật đản sinh Lâm Tỳ Ni", "Sông Hằng linh thiêng Varanasi", "Tháp Đại Giác ngàn năm"],
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      departure: "Mùa hành hương"
    },
    {
      title: "Hành Hương Đức Mẹ La Vang – Đức Mẹ Trà Kiệu",
      itinerary: "Đà Nẵng - La Vang - Huế - Trà Kiệu",
      duration: "3 Ngày 2 Đêm",
      durationDays: 3,
      airline: "Vietnam Airlines",
      price: 3890000,
      country: "Việt Nam",
      region: "Tour Miền Trung",
      category: "trong-nuoc" as const,
      cats: ["all", "trong-nuoc", "hanh-huong", "hanh-huong-cong-giao"],
      badge: "Hành Hương",
      highlights: ["Trung tâm Thánh Mẫu Toàn quốc La Vang", "Linh địa Trà Kiệu", "Đan viện Biển Đức Thiên An Huế", "Chầu Thánh Thể sốt sắng"],
      image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800&q=80",
      departure: "Định kỳ hàng tháng"
    },
    {
      title: "Tour Liên Tuyến Đà Lạt – Nha Trang: Biển Xanh Lên Hoa Bay",
      itinerary: "Nha Trang - Đèo Khánh Lê - Đà Lạt",
      duration: "4 Ngày 4 Đêm",
      durationDays: 4,
      airline: "Xe du lịch VIP",
      price: 3490000,
      country: "Việt Nam",
      region: "Tour Miền Nam",
      category: "trong-nuoc" as const,
      cats: ["all", "trong-nuoc"],
      badge: "Liên Tuyến",
      highlights: ["Vịnh biển Nha Trang ngắm san hô", "Đèo Khánh Lê mây phủ", "Thác Datanla trượt máng", "Quảng trường Lâm Viên Đà Lạt"],
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
      departure: "Khởi hành hàng tuần"
    },
    {
      title: "Khám Phá Phan Thiết – Mũi Né: Bàu Trắng – Suối Tiên",
      itinerary: "TP.HCM - Phan Thiết - Mũi Né",
      duration: "2 Ngày 1 Đêm",
      durationDays: 2,
      airline: "Xe Limousine",
      price: 1990000,
      country: "Việt Nam",
      region: "Tour Miền Nam",
      category: "trong-nuoc" as const,
      cats: ["all", "trong-nuoc"],
      badge: "Giá Tốt",
      highlights: ["Lái xe địa hình chinh phục đồi cát Bàu Trắng", "Lội suối Tiên huyền ảo", "Lâu đài rượu vang RD", "Hải sản tươi sống bờ kè Mũi Né"],
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      departure: "Thứ 7 hàng tuần"
    }
  ];

  // Fill up to exactly 128 tours (16 pages x 8 items)
  let tIdx = 0;
  while (result.length < 128) {
    const tmpl = templates[tIdx % templates.length];
    const num = result.length + 1;
    result.push({
      ...tmpl,
      id: `tour-evg-${num}`,
      code: `EVG-${String(num).padStart(3, "0")}`,
      title: `${tmpl.title} (Khởi Hành ${2026} - Đợt ${Math.floor(num / 10) + 1})`,
      priceFormatted: tmpl.price ? `${tmpl.price.toLocaleString("vi-VN")} đ` : "Liên hệ"
    });
    tIdx++;
  }

  return result;
}

export const ALL_TOURS: TourItem[] = generateFullTourList();

export const TOUR_DATASET = {
  Tour_Trong_Nuoc: ALL_TOURS.filter(t => t.category === "trong-nuoc"),
  Tour_Ngoai_Nuoc: ALL_TOURS.filter(t => t.category === "nuoc-ngoai")
};

// Countries for filter
export const COUNTRIES = [
  "Tất cả quốc gia",
  "Trung Quốc",
  "Thái Lan",
  "Nhật Bản",
  "Hàn Quốc",
  "Singapore",
  "Malaysia - Singapore",
  "Thổ Nhĩ Kỳ",
  "Tây Âu",
  "Dubai",
  "Đài Loan",
  "Indonesia",
  "Úc",
  "Ấn Độ",
  "Campuchia",
  "Việt Nam"
];

// Price ranges
export const PRICE_RANGES = [
  { label: "Dưới 5 triệu", min: 0, max: 5000000 },
  { label: "5 – 15 triệu", min: 5000000, max: 15000000 },
  { label: "15 – 25 triệu", min: 15000000, max: 25000000 },
  { label: "25 – 45 triệu", min: 25000000, max: 45000000 },
  { label: "Trên 45 triệu", min: 45000000, max: Infinity },
  { label: "Giá Liên Hệ", min: -1, max: -1 }
];

// Duration filters
export const DURATION_FILTERS = [
  { label: "Tất cả thời lượng", value: "all" },
  { label: "Ngắn ngày (1 – 3 ngày)", value: "short", days: [1, 2, 3] },
  { label: "Trung bình (4 – 6 ngày)", value: "medium", days: [4, 5, 6] },
  { label: "Dài ngày (từ 7 ngày trở lên)", value: "long", days: [7, 8, 9, 10, 11, 12, 13, 14] }
];
