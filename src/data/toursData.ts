export interface FlightInfo {
  airline: string;
  outbound: string;
  returnFlight: string;
  baggage?: string;
  transit?: string;
  notes?: string;
}

export interface PricingRow {
  month?: string;
  dates: string;
  adult: string;
  child?: string;
  infant?: string;
  singleRoom?: string;
  note?: string;
}

export interface DayItinerary {
  day: number;
  title: string;
  meals?: string;
  hotel?: string;
  image?: string;
  activities: { title?: string; desc: string; highlight?: boolean }[];
}

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
  flightInfo?: FlightInfo;
  pricingTable?: PricingRow[];
  singleRoomSurcharge?: string;
  itineraryDays?: DayItinerary[];
  inclusions?: string[];
  exclusions?: string[];
  cancellationPolicy?: string[];
  visaRequirements?: string[];
  pdfFile: string;
  giftMeals?: string[];
  galleryImages?: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. DANH SÁCH TOUR CHÂU Á (ĐÀI LOAN, NHẬT BẢN, DUBAI, BHUTAN, THỔ NHĨ KỲ)
// ─────────────────────────────────────────────────────────────────────────────

export const TOUR_CHAU_A_DATASET: TourItem[] = [
  // ── 1. ĐÀI LOAN STARLUX ──
  {
    id: "tour-tw-starlux",
    code: "EVG-TW-STARLUX",
    title: "DU LỊCH ĐÀI LOAN: ĐÀI BẮC – ĐÀI TRUNG – CAO HÙNG",
    itinerary: "Đài Bắc - Đài Trung - Cao Hùng",
    duration: "05 Ngày 04 Đêm",
    durationDays: 5,
    airline: "Starlux Airlines 5★",
    price: 14990000,
    priceFormatted: "14.990.000 VNĐ",
    highlights: [
      "Tháp Taipei 101 – Biểu tượng kiêu hãnh của Đài Loan",
      "Du thuyền thưởng ngoạn vẻ đẹp thơ mộng Hồ Nhật Nguyệt",
      "Trải nghiệm tự tay làm bánh dứa DIY truyền thống",
      "Thả đèn Thiên Đăng cầu may mắn tại Phố cổ Thập Phần",
      "Khám phá Phố cổ Cửu Phần (Jiufen) & Chợ đêm Tây Môn Đinh",
      "Tặng 01 bữa Lẩu Đài Loan Shabu Shabu thanh ngọt hảo hạng"
    ],
    giftMeals: [
      "Trải nghiệm hãng hàng không thế hệ mới 5 sao Starlux Airlines",
      "Tặng 01 bữa Lẩu Shabu Shabu Đài Loan thượng hạng",
      "Tặng trải nghiệm tự tay làm bánh dứa thơm ngon mang về",
      "Tặng 01 đèn lồng Thiên Đăng cho 04 khách tại Phố Cổ Thập Phần",
      "Tặng vé du thuyền ngắm cảnh Hồ Nhật Nguyệt thơ mộng",
      "Khách sạn tiêu chuẩn 3 - 4 sao tiện nghi suốt tuyến",
      "Bảo hiểm du lịch quốc tế quyền lợi tối đa 10.000 USD/vụ"
    ],
    country: "Đài Loan",
    region: "Tour Châu Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "dai-loan", "chau-a"],
    badge: "Hàng Không 5 Sao",
    image: "https://images.unsplash.com/photo-1508248467877-aec1b08de376?w=1000&q=85",
    departure: "Thứ 4 & Thứ 7 hàng tuần",
    isFeatured: true,
    pdfFile: "ĐÀI BẮC - ĐÀI TRUNG - CAO HÙNG 5N4D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1508248467877-aec1b08de376?w=1000&q=85",
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80",
      "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?w=800&q=80",
      "https://images.unsplash.com/photo-1549693578-d683be217e58?w=800&q=80"
    ],
    flightInfo: {
      airline: "Starlux Airlines 5★ (Máy bay thân rộng hiện đại)",
      outbound: "JX 712 SGN – TPE 12:05 – 16:30 (Tân Sơn Nhất – Đào Viên Đài Bắc)",
      returnFlight: "JX 713 TPE – SGN 08:30 – 11:05 (Đào Viên Đài Bắc – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 23kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "4.500.000 VNĐ / phòng / suốt tuyến",
    pricingTable: [
      { month: "Khởi hành hàng tuần", dates: "Thứ 4, Thứ 7", adult: "14.990.000", child: "13.490.000", infant: "4.500.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ ĐÀI BẮC – CHỢ ĐÊM TÂY MÔN ĐINH",
        meals: "Ăn nhẹ trên máy bay, Ăn tối",
        hotel: "Khách sạn 3-4 sao Đài Bắc",
        image: "https://images.unsplash.com/photo-1508248467877-aec1b08de376?w=800&q=80",
        activities: [
          { desc: "09:00 Quý khách tập trung tại Ga quốc tế Sân bay Tân Sơn Nhất. Hướng dẫn viên Én Việt làm thủ tục đáp chuyến bay JX 712 đi Đài Bắc." },
          { desc: "16:30 Đến sân bay quốc tế Đào Viên, xe và HDV địa phương đón đoàn di chuyển vào trung tâm Đài Bắc.", highlight: true },
          { desc: "Dạo chơi khu phố đi bộ Tây Môn Đinh (Ximending) – thiên đường mua sắm sầm uất và thưởng thức các món ăn vặt trứ danh Đài Loan.", highlight: true }
        ]
      },
      {
        day: 2,
        title: "ĐÀI BẮC – PHỐ CỔ THẬP PHẦN – THÁP TAIPEI 101",
        meals: "Ăn sáng, trưa, tối (Tặng Lẩu Đài Loan)",
        hotel: "Khách sạn 3-4 sao Đài Bắc",
        image: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=800&q=80",
        activities: [
          { desc: "Tham quan Phố cổ Thập Phần (Shifen Old Street) – trải nghiệm nét đẹp văn hóa truyền thống thả đèn Thiên Đăng viết lời ước nguyện (Én Việt tặng 04 khách/1 đèn).", highlight: true },
          { desc: "Khám phá Phố cổ Cửu Phần (Jiufen) – ngôi làng cổ cheo leo bên sườn núi với muôn ánh đèn lồng đỏ lung linh như trong thế giới hoạt hình Spirited Away." },
          { desc: "Check-in Tháp Taipei 101 tầng – kỳ quan kiến trúc từng là tòa nhà cao nhất thế giới (chụp ảnh lưu niệm bên ngoài).", highlight: true },
          { desc: "Thưởng thức bữa tối Lẩu Shabu Shabu Đài Loan thượng hạng với nguyên liệu tươi ngon thanh ngọt." }
        ]
      },
      {
        day: 3,
        title: "ĐÀI BẮC – LÀNG DIY BÁNH DỨA – ĐÀI TRUNG – HỒ NHẬT NGUYỆT",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3-4 sao Đài Trung",
        image: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?w=800&q=80",
        activities: [
          { desc: "Tham quan Lớp học làm bánh dứa Virgo Pineapple Cake DIY – quý khách được trực tiếp nhào bột, nướng bánh và nhận thành phẩm thơm phức mang về.", highlight: true },
          { desc: "Khởi hành đi Đài Trung, lên du thuyền thưởng ngoạn Hồ Nhật Nguyệt (Sun Moon Lake) – danh thắng thiên nhiên lãng mạn bậc nhất xứ Đài.", highlight: true },
          { desc: "Viếng Miếu Văn Võ (Wenwu Temple) tôn nghiêm thờ Quan Công và Khổng Tử hướng nhìn trọn cảnh hồ." }
        ]
      },
      {
        day: 4,
        title: "ĐÀI TRUNG – CAO HÙNG – PHẬT QUANG SƠN – CHỢ ĐÊM LỤC HỢP",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3-4 sao Cao Hùng",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
        activities: [
          { desc: "Di chuyển đến thành phố biển Cao Hùng. Chiêm bái Phật Quang Sơn Tự (Fo Guang Shan) – thánh địa Phật giáo tráng lệ với tượng đại Phật ngồi bằng đồng cao 108m.", highlight: true },
          { desc: "Chụp ảnh tại Hồ Sen với Tháp Long Hổ mang ý nghĩa 'vào miệng Rồng ra miệng Hổ' xua đi vận rủi rước lại may mắn." },
          { desc: "Dạo Chợ đêm Lục Hợp (Liuhe Night Market) thưởng thức sữa đu đủ, hải sản nướng và trà sữa trân châu Đài Loan." }
        ]
      },
      {
        day: 5,
        title: "CAO HÙNG – ĐÀI BẮC ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, ăn trên máy bay",
        activities: [
          { desc: "Đoàn dùng điểm tâm sáng, trả phòng khách sạn. Xe đưa quý khách ra sân bay đáp chuyến bay Starlux JX 713 về lại TP. Hồ Chí Minh." },
          { desc: "11:05 Đến sân bay Tân Sơn Nhất. Hướng dẫn viên Én Việt hỗ trợ lấy hành lý, chia tay quý khách và hẹn gặp lại trong những hành trình tiếp theo!", highlight: true }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi quốc tế theo đoàn của Hãng Hàng Không 5 Sao Starlux Airlines (JX)",
      "Hành lý ký gửi 23kg + 07kg hành lý xách tay",
      "Khách sạn tiêu chuẩn 3 - 4 sao tiện nghi (2 người lớn/phòng, lẻ nam/nữ ghép phòng 3)",
      "Các bữa ăn theo chương trình, đặc biệt tặng 01 bữa Lẩu Shabu Shabu Đài Loan",
      "Vé tham quan, du thuyền Hồ Nhật Nguyệt, trải nghiệm làm bánh dứa DIY, đèn lồng Thập Phần",
      "Visa Quan Hồng nhập cảnh Đài Loan trọn gói theo đoàn",
      "Bảo hiểm du lịch quốc tế bồi thường tối đa 10.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính đến ngày kết thúc chuyến đi",
      "Tiền bồi dưỡng (Tip) cho HDV và tài xế địa phương: 30 USD/khách/tour",
      "Phụ thu phòng đơn cho khách có nhu cầu ở riêng",
      "Chi phí cá nhân: giặt ủi, điện thoại, nước uống ngoài chương trình"
    ],
    visaRequirements: [
      "Hộ chiếu gốc hoặc bản scan rõ nét còn hạn trên 6 tháng",
      "Ảnh 4x6 nền trắng chụp trong vòng 3 tháng gần nhất",
      "Thủ tục visa Quan Hồng thuận tiện theo đoàn do Én Việt thực hiện"
    ]
  },

  // ── 2. ĐÀI LOAN VIETNAM AIRLINES ──
  {
    id: "tour-tw-vna",
    code: "EVG-TW-VN",
    title: "DU LỊCH ĐÀI LOAN: ĐÀO VIÊN - ĐÀI BẮC – ĐÀI TRUNG – CAO HÙNG",
    itinerary: "Đào Viên - Đài Bắc - Đài Trung - Cao Hùng",
    duration: "05 Ngày 04 Đêm",
    durationDays: 5,
    airline: "Vietnam Airlines 4★",
    price: 12740000,
    priceFormatted: "12.740.000 VNĐ",
    highlights: [
      "Khám phá Hồ Nhật Nguyệt thơ mộng trữ tình",
      "DIY tự làm bánh dứa truyền thống xứ Đài",
      "Thả đèn Thiên Đăng cầu may tại Phố cổ Thập Phần",
      "Chiêm bái Thánh địa Phật Quang Sơn Tự nguy nga",
      "Chụp ảnh Tháp Taipei 101 & Dạo Chợ đêm Phùng Giáp",
      "Bay thẳng an toàn, dịch vụ chu đáo cùng Vietnam Airlines"
    ],
    giftMeals: [
      "Hàng không Quốc gia Vietnam Airlines tiêu chuẩn 4 sao",
      "Khách sạn 3 - 4 sao chuẩn quốc tế suốt hành trình",
      "Tặng bữa ăn đặc sản địa phương Đài Loan hấp dẫn",
      "Tặng hoạt động tự tay làm bánh dứa thơm ngon",
      "Tặng vé thả đèn lồng may mắn tại Thập Phần",
      "Bảo hiểm du lịch quốc tế bảo vệ toàn diện"
    ],
    country: "Đài Loan",
    region: "Tour Châu Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "dai-loan", "chau-a"],
    badge: "Giá Siêu Ưu Đãi",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1000&q=85",
    departure: "Khởi hành định kỳ thứ 5 hàng tuần",
    isFeatured: true,
    pdfFile: "ĐÀO VIÊN - ĐÀI BẮC - ĐÀI TRUNG - CAO HÙNG 5N4D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1000&q=85",
      "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?w=800&q=80",
      "https://images.unsplash.com/photo-1549693578-d683be217e58?w=800&q=80",
      "https://images.unsplash.com/photo-1508248467877-aec1b08de376?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietnam Airlines 4★ (Hãng hàng không Quốc gia)",
      outbound: "VN 570 SGN – TPE 16:30 – 21:05 (TP.HCM – Đào Viên Đài Bắc)",
      returnFlight: "VN 571 TPE – SGN 22:05 – 00:45* (Đào Viên Đài Bắc – TP.HCM)",
      baggage: "Hành lý ký gửi 23kg + 10kg hành lý xách tay"
    },
    singleRoomSurcharge: "4.200.000 VNĐ / suốt tuyến",
    pricingTable: [
      { month: "Khởi hành định kỳ", dates: "Thứ 5 hàng tuần", adult: "12.740.000", child: "11.490.000", infant: "3.800.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ ĐÀO VIÊN – ĐÀI BẮC",
        meals: "Ăn tối trên máy bay",
        hotel: "Khách sạn 3-4 sao Đài Bắc",
        image: "https://images.unsplash.com/photo-1508248467877-aec1b08de376?w=800&q=80",
        activities: [
          { desc: "13:30 Quý khách tập trung tại Tân Sơn Nhất, làm thủ tục bay đến sân bay quốc tế Đào Viên trên chuyến bay VN 570." },
          { desc: "21:05 Đến Đài Bắc, xe đưa đoàn về khách sạn nhận phòng nghỉ ngơi nạp năng lượng cho hành trình thú vị." }
        ]
      },
      {
        day: 2,
        title: "ĐÀI BẮC – PHỐ CỔ THẬP PHẦN – THÁP TAIPEI 101 – CHỢ ĐÊM",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3-4 sao Đài Bắc",
        image: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=800&q=80",
        activities: [
          { desc: "Dạo bước Phố Cổ Thập Phần, thả đèn hoa đăng gửi gắm lời nguyện ước bình an tài lộc.", highlight: true },
          { desc: "Tham quan Công viên Địa chất Dã Liễu (Yehliu) chiêm ngưỡng mỏm đá 'Đầu Nữ Hoàng' kỳ thú do sóng biển kiến tạo." },
          { desc: "Chụp hình lưu niệm dưới chân Tháp Taipei 101 và viếng Nhà tưởng niệm Tưởng Giới Thạch oai nghiêm." }
        ]
      },
      {
        day: 3,
        title: "ĐÀI BẮC – DIY BÁNH DỨA – DU THUYỀN HỒ NHẬT NGUYỆT – ĐÀI TRUNG",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3-4 sao Đài Trung",
        image: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?w=800&q=80",
        activities: [
          { desc: "Tham gia workshop làm bánh dứa thủ công xứ Đài và nhận bánh mang về làm quà.", highlight: true },
          { desc: "Đến Nam Đầu, đi du thuyền ngắm mặt nước biếc xanh ngọc bích của Hồ Nhật Nguyệt.", highlight: true },
          { desc: "Tối đến Đài Trung, tự do hòa mình vào không khí sôi động của Chợ đêm Phùng Giáp (Fengjia)." }
        ]
      },
      {
        day: 4,
        title: "ĐÀI TRUNG – PHẬT QUANG SƠN TỰ – CAO HÙNG",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3-4 sao Cao Hùng",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi Cao Hùng. Chiêm bái Phật Quang Sơn Tự – chiêm ngưỡng tượng Phật khổng lồ cùng bảo tàng xá lợi tôn nghiêm.", highlight: true },
          { desc: "Tham quan Hồ Sen, Đình Xuân Thu, Tháp Long Hổ và dạo chơi Trung tâm Nghệ thuật Pier-2 rực rỡ sắc màu." }
        ]
      },
      {
        day: 5,
        title: "CAO HÙNG – ĐÀO VIÊN ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, trưa, tối trên máy bay",
        activities: [
          { desc: "Đoàn mua sắm đặc sản bánh kẹo Đài Loan, sau đó di chuyển ra sân bay Đào Viên làm thủ tục chuyến bay VN 571." },
          { desc: "Về đến Tân Sơn Nhất lúc 00:45 sáng hôm sau. Kết thúc tour du lịch Đài Loan ngập tràn niềm vui!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi SGN – TPE – SGN cùng Vietnam Airlines tiêu chuẩn 4 sao",
      "Khách sạn tiêu chuẩn 3 - 4 sao (phòng 2 người, trang thiết bị hiện đại)",
      "Các bữa ăn tiêu chuẩn theo chương trình với phong vị ẩm thực xứ Đài",
      "Vé tham quan, du thuyền Hồ Nhật Nguyệt, DIY bánh dứa, đèn lồng Thập Phần",
      "Visa nhập cảnh Đài Loan theo đoàn",
      "Bảo hiểm du lịch quốc tế quyền lợi chu đáo"
    ],
    exclusions: [
      "Hộ chiếu còn hiệu lực trên 6 tháng",
      "Tiền tip hướng dẫn viên và tài xế: 30 USD/khách",
      "Chi phí phòng đơn nếu có nhu cầu",
      "Hóa đơn VAT và chi phí cá nhân ngoài hành trình"
    ],
    visaRequirements: [
      "Hộ chiếu chụp rõ thông tin còn hạn tối thiểu 6 tháng",
      "Ảnh 4x6 phông trắng mới nhất",
      "Tờ khai thông tin cá nhân xin visa điện tử theo đoàn"
    ]
  },

  // ── 3. NHẬT BẢN CUNG ĐƯỜNG VÀNG MÙA ĐÔNG ──
  {
    id: "tour-jp-dong",
    code: "EVG-JP-DONG",
    title: "NHẬT BẢN CUNG ĐƯỜNG VÀNG (MÙA ĐÔNG)",
    itinerary: "Tokyo - Núi Phú Sĩ - Nagoya - Kyoto - Osaka",
    duration: "06 Ngày 05 Đêm",
    durationDays: 6,
    airline: "Vietjet Air (VJ)",
    price: 42888000,
    priceFormatted: "42.888.000 VNĐ",
    highlights: [
      "Trượt tuyết tại Fujiten Snow Resort dưới chân Núi Phú Sĩ",
      "Thư giãn tắm suối khoáng nóng Onsen truyền thống Nhật Bản",
      "Thưởng thức tiệc Cua Tuyết & Sashimi hải sản tươi ngon",
      "Dạo bước giữa Rừng tre Arashiyama (Sagano) thanh tịnh",
      "Chiêm bái Chùa Vàng Kinkaku-ji lộng lẫy soi bóng nước",
      "Chụp ảnh Lâu đài Osaka uy nghi & Mua sắm Shinsaibashi"
    ],
    giftMeals: [
      "Tặng vé trải nghiệm trượt tuyết Fujiten Snow Resort",
      "Tặng 01 đêm nghỉ ngơi và tắm suối nước khoáng Onsen phục hồi sức khỏe",
      "Thực đơn thịnh soạn: Đại tiệc Cua Tuyết, Sashimi tươi sống, Lẩu Shabu Shabu Nhật",
      "Khách sạn 3-4 sao chuẩn Nhật tiện nghi",
      "Xe du lịch đời mới cao cấp đưa đón suốt tuyến",
      "Bảo hiểm du lịch quốc tế bồi thường đến 1.000.000.000 VNĐ"
    ],
    country: "Nhật Bản",
    region: "Tour Châu Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "nhat-ban", "chau-a"],
    badge: "Mùa Đông Tuyết Trắng",
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1000&q=85",
    departure: "Mùa Đông & Tết Nguyên Đán",
    isFeatured: true,
    pdfFile: "MÙA ĐÔNG CUNG ĐƯOỜNG VÀNG NHẬT BẢN  6N5D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1000&q=85",
      "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietjet Air (Chuyến bay thẳng tiện nghi)",
      outbound: "VJ 828 SGN – NRT 00:15 – 08:00 (TP.HCM – Tokyo Narita)",
      returnFlight: "VJ 829 KIX – SGN 09:30 – 13:40 (Osaka Kansai – TP.HCM)",
      baggage: "Hành lý ký gửi 20kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "7.500.000 VNĐ / suốt tuyến",
    pricingTable: [
      { month: "Mùa Đông / Tết", dates: "Khởi hành hàng tuần", adult: "42.888.000", child: "38.600.000", infant: "12.800.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ TOKYO NARITA",
        meals: "Nghỉ đêm trên máy bay",
        activities: [
          { desc: "21:00 Quý khách tập trung tại Tân Sơn Nhất làm thủ tục đáp chuyến bay VJ 828 đi Narita Tokyo." },
          { desc: "Nghỉ đêm êm ái trên máy bay." }
        ]
      },
      {
        day: 2,
        title: "TOKYO – CHÙA ASAKUSA KANNON – THÁP SKYTREE – AKIHABARA",
        meals: "Ăn sáng nhẹ, trưa, tối",
        hotel: "Khách sạn 3-4 sao Tokyo",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80",
        activities: [
          { desc: "08:00 Đến Tokyo. Đoàn viếng Chùa cổ Asakusa Kannon (Sensō-ji) lâu đời nhất Tokyo.", highlight: true },
          { desc: "Dạo con phố Nakamise ngập tràn đồ lưu niệm truyền thống Nhật Bản, chụp ảnh Tháp Tokyo Skytree." },
          { desc: "Thỏa sức mua sắm tại phố điện tử Akihabara và khu Ginza sang trọng bậc nhất." }
        ]
      },
      {
        day: 3,
        title: "TOKYO – NÚI PHÚ SĨ – TRƯỢT TUYẾT FUJITEN – TẮM ONSEN",
        meals: "Ăn sáng, trưa, tiệc Cua Tuyết tối",
        hotel: "Khách sạn Onsen khu vực Phú Sĩ",
        image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi Núi Phú Sĩ. Trải nghiệm vui chơi trượt tuyết đỉnh cao tại Fujiten Snow Resort với bạt ngàn bột tuyết trắng mịn.", highlight: true },
          { desc: "Tham quan Làng cổ Oshino Hakkai yên bình dưới chân núi Phú Sĩ với 8 hồ nước trong vắt." },
          { desc: "Nhận phòng khách sạn, mặc áo Yukata truyền thống, thưởng thức Đại tiệc Cua Tuyết và thư giãn tắm khoáng Onsen tự nhiên.", highlight: true }
        ]
      },
      {
        day: 4,
        title: "NÚI PHÚ SĨ – NAGOYA – CỐ ĐÔ KYOTO – RỪNG TRE SAGANO",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3-4 sao Kyoto / Osaka",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
        activities: [
          { desc: "Di chuyển đến cố đô Kyoto cổ kính. Dạo bước trong Rừng tre Arashiyama (Sagano) ngút ngàn xanh mát.", highlight: true },
          { desc: "Chiêm bái Chùa Vàng Kinkaku-ji trứ danh – di sản thế giới thế kỷ 14 dát vàng lá rực rỡ soi bóng mặt hồ gương.", highlight: true }
        ]
      },
      {
        day: 5,
        title: "KYOTO – LÂU ĐÀI OSAKA – MUA SẮM SHINSAIBASHI",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3-4 sao Osaka",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
        activities: [
          { desc: "Đến Osaka, tham quan Lâu đài Osaka uy nghi tráng lệ – biểu tượng quyền lực của tướng quân Toyotomi Hideyoshi.", highlight: true },
          { desc: "Tự do mua sắm tại phố Dotonbori và Shinsaibashi với hàng ngàn cửa hàng miễn thuế và ẩm thực đường phố độc đáo." }
        ]
      },
      {
        day: 6,
        title: "OSAKA KANSAI ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, ăn trên máy bay",
        activities: [
          { desc: "Đoàn dùng bữa sáng, xe đưa quý khách ra sân bay quốc tế Kansai đáp chuyến bay VJ 829 về lại TP.HCM." },
          { desc: "13:40 Về đến Tân Sơn Nhất, hoàn tất hành trình Cung Đường Vàng Mùa Đông Nhật Bản tuyệt mỹ!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi Vietjet Air thẳng SGN – NRT // KIX – SGN kèm 20kg ký gửi + 7kg xách tay",
      "Khách sạn tiêu chuẩn 3 - 4 sao Nhật Bản, 01 đêm trải nghiệm Onsen và mặc Yukata",
      "Các bữa ăn theo lịch trình, bao gồm đại tiệc Cua Tuyết & Sashimi hảo hạng",
      "Vé tham quan, vé vào cổng khu trượt tuyết Fujiten Snow Resort",
      "Visa nhập cảnh Nhật Bản trọn gói",
      "Bảo hiểm du lịch quốc tế bồi thường lên đến 1 tỷ đồng"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng",
      "Tiền tip HDV và tài xế: 42 USD/khách/tour",
      "Chi phí thuê đồ trượt tuyết chuyên dụng ngoài vé vào cổng",
      "Chi phí cá nhân và phát sinh ngoài chương trình"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "2 ảnh 4.5 x 4.5 cm chụp nền trắng chuẩn Nhật",
      "Căn cước công dân và hồ sơ chứng minh tài chính theo hướng dẫn chu đáo của Én Việt"
    ]
  },

  // ── 4. ĐÓN THU NHẬT BẢN CUNG ĐƯỜNG VÀNG ──
  {
    id: "tour-jp-thu",
    code: "EVG-JP-THU",
    title: "ĐÓN THU NHẬT BẢN CUNG ĐƯỜNG VÀNG",
    itinerary: "Tokyo - Shirakawa-go - Takayama - Kyoto - Osaka",
    duration: "06 Ngày 05 Đêm",
    durationDays: 6,
    airline: "Vietjet Air (VJ)",
    price: 32888000,
    priceFormatted: "32.888.000 VNĐ",
    highlights: [
      "Ngắm sắc lá đỏ Momiji rực rỡ khắp Cung Đường Vàng",
      "Lạc bước vào Làng cổ tích Shirakawa-go di sản UNESCO",
      "Dạo bước trên Phố cổ nghìn năm Takayama Sanmachi Suji",
      "Thưởng thức biểu diễn nghệ thuật Geisha truyền thống Kyoto",
      "Chiêm bái Chùa Vàng Kinkaku-ji & Lâu đài Osaka mùa thu lá vàng",
      "Check-in Núi Phú Sĩ soi bóng hồ Yamanaka thơ mộng"
    ],
    giftMeals: [
      "Tặng buổi xem trình diễn nghệ thuật Geisha Show danh tiếng",
      "Thực đơn mùa thu Nhật Bản: Bò Hida Takayama trứ danh, Lẩu Sukiyaki, Tempura giòn rụm",
      "Tặng 01 đêm tắm Onsen thư giãn làn da",
      "Khách sạn 3-4 sao tiện nghi trọn gói",
      "Bảo hiểm du lịch quốc tế quyền lợi tối đa"
    ],
    country: "Nhật Bản",
    region: "Tour Châu Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "nhat-ban", "chau-a"],
    badge: "Mùa Thu Lá Đỏ",
    image: "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=1000&q=85",
    departure: "Mùa Thu (Tháng 9, 10, 11)",
    isFeatured: true,
    pdfFile: "MÙA THU CUNG ĐƯOỜNG VÀNG NHẬT BẢN  6N5D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=1000&q=85",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
      "https://images.unsplash.com/photo-1578637387939-43c525550085?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietjet Air (Chuyến bay thẳng)",
      outbound: "VJ 828 SGN – NRT 00:15 – 08:00 (TP.HCM – Narita Tokyo)",
      returnFlight: "VJ 829 KIX – SGN 09:30 – 13:40 (Kansai Osaka – TP.HCM)",
      baggage: "Hành lý ký gửi 20kg + 07kg xách tay"
    },
    singleRoomSurcharge: "6.800.000 VNĐ / suốt tuyến",
    pricingTable: [
      { month: "Mùa Thu Vàng", dates: "Khởi hành hàng tuần", adult: "32.888.000", child: "29.600.000", infant: "9.800.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ TOKYO",
        meals: "Nghỉ đêm trên máy bay",
        activities: [
          { desc: "Quý khách tập trung tại Tân Sơn Nhất, làm thủ tục bay đêm đến sân bay Narita Tokyo." }
        ]
      },
      {
        day: 2,
        title: "TOKYO – CHÙA ASAKUSA – HOÀNG CUNG – ODAIBA",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3-4 sao Tokyo",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80",
        activities: [
          { desc: "Tham quan Chùa Asakusa Kannon và ngắm toàn cảnh Tokyo từ tháp Skytree.", highlight: true },
          { desc: "Chụp ảnh tại Quảng trường Hoàng Cung Tokyo nơi Thiên Hoàng sinh sống." },
          { desc: "Check-in Đảo nhân tạo Odaiba với Tượng Nữ thần Tự do và Cầu Cầu Vồng (Rainbow Bridge) lộng lẫy." }
        ]
      },
      {
        day: 3,
        title: "TOKYO – NÚI PHÚ SĨ – LÀNG CỔ OSHINO HAKKAI – NAGOYA",
        meals: "Ăn sáng, trưa, tối Onsen",
        hotel: "Khách sạn suối khoáng nóng",
        image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80",
        activities: [
          { desc: "Lên trạm số 5 Núi Phú Sĩ (tùy thời tiết) ngắm biển mây mùa thu bồng bềnh.", highlight: true },
          { desc: "Tham quan làng cổ Oshino Hakkai soi bóng nước thu phẳng lặng." },
          { desc: "Thưởng thức bữa tối truyền thống và tắm Onsen thư thái." }
        ]
      },
      {
        day: 4,
        title: "LÀNG CỔ SHIRAKAWA-GO – PHỐ CỔ TAKAYAMA",
        meals: "Ăn sáng, trưa thịt bò Hida, tối",
        hotel: "Khách sạn 3-4 sao Gifu / Kyoto",
        image: "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=800&q=80",
        activities: [
          { desc: "Khám phá Làng cổ tích Shirakawa-go với những mái nhà hình bàn tay chắp Gassho-zukuri giữa sắc phong đỏ rực.", highlight: true },
          { desc: "Dạo bước Phố cổ Takayama Sanmachi Suji bảo tồn nguyên vẹn kiến trúc thời Edo, thưởng thức món thịt bò Hida nướng thơm lừng.", highlight: true }
        ]
      },
      {
        day: 5,
        title: "CỐ ĐÔ KYOTO – GEISHA SHOW – CHÙA VÀNG – LÂU ĐÀI OSAKA",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3-4 sao Osaka",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
        activities: [
          { desc: "Thưởng thức màn trình diễn nghệ thuật Geisha Show truyền thống tinh hoa của cố đô Kyoto.", highlight: true },
          { desc: "Tham quan Chùa Vàng Kinkaku-ji nép mình bên những tán phong đỏ lộng lẫy." },
          { desc: "Đến Osaka chụp ảnh bên Lâu đài Osaka mùa thay lá vàng óng ả và shopping thả ga tại Shinsaibashi." }
        ]
      },
      {
        day: 6,
        title: "OSAKA KANSAI ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, ăn trên máy bay",
        activities: [
          { desc: "Đoàn ra sân bay Kansai đáp chuyến bay về lại Tân Sơn Nhất. Kết thúc tour Đón Thu Nhật Bản trọn vẹn kỷ niệm đẹp!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi thẳng theo đoàn của Vietjet Air kèm 20kg ký gửi + 7kg xách tay",
      "Khách sạn 3 - 4 sao tiện nghi chuẩn Nhật, 01 đêm trải nghiệm Onsen",
      "Các bữa ăn theo chương trình với thực đơn bò Hida, lẩu Sukiyaki, tempura",
      "Vé tham quan làng Shirakawa-go, Chùa Vàng, vé xem biểu diễn Geisha show",
      "Visa nhập cảnh Nhật Bản trọn gói",
      "Bảo hiểm du lịch quốc tế bồi thường đến 1 tỷ đồng"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng",
      "Tiền tip HDV và lái xe: 42 USD/khách",
      "Chi phí cá nhân ngoài hành trình"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng",
      "2 hình 4.5x4.5cm nền trắng",
      "Hồ sơ tài chính và công việc được Én Việt hướng dẫn chu đáo"
    ]
  },

  // ── 5. MÙA XUÂN NHẬT BẢN CUNG ĐƯỜNG VÀNG ──
  {
    id: "tour-jp-xuan",
    code: "EVG-JP-XUAN",
    title: "MÙA XUÂN NHẬT BẢN – CUNG ĐƯỜNG VÀNG",
    itinerary: "Tokyo - Núi Phú Sĩ - Nagoya - Kyoto - Osaka",
    duration: "06 Ngày 05 Đêm",
    durationDays: 6,
    airline: "Vietnam Airlines 4★",
    price: 42888000,
    priceFormatted: "42.888.000 VNĐ",
    highlights: [
      "Trải nghiệm đi tàu cao tốc Shinkansen hiện đại bậc nhất",
      "Ngắm hoa mơ & hoa anh đào Sakura bung nở tại Lâu đài Osaka",
      "Chiêm bái Chùa Vàng Kinkaku-ji lấp lánh giữa sắc xuân",
      "Check-in Núi Phú Sĩ hùng vĩ quanh năm tuyết phủ",
      "Thưởng ngoạn Vườn hoa mùa xuân rực rỡ tại Yamanashi",
      "Bay cùng Hàng không Quốc gia Vietnam Airlines 4 sao"
    ],
    giftMeals: [
      "Hàng không Quốc gia 4 sao Vietnam Airlines phục vụ chu đáo",
      "Tặng vé trải nghiệm Tàu siêu tốc Shinkansen 'Bullet Train'",
      "Tặng 01 đêm thư giãn tắm suối nước khoáng Onsen tự nhiên",
      "Thưởng thức tiệc Cua Tuyết & Ẩm thực mùa xuân Nhật Bản",
      "Khách sạn tiêu chuẩn 3 - 4 sao quốc tế toàn chặng",
      "Bảo hiểm du lịch bồi thường đến 1.000.000.000 VNĐ"
    ],
    country: "Nhật Bản",
    region: "Tour Châu Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "nhat-ban", "chau-a"],
    badge: "Hoa Anh Đào Sakura",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&q=85",
    departure: "Mùa Xuân & Tết 2027",
    isFeatured: true,
    pdfFile: "MÙA XUÂN CUNG ĐƯOỜNG VÀNG NHẬT BẢN  6N5D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&q=85",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietnam Airlines 4★ (Chuyến bay thẳng thuận tiện)",
      outbound: "VN 300 SGN – NRT 00:30 – 07:45 (TP.HCM – Narita Tokyo)",
      returnFlight: "VN 301 KIX – SGN 10:30 – 14:15 (Kansai Osaka – TP.HCM)",
      baggage: "Hành lý ký gửi 2 kiện (mỗi kiện 23kg) + 12kg xách tay"
    },
    singleRoomSurcharge: "7.800.000 VNĐ / suốt tuyến",
    pricingTable: [
      { month: "Mùa Hoa Anh Đào / Tết", dates: "Khởi hành định kỳ", adult: "42.888.000", child: "38.600.000", infant: "12.800.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ TOKYO",
        meals: "Nghỉ đêm trên máy bay",
        activities: [
          { desc: "21:30 Quý khách tập trung tại Tân Sơn Nhất đáp chuyến bay VN 300 đi Narita Tokyo." },
          { desc: "Trải nghiệm dịch vụ 4 sao chu đáo của Vietnam Airlines." }
        ]
      },
      {
        day: 2,
        title: "TOKYO – CHÙA ASAKUSA – VƯỜN UENO NGẮM HOA ANH ĐÀO",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3-4 sao Tokyo",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80",
        activities: [
          { desc: "07:45 Đến Tokyo. Đoàn tham quan Chùa Asakusa Kannon và phố Nakamise rực rỡ.", highlight: true },
          { desc: "Dạo Công viên Ueno – thiên đường ngắm hoa anh đào lớn nhất Tokyo với hơn 1.000 gốc hoa nở rộ.", highlight: true },
          { desc: "Chụp ảnh tháp Skytree và tự do mua sắm tại Akihabara." }
        ]
      },
      {
        day: 3,
        title: "TOKYO – NÚI PHÚ SĨ – TRẢI NGHIỆM TÀU SHINKANSEN – TẮM ONSEN",
        meals: "Ăn sáng, trưa, tiệc Cua Tuyết tối",
        hotel: "Khách sạn suối khoáng Onsen",
        image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi Núi Phú Sĩ, viếng thăm Làng cổ Oshino Hakkai thanh tịnh.", highlight: true },
          { desc: "Trải nghiệm đi tàu cao tốc Shinkansen vận tốc lên đến 320km/h êm ái như bay.", highlight: true },
          { desc: "Tối nhận phòng khách sạn phong cách truyền thống, tắm khoáng nóng Onsen và ăn tiệc Cua Tuyết." }
        ]
      },
      {
        day: 4,
        title: "NÚI PHÚ SĨ – CỐ ĐÔ KYOTO – CHÙA VÀNG KINKAKU-JI",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3-4 sao Kyoto / Osaka",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
        activities: [
          { desc: "Đến Kyoto, viếng Chùa Vàng Kinkaku-ji rực rỡ soi bóng trên hồ gương giữa sắc xuân chan hòa.", highlight: true },
          { desc: "Dạo Đền Fushimi Inari Taisha với hàng ngàn cổng Torii màu đỏ son dẫn lên đỉnh núi linh thiêng." }
        ]
      },
      {
        day: 5,
        title: "KYOTO – THÀNH OSAKA HOA ANH ĐÀO – SHINSAIBASHI",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3-4 sao Osaka",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
        activities: [
          { desc: "Tham quan Lâu đài Osaka mùa hoa nở, ngắm hoa mơ và hoa anh đào Sakura tuyệt mỹ bên hào nước cổ.", highlight: true },
          { desc: "Tự do mua sắm tại Shinsaibashi và thưởng thức món Takoyaki, Okonomiyaki truyền thống." }
        ]
      },
      {
        day: 6,
        title: "OSAKA KANSAI ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, ăn trên máy bay",
        activities: [
          { desc: "Đoàn ra sân bay Kansai đáp chuyến bay VN 301 về Tân Sơn Nhất." },
          { desc: "14:15 Đến TP.HCM. Kết thúc chuyến du ngoạn Mùa Xuân Nhật Bản đầy kỷ niệm!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi Vietnam Airlines (2 kiện 23kg ký gửi + 12kg xách tay)",
      "Khách sạn tiêu chuẩn 3 - 4 sao tiện nghi, 01 đêm tắm Onsen thư giãn",
      "Vé trải nghiệm tàu cao tốc Shinkansen",
      "Các bữa ăn theo chương trình kèm đại tiệc Cua Tuyết thượng hạng",
      "Vé tham quan, visa nhập cảnh Nhật Bản trọn gói",
      "Bảo hiểm du lịch quốc tế bồi thường đến 1 tỷ đồng"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng",
      "Tiền tip HDV và lái xe: 42 USD/khách",
      "Chi phí phòng đơn và chi tiêu cá nhân ngoài tour"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng",
      "2 hình 4.5 x 4.5 cm nền trắng",
      "Hồ sơ tài chính và công việc được chuyên viên Én Việt hỗ trợ hoàn thiện"
    ]
  },

  // ── 6. DU LỊCH DUBAI – ABU DHABI ──
  {
    id: "tour-dubai-emirates",
    code: "EVG-DXB-EK",
    title: "DU LỊCH DUBAI – ABU DHABI: XỨ SỞ NGHÌN LẺ MỘT ĐÊM",
    itinerary: "Dubai - Abu Dhabi - Sa Mạc Safari - Đảo Cọ Palm Jumeirah",
    duration: "05 Ngày 04 Đêm",
    durationDays: 5,
    airline: "Emirates 5★",
    price: 32990000,
    priceFormatted: "32.990.000 VNĐ",
    highlights: [
      "Chiêm ngưỡng Tháp Burj Khalifa cao nhất thế giới (828m)",
      "Trải nghiệm đi xe Land Cruiser vượt cồn cát Sa mạc Safari & Cưỡi lạc đà",
      "Thưởng thức tiệc nướng BBQ giữa sa mạc và xem múa bụng Belly Dance",
      "Viếng Đại Thánh đường Hồi giáo Sheikh Zayed nguy nga bậc nhất thế giới",
      "Tham quan Khách sạn Emirates Palace 7 sao dát 40 tấn vàng rực rỡ",
      "Đi tàu điện Monorail trên cao ngắm toàn cảnh Đảo Cọ Palm Jumeirah"
    ],
    giftMeals: [
      "Bay cùng Hãng Hàng Không 5 Sao Emirates danh tiếng hàng đầu thế giới",
      "Lưu trú 4 đêm tại Khách sạn 5 sao cao cấp trung tâm Dubai",
      "Tặng 01 bữa buffet tối thịnh soạn tại khách sạn 5 sao sang trọng",
      "Tặng trải nghiệm tiệc nướng BBQ sa mạc Safari và múa lửa hoành tráng",
      "Tặng vé tàu điện trên cao Monorail ngắm Đảo Cọ Palm Jumeirah",
      "Tặng vé taxi nước truyền thống Abra trên vịnh Dubai Creek",
      "Bảo hiểm du lịch quốc tế với hạn mức bảo vệ lên đến 50.000 USD/khách"
    ],
    country: "Dubai - UAE",
    region: "Tour Châu Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "dubai", "chau-a"],
    badge: "Đẳng Cấp 5 Sao",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000&q=85",
    departure: "Khởi hành hàng tuần",
    isFeatured: true,
    pdfFile: "EVG - THT DUBAI 5N4D.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000&q=85",
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80"
    ],
    flightInfo: {
      airline: "Emirates 5★ (Hàng không 5 sao tốt nhất Trung Đông)",
      outbound: "EK 393 SGN – DXB 23:55 – 04:00* (TP.HCM – Dubai)",
      returnFlight: "EK 392 DXB – SGN 09:35 – 19:35 (Dubai – TP.HCM)",
      baggage: "Hành lý ký gửi 30kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "7.900.000 VNĐ / suốt tuyến",
    pricingTable: [
      { month: "Khởi hành hàng tuần", dates: "Thứ 4, Thứ 6", adult: "32.990.000", child: "29.690.000", infant: "9.890.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ DUBAI",
        meals: "Ăn nhẹ và nghỉ đêm trên máy bay",
        activities: [
          { desc: "20:30 Hướng dẫn viên Én Việt đón quý khách tại Tân Sơn Nhất, làm thủ tục bay đi Dubai trên chuyến bay 5 sao Emirates EK 393." },
          { desc: "Tận hưởng tiện nghi giải trí không giới hạn Ice System và bữa ăn nhẹ trên máy bay." }
        ]
      },
      {
        day: 2,
        title: "DUBAI CỔ KÍNH – TAXI NƯỚC ABRA – CHỢ VÀNG & GIA VỊ – SA MẠC SAFARI",
        meals: "Ăn sáng buffet, trưa, tiệc BBQ sa mạc tối",
        hotel: "Khách sạn 5 sao Dubai",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        activities: [
          { desc: "04:00 Đến Dubai. Đoàn dùng điểm tâm sáng buffet tại khách sạn 5 sao." },
          { desc: "Trải nghiệm đi Taxi nước truyền thống (Abra water taxi) qua lạch biển Dubai Creek ngắm phố cổ Bastakiya.", highlight: true },
          { desc: "Khám phá Chợ Vàng (Gold Souk) và Chợ Gia Vị (Spice Souk) choáng ngợp với hàng ngàn món trang sức vàng rực rỡ." },
          { desc: "15:30 Đoàn lên xe chuyên dụng Land Cruiser 4x4 chinh phục những cồn cát nhấp nhô của Sa mạc Safari. Cưỡi lạc đà, vẽ henna, thưởng thức tiệc nướng BBQ và thưởng thức các điệu múa Belly Dance quyến rũ.", highlight: true }
        ]
      },
      {
        day: 3,
        title: "DUBAI HIỆN ĐẠI – ĐẢO CỌ PALM JUMEIRAH – KHÁCH SẠN CÁNH BUỒM BURJ AL ARAB",
        meals: "Ăn sáng, trưa, tối buffet 5 sao",
        hotel: "Khách sạn 5 sao Dubai",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80",
        activities: [
          { desc: "Đi tàu điện trên cao Monorail chiêm ngưỡng toàn cảnh Đảo Cọ Palm Jumeirah – kỳ quan nhân tạo thứ 8 của nhân loại.", highlight: true },
          { desc: "Chụp ảnh trước Khách sạn 7 sao Burj Al Arab hình cánh buồm no gió kiêu hãnh bên bờ biển Jumeirah." },
          { desc: "Dạo chơi Khu phố đi bộ vịnh du thuyền Dubai Marina sang trọng bậc nhất." }
        ]
      },
      {
        day: 4,
        title: "THỦ ĐÔ ABU DHABI – ĐẠI THÁNH ĐƯỜNG SHEIKH ZAYED – EMIRATES PALACE – THÁP BURJ KHALIFA",
        meals: "Ăn sáng, trưa BBQ Hàn Quốc, tối",
        hotel: "Khách sạn 5 sao Dubai",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi thủ đô Abu Dhabi. Chiêm bái Đại Thánh đường Sheikh Zayed – thánh đường lộng lẫy bằng đá cẩm thạch trắng dát vàng.", highlight: true },
          { desc: "Chụp ảnh tại Cung điện hoàng gia Emirates Palace 7 sao dát 40 tấn vàng ròng." },
          { desc: "Trở về Dubai, check-in dưới chân Tháp Burj Khalifa cao nhất thế giới (828m) và chiêm ngưỡng màn trình diễn nhạc nước Water Fountain Show ngoạn mục tại Dubai Mall.", highlight: true }
        ]
      },
      {
        day: 5,
        title: "DUBAI ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, ăn trên máy bay",
        activities: [
          { desc: "05:00 Đoàn làm thủ tục trả phòng, xe đưa quý khách ra sân bay Dubai đáp chuyến bay EK 392 về lại TP.HCM." },
          { desc: "19:35 Đến sân bay Tân Sơn Nhất. Kết thúc tour Dubai vương giả ngập tràn trải nghiệm đẳng cấp!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi SGN – DXB – SGN cùng Hãng Hàng Không 5 Sao Emirates (30kg ký gửi + 7kg xách tay)",
      "4 đêm lưu trú tại Khách sạn 5 sao trung tâm Dubai tiện nghi",
      "Các bữa ăn thượng hạng theo chương trình: Buffet 5 sao, Tiệc nướng BBQ sa mạc Safari, BBQ Hàn Quốc tại Abu Dhabi",
      "Xe Land Cruiser 4x4 vượt sa mạc Safari, vé tàu điện Monorail Đảo Cọ, vé taxi nước Abra",
      "Visa nhập cảnh UAE trọn gói",
      "Bảo hiểm du lịch quốc tế hạn mức 50.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Tiền tip HDV và tài xế: 35 USD/khách (ngày lễ/Tết: 50 USD/khách)",
      "Phụ thu phòng đơn: 7.900.000 VNĐ",
      "Vé lên đài quan sát tầng 124 tháp Burj Khalifa (tự túc theo nhu cầu)"
    ],
    visaRequirements: [
      "Bản scan màu rõ nét trang thông tin hộ chiếu còn hạn trên 6 tháng tính từ ngày về",
      "01 file ảnh thẻ 4x6 phông trắng mới nhất",
      "Thủ tục visa điện tử Dubai nhanh chóng, chuyên nghiệp"
    ]
  },

  // ── 7. KHÁM PHÁ VƯƠNG QUỐC HẠNH PHÚC BHUTAN ──
  {
    id: "tour-bhutan",
    code: "EVG-BHU-01",
    title: "KHÁM PHÁ VƯƠNG QUỐC HẠNH PHÚC BHUTAN (PARO - THIMPHU - PUNAKHA)",
    itinerary: "Paro - Thimphu - Đèo Dochula - Punakha - Tu Viện Tiger’s Nest",
    duration: "05 Ngày 04 Đêm",
    durationDays: 5,
    airline: "Bhutan Airlines (Bay thẳng)",
    price: 35000000,
    priceFormatted: "35.000.000 VNĐ",
    highlights: [
      "Chinh phục Tu viện huyền thoại Tiger’s Nest (Paro Taktsang) vách đá 3.200m",
      "Chiêm ngưỡng Pháo đài Punakha Dzong tráng lệ bên ngã ba sông mẹ và sông cha",
      "Vượt Đèo Dochula 3.100m ngắm 108 bảo tháp linh thiêng giữa rặng Himalaya",
      "Viếng Tượng Phật Dordenma bằng đồng mạ vàng khổng lồ cao 51,5m",
      "Trải nghiệm khoác lên mình trang phục truyền thống Gho & Kira",
      "Tham gia nghi thức thắp đèn bơ cầu an lạc tại ngôi chùa cổ nghìn năm"
    ],
    giftMeals: [
      "Chuyến bay thẳng thuê chuyến tiện nghi cùng Bhutan Airlines",
      "Thị thực nhập cảnh Bhutan trọn gói (Bao gồm phí visa & phí du lịch bền vững SDF)",
      "Tặng trải nghiệm mặc trang phục truyền thống Gho & Kira chụp ảnh kỷ niệm",
      "Tặng nghi thức thắp đèn bơ cầu bình an và may mắn",
      "Khách sạn tiêu chuẩn 3 sao mang đậm nét văn hóa kiến trúc Dzong",
      "Thưởng thức ẩm thực Bhutan độc đáo kết hợp món Á dễ ăn",
      "Bảo hiểm du lịch quốc tế suốt tuyến"
    ],
    country: "Bhutan",
    region: "Tour Châu Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "bhutan", "chau-a"],
    badge: "Vương Quốc Hạnh Phúc",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1000&q=85",
    departure: "Khởi hành định kỳ hàng tháng",
    isFeatured: true,
    pdfFile: "EVG -SB BHUTAN 5N4D.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1000&q=85",
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80"
    ],
    flightInfo: {
      airline: "Bhutan Airlines (Bay thẳng thuê chuyến)",
      outbound: "B3 775 SGN – PBH 06:00 – 10:15 (Tân Sơn Nhất – Sân bay Paro)",
      returnFlight: "B3 776 PBH – SGN 16:45 – 23:05 (Sân bay Paro – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 20kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "4.000.000 VNĐ / suốt tuyến",
    pricingTable: [
      { month: "Khởi hành định kỳ", dates: "Hàng tháng", adult: "35.000.000", child: "31.500.000", infant: "10.500.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ PARO – THỦ ĐÔ THIMPHU",
        meals: "Ăn sáng trên máy bay, trưa, tối",
        hotel: "Khách sạn tiêu chuẩn tại Thimphu",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
        activities: [
          { desc: "03:30 Tập trung tại Tân Sơn Nhất đáp chuyến bay thẳng B3 775 đến sân bay Paro – một trong những sân bay đẹp nhất thế giới giữa dãy Himalaya." },
          { desc: "Di chuyển về thủ đô Thimphu. Viếng Tượng Phật Dordenma khổng lồ cao 51,5m chứa 125.000 tượng Phật nhỏ bên trong.", highlight: true },
          { desc: "Tham quan Tháp tưởng niệm Quốc gia Chorten và ngắm hoàng hôn buông xuống Tashichho Dzong oai vệ." }
        ]
      },
      {
        day: 2,
        title: "THIMPHU – ĐÈO DOCHULA 108 BẢO THÁP – CỐ ĐÔ PUNAKHA",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn tiêu chuẩn tại Punakha",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80",
        activities: [
          { desc: "Vượt Đèo Dochula ở độ cao 3.100m, chiêm ngưỡng quần thể 108 bảo tháp Druk Wangyal Chortens nhìn ra rặng tuyết sơn Himalaya.", highlight: true },
          { desc: "Đến thung lũng cố đô Punakha, viếng Pháo đài Punakha Dzong ('Cung điện Đại Lạc') – kiệt tác kiến trúc cổ kính tráng lệ nhất Bhutan.", highlight: true },
          { desc: "Bách bộ qua chiếc cầu treo Punakha dài nhất Bhutan bắc qua dòng sông Mo Chhu trong vắt." }
        ]
      },
      {
        day: 3,
        title: "PUNAKHA – THUNG LŨNG PARO – NGHI THỨC THẮP ĐÈN BƠ",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn tiêu chuẩn tại Paro",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
        activities: [
          { desc: "Quay trở về thung lũng Paro xinh đẹp. Tham quan Bảo tàng Quốc gia Ta Dzong và Pháo đài Rinpung Dzong." },
          { desc: "Trải nghiệm khoác trang phục truyền thống Gho (nam) và Kira (nữ), thử sức bắn cung tên truyền thống.", highlight: true },
          { desc: "Tham gia nghi thức thắp đèn bơ cầu chúc an yên, may mắn và hạnh phúc tại ngôi đền Simtokha Dzong linh thiêng.", highlight: true }
        ]
      },
      {
        day: 4,
        title: "CHINH PHỤC TU VIỆN TIGER’S NEST (PARO TAKTSANG)",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn tiêu chuẩn tại Paro",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
        activities: [
          { desc: "Chinh phục Tu viện huyền thoại Tiger’s Nest tọa lạc cheo leo trên vách núi đá dựng đứng 3.200m giữa ngàn mây trắng – nơi Đức Liên Hoa Sinh từng thiền định.", highlight: true },
          { desc: "Tận hưởng không gian thanh tịnh linh thiêng và năng lượng an lạc màu nhiệm của mảnh đất Phật giáo Kim Cương Thừa." }
        ]
      },
      {
        day: 5,
        title: "PARO ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, trưa",
        activities: [
          { desc: "Viếng Ngôi đền cổ Kyichu Lhakhang lâu đời nhất Bhutan được xây dựng từ thế kỷ thứ 7." },
          { desc: "16:45 Đáp chuyến bay thẳng B3 776 về TP.HCM. 23:05 Đến Tân Sơn Nhất, hoàn tất chuyến hành hương khám phá Vương quốc Hạnh phúc an lành!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi chặng thẳng TP.HCM – Paro – TP.HCM của Bhutan Airlines",
      "Thị thực nhập cảnh Bhutan trọn gói (Bao gồm phí visa & phí du lịch bền vững SDF)",
      "Khách sạn tiêu chuẩn 3 sao tiện nghi, mang đậm phong vị kiến trúc Bhutan",
      "Tất cả bữa ăn theo lịch trình + xe du lịch đưa đón suốt tuyến",
      "Vé tham quan, trải nghiệm trang phục truyền thống Gho & Kira, nghi thức thắp đèn bơ",
      "Hướng dẫn viên chuyên nghiệp và bảo hiểm du lịch quốc tế"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính cả ngày về",
      "Tiền tip tài xế và HDV địa phương: 8 USD/khách/ngày",
      "Phụ thu phòng đơn: 4.000.000 VNĐ",
      "Chi phí cá nhân ngoài chương trình"
    ],
    visaRequirements: [
      "Hộ chiếu gốc chụp rõ nét trang thông tin còn hạn trên 6 tháng",
      "01 ảnh 4x6 phông trắng mới nhất",
      "Thủ tục cấp visa và giấy phép du lịch do Én Việt thực hiện trọn gói"
    ]
  },

  // ── 8. HÀNH TRÌNH VÀNG ĐẾN THỔ NHĨ KỲ ──
  {
    id: "tour-15-tho-nhi-ky",
    code: "EVG-TUR-TK",
    title: "KHÁM PHÁ THỔ NHĨ KỲ: ISTANBUL – BURSA – KUSADASI – PAMUKKALE – CAPPADOCIA",
    itinerary: "Istanbul - Bursa - Kusadasi - Ephesus - Pamukkale - Cappadocia",
    duration: "08 Ngày 07 Đêm",
    durationDays: 8,
    airline: "Turkish Airlines 5★",
    price: 48800000,
    priceFormatted: "48.800.000 VNĐ",
    highlights: [
      "Trải nghiệm bay khinh khí cầu ngắm bình minh thung lũng Cappadocia",
      "Chiêm ngưỡng Lâu đài Bông Pamukkale – kỳ quan đá vôi trắng muốt thứ 8",
      "Khám phá Thành cổ Ephesus 3.000 năm tuổi & Thư viện Celsus La Mã",
      "Du thuyền dạo quanh eo biển Bosphorus ranh giới nối liền 2 bờ Á – Âu",
      "Viếng Thánh đường Blue Mosque & Thánh đường Hagia Sophia 1.500 năm",
      "Khách sạn 4-5 sao cao cấp, đặc biệt tặng 01 đêm Khách sạn Hang Đá độc đáo"
    ],
    giftMeals: [
      "Hàng không 5 sao Turkish Airlines (Bay thẳng kèm chặng bay nội địa tiện nghi)",
      "Lưu trú khách sạn 4 - 5 sao suốt hành trình, 01 đêm khách sạn hang đá Cappadocia",
      "Thưởng thức ẩm thực Thổ Nhĩ Kỳ: Thịt nướng Kebab, Bánh mì kẹp cá Bosphorus, Trà táo",
      "Tặng vé du thuyền ngắm hoàng hôn trên eo biển Bosphorus huyền bí",
      "Tặng vé tham quan Làng cổ Cumalikizik 700 năm tuổi và Làng cổ Şirince",
      "Bảo hiểm du lịch quốc tế hạn mức bồi thường lên đến 1 tỷ đồng"
    ],
    country: "Thổ Nhĩ Kỳ",
    region: "Tour Châu Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "tho-nhi-ky", "chau-a"],
    badge: "Khinh Khí Cầu Á - Âu",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&q=85",
    departure: "Khởi hành hàng tháng",
    isFeatured: true,
    pdfFile: "ISTANBUL - BURSA - KUSADASI - PAMUKKALE - CAPPADOCIA 8N7D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&q=85",
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80"
    ],
    flightInfo: {
      airline: "Turkish Airlines 5★ (Bay thẳng máy bay hiện đại)",
      outbound: "TK 251 SGN – IST 06:35 – 13:50 (TP.HCM – Istanbul)",
      returnFlight: "TK 2005 NAV – IST 11:30 – 13:05 // TK 250 IST – SGN 15:00 – 04:55*",
      baggage: "Hành lý ký gửi 30kg + 08kg hành lý xách tay"
    },
    singleRoomSurcharge: "7.000.000 VNĐ / suốt tuyến",
    pricingTable: [
      { month: "Khởi hành định kỳ", dates: "Hàng tháng", adult: "48.800.000", child: "43.920.000", infant: "14.640.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ ISTANBUL – DU THUYỀN BOSPHORUS",
        meals: "Ăn trưa, tối trên máy bay",
        hotel: "Khách sạn 4-5 sao Istanbul",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
        activities: [
          { desc: "03:00 Tập trung tại Tân Sơn Nhất đáp chuyến bay thẳng TK 251 (06:35 – 13:50) đi Istanbul." },
          { desc: "Tham quan Thánh đường Blue Mosque di sản UNESCO và Quảng trường Hippodrome La Mã.", highlight: true },
          { desc: "Lên du thuyền Bosphorus lướt sóng qua eo biển huyền thoại chia cắt hai lục địa Á – Âu ngắm hoàng hôn rực rỡ.", highlight: true }
        ]
      },
      {
        day: 2,
        title: "ISTANBUL – CỐ ĐÔ BURSA – LÀNG CỔ CUMALIKIZIK",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4-5 sao Bursa",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
        activities: [
          { desc: "Khám phá phố cổ Balat đầy màu sắc nghệ thuật." },
          { desc: "Di chuyển đến cố đô Bursa, thăm Làng cổ Cumalikizik 700 năm tuổi của đế chế Ottoman và Chợ tơ lụa Koza Han.", highlight: true }
        ]
      },
      {
        day: 3,
        title: "BURSA – LÀNG CỔ ŞIRINCE – KUSADASI",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4-5 sao Kusadasi",
        image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi Kusadasi. Ghé thăm Làng cổ tích Şirince thơ mộng với những ngôi nhà đá mái ngói đỏ và nếm thử rượu vang trái cây đặc sản.", highlight: true }
        ]
      },
      {
        day: 4,
        title: "KUSADASI – THÀNH CỔ EPHESUS – LÂU ĐÀI BÔNG PAMUKKALE",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4-5 sao Pamukkale",
        image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80",
        activities: [
          { desc: "Khám phá Thành cổ Ephesus 3.000 năm tuổi với Thư viện Celsus tráng lệ và Nhà hát ngoài trời La Mã khổng lồ.", highlight: true },
          { desc: "Đến Pamukkale, chiêm ngưỡng Lâu đài Bông tuyết trắng kỳ ảo với suối khoáng nóng lộ thiên ngàn năm chữa lành.", highlight: true }
        ]
      },
      {
        day: 5,
        title: "PAMUKKALE – KONYA – THUNG LŨNG CỔ TÍCH CAPPADOCIA",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn Hang Đá độc đáo Cappadocia",
        image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80",
        activities: [
          { desc: "Băng qua cao nguyên Anatolia, ghé thăm trạm dừng chân Con Đường Tơ Lụa cổ xưa Sultanhani Caravanserai." },
          { desc: "Đến Cappadocia, nhận phòng Khách sạn Hang Đá độc nhất vô nhị được khoét sâu trong lòng núi lửa.", highlight: true }
        ]
      },
      {
        day: 6,
        title: "CAPPADOCIA – BAY KHINH KHÍ CẦU – THÀNH PHỐ NGẦM KAYASEHIR",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn Hang Đá Cappadocia",
        image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80",
        activities: [
          { desc: "Sáng sớm: Cơ hội trải nghiệm bay Khinh Khí Cầu ngắm bình minh kỳ ảo trên thung lũng đá Cappadocia (chi phí tự túc).", highlight: true },
          { desc: "Khám phá Thành phố ngầm Kayasehir 18 tầng kỳ vĩ dưới lòng đất thời kỳ Byzantine cổ xưa.", highlight: true },
          { desc: "Chiêm ngưỡng Thung lũng Thầy tu Pasabag với những cột đá ống khói thần tiên kỳ lạ." }
        ]
      },
      {
        day: 7,
        title: "CAPPADOCIA ✈ ISTANBUL ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, ăn trên máy bay",
        activities: [
          { desc: "Đoàn ra sân bay đáp chuyến bay nội địa về Istanbul, nối tiếp chuyến bay TK 250 về lại TP.HCM." }
        ]
      },
      {
        day: 8,
        title: "TP. HỒ CHÍ MINH",
        meals: "Ăn trên máy bay",
        activities: [
          { desc: "04:55 Đến sân bay Tân Sơn Nhất. Hoàn tất chuyến du ngoạn Thổ Nhĩ Kỳ trọn vẹn và đẳng cấp!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi quốc tế và nội địa Hàng Không 5 Sao Turkish Airlines",
      "Khách sạn tiêu chuẩn 4-5 sao toàn chặng, 01 đêm khách sạn Hang Đá Cappadocia",
      "Phí visa nhập cảnh Thổ Nhĩ Kỳ",
      "Tất cả bữa ăn, vé tham quan, xe vận chuyển đời mới",
      "Hướng dẫn viên chuyên nghiệp và bảo hiểm du lịch quốc tế bồi thường đến 1 tỷ đồng"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Phụ thu phòng đơn: 7.000.000 VNĐ",
      "Tiền tip HDV và tài xế: 64 USD/khách (ngày Lễ/Tết: 70 USD/khách)",
      "Vé bay khinh khí cầu Cappadocia (tự túc theo nhu cầu)"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng",
      "File mềm ảnh 4x6 phông nền trắng mới chụp",
      "Miễn visa điện tử thuận tiện cho khách có visa Schengen/Mỹ/Anh/Ireland còn hạn"
    ]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. DANH SÁCH TOUR CHÂU ÂU (NAM ÂU, ĐÔNG ÂU, TÂY ÂU)
// ─────────────────────────────────────────────────────────────────────────────

export const TOUR_CHAU_AU_DATASET: TourItem[] = [
  // ── TOUR 9: HÀNH TRÌNH KHÁM PHÁ NAM ÂU: MAROC – TÂY BAN NHA - BỒ ĐÀO NHA ──
  {
    id: "tour-eu-nam-au",
    code: "EVG-EU-NAMAU",
    title: "HÀNH TRÌNH KHÁM PHÁ NAM ÂU: MAROC – TÂY BAN NHA - BỒ ĐÀO NHA",
    itinerary: "Casablanca - Rabat - Meknes - Fes - Chefchaouen - Tangier - Seville - Lisbon - Cabo da Roca - Caceres - Toledo - Madrid - Zaragoza - Barcelona",
    duration: "13 Ngày 12 Đêm",
    durationDays: 13,
    airline: "Emirates Airlines 5★",
    price: 109900000,
    priceFormatted: "109.900.000 VNĐ",
    highlights: [
      "Một hành trình, 2 châu lục: Xuyên lục địa từ Châu Âu sang Châu Phi qua bờ biển Địa Trung Hải",
      "Vượt phà qua eo biển Gibraltar nối liền Đại Tây Dương & Địa Trung Hải ngắm dãy núi Atlas",
      "Maroc: Casablanca kiều diễm, Đại Thánh đường Hassan II, Thành phố xanh cổ tích Chefchaouen, Chợ da Fes",
      "Tây Ban Nha: Seville, Cung điện Hoàng gia Madrid, Cố đô Toledo 2000 năm, Thánh đường Sagrada Familia & Show Flamenco",
      "Bồ Đào Nha: Thủ đô Lisbon, Mũi Cabo da Roca điểm cực tây lục địa Châu Âu 'Nơi đất kết thúc và biển bắt đầu', Tháp Belem"
    ],
    giftMeals: [
      "Hàng không 5 sao đẳng cấp Emirates (Hành lý 25kg ký gửi + 7kg xách tay)",
      "Khách sạn 4 sao tiêu chuẩn Châu Âu toàn chặng (2 người/phòng)",
      "TẶNG vé phà vượt eo biển Gibraltar nối liền hai đại dương và hai lục địa",
      "TẶNG vé tham quan Cung điện Hoàng gia Royal Palace & Nhà thờ Sagrada Familia",
      "TẶNG vé vào tham quan bên trong Đại Thánh đường Hassan II Casablanca",
      "TẶNG thưởng thức đêm biểu diễn nghệ thuật khiêu vũ Flamenco cuồng nhiệt",
      "Ăn tiêu chuẩn 3 bữa/ngày kết hợp thực đơn Âu, Á, Việt Nam (16€ - 20€/bữa)",
      "Bảo hiểm du lịch toàn cầu với hạn mức bồi thường tối đa 50.000 USD/vụ"
    ],
    country: "Nam Âu (Tây Ban Nha - Bồ Đào Nha - Maroc)",
    region: "Tour Châu Âu",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "chau-au", "tay-ban-nha", "bo-dao-nha", "maroc"],
    badge: "Liên Lục Địa Âu - Phi",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77dfded?w=1000&q=85",
    departure: "20/10 – 01/11",
    isFeatured: true,
    pdfFile: "HANH TRINH KHAM PHA NAM AU MAROC - TAY BAN NHA - BO DAO NHA 13N12D.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1583422409516-2895a77dfded?w=1000&q=85",
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80"
    ],
    flightInfo: {
      airline: "Emirates Airlines 5★",
      outbound: "EK 393 SGN – DXB 23:50 – 03:45 // EK 751 DXB – CMN 07:30 – 12:40 (TP.HCM – Dubai – Casablanca)",
      returnFlight: "EK 186 BCN – DXB 15:30 – 01:00 // EK 364 DXB – SGN 04:00 – 13:55 (Barcelona – Dubai – TP.HCM)",
      baggage: "Hành lý ký gửi 25kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "19.900.000 VNĐ / khách",
    pricingTable: [
      { month: "Khởi hành đợt 1", dates: "20/10 – 01/11", adult: "109.900.000", child: "98.910.000", infant: "38.465.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ CASABLANCA (MAROC)",
        meals: "Ăn trên máy bay",
        activities: [
          { desc: "20:00 Quý khách tập trung tại Tân Sơn Nhất, làm thủ tục chuyến bay EK393 của hãng Emirates đi Casablanca (quá cảnh Dubai)." },
          { desc: "Nghỉ đêm và thưởng thức dịch vụ 5 sao trên máy bay." }
        ]
      },
      {
        day: 2,
        title: "CASABLANCA – THÀNH PHỐ BÊN BỜ ĐẠI TÂY DƯƠNG",
        meals: "Ăn tối",
        hotel: "Khách sạn 4 sao Casablanca",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
        activities: [
          { desc: "12:40 Đoàn hạ cánh tại sân bay Casablanca, làm thủ tục nhập cảnh Maroc." },
          { desc: "13:40 Tham quan thành phố Casablanca – 'Nàng tiên cá bên bờ Đại Tây Dương' gắn liền với bản tình ca bất hủ.", highlight: true },
          { desc: "Viếng Đại Thánh đường Hassan II (có vé vào trong) – thánh đường Hồi giáo lớn thứ 2 thế giới với tháp minaret cao 210m vươn ra đại dương.", highlight: true },
          { desc: "Check-in Quảng trường Mohammed V kiến trúc tân Moorish, Chợ trung tâm Marche Central và thư giãn tại quán Rick's Café nổi tiếng." }
        ]
      },
      {
        day: 3,
        title: "CASABLANCA – THỦ ĐÔ RABAT – MEKNES",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Meknes",
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi thủ đô Rabat (88km) – Di sản Thế giới UNESCO.", highlight: true },
          { desc: "Chiêm ngưỡng Tháp Hassan xây bằng sa thạch đỏ, viếng Lăng mộ vua Mohammed V – linh hồn dân tộc Maroc.", highlight: true },
          { desc: "Chiều đến thành phố hoàng gia Meknes, chụp ảnh Cổng thành Bab Mansour lộng lẫy và Quảng trường Place El Hedim sôi động." }
        ]
      },
      {
        day: 4,
        title: "MEKNES – TRÁI TIM VĂN HÓA FES – THÀNH PHỐ XANH CHEFCHAOUEN",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Chefchaouen",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
        activities: [
          { desc: "Đến Fes – 'trái tim văn hóa' của Maroc. Tham quan Đại học Al-Qarawiyyin cổ nhất thế giới.", highlight: true },
          { desc: "Mục kích Xưởng thuộc da Chouara Tannery với hàng trăm bể nhuộm màu rực rỡ từ thảo mộc thiên nhiên có từ thời trung cổ.", highlight: true },
          { desc: "Chiều di chuyển đến Chefchaouen – thành phố miền núi thơ mộng với những ngôi nhà sơn sắc xanh biếc huyền ảo như cổ tích." }
        ]
      },
      {
        day: 5,
        title: "CHEFCHAOUEN – TANGIER ⛴ PHÀ VƯỢT EO BIỂN GIBRALTAR – TARIFA – SEVILLE",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Seville",
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
        activities: [
          { desc: "Dạo bước chụp ảnh mê đắm giữa những con ngõ xanh biếc của Medina Chefchaouen.", highlight: true },
          { desc: "10:00 Đến cảng Tangier, lên chuyến phà (ferries) vượt qua Eo biển Gibraltar sang Tarifa (Tây Ban Nha) – khoảnh khắc giao thoa kỳ diệu giữa Châu Phi và Châu Âu.", highlight: true },
          { desc: "Đến Seville – viên ngọc quý của vùng Andalusia, nhận phòng khách sạn và thưởng thức ẩm thực Tây Ban Nha." }
        ]
      },
      {
        day: 6,
        title: "SEVILLE – THỦ ĐÔ LISBON (BỒ ĐÀO NHA)",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Lisbon",
        image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80",
        activities: [
          { desc: "Khám phá Quảng trường Plaza de España lộng lẫy và Nhà thờ Seville lớn nhất thế giới cùng tháp chuông Giralda.", highlight: true },
          { desc: "Khởi hành đi Lisbon – thủ đô duyên dáng của Bồ Đào Nha tọa lạc bên bờ Đại Tây Dương bao la.", highlight: true }
        ]
      },
      {
        day: 7,
        title: "LISBON – MŨI CABO DA ROCA (ĐIỂM CỰC TÂY CHÂU ÂU) – THÁP BELEM",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Lisbon",
        image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80",
        activities: [
          { desc: "Đến Cabo da Roca – điểm cực tây của toàn lục địa Châu Âu, nơi khắc ghi câu nói huyền thoại: 'Nơi trái đất kết thúc và biển bắt đầu'.", highlight: true },
          { desc: "Chụp ảnh Tháp Belem huy hoàng bên bờ sông Tagus và Đài kỷ niệm thám hiểm Discovery Monument.", highlight: true },
          { desc: "Dạo khu phố cổ Alfama, trải nghiệm chuyến xe điện số 28 màu vàng cổ kính đặc trưng." }
        ]
      },
      {
        day: 8,
        title: "LISBON – DI SẢN THẾ GIỚI CACERES (TÂY BAN NHA)",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Caceres",
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
        activities: [
          { desc: "Quay trở lại đất nước Tây Ban Nha đến thành phố cổ Caceres được UNESCO công nhận.", highlight: true },
          { desc: "Bách bộ qua những con phố lát đá thời Trung Cổ, tường thành La Mã và Nhà thờ Catedral de Caceres thế kỷ 16." }
        ]
      },
      {
        day: 9,
        title: "CACERES – CỐ ĐÔ TOLEDO 2000 NĂM – THỦ ĐÔ MADRID",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Madrid",
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
        activities: [
          { desc: "Đến Toledo – 'trái tim và linh hồn của Tây Ban Nha' với hơn 2.000 năm lịch sử kiệt xuất.", highlight: true },
          { desc: "Chiêm ngưỡng Nhà thờ chính tòa Toledo đỉnh cao kiến trúc Gothic Tây Ban Nha.", highlight: true },
          { desc: "Chiều đến thủ đô Madrid sôi động. Check-in Quảng trường Puerta del Sol (Cổng Mặt Trời) và Quảng trường Plaza Mayor." }
        ]
      },
      {
        day: 10,
        title: "MADRID – CUNG ĐIỆN HOÀNG GIA ROYAL PALACE – ZARAGOZA",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Zaragoza",
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
        activities: [
          { desc: "Tham quan Cung điện Hoàng gia Royal Palace (có vé vào trong) – một trong những cung điện hoàng gia lớn và tráng lệ nhất Châu Âu.", highlight: true },
          { desc: "Chụp ảnh tại Cổng Puerta de Alcala kiêu hãnh." },
          { desc: "Khởi hành đi thành phố cổ kính Zaragoza, dạo phố cổ Alfonso nhộn nhịp." }
        ]
      },
      {
        day: 11,
        title: "ZARAGOZA – BARCELONA – MUA SẮM EL CORTE INGLÉS – SHOW FLAMENCO",
        meals: "Ăn sáng, trưa, tối kèm Show Flamenco",
        hotel: "Khách sạn 4 sao Barcelona",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77dfded?w=800&q=80",
        activities: [
          { desc: "Viếng Vương Cung Thánh Đường Đức Mẹ Pilar đầu tiên trong lịch sử Công giáo.", highlight: true },
          { desc: "Đến Barcelona – thành phố quyến rũ nhất Địa Trung Hải. Tự do mua sắm hàng hiệu tại trung tâm El Corte Inglés.", highlight: true },
          { desc: "Tối thưởng thức bữa tối đặc sản và đắm say trong đêm Show diễn Flamenco bốc lửa đậm chất Tây Ban Nha.", highlight: true }
        ]
      },
      {
        day: 12,
        title: "BARCELONA – THÁNH ĐƯỜNG SAGRADA FAMILIA – CASA BATLLO ✈ TP.HCM",
        meals: "Ăn sáng",
        activities: [
          { desc: "Khám phá Tuyệt tác Vương cung Thánh đường Sagrada Familia (có vé vào trong) của thiên tài kiến trúc Antoni Gaudí.", highlight: true },
          { desc: "Chiêm ngưỡng Casa Mila và Casa Batllo ('Ngôi nhà của những chiếc xương') độc đáo không một đường thẳng.", highlight: true },
          { desc: "Chụp ảnh bên ngoài Thánh địa bóng đá Camp Nou của CLB Barcelona." },
          { desc: "11:00 Xe đưa đoàn ra sân bay Barcelona đáp chuyến bay Emirates EK 186 về lại TP.HCM." }
        ]
      },
      {
        day: 13,
        title: "DUBAI ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn trên máy bay",
        activities: [
          { desc: "13:55 Đến sân bay Tân Sơn Nhất. Hoàn tất hành trình Nam Âu: Maroc - Tây Ban Nha - Bồ Đào Nha đẳng cấp và ngập tràn cảm xúc!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay quốc tế khứ hồi SGN – CASABLANCA // BARCELONA – SGN của Emirates 5★ (25kg ký gửi + 7kg xách tay)",
      "Phí visa Schengen và visa Maroc, bao gồm phí dịch thuật công chứng và thư mời",
      "Khách sạn 4 sao tiêu chuẩn Châu Âu suốt tuyến (2 người/phòng)",
      "Các bữa ăn tiêu chuẩn 3 bữa/ngày (Âu, Á, Việt Nam, đặc sản địa phương)",
      "Vé thắng cảnh vào các điểm: Cung điện Royal Palace, Thánh đường Sagrada Familia, Đại Thánh đường Hassan II",
      "Vé phà vượt eo biển Gibraltar nối hai đại dương",
      "Tặng đêm thưởng thức Show khiêu vũ Flamenco đặc sắc",
      "Bảo hiểm du lịch toàn cầu với hạn mức bồi thường tối đa 50.000 USD/người"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính đến ngày kết thúc tour",
      "Tiền tip HDV và lái xe: 8 EUR / khách / ngày (104 EUR / khách / tour)",
      "Phụ thu phòng đơn: 19.900.000 VNĐ / khách",
      "Chi phí cá nhân ngoài hành trình"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng có chữ ký",
      "2 ảnh 3.5x4.5cm nền trắng chụp mới nhất",
      "Hồ sơ công việc (Hợp đồng lao động hoặc Giấy phép kinh doanh)",
      "Sổ tiết kiệm và xác nhận số dư tài khoản ngân hàng từ 200 triệu trở lên",
      "Công ty Én Việt hỗ trợ hoàn thiện hồ sơ xin 2 visa (Schengen & Maroc) chu đáo"
    ]
  },

  // ── TOUR 10: LÃNG MẠN SÔNG DANUBE “MỘT KIỆT TÁC ĐÔNG ÂU” ──
  {
    id: "tour-eu-dong-au",
    code: "EVG-EU-DONGAU",
    title: "LÃNG MẠN SÔNG DANUBE “MỘT KIỆT TÁC ĐÔNG ÂU”",
    itinerary: "Munich – Cesky Krumlov – Prague – Bratislava – Budapest – Vienna – Hallstatt – Salzburg",
    duration: "10 Ngày 09 Đêm",
    durationDays: 10,
    airline: "Vietnam Airlines 4★ (Bay thẳng)",
    price: 63900000,
    priceFormatted: "63.900.000 VNĐ",
    highlights: [
      "Bay thẳng cùng Hàng không Quốc gia Vietnam Airlines 4 sao đến Munich",
      "Dạo bước Làng cổ Hallstatt (Áo) – thị trấn bên hồ đẹp nhất thế giới, chốn bồng lai tiên cảnh",
      "Du ngoạn Salzburg – quê hương thiên tài âm nhạc vĩ đại W.A. Mozart",
      "Khám phá Vienna – 'Thủ đô âm nhạc' của Áo, Cung điện Hofburg, Lâu đài Schönbrunn",
      "Đặt chân đến Budapest – 'Viên ngọc trên sông Danube' (Paris của Đông Âu), Tòa nhà Quốc hội Hungary",
      "TẶNG vé Du thuyền ngắm cảnh sông Danube lãng mạn & Vé vào Lâu đài Prague",
      "Khám phá Prague (Séc) – 'Thành phố trăm tháp vàng', Cầu Charles tình yêu, Đồng hồ thiên văn cổ"
    ],
    giftMeals: [
      "Bay thẳng tiện nghi cùng Vietnam Airlines (VN33 / VN32)",
      "TẶNG vé Du thuyền ngắm cảnh sông Danube thơ mộng",
      "TẶNG vé vào cổng Lâu đài Prague lớn nhất thế giới",
      "Khách sạn 4 sao tiêu chuẩn Châu Âu toàn hành trình",
      "Thực đơn đa dạng các món Á – Âu – Việt hấp dẫn",
      "Bảo hiểm du lịch toàn cầu với mức bồi thường tối đa 1.000.000.000 VNĐ/vụ"
    ],
    country: "Đông Âu (Đức - Áo - Séc - Hungary)",
    region: "Tour Châu Âu",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "chau-au", "ao", "sec", "duc", "hungary"],
    badge: "Kiệt Tác Sông Danube",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1000&q=85",
    departure: "15/8, 19/9, 17/10, 14/11/2026",
    isFeatured: true,
    pdfFile: "LANG MAN SONG DANUBE MOT KIET TAC DONG AU 10N9D.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1000&q=85",
      "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80",
      "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800&q=80",
      "https://images.unsplash.com/photo-1516550893885-985c70753f47?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietnam Airlines 4★ (Chuyến bay thẳng trực tiếp)",
      outbound: "VN 33 SGN – MUC 23:35 – 06:40+ (Tân Sơn Nhất – Munich Đức)",
      returnFlight: "VN 32 MUC – SGN 12:50 – 05:15+ (Munich Đức – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 23kg + 12kg hành lý xách tay"
    },
    singleRoomSurcharge: "14.500.000 VNĐ / khách",
    pricingTable: [
      { month: "Khởi hành 15/8/2026", dates: "15/08 – 24/08/2026", adult: "67.900.000", child: "61.110.000", infant: "20.370.000" },
      { month: "Khởi hành 19/9/2026", dates: "19/09 – 28/09/2026", adult: "65.900.000", child: "59.310.000", infant: "19.770.000" },
      { month: "Khởi hành 17/10/2026", dates: "17/10 – 26/10/2026", adult: "63.900.000", child: "57.510.000", infant: "19.170.000" },
      { month: "Khởi hành 14/11/2026", dates: "14/11 – 23/11/2026", adult: "63.900.000", child: "57.510.000", infant: "19.170.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ MUNICH (ĐỨC)",
        meals: "Ăn và nghỉ ngơi trên máy bay",
        activities: [
          { desc: "20:00 Quý khách tập trung tại Ga quốc tế Tân Sơn Nhất đáp chuyến bay thẳng VN33 của Vietnam Airlines đi Munich (Đức)." },
          { desc: "Tận hưởng suất ăn nóng chất lượng cao và ghế ngồi thoải mái của Vietnam Airlines." }
        ]
      },
      {
        day: 2,
        title: "MUNICH – CESKY KRUMLOV (CỘNG HÒA SÉC)",
        meals: "Ăn trưa, tối",
        hotel: "Khách sạn 4 sao Cesky Krumlov",
        image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80",
        activities: [
          { desc: "06:40 Hạ cánh tại sân bay Munich, làm thủ tục nhập cảnh." },
          { desc: "Tham quan Nhà thờ Frauenkirche biểu tượng vượt thời gian của Munich với cặp tháp đôi 99m.", highlight: true },
          { desc: "Chụp ảnh Lâu đài Nymphenburg tráng lệ và Cung điện Munich Residenz lớn nhất nước Đức." },
          { desc: "Khởi hành đến Cesky Krumlov – một trong những thành phố trung cổ được bảo tồn tốt nhất thế giới (Di sản UNESCO)." }
        ]
      },
      {
        day: 3,
        title: "CESKY KRUMLOV – THỦ ĐÔ PRAGUE (THÀNH PHỐ TRĂM THÁP VÀNG)",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Prague",
        image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80",
        activities: [
          { desc: "Chụp ảnh bên ngoài Lâu đài Český Krumlov uy nghi trên ngọn đồi uốn lượn theo dòng sông Vltava.", highlight: true },
          { desc: "Khởi hành đi Prague (Praha) – thủ đô cổ kính còn nguyên vẹn nhất Châu Âu.", highlight: true },
          { desc: "Dạo bước trên Cầu Charles (cầu Tình) bằng đá theo kiến trúc Baroque với 30 pho tượng thánh.", highlight: true },
          { desc: "Tham quan Quảng trường Old Town và ngắm Đồng hồ thiên văn cổ Astronomical Clock." },
          { desc: "Tham quan Lâu đài Prague (đã bao gồm vé vào trong) – tổ hợp lâu đài lớn nhất thế giới theo kỷ lục Guinness.", highlight: true }
        ]
      },
      {
        day: 4,
        title: "PRAGUE – BRATISLAVA (THỦ ĐÔ SLOVAKIA)",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Bratislava",
        image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi Bratislava (328km) – thủ đô xinh đẹp của Slovakia giáp ranh 3 quốc gia.", highlight: true },
          { desc: "Chụp ảnh Lâu đài Bratislava tọa lạc trên ngọn đồi cao nhìn trọn vẹn thành phố và dòng sông Danube." },
          { desc: "Bách bộ phố cổ Bratislava, check-in tượng anh thợ cống Cumil the Sewer Worker hiếu khách và Cổng thành Michael's Gate." }
        ]
      },
      {
        day: 5,
        title: "BRATISLAVA – BUDAPEST (PARIS CỦA ĐÔNG ÂU)",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Budapest",
        image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi Budapest (200km) – thủ đô Hungary, được mệnh danh là 'Paris của Đông Âu'.", highlight: true },
          { desc: "Chiêm ngưỡng Tòa nhà Quốc hội Hungary (Parliament Building) nguy nga tráng lệ bậc nhất Châu Âu bên bờ sông.", highlight: true },
          { desc: "Check-in Quảng trường Anh Hùng (Heroes Square), Cung điện Buda và Thành Ngư Phủ (Fishermen's Bastion) đẹp tựa cổ tích." }
        ]
      },
      {
        day: 6,
        title: "DU THUYỀN SÔNG DANUBE – CỐ ĐÔ VIENNA (ÁO)",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Vienna",
        image: "https://images.unsplash.com/photo-1516550893885-985c70753f47?w=800&q=80",
        activities: [
          { desc: "Trải nghiệm Du thuyền ngắm cảnh sông Danube – ngắm nhìn toàn cảnh thành phố Budapest hai bên bờ sông lung linh thanh bình.", highlight: true },
          { desc: "Khởi hành đến Vienna – cái nôi của âm nhạc cổ điển Châu Âu quê hương của Mozart, Beethoven, Haydn.", highlight: true },
          { desc: "Dạo phố cổ Vienna, Nhà hát lớn Vienna State Opera, Nhà thờ St. Stephen's và Cung điện Hofburg." },
          { desc: "Chiêm ngưỡng Lâu đài Schoenbrunn tuyệt mỹ – Di sản Thế giới của gia tộc Habsburg lẫy lừng.", highlight: true }
        ]
      },
      {
        day: 7,
        title: "VIENNA – LÀNG CỔ HALLSTATT BÊN HỒ ĐẸP NHẤT THẾ GIỚI – SALZBURG",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Salzburg",
        image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1000&q=85",
        activities: [
          { desc: "Đến Hallstatt – thị trấn bên hồ đẹp nhất hành tinh, Di sản Thế giới UNESCO.", highlight: true },
          { desc: "Dạo bước quảng trường Marktplatz với những ngôi nhà gỗ phủ đầy hoa nép mình bên dãy Alps soi bóng mặt hồ ngọc bích.", highlight: true },
          { desc: "Di chuyển đến Salzburg (75km) – quê hương nhà soạn nhạc thiên tài Wolfgang Amadeus Mozart.", highlight: true },
          { desc: "Thăm Nhà thờ Salzburg và Ngôi nhà Mozart nơi ông sinh ra và gắn bó thời thơ ấu." }
        ]
      },
      {
        day: 8,
        title: "SALZBURG – MUNICH (ĐỨC) – QUẢNG TRƯỜNG MARIENPLATZ",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Munich",
        image: "https://images.unsplash.com/photo-1516550893885-985c70753f47?w=800&q=80",
        activities: [
          { desc: "Khởi hành về lại thành phố Munich (Đức). Chụp ảnh lưu niệm bên ngoài trụ sở CLB bóng đá Bayern Munich danh giá.", highlight: true },
          { desc: "Quảng trường trung tâm Marienplatz náo nhiệt, thưởng thức màn trình diễn chuông chùm Glockenspiel ngân nga và các vũ công máy.", highlight: true },
          { desc: "Bách bộ Công viên English Garden rộng lớn và tự do mua sắm đặc sản Đức." }
        ]
      },
      {
        day: 9,
        title: "MUNICH ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, ăn trên máy bay",
        activities: [
          { desc: "07:00 Trả phòng khách sạn, xe đưa đoàn ra sân bay Munich làm thủ tục chuyến bay thẳng VN32 về TP.HCM." },
          { desc: "12:50 Máy bay cất cánh về Việt Nam. Nghỉ ngơi trên chuyến bay." }
        ]
      },
      {
        day: 10,
        title: "TP. HỒ CHÍ MINH",
        meals: "Ăn trên máy bay",
        activities: [
          { desc: "05:15 Đoàn hạ cánh xuống Sân bay Tân Sơn Nhất. Hướng dẫn viên Én Việt chào tạm biệt và hẹn gặp lại quý khách trong những chuyến đi tiếp theo!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi thẳng TP.HCM – MUNICH – TP.HCM của Hàng không Quốc gia Vietnam Airlines",
      "Khách sạn tiêu chuẩn 4 sao toàn hành trình (2 người/phòng)",
      "Các bữa ăn đa dạng món Á – Âu – Việt Nam theo lịch trình",
      "Vé tham quan Lâu đài Prague trọn gói",
      "TẶNG vé Du thuyền ngắm cảnh sông Danube",
      "Xe du lịch đời mới máy lạnh đưa đón suốt tuyến",
      "Hướng dẫn viên chuyên nghiệp đi theo đoàn từ Việt Nam",
      "Bảo hiểm du lịch toàn cầu với mức bồi thường tối đa 1.000.000.000 VNĐ/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính đến ngày hoàn thành chuyến đi",
      "Phí visa Schengen du lịch Châu Âu: 5.000.000 VNĐ",
      "Tiền tip HDV và tài xế địa phương: 70 EUR / khách / tour",
      "Phụ thu phòng đơn: 14.500.000 VNĐ / khách",
      "Chi phí cá nhân ngoài chương trình"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng",
      "2 ảnh 3.5x4.5cm nền trắng chụp mới nhất",
      "Hộ khẩu, CCCD công chứng",
      "Hợp đồng lao động hoặc giấy phép kinh doanh",
      "Sổ tiết kiệm xác nhận số dư từ 200 triệu trở lên",
      "Én Việt cung cấp thư mời đối tác Châu Âu, dịch thuật công chứng và lấy hẹn phỏng vấn"
    ]
  },

  // ── TOUR 11: HÀNH TRÌNH TÂY ÂU: PHÁP - THỤY SỸ - Ý – VATICAN ──
  {
    id: "tour-eu-tay-au",
    code: "EVG-EU-TAYAU",
    title: "HÀNH TRÌNH TÂY ÂU: PHÁP - THỤY SỸ - Ý – VATICAN",
    itinerary: "Paris - Colmar - Interlaken - Iseltwald - Lucerne - Engelberg - Titlis - Milan - Venice - Pisa - Florence - Rome - Vatican",
    duration: "10 Ngày 09 Đêm",
    durationDays: 10,
    airline: "Turkish Airlines 5★",
    price: 75900000,
    priceFormatted: "75.900.000 VNĐ",
    highlights: [
      "Hàng không 5 sao Turkish Airlines, khách sạn 4 sao toàn hành trình (2 đêm Pháp, 1 đêm Thụy Sĩ, 4 đêm Ý)",
      "TẶNG vé du thuyền sông Seine ngắm toàn cảnh Kinh Đô Ánh Sáng Paris lộng lẫy",
      "Đắm chìm trước vẻ đẹp Làng cổ Colmar ('Little Venice') như bước ra từ truyện cổ tích",
      "TẶNG vé du thuyền khám phá Hồ Brienz – bối cảnh phim 'Hạ Cánh Nơi Anh' bên làng Iseltwald",
      "TẶNG vé tàu hỏa ngắm dãy núi Alps từ Lucerne đi làng Engelberg & đỉnh núi tuyết Titlis 3.200m",
      "Dạo thuyền khám phá đảo Venice thơ mộng & cầu Than Thở huyền thoại",
      "Chiêm ngưỡng Tháp nghiêng Pisa, Cung điện Phục Hưng Florence, Đấu trường La Mã Colosseum Rome",
      "Viếng thăm Thành phố quốc gia Vatican & Vương Cung Thánh Đường Thánh Peter"
    ],
    giftMeals: [
      "Bay cùng Hàng Không 5 Sao Turkish Airlines tiêu chuẩn quốc tế",
      "Khách sạn 4 sao toàn chặng (2 đêm Pháp, 1 đêm Thụy Sĩ, 4 đêm Ý)",
      "TẶNG vé du thuyền sông Seine ngắm các công trình biểu tượng Paris",
      "TẶNG vé du thuyền Hồ Brienz trong xanh biếc của dãy Alps Thụy Sĩ",
      "TẶNG vé tàu hỏa ngắm cảnh dãy núi Alps tuyến Lucerne – Engelberg",
      "TẶNG vé tàu thuyền riêng khám phá đảo Venice lãng mạn",
      "Ẩm thực Á - Âu chất lượng cao (trung bình 16€ - 28€/bữa)",
      "Bảo hiểm du lịch toàn cầu với hạn mức bồi thường 1.000.000.000 VNĐ/người"
    ],
    country: "Tây Âu (Pháp - Thụy Sĩ - Ý - Vatican)",
    region: "Tour Châu Âu",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "chau-au", "phap", "thuy-sy", "y", "vatican"],
    badge: "Cung Đường Vàng Tây Âu",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&q=85",
    departure: "15/10/2026",
    isFeatured: true,
    pdfFile: "HANH TRINH TAY AU PHAP - THUY SY - Y - VATICAN 10N9D.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&q=85",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80",
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80",
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80"
    ],
    flightInfo: {
      airline: "Turkish Airlines 5★",
      outbound: "TK 163 SGN – IST 22:15 – 05:30 // TK 1823 IST – CDG 10:10 – 12:50 (TP.HCM – Istanbul – Paris)",
      returnFlight: "TK 1864 FCO – IST 19:55 – 23:35 // TK 162 IST – SGN 02:05 – 16:10+ (Rome – Istanbul – TP.HCM)",
      baggage: "Hành lý ký gửi 30kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "15.990.000 VNĐ / khách",
    pricingTable: [
      { month: "Khởi hành 15/10/2026", dates: "15/10 – 24/10/2026", adult: "75.900.000", child: "68.310.000", infant: "22.770.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ PARIS (PHÁP)",
        meals: "Nghỉ ngơi và ăn trên máy bay",
        activities: [
          { desc: "Quý khách tập trung tại Tân Sơn Nhất đáp chuyến bay đi Paris của Hãng hàng không 5 sao Turkish Airlines (quá cảnh Istanbul)." },
          { desc: "Nghỉ ngơi tiện nghi trên máy bay." }
        ]
      },
      {
        day: 2,
        title: "PARIS – CITY TOUR KINH ĐÔ ÁNH SÁNG – DU THUYỀN SÔNG SEINE",
        meals: "Ăn tối",
        hotel: "Khách sạn 4 sao Paris",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
        activities: [
          { desc: "12:50 Đến sân bay Paris CDG. Xe đưa đoàn vào trung tâm Paris tham quan Đại lộ Champs-Élysées rực rỡ.", highlight: true },
          { desc: "Chiêm ngưỡng Khải Hoàn Môn (Arc De Triomphe), Quảng trường Concorde và chụp ảnh Tháp Eiffel biểu tượng nước Pháp.", highlight: true },
          { desc: "Trải nghiệm Du thuyền sông Seine ngắm hơn 30 cây cầu cổ kính và các di sản UNESCO hai bên bờ sông lung linh.", highlight: true },
          { desc: "Tự do mua sắm tại Trung tâm thương mại Galeries Lafayette danh tiếng." }
        ]
      },
      {
        day: 3,
        title: "PARIS – LÀNG CỔ COLMAR ('TIỂU VENICE NƯỚC PHÁP')",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Colmar / Mulhouse",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi Colmar – thành phố cổ tích nằm ở vùng Alsace, được ví như 'tiểu Venice' trong lòng nước Pháp.", highlight: true },
          { desc: "Dạo bước khu phố cổ tích Little Venice bên dòng sông Lauch với những ngôi nhà gỗ rực rỡ sắc màu hoa nở ven bờ nước.", highlight: true }
        ]
      },
      {
        day: 4,
        title: "COLMAR – THỤY SĨ: HỒ BRIENZ ('HẠ CÁNH NƠI ANH') – ISELTWALD – LUCERNE",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Lucerne",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80",
        activities: [
          { desc: "Di chuyển đến thị trấn Interlaken (Thụy Sĩ). Lên du thuyền khám phá Hồ Brienz – 'viên ngọc lam' đốn tim trong bộ phim đình đám 'Hạ Cánh Nơi Anh'.", highlight: true },
          { desc: "Dạo bước làng Iseltwald yên bình bên bến tàu bối cảnh đàn piano lãng mạn của đại úy Ri Jeong Hyeok.", highlight: true },
          { desc: "Chiều đến Lucerne, ngắm Hồ Lucerne tuyệt đẹp và Cầu gỗ Chapel Bridge cổ nhất Châu Âu bắc qua sông Reuss." }
        ]
      },
      {
        day: 5,
        title: "LUCERNE – TÀU HỎA ALPS ĐẾN LÀNG ENGELBERG – ĐỈNH TITLIS – MILAN (Ý)",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Milan",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80",
        activities: [
          { desc: "Trải nghiệm đi tàu hỏa ngắm cảnh thiên thần dãy núi Alps đến làng tuyết Engelberg thanh bình.", highlight: true },
          { desc: "Ngắm đỉnh núi tuyết Titlis hùng vĩ quanh năm tuyết phủ ở độ cao trên 3.200m.", highlight: true },
          { desc: "Chiều di chuyển sang Ý đến kinh đô thời trang Milan. Chiêm ngưỡng Nhà thờ Duomo di Milano kiệt tác Gothic tráng lệ và Galleria Vittorio Emanuele II." }
        ]
      },
      {
        day: 6,
        title: "MILAN – THÀNH PHỐ KÊNH ĐÀO VENICE LÃNG MẠN",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Venice Mestre",
        image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80",
        activities: [
          { desc: "Khởi hành đến Venice (270km). Đi thuyền riêng ra Đảo Venice tận hưởng vẻ đẹp quyến rũ trên sông nước.", highlight: true },
          { desc: "Viếng Nhà thờ thánh San Marco kiến trúc Byzantine, bước qua Cầu Than Thở huyền thoại.", highlight: true },
          { desc: "Xem nghệ nhân biểu diễn chế tác thủy tinh Murano truyền thống tinh xảo." }
        ]
      },
      {
        day: 7,
        title: "VENICE – THÁP NGHIÊNG PISA – CÁI NÔI PHỤC HƯNG FLORENCE",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Florence",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
        activities: [
          { desc: "Đến Pisa, chụp ảnh Tháp nghiêng Pisa kỳ quan kiến trúc thế giới và Quảng trường Mầu Nhiệm Piazza del Duomo.", highlight: true },
          { desc: "Di chuyển đến Florence – 'cái nôi của phong trào Phục Hưng'. Tham quan Nhà thờ chính tòa Duomo Florence với mái vòm khổng lồ của Brunelleschi.", highlight: true },
          { desc: "Cầu cổ Ponte Vecchio và ngắm toàn cảnh hoàng hôn Florence ngoạn mục từ Quảng trường Piazzale Michelangelo." }
        ]
      },
      {
        day: 8,
        title: "FLORENCE – THỦ ĐÔ ROME – ĐẤU TRƯỜNG COLOSSEUM – ĐÀI PHUN NƯỚC TREVI",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 4 sao Rome",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi Rome (275km) – thành phố Vĩnh Hằng.", highlight: true },
          { desc: "Chiêm ngưỡng Đấu trường La Mã Colosseum vĩ đại của các võ sĩ giác đấu thời cổ đại.", highlight: true },
          { desc: "Ném đồng xu ước nguyện tại Đài phun nước de Trevi kiệt tác Baroque và dạo Quảng trường Tây Ban Nha." }
        ]
      },
      {
        day: 9,
        title: "ROME – THÀNH PHỐ QUỐC GIA VATICAN – VƯƠNG CUNG THÁNH ĐƯỜNG PETER ✈ TP.HCM",
        meals: "Ăn sáng, trưa",
        activities: [
          { desc: "Viếng thăm Vatican – quốc gia nhỏ nhất thế giới. Chiêm bái Quảng trường Thánh Peter và Vương cung Thánh đường Thánh Peter lớn nhất thế giới.", highlight: true },
          { desc: "Tự do mua sắm đặc sản Ý. Chiều xe đưa đoàn ra sân bay Rome đáp chuyến bay Turkish Airlines về TP.HCM." }
        ]
      },
      {
        day: 10,
        title: "TP. HỒ CHÍ MINH",
        meals: "Ăn trên máy bay",
        activities: [
          { desc: "16:10 Hạ cánh tại sân bay Tân Sơn Nhất. Kết thúc Cung Đường Vàng Tây Âu tráng lệ đong đầy kỷ niệm!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi SAIGON – PARIS // ROME – SAIGON của Hàng không 5 sao Turkish Airlines (30kg ký gửi + 7kg xách tay)",
      "Khách sạn tiêu chuẩn 4 sao toàn chặng: 2 đêm Pháp, 1 đêm Thụy Sĩ, 4 đêm Ý",
      "Các bữa ăn theo chương trình tại nhà hàng Việt, Hoa, Âu (trung bình 16€ - 28€/bữa)",
      "TẶNG vé du thuyền ngắm sông Seine Paris",
      "TẶNG vé thuyền riêng tham quan đảo Venice",
      "TẶNG vé du thuyền khám phá Hồ Brienz Thụy Sĩ",
      "TẶNG vé tàu hỏa ngắm cảnh dãy núi Alps Lucerne – Engelberg",
      "Bảo hiểm du lịch toàn cầu với mức bồi thường tối đa 1 tỷ đồng/người"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính theo ngày về",
      "Phí visa Schengen: 5.000.000 VNĐ",
      "Tiền tip HDV và tài xế địa phương: 70 EUR / khách / tour",
      "Phụ phí phòng đơn: 15.990.000 VNĐ / khách",
      "Chi phí cá nhân ngoài hành trình"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng",
      "2 ảnh 3.5x4.5cm nền trắng mới chụp",
      "Hộ khẩu, CCCD công chứng",
      "Hợp đồng lao động hoặc giấy phép kinh doanh",
      "Sổ tiết kiệm và xác nhận số dư tài khoản ngân hàng từ 200 triệu trở lên",
      "Én Việt hỗ trợ hoàn thiện hồ sơ và thư mời đối tác Châu Âu chu đáo"
    ]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. DANH SÁCH TOUR CHÂU MỸ (HOA KỲ - BỜ ĐÔNG, BỜ TÂY & LIÊN TUYẾN 2 BỜ)
// ─────────────────────────────────────────────────────────────────────────────

export const TOUR_CHAU_MY_DATASET: TourItem[] = [
  // ── TOUR 12: TRẢI NGHIỆM NÉT ĐẸP HAI BỜ NƯỚC MỸ (11N10Đ) ──
  {
    id: "tour-us-hai-bo",
    code: "EVG-US-11N10D",
    title: "TRẢI NGHIỆM NÉT ĐẸP HAI BỜ NƯỚC MỸ: NEW YORK – WASHINGTON DC – LAS VEGAS – LOS ANGELES – SAN FRANCISCO",
    itinerary: "New York – Philadelphia – Washington D.C – Las Vegas – Los Angeles – San Jose – San Francisco",
    duration: "11 Ngày 10 Đêm (Lưu trú Mỹ 9N8Đ)",
    durationDays: 11,
    airline: "Eva Air 5★",
    price: 114990000,
    priceFormatted: "114.990.000 VNĐ",
    highlights: [
      "Hành trình kinh điển liên tuyến Hai Bờ Nước Mỹ qua các thành phố huyền thoại",
      "New York: Du thuyền ngắm Tượng Nữ Thần Tự Do, Ground Zero 11/9, Phố tài chính Wall Street & Bò Húc Charging Bull, Quảng trường Thời Đại Times Square",
      "Philadelphia & Washington D.C: Chuông Tự Do, Dinh Độc Lập, Nhà Trắng (White House), Điện Capitol, Đài tưởng niệm Lincoln & Bảo tàng Lịch sử Tự Nhiên",
      "Las Vegas: Thành phố ánh sáng & sòng bài không ngủ, Đập thủy điện Hoover Dam, Đại vực Grand Canyon đệ nhất kỳ quan thế giới",
      "Los Angeles & San Francisco: Hoang mạc Mojave & Route 66, Quận Cam Little Saigon (Thương xá Phước Lộc Thọ), Đại lộ danh vọng Hollywood, Cầu Cổng Vàng Golden Gate & Cảng Pier 39"
    ],
    giftMeals: [
      "Bay cùng Hàng Không 5 Sao Eva Air giờ bay đẹp, quá cảnh Đài Loan tiện nghi",
      "Bao gồm vé máy bay chặng nội địa Mỹ Washington D.C – Las Vegas",
      "Lưu trú khách sạn 3 - 4 sao quốc tế (Holiday Inn, Hilton, Excalibur, Best Western)",
      "TẶNG vé du thuyền ngắm Tượng Nữ Thần Tự Do đảo Liberty",
      "TẶNG vé tham quan Đại vực Grand Canyon hùng vĩ",
      "TẶNG tiệc tối thân mật với thực đơn phong phú (Việt, Hoa, Thái, Mỹ)",
      "Bảo hiểm du lịch toàn cầu & Quà tặng túi xách, nón du lịch, bao hộ chiếu Én Việt"
    ],
    country: "Hoa Kỳ (Mỹ)",
    region: "Tour Châu Mỹ",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "chau-my", "hoa-ky", "my"],
    badge: "Hai Bờ Nước Mỹ 5 Sao",
    // Ảnh đại diện phù hợp: Tượng Nữ Thần Tự Do kiêu hãnh rực sáng bên vịnh New York
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1000&q=85",
    departure: "Tháng 11 (13, 25) & Tháng 12 (06, 23)",
    isFeatured: true,
    pdfFile: "TRAI NGHIEM NET DEP HAI BO NUOC MY 11N10D.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1000&q=85", // Tượng Nữ Thần Tự Do
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",  // Điện Capitol Washington D.C
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80", // Grand Canyon
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80"  // Cầu Cổng Vàng Golden Gate
    ],
    flightInfo: {
      airline: "Eva Air 5★ (Transit Đài Loan)",
      outbound: "TP.HCM – Đài Bắc (TPE) – New York (JFK) cùng Eva Air 5 sao",
      returnFlight: "San Francisco (SFO) – Đài Bắc (TPE) – TP.HCM",
      baggage: "Hành lý xách tay 7kg + 2 kiện hành lý ký gửi (mỗi kiện 23kg)",
      transit: "Chặng nội địa: Washington D.C – Las Vegas (bao gồm kiện ký gửi)"
    },
    singleRoomSurcharge: "750 USD / khách",
    pricingTable: [
      { month: "Tháng 11/2026", dates: "13/11, 25/11", adult: "114.990.000", child: "97.790.000", infant: "40.290.000" },
      { month: "Tháng 12/2026", dates: "06/12, 23/12", adult: "114.990.000", child: "97.790.000", infant: "40.290.000" },
      { month: "Tháng 01/2027", dates: "10/01, 24/01", adult: "114.990.000", child: "97.790.000", infant: "40.290.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ ĐÀI LOAN ✈ NEW YORK",
        meals: "Ăn và nghỉ ngơi trên máy bay",
        activities: [
          { desc: "Đoàn tập trung tại Tân Sơn Nhất, làm thủ tục check-in chuyến bay Eva Air 5 sao đi Mỹ, quá cảnh tại Đài Loan." },
          { desc: "Nối chuyến bay đến New York. Do vượt tuyến đổi ngày, đoàn hạ cánh cùng ngày tại sân bay New York. Xe đưa đoàn về khách sạn nhận phòng nghỉ ngơi." }
        ]
      },
      {
        day: 2,
        title: "NEW YORK CITY TOUR – TƯỢNG NỮ THẦN TỰ DO – WALL STREET – TIMES SQUARE",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Holiday Inn Newark hoặc tương đương",
        image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80",
        activities: [
          { desc: "Du thuyền ra Đảo Liberty chiêm ngưỡng Tượng Nữ Thần Tự Do – biểu tượng tự do, dân chủ và hy vọng của Hợp Chủng Quốc Hoa Kỳ.", highlight: true },
          { desc: "Thăm Điểm 0 (Ground Zero) – nơi tưởng niệm Trung tâm Thương mại Thế giới sau sự kiện 11/9.", highlight: true },
          { desc: "Dạo Phố tài chính Wall Street, chụp hình cùng biểu tượng Bò Tót Bằng Đồng Charging Bull dũng mãnh.", highlight: true },
          { desc: "Trụ sở Liên Hiệp Quốc (United Nations), Nhà thờ Thánh Patrick, Rockefeller Center và hòa mình vào Quảng trường Thời Đại (Times Square) rực rỡ ánh đèn." }
        ]
      },
      {
        day: 3,
        title: "NEW YORK – PHILADELPHIA – THỦ ĐÔ WASHINGTON D.C",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Hilton Gaithersburgs hoặc tương đương",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi cố đô Philadelphia. Tham quan Quả Chuông Tự Do (Liberty Bell) giống lên tiếng chuông độc lập của nước Mỹ.", highlight: true },
          { desc: "Chụp ảnh Dinh Độc Lập (Independence Hall) nơi ký bản Tuyên ngôn Độc lập Hoa Kỳ.", highlight: true },
          { desc: "Đến Washington D.C, ngắm Đài tưởng niệm Washington và Điện Capitol nguy nga tráng lệ." }
        ]
      },
      {
        day: 4,
        title: "WASHINGTON D.C – NHÀ TRẮNG – BẢO TÀNG LỊCH SỬ TỰ NHIÊN ✈ LAS VEGAS",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Excalibur Hotel Las Vegas hoặc tương đương",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
        activities: [
          { desc: "Chụp ảnh bên ngoài Nhà Trắng (White House) – nơi làm việc của Tổng thống Hoa Kỳ.", highlight: true },
          { desc: "Viếng Nhà tưởng niệm Lincoln và Nhà tưởng niệm Jefferson.", highlight: true },
          { desc: "Chiêm ngưỡng viên kim cương xanh lớn nhất thế giới Hope Diamond (45,52 carat) tại Bảo tàng Lịch sử Tự Nhiên Smithsonian." },
          { desc: "Chiều đáp chuyến bay nội địa rời thủ đô Washington D.C bay sang Bờ Tây đến 'Thành phố không ngủ' Las Vegas. Nhận phòng khách sạn nghỉ ngơi." }
        ]
      },
      {
        day: 5,
        title: "LAS VEGAS – ĐẬP THỦY ĐIỆN HOOVER DAM – ĐẠI VỰC GRAND CANYON",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Excalibur Hotel Las Vegas",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
        activities: [
          { desc: "Chiêm ngưỡng Đập thủy điện Hoover Dam đồ sộ nối liền 3 bang Nevada, Arizona và California.", highlight: true },
          { desc: "Chinh phục Đại vực Grand Canyon – đệ nhất kỳ quan thiên nhiên thế giới với hẻm núi sa thạch đa sắc màu và con sông Colorado xanh ngọc uốn lượn.", highlight: true },
          { desc: "Về lại Las Vegas, chiêm ngưỡng nhạc nước Bellagio huyền thoại và vườn hoa nghệ thuật Fiori di Como." }
        ]
      },
      {
        day: 6,
        title: "LAS VEGAS – HOANG MẠC MOJAVE – ROUTE 66 – QUẬN CAM LITTLE SAIGON",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Huntington Beach deluxe rooms hoặc tương đương",
        image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
        activities: [
          { desc: "Băng qua hoang mạc Mojave trên con đường huyền thoại Route 66 ('Đường Mẹ' của nước Mỹ).", highlight: true },
          { desc: "Mua sắm hàng hiệu giá gốc tại Barstows Outlets (Coach, CK, Michael Kors, Nike...).", highlight: true },
          { desc: "Đến Quận Cam (Orange County), thăm Khu Phước Lộc Thọ tại Little Saigon – trung tâm văn hóa cộng đồng người Việt tại California." }
        ]
      },
      {
        day: 7,
        title: "LOS ANGELES – HOLLYWOOD – BEVERLY HILLS – PHIM TRƯỜNG UNIVERSAL",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Huntington Beach deluxe rooms",
        image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&q=80",
        activities: [
          { desc: "Dạo bước trên Đại lộ danh vọng Hollywood Walk of Fame với hơn 2.600 ngôi sao tên tuổi.", highlight: true },
          { desc: "Rạp Chinese Mann nơi in dấu vân tay của các minh tinh điện ảnh, ngắm khu biệt thự nhà giàu Beverly Hills.", highlight: true },
          { desc: "Tham quan Phim trường danh tiếng Universal Studios Hollywood với kỹ xảo điện ảnh đỉnh cao thế giới." }
        ]
      },
      {
        day: 8,
        title: "LOS ANGELES – LÀNG CỔ TÍCH SOLVANG – THÀNH PHỐ SAN JOSE",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3-4 sao San Jose",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi Solvang – ngôi làng Đan Mạch cổ kính độc đáo giữa lòng nước Mỹ với cối xay gió và tiệm bánh ngọt châu Âu.", highlight: true },
          { desc: "Tiếp tục di chuyển đến San Jose – thung lũng công nghệ và là thành phố đông người Việt sinh sống nhất Hoa Kỳ." }
        ]
      },
      {
        day: 9,
        title: "SAN JOSE – SAN FRANCISCO – CẦU CỔNG VÀNG – CẢNG PIER 39 ✈ VIỆT NAM",
        meals: "Ăn sáng, trưa, tối",
        activities: [
          { desc: "Đến San Francisco, dạo bước trên biểu tượng Cầu Cổng Vàng (Golden Gate Bridge) huyền thoại.", highlight: true },
          { desc: "Tham quan Cảng Pier số 39 ngắm sư tử biển phơi nắng, check-in đường hoa Lombard quanh co nhất hành tinh và Cung điện Mỹ thuật Fine Arts Palace.", highlight: true },
          { desc: "Xe đưa đoàn ra sân bay San Francisco (SFO) đáp chuyến bay đêm về lại Việt Nam. Quý khách có thể ở lại thăm thân tối đa 6 tháng." }
        ]
      },
      {
        day: 10,
        title: "SAN FRANCISCO ✈ ĐÀI LOAN",
        meals: "Ăn và nghỉ trên máy bay",
        activities: [
          { desc: "Nghỉ ngơi và tận hưởng các tiện ích giải trí của hãng hàng không 5 sao Eva Air." }
        ]
      },
      {
        day: 11,
        title: "ĐÀI LOAN ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn trên máy bay",
        activities: [
          { desc: "Đoàn hạ cánh xuống sân bay Tân Sơn Nhất. Hướng dẫn viên Én Việt chào tạm biệt và hẹn gặp lại quý khách!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay quốc tế khứ hồi SGN – NEW YORK // SAN FRANCISCO – SGN của Hàng Không 5 Sao Eva Air (2 kiện 23kg ký gửi + 7kg xách tay)",
      "Vé máy bay chặng nội địa Mỹ Washington D.C – Las Vegas kèm kiện hành lý",
      "Khách sạn tiêu chuẩn 3 - 4 sao quốc tế (1 phòng 2 khách, lẻ ghép phòng 3 hoặc phụ thu phòng đơn)",
      "Các bữa ăn theo chương trình (Việt, Hoa, Thái, Mỹ) chất lượng cao",
      "Vé tham quan Tượng Nữ Thần Tự Do, Grand Canyon và các điểm trong lịch trình",
      "Xe du lịch đời mới máy lạnh phục vụ 11h/ngày",
      "Hướng dẫn viên tiếng Việt chuyên nghiệp theo đoàn suốt tuyến",
      "Bảo hiểm du lịch toàn cầu và quà tặng du lịch Én Việt"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng kể từ ngày nhập cảnh Mỹ",
      "Lệ phí xin Visa Mỹ nộp cho LSQ: 5.500.000 VNĐ / người",
      "Tiền bồi dưỡng (Tip) cho HDV và tài xế",
      "Phụ thu phòng đơn: 750 USD / khách",
      "Vé vào cổng Phim trường Universal Studios (tùy chọn theo nhu cầu)"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng có chữ ký",
      "File ảnh 5x5cm nền trắng chụp trong vòng 3 tháng",
      "Giấy tờ chứng minh công việc và tài chính (sổ tiết kiệm, nhà đất)",
      "Chuyên viên Én Việt hướng dẫn khai form DS-160, đặt lịch hẹn và luyện phỏng vấn 1-1 chuyên sâu"
    ]
  },

  // ── TOUR 13: TRẢI NGHIỆM VẺ ĐẸP BỜ ĐÔNG NƯỚC MỸ (7N6Đ) ──
  {
    id: "tour-us-bo-dong",
    code: "EVG-US-BODONG",
    title: "TRẢI NGHIỆM VẺ ĐẸP BỜ ĐÔNG NƯỚC MỸ: NEW YORK – PHILADELPHIA – WASHINGTON DC",
    itinerary: "New York – Philadelphia – Delaware – Washington D.C",
    duration: "07 Ngày 06 Đêm (Lưu trú Mỹ 5N4Đ)",
    durationDays: 7,
    airline: "Emirates 5★",
    price: 79990000,
    priceFormatted: "79.990.000 VNĐ",
    highlights: [
      "Chuyến bay giờ đẹp cùng Hãng Hàng Không 5 Sao Emirates danh tiếng",
      "New York: Du thuyền ngắm Tượng Nữ Thần Tự Do, Ground Zero, Phố Wall, Tượng Bò Tót Charging Bull, Times Square rực rỡ",
      "Trung tâm thương mại Rockefeller & Đại lộ số 5 Fifth Avenue tụ hội thương hiệu xa xỉ nhất hành tinh",
      "Philadelphia: Chuông Tự Do (Liberty Bell), Dinh Độc Lập (Independence Hall) nơi ký Tuyên ngôn Độc lập Hoa Kỳ",
      "Mua sắm miễn thuế thỏa thích tại Christiana Mall bang Delaware (miễn thuế 100%)",
      "Washington D.C: Nhà Trắng, Điện Capitol, Tượng đài Washington, Đài tưởng niệm Lincoln & Jefferson, Bảo tàng Lịch sử Tự Nhiên",
      "Thưởng thức tiệc tối thân mật có karaoke ấm cúng cùng đoàn"
    ],
    giftMeals: [
      "Bay cùng Hãng Hàng Không 5 Sao Emirates (Hành lý 2 kiện x 23kg + 7kg xách tay)",
      "Khách sạn 4 sao chuẩn quốc tế (DoubleTree by Hilton New York, Sheraton Alexandria D.C)",
      "TẶNG vé du thuyền ngắm Tượng Nữ Thần Tự Do trên đảo Liberty",
      "TẶNG buổi tiệc tối thân mật liên hoan tại nhà hàng địa phương",
      "Các bữa ăn tiêu chuẩn 25$ - 30$/bữa phong phú (Việt, Hoa, Thái, Mỹ)",
      "Bảo hiểm du lịch toàn cầu và quà tặng cao cấp từ Én Việt"
    ],
    country: "Hoa Kỳ (Mỹ)",
    region: "Tour Châu Mỹ",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "chau-my", "hoa-ky", "my"],
    badge: "Bờ Đông Nước Mỹ 4 Sao",
    // Ảnh đại diện phù hợp: Điện Capitol Washington D.C uy nghiêm tráng lệ
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1000&q=85",
    departure: "12/11/2026",
    isFeatured: true,
    pdfFile: "TRAI NGHIEM VE DEP BO DONG NUOC MY 7N6D.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1000&q=85", // Điện Capitol Washington
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80", // Nữ Thần Tự Do
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80", // Times Square New York
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80"  // Washington Monument
    ],
    flightInfo: {
      airline: "Emirates Airlines 5★",
      outbound: "TP.HCM – New York (JFK) cùng Emirates 5 sao",
      returnFlight: "Washington D.C (IAD) – TP.HCM cùng Emirates 5 sao",
      baggage: "Hành lý xách tay 7kg + 2 kiện ký gửi 23kg/kiện"
    },
    singleRoomSurcharge: "400 USD / khách",
    pricingTable: [
      { month: "Khởi hành 12/11/2026", dates: "12/11 – 18/11/2026", adult: "79.990.000", child: "70.590.000", infant: "29.000.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ NEW YORK",
        meals: "Ăn và nghỉ trên máy bay",
        activities: [
          { desc: "Đoàn tập trung tại Tân Sơn Nhất, làm thủ tục đáp chuyến bay Emirates 5 sao đi New York." }
        ]
      },
      {
        day: 2,
        title: "NEW YORK – TIMES SQUARE – ĐẠI LỘ SỐ 5",
        meals: "Ăn trưa, tối",
        hotel: "DoubleTree by Hilton Fort Lee hoặc tương đương",
        image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
        activities: [
          { desc: "Đến New York làm thủ tục nhập cảnh Hoa Kỳ. Xe đón đoàn đi ăn trưa và tham quan." },
          { desc: "Quảng trường Thời Đại (Times Square) náo nhiệt rực rỡ với hàng triệu bảng đèn neon.", highlight: true },
          { desc: "Nhà thờ Thánh Patrick, Rockefeller Center và dạo bước mua sắm trên Đại lộ số 5 (Fifth Avenue) danh tiếng." }
        ]
      },
      {
        day: 3,
        title: "NEW YORK CITY TOUR – TƯỢNG NỮ THẦN TỰ DO – WALL STREET",
        meals: "Ăn sáng, trưa, tối",
        hotel: "DoubleTree by Hilton Fort Lee",
        image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80",
        activities: [
          { desc: "Lên thuyền ngắm Tượng Nữ Thần Tự Do sừng sững trên vịnh Hudson.", highlight: true },
          { desc: "Tham quan Trụ sở Liên Hiệp Quốc, Đài tưởng niệm Ground Zero 11/9.", highlight: true },
          { desc: "Phố tài chính Wall Street – trung tâm tài chính ngân hàng số 1 thế giới và chạm tay vào tượng Bò Tót Charging Bull cầu tài lộc." }
        ]
      },
      {
        day: 4,
        title: "NEW YORK – PHILADELPHIA – MUA SẮM DELAWARE – WASHINGTON D.C",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Sheraton Alexandria Old Town hoặc tương đương",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi Philadelphia. Chiêm ngưỡng Chuông Tự Do (Liberty Bell) và Dinh Độc Lập (Independence Hall).", highlight: true },
          { desc: "Dừng chân thỏa sức mua sắm tại Christiana Mall bang Delaware – 1 trong 5 bang miễn thuế tuyệt đối của Mỹ.", highlight: true },
          { desc: "Đến thủ đô Washington D.C, nhận phòng khách sạn 4 sao nghỉ ngơi." }
        ]
      },
      {
        day: 5,
        title: "WASHINGTON D.C – NHÀ TRẮNG – ĐIỆN CAPITOL – TIỆC TỐI THÂN MẬT",
        meals: "Ăn sáng, trưa, tiệc tối liên hoan",
        hotel: "Sheraton Alexandria Old Town",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
        activities: [
          { desc: "Chụp hình bên ngoài Nhà Trắng (White House), Điện Capitol và Đài tưởng niệm Washington.", highlight: true },
          { desc: "Viếng Nhà tưởng niệm Lincoln và Jefferson, chiêm ngưỡng các bộ sưu tập quý giá tại Bảo tàng Lịch sử Tự Nhiên Smithsonian.", highlight: true },
          { desc: "Mua sắm tại trung tâm Outlet giảm giá. Tối tham gia tiệc gala dinner thân mật ấm cúng có âm nhạc và karaoke giao lưu." }
        ]
      },
      {
        day: 6,
        title: "WASHINGTON D.C ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, ăn trên máy bay",
        activities: [
          { desc: "Đoàn ăn sáng tại khách sạn, làm thủ tục trả phòng. Xe đưa đoàn ra sân bay quốc tế làm thủ tục đáp chuyến bay về Việt Nam." }
        ]
      },
      {
        day: 7,
        title: "TP. HỒ CHÍ MINH",
        meals: "Ăn trên máy bay",
        activities: [
          { desc: "Đoàn hạ cánh an toàn xuống sân bay Tân Sơn Nhất. Kết thúc tour Bờ Đông Nước Mỹ 4 sao tuyệt vời!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay quốc tế khứ hồi TP.HCM – New York // Washington D.C – TP.HCM của Emirates 5★ (2 kiện 23kg + 7kg xách tay)",
      "Khách sạn tiêu chuẩn 4 sao quốc tế toàn chặng (DoubleTree by Hilton, Sheraton)",
      "Các bữa ăn theo chương trình tiêu chuẩn 25$ - 30$/bữa (Việt, Hoa, Thái, Mỹ) kèm 01 tiệc tối thân mật",
      "Vé du thuyền tham quan Tượng Nữ Thần Tự Do",
      "Xe du lịch máy lạnh đời mới phục vụ 11h/ngày",
      "Hướng dẫn viên chuyên nghiệp theo đoàn suốt tuyến từ Việt Nam",
      "Bảo hiểm du lịch toàn cầu và quà tặng cao cấp từ Én Việt"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng kể từ ngày kết thúc tour",
      "Lệ phí xin Visa Mỹ: 5.500.000 VNĐ / người",
      "Tiền bồi dưỡng (Tip) cho HDV và tài xế",
      "Phụ thu phòng đơn: 400 USD / khách",
      "Chi phí cá nhân ngoài hành trình"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng có chữ ký",
      "Ảnh 5x5cm nền trắng mới chụp",
      "Hồ sơ công việc và tài chính cá nhân",
      "Én Việt hỗ trợ hoàn thiện hồ sơ xin visa Hoa Kỳ chuyên nghiệp, tỷ lệ đậu cao"
    ]
  },

  // ── TOUR 14: DU LỊCH BỜ TÂY HOA KỲ (8N7Đ) ──
  {
    id: "tour-us-bo-tay",
    code: "EVG-US-BOTAY",
    title: "DU LỊCH BỜ TÂY HOA KỲ: PHOENIX – HORSESHOE BEND – ANTELOPE CANYON – MONUMENT VALLEY – ZION – LAS VEGAS – LOS ANGELES",
    itinerary: "Phoenix – Glen Canyon – Horseshoe Bend – Antelope Canyon – Monument Valley – Zion National Park – Las Vegas – Los Angeles – San Diego",
    duration: "08 Ngày 07 Đêm (Lưu trú Mỹ 6N5Đ)",
    durationDays: 8,
    airline: "Starlux Airlines 5★ / Eva Air",
    price: 76990000,
    priceFormatted: "76.990.000 VNĐ",
    highlights: [
      "Khám phá các kỳ quan thiên nhiên ngoạn mục nhất bờ Tây nước Mỹ trên cao nguyên sa mạc",
      "Horseshoe Bend: Khúc quanh Móng Ngựa trên sông Colorado với vách đá sa thạch trăm triệu năm tuổi",
      "Hẻm núi Linh Dương (Antelope Canyon): Tuyệt tác ánh sáng và những đường cong đá sa thạch ma mị của người thổ dân Navajo",
      "Thung lũng tượng đài Monument Valley: Biểu tượng huyền thoại của các siêu phẩm điện ảnh Hollywood viễn Tây",
      "Vườn quốc gia Zion: 'Vườn địa đàng' kỳ ảo với khe núi The Narrows và cung đường Riverside Walk dọc sông Trinh Nữ",
      "Las Vegas rực rỡ, Công viên đá 7 màu Seven Magic Mountains & Mua sắm Barstows Outlets",
      "Los Angeles & San Diego: Little Saigon Phước Lộc Thọ, Hàng không mẫu hạm USS Midway & Vịnh biển La Jolla xem hải cẩu"
    ],
    giftMeals: [
      "Bay cùng Hàng Không 5 Sao Starlux Airlines hoặc Eva Air (2 kiện ký gửi 23kg)",
      "Khách sạn 3 sao tiện nghi toàn hành trình (Holiday Inn Express, Excalibur, Best Western)",
      "Bao gồm vé tham quan các kỳ quan: Horseshoe Bend, Antelope Canyon, Monument Valley, Zion National Park",
      "Xe du lịch máy lạnh đời mới chất lượng cao",
      "Bữa ăn phong phú: Việt, Hoa, Thái, Mỹ theo lịch trình",
      "Bảo hiểm du lịch toàn cầu và quà tặng cao cấp Én Việt"
    ],
    country: "Hoa Kỳ (Mỹ)",
    region: "Tour Châu Mỹ",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "chau-my", "hoa-ky", "my"],
    badge: "Kỳ Quan Bờ Tây Sa Mạc",
    // Ảnh đại diện phù hợp: Tuyệt tác Hẻm núi Linh Dương Antelope Canyon sa thạch đỏ rực kỳ ảo
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1000&q=85",
    departure: "Tháng 11 (01, 22) & Tháng 12 (11, 27)",
    isFeatured: true,
    pdfFile: "DU LICH BO TAY HOA KY 8N7D.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1000&q=85", // Antelope Canyon
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80", // Monument Valley
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80", // Horseshoe Bend
      "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80"  // San Diego USS Midway
    ],
    flightInfo: {
      airline: "Starlux Airlines 5★ / Eva Air",
      outbound: "TP.HCM – Phoenix (PHX) máy bay hiện đại thân rộng",
      returnFlight: "Los Angeles (LAX) – TP.HCM",
      baggage: "Hành lý xách tay 7kg + 2 kiện ký gửi 23kg/kiện"
    },
    singleRoomSurcharge: "590 USD / khách",
    pricingTable: [
      { month: "Tháng 11/2026", dates: "01/11, 22/11", adult: "76.990.000", child: "65.490.000", infant: "26.950.000" },
      { month: "Tháng 12/2026", dates: "11/12, 27/12", adult: "76.990.000", child: "65.490.000", infant: "26.950.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ PHOENIX (BANG ARIZONA)",
        meals: "Ăn và nghỉ trên máy bay",
        activities: [
          { desc: "Tập trung tại Tân Sơn Nhất đáp chuyến bay đi Phoenix – thành phố lớn nhất bang Arizona." },
          { desc: "Do chênh lệch múi giờ, quý khách đến Mỹ cùng ngày. Xe đón đoàn đi ăn tối và về khách sạn nghỉ ngơi." }
        ]
      },
      {
        day: 2,
        title: "PHOENIX CITY TOUR – THỊ TRẤN PAGE – HORSESHOE BEND (MÓNG NGỰA)",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Holiday Inn Express & Suites Page",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
        activities: [
          { desc: "Tham quan Vườn thực vật sa mạc Desert Botanical Garden với hơn 50.000 loài thực vật sa mạc và xương rồng khổng lồ.", highlight: true },
          { desc: "Chiêm ngưỡng Tòa nhà Nghị viện Arizona State Capitol kiến trúc Tân cổ điển mái dát đồng.", highlight: true },
          { desc: "Đến thị trấn Page, chiêm ngưỡng Horseshoe Bend – khúc quanh hình móng ngựa tuyệt tác nơi sông Colorado uốn lượn qua vách núi sa thạch trăm triệu năm." }
        ]
      },
      {
        day: 3,
        title: "HẺM NÚI LINH DƯƠNG (ANTELOPE CANYON) – THUNG LŨNG MONUMENT VALLEY",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Holiday Inn Express & Suites Page",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
        activities: [
          { desc: "Khám phá Hẻm núi Linh Dương (Antelope Canyon) – tuyệt tác thiên nhiên sa mạc huyền bí với những dải ánh sáng kỳ ảo xuyên qua khe núi sa thạch.", highlight: true },
          { desc: "Thăm Thung lũng Monument Valley – xứ sở của những ngọn tháp đá sa thạch đỏ rực đứng sừng sững giữa trời xanh, bối cảnh kinh điển của phim miền Tây Hollywood.", highlight: true }
        ]
      },
      {
        day: 4,
        title: "PAGE – VƯỜN ĐỊA ĐÀNG ZION NATIONAL PARK – KHE NÚI THE NARROWS – LAS VEGAS",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Excalibur Hotel Las Vegas",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
        activities: [
          { desc: "Đến Công viên Quốc gia Zion (bang Utah) – một trong 'Tam đại mỹ cảnh' của bờ Tây nước Mỹ mang ý nghĩa 'vườn địa đàng'.", highlight: true },
          { desc: "Bách bộ trên cung đường Riverside Walk dọc sông Trinh Nữ chiêm ngưỡng vách đá dựng đứng sừng sững kỳ ảo.", highlight: true },
          { desc: "Di chuyển về Las Vegas nhận phòng khách sạn và tự do khám phá kinh đô sòng bạc về đêm." }
        ]
      },
      {
        day: 5,
        title: "LAS VEGAS – ĐÁ BẢY MÀU SEVEN MAGIC – ROUTE 66 – QUẬN CAM LITTLE SAIGON",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Best Western Plus Los Angeles",
        image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
        activities: [
          { desc: "Chụp ảnh tại Biển hiệu nổi tiếng 'Welcome to Fabulous Las Vegas'.", highlight: true },
          { desc: "Chiêm ngưỡng công trình nghệ thuật đá bảy màu Seven Magic Mountains giữa hoang mạc Mojave trên con đường Route 66 huyền thoại.", highlight: true },
          { desc: "Mua sắm tại Barstows Outlets và về Quận Cam dạo Thương xá Phước Lộc Thọ (Little Saigon) ấm áp thân quen." }
        ]
      },
      {
        day: 6,
        title: "LOS ANGELES – SAN DIEGO – CHIẾN HẠM USS MIDWAY – VỊNH LA JOLLA COVE",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Best Western Plus Los Angeles",
        image: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi San Diego – thành phố biển đáng sống nhất nước Mỹ.", highlight: true },
          { desc: "Chụp ảnh trước Hàng không mẫu hạm huyền thoại USS Midway và Tượng Nụ Hôn Hòa Bình nổi tiếng.", highlight: true },
          { desc: "Thăm Phố cổ Old Town San Diego, Khách sạn cổ kính Del Coronado và ngắm hàng trăm chú hải cẩu phơi nắng tại bãi biển La Jolla Cove.", highlight: true },
          { desc: "Tối xe đưa đoàn ra sân bay làm thủ tục đáp chuyến bay về Việt Nam." }
        ]
      },
      {
        day: 7,
        title: "LOS ANGELES ✈ VIỆT NAM",
        meals: "Nghỉ ngơi trên máy bay",
        activities: [
          { desc: "Đoàn nghỉ ngơi và tận hưởng dịch vụ hàng không 5 sao trên chuyến bay vượt Thái Bình Dương." }
        ]
      },
      {
        day: 8,
        title: "TP. HỒ CHÍ MINH",
        meals: "Ăn trên máy bay",
        activities: [
          { desc: "Đoàn hạ cánh xuống sân bay Tân Sơn Nhất. Kết thúc tour Bờ Tây Hoa Kỳ ngập tràn trải nghiệm kỳ quan!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay quốc tế khứ hồi SGN – PHOENIX // LOS ANGELES – SGN (2 kiện 23kg + 7kg xách tay)",
      "Khách sạn 3 sao quốc tế (Holiday Inn Express, Excalibur, Best Western)",
      "Vé tham quan các thắng cảnh: Horseshoe Bend, Antelope Canyon, Monument Valley, Zion Park",
      "Các bữa ăn theo lịch trình (Việt, Hoa, Thái, Mỹ)",
      "Xe du lịch máy lạnh 11h/ngày đưa đón suốt tuyến",
      "Hướng dẫn viên chuyên nghiệp theo đoàn từ Việt Nam",
      "Bảo hiểm du lịch toàn cầu và quà tặng du lịch Én Việt"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày về",
      "Lệ phí xin Visa Hoa Kỳ nộp LSQ: 5.500.000 VNĐ / người",
      "Tiền tip cho HDV và tài xế: 70 USD / người / tour",
      "Phụ thu phòng đơn: 590 USD / khách",
      "Chi phí cá nhân ngoài hành trình"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng",
      "Ảnh 5x5cm nền trắng mới chụp",
      "Hồ sơ công việc và tài chính cá nhân",
      "Én Việt hỗ trợ hoàn thiện hồ sơ và luyện phỏng vấn visa Mỹ chu đáo"
    ]
  }
];


// ─────────────────────────────────────────────────────────────────────────────
// 4. DANH SÁCH TOUR ĐÔNG NAM Á & CHÂU Á MỚI (THÁI LAN, PHUKET, CAMPUCHIA, PHILIPPINES, BALI, LÀO, MALAYSIA - SINGAPORE, SINGAPORE, TRUNG QUỐC)
// ─────────────────────────────────────────────────────────────────────────────

export const TOUR_DONG_NAM_A_DATASET: TourItem[] = [
  // ── 1. THÁI LAN: BANGKOK – PATTAYA – SUAN THAI – WAT ARUN ──
  {
    id: "tour-th-bkk-pty",
    code: "EVG-TH-BKK-PTY",
    title: "XỨ SỞ CHÙA VÀNG THÁI LAN: BANGKOK – PATTAYA – SUAN THAI – WAT ARUN",
    itinerary: "Bangkok - Pattaya - KDL Suan Thai - Wat Arun - Wat Yannawa",
    duration: "05 Ngày 04 Đêm",
    durationDays: 5,
    airline: "Vé máy bay khứ hồi (20kg ký gửi + 7kg xách tay)",
    price: 7990000,
    priceFormatted: "7.990.000 VNĐ",
    highlights: [
      "Check-in Thưởng thức Cà phê trên máy bay Boeing 747 huyền thoại độc đáo",
      "Khu du lịch Suan Thai Pattaya: Trải nghiệm cưỡi voi, mặc cổ phục Thái Lan & buffet trái cây",
      "Trân Bảo Phật Sơn (Khao Chee Chan) – Tượng Phật 999kg vàng ròng khắc trên vách núi",
      "Wat Arun (Chùa Bình Minh) – Ngôi chùa khảm sành sứ đẹp và linh thiêng nhất Thái Lan",
      "Chùa Thuyền Wat Yannawa – Kiến trúc hình con thuyền độc nhất vô nhị thế kỷ",
      "Dạo thuyền trên dòng sông huyền thoại Chaophraya ngắm hiện tượng cá nổi",
      "Chợ đêm Asiatique bên bờ sông & Trải nghiệm Buffet du thuyền sang trọng",
      "Thưởng thức Lẩu Hotpot Tomyum trứ danh & Tiệc tự chọn BBQ Hải sản",
      "Tặng 01 suất Massage Thái Cổ Truyền phục hồi năng lượng đánh thức giác quan",
      "Tự do mua sắm tại Big C Pratunam, Central World, Siam Paragon, MBK"
    ],
    giftMeals: [
      "Thưởng thức 07 bữa ăn chính đậm đà hương vị ẩm thực địa phương",
      "Tặng 01 bữa Lẩu Hotpot Tomyum Thái Lan chua cay chuẩn vị",
      "Tặng 01 bữa tiệc buffet BBQ Hải sản thơm ngon tại Pattaya",
      "Tặng 01 bữa trưa phong cách Khantoke truyền thống Thái Lan",
      "Tặng vé Cà phê check-in trên siêu cơ Boeing 747",
      "Tặng 01 suất Massage Thái Cổ Truyền thư giãn toàn thân",
      "Tặng nón du lịch cao cấp Én Việt Group",
      "Khách sạn 4 sao tiêu chuẩn tiện nghi suốt tuyến tại Thái Lan"
    ],
    country: "Thái Lan (Bangkok - Pattaya)",
    region: "Tour Đông Nam Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "dong-nam-a", "thai-lan"],
    badge: "Siêu Hot Bán Chạy",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1000&q=85",
    departure: "Khởi hành hàng tuần",
    isFeatured: true,
    pdfFile: "XU SO CHUA VANG THAI LAN BANGKOK PATTAYA 5N4D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1000&q=85",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vé máy bay đoàn khứ hồi SGN – BKK – SGN",
      outbound: "Chuyến bay thẳng Tân Sơn Nhất (SGN) – Bangkok (BKK)",
      returnFlight: "Chuyến bay thẳng Bangkok (BKK) – Tân Sơn Nhất (SGN)",
      baggage: "Hành lý 20kg ký gửi + 07kg xách tay"
    },
    singleRoomSurcharge: "2.520.000 VNĐ / khách",
    pricingTable: [
      { month: "Khởi hành hàng tuần", dates: "Thứ 4 & Thứ 7 hàng tuần", adult: "7.990.000", child: "6.990.000", infant: "2.990.000" },
      { month: "Khởi hành dịp Lễ", dates: "Các ngày lễ trong năm", adult: "8.990.000", child: "7.990.000", infant: "3.200.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ BANGKOK – PATTAYA",
        meals: "Ăn coupon trưa, Ăn tối Hotpot Tomyum",
        activities: [
          { desc: "Trưởng đoàn Én Việt đón quý khách tại ga quốc tế Tân Sơn Nhất đáp chuyến bay đi Bangkok, Thái Lan." },
          { desc: "Đến Bangkok, quý khách dùng bữa trưa coupon tiện lợi tại sân bay. Khởi hành đi thành phố biển Pattaya náo nhiệt." },
          { desc: "Thưởng thức cà phê trên siêu cơ Boeing 747 huyền thoại: không gian buồng lái và động cơ phản lực tái chế độc nhất vô nhị." },
          { desc: "Dùng bữa tối với Lẩu Hotpot Tomyum Thái Lan. Thưởng thức Show biểu diễn nghệ thuật chuyển giới hoành tráng của các vũ công." },
          { desc: "Nhận phòng khách sạn 4 sao tại Pattaya, tự do khám phá phố đêm Walking Street không ngủ." }
        ]
      },
      {
        day: 2,
        title: "PATTAYA – BÃI BIỂN JOMTIEN – SUAN THAI",
        meals: "Ăn sáng, trưa Khantoke, tối BBQ Hải sản",
        activities: [
          { desc: "Ăn sáng buffet tại khách sạn. Tự do tắm biển hoặc vui chơi tại bãi biển Jomtien tuyệt đẹp của Pattaya." },
          { desc: "Khám phá Khu du lịch Suan Thai Pattaya 'All-in-one': Trải nghiệm mặc trang phục truyền thống Thái Lan, cưỡi voi, đi xe ngựa, thưởng thức buffet trái cây nhiệt đới." },
          { desc: "Thưởng thức bữa trưa kiểu Khantoke hoàng gia và xem show văn hóa nghệ thuật dân tộc đặc sắc." },
          { desc: "Chiêm bái Trân Bảo Phật Sơn (Khao Chee Chan) – tượng Phật Thích Ca dát 999kg vàng khắc laser tinh xảo trên vách núi đá cao 130m." },
          { desc: "Trải nghiệm 01 suất Massage Thái Cổ Truyền hồi phục thể lực và đánh thức mọi giác quan." },
          { desc: "Thưởng thức tiệc tối BBQ Hải sản tự chọn phong phú, nghỉ đêm tại Pattaya." }
        ]
      },
      {
        day: 3,
        title: "PATTAYA – BUFFET DU THUYỀN – BANGKOK",
        meals: "Ăn sáng, trưa, tối Buffet du thuyền",
        activities: [
          { desc: "Ăn sáng, trả phòng khách sạn. Khởi hành về thủ đô Bangkok." },
          { desc: "Tham quan Làng văn hóa Thai Thani – tái hiện không gian kiến trúc và phong tục 4 miền đất nước Thái Lan." },
          { desc: "Dùng cơm trưa tại nhà hàng địa phương, tiếp tục hành trình về Bangkok." },
          { desc: "Tham quan Chợ đêm Asiatique bên bờ sông Chao Phraya lộng lẫy và sôi động." },
          { desc: "Trải nghiệm đặc biệt: Dùng tiệc Buffet tối và thưởng thức chương trình âm nhạc sống động trên Du thuyền sang trọng lướt sóng Chao Phraya." },
          { desc: "Về khách sạn 4 sao tại Bangkok nhận phòng nghỉ ngơi." }
        ]
      },
      {
        day: 4,
        title: "BANGKOK – WAT ARUN (CHÙA BÌNH MINH) – SHOPPING",
        meals: "Ăn sáng, trưa, tối tự do",
        activities: [
          { desc: "Ăn sáng tại khách sạn. Tham quan Bảo Tàng Trầm Hương và Trung Tâm Nghiên Cứu Nọc Độc Rắn Hoàng Gia." },
          { desc: "Xem màn trình diễn xiếc rắn nghẹt thở cùng các chú rắn thuần chủng và nghe chuyên viên dược sĩ tư vấn sức khỏe." },
          { desc: "Ăn trưa, sau đó chiêm bái Wat Arun (Chùa Bình Minh) nằm bên bờ sông Chao Phraya – công trình kiến trúc khảm sành sứ tráng lệ biểu tượng của xứ sở nụ cười." },
          { desc: "Tự do mua sắm thả ga tại các trung tâm thương mại lớn nhất Bangkok: Big C Pratunam, Central World, Siam Paragon, Platinum Mall." },
          { desc: "Tự túc trải nghiệm ẩm thực đường phố Bangkok về đêm, nghỉ đêm tại Bangkok." }
        ]
      },
      {
        day: 5,
        title: "BANGKOK – WAT YANNAWA – TP. HỒ CHÍ MINH",
        meals: "Ăn sáng buffet",
        activities: [
          { desc: "Dùng điểm tâm sáng, làm thủ tục trả phòng." },
          { desc: "Viếng Chùa Thuyền Wat Yannawa – ngôi chùa cổ hàng trăm năm với kiến trúc hình con tàu buồm độc đáo thời vua Rama III, chiêm bái hàng ngàn xá lợi Phật linh thiêng." },
          { desc: "Dạo thuyền trên dòng sông huyền thoại Chaophraya, ngắm cảnh thủ đô từ trên sông và chiêm ngưỡng hiện tượng cá nổi tự nhiên." },
          { desc: "Xe đưa đoàn ra sân bay làm thủ tục đáp chuyến bay về TP. Hồ Chí Minh. Kết thúc chuyến du lịch Thái Lan tràn đầy kỷ niệm." }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi theo đoàn SGN – BKK – SGN (20kg ký gửi + 7kg xách tay)",
      "Khách sạn 4 sao tiêu chuẩn tiện nghi tại Bangkok & Pattaya (2 khách/phòng)",
      "Các bữa ăn theo chương trình: 4 bữa buffet sáng + 7 bữa ăn chính (bao gồm Buffet Hải sản & Lẩu Hotpot Tomyum)",
      "01 bữa Buffet tối lãng mạn trên du thuyền cao cấp sông Chao Phraya",
      "Tặng trải nghiệm Cà phê máy bay Boeing 747",
      "Tặng 01 suất Massage Thái Cổ Truyền",
      "Vé tham quan tất cả các điểm theo lịch trình: KDL Suan Thai, Wat Arun, Wat Yannawa, Trân Bảo Phật Sơn",
      "Xe máy lạnh đời mới vận chuyển theo đoàn suốt tuyến",
      "Hướng dẫn viên tiếng Việt từ Việt Nam và HDV địa phương nhiệt tình chu đáo",
      "Bảo hiểm du lịch quốc tế quyền lợi tối đa 10.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày về",
      "Tiền tip cho hướng dẫn viên và tài xế địa phương: 25 USD / khách / tour",
      "Phụ thu phòng đơn: 2.520.000 VNĐ / khách",
      "Chi phí cá nhân: giặt ủi, điện thoại, đồ uống ngoài chương trình"
    ],
    visaRequirements: [
      "Khách mang quốc tịch Việt Nam được miễn visa du lịch Thái Lan 30 ngày",
      "Hộ chiếu còn hạn sử dụng trên 6 tháng tính từ ngày kết thúc tour",
      "Khách mang quốc tịch nước ngoài kiểm tra điều kiện visa tái nhập Việt Nam và visa nhập cảnh Thái Lan"
    ]
  },

  // ── 2. PHUKET – ĐẢO PHI PHI (VIETNAM AIRLINES) ──
  {
    id: "tour-th-phuket-phiphi",
    code: "EVG-TH-HKT-PHI",
    title: "DU LỊCH KHÁM PHÁ THIÊN ĐƯỜNG BIỂN PHUKET – ĐẢO PHI PHI",
    itinerary: "Phuket - Đảo Phi Phi - Vịnh Maya - Mũi Promthep - Phố cổ Phuket",
    duration: "04 Ngày 03 Đêm",
    durationDays: 4,
    airline: "Vietnam Airlines 4★ (Chuyến bay thẳng)",
    price: 11690000,
    priceFormatted: "11.690.000 VNĐ",
    highlights: [
      "Bay thẳng cùng Vietnam Airlines đẳng cấp quốc gia (VN621 & VN620 tiện nghi)",
      "Khám phá Đảo Phi Phi (Phi Phi Island) – Top những hòn đảo thiên đường đẹp nhất hành tinh",
      "Chiêm ngưỡng Vịnh Maya (Maya Bay) tuyệt mỹ thuộc vườn quốc gia Hat Noppharat Thara",
      "Laem Promthep View Point – Mũi đất cực Nam ngắm hoàng hôn rực rỡ nhất đảo Phuket",
      "Phố cổ Phuket Old Town rực rỡ sắc màu kiến trúc di sản Sino-Portuguese",
      "Chiêm bái Đền Chalong – Ngôi đền Phật giáo linh thiêng bậc nhất Phuket",
      "Thư giãn tại bãi biển sôi động Patong Beach và hòa mình vào phố đêm Patong Walking Street",
      "Viếng Chùa Kathu Shrine linh thiêng cầu bình an may mắn cho gia đình"
    ],
    giftMeals: [
      "Bay thẳng Vietnam Airlines bao gồm 23kg hành lý ký gửi + 10kg xách tay",
      "Khách sạn 4 sao tiêu chuẩn địa phương tại Phuket (gần biển Patong sôi động)",
      "Bữa ăn phong phú theo chương trình kết hợp ẩm thực hải sản và phong vị Thái Lan",
      "Tàu du lịch cao tốc đưa đoàn ra quần thể đảo Phi Phi và ngắm vịnh Maya",
      "Vé tham quan trọn gói các điểm danh thắng trong chương trình",
      "Tặng nón du lịch Én Việt & Nước suối phục vụ suốt tuyến",
      "Bảo hiểm du lịch quốc tế bồi thường tối đa 10.000 USD/khách"
    ],
    country: "Thái Lan (Đảo Phuket - Phi Phi)",
    region: "Tour Đông Nam Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "dong-nam-a", "thai-lan", "phuket"],
    badge: "Bay Thẳng Vietnam Airlines",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1000&q=85",
    departure: "Khởi hành định kỳ hàng tháng",
    isFeatured: true,
    pdfFile: "DU LICH KHAM PHA PHUKET PHI PHI 4N3D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1000&q=85",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietnam Airlines (Chuyến bay thẳng)",
      outbound: "VN 621 SGN – HKT 16:00 – 17:50 (Tân Sơn Nhất – Phuket)",
      returnFlight: "VN 620 HKT – SGN 18:45 – 20:45 (Phuket – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 23kg + 10kg hành lý xách tay"
    },
    singleRoomSurcharge: "3.200.000 VNĐ / khách",
    pricingTable: [
      { month: "Khởi hành Tháng 10", dates: "10/10, 24/10", adult: "11.690.000", child: "9.950.000", infant: "4.090.000" },
      { month: "Khởi hành Tháng 11", dates: "14/11, 28/11", adult: "11.690.000", child: "9.950.000", infant: "4.090.000" },
      { month: "Khởi hành Tháng 12", dates: "19/12", adult: "11.690.000", child: "9.950.000", infant: "4.090.000" },
      { month: "Khởi hành Noel", dates: "26/12 (Noel)", adult: "11.990.000", child: "10.190.000", infant: "4.190.000" },
      { month: "Khởi hành Tháng 01", dates: "09/01, 23/01", adult: "11.690.000", child: "9.950.000", infant: "4.090.000" },
      { month: "Khởi hành Tháng 02", dates: "13/02, 27/02", adult: "11.690.000", child: "9.950.000", infant: "4.090.000" },
      { month: "Khởi hành Tháng 03", dates: "13/03, 20/03", adult: "11.690.000", child: "9.950.000", infant: "4.090.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ THIÊN ĐƯỜNG BIỂN PHUKET",
        meals: "Ăn nhẹ máy bay, Ăn tối",
        activities: [
          { desc: "13:00 Tập trung tại ga quốc tế Tân Sơn Nhất đáp chuyến bay thẳng VN621 (16:00 - 17:50) của Vietnam Airlines đi Phuket." },
          { desc: "Đến sân bay Phuket, xe và HDV địa phương đón đoàn di chuyển vào trung tâm thành phố." },
          { desc: "Dùng bữa tối tại nhà hàng địa phương, thưởng thức hải sản và đặc sản biển miền Nam Thái Lan." },
          { desc: "Về khách sạn 4 sao nhận phòng nghỉ ngơi. Tự do khám phá cuộc sống về đêm sôi động tại khu Patong." }
        ]
      },
      {
        day: 2,
        title: "KHÁM PHÁ THIÊN ĐƯỜNG ĐẢO PHI PHI – VỊNH MAYA",
        meals: "Ăn sáng, Ăn trưa trên đảo, Ăn tối tự túc chợ đêm",
        activities: [
          { desc: "Ăn sáng tại khách sạn. Đoàn lên tàu cao tốc ra khơi khám phá quần đảo Phi Phi – một trong những vùng biển đẹp nhất thế giới." },
          { desc: "Chiêm ngưỡng Vịnh Maya (Maya Bay) thuộc Vườn quốc gia Hat Noppharat Thara – nơi từng ghi hình bộ phim bom tấn 'The Beach'." },
          { desc: "Tự do tắm biển, hòa mình vào làn nước trong xanh màu ngọc bích và bãi cát trắng mịn như phấn." },
          { desc: "Dùng bữa trưa buffet trên đảo. Buổi chiều quay trở về đất liền." },
          { desc: "Dạo bước tại Phố Cổ Phuket Old Town – chiêm ngưỡng những dãy nhà cổ mang kiến trúc Sino-Portuguese rực rỡ sắc màu." },
          { desc: "Tối tự do thưởng thức ẩm thực đường phố tại chợ đêm hoặc đăng ký xem show diễn tạp kỹ Cabaret Show nổi tiếng." }
        ]
      },
      {
        day: 3,
        title: "ĐỀN CHALONG – HOÀNG HÔN LAEM PROMTHEP",
        meals: "Ăn sáng, trưa, tối",
        activities: [
          { desc: "Ăn sáng tại khách sạn. Đoàn khởi hành chiêm bái Đền Chalong (Wat Chalong) – ngôi đền Phật giáo linh thiêng và lớn nhất đảo Phuket." },
          { desc: "Tham quan trung tâm mật ong Big Bee và trung tâm chế tác đá quý Gem Gallery lớn bậc nhất." },
          { desc: "Dùng cơm trưa tại nhà hàng. Chiều di chuyển đến Mũi Promthep (Promthep Cape) – điểm cực Nam của Phuket, nơi ngắm hoàng hôn lộng lẫy bậc nhất xứ sở chùa vàng." },
          { desc: "Dùng bữa tối tại nhà hàng. Buổi tối tự do khám phá phố đi bộ Patong Walking Street rực rỡ ánh đèn hoặc xem show diễn văn hóa nghệ thuật Siam Niramit hoành tráng." }
        ]
      },
      {
        day: 4,
        title: "PATONG BEACH – CHÙA KATHU ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, trưa, Ăn nhẹ trên máy bay",
        activities: [
          { desc: "Ăn sáng tại khách sạn. Quý khách tự do tắm biển và dạo chơi tại bãi biển Patong Beach thơ mộng." },
          { desc: "Làm thủ tục trả phòng, dùng bữa trưa tại nhà hàng địa phương." },
          { desc: "Viếng thăm Chùa Kathu Shrine – ngôi chùa cổ linh thiêng cầu bình an, tài lộc và may mắn." },
          { desc: "Xe đưa quý khách ra sân bay Phuket làm thủ tục đáp chuyến bay VN620 (18:45 - 20:45) về lại TP.HCM. Kết thúc hành trình nghỉ dưỡng thiên đường biển Phuket." }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi Vietnam Airlines SGN – HKT – SGN (23kg ký gửi + 10kg xách tay)",
      "Khách sạn 4 sao tiêu chuẩn tại Phuket: Baumanburi / Deevana Resort Patong / Pearl Hotel hoặc tương đương (2 người/phòng)",
      "Các bữa ăn tiêu chuẩn theo chương trình + Nước suối 1 chai/người/ngày",
      "Tàu cao tốc đưa đón tham quan quần thể đảo Phi Phi & Vịnh Maya",
      "Vé vào cổng tất cả các điểm tham quan theo lịch trình",
      "Xe ô tô máy lạnh chất lượng cao đưa đón đoàn suốt tuyến",
      "Trưởng đoàn từ Việt Nam và hướng dẫn viên địa phương nhiệt tình",
      "Bảo hiểm du lịch quốc tế bồi thường tối đa 10.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Phí bồi dưỡng HDV và tài xế địa phương: 20 USD / khách (Lễ Tết: 24 USD / khách)",
      "Phụ thu phòng đơn: 3.200.000 VNĐ / khách",
      "Chi phí các show diễn tự chọn (Cabaret Show, Siam Niramit) và chi phí cá nhân ngoài chương trình"
    ],
    visaRequirements: [
      "Công dân Việt Nam miễn visa du lịch Thái Lan",
      "Hộ chiếu còn hạn trên 6 tháng",
      "Khách quốc tịch nước ngoài kiểm tra visa nhập cảnh Thái Lan và visa tái nhập Việt Nam"
    ]
  },

  // ── 3. CAMPUCHIA: SIEM REAP – PHNOM PENH ──
  {
    id: "tour-kh-siemreap-phnompenh",
    code: "EVG-KH-REP-PNH",
    title: "XỨ SỞ CHÙA THÁP CAMPUCHIA: SIEM REAP – PHNOM PENH",
    itinerary: "Cố đô Siem Reap - Quần thể Angkor - Cầu Cổ Rồng - Thủ đô Phnom Penh",
    duration: "04 Ngày 03 Đêm",
    durationDays: 4,
    airline: "Xe du lịch đời mới máy lạnh cao cấp khứ hồi",
    price: 4890000,
    priceFormatted: "4.890.000 VNĐ",
    highlights: [
      "Chiêm ngưỡng Đền Angkor Wat – Kỳ quan thế giới vĩ đại và linh thiêng nhất Cambodia",
      "Đền Bayon với 216 nụ cười bí ẩn tượng trưng cho lòng từ bi hỷ xả của Phật",
      "Đền Ta Prohm huyền bí – Bối cảnh bộ phim nổi tiếng 'Bí Mật Ngôi Mộ Cổ' của Angelina Jolie",
      "Cầu cổ Rồng Kompong Kdei hơn 1.000 năm tuổi trên con đường tơ lụa cổ xưa",
      "Khám phá Biển Hồ Tonle Sap – Hồ nước ngọt tự nhiên lớn nhất Đông Nam Á",
      "Quần thể Hoàng Cung Phnom Penh nguy nga tráng lệ nơi làm việc của Quốc Vương",
      "Chùa Vàng – Chùa Bạc với tượng Phật Ngọc Lục Bảo và nền lót bạc ròng duy nhất Đông Dương",
      "Đài Độc Lập & Đài tưởng niệm tình hữu nghị Việt Nam – Cambodia",
      "Thử vận may tại Casino 5 sao Naga World & Dạo bước phố đi bộ Chaktomuk bên bờ sông Tonle Sap",
      "Thưởng thức Buffet lẩu băng chuyền & Đại tiệc Buffet tại Tonle Bassac II lớn nhất Phnom Penh",
      "Tặng 01 suất Massage cổ truyền Campuchia thư giãn xua tan mệt mỏi"
    ],
    giftMeals: [
      "Đại tiệc Buffet tại Nhà hàng Tonle Bassac II – nhà hàng lớn nhất tại thủ đô Phnom Penh",
      "Thưởng thức 01 bữa Buffet Lẩu Băng Chuyền tươi ngon phong phú",
      "Tặng 01 vé massage cổ truyền Campuchia thư giãn chăm sóc sức khỏe",
      "Khách sạn 4 sao tiêu chuẩn tiện nghi tại Siem Reap và Phnom Penh",
      "Xe du lịch đời mới máy lạnh êm ái suốt tuyến từ TP.HCM qua Campuchia",
      "Tặng nón du lịch cao cấp Én Việt và nước uống trên xe hàng ngày",
      "Bảo hiểm du lịch quốc tế bồi thường tai nạn tối đa 10.000 USD/khách"
    ],
    country: "Campuchia (Siem Reap - Phnom Penh)",
    region: "Tour Đông Nam Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "dong-nam-a", "campuchia"],
    badge: "Giá Cực Tốt · Khởi Hành Thường Xuyên",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85",
    departure: "Khởi hành Thứ 5 hàng tuần",
    isFeatured: true,
    pdfFile: "XU SO CHUA THAP CAMPUCHIA SIEM REAP PHNOM PENH 4N3D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80"
    ],
    flightInfo: {
      airline: "Xe du lịch đời mới cao cấp (Cửa khẩu quốc tế Mộc Bài)",
      outbound: "Xe đón tại TP.HCM 04:00 sáng – Cửa khẩu Mộc Bài – Siem Reap",
      returnFlight: "Phnom Penh – Cửa khẩu Mộc Bài – TP.HCM (về đến chiều tối)",
      baggage: "Hành lý xách tay và hành lý mang theo thoải mái"
    },
    singleRoomSurcharge: "1.680.000 VNĐ / khách",
    pricingTable: [
      { month: "Khởi hành hàng tuần", dates: "Thứ 5 hàng tuần", adult: "4.890.000", child: "3.667.000", infant: "489.000" },
      { month: "Khởi hành dịp Lễ", dates: "Các dịp Lễ lớn trong năm", adult: "5.490.000", child: "4.117.000", infant: "549.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH – CỬA KHẨU MỘC BÀI – CỐ ĐÔ SIEM REAP",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        activities: [
          { desc: "04:00 Xe và HDV Én Việt đón quý khách tại điểm hẹn, khởi hành đi Campuchia qua cửa khẩu Mộc Bài Tây Ninh." },
          { desc: "Làm thủ tục xuất nhập cảnh nhanh chóng, tiếp tục hành trình đến cố đô Siem Reap." },
          { desc: "Dừng chân dùng cơm trưa tại nhà hàng địa phương. Tham quan Cầu Rồng Kompong Kdei hơn 1.000 năm tuổi bằng đá ong nguyên khối kỳ vĩ." },
          { desc: "Tặng quý khách vé Massage cổ truyền Campuchia thư giãn xua tan mệt mỏi sau chặng đường dài." },
          { desc: "Đến Siem Reap, dùng bữa tối, nhận phòng khách sạn 4 sao. Tự do khám phá chợ đêm Siem Reap và phố Tây Pub Street." }
        ]
      },
      {
        day: 2,
        title: "QUẦN THỂ KỲ QUAN ANGKOR WAT – BAYON – TA PROHM",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        activities: [
          { desc: "Ăn sáng buffet tại khách sạn. Khởi hành khám phá Quần thể Angkor – Di sản văn hóa thế giới vĩ đại." },
          { desc: "Chiêm bái Đền Angkor Wat thiêng liêng và đồ sộ nhất Campuchia, kiệt tác kiến trúc đỉnh cao thế kỷ XII." },
          { desc: "Khám phá Đền Ta Prohm với những rễ cây cổ thụ khổng lồ siết chặt lấy các vách đá đổ nát – phim trường 'Bí Mật Ngôi Mộ Cổ'." },
          { desc: "Tham quan Đền Bayon nằm ở trung tâm Angkor Thom với 216 khuôn mặt Phật mỉm cười huyền bí đầy từ bi." },
          { desc: "Dùng cơm trưa tại nhà hàng. Chiều ghé thăm trung tâm chế tác đá quý, ngắm cảnh Biển Hồ Tonle Sap hoặc Quảng trường Hoàng Cung Siem Reap, Chùa Dơi linh thiêng." },
          { desc: "Dùng bữa tối, tự do thưởng thức ẩm thực đường phố Siem Reap về đêm." }
        ]
      },
      {
        day: 3,
        title: "SIEM REAP – CHỢ CÔN TRÙNG SKUN – THỦ ĐÔ PHNOM PENH",
        meals: "Ăn sáng, Ăn trưa Lẩu Băng Chuyền, Ăn tối",
        activities: [
          { desc: "Ăn sáng, trả phòng khách sạn. Khởi hành về thủ đô Phnom Penh." },
          { desc: "Dừng chân tại Chợ côn trùng Skun – trải nghiệm các món ăn độc lạ như nhện chiên giòn, dế, bò cạp thơm lừng của người bản địa." },
          { desc: "Đến Phnom Penh, thưởng thức bữa trưa Buffet Lẩu Băng Chuyền hấp dẫn. Nhận phòng khách sạn 4 sao nghỉ ngơi." },
          { desc: "Buổi chiều tham quan và mua sắm tại Chợ Lớn Mới Phsar Th'mey biểu tượng kiến trúc Art Deco." },
          { desc: "Tham quan Casino 5 sao đẳng cấp Naga World sang trọng bậc nhất xứ Chùa Tháp." },
          { desc: "Dùng bữa tối. Xe đưa đoàn dạo bước Phố đi bộ Chaktomuk bên bờ sông Tonle Sap nhộn nhịp hoặc tự do đi thuyền ngắm Phnom Penh về đêm." }
        ]
      },
      {
        day: 4,
        title: "HOÀNG CUNG – CHÙA VÀNG BẠC – BUFFET TONLE BASSAC II – TP.HCM",
        meals: "Ăn sáng buffet, Đại tiệc Buffet Tonle Bassac II",
        activities: [
          { desc: "Dùng điểm tâm sáng, làm thủ tục trả phòng khách sạn." },
          { desc: "Chụp ảnh lưu niệm tại Đài Độc Lập và Đài tưởng niệm hữu nghị Việt Nam – Cambodia." },
          { desc: "Tham quan Quần thể Hoàng Cung Phnom Penh tráng lệ – nơi ở và làm việc của Quốc Vương Campuchia." },
          { desc: "Chiêm bái Chùa Vàng – Chùa Bạc với sàn nhà lót hơn 5.000 viên gạch bằng bạc ròng và pho tượng Phật bằng vàng ròng đính 2.086 viên kim cương quý giá." },
          { desc: "Thưởng thức Đại tiệc Buffet tại Nhà hàng Tonle Bassac II – thiên đường ẩm thực lớn nhất tại thủ đô Phnom Penh." },
          { desc: "Khởi hành về lại cửa khẩu Mộc Bài, làm thủ tục nhập cảnh Việt Nam. Xe đưa quý khách về lại điểm đón ban đầu tại TP.HCM. Kết thúc hành trình ý nghĩa." }
        ]
      }
    ],
    inclusions: [
      "Xe du lịch đời mới máy lạnh cao cấp đưa đón suốt hành trình Việt Nam – Campuchia",
      "Lệ phí xuất nhập cảnh hai nước Việt Nam và Campuchia",
      "Khách sạn 4 sao tiêu chuẩn tại Siem Reap và Phnom Penh (2 người/phòng)",
      "Các bữa ăn theo chương trình: 3 bữa sáng buffet + 7 bữa ăn chính",
      "01 bữa Đại tiệc Buffet tại nhà hàng Tonle Bassac II lớn nhất Phnom Penh",
      "01 bữa Buffet Lẩu Băng Chuyền hiện đại",
      "Tặng 01 vé massage cổ truyền Campuchia thư giãn",
      "Vé tham quan tất cả các thắng cảnh trong chương trình (Angkor Wat, Angkor Thom, Ta Prohm, Hoàng Cung, Chùa Bạc)",
      "Hướng dẫn viên tiếng Việt nhiệt tình theo đoàn suốt tuyến",
      "Tặng nón du lịch Én Việt & Nước suối trên xe hàng ngày",
      "Bảo hiểm du lịch quốc tế quyền lợi tối đa 10.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Tiền tip cho hướng dẫn viên và tài xế địa phương: 24 USD / khách / tour",
      "Phụ thu phòng đơn: 1.680.000 VNĐ / khách",
      "Visa Campuchia đối với khách mang hộ chiếu nước ngoài: 40 USD / khách",
      "Chi phí cá nhân: giặt ủi, điện thoại, đồ uống ngoài chương trình"
    ],
    visaRequirements: [
      "Công dân Việt Nam miễn visa du lịch Campuchia",
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc chuyến đi",
      "Khách quốc tịch nước ngoài mang theo 2 ảnh 4x6 nền trắng và visa tái nhập Việt Nam"
    ]
  },

  // ── 4. PHILIPPINES: CEBU – OSLOB – MOALBOAL (KHÁM PHÁ ĐẠI DƯƠNG) ──
  {
    id: "tour-ph-cebu-oslob",
    code: "EVG-PH-CEBU",
    title: "KHÁM PHÁ ĐẠI DƯƠNG PHILIPPINES: CEBU – OSLOB – MOALBOAL",
    itinerary: "Đảo Cebu - Lặn cùng Cá Mập Voi Oslob - Bão Cá Mòi Moalboal - Thác Kawasan",
    duration: "04 Ngày 04 Đêm",
    durationDays: 4,
    airline: "Vietjet Air / Cebu Pacific (Khứ hồi)",
    price: 13990000,
    priceFormatted: "13.990.000 VNĐ",
    highlights: [
      "Trải nghiệm ngoạn mục: Bơi lội và lặn ngắm sát cạnh Cá Mập Voi Oslob (Whale Shark) khổng lồ dài tới 12m",
      "Lặn ngắm kỳ quan 'Bão Cá Mòi' (Sardine Run) Moalboal hàng triệu con kết thành bức tường bạc lấp lánh như phim National Geographic",
      "Săn tìm và thỏa thích bơi lội cùng những chú Rùa biển xanh tự nhiên thong dong bên rạn san hô",
      "Chinh phục Thác Ngọc Kawasan (Kawasan Falls) 3 tầng với làn nước xanh ngọc bích tuyệt mỹ",
      "Khám phá Đảo Sumilon thiên đường với dải cát trắng Sumilon Sandbar đổi dáng theo thủy triều",
      "Tắm thác mành Tumalog huyền ảo mộng mơ như dải lụa mỏng giữa vách đá phủ rêu xanh",
      "Trải nghiệm thư giãn tại suối nước nóng tự nhiên Guadalupe Mainit giữa rừng nguyên sinh",
      "Chiêm bái Đền Đức Mẹ Simala – kiệt tác kiến trúc lâu đài châu Âu nguy nga giữa đảo Cebu",
      "Check-in Đền Leah phong cách Hy Lạp – La Mã cổ đại và ngắm toàn cảnh thành phố Cebu từ trên cao",
      "Viếng thăm Nhà thờ cổ Sto. Nino và Cây thánh giá Magellan lịch sử từ thế kỷ XVI"
    ],
    giftMeals: [
      "Vé máy bay khứ hồi SGN – CEB – SGN (20kg hành lý ký gửi + 7kg xách tay)",
      "Khách sạn resort 3 – 4 sao tiêu chuẩn tiện nghi tại Cebu và Oslob",
      "Các bữa ăn chính mang đậm phong vị ẩm thực miền biển Philippines",
      "Thưởng thức tiệc nướng buffet BBQ hải sản kiểu Philippines tại Oslob",
      "Tặng trọn gói thuyền và trang thiết bị lặn snorkeling cơ bản (áo phao, kính lặn, ống thở)",
      "Phí bảo tồn môi trường biển và cứu hộ chuyên nghiệp đồng hành",
      "Hướng dẫn viên giàu kinh nghiệm từ Việt Nam và huấn luyện viên lặn địa phương",
      "Bảo hiểm du lịch quốc tế quyền lợi tối đa 10.000 USD/khách"
    ],
    country: "Philippines (Đảo Cebu - Oslob - Moalboal)",
    region: "Tour Đông Nam Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "dong-nam-a", "philippines", "cebu"],
    badge: "Bơi Cùng Cá Mập Voi",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1000&q=85",
    departure: "Khởi hành hàng tháng",
    isFeatured: true,
    pdfFile: "KHAM PHA DAI DUONG PHILIPPINES CEBU OSLOB MOALBOAL 4N4D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1000&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietjet Air / Cebu Pacific",
      outbound: "VJ 1892 SGN – CEB 22:00 – 02:00+ (Tân Sơn Nhất – Mactan Cebu)",
      returnFlight: "5J 5780 CEB – SGN 18:35 – 20:45 (Mactan Cebu – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 20kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "Liên hệ tư vấn theo yêu cầu",
    pricingTable: [
      { month: "Khởi hành hàng tháng", dates: "Định kỳ hàng tháng", adult: "13.990.000", child: "12.590.000", infant: "4.190.000" },
      { month: "Khởi hành dịp Lễ", dates: "Dịp Lễ / Mùa hè", adult: "15.990.000", child: "14.390.000", infant: "4.790.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ MACTAN CEBU – THỊ TRẤN OSLOB – THÁC TUMALOG",
        meals: "Ăn sáng trên đường, Ăn trưa, Ăn tối Buffet nướng",
        activities: [
          { desc: "22:00 Đón khách tại Tân Sơn Nhất đáp chuyến bay đêm đi Cebu. Đến sân bay quốc tế Mactan lúc 02:00 sáng." },
          { desc: "Làm thủ tục nhập cảnh, xe và HDV đưa đoàn di chuyển về thị trấn biển Oslob (dùng điểm tâm sáng trên đường đi)." },
          { desc: "Chiêm bái Đền Đức Mẹ Simala – quần thể kiến trúc nguy nga tựa lâu đài cổ tích châu Âu giữa lòng đảo Cebu." },
          { desc: "Thư giãn tại suối nước nóng tự nhiên Guadalupe Mainit giữa không gian xanh mướt mát mẻ." },
          { desc: "Tham quan Museo Oslob – di tích pháo đài đá san hô cổ kính xây dựng từ thế kỷ XIV." },
          { desc: "Dùng bữa trưa tại nhà hàng, nhận phòng resort nghỉ ngơi. Chiều check-in và tắm tại Thác Tumalog tuyệt đẹp như dải lụa mỏng sương khói." },
          { desc: "Thưởng thức bữa tối buffet nướng hải sản phong cách Philippines, nghỉ đêm tại Oslob." }
        ]
      },
      {
        day: 2,
        title: "BƠI CÙNG CÁ MẬP VOI OSLOB – ĐẢO SUMILON – THÁC KAWASAN – MOALBOAL",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        activities: [
          { desc: "05:30 Sáng bắt đầu hành trình đáng giá nhất đời: Đi thuyền nhỏ ra khơi, đeo kính lặn ngắm nhìn và bơi sát cạnh những chú Cá Mập Voi (Whale Shark) khổng lồ hiền lành dài tới 12m." },
          { desc: "Khách không biết bơi vẫn được trang bị áo phao và kính ngắm để ghi lại những bức ảnh kỷ niệm để đời với người khổng lồ đại dương." },
          { desc: "Đi thuyền truyền thống Philippines sang Đảo Sumilon: tắm biển tại dải cát trắng mịn Sumilon Sandbar thay đổi hình dạng theo con nước." },
          { desc: "Trưa trả phòng, di chuyển đến thị trấn Badian chinh phục Thác Kawasan – một trong những hẻm núi thác nước xanh ngọc bích đẹp nhất thế giới (có thể trải nghiệm trò chơi mạo hiểm Canyoning nhảy thác mạo hiểm)." },
          { desc: "Di chuyển về Moalboal, dùng bữa tối và nhận phòng khách sạn nghỉ đêm tại Moalboal." }
        ]
      },
      {
        day: 3,
        title: "BÃO CÁ MÒI SARDINE RUN – BƠI CÙNG RÙA BIỂN – THÀNH PHỐ CEBU",
        meals: "Ăn sáng, Ăn trưa, Ăn tối tự do",
        activities: [
          { desc: "Ăn sáng tại khách sạn. Đoàn tham gia trải nghiệm lặn biển ngắm Sardine Run: hàng triệu con cá mòi di chuyển nhịp nhàng tạo thành cơn lốc bạc khổng lồ lấp lánh dưới ánh mặt trời." },
          { desc: "Săn tìm và bơi cùng những chú rùa biển tự nhiên đang thong thả gặm cỏ biển cách bờ chỉ vài mét (HDV địa phương hỗ trợ khách không biết bơi)." },
          { desc: "Trả phòng khách sạn, ghé tham quan Động Busay kỳ bí với hồ nước trong vắt và thạch nhũ độc đáo." },
          { desc: "Dùng cơm trưa tại nhà hàng, xe đưa đoàn quay về trung tâm thành phố Cebu sôi động." },
          { desc: "Nhận phòng khách sạn tại Cebu, tự do thưởng thức ẩm thực địa phương về đêm tại chợ đêm Sugbo Mercado." }
        ]
      },
      {
        day: 4,
        title: "MACTAN CITY TOUR – ĐỀN LEAH – CÂY THÁNH GIÁ MAGELLAN ✈ TP.HCM",
        meals: "Ăn sáng, Ăn trưa",
        activities: [
          { desc: "Ăn sáng tại khách sạn, làm thủ tục trả phòng. Bắt đầu tour khám phá văn hóa thành phố Cebu – 'Nữ hoàng miền Nam Philippines'." },
          { desc: "Tham quan Tượng đài di sản Cebu Heritage Monument khắc họa lịch sử thăng trầm của đảo quốc." },
          { desc: "Check-in Đền Leah (Temple of Leah) – đền thờ tình yêu kiến trúc Hy Lạp cổ đại với view ngắm trọn vẹn vịnh Cebu từ trên cao." },
          { desc: "Dùng bữa trưa tại nhà hàng địa phương. Viếng Nhà thờ cổ Santo Nino – công trình tôn giáo cổ nhất Philippines và Cây thánh giá Magellan lịch sử." },
          { desc: "Xe đưa quý khách ra sân bay Mactan đáp chuyến bay chiều tối về lại TP.HCM. Kết thúc hành trình thám hiểm đại dương ngoạn mục." }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi TP.HCM – CEBU – TP.HCM (20kg hành lý ký gửi + 7kg xách tay)",
      "Thuế sân bay, phụ phí an ninh và xăng dầu hai nước",
      "Khách sạn tiêu chuẩn 3 – 4 sao tại Oslob, Moalboal và trung tâm Cebu (2 người/phòng)",
      "Các bữa ăn theo chương trình kèm bữa tối Buffet nướng hải sản Philippines",
      "Thuyền di chuyển ra khu vực ngắm Cá Mập Voi Oslob và sang đảo Sumilon",
      "Trang thiết bị lặn snorkeling cơ bản (mặt nạ, ống thở, áo phao) và phí bảo tồn môi trường",
      "Vé tham quan tất cả các thắng cảnh: Thác Tumalog, Thác Kawasan, Đền Simala, Đền Leah, Santo Nino",
      "Xe máy lạnh đời mới vận chuyển theo đoàn suốt tuyến",
      "Hướng dẫn viên chuyên nghiệp từ Việt Nam và hướng dẫn viên lặn biển bản địa",
      "Bảo hiểm du lịch quốc tế bồi thường tai nạn tối đa 10.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Tiền tip cho HDV và tài xế địa phương: 1.000.000 VNĐ / khách / tour",
      "Trải nghiệm lặn bình khí Scuba Diving hoặc Free Diving kèm thợ lặn (nếu đăng ký thêm)",
      "Trải nghiệm nhảy thác mạo hiểm Canyoning tại Thác Kawasan: 3.500 PHP / khách",
      "Dịch vụ quay chụp hình dưới nước với Cá Mập Voi và rùa biển: 700.000 VNĐ / khách",
      "Chi phí cá nhân và các bữa ăn tự túc ngoài chương trình"
    ],
    visaRequirements: [
      "Công dân Việt Nam được miễn visa du lịch Philippines 30 ngày",
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc chuyến đi",
      "Khách quốc tịch nước ngoài kiểm tra điều kiện visa tùy theo từng quốc gia"
    ]
  },

  // ── 5. INDONESIA: THIÊN ĐƯỜNG BALI – VƯỢT THÁC – D’TUKAD CLUB ──
  {
    id: "tour-id-bali-dtukad",
    code: "EVG-ID-BALI",
    title: "KHÁM PHÁ BALI: VƯỢT THÁC RAFTING – D’TUKAD CLUB – BIỂN JIMBARAN",
    itinerary: "Đảo Bali - Đền Tanah Lot - Đền Suối Thiêng Tirta Empul - Rafting Sông Ayung - Jimbaran",
    duration: "04 Ngày 03 Đêm",
    durationDays: 4,
    airline: "Vietnam Airlines 4★ (Chuyến bay thẳng)",
    price: 11290000,
    priceFormatted: "11.290.000 VNĐ",
    highlights: [
      "Bay thẳng Vietnam Airlines đẳng cấp quốc gia (VN641 & VN640 tiện lợi và êm ái)",
      "Chiêm ngưỡng Đền Tanah Lot linh thiêng ngự trị trên mỏm đá khổng lồ giữa muôn trùng sóng vỗ",
      "Đền Suối Thiêng Tirta Empul – Trải nghiệm nghi thức tắm nước thiêng Melukat cầu bình an may mắn",
      "Trải nghiệm cảm giác mạnh Chèo thuyền vượt thác White Rafting băng qua hẻm núi rừng nhiệt đới trên sông Ayung",
      "Check-in River D'Tukad Club sinh thái: hồ bơi tràn vô cực, tổ chim khổng lồ và 'Xích đu tử thần' Bali Swing",
      "Thưởng thức tiệc nướng BBQ hải sản ngắm hoàng hôn lãng mạn trên bãi biển Jimbaran trứ danh",
      "Dạo bước giữa ruộng bậc thang Tegallalang xanh ngát bạt ngàn tại vùng đất nghệ thuật Ubud",
      "Thưởng thức 13 loại trà và cà phê Chồn truyền thống của người dân đảo Bali",
      "Tùy chọn trải nghiệm tour Đảo Thiên Thần Nusa Penida: Bể bơi vô cực Angel's Billabong, Cổng vòm Broken Beach, Sống lưng khủng long Kelingking Beach"
    ],
    giftMeals: [
      "Vé máy bay khứ hồi Vietnam Airlines (23kg ký gửi + 10kg xách tay)",
      "Khách sạn 4 sao tiêu chuẩn: J4 Hotel / Bliss Surfer ngay trung tâm Kuta sôi động",
      "Các bữa ăn chính chất lượng theo lịch trình + Nước suối suốt tuyến",
      "Tặng 01 bữa tiệc hải sản nướng BBQ bãi biển Jimbaran ngắm hoàng hôn",
      "Tặng 01 phần nước uống kèm cơm sườn nướng đặc trưng tại D'Tukad Club",
      "Tặng trải nghiệm Chèo thuyền vượt thác White Rafting chuyên nghiệp trên sông Ayung",
      "Tặng trải nghiệm xích đu Bali Swing và chụp ảnh tổ chim tại River D'Tukad",
      "Tặng nón du lịch cao cấp Én Việt",
      "Bảo hiểm du lịch quốc tế bồi thường tối đa 10.000 USD/khách"
    ],
    country: "Indonesia (Thiên đường Đảo Bali)",
    region: "Tour Đông Nam Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "dong-nam-a", "indonesia", "bali"],
    badge: "Bay Thẳng Vietnam Airlines",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1000&q=85",
    departure: "Khởi hành hàng tuần",
    isFeatured: true,
    pdfFile: "KHAM PHA BALI VUOT THAC D TUKAD CLUB 4N3D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1000&q=85",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietnam Airlines (Chuyến bay thẳng)",
      outbound: "VN 641 SGN – DPS 10:10 – 15:00 (Tân Sơn Nhất – Bali Ngurah Rai)",
      returnFlight: "VN 640 DPS – SGN 16:05 – 18:55 (Bali Ngurah Rai – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 23kg + 10kg hành lý xách tay"
    },
    singleRoomSurcharge: "4.900.000 VNĐ / khách",
    pricingTable: [
      { month: "Khởi hành Tháng 10", dates: "10/10, 24/10", adult: "12.190.000", child: "10.390.000", infant: "3.690.000" },
      { month: "Khởi hành Tháng 11", dates: "07/11, 13/11, 21/11", adult: "12.190.000", child: "10.390.000", infant: "3.690.000" },
      { month: "Khởi hành Tháng 12", dates: "05/12, 19/12", adult: "12.190.000", child: "10.390.000", infant: "3.690.000" },
      { month: "Khởi hành đầu năm", dates: "Tháng 02, 03 định kỳ", adult: "11.290.000", child: "9.590.000", infant: "3.380.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ BALI – ĐỀN TANAH LOT GIỮA BIỂN KHƠI",
        meals: "Ăn trưa nhẹ trên máy bay, Ăn tối",
        activities: [
          { desc: "07:00 Tập trung tại ga quốc tế Tân Sơn Nhất đáp chuyến bay thẳng VN641 (10:10 - 15:00) đi thiên đường Bali." },
          { desc: "Đến sân bay quốc tế Ngurah Rai – Bali, làm thủ tục nhập cảnh. Xe và HDV đón đoàn di chuyển tham quan." },
          { desc: "Chiêm bái Đền Tanah Lot thế kỷ XVI – ngôi đền Hindu biểu tượng ngự trị trên mỏm đá khổng lồ giữa biển khơi, bốn bề sóng bạc đầu vỗ bờ hùng vĩ." },
          { desc: "Dùng bữa tối tại nhà hàng địa phương. Nhận phòng khách sạn 4 sao trung tâm Kuta nhộn nhịp, tự do khám phá phố đêm." }
        ]
      },
      {
        day: 2,
        title: "ĐỀN SUỐI THIÊNG TIRTA EMPUL – D’TUKAD CLUB – TEGALLALANG",
        meals: "Ăn sáng, trưa Cơm sườn nướng, tối",
        activities: [
          { desc: "Ăn sáng tại khách sạn. Khởi hành tham quan Đền Suối Thiêng Tirta Empul có lịch sử từ thế kỷ X." },
          { desc: "Mặc trang phục truyền thống Sarong và trải nghiệm nghi thức tắm nước thiêng Melukat cầu mong phước lành, thanh lọc tâm hồn." },
          { desc: "Đến tổ hợp sinh thái River D'Tukad Club tại làng Bongkasa: Tặng 1 phần nước uống kèm cơm sườn nướng đặc trưng của người Bali." },
          { desc: "Trải nghiệm chụp ảnh tổ chim khổng lồ và thử sức với chiếc 'xích đu tử thần' Bali Swing bay lượn giữa thung lũng." },
          { desc: "Ngắm Thác nước Blangsinga tuôn trào bọt trắng và ruộng bậc thang Tegallalang xanh ngút ngàn tại Ubud." },
          { desc: "Dùng bữa tối, về khách sạn tại Kuta nghỉ ngơi." }
        ]
      },
      {
        day: 3,
        title: "CHÈO THUYỀN VƯỢT THÁC SÔNG AYUNG – HOÀNG HÔN BIỂN JIMBARAN",
        meals: "Ăn sáng, trưa, tối BBQ bãi biển Jimbaran",
        activities: [
          { desc: "Ăn sáng tại khách sạn. Khởi hành trải nghiệm Chèo thuyền vượt thác White Rafting trên dòng sông Ayung mát rượi quanh co uốn lượn giữa rừng già nhiệt đới." },
          { desc: "Dùng bữa trưa tại nhà hàng địa phương sau hành trình vượt thác hào hứng." },
          { desc: "Chiều tự do tắm biển hoặc đăng ký tour khám phá Đảo Thiên Thần Nusa Penida: check-in hồ vô cực Angel's Billabong, cổng đá Broken Beach và bãi biển khủng long Kelingking Beach." },
          { desc: "Chiều tối đến bãi biển Jimbaran: Thưởng thức bữa tiệc BBQ hải sản nướng thơm lừng trên bãi cát mịn dưới ánh hoàng hôn rực rỡ buông xuống đại dương." },
          { desc: "Nghỉ đêm tại khách sạn 4 sao trung tâm Kuta." }
        ]
      },
      {
        day: 4,
        title: "BALI – THƯỞNG THỨC CÀ PHÊ CHỒN ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng buffet, Ăn trưa",
        activities: [
          { desc: "Ăn sáng tại khách sạn, làm thủ tục trả phòng." },
          { desc: "Tự do mua sắm đặc sản trái cây sấy, thủ công mỹ nghệ tại trung tâm Krishna." },
          { desc: "Thưởng thức 13 loại trà và cà phê truyền thống đặc sắc của người dân đảo Bali." },
          { desc: "Dùng bữa trưa tại nhà hàng. Xe đưa đoàn ra sân bay Ngurah Rai làm thủ tục đáp chuyến bay thẳng VN640 (16:05 - 18:55) về lại Tân Sơn Nhất." },
          { desc: "Về đến TP.HCM, kết thúc chuyến du ngoạn thiên đường biển đảo Bali nhiều trải nghiệm đáng nhớ." }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi Vietnam Airlines thẳng SGN – DPS – SGN (23kg ký gửi + 10kg xách tay)",
      "Khách sạn 4 sao tiêu chuẩn tiện nghi: J4 Hotel / Bliss Surfer hoặc tương đương (2 khách/phòng)",
      "Các bữa ăn chính theo chương trình + Bữa tối tiệc nướng BBQ Hải sản Jimbaran",
      "01 phần nước uống kèm cơm sườn đặc trưng tại River D'Tukad Club",
      "Trọn gói trải nghiệm Chèo thuyền vượt thác White Rafting trên sông Ayung",
      "Trọn gói vé xích đu Swing và check-in tổ chim tại D'Tukad Club",
      "Vé tham quan tất cả các điểm danh thắng trong chương trình: Đền Tanah Lot, Đền Tirta Empul, Thác nước",
      "Xe máy lạnh chất lượng cao đưa đón đoàn suốt tuyến",
      "Hướng dẫn viên nhiệt tình, chu đáo phục vụ đoàn",
      "Bảo hiểm du lịch quốc tế bồi thường tai nạn tối đa 10.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Tiền tip bồi dưỡng cho HDV và tài xế địa phương: 20 USD / khách (Lễ Tết: 24 USD / khách)",
      "Phụ thu thuế du lịch Bali: 10 USD / khách (nếu có)",
      "Phụ thu phòng đơn: 4.900.000 VNĐ / khách",
      "Tour tùy chọn Đảo Thiên Thần Nusa Penida: 1.600.000 VNĐ / khách (nhóm từ 6 khách)",
      "Visa nhập cảnh Indonesia đối với khách quốc tịch không thuộc Đông Nam Á (khoảng 35$ - 40$ nộp tại sân bay)"
    ],
    visaRequirements: [
      "Khách mang quốc tịch Việt Nam và các nước Đông Nam Á được miễn visa Indonesia 30 ngày",
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Khách quốc tịch ngoài Đông Nam Á đóng visa tại sân bay quốc tế Bali"
    ]
  },

  // ── 6. LÀO: VIÊNG CHĂN – LUANG PRABANG – VĂNG VIÊNG ──
  {
    id: "tour-la-vientiane-luangprabang",
    code: "EVG-LA-VTE-LPQ",
    title: "DU LỊCH LÀO: VIÊNG CHĂN – LUANG PRABANG – VĂNG VIÊNG",
    itinerary: "Thủ đô Viêng Chăn - Thị trấn Văng Viêng - Cố đô Luang Prabang",
    duration: "05 Ngày 04 Đêm",
    durationDays: 5,
    airline: "Vietjet Air & Tàu cao tốc hiện đại",
    price: 12990000,
    priceFormatted: "12.990.000 VNĐ",
    highlights: [
      "Bay thẳng Vietjet Air khứ hồi SGN – VTE (20kg ký gửi + 7kg xách tay)",
      "Trải nghiệm Tàu cao tốc hiện đại 160km/h 2 chiều VTE – Luang Prabang xuyên hầm núi kỳ vĩ",
      "Hệ thống khách sạn 4 – 5 sao đẳng cấp tiêu chuẩn quốc tế",
      "Chiêm ngưỡng Thác Kuang Si – Thác nước tầng xanh ngọc bích đẹp bậc nhất xứ Triệu Voi",
      "Chiêm bái Chùa Mẹ Si Mương linh thiêng bậc nhất thủ đô Viêng Chăn, làm lễ buộc chỉ tay cầu bình an",
      "Khám phá Động Nang Pha (Động Cô Tiên) nhũ đá hàng triệu năm tuyệt mỹ tại Văng Viêng",
      "Viếng Chùa Cổ Xieng Thong thế kỷ XVI – kiệt tác kiến trúc Phật giáo mái uốn lượn tại cố đô Luang Prabang",
      "Du thuyền trên dòng sông Mê Kông ngắm hoàng hôn Thượng Lào và trải nghiệm Thả Hoa Đăng cầu an",
      "Tham dự nghi thức Tắc-Bạt (khất thực buổi sớm) – nét đẹp văn hóa tâm linh truyền thống độc đáo của người Lào",
      "Khải Hoàn Môn Patuxay kiêu hãnh và Tháp Thạt Luổng mạ vàng rực rỡ biểu tượng của nước Lào"
    ],
    giftMeals: [
      "Vé máy bay khứ hồi Vietjet Air (20kg ký gửi + 7kg xách tay)",
      "Vé tàu cao tốc khứ hồi Viêng Chăn – Luang Prabang (ghế hạng 2)",
      "Khách sạn 4 & 5 sao tiêu chuẩn quốc tế (2 khách/phòng)",
      "Các bữa ăn chính phong phú mang đậm văn hóa ẩm thực Lào (cá nướng muối, xôi nếp gà bản, thịt nướng)",
      "Trải nghiệm du thuyền sông Mê Kông và thả hoa đăng cầu may",
      "Vé tham quan tất cả các danh thắng trong chương trình",
      "Tặng nón du lịch cao cấp Én Việt & Nước suối 500ml/người/ngày",
      "Bảo hiểm du lịch quốc tế bồi thường tai nạn tối đa 10.000 USD/khách"
    ],
    country: "Lào (Viêng Chăn - Luang Prabang - Văng Viêng)",
    region: "Tour Đông Nam Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "dong-nam-a", "lao"],
    badge: "Tàu Cao Tốc Hiện Đại",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000&q=85",
    departure: "Khởi hành hàng tháng",
    isFeatured: true,
    pdfFile: "DU LICH LAO VIENG CHAN LUANG PRABANG VANG VIENG 5N4D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000&q=85",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietjet Air & Tàu cao tốc",
      outbound: "VJ 1831 SGN – VTE 16:00 – 17:45 (Tân Sơn Nhất – Sân bay Wattay Viêng Chăn)",
      returnFlight: "VJ 1832 VTE – SGN 18:45 – 20:45 (Wattay Viêng Chăn – Tân Sơn Nhất)",
      transit: "Tàu cao tốc EMU chặng Viêng Chăn – Luang Prabang – Viêng Chăn (08:31 - 09:25)",
      baggage: "Hành lý ký gửi 20kg + 7kg hành lý xách tay"
    },
    singleRoomSurcharge: "2.700.000 VNĐ / khách",
    pricingTable: [
      { month: "Khởi hành Tháng 5", dates: "13/05, 20/05, 27/05", adult: "12.990.000", child: "11.990.000", infant: "4.546.000" },
      { month: "Khởi hành Tháng 6, 7", dates: "05/06, 10/06, 03/07, 17/07", adult: "13.490.000", child: "12.490.000", infant: "5.046.000" },
      { month: "Khởi hành Lễ 2/9", dates: "28/08 (Lễ Quốc Khánh)", adult: "15.990.000", child: "14.990.000", infant: "5.595.000" },
      { month: "Khởi hành Tháng 9, 10, 11", dates: "09/09, 23/09, 07/10, 04/11", adult: "12.990.000", child: "11.990.000", infant: "4.546.000" },
      { month: "Khởi hành Lễ Noel", dates: "25/12 (Lễ Noel)", adult: "15.990.000", child: "14.990.000", infant: "5.595.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ VIÊNG CHĂN (LÀO)",
        meals: "Ăn tối",
        activities: [
          { desc: "13:30 HDV đón đoàn tại ga quốc tế Tân Sơn Nhất đáp chuyến bay thẳng VJ1831 (16:00 - 17:45) đi Viêng Chăn." },
          { desc: "Đến sân bay Wattay, xe và HDV đón đoàn về trung tâm thủ đô Viêng Chăn dùng cơm tối tại nhà hàng." },
          { desc: "Nhận phòng khách sạn 4 sao nghỉ ngơi. Tối tự do dạo phố Tây hoặc khám phá chợ đêm bờ sông Mê Kông." }
        ]
      },
      {
        day: 2,
        title: "VIÊNG CHĂN – CHÙA MẸ SI MƯƠNG – THỊ TRẤN VĂNG VIÊNG",
        meals: "Ăn sáng, trưa, tối",
        activities: [
          { desc: "Ăn sáng tại khách sạn, trả phòng. Chiêm bái Chùa Mẹ Si Mương – ngôi chùa linh thiêng nhất thủ đô, cầu an và thực hiện nghi lễ buộc chỉ cổ tay may mắn." },
          { desc: "Tham quan Công viên vườn tượng Phật Wat Xiêng Khuôn (Buddha Park) bên bờ sông Mekong với hàng trăm pho tượng Phật kỳ vĩ." },
          { desc: "Dùng cơm trưa tại nhà hàng. Khởi hành đi thị trấn sinh thái Văng Viêng – thiên đường nghỉ dưỡng giữa núi non thanh bình." },
          { desc: "Khám phá Động Nang Pha (Động Cô Tiên) với khối thạch nhũ triệu năm hình cô tiên độc đáo, tự do trải nghiệm chèo thuyền kayak dọc sông Son hoặc bay khinh khí cầu (chi phí tự túc)." },
          { desc: "Dùng bữa tối, tự do khám phá phố Tây sôi động về đêm tại Văng Viêng." }
        ]
      },
      {
        day: 3,
        title: "VĂNG VIÊNG – TÀU CAO TỐC – CỐ ĐÔ LUANG PRABANG – THÁC KUANG SI",
        meals: "Ăn sáng, trưa cá nướng xôi gà, tối",
        activities: [
          { desc: "Ăn sáng, trả phòng. Xe đưa đoàn ra ga trải nghiệm Tàu cao tốc hiện đại đi Cố đô Luang Prabang (08:31 - 09:25)." },
          { desc: "Đến cố đô 700 năm lịch sử, đoàn đi tham quan Khu du lịch Thác Kuang Si – thác nước nhiều tầng đẹp bậc nhất Thượng Lào với dòng nước xanh màu ngọc bích kỳ ảo." },
          { desc: "Thưởng thức bữa trưa đậm đà phong vị ẩm thực Lào: cá nướng muối, xôi gà bản, thịt heo nướng." },
          { desc: "Viếng Chùa Cổ Xieng Thong – kiệt tác kiến trúc Thượng Tọa Bộ với mái ngói cong sát mặt đất độc nhất vô nhị." },
          { desc: "Trải nghiệm đặc biệt: Du thuyền trên dòng sông Mê Kông ngắm cảnh rừng núi Thượng Lào lúc hoàng hôn và Thả hoa đăng cầu bình an." },
          { desc: "Ăn tối và tự do dạo chợ đêm thủ công mỹ nghệ của người H'mông." }
        ]
      },
      {
        day: 4,
        title: "LỄ TẮC-BẠT – BẢO TÀNG HOÀNG GIA – TÀU CAO TỐC VỀ VIÊNG CHĂN",
        meals: "Ăn sáng, trưa, tối",
        activities: [
          { desc: "05:30 Thức dậy sớm tham dự nghi lễ Tắc-Bạt – các nhà sư xếp hàng trang nghiêm đi khất thực qua các con phố cổ Luang Prabang, nét văn hóa ngàn năm." },
          { desc: "Dạo chợ sáng Phousi, ăn sáng tại khách sạn, trả phòng. Viếng Chùa Chomphet trên đỉnh núi Phousi ngắm toàn cảnh cố đô bên ngã ba sông Mekong." },
          { desc: "Tham quan Cung điện Hoàng Gia (Bảo tàng Quốc gia) của vương triều Quân chủ Lào." },
          { desc: "Dùng bữa trưa, sau đó ra ga đáp tàu cao tốc (13:20 - 14:40) trở về thủ đô Viêng Chăn." },
          { desc: "Về đến Viêng Chăn, dùng bữa tối và nhận phòng khách sạn nghỉ ngơi." }
        ]
      },
      {
        day: 5,
        title: "KHẢI HOÀN MÔN PATUXAY – THÁP THẠT LUỔNG ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, trưa",
        activities: [
          { desc: "Ăn sáng buffet tại khách sạn, làm thủ tục trả phòng." },
          { desc: "Chiêm ngưỡng Tượng đài chiến thắng Patuxay – Khải Hoàn Môn của Viêng Chăn tọa lạc trên đại lộ Lanxang (Triệu Voi)." },
          { desc: "Viếng Tháp Thạt Luổng – biểu tượng linh thiêng ngàn đời của đất nước và nhân dân Lào." },
          { desc: "Tham quan Chùa Sisaket với hơn 8.000 pho tượng Phật bằng đồng, đá và gỗ quý." },
          { desc: "Dùng cơm trưa tại nhà hàng, tự do mua sắm tại Trung tâm Chợ Sáng (Talat Sao) và cửa hàng bạc Chitana." },
          { desc: "15:00 Xe đưa đoàn ra sân bay Wattay làm thủ tục đáp chuyến bay VJ1832 (18:45 - 20:45) về lại TP.HCM. Kết thúc hành trình trọn vẹn khám phá đất nước Triệu Voi." }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi Vietjet Air SGN – VTE – SGN (20kg ký gửi + 7kg xách tay)",
      "Vé tàu cao tốc khứ hồi Viêng Chăn – Luang Prabang – Viêng Chăn (ghế hạng 2)",
      "Khách sạn 4 – 5 sao tiêu chuẩn quốc tế (02 khách/phòng)",
      "Các bữa ăn theo chương trình gồm các món đặc sản ẩm thực Lào",
      "Thuyền du ngoạn sông Mê Kông và trải nghiệm thả hoa đăng cầu may",
      "Vé vào cổng tất cả các điểm tham quan: Thác Kuang Si, Chùa Xieng Thong, Chùa Sisaket, Patuxay, Thạt Luổng, Động Nang Pha",
      "Xe máy lạnh chất lượng cao đưa đón đoàn suốt tuyến (kèm xe 16 chỗ tại cố đô Luang Prabang)",
      "Hướng dẫn viên tiếng Việt nhiệt tình, chu đáo phục vụ đoàn",
      "Bảo hiểm du lịch quốc tế bồi thường tai nạn tối đa 10.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Tiền bồi dưỡng cho hướng dẫn viên và tài xế địa phương: 25 USD / khách (Lễ Tết: 30 USD / khách)",
      "Phụ thu phòng đơn: 2.700.000 VNĐ / khách",
      "Visa Lào đối với khách mang hộ chiếu nước ngoài: 50 USD / khách (làm tại sân bay)",
      "Chi phí cá nhân ngoài chương trình (nước ngọt, bia, giặt ủi, điện thoại)"
    ],
    visaRequirements: [
      "Công dân Việt Nam miễn visa du lịch sang Lào 30 ngày",
      "Hộ chiếu còn hạn trên 6 tháng",
      "Khách quốc tịch nước ngoài mang 2 ảnh 4x6 nền trắng xin visa tại sân bay Lào"
    ]
  },

  // ── 7. MALAYSIA – SINGAPORE: LIÊN TUYẾN 2 QUỐC GIA ──
  {
    id: "tour-my-sg-5n4d",
    code: "EVG-MYSG-5N4D",
    title: "DU LỊCH LIÊN TUYẾN MALAYSIA – SINGAPORE: ĐẲNG CẤP ĐÔNG NAM Á",
    itinerary: "Kuala Lumpur - Cao nguyên Genting - Động Batu - Phố cổ Malacca - Singapore - Sentosa",
    duration: "05 Ngày 04 Đêm",
    durationDays: 5,
    airline: "VietJet Air (SGN-KUL & SIN-SGN)",
    price: 11590000,
    priceFormatted: "11.590.000 VNĐ",
    highlights: [
      "Hành trình bay thông minh tiết kiệm thời gian: Chiều đi SGN – Kuala Lumpur, chiều về Singapore – SGN",
      "Chụp ảnh Tháp đôi Petronas Twin Towers 88 tầng – Biểu tượng tự hào của đất nước Malaysia",
      "Chinh phục Động Batu – 272 bậc thang cầu vồng rực rỡ và tượng thần Murugan mạ vàng cao 42m",
      "Chinh phục Cao nguyên Genting độ cao 2.000m bằng tuyến cáp treo dài 3.4km, thử vận may tại Genting Casino",
      "Khám phá Thành phố di sản cổ Malacca: Nhà thờ Thánh Paul, Pháo đài cổ Bồ Đào Nha A'Famosa, Phố cổ Jonkers",
      "Gardens by the Bay Singapore: Kỳ quan vườn nhân tạo 100ha với các Siêu Cây khổng lồ phát sáng",
      "Công viên Sư tử biển Merlion Park, Nhà hát Esplanade 'Trái Sầu Riêng' & Tòa nhà Quốc hội Singapore",
      "Đảo giải trí Sentosa: Check-in quả cầu xoay Universal Studios và khám phá Resort World Casino hiện đại bậc nhất",
      "Thác nước trong nhà cao nhất hành tinh Jewel Changi Rain Vortex 40m kì vĩ",
      "Ẩm thực đỉnh cao: Tặng 1 bữa Cua sốt ớt Singapore, 1 bữa sườn trà Bak Kut Teh, 1 bữa BBQ lẩu Hàn Quốc"
    ],
    giftMeals: [
      "Vé máy bay khứ hồi Vietjet Air bao gồm 20kg hành lý ký gửi + 7kg xách tay",
      "Khách sạn 4 sao tiêu chuẩn tiện nghi tại Malaysia và Singapore",
      "Thưởng thức 01 bữa Cua Sốt Ớt trứ danh Singapore",
      "Thưởng thức 01 bữa Sườn Trà Bak Kut Teh truyền thống",
      "Thưởng thức 01 bữa tiệc Buffet BBQ Lẩu thơm ngon tại Malaysia",
      "Cáp treo khứ hồi chinh phục cao nguyên Genting",
      "Vé tham quan tất cả các thắng cảnh theo lịch trình",
      "Tặng nón du lịch cao cấp Én Việt & Nước suối phục vụ suốt tuyến",
      "Bảo hiểm du lịch quốc tế quyền lợi tối đa 10.000 USD/khách"
    ],
    country: "Malaysia - Singapore",
    region: "Tour Đông Nam Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "dong-nam-a", "malaysia", "singapore"],
    badge: "Liên Tuyến 2 Quốc Gia",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1000&q=85",
    departure: "Khởi hành hàng tuần",
    isFeatured: true,
    pdfFile: "DU LICH MALAYSIA SINGAPORE 5N4D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1000&q=85",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80",
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=800&q=80",
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80"
    ],
    flightInfo: {
      airline: "VietJet Air",
      outbound: "VJ 825 SGN – KUL 09:40 – 12:45 (Tân Sơn Nhất – Kuala Lumpur)",
      returnFlight: "VJ 812 SIN – SGN 19:30 – 20:25 (Changi Singapore – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 20kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "5.400.000 VNĐ / khách",
    pricingTable: [
      { month: "Khởi hành Tháng 02, 03", dates: "Tháng 02, 03 hàng tuần", adult: "11.590.000", child: "9.850.000", infant: "3.470.000" },
      { month: "Khởi hành Tháng 04", dates: "01/04, 08/04, 22/04", adult: "12.390.000", child: "10.530.000", infant: "3.710.000" },
      { month: "Khởi hành Lễ 30/4", dates: "29/04 (Lễ 30/4 - 1/5)", adult: "15.590.000", child: "13.250.000", infant: "4.670.000" },
      { month: "Khởi hành Hè Tháng 6, 7", dates: "Tháng 06, 07 định kỳ", adult: "12.990.000", child: "11.040.000", infant: "3.890.000" },
      { month: "Khởi hành Tết Dương Lịch", dates: "30/12 (Tết Tây)", adult: "15.690.000", child: "13.330.000", infant: "4.700.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ KUALA LUMPUR (MALAYSIA)",
        meals: "Ăn trưa nhẹ, Ăn tối",
        activities: [
          { desc: "Trưởng đoàn đón quý khách tại Tân Sơn Nhất đáp chuyến bay VJ825 lúc 09:40 đi Kuala Lumpur." },
          { desc: "Đến sân bay quốc tế Kuala Lumpur, làm thủ tục nhập cảnh. Xe đón đoàn đi ăn trưa nhẹ." },
          { desc: "Tham quan Quảng trường Độc Lập Merdeka, Tượng Đài Chiến Sĩ Vô Danh, Thánh đường Hồi Giáo quốc gia và Cung Điện Hoàng Gia uy nghi." },
          { desc: "Dùng bữa tối tại nhà hàng. Về khách sạn 4 sao nhận phòng nghỉ ngơi, tự do khám phá phố đêm Bukit Bintang." }
        ]
      },
      {
        day: 2,
        title: "THÁP ĐÔI PETRONAS – ĐỘNG BATU – CAO NGUYÊN GENTING",
        meals: "Ăn sáng, trưa, tối",
        activities: [
          { desc: "Ăn sáng tại khách sạn. Chụp hình lưu niệm tại Tháp Đôi Petronas 88 tầng – biểu tượng kiêu hãnh của Malaysia." },
          { desc: "Khám phá Động Batu: chinh phục 272 bậc thang rực rỡ sắc màu, chiêm ngưỡng tượng thần Murugan khổng lồ 42m và quần thể đền thờ Ấn Độ giáo trong lòng núi đá." },
          { desc: "Dùng bữa trưa tại nhà hàng. Lên xe khởi hành chinh phục Cao nguyên Genting ở độ cao 2.000m bằng cáp treo dài 3.4km." },
          { desc: "Khám phá thiên đường giải trí trên mây: trung tâm thương mại, công viên trong nhà và Genting Casino nổi tiếng Đông Nam Á." },
          { desc: "Dùng bữa tối tại nhà hàng, về lại khách sạn tại Kuala Lumpur nghỉ đêm." }
        ]
      },
      {
        day: 3,
        title: "KUALA LUMPUR – THÀNH PHỐ THÔNG MINH PUTRAJAYA – CỐ ĐÔ MALACCA",
        meals: "Ăn sáng, trưa, tối",
        activities: [
          { desc: "Ăn sáng, trả phòng khách sạn. Tham quan trung tâm hành chính mới thông minh Putrajaya: Nhà thờ hồi giáo Putra màu hồng, Văn phòng Thủ Tướng." },
          { desc: "Khởi hành đến thành phố cổ Malacca – di sản văn hóa thế giới UNESCO." },
          { desc: "Dùng cơm trưa tại nhà hàng, khám phá các công trình di sản đậm dấu ấn Bồ Đào Nha và Hà Lan: Nhà thờ Saint Paul, Pháo đài cổ A'Famosa, Quảng trường Hà Lan, Phố cổ Jonkers và Đền Cheng Hoon Teng." },
          { desc: "Dùng cơm tối tại nhà hàng địa phương, xe đưa đoàn đến thành phố Johor Bahru giáp biên giới Singapore nhận phòng nghỉ đêm." }
        ]
      },
      {
        day: 4,
        title: "JOHOR BAHRU – SINGAPORE – GARDENS BY THE BAY – SENTOSA",
        meals: "Ăn sáng, trưa Lẩu Sukiya, tối Cua Sốt Ớt",
        activities: [
          { desc: "Ăn sáng tại khách sạn, trả phòng. Làm thủ tục xuất nhập cảnh qua cửa khẩu sang quốc đảo Sư Tử Singapore." },
          { desc: "Tham quan Công viên Sư tử biển Merlion Park, chụp hình cùng biểu tượng phun nước nổi tiếng, Tòa nhà Quốc Hội và Nhà hát Esplanade." },
          { desc: "Khám phá Gardens by the Bay – khu vườn sinh thái nhân tạo 100ha với các Siêu Cây khổng lồ và chiêm ngưỡng toàn cảnh khách sạn Marina Bay Sands." },
          { desc: "Dùng bữa trưa Lẩu Sukiya ấm cúng. Chiều di chuyển sang Đảo Sentosa: Check-in quả cầu Universal Studios và khu giải trí Resort World Casino." },
          { desc: "Dùng bữa tối với đặc sản Cua Sốt Ớt trứ danh Singapore. Tùy chọn tham gia tour 'Singapore By Night' trải nghiệm du thuyền trên Vịnh Marina và tàu điện ngầm MRT." },
          { desc: "Nghỉ đêm tại khách sạn 4 sao tại Singapore." }
        ]
      },
      {
        day: 5,
        title: "CHÙA RĂNG PHẬT – THÁC NƯỚC JEWEL CHANGI ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng buffet, Ăn trưa Bak Kut Teh",
        activities: [
          { desc: "Ăn sáng tại khách sạn, làm thủ tục trả phòng. Chiêm bái Chùa Răng Phật linh thiêng tại khu phố Chinatown." },
          { desc: "Dạo bước khu phố nghệ thuật bích họa Haji Lane và Kampong Glam sắc màu." },
          { desc: "Dùng bữa trưa sườn trà Bak Kut Teh truyền thống thơm phức bổ dưỡng." },
          { desc: "Đến sân bay quốc tế Changi: Check-in Thác nước trong nhà cao nhất thế giới Rain Vortex 40m tại tổ hợp Jewel Changi." },
          { desc: "Làm thủ tục đáp chuyến bay VJ812 (19:30 - 20:25) về lại TP.HCM. Kết thúc hành trình liên tuyến 2 quốc gia thành công tốt đẹp." }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi Vietjet Air SGN – KUL & SIN – SGN (20kg ký gửi + 7kg xách tay)",
      "Thuế phi trường hai nước và phí phụ thu an ninh hàng không",
      "Khách sạn 4 sao tiêu chuẩn tại Malaysia và Singapore (2 - 3 người/phòng)",
      "Các bữa ăn theo lịch trình kèm bữa Cua Sốt Ớt Singapore & Sườn trà Bak Kut Teh",
      "Vé cáp treo khứ hồi cao nguyên Genting",
      "Vé vào cổng tất cả các điểm tham quan theo chương trình",
      "Xe máy lạnh đời mới vận chuyển đưa đón theo hành trình",
      "Hướng dẫn viên suốt tuyến từ Việt Nam và HDV bản địa nhiệt tình",
      "Tặng nón du lịch cao cấp Én Việt",
      "Bảo hiểm du lịch quốc tế bồi thường tai nạn tối đa 10.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Tiền tip HDV và tài xế địa phương: 25 USD / khách / tour",
      "Phụ thu phòng đơn: 5.400.000 VNĐ / khách",
      "Thuế du lịch khách sạn tại Malaysia",
      "Chương trình khám phá Singapore By Night tự chọn ngoài giờ",
      "Chi phí cá nhân và hành lý quá cước"
    ],
    visaRequirements: [
      "Công dân Việt Nam được miễn visa du lịch Malaysia (30 ngày) và Singapore (30 ngày)",
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày nhập cảnh",
      "Khách mang quốc tịch nước ngoài kiểm tra visa tái nhập cảnh Việt Nam"
    ]
  },

  // ── 8. SINGAPORE: KHÁM PHÁ ĐẢO QUỐC SƯ TỬ ──
  {
    id: "tour-sg-3n2d",
    code: "EVG-SG-3N2D",
    title: "DU LỊCH KHÁM PHÁ ĐẢO QUỐC SINGAPORE NĂNG ĐỘNG",
    itinerary: "Singapore - Merlion Park - Gardens by the Bay - Sentosa - Jewel Changi",
    duration: "03 Ngày 02 Đêm",
    durationDays: 3,
    airline: "Vietjet Air (Chuyến bay thẳng)",
    price: 11290000,
    priceFormatted: "11.290.000 VNĐ",
    highlights: [
      "Khám phá Đảo Quốc Sư Tử Singapore – Quốc gia sạch đẹp và văn minh hàng đầu thế giới",
      "Tặng vé trải nghiệm Tàu điện ngầm hiện đại đến trung tâm thương mại Vivo City",
      "Công viên Sư tử biển Merlion Park – Biểu tượng huyền thoại của đảo quốc sư tử",
      "Gardens by the Bay: Siêu công viên sinh thái 100ha với các Siêu Cây khổng lồ",
      "Đập nước kỳ vĩ Marina Barrage – Kỳ quan cải tạo thiên nhiên và lưu vực nước ngọt lớn nhất đảo",
      "Đảo giải trí Sentosa: Check-in Universal Studios & Resorts World Casino 5 sao",
      "Phố nghệ thuật Haji Lane – Không gian tranh bích họa đường phố cực chất cho giới trẻ",
      "Chiêm bái Chùa Răng Phật linh thiêng tôn nghiêm tại khu phố người Hoa Chinatown",
      "Check-in Thác nước trong nhà Jewel Changi Rain Vortex cao 40m đồ sộ nhất thế giới",
      "Ẩm thực đỉnh cao: 1 bữa Buffet Lẩu BBQ Hàn Quốc, 1 bữa Sườn Trà Bak Kut Teh, 1 bữa Cua Sốt Ớt trứ danh"
    ],
    giftMeals: [
      "Vé máy bay khứ hồi Vietjet Air thẳng SGN – SIN – SGN (20kg ký gửi + 7kg xách tay)",
      "Khách sạn 3 - 4 sao tiêu chuẩn tại Singapore: Grand Chancellor / Royal Newton / Ibis Macpherson",
      "Tặng 01 bữa tiệc Cua Sốt Ớt đặc sản Singapore",
      "Tặng 01 bữa thưởng thức Sườn Trà Bak Kut Teh truyền thống",
      "Tặng 01 bữa Buffet Lẩu BBQ Hàn Quốc thơm ngon hấp dẫn",
      "Tặng vé tàu điện trải nghiệm đến khu mua sắm Vivo City",
      "Vé vào cổng tất cả các thắng cảnh theo lịch trình",
      "Tặng nón du lịch cao cấp Én Việt & Nước suối phục vụ mỗi ngày",
      "Bảo hiểm du lịch quốc tế bồi thường tối đa 10.000 USD/khách"
    ],
    country: "Singapore",
    region: "Tour Đông Nam Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "dong-nam-a", "singapore"],
    badge: "Cuối Tuần Hấp Dẫn",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1000&q=85",
    departure: "Khởi hành hàng tuần",
    isFeatured: true,
    pdfFile: "DU LICH KHAM PHA SINGAPORE 3N2D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1000&q=85",
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=800&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietjet Air (Chuyến bay thẳng)",
      outbound: "VJ 811 SGN – SIN 08:50 – 12:05 (Tân Sơn Nhất – Changi Singapore)",
      returnFlight: "VJ 814 SIN – SGN 16:55 – 18:05 (Changi Singapore – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 20kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "4.800.000 VNĐ / khách",
    pricingTable: [
      { month: "Khởi hành Tháng 01", dates: "09/01, 16/01, 23/01, 30/01", adult: "11.990.000", child: "10.190.000", infant: "3.590.000" },
      { month: "Khởi hành Tháng 02, 03", dates: "27/02, 06/03, 13/03, 20/03", adult: "11.290.000", child: "9.590.000", infant: "3.380.000" },
      { month: "Khởi hành Tháng 04", dates: "03/04, 10/04, 17/04", adult: "11.290.000", child: "9.590.000", infant: "3.380.000" },
      { month: "Khởi hành Lễ 30/4", dates: "01/05 (Lễ 30/4 - 1/5)", adult: "15.990.000", child: "13.590.000", infant: "4.790.000" },
      { month: "Khởi hành Hè Tháng 6, 7", dates: "Tháng 06, 07 định kỳ", adult: "12.690.000", child: "10.780.000", infant: "3.800.000" },
      { month: "Khởi hành Noel", dates: "25/12 (Lễ Noel)", adult: "14.990.000", child: "12.740.000", infant: "4.490.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ SINGAPORE – MERLION PARK – FABER MOUNT",
        meals: "Ăn trưa nhẹ, Ăn tối",
        activities: [
          { desc: "Trưởng đoàn đón quý khách tại Tân Sơn Nhất đáp chuyến bay VJ811 (08:50 - 12:05) đi Singapore." },
          { desc: "Đến sân bay quốc tế Changi, xe và HDV đón đoàn đi dùng cơm trưa nhẹ." },
          { desc: "Tham quan Công viên Sư tử biển Merlion Park – biểu tượng may mắn và thịnh vượng của Singapore." },
          { desc: "Chụp ảnh Tòa nhà Quốc Hội (Parliament House), Nhà hát Victoria cổ kính và Nhà hát Esplanade hình trái sầu riêng." },
          { desc: "Lên đỉnh Faber Mount ngắm nhìn toàn cảnh thành phố cảng Singapore từ trên cao tuyệt đẹp." },
          { desc: "Dùng bữa tối, nhận phòng khách sạn 4 sao nghỉ ngơi. Tối tự do hoặc tham gia tour Singapore By Night (du thuyền vịnh Marina, xem nhạc nước Spectra)." }
        ]
      },
      {
        day: 2,
        title: "GARDENS BY THE BAY – MARINA BARRAGE – ĐẢO SENTOSA",
        meals: "Ăn sáng buffet, Ăn trưa Buffet BBQ Hàn Quốc, Ăn tối",
        activities: [
          { desc: "Ăn sáng buffet tại khách sạn. Đoàn tham quan Gardens by the Bay – khu vườn nhân tạo khổng lồ ven vịnh Marina." },
          { desc: "Chiêm ngưỡng Marina Barrage – hồ nhân tạo đô thị đầu tiên với lưu vực rộng lớn và view nhìn toàn cảnh khu tài chính." },
          { desc: "Tham quan mua sắm tại xưởng chế tác kim cương đá quý và cửa hàng dầu gió nổi tiếng." },
          { desc: "Dùng bữa trưa Buffet Lẩu BBQ Hàn Quốc tươi ngon hảo hạng." },
          { desc: "Khởi hành đi đảo Sentosa: Chụp ảnh kỷ niệm trước quả cầu xoay Universal Studios, trải nghiệm tàu điện đến Vivo City mua sắm thả ga." },
          { desc: "Dùng bữa tối tại nhà hàng, về lại khách sạn nghỉ đêm tại Singapore." }
        ]
      },
      {
        day: 3,
        title: "CHÙA RĂNG PHẬT – PHỐ HAJI LANE – THÁC NƯỚC JEWEL CHANGI ✈ TP.HCM",
        meals: "Ăn sáng buffet, Ăn trưa",
        activities: [
          { desc: "Ăn sáng buffet tại khách sạn, làm thủ tục trả phòng." },
          { desc: "Viếng Chùa Răng Phật (Buddha Tooth Relic Temple) tại khu phố Chinatown – chiêm bái xá lợi răng Phật thiêng liêng." },
          { desc: "Dạo chơi tại con phố nghệ thuật bích họa Haji Lane rực rỡ sắc màu hiện đại." },
          { desc: "Dùng cơm trưa tại nhà hàng. Xe đưa quý khách ra sân bay Changi sớm để trải nghiệm tổ hợp Jewel Changi." },
          { desc: "Chiêm ngưỡng Thác nước trong nhà Rain Vortex cao 40m tuôn trào ngoạn mục giữa thung lũng cây xanh." },
          { desc: "Làm thủ tục đáp chuyến bay VJ814 (16:55 - 18:05) về lại TP.HCM. Kết thúc hành trình khám phá Singapore đầy thú vị." }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi Vietjet Air SGN – SIN – SGN (20kg ký gửi + 7kg xách tay)",
      "Thuế an ninh và lệ phí sân bay hai nước",
      "Khách sạn 3 – 4 sao tiêu chuẩn tại Singapore (2 - 3 khách/phòng)",
      "Các bữa ăn theo chương trình gồm Buffet BBQ Hàn Quốc và đặc sản địa phương",
      "Vé tàu điện trải nghiệm đến trung tâm mua sắm Vivo City",
      "Vé tham quan tất cả các thắng cảnh theo lịch trình",
      "Xe máy lạnh chất lượng cao đưa đón đoàn suốt tuyến",
      "Hướng dẫn viên chuyên nghiệp từ Việt Nam và HDV bản địa",
      "Tặng nón du lịch cao cấp Én Việt",
      "Bảo hiểm du lịch quốc tế bồi thường tai nạn tối đa 10.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Tiền tip cho HDV và tài xế: 15 USD / khách / tour",
      "Phụ thu phòng đơn: 4.800.000 VNĐ / khách",
      "Chi phí cá nhân và các show giải trí về đêm ngoài chương trình"
    ],
    visaRequirements: [
      "Công dân Việt Nam được miễn visa du lịch Singapore 30 ngày",
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày nhập cảnh",
      "Khách quốc tịch nước ngoài kiểm tra visa tái nhập Việt Nam"
    ]
  },

  // ── 9. TRUNG QUỐC: BẮC KINH – HÀNG CHÂU – Ô TRẤN – THƯỢNG HẢI (VIETNAM AIRLINES) ──
  {
    id: "tour-cn-pek-sha",
    code: "EVG-CN-PEK-SHA",
    title: "DU LỊCH TRUNG QUỐC: BẮC KINH – HÀNG CHÂU – Ô TRẤN – THƯỢNG HẢI",
    itinerary: "Bắc Kinh - Tàu Cao Tốc 1279km - Hàng Châu - Ô Trấn Giang Nam - Thượng Hải",
    duration: "07 Ngày 06 Đêm",
    durationDays: 7,
    airline: "Vietnam Airlines 4★ (Chuyến bay thẳng)",
    price: 23990000,
    priceFormatted: "23.990.000 VNĐ",
    highlights: [
      "Bay thẳng Vietnam Airlines chất lượng 4 sao quốc gia (VN516 SGN-Bắc Kinh & VN525 Thượng Hải-SGN)",
      "Trải nghiệm 1 chặng Tàu Cao Tốc siêu tốc hiện đại từ Bắc Kinh đến Hàng Châu dài 1.279km chỉ hơn 5 giờ",
      "Chinh phục Vạn Lý Trường Thành – Kỳ quan thế giới vĩ đại có thể nhìn thấy từ không gian",
      "Quảng trường Thiên An Môn – Quảng trường lớn nhất thế giới rộng 50 hecta",
      "Tử Cấm Thành (Cố Cung) – Hoàng cung nguy nga với 9.999 gian điện của 24 vị hoàng đế Minh – Thanh",
      "Cung điện Mùa Hè Di Hòa Viên – Kiệt tác hoa viên hoàng gia của Từ Hy Thái Hậu",
      "Dạo thuyền Tây Hồ 'Tam Đàn Ấn Nguyệt' thơ mộng làm say đắm bao thế hệ thi nhân",
      "Nghỉ đêm tại Cổ Trấn Ô Trấn (Tây Sách) – Đệ nhất mỹ cảnh sông nước hữu tình hơn 1.000 năm lịch sử",
      "Bến Thượng Hải hoa lệ, Tháp truyền hình Đông Phương Minh Châu và Tháp Kim Mậu chọc trời",
      "Tặng bữa tiệc Vịt Quay Bắc Kinh trứ danh & Thưởng thức tiệc Lẩu Trung Hoa, BBQ hấp dẫn"
    ],
    giftMeals: [
      "Vé máy bay khứ hồi Vietnam Airlines bao gồm hành lý ký gửi và xách tay tiêu chuẩn",
      "Khách sạn tiêu chuẩn 4 sao suốt hành trình + 01 đêm trải nghiệm tại Ô Trấn cổ kính",
      "Vé tàu cao tốc chặng Bắc Kinh – Hàng Châu (ghế mềm hạng 2)",
      "Tặng 01 bữa thưởng thức Vịt Quay Bắc Kinh nổi tiếng",
      "Tặng các bữa tiệc Lẩu Trung Hoa và tiệc nướng BBQ đặc sắc",
      "Vé du thuyền thưởng ngoạn cảnh đẹp Tây Hồ Hàng Châu",
      "Vé tham quan tất cả các danh thắng trong chương trình: Vạn Lý Trường Thành, Cố Cung, Di Hòa Viên",
      "Tặng nón du lịch cao cấp Én Việt",
      "Bảo hiểm du lịch quốc tế bồi thường tai nạn tối đa 10.000 USD/khách"
    ],
    country: "Trung Quốc (Bắc Kinh - Thượng Hải - Hàng Châu)",
    region: "Tour Châu Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "chau-a", "trung-quoc"],
    badge: "Siêu Phẩm Mùa Du Lịch",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1000&q=85",
    departure: "Khởi hành hàng tháng",
    isFeatured: true,
    pdfFile: "BAC KINH HANG CHAU O TRAN THUONG HAI 7N6D EVG-THT.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1000&q=85",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
      "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietnam Airlines (Chuyến bay thẳng)",
      outbound: "VN 516 SGN – PEK 00:45 – 06:30 (Tân Sơn Nhất – Bắc Kinh)",
      returnFlight: "VN 525 PVG – SGN 15:25 – 18:55 (Thượng Hải Phố Đông – Tân Sơn Nhất)",
      transit: "Tàu cao tốc Bắc Kinh – Hàng Châu (1.279km, ~5 giờ tàu chạy)",
      baggage: "Hành lý ký gửi 23kg + 10kg hành lý xách tay"
    },
    singleRoomSurcharge: "4.200.000 VNĐ / khách (Lễ: 4.500.000 VNĐ)",
    pricingTable: [
      { month: "Khởi hành Tháng 9", dates: "06/09, 15/09, 29/09", adult: "23.990.000", child: "22.990.000", infant: "7.190.000" },
      { month: "Khởi hành Tháng 10", dates: "21/10, 22/10", adult: "24.990.000", child: "23.990.000", infant: "7.490.000" },
      { month: "Khởi hành Tháng 11", dates: "01/11, 12/11, 17/11, 24/11", adult: "24.990.000", child: "23.990.000", infant: "7.490.000" },
      { month: "Khởi hành Tháng 12", dates: "01/12, 06/12, 16/12", adult: "24.990.000", child: "23.990.000", infant: "7.490.000" },
      { month: "Khởi hành Noel / Tết", dates: "29/12 (Tết Dương Lịch)", adult: "27.990.000", child: "26.990.000", infant: "8.390.000" },
      { month: "Khởi hành Tháng 1, 2, 3", dates: "Định kỳ hàng tháng", adult: "25.990.000", child: "24.990.000", infant: "7.790.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ THỦ ĐÔ BẮC KINH",
        meals: "Nghỉ đêm trên máy bay",
        activities: [
          { desc: "21:30 Trưởng đoàn Én Việt đón quý khách tại sân bay Tân Sơn Nhất làm thủ tục đáp chuyến bay thẳng VN516 (00:45 - 06:30) đi Bắc Kinh." },
          { desc: "Quý khách nghỉ đêm thư giãn trên máy bay Vietnam Airlines chất lượng cao." }
        ]
      },
      {
        day: 2,
        title: "BẮC KINH – CUNG ĐIỆN DI HÒA VIÊN – PHỐ TIỀN MÔN",
        meals: "Ăn sáng, trưa, tối Vịt quay Bắc Kinh",
        activities: [
          { desc: "Đoàn đáp sân bay Bắc Kinh lúc 06:30, xe và HDV đưa đoàn dùng điểm tâm sáng." },
          { desc: "Tham quan Cung điện Mùa Hè Di Hòa Viên rộng 290ha xây dựng từ thời nhà Thanh – hoa viên hoàng gia lộng lẫy do Từ Hy Thái Hậu trùng tu." },
          { desc: "Dạo bước trên Phố đi bộ Tiền Môn hơn 570 năm lịch sử với những cửa hiệu cổ kính và các ngõ Hutong truyền thống." },
          { desc: "Thưởng thức bữa tối đặc biệt với món Vịt Quay Bắc Kinh trứ danh da giòn rụm thịt thơm ngọt." },
          { desc: "Nhận phòng khách sạn 4 sao tại Bắc Kinh nghỉ ngơi." }
        ]
      },
      {
        day: 3,
        title: "KỲ QUAN VẠN LÝ TRƯỜNG THÀNH – SÂN VẬN ĐỘNG TỔ CHIM",
        meals: "Ăn sáng, trưa, tối",
        activities: [
          { desc: "Ăn sáng tại khách sạn. Đoàn khởi hành chinh phục Vạn Lý Trường Thành (Cư Dung Quan) – một trong những kỳ quan nhân tạo vĩ đại nhất của nhân loại." },
          { desc: "Tận mắt chiêm ngưỡng những đoạn tường thành uốn lượn vô tận giữa núi non trùng điệp hùng vĩ." },
          { desc: "Dùng bữa trưa tại nhà hàng. Chiều tham quan và chụp hình bên ngoài Sân vận động Tổ Chim và Trung tâm thể thao dưới nước Thủy Lập Phương – biểu tượng Olympic Bắc Kinh." },
          { desc: "Dùng bữa tối tại nhà hàng và nghỉ đêm tại khách sạn Bắc Kinh." }
        ]
      },
      {
        day: 4,
        title: "THIÊN AN MÔN – TỬ CẤM THÀNH (CỐ CUNG) – TÀU CAO TỐC ĐI HÀNG CHÂU",
        meals: "Ăn sáng, trưa, tối",
        activities: [
          { desc: "Ăn sáng tại khách sạn, trả phòng. Tham quan Quảng Trường Thiên An Môn rộng 50ha lớn nhất thế giới, ngắm Nhà tưởng niệm Mao Chủ tịch và Đại lễ đường." },
          { desc: "Khám phá Tử Cấm Thành (Cố Cung) rộng 72ha với 9.999 gian điện nguy nga tráng lệ – hoàng cung của 24 vị hoàng đế Minh – Thanh (hoặc Đàn tế Thiên Đàn trong trường hợp Cố Cung quá tải)." },
          { desc: "Dùng cơm trưa. Ra ga trải nghiệm Tàu Cao Tốc hiện đại xuyên suốt hành trình 1.279km từ Bắc Kinh đến Hàng Châu chỉ hơn 5 giờ chạy." },
          { desc: "Đến Hàng Châu, dùng bữa tối và nhận phòng khách sạn 4 sao nghỉ đêm." }
        ]
      },
      {
        day: 5,
        title: "HÀNG CHÂU – DU THUYỀN TÂY HỒ – CỔ TRẤN Ô TRẤN GIANG NAM",
        meals: "Ăn sáng, trưa, tối",
        activities: [
          { desc: "Ăn sáng tại khách sạn. Viếng Miếu Nhạc Phi – vị tướng tài ba trung nghĩa thời Nam Tống." },
          { desc: "Du thuyền thưởng ngoạn Tây Hồ Hàng Châu – cảnh quan 'Tam Đàn Ấn Nguyệt' thi vị làm đắm say lòng người với cầu Đoạn Kiều, Tô Đê." },
          { desc: "Dùng bữa trưa, khởi hành đến Ô Trấn (Tây Sách) – thị trấn sông nước cổ kính giữ nguyên kiến trúc và phong tục sinh sống hơn 1.000 năm qua." },
          { desc: "Dạo bước trên những cây cầu đá cổ, những con ngõ lát đá và ngắm nhìn ánh đèn lồng lung linh soi bóng dòng kênh Giang Nam." },
          { desc: "Ăn tối và nghỉ đêm trải nghiệm tại Ô Trấn huyền ảo." }
        ]
      },
      {
        day: 6,
        title: "Ô TRẤN – THƯỢNG HẢI – BẾN THƯỢNG HẢI – PHỐ NAM KINH",
        meals: "Ăn sáng, trưa, tối",
        activities: [
          { desc: "Ăn sáng tại Ô Trấn, trả phòng. Khởi hành đi Thượng Hải – đầu tàu kinh tế hiện đại bậc nhất Trung Quốc." },
          { desc: "Viếng Chùa Ngọc Phật thanh tịnh và Miếu Thành Hoàng cổ kính giữa lòng phố thị." },
          { desc: "Dạo bước trên Bến Thượng Hải hoa lệ ngắm nhìn dòng sông Hoàng Phố, chụp ảnh toàn cảnh Tháp truyền hình Đông Phương Minh Châu và Tháp Kim Mậu chọc trời." },
          { desc: "Tự do mua sắm trên đại lộ thương mại Phố Đi Bộ Nam Kinh sầm uất." },
          { desc: "Dùng bữa tối tại nhà hàng, nhận phòng khách sạn 4 sao tại Thượng Hải nghỉ ngơi." }
        ]
      },
      {
        day: 7,
        title: "THƯỢNG HẢI ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, trưa",
        activities: [
          { desc: "Ăn sáng tại khách sạn, tự do nghỉ ngơi và chuẩn bị hành lý." },
          { desc: "Làm thủ tục trả phòng, dùng bữa trưa tại nhà hàng địa phương." },
          { desc: "Xe đưa đoàn ra sân bay quốc tế Phố Đông Thượng Hải làm thủ tục đáp chuyến bay thẳng VN525 (15:25 - 18:55) về lại TP.HCM." },
          { desc: "Về đến sân bay Tân Sơn Nhất, hoàn tất thủ tục nhập cảnh. Kết thúc chuyến du lịch Trung Quốc 7 ngày 6 đêm đầy ắp kỷ niệm đẹp." }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi Vietnam Airlines thẳng SGN – PEK & PVG – SGN (23kg ký gửi + 10kg xách tay)",
      "Vé tàu cao tốc chặng Bắc Kinh – Hàng Châu (1.279km, ghế hạng 2)",
      "Khách sạn 4 sao tiêu chuẩn tiện nghi + 01 đêm trải nghiệm tại Ô Trấn (2 người/phòng)",
      "Các bữa ăn theo chương trình gồm tiệc Vịt Quay Bắc Kinh & Lẩu Trung Hoa",
      "Visa đoàn nhập cảnh Trung Quốc thuận tiện",
      "Vé tham quan tất cả các thắng cảnh: Vạn Lý Trường Thành, Cố Cung, Di Hòa Viên, Du thuyền Tây Hồ, Ô Trấn",
      "Xe máy lạnh chất lượng cao đưa đón đoàn suốt tuyến",
      "Trưởng đoàn từ Việt Nam và hướng dẫn viên địa phương chu đáo",
      "Tặng nón du lịch cao cấp Én Việt",
      "Bảo hiểm du lịch quốc tế bồi thường tai nạn tối đa 10.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Tiền tip cho hướng dẫn viên và tài xế địa phương: 1.000.000 VNĐ / khách (Lễ Tết: 1.400.000 VNĐ)",
      "Phụ thu phòng đơn: 4.200.000 VNĐ / khách (Lễ Tết: 4.500.000 VNĐ)",
      "Chi phí cá nhân, hành lý quá cước và dịch vụ ngoài chương trình"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng tính từ ngày về",
      "02 hình 4x6cm tiêu chuẩn quốc tế nền trắng chụp mới",
      "Thủ tục visa đoàn nhanh chóng, tiện lợi do Én Việt Group hỗ trợ trọn gói"
    ]
  }
];


// ─────────────────────────────────────────────────────────────────────────────
// 5. DANH SÁCH TOUR HÀN QUỐC (BUSAN, DAEGU, SEOUL, ĐẢO NAMI, EVERLAND)
// Theo đúng các file PDF do người dùng cung cấp:
// - EV - TH ĐẦU ĐÔNG BUSAN - SEOUL.pdf
// - EV - TH MÙA THU HÀN QUỐC SEOUL - NAMI.pdf
// - EVG - THT EVERLAND SEOUL NAMI.pdf
// ─────────────────────────────────────────────────────────────────────────────

export const TOUR_HAN_QUOC_DATASET: TourItem[] = [
  // ── 1. TOUR HÀN QUỐC ĐẦU ĐÔNG: BUSAN – DAEGU – SEOUL – NAMI ──
  {
    id: "tour-kr-busan-seoul",
    code: "EVG-KR-PUS-ICN-6N5D",
    title: "HÀN QUỐC ĐẦU ĐÔNG: BUSAN – DAEGU – SEOUL – ĐẢO NAMI",
    itinerary: "Busan - Daegu - Seoul - Đảo Nami",
    duration: "06 Ngày 05 Đêm",
    durationDays: 6,
    airline: "Vietnam Airlines 4★",
    price: 18990000,
    priceFormatted: "18.990.000 VNĐ",
    highlights: [
      "Làng bích họa Gamcheon – 'Santorini của Hàn Quốc' rực rỡ sắc màu bên sườn đồi",
      "Trải nghiệm tàu ven biển Haeundae Blue Line Park ngắm nhìn trọn vẹn vịnh biển Busan",
      "Chiêm bái Chùa Haedong Yonggungsa cổ kính tọa lạc trên ghềnh đá sát biển",
      "Cầu treo đi bộ trên biển Songdo Skywalk & Chợ cá Jagalchi lớn nhất xứ sở kim chi",
      "Tháp N Seoul (Namsan Tower) lãng mạn ngắm toàn cảnh Seoul và hàng ngàn ổ khóa tình yêu",
      "Cung điện Cảnh Phúc Cung (Gyeongbokgung) nguy nga & Trải nghiệm mặc Hanbok cổ trang",
      "Đảo Nami thơ mộng bối cảnh phim 'Bản Tình Ca Mùa Đông' mùa chớm đông tuyết phủ",
      "Thưởng thức tiệc ẩm thực Hàn: Thịt nướng Samgyeopsal, Gà hầm sâm Samgyetang, Lẩu Bulgogi"
    ],
    giftMeals: [
      "Bay thẳng tiêu chuẩn Quốc Gia Vietnam Airlines 4 sao (hành lý 23kg ký gửi + 10kg xách tay)",
      "Tặng vé tàu ven biển Haeundae Blue Line Park ngắm trọn vẹn vịnh biển Busan",
      "Tặng vé tham quan Làng bích họa Gamcheon văn hóa rực rỡ",
      "Tặng vé cáp treo hoặc vé tham quan Tháp N Seoul lãng mạn",
      "Tặng trải nghiệm mặc quốc phục Hanbok chụp ảnh tại Hoàng cung Gyeongbokgung",
      "Tặng lớp học tự tay làm Kim Chi và thưởng thức bánh truyền thống",
      "Khách sạn tiêu chuẩn 3 - 4 sao tiện nghi suốt tuyến",
      "Tặng nón du lịch cao cấp Én Việt Group và bảo hiểm quốc tế trị giá 10.000 USD"
    ],
    country: "Hàn Quốc",
    region: "Tour Hàn Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "han-quoc", "chau-a"],
    badge: "Đầu Đông Tuyệt Sắc",
    image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=1000&q=85",
    departure: "Khởi hành Thứ 3 & Thứ 6 hàng tuần (Tháng 11, 12)",
    isFeatured: true,
    pdfFile: "EV - TH ĐẦU ĐÔNG BUSAN - SEOUL.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=1000&q=85",
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
      "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietnam Airlines 4★ (Hàng không Quốc gia)",
      outbound: "VN 422 SGN – PUS 00:35 – 07:00 (TP.HCM – Sân bay Gimhae Busan)",
      returnFlight: "VN 405 ICN – SGN 17:55 – 21:40 (Incheon Seoul – TP.HCM)",
      baggage: "Hành lý ký gửi 23kg + 10kg hành lý xách tay"
    },
    singleRoomSurcharge: "4.800.000 VNĐ / phòng / suốt tuyến",
    pricingTable: [
      { month: "Tháng 11", dates: "05, 12, 19, 26/11", adult: "18.990.000", child: "17.090.000", infant: "5.690.000" },
      { month: "Tháng 12", dates: "03, 10, 17, 24/12", adult: "19.490.000", child: "17.540.000", infant: "5.850.000" },
      { month: "Tết Dương Lịch", dates: "30/12, 31/12", adult: "21.990.000", child: "19.790.000", infant: "6.590.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ BUSAN (Ăn nhẹ trên máy bay)",
        meals: "Ăn nhẹ và nghỉ đêm trên chuyến bay",
        hotel: "Nghỉ đêm trên máy bay Vietnam Airlines",
        image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&q=80",
        activities: [
          { desc: "21:30 Quý khách tập trung tại Ga quốc tế, Sân bay Tân Sơn Nhất. Trưởng đoàn Én Việt đón quý khách, làm thủ tục check-in đáp chuyến bay VN 422 đi Busan – thành phố cảng lớn nhất Hàn Quốc." },
          { desc: "Quý khách nghỉ đêm, dùng bữa ăn nhẹ và thư giãn trên máy bay Vietnam Airlines thân rộng hiện đại.", highlight: true }
        ]
      },
      {
        day: 2,
        title: "BUSAN – LÀNG GAMCHEON – CHÙA HAEDONG YONGGUNGSA – TÀU BLUE LINE PARK",
        meals: "Ăn sáng, trưa, tối (Thịt nướng Samgyeopsal)",
        hotel: "Khách sạn 3-4 sao trung tâm Busan",
        image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&q=80",
        activities: [
          { desc: "07:00 Đến sân bay quốc tế Gimhae (Busan), đoàn làm thủ tục nhập cảnh Hàn Quốc. Xe và hướng dẫn viên địa phương đón đoàn đi dùng bữa sáng với món Canh thịt hầm Dwaeji Gukbap trứ danh Busan." },
          { desc: "Tham quan Làng bích họa Gamcheon (Gamcheon Culture Village) – được ví như 'Santorini của Hàn Quốc' với hàng trăm ngôi nhà bậc thang rực rỡ sắc màu và bức tượng Hoàng Tử Bé nhìn ra biển.", highlight: true },
          { desc: "Chiêm bái Chùa Haedong Yonggungsa – ngôi chùa cổ Phật giáo linh thiêng được xây dựng vào năm 1376 trên ghềnh đá sát mép sóng biển.", highlight: true },
          { desc: "Trải nghiệm Tàu điện ven biển Haeundae Blue Line Park – ngắm nhìn trọn vẹn dải bờ biển xanh biếc và cảnh quan thiên nhiên kỳ vĩ.", highlight: true },
          { desc: "Dạo bước trên Cầu treo Songdo Skywalk uốn lượn trên mặt biển và ghé thăm Chợ cá Jagalchi nhộn nhịp." },
          { desc: "Thưởng thức bữa tối Thịt heo nướng Samgyeopsal thơm lừng đúng chuẩn Hàn Quốc." }
        ]
      },
      {
        day: 3,
        title: "BUSAN – DAEGU – THỦ ĐÔ SEOUL – THÁP N SEOUL",
        meals: "Ăn sáng, trưa, tối (Gà hầm sâm Samgyetang)",
        hotel: "Khách sạn 3-4 sao thủ đô Seoul",
        image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
        activities: [
          { desc: "Đoàn dùng điểm tâm sáng, làm thủ tục trả phòng. Khởi hành đi thành phố Daegu – cố đô văn hóa miền Nam xứ sở Kim Chi." },
          { desc: "Trải nghiệm hành trình di chuyển hiện đại tiến về Thủ đô Seoul sầm uất." },
          { desc: "Dùng bữa trưa bổ dưỡng với món Gà hầm sâm Samgyetang gia truyền với nhân sâm tươi Hàn Quốc.", highlight: true },
          { desc: "Check-in Tháp truyền hình N Seoul (Namsan Tower) – ngọn tháp biểu tượng tọa lạc trên đỉnh núi Namsan, nơi lưu giữ hàng triệu chiếc khóa tình yêu rực rỡ sắc màu.", highlight: true },
          { desc: "Tự do dạo bộ và mua sắm tại Khu phố đi bộ Myeongdong sôi động bậc nhất Seoul." }
        ]
      },
      {
        day: 4,
        title: "SEOUL – ĐẢO NAMI THƠ MỘNG – LÀM KIM CHI & MẶC HANBOK",
        meals: "Ăn sáng, trưa, tối (Gà nướng Nami)",
        hotel: "Khách sạn 3-4 sao thủ đô Seoul",
        image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
        activities: [
          { desc: "Dùng bữa sáng buffet tại khách sạn. Đoàn khởi hành đi tham quan Đảo Nami (Nami Island) – hòn đảo lãng mạn hình bán nguyệt, nổi tiếng khắp châu Á qua bộ phim kinh điển 'Bản Tình Ca Mùa Đông'.", highlight: true },
          { desc: "Tản bộ dưới hai hàng cây ngân hạnh và tùng bách thẳng tắp, hít thở không khí đầu đông trong lành và chụp ảnh bên bức tượng đồng của hai diễn viên chính Bae Yong Joon & Choi Ji Woo.", highlight: true },
          { desc: "Thưởng thức bữa trưa đặc sản Gà nướng bắp cải Dakgalbi nức tiếng vùng Chuncheon." },
          { desc: "Tham gia Lớp học làm Kim Chi truyền thống dưới sự hướng dẫn của nghệ nhân Hàn Quốc và khoác lên mình trang phục Hanbok truyền thống chụp ảnh lưu niệm.", highlight: true },
          { desc: "Tham quan và tìm hiểu về Tinh dầu thông đỏ Hàn Quốc – bí quyết tăng cường sức khỏe của người dân bản địa." }
        ]
      },
      {
        day: 5,
        title: "SEOUL – CẢNH PHÚC CUNG – NHÀ XANH – KHU PHỐ MYEONGDONG",
        meals: "Ăn sáng, trưa, tối (Lẩu Shabu Shabu)",
        hotel: "Khách sạn 3-4 sao thủ đô Seoul",
        image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&q=80",
        activities: [
          { desc: "Đoàn dùng điểm tâm sáng. Khởi hành tham quan Cung điện Gyeongbokgung (Cảnh Phúc Cung) – cung điện hoàng gia lớn nhất và tráng lệ nhất triều đại Joseon.", highlight: true },
          { desc: "Tham quan Bảo tàng Dân gian Quốc gia (National Folk Museum) và chụp ảnh lưu niệm bên ngoài Nhà Xanh (Cheongwadae – Dinh Tổng Thống Hàn Quốc)." },
          { desc: "Tìm hiểu và mua sắm tại Trung tâm Nhân sâm Chính phủ Hàn Quốc & Cửa hàng mỹ phẩm nội địa cao cấp." },
          { desc: "Thưởng ngoạn dòng Suối Thanh Khê Cheonggyecheon – công trình kiến trúc xanh kỳ diệu giữa lòng đô thị phồn hoa và Quảng trường Gwanghwamun uy nghiêm.", highlight: true },
          { desc: "Thưởng thức bữa tối Lẩu nấm Bulgogi thanh ngọt đậm đà." }
        ]
      },
      {
        day: 6,
        title: "SEOUL ✈ TP. HỒ CHÍ MINH (Ăn sáng, Ăn trưa)",
        meals: "Ăn sáng, ăn trưa nhẹ, ăn trên máy bay",
        activities: [
          { desc: "Đoàn dùng điểm tâm sáng tại khách sạn, hoàn tất thủ tục trả phòng." },
          { desc: "Xe đưa đoàn đi mua sắm đặc sản bánh kẹo Hàn Quốc tại Siêu thị bách hóa Cheongha Souvenir Shop." },
          { desc: "Đoàn di chuyển ra Sân bay quốc tế Incheon. Hướng dẫn viên Én Việt hỗ trợ quý khách làm thủ tục xuất cảnh và hoàn thuế mua sắm." },
          { desc: "17:55 Đoàn đáp chuyến bay VN 405 của Vietnam Airlines về lại TP. Hồ Chí Minh.", highlight: true },
          { desc: "21:40 Về đến sân bay Tân Sơn Nhất. Trưởng đoàn hỗ trợ lấy hành lý, chia tay đoàn và hẹn gặp lại trong những chuyến du lịch tuyệt vời tiếp theo!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi quốc tế theo đoàn của Vietnam Airlines 4★ (SGN - PUS // ICN - SGN)",
      "Hành lý ký gửi 23kg + 10kg hành lý xách tay tiêu chuẩn hãng hàng không quốc gia",
      "Khách sạn tiêu chuẩn 3 - 4 sao Hàn Quốc tiện nghi (phòng 2 người, trường hợp lẻ ngủ phòng 3)",
      "Các bữa ăn thịnh soạn theo chương trình: Samgyeopsal nướng, Gà hầm sâm, Lẩu Bulgogi, Gà nướng Dakgalbi Nami",
      "Vé tàu Haeundae Blue Line Park, vé tham quan Gamcheon, Cảnh Phúc Cung, Đảo Nami, Tháp Namsan",
      "Trải nghiệm mặc Hanbok cổ trang và lớp học làm Kim Chi do nghệ nhân hướng dẫn",
      "Visa nhập cảnh Hàn Quốc trọn gói theo đoàn do Én Việt Group bảo lãnh",
      "Xe du lịch đời mới máy lạnh đưa đón đoàn theo suốt hành trình tại Hàn Quốc",
      "Trưởng đoàn Én Việt và hướng dẫn viên địa phương nhiệt tình, chu đáo suốt tuyến",
      "Bảo hiểm du lịch quốc tế quyền lợi tối đa 10.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn sử dụng trên 6 tháng tính từ ngày kết thúc tour",
      "Tiền tip bồi dưỡng bắt buộc cho HDV và tài xế địa phương: 48 USD/khách/suốt tour",
      "Phụ thu phòng đơn: 4.800.000 VNĐ (dành cho khách có nhu cầu ở riêng phòng)",
      "Chi phí cá nhân: giặt là, điện thoại, thức uống trong minibar khách sạn, hành lý quá cước"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng tính từ ngày kết thúc chuyến đi",
      "02 hình 3.5 x 4.5cm phông nền trắng, chụp mới trong vòng 3 tháng gần nhất",
      "Căn cước công dân gắn chip & Giấy xác nhận thông tin cư trú (CT07) hoặc VNeID",
      "Hồ sơ tài chính và công việc được đội ngũ chuyên viên visa Én Việt hướng dẫn tận tình, tỉ lệ đậu cao"
    ]
  },

  // ── 2. TOUR MÙA THU HÀN QUỐC: SEOUL – ĐẢO NAMI – CÔNG VIÊN BẦU TRỜI HANEUL ──
  {
    id: "tour-kr-seoul-nami-autumn",
    code: "EVG-KR-AUTUMN-5N4D",
    title: "MÙA THU HÀN QUỐC: SEOUL – ĐẢO NAMI – CÔNG VIÊN BẦU TRỜI HANEUL",
    itinerary: "Seoul - Đảo Nami - Công viên Haneul Park",
    duration: "05 Ngày 04 Đêm",
    durationDays: 5,
    airline: "Vietjet Air 4★",
    price: 15990000,
    priceFormatted: "15.990.000 VNĐ",
    highlights: [
      "Đảo Nami ngập tràn sắc vàng ngân hạnh & lá phong đỏ rực mùa thu (Bản Tình Ca Mùa Đông)",
      "Công viên Bầu Trời Haneul Park – bạt ngàn đồng cỏ lau trắng và cánh đồng cỏ hồng Muhly",
      "Cung điện Cảnh Phúc Cung (Gyeongbokgung) 600 năm tuổi & Chụp ảnh tại Nhà Xanh Cheongwadae",
      "Khám phá Làng cổ Bukchon Hanok & Dạo bước bên suối Cheonggyecheon thanh bình",
      "Tháp N Seoul Tower trên đỉnh núi Namsan ngắm toàn cảnh mùa thu Seoul rực rỡ",
      "Trải nghiệm khoác lên mình trang phục Hanbok & Lớp học tự tay muối Kim Chi Hàn Quốc",
      "Ẩm thực đặc sắc: Gà hầm sâm thượng hạng Samgyetang, Thịt nướng than hoa, Canh kim chi"
    ],
    giftMeals: [
      "Hàng không Vietjet Air khứ hồi với 20kg ký gửi + 07kg xách tay tiện lợi",
      "Tặng vé cáp treo hoặc xe điện tham quan Công viên Bầu trời Haneul Park",
      "Tặng vé phà khứ hồi du ngoạn Đảo Nami mùa thu vàng rực rỡ",
      "Tặng bữa tiệc Gà hầm sâm Samgyetang bồi bổ sức khỏe",
      "Tặng trải nghiệm mặc áo Hanbok truyền thống chụp ảnh cung điện",
      "Tặng lớp học làm Kim Chi do chính nghệ nhân Hàn Quốc hướng dẫn",
      "Khách sạn tiêu chuẩn 3 - 4 sao tiện nghi trung tâm Seoul",
      "Bảo hiểm du lịch quốc tế tối đa 10.000 USD/trường hợp"
    ],
    country: "Hàn Quốc",
    region: "Tour Hàn Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "han-quoc", "chau-a"],
    badge: "Mùa Thu Lãng Mạn",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1000&q=85",
    departure: "Khởi hành Thứ 5 & Thứ 7 hàng tuần (Mùa Thu Tháng 9, 10, 11)",
    isFeatured: true,
    pdfFile: "EV - TH MÙA THU HÀN QUỐC SEOUL - NAMI.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1000&q=85",
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
      "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&q=80",
      "https://images.unsplash.com/photo-1578637387939-43c525550085?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietjet Air 4★ (Chuyến bay thẳng tiện nghi)",
      outbound: "VJ 862 SGN – ICN 02:35 – 09:40 (Tân Sơn Nhất – Incheon Seoul)",
      returnFlight: "VJ 863 ICN – SGN 11:40 – 15:10 (Incheon Seoul – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 20kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "4.200.000 VNĐ / phòng / suốt tuyến",
    pricingTable: [
      { month: "Tháng 09", dates: "14, 21, 28/09", adult: "15.990.000", child: "14.390.000", infant: "4.790.000" },
      { month: "Tháng 10", dates: "05, 12, 19, 26/10", adult: "16.490.000", child: "14.840.000", infant: "4.950.000" },
      { month: "Tháng 11", dates: "02, 09, 16/11", adult: "15.990.000", child: "14.390.000", infant: "4.790.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ INCHEON SEOUL (Nghỉ đêm trên máy bay)",
        meals: "Nghỉ đêm trên máy bay",
        hotel: "Nghỉ đêm trên chuyến bay Vietjet Air",
        image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
        activities: [
          { desc: "23:30 Quý khách có mặt tại Cột số 10 Ga đi Quốc tế, Sân bay Tân Sơn Nhất. Trưởng đoàn Én Việt đón quý khách, làm thủ tục check-in chuyến bay VJ 862 khởi hành đi Hàn Quốc lúc 02:35." },
          { desc: "Quý khách nghỉ ngơi thư giãn trên chuyến bay qua đêm đến với xứ sở Kim Chi.", highlight: true }
        ]
      },
      {
        day: 2,
        title: "INCHEON – SEOUL – CÔNG VIÊN BẦU TRỜI HANEUL – THÁP N SEOUL",
        meals: "Ăn sáng nhẹ, Ăn trưa (Gà hầm sâm), Ăn tối (Thịt nướng)",
        hotel: "Khách sạn 3-4 sao thủ đô Seoul",
        image: "https://images.unsplash.com/photo-1578637387939-43c525550085?w=800&q=80",
        activities: [
          { desc: "09:40 Đoàn hạ cánh tại Sân bay quốc tế Incheon, hoàn tất thủ tục nhập cảnh và lấy hành lý. Xe và HDV địa phương đón chào đoàn." },
          { desc: "Thưởng thức bữa trưa bồi bổ sức khỏe với món Gà hầm sâm Samgyetang – nét tinh hoa ẩm thực dưỡng sinh xứ Hàn.", highlight: true },
          { desc: "Tham quan Công viên Bầu Trời Haneul Park (Haneul Sky Park) – điểm ngắm mùa thu biểu tượng nhất Seoul với đồi cỏ lau trắng ngút ngàn và thảm cỏ hồng Muhly rực rỡ.", highlight: true },
          { desc: "Chinh phục Tháp truyền hình N Seoul (Namsan Tower) – chiêm ngưỡng vẻ đẹp lãng mạn của thủ đô phủ sắc thu vàng và check-in bức tường khóa tình yêu trứ danh." },
          { desc: "Dùng bữa tối Thịt nướng Hàn Quốc đậm đà và nhận phòng khách sạn nghỉ ngơi." }
        ]
      },
      {
        day: 3,
        title: "SEOUL – ĐẢO NAMI MÙA THU VÀNG – LÀNG CỔ BUKCHON HANOK",
        meals: "Ăn sáng, trưa (Gà nướng Nami), tối (Lẩu nấm Shabu Shabu)",
        hotel: "Khách sạn 3-4 sao thủ đô Seoul",
        image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
        activities: [
          { desc: "Đoàn dùng điểm tâm buffet tại khách sạn. Khởi hành đi Đảo Nami (Nami Island) – thiên đường tình yêu mùa thu đẹp nhất xứ Kim Chi.", highlight: true },
          { desc: "Dạo bước trên con đường ngân hạnh vàng óng ả và hàng cây phong lá đỏ rực rỡ, cảm nhận làn gió thu mát lành như trong bộ phim 'Bản Tình Ca Mùa Đông'.", highlight: true },
          { desc: "Thưởng thức bữa trưa món Gà nướng Nami cay ngọt thơm giòn đặc trưng." },
          { desc: "Trở về Seoul, dạo bước khám phá Làng cổ Bukchon Hanok – nơi lưu giữ những ngôi nhà Hanok truyền thống với kiến trúc gỗ cổ kính của giới quý tộc xưa.", highlight: true },
          { desc: "Thỏa sức mua sắm tại Chợ đêm Dongdaemun sầm uất với hàng ngàn mẫu thời trang mới nhất." }
        ]
      },
      {
        day: 4,
        title: "SEOUL – CẢNH PHÚC CUNG – NHÀ XANH – LÀM KIM CHI & HANBOK",
        meals: "Ăn sáng, trưa (Cá nướng), tối (Canh sườn bò Galbitang)",
        hotel: "Khách sạn 3-4 sao thủ đô Seoul",
        image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&q=80",
        activities: [
          { desc: "Sau bữa sáng, đoàn tham quan Cung điện Hoàng gia Gyeongbokgung (Cảnh Phúc Cung) – cung điện cổ kính và quy mô nhất Hàn Quốc.", highlight: true },
          { desc: "Chụp ảnh lưu niệm bên ngoài Nhà Xanh Cheongwadae (Dinh Tổng Thống Hàn Quốc) uy nghiêm dưới chân núi Bukak." },
          { desc: "Trải nghiệm văn hóa: Khoác lên mình trang phục Hanbok truyền thống hóa thân thành hoàng tử, công chúa thời Joseon; tham gia lớp học làm Kim Chi do nghệ nhân hướng dẫn.", highlight: true },
          { desc: "Tìm hiểu Trung tâm Tinh dầu thông đỏ & Trung tâm Nhân sâm Hoàng gia Hàn Quốc." },
          { desc: "Dạo chơi bên dòng suối Cheonggyecheon hiền hòa uốn lượn giữa trung tâm thủ đô hoa lệ." }
        ]
      },
      {
        day: 5,
        title: "SEOUL ✈ TP. HỒ CHÍ MINH (Ăn sáng)",
        meals: "Ăn sáng buffet, ăn nhẹ trên máy bay",
        activities: [
          { desc: "Đoàn dùng bữa sáng tại khách sạn, làm thủ tục trả phòng." },
          { desc: "Đoàn ghé Trung tâm Bách hóa Cheongha mua sắm các loại bánh kẹo, rong biển, quà lưu niệm Hàn Quốc làm quà cho người thân." },
          { desc: "Xe đưa đoàn ra Sân bay quốc tế Incheon, làm thủ tục lên chuyến bay VJ 863 khởi hành lúc 11:40 về lại TP.HCM.", highlight: true },
          { desc: "15:10 Về đến sân bay Tân Sơn Nhất. Kết thúc hành trình mùa thu Hàn Quốc trọn vẹn và đầy ắp kỷ niệm đẹp cùng Én Việt Group!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi quốc tế theo đoàn Vietjet Air (SGN – ICN // ICN – SGN)",
      "Hành lý tiêu chuẩn: 20kg ký gửi + 07kg xách tay",
      "Khách sạn tiêu chuẩn 3 - 4 sao quốc tế tại Seoul (2 khách/phòng, lẻ nam/nữ bố trí phòng 3)",
      "Các bữa ăn chính chất lượng cao: Gà hầm sâm, Thịt nướng than hoa, Gà nướng Dakgalbi, Canh sườn bò",
      "Vé tham quan tất cả các điểm theo lịch trình: Đảo Nami, Công viên Haneul Park, Cung điện Cảnh Phúc Cung",
      "Trải nghiệm mặc Hanbok cổ trang và lớp học tự tay làm Kim Chi",
      "Visa nhập cảnh Hàn Quốc trọn gói theo đoàn do Én Việt Group thực hiện",
      "Xe máy lạnh đời mới đưa đón đoàn theo chương trình tại Hàn Quốc",
      "Trưởng đoàn từ Việt Nam và hướng dẫn viên địa phương phục vụ tận tâm",
      "Bảo hiểm du lịch quốc tế quyền lợi tối đa 10.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Tiền bồi dưỡng (Tip) bắt buộc cho HDV và tài xế địa phương: 40 USD/khách/tour",
      "Phụ thu phòng đơn: 4.200.000 VNĐ / khách",
      "Chi phí cá nhân ngoài chương trình (điện thoại, giặt ủi, nước uống minibar...)"
    ],
    visaRequirements: [
      "Hộ chiếu bản gốc còn hạn tối thiểu 6 tháng kể từ ngày về",
      "02 ảnh 3.5x4.5cm nền trắng chụp mới",
      "Căn cước công dân gắn chip & Giấy tờ chứng minh công việc, tài chính",
      "Được chuyên viên Én Việt hướng dẫn chi tiết, hồ sơ tinh giản tối đa"
    ]
  },

  // ── 3. TOUR HÀN QUỐC RỰC RỠ: SEOUL – CÔNG VIÊN EVERLAND – ĐẢO NAMI ──
  {
    id: "tour-kr-everland-seoul-nami",
    code: "EVG-KR-EVERLAND-5N4D",
    title: "HÀN QUỐC RỰC RỠ: SEOUL – CÔNG VIÊN EVERLAND – ĐẢO NAMI",
    itinerary: "Seoul - Đại công viên Everland - Đảo Nami",
    duration: "05 Ngày 04 Đêm",
    durationDays: 5,
    airline: "Vietjet Air / Air Busan 4★",
    price: 14990000,
    priceFormatted: "14.990.000 VNĐ",
    highlights: [
      "Khám phá Đại công viên Everland – Top 10 công viên giải trí quy mô lớn nhất thế giới",
      "Trải nghiệm tàu lượn siêu tốc T-Express bằng gỗ và vườn thú hoang dã Safari World",
      "Du ngoạn Đảo Nami xinh đẹp ngập tràn cỏ cây hoa lá bốn mùa lãng mạn",
      "Cung điện hoàng gia Cảnh Phúc Cung (Gyeongbokgung) tráng lệ & Bảo tàng Dân tộc Quốc gia",
      "Tháp N Seoul lộng lẫy trên đỉnh núi Namsan, chiêm ngưỡng toàn cảnh thủ đô",
      "Lớp học trải nghiệm tự tay làm Kim Chi truyền thống & Khoác trang phục Hanbok",
      "Thỏa sức mua sắm tại Chợ Dongdaemun, Myeongdong, Cửa hàng Miễn thuế Duty Free",
      "Thưởng thức ẩm thực Hàn hấp dẫn: Gà nướng Dakgalbi, Thịt ba chỉ nướng Samgyeopsal"
    ],
    giftMeals: [
      "Hàng không khứ hồi tiện lợi với hành lý ký gửi 20kg + 07kg xách tay",
      "Tặng vé trọn gói vào cổng vui chơi thả ga tại Đại công viên giải trí Everland",
      "Tặng vé tàu du ngoạn Đảo Nami xinh đẹp",
      "Tặng bữa tiệc Gà nướng Dakgalbi và Thịt nướng Samgyeopsal",
      "Tặng trải nghiệm mặc quốc phục Hanbok truyền thống hoàng gia",
      "Tặng lớp học làm Kim Chi do nghệ nhân hướng dẫn",
      "Khách sạn tiêu chuẩn 3 - 4 sao tiện nghi hiện đại tại Seoul",
      "Bảo hiểm du lịch quốc tế bồi thường lên tới 10.000 USD/khách"
    ],
    country: "Hàn Quốc",
    region: "Tour Hàn Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "han-quoc", "chau-a"],
    badge: "Vui Chơi Everland",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1000&q=85",
    departure: "Khởi hành Thứ 4 & Thứ 6 hàng tuần",
    isFeatured: true,
    pdfFile: "EVG - THT EVERLAND SEOUL NAMI.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1000&q=85",
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
      "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&q=80",
      "https://images.unsplash.com/photo-1578637387939-43c525550085?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietjet Air 4★ (Hãng bay năng động, giờ bay đẹp)",
      outbound: "VJ 862 SGN – ICN 02:35 – 09:40 (Tân Sơn Nhất – Incheon Seoul)",
      returnFlight: "VJ 863 ICN – SGN 11:40 – 15:10 (Incheon Seoul – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 20kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "4.000.000 VNĐ / phòng / suốt tuyến",
    pricingTable: [
      { month: "Khởi hành hàng tuần", dates: "Thứ 4, Thứ 6", adult: "14.990.000", child: "13.490.000", infant: "4.490.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ THỦ ĐÔ SEOUL (Nghỉ đêm trên máy bay)",
        meals: "Nghỉ đêm và ăn nhẹ trên máy bay",
        hotel: "Nghỉ đêm trên chuyến bay Vietjet Air",
        image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
        activities: [
          { desc: "23:00 Quý khách tập trung tại Ga quốc tế Sân bay Tân Sơn Nhất. Hướng dẫn viên Én Việt đón tiếp, làm thủ tục xuất cảnh và check-in chuyến bay đi Seoul." },
          { desc: "Quý khách nghỉ ngơi thư giãn trên máy bay qua đêm.", highlight: true }
        ]
      },
      {
        day: 2,
        title: "INCHEON – THỦ ĐÔ SEOUL – ĐẢO NAMI THƠ MỘNG",
        meals: "Ăn sáng nhẹ, trưa (Gà nướng Nami), tối (Lẩu nấm)",
        hotel: "Khách sạn 3-4 sao trung tâm Seoul",
        image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
        activities: [
          { desc: "09:40 Đến sân bay quốc tế Incheon. Xe và HDV địa phương đón đoàn đi dùng bữa sáng nhẹ." },
          { desc: "Đoàn khởi hành đi tham quan Đảo Nami (Nami Island) – biểu tượng lãng mạn của du lịch Hàn Quốc với những hàng cây ngân hạnh rợp bóng mát.", highlight: true },
          { desc: "Thưởng thức bữa trưa đặc sản Gà nướng Nami đậm đà hương vị truyền thống." },
          { desc: "Trở về trung tâm Seoul, đoàn chiêm ngưỡng Tháp N Seoul tọa lạc trên đỉnh núi Namsan thơ mộng.", highlight: true },
          { desc: "Thưởng thức bữa tối Lẩu nấm Hàn Quốc thanh vị và nhận phòng khách sạn nghỉ ngơi." }
        ]
      },
      {
        day: 3,
        title: "SEOUL – ĐẠI CÔNG VIÊN GIẢI TRÍ EVERLAND – CHỢ ĐÊM DONGDAEMUN",
        meals: "Ăn sáng, trưa (Thịt nướng Samgyeopsal), tối (Canh kim chi)",
        hotel: "Khách sạn 3-4 sao trung tâm Seoul",
        image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
        activities: [
          { desc: "Đoàn dùng bữa sáng buffet tại khách sạn. Khởi hành đến Công viên giải trí Everland – một trong 10 công viên giải trí ngoài trời lớn nhất thế giới.", highlight: true },
          { desc: "Thỏa sức trải nghiệm các trò chơi cảm giác mạnh đỉnh cao như Tàu lượn siêu tốc bằng gỗ T-Express, khám phá Vườn thú hoang dã Safari World ngắm gấu trắng, hổ trắng quý hiếm.", highlight: true },
          { desc: "Dạo bước giữa Quảng trường hoa bốn mùa rực rỡ sắc hương với vô số tiểu cảnh check-in tuyệt đẹp." },
          { desc: "Thưởng thức bữa trưa Thịt ba chỉ nướng Samgyeopsal xèo xèo thơm phức." },
          { desc: "Chiều tối trở về Seoul, đoàn tự do mua sắm và khám phá ẩm thực đường phố tại Chợ đêm Dongdaemun sầm uất." }
        ]
      },
      {
        day: 4,
        title: "SEOUL – CẢNH PHÚC CUNG – NHÀ XANH – MẶC HANBOK & LÀM KIM CHI",
        meals: "Ăn sáng, trưa (Gà hầm sâm), tối (Cá nướng truyền thống)",
        hotel: "Khách sạn 3-4 sao trung tâm Seoul",
        image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&q=80",
        activities: [
          { desc: "Sau bữa sáng, đoàn đến tham quan Cung điện Hoàng gia Cảnh Phúc Cung (Gyeongbokgung) cổ kính với nghệ thuật kiến trúc gỗ tiêu biểu triều đại Joseon.", highlight: true },
          { desc: "Chụp ảnh lưu niệm tại Quảng trường Gwanghwamun và chiêm ngưỡng Nhà Xanh Cheongwadae bề thế dưới chân núi." },
          { desc: "Trải nghiệm đặc sắc: Thử trang phục truyền thống Hanbok và tham gia lớp học tự tay muối Kim Chi Hàn Quốc.", highlight: true },
          { desc: "Tìm hiểu và mua sắm tại Trung tâm Tinh dầu thông đỏ & Cửa hàng Mỹ phẩm nội địa miễn thuế Shilla Duty Free." },
          { desc: "Dạo chơi bên dòng Suối Thanh Khê Cheonggyecheon trong lành giữa lòng thành phố." }
        ]
      },
      {
        day: 5,
        title: "SEOUL ✈ TP. HỒ CHÍ MINH (Ăn sáng)",
        meals: "Ăn sáng buffet, ăn nhẹ trên máy bay",
        activities: [
          { desc: "Đoàn dùng điểm tâm sáng, làm thủ tục trả phòng khách sạn." },
          { desc: "Đoàn ghé Trung tâm Bách hóa Cheongha lựa chọn các đặc sản nổi tiếng Hàn Quốc như rong biển, nấm linh chi, sâm củ ngâm mật ong mang về làm quà." },
          { desc: "Đoàn di chuyển ra Sân bay quốc tế Incheon, làm thủ tục đáp chuyến bay VJ 863 về lại TP. Hồ Chí Minh.", highlight: true },
          { desc: "15:10 Đến sân bay Tân Sơn Nhất. Hướng dẫn viên Én Việt chào tạm biệt quý khách và hẹn ngày tái ngộ!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi quốc tế theo đoàn (SGN – ICN // ICN – SGN) cùng Vietjet Air",
      "Hành lý ký gửi 20kg + 07kg xách tay tiêu chuẩn",
      "Vé vào cổng trọn gói vui chơi tại Đại công viên giải trí Everland",
      "Vé phà tham quan Đảo Nami xinh đẹp",
      "Khách sạn tiêu chuẩn 3 - 4 sao Hàn Quốc tiện nghi (2 khách/phòng, trường hợp lẻ bố trí phòng 3)",
      "Các bữa ăn chính chất lượng cao: Thịt nướng Samgyeopsal, Gà nướng Nami, Gà hầm sâm, Lẩu nấm",
      "Trải nghiệm mặc Hanbok cổ trang và lớp học làm Kim Chi truyền thống",
      "Visa nhập cảnh Hàn Quốc trọn gói do Én Việt Group bảo lãnh",
      "Xe máy lạnh hiện đại đưa đón đoàn suốt tuyến tại Hàn Quốc",
      "Trưởng đoàn Việt Nam và hướng dẫn viên địa phương nhiệt tình chu đáo",
      "Bảo hiểm du lịch quốc tế bồi thường tối đa 10.000 USD/khách"
    ],
    exclusions: [
      "Hộ chiếu còn hạn sử dụng trên 6 tháng tính từ ngày kết thúc tour",
      "Tiền tip bắt buộc cho HDV và tài xế địa phương: 40 USD/khách/tour",
      "Phụ thu phòng đơn: 4.000.000 VNĐ",
      "Chi phí cá nhân ngoài chương trình (giặt là, điện thoại, nước uống minibar...)"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng tính từ ngày về",
      "02 hình 3.5x4.5cm nền trắng chụp mới",
      "Căn cước công dân gắn chip & Giấy xác nhận nơi cư trú (CT07) hoặc VNeID",
      "Hồ sơ tài chính và công việc được chuyên viên Én Việt Group hướng dẫn trọn gói"
    ]
  }
];


// ─────────────────────────────────────────────────────────────────────────────
// 6. DANH SÁCH TOUR TRUNG QUỐC & HONG KONG
// Theo đúng các file PDF do người dùng cung cấp:
// 1. THƯỢNG HẢI - NAM KINH - Ô TRẤN - HÀNG CHÂU FREEDAY, NO SHOPPING (6N5D - China Eastern)
// 2. THƯỢNG HẢI – VÔ TÍCH – TÔ CHÂU – HÀNG CHÂU (5N4D - Vietjet Air)
// 3. THƯỢNG HẢI – Ô TRẤN – HÀNG CHÂU NO SHOPPING (6N5D - Sun PhuQuoc Airways)
// 4. KHÁM PHÁ “XỨ CẢNG THƠM” HONGKONG FREEDAY (4N3D - Cathay Pacific 5★)
// 5. TẾ NAM – KHÚC PHỤ – THÁI SƠN – THANH ĐẢO (6N6D - Shandong Airlines)
// 6. THÀNH ĐÔ – CỬU TRẠI CÂU – CÔNG VIÊN GẤU TRÚC – LẠC SƠN ĐẠI PHẬT (6N5D - Sichuan Airlines)
// ─────────────────────────────────────────────────────────────────────────────

export const TOUR_TRUNG_QUOC_DATASET: TourItem[] = [
  // ── 1. THƯỢNG HẢI - NAM KINH - Ô TRẤN - HÀNG CHÂU (FREEDAY, NO SHOPPING) ──
  {
    id: "tour-cn-shanghai-nanjing-6n5d",
    code: "EVG-CN-SHA-NKG-6N5D",
    title: "DU LỊCH TRUNG QUỐC: THƯỢNG HẢI – NAM KINH – Ô TRẤN – HÀNG CHÂU (FREEDAY, NO SHOPPING)",
    itinerary: "Thượng Hải - Nam Kinh - Ô Trấn - Hàng Châu",
    duration: "06 Ngày 05 Đêm",
    durationDays: 6,
    airline: "China Eastern Airlines",
    price: 20990000,
    priceFormatted: "20.990.000 VNĐ",
    highlights: [
      "Check-in cung đường Đại lộ cây Ngô Đồng nổi tiếng bậc nhất Nam Kinh",
      "Trải nghiệm ngủ 01 đêm khách sạn 5 sao bên trong Ô Trấn – Tây Sách thơ mộng",
      "Thưởng ngoạn toàn cảnh Ô Trấn Tây Sách lên đèn lung linh quyến rũ tuyệt đẹp về đêm",
      "Check-in Bến Thượng Hải hoa lệ, Chùa Ngọc Phật, Miếu Thành Hoàng & Phố đi bộ Nam Kinh",
      "Chiêm ngưỡng Duyệt Giang Lâu hoàng gia thời Minh bên sông Dương Tử & Phủ Tổng Thống",
      "Ngồi thuyền thưởng ngoạn Tây Hồ Hàng Châu di sản thế giới & Viếng Miếu Nhạc Phi",
      "Thưởng thức tiệc ẩm thực: 01 bữa Lẩu Trung Hoa và 01 bữa tiệc BBQ đặc sắc",
      "Đặc quyền 01 ngày Freeday tự do khám phá Thượng Hải (Disneyland, Du thuyền sông Hoàng Phố, Tháp Thượng Hải)"
    ],
    giftMeals: [
      "Vé máy bay khứ hồi China Eastern Airlines (23kg ký gửi + 07kg xách tay)",
      "Tặng 01 đêm nghỉ dưỡng tại khách sạn 5 sao cao cấp bên trong Ô Trấn Tây Sách",
      "Tặng 01 bữa Lẩu Trung Quốc thượng hạng & 01 bữa tiệc nướng BBQ đặc sắc",
      "Tặng vé ngồi thuyền ngoạn cảnh Tây Hồ Hàng Châu di sản thế giới",
      "Tặng vé tham quan Duyệt Giang Lâu, Phu Tử Miếu bên dòng Tần Hoài, Phủ Tổng Thống",
      "Khách sạn tiêu chuẩn 4 sao Thượng Hải và Nam Kinh",
      "Visa đoàn nhập cảnh Trung Quốc trọn gói do Én Việt Group bảo lãnh",
      "Bảo hiểm du lịch quốc tế mức bồi thường tối đa 1 tỷ đồng"
    ],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "trung-quoc", "chau-a"],
    badge: "5★ Ô Trấn & No Shopping",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1000&q=85",
    departure: "Tháng 11: Ngày 04 & 11/11",
    isFeatured: true,
    pdfFile: "THƯỢNG HẢI - NAM KINH - Ô TRẤN - HÀNG CHÂU 6N5D.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1000&q=85",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
      "https://images.unsplash.com/photo-1513415277900-a62401e19be4?w=800&q=80"
    ],
    flightInfo: {
      airline: "China Eastern Airlines (Hãng Hàng Không Quốc Tế 4★)",
      outbound: "MU 6024 SGN – PVG 04:30 – 09:30 (Tân Sơn Nhất – Phố Đông Thượng Hải)",
      returnFlight: "MU 6023 PVG – SGN 23:40 – 03:30+1 (Phố Đông Thượng Hải – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 23kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "3.000.000 VNĐ / khách / tour",
    pricingTable: [
      { month: "Tháng 11", dates: "04, 11/11", adult: "20.990.000", child: "19.990.000", infant: "6.990.000", note: "Bao gồm ngủ đêm 5★ trong Ô Trấn" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ THƯỢNG HẢI – ĐIỀN TỬ PHƯỜNG – CHÙA NGỌC PHẬT – BẾN THƯỢNG HẢI",
        meals: "Ăn nhẹ trên máy bay, Ăn trưa, Ăn tối",
        hotel: "Khách sạn 4 sao trung tâm Thượng Hải",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
        activities: [
          { desc: "01:30 Quý khách tập trung tại Ga quốc tế, Sân bay Tân Sơn Nhất. Trưởng đoàn Én Việt hướng dẫn làm thủ tục đón chuyến bay MU6024 SGN-PVG lúc 04:30 đi Thượng Hải." },
          { desc: "09:30 Đến Thượng Hải – siêu đô thị sầm uất bậc nhất Trung Quốc, nơi giao thoa ấn tượng giữa nét hoài cổ phương Tây và nhịp sống hiện đại tương lai. Xe và HDV địa phương đón đoàn đi tham quan:", highlight: true },
          { desc: "Điền Tử Phường: Khu phố nghệ thuật độc đáo nằm trong những con hẻm cổ (Lộng Đường) đặc trưng của Thượng Hải với các tiệm thủ công tinh xảo và quán cà phê lãng mạn." },
          { desc: "Chùa Ngọc Phật: Ngôi chùa cổ linh thiêng nổi tiếng nhất Thượng Hải với hai pho tượng Phật bằng ngọc bích nguyên khối được thỉnh từ Miến Điện.", highlight: true },
          { desc: "Bến Thượng Hải: Biểu tượng kinh điển ngắm nhìn quần thể 52 tòa nhà kiến trúc phương Tây cổ kính đối diện các tòa tháp cao tầng hiện đại ở Phố Đông.", highlight: true },
          { desc: "Miếu Thành Hoàng: Khu phố cổ sầm uất mang đậm kiến trúc thời Minh - Thanh, thưởng thức tiểu long bao và dạo Phố đi bộ Nam Kinh – 'Trung Hoa đệ nhất lộ'." }
        ]
      },
      {
        day: 2,
        title: "THƯỢNG HẢI – FREEDAY (TỰ DO KHÁM PHÁ THEO SỞ THÍCH)",
        meals: "Ăn sáng tại khách sạn",
        hotel: "Khách sạn 4 sao trung tâm Thượng Hải",
        image: "https://images.unsplash.com/photo-1513415277900-a62401e19be4?w=800&q=80",
        activities: [
          { desc: "Quý khách dùng điểm tâm sáng tại khách sạn. Tự do vui chơi cả ngày tại Thượng Hải không theo lịch trình cố định:", highlight: true },
          { desc: "GỢI Ý OPTION 1: Tham quan Shanghai Disneyland – Công viên giải trí Disneyland lớn nhất châu Á với lâu đài biểu tượng và các trò chơi cảm giác mạnh hoành tráng (chi phí tự túc)." },
          { desc: "GỢI Ý OPTION 2: Du thuyền Sông Hoàng Phố ngắm trọn vẹn vẻ đẹp lung linh huyền ảo của Thượng Hải về đêm (chi phí tự túc)." },
          { desc: "GỢI Ý OPTION 3: Tháp Thượng Hải (Shanghai Tower) – Tòa nhà cao nhất Trung Quốc và thứ 3 thế giới ngắm toàn cảnh thành phố từ tầng mây (chi phí tự túc)." }
        ]
      },
      {
        day: 3,
        title: "THƯỢNG HẢI – NAM KINH – DUYỆT GIANG LÂU – PHU TỬ MIẾU – PHỦ TỔNG THỐNG",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        hotel: "Khách sạn 4 sao trung tâm Nam Kinh",
        image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
        activities: [
          { desc: "Ăn sáng và trả phòng khách sạn. Xe đưa đoàn khởi hành đi Cố đô Nam Kinh lịch sử:", highlight: true },
          { desc: "Duyệt Giang Lâu: Tòa lâu đài nguy nga tọa lạc trên đỉnh núi Sư Tử ngay sát sông Dương Tử, mang đậm kiến trúc Hoàng gia thời Minh với tầm nhìn trọn cảnh sông hùng vĩ." },
          { desc: "Phu Tử Miếu: Quần thể kiến trúc lịch sử bên dòng sông Tần Hoài thơ mộng thờ Khổng Tử, nơi hòa quyện không gian Nho giáo cổ kính và phố thương mại sầm uất.", highlight: true },
          { desc: "Phủ Tổng Thống: Di tích lịch sử quan trọng chứng kiến nhiều biến động cận đại Trung Quốc, kết hợp hài hòa kiến trúc cổ điển Trung Hoa và phương Tây." },
          { desc: "Check-in Đại lộ Cây Ngô Đồng: Con đường thơ mộng bậc nhất Nam Kinh với hai hàng cây ngô đồng cổ thụ rợp bóng mát xanh biếc." }
        ]
      },
      {
        day: 4,
        title: "NAM KINH – Ô TRẤN TÂY SÁCH (NGHỈ ĐÊM KHÁCH SẠN 5 SAO BÊN TRONG Ô TRẤN)",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        hotel: "Khách sạn 5 sao bên trong Ô Trấn Tây Sách",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
        activities: [
          { desc: "Đoàn ăn sáng tại khách sạn, trả phòng. Xe đưa đoàn đến Ô Trấn – Đệ nhất thủy trấn Giang Nam hơn 1.300 năm lịch sử.", highlight: true },
          { desc: "Khám phá Khu Tây Sách Ô Trấn: Nổi tiếng được bảo tồn nguyên vẹn với những cây cầu đá cổ, nhà mái ngói đen rêu phong bên dòng kênh và khung cảnh đèn lồng lung linh huyền ảo về đêm.", highlight: true },
          { desc: "Đặc quyền nghỉ đêm tại khách sạn 5 sao tọa lạc ngay bên trong Ô Trấn Tây Sách – tận hưởng không gian tĩnh mịch thanh tao của chốn bồng lai nước non." }
        ]
      },
      {
        day: 5,
        title: "Ô TRẤN – HÀNG CHÂU – DU THUYỀN TÂY HỒ – MIẾU NHẠC PHI ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        activities: [
          { desc: "Ăn sáng tại Ô Trấn, trả phòng. Đoàn khởi hành đi thành phố Hàng Châu thơ mộng:" },
          { desc: "Ngồi thuyền ngoạn cảnh Tây Hồ – Di sản văn hóa thế giới được mệnh danh là 'thiên đường hạ giới' với cảnh sắc Tam Đàn Ấn Nguyệt, Tô Đê, Bạch Đê thơ mộng.", highlight: true },
          { desc: "Chiêm bái Miếu Nhạc Phi – Ngôi miếu linh thiêng thờ vị danh tướng trung thần Nhạc Phi lẫy lừng thời Nam Tống." },
          { desc: "Dùng bữa tối tại nhà hàng. Sau đó xe đưa đoàn ra Sân bay quốc tế Phố Đông Thượng Hải đón chuyến bay MU6023 (23:40 – 03:30+1) về lại TP.HCM.", highlight: true }
        ]
      },
      {
        day: 6,
        title: "THƯỢNG HẢI ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn nhẹ trên máy bay",
        activities: [
          { desc: "03:30 Về đến sân bay quốc tế Tân Sơn Nhất, đoàn làm thủ tục nhập cảnh và lấy hành lý. Kết thúc chuyến du lịch Thượng Hải – Nam Kinh – Ô Trấn 5★ trọn vẹn và hẹn gặp lại quý khách!", highlight: true }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi theo đoàn: 7kg xách tay + 23kg ký gửi của China Eastern Airlines",
      "Khách sạn tiêu chuẩn 4 sao, đặc biệt 01 đêm khách sạn 5 sao cao cấp bên trong Ô Trấn Tây Sách (2 người/phòng)",
      "Visa đoàn nhập cảnh Trung Quốc trọn gói theo đoàn (Hộ chiếu + hình 4x6 nền trắng)",
      "Các bữa ăn chính như chương trình, bao gồm 01 bữa Lẩu Trung Quốc và 01 bữa tiệc nướng BBQ đặc sắc",
      "Xe máy lạnh đời mới vận chuyển suốt tuyến",
      "Vé tham quan, du thuyền Tây Hồ, Ô Trấn, Duyệt Giang Lâu, Phu Tử Miếu theo lịch trình",
      "Trưởng đoàn từ Việt Nam và hướng dẫn viên địa phương chu đáo",
      "Bảo hiểm du lịch Quốc tế suốt tuyến mức tối đa 1 tỷ đồng",
      "Nước suối 01 chai/khách/ngày và thuế VAT"
    ],
    exclusions: [
      "Chi phí cá nhân: giặt ủi, điện thoại, nước uống ngoài chương trình",
      "Phụ thu phòng đơn: 3.000.000 VNĐ / khách / tour",
      "Chi phí tham quan vui chơi ngày Freeday (Disneyland, Du thuyền Hoàng Phố, Tháp Thượng Hải...)",
      "Tips cho tài xế và HDV địa phương mức đề nghị: 35 USD/khách/tour"
    ],
    visaRequirements: [
      "Hộ chiếu gốc hoặc scan rõ nét còn hạn trên 6 tháng tính từ ngày về",
      "02 hình 4x6cm tiêu chuẩn quốc tế phông trắng",
      "Thủ tục visa đoàn do Én Việt Group nộp trước ngày khởi hành ít nhất 20 ngày"
    ]
  },

  // ── 2. THƯỢNG HẢI – VÔ TÍCH – TÔ CHÂU – HÀNG CHÂU 5N4D ──
  {
    id: "tour-cn-wuxi-suzhou-5n4d",
    code: "EVG-CN-SHA-WUX-5N4D",
    title: "DU LỊCH TRUNG QUỐC: THƯỢNG HẢI – VÔ TÍCH – TÔ CHÂU – HÀNG CHÂU",
    itinerary: "Thượng Hải - Vô Tích - Tô Châu - Hàng Châu",
    duration: "05 Ngày 04 Đêm",
    durationDays: 5,
    airline: "Vietjet Air 4★",
    price: 14990000,
    priceFormatted: "14.990.000 VNĐ",
    highlights: [
      "Thành phố điện ảnh Tam Quốc – phim trường Hollywood Đông Dương quy mô lớn nhất Trung Quốc",
      "Bảo tàng tự nhiên Thái Hồ – một trong bốn hồ nước ngọt có diện tích lớn nhất Trung Quốc",
      "Lâm viên Sư Tử Lâm & Chùa cổ Hàn Sơn Tự trầm mặc bên trấn Phong Kiều",
      "Phố cổ ngàn năm Thất Lý Sơn Đường – 'Con phố số 1 ở Cô Tô' với chiều dài gần 4km",
      "Ngồi thuyền ngoạn cảnh Tây Hồ 'Tam Đàn Ấn Nguyệt' thơ mộng di sản thế giới",
      "Khám phá Ô Trấn (Phía Đông) hơn 1300 năm lịch sử gìn giữ nguyên vẹn nếp sống cổ xưa",
      "Check-in Bến Thượng Hải hoa lệ, Chùa Phật Ngọc, Hành lang đi bộ Lục Gia Chủy & Tháp Kim Mậu",
      "Thưởng thức các món ẩm thực Trung Hoa đặc sắc: Lẩu Trung Hoa, Tiểu long bao, Mì bò trứ danh"
    ],
    giftMeals: [
      "Vé máy bay khứ hồi Vietjet Air (20kg ký gửi + 07kg xách tay)",
      "Khách sạn tiêu chuẩn 4 sao địa phương tiện nghi suốt tuyến",
      "Tặng vé tham quan Phim trường Tam Quốc Diễn Nghĩa và danh thắng Thái Hồ",
      "Tặng vé du thuyền thưởng ngoạn cảnh sắc Tây Hồ Hàng Châu",
      "Tặng bữa tiệc Lẩu Trung Hoa, thưởng thức Tiểu Long Bao và ẩm thực truyền thống",
      "Trưởng đoàn Én Việt và hướng dẫn viên địa phương phục vụ tận tình",
      "Bảo hiểm du lịch quốc tế quyền lợi tối đa theo chuẩn"
    ],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "trung-quoc", "chau-a"],
    badge: "Phim Trường Tam Quốc",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1000&q=85",
    departure: "Khởi hành định kỳ thứ 4 & thứ 7 hàng tuần (Tháng 5 - Tháng 12)",
    isFeatured: true,
    pdfFile: "THƯỢNG HẢI – VÔ TÍCH – TÔ CHÂU – HÀNG CHÂU 5N4D.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1000&q=85",
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
      "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=800&q=80"
    ],
    flightInfo: {
      airline: "Vietjet Air (Chuyến bay thẳng Tân Sơn Nhất – Thượng Hải)",
      outbound: "VJ 3900 SGN – PVG 20:05 – 01:00 (Tân Sơn Nhất – Phố Đông Thượng Hải)",
      returnFlight: "VJ 3901 PVG – SGN 02:15 – 05:40 (Phố Đông Thượng Hải – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 20kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "2.900.000 VNĐ / phòng (Lễ Tết: 3.500.000 VNĐ)",
    pricingTable: [
      { month: "Tháng 05, 06", dates: "20/05, 10/06", adult: "14.990.000", child: "13.990.000", infant: "4.590.000" },
      { month: "Tháng 07, 08", dates: "08, 15, 29/07, 12, 19/08", adult: "16.590.000", child: "15.590.000", infant: "4.990.000" },
      { month: "Tháng 09, 11, 12", dates: "Khởi hành hàng tuần", adult: "15.990.000", child: "14.990.000", infant: "4.890.000" },
      { month: "Tết Dương Lịch", dates: "23, 30/12", adult: "19.490.000", child: "18.490.000", infant: "5.990.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ THƯỢNG HẢI",
        meals: "Ăn tối nhẹ trên máy bay",
        hotel: "Khách sạn 4 sao Thượng Hải",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
        activities: [
          { desc: "Trưởng đoàn đón Quý khách tại sân bay Tân Sơn Nhất để làm thủ tục check-in đáp chuyến bay VJ3900 SGN-PVG (20:05 – 01:00) đi Thượng Hải." },
          { desc: "01:00 Đến sân bay Phố Đông Thượng Hải, đoàn làm thủ tục nhập cảnh. Xe đưa đoàn về khách sạn nhận phòng nghỉ ngơi.", highlight: true }
        ]
      },
      {
        day: 2,
        title: "THƯỢNG HẢI – VÔ TÍCH – PHIM TRƯỜNG TAM QUỐC – THÁI HỒ",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        hotel: "Khách sạn 4 sao Vô Tích",
        image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
        activities: [
          { desc: "Ăn sáng tại khách sạn. Đoàn khởi hành đi thành phố cổ Vô Tích." },
          { desc: "Thành phố điện ảnh Tam Quốc: Phim trường quy mô lớn đầu tiên ở Trung Quốc với hàng trăm đoàn làm phim và cho ra đời hơn 1.000 bộ phim truyền hình mỗi năm, được mệnh danh là 'Hollywood Đông Dương'.", highlight: true },
          { desc: "Thái Hồ: Một trong bốn hồ nước ngọt có diện tích bề mặt lớn nhất Trung Quốc, được ví như bảo tàng tự nhiên về lịch sử và văn hóa với những ngôi nhà cổ kính soi bóng nước.", highlight: true },
          { desc: "Dùng bữa tối tại nhà hàng địa phương, nhận phòng khách sạn 4 sao tại Vô Tích nghỉ ngơi." }
        ]
      },
      {
        day: 3,
        title: "VÔ TÍCH – TÔ CHÂU – SƯ TỬ LÂM – HÀN SƠN TỰ – HÀNG CHÂU",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        hotel: "Khách sạn 4 sao Hàng Châu",
        image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=800&q=80",
        activities: [
          { desc: "Ăn sáng tại khách sạn, trả phòng. Khởi hành đi thành phố Tô Châu hoa lệ:" },
          { desc: "Tham quan Sư Tử Lâm – một trong tứ đại danh viên nổi tiếng bậc nhất Tô Châu với nghệ thuật xếp đá kỳ ảo." },
          { desc: "Chiêm bái Chùa Hàn Sơn Tự – ngôi chùa cổ nổi tiếng đi vào thi ca nằm tại phía Tây trấn Phong Kiều.", highlight: true },
          { desc: "Dạo bước trên phố cổ ngàn năm Thất Lý Sơn Đường – được mệnh danh là 'con phố số 1 ở Cô Tô' với chiều dài gần 4km ven sông tuyệt đẹp.", highlight: true },
          { desc: "Đoàn di chuyển đến Hàng Châu, ăn tối tại nhà hàng. Buổi tối quý khách có thể thưởng thức show diễn nổi tiếng Tống Thành Thiên Tình Cổ (chi phí tự túc)." }
        ]
      },
      {
        day: 4,
        title: "HÀNG CHÂU – DU THUYỀN TÂY HỒ – CỔ TRẤN Ô TRẤN – THƯỢNG HẢI",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        hotel: "Khách sạn 4 sao Thượng Hải",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
        activities: [
          { desc: "Đoàn ngồi thuyền tham quan Tây Hồ – di sản văn hóa thế giới UNESCO với phong cảnh nên thơ gắn liền truyền thuyết Lương Sơn Bá – Chúc Anh Đài, Bạch Xà.", highlight: true },
          { desc: "Khám phá Cổ trấn Ô Trấn (Phía Đông): Thủy trấn lớn nhất Trung Quốc với hơn 1.300 năm lịch sử, cầu đá cổ kính và nhà gỗ chạm khắc tinh xảo.", highlight: true },
          { desc: "Thưởng thức Trà Long Tỉnh – Đệ nhất danh trà Trung Hoa được vua Càn Long phong sắc Hoàng Trà." },
          { desc: "Khởi hành về lại Thượng Hải, ăn tối và tự do dạo phố đêm phồn hoa." }
        ]
      },
      {
        day: 5,
        title: "THƯỢNG HẢI – MIẾU THÀNH HOÀNG – CHÙA NGỌC PHẬT – BẾN THƯỢNG HẢI ✈ TP.HCM",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        activities: [
          { desc: "Ăn sáng tại khách sạn, trả phòng. Xe đưa đoàn tham quan Miếu Thành Hoàng và Hành lang đi bộ trên không Lục Gia Chủy ngắm toàn cảnh các tòa tháp chọc trời." },
          { desc: "Viếng Chùa Ngọc Phật cổ kính lưu giữ hai pho tượng Phật bằng ngọc bích nguyên khối.", highlight: true },
          { desc: "Dạo bước Bến Thượng Hải, chụp ảnh Tháp truyền hình Đông Phương Minh Châu và Tháp Kim Mậu cao sừng sững." },
          { desc: "Tự do mua sắm trên đại lộ Phố Nam Kinh sầm uất với hàng trăm cửa hiệu nổi tiếng." },
          { desc: "Sau bữa tối, xe đưa đoàn ra sân bay Phố Đông đón chuyến bay VJ3901 (02:15 – 05:40) về lại TP. Hồ Chí Minh.", highlight: true }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi theo đoàn của Vietjet Air (20kg ký gửi + 07kg xách tay)",
      "Khách sạn tiêu chuẩn 4 sao địa phương (2 người/phòng, lẻ bố trí phòng 3)",
      "Visa đoàn nhập cảnh Trung Quốc (Hộ chiếu + CCCD + 2 hình 4x6 nền trắng)",
      "Các bữa ăn chính chất lượng cao như chương trình (Lẩu Trung Hoa, Tiểu Long Bao)",
      "Vé tham quan: Phim trường Tam Quốc, Thái Hồ, Sư Tử Lâm, Thuyền Tây Hồ, Ô Trấn, Chùa Ngọc Phật",
      "Xe máy lạnh vận chuyển suốt tuyến tại Trung Quốc",
      "Trưởng đoàn và hướng dẫn viên địa phương phục vụ tận tâm",
      "Bảo hiểm du lịch quốc tế suốt tuyến và thuế phi trường hai nước"
    ],
    exclusions: [
      "Chi phí cá nhân ngoài chương trình (giặt ủi, minibar, điện thoại...)",
      "Phụ thu phòng đơn: 2.900.000 VNĐ / phòng (Lễ Tết: 3.500.000 VNĐ)",
      "Tips cho tài xế và HDV địa phương mức đề nghị: 30 USD/khách (Lễ: 35 USD/khách)",
      "Show biểu diễn Tống Thành Thiên Tình Cổ (chi phí tự túc)"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "CCCD và 02 hình 4x6cm tiêu chuẩn quốc tế phông trắng",
      "Hồ sơ nộp trước ngày khởi hành ít nhất 20 ngày"
    ]
  },

  // ── 3. THƯỢNG HẢI – Ô TRẤN – HÀNG CHÂU (NO SHOPPING) 6N5D ──
  {
    id: "tour-cn-shanghai-hangzhou-no-shopping",
    code: "EVG-CN-SHA-HGH-6N5D",
    title: "DU LỊCH TRUNG QUỐC: THƯỢNG HẢI – Ô TRẤN – HÀNG CHÂU (NO SHOPPING)",
    itinerary: "Thượng Hải - Ô Trấn - Hàng Châu",
    duration: "06 Ngày 05 Đêm",
    durationDays: 6,
    airline: "Sun PhuQuoc Airways",
    price: 14990000,
    priceFormatted: "14.990.000 VNĐ",
    highlights: [
      "Chương trình NO SHOPPING cam kết chất lượng tour nghỉ dưỡng đẳng cấp",
      "Trải nghiệm 01 đêm khách sạn 5 sao sang trọng bên trong Tây Ô Trấn",
      "Dạo Tây Hồ 'Tam Đàn Ấn Nguyệt' rộng 6,7km² đẹp tựa chốn bồng lai tiên cảnh",
      "Dạo Phố Thanh Hà Phường cổ kính & Phố cổ Trực Hà bình yên bên bờ kênh đào",
      "Khám phá Tây Ô Trấn – thiên đường sông nước Giang Nam hơn 1.300 năm lịch sử",
      "Check-in Đường Wukang phong cách Pháp & Check-in Tàu Louis Vuitton Flagship Store Thượng Hải",
      "Chiêm bái Chùa Phật Ngọc thanh tịnh, Miếu Thành Hoàng, Lục Gia Chủy & Bến Thượng Hải",
      "Thưởng thức đại tiệc: Bữa ăn Lẩu Trung Hoa thượng hạng + Mì Cua Lông trứ danh"
    ],
    giftMeals: [
      "Hàng không Sun PhuQuoc Airways khứ hồi tiện nghi (23kg ký gửi + 07kg xách tay)",
      "Nghỉ đêm 4 sao cao cấp + Tặng 01 đêm khách sạn 5 sao bên trong Ô Trấn",
      "Tặng bữa tiệc Lẩu Trung Hoa kết hợp Mì Cua Lông đặc sản",
      "Tặng vé ngồi thuyền ngoạn cảnh Tây Hồ di sản thế giới",
      "Tặng vé tham quan Ô Trấn Tây Sách, Chùa Phật Ngọc, Miếu Thành Hoàng",
      "Bảo hiểm du lịch quốc tế quyền lợi tối đa suốt hành trình"
    ],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "trung-quoc", "chau-a"],
    badge: "Mì Cua Lông & 5★ Ô Trấn",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=85",
    departure: "Khởi hành hàng tuần Tháng 10, 11, 12",
    isFeatured: true,
    pdfFile: "THƯỢNG HẢI – Ô TRẤN – HÀNG CHÂU NO SHOPPING 6N5D.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=85",
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
      "https://images.unsplash.com/photo-1513415277900-a62401e19be4?w=800&q=80"
    ],
    flightInfo: {
      airline: "Sun PhuQuoc Airways (9G)",
      outbound: "9G 634 SGN – PVG 23:40 – 04:40 (Tân Sơn Nhất – Thượng Hải)",
      returnFlight: "9G 635 PVG – SGN 05:40 – 09:40 (Thượng Hải – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 23kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "3.200.000 VNĐ / khách / trọn tour",
    pricingTable: [
      { month: "Tháng 10", dates: "16, 19, 23, 26, 30/10", adult: "14.990.000", child: "13.490.000", infant: "4.590.000" },
      { month: "Tháng 11", dates: "02, 06, 09, 13, 16, 20, 23, 27, 30/11", adult: "15.990.000", child: "14.490.000", infant: "4.890.000" },
      { month: "Tháng 12", dates: "04, 07, 11, 14, 18, 21/12", adult: "15.990.000", child: "14.490.000", infant: "4.890.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ THƯỢNG HẢI",
        meals: "Ăn tối nhẹ trên máy bay",
        hotel: "Nghỉ đêm trên chuyến bay",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
        activities: [
          { desc: "21:00 Trưởng đoàn đón Quý khách tại sân bay Tân Sơn Nhất để làm thủ tục đáp chuyến bay 9G634 SGN – PVG (23:40 – 04:40) đi Thượng Hải." },
          { desc: "Đoàn nghỉ ngơi thư giãn trên máy bay.", highlight: true }
        ]
      },
      {
        day: 2,
        title: "THƯỢNG HẢI – HÀNG CHÂU – THUYỀN TÂY HỒ – PHỐ THANH HÀ PHƯỜNG",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        hotel: "Khách sạn 4 sao Hàng Châu",
        image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
        activities: [
          { desc: "04:40 Đáp sân bay Thượng Hải, đoàn làm thủ tục nhập cảnh. Xe đón đoàn di chuyển về thành phố Hàng Châu dùng bữa sáng." },
          { desc: "Ngồi thuyền thưởng ngoạn Tây Hồ – được xem là đẹp và nên thơ nhất trong hơn 36 hồ cùng tên ở Trung Quốc (ngắm Quả Sơn, Đoạn Kiều, Tô Đê, Tam Đàn Ấn Nguyệt).", highlight: true },
          { desc: "Dạo Phố Thanh Hà Phường – khu phố cổ kính lưu giữ tinh hoa truyền thống giữa lòng Hàng Châu hiện đại, hoặc tham quan Phố cổ Trực Hà bình yên bên bờ kênh đào." },
          { desc: "Ăn tối và nghỉ đêm tại khách sạn Hàng Châu. Quý khách có thể xem show biểu diễn Tống Thành Thiên Tình Cổ (chi phí tự túc)." }
        ]
      },
      {
        day: 3,
        title: "HÀNG CHÂU – Ô TRẤN TÂY SÁCH (NGHỈ ĐÊM KHÁCH SẠN 5 SAO Ô TRẤN)",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        hotel: "Khách sạn 5 sao bên trong Ô Trấn",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
        activities: [
          { desc: "Ăn sáng tại khách sạn, trả phòng. Xe đưa đoàn về Ô Trấn – đệ nhất thủy trấn với hơn 1.300 năm lịch sử.", highlight: true },
          { desc: "Khám phá Ô Trấn (Tây Sách): Cây cầu đá cổ, mái ngói rêu phong, kênh nước trong xanh và nếp sinh hoạt nguyên bản nghìn năm.", highlight: true },
          { desc: "Quý khách có thể tự túc thuê trang phục Hán phục chụp ảnh lưu niệm cực đẹp." },
          { desc: "Dùng bữa tối và tự do thưởng ngoạn vẻ đẹp lung linh của Ô Trấn khi phố lên đèn. Nghỉ đêm tại khách sạn 5 sao Ô Trấn." }
        ]
      },
      {
        day: 4,
        title: "Ô TRẤN – THƯỢNG HẢI – CHÙA PHẬT NGỌC – BẾN THƯỢNG HẢI – PHỐ NAM KINH",
        meals: "Ăn sáng, Ăn trưa, Tối tự túc",
        hotel: "Khách sạn 4 sao Thượng Hải",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
        activities: [
          { desc: "Ăn sáng tại khách sạn, trả phòng. Khởi hành về Thượng Hải tham quan:", highlight: true },
          { desc: "Chùa Phật Ngọc: Ngôi chùa cổ danh tiếng với bức tượng Phật bằng ngọc bích trắng của Miến Điện chạm khắc tỉ mỉ." },
          { desc: "Miếu Thành Hoàng: Khu mua sắm kết hợp kiến trúc cổ kính và hiện đại." },
          { desc: "Bến Thượng Hải: Điểm ngắm bờ sông Hoàng Phố sôi động và giao thoa quá khứ - hiện tại." },
          { desc: "Tự do mua sắm tại Phố Nam Kinh với hơn 600 cửa hàng sầm uất. Quý khách có thể đăng ký Du thuyền sông Hoàng Phố ngắm cảnh Thượng Hải rực rỡ ánh đèn về đêm (chi phí tự túc)." }
        ]
      },
      {
        day: 5,
        title: "THƯỢNG HẢI – LỤC GIA CHỦY – ĐƯỜNG WUKANG – TÀU LOUIS VUITTON",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        hotel: "Khách sạn gần sân bay Thượng Hải",
        image: "https://images.unsplash.com/photo-1513415277900-a62401e19be4?w=800&q=80",
        activities: [
          { desc: "Ăn sáng tại khách sạn, trả phòng. Tham quan Lục Gia Chủy – khu bán đảo tài chính với hàng loạt tòa tháp chọc trời tựa như thế giới tương lai.", highlight: true },
          { desc: "Chụp ảnh bên ngoài Tháp truyền hình Đông Phương Minh Châu cao 468m – biểu tượng Thượng Hải." },
          { desc: "Khám phá Đường Wukang lịch sử mang phong cách kiến trúc Pháp cổ kính sang trọng." },
          { desc: "Check-in Tàu Louis: Flagship store đầu tiên của thương hiệu Louis Vuitton tại Thượng Hải thiết kế như một con tàu hơi nước khổng lồ.", highlight: true },
          { desc: "Dùng bữa tối tại nhà hàng và nhận phòng khách sạn gần sân bay nghỉ ngơi." }
        ]
      },
      {
        day: 6,
        title: "THƯỢNG HẢI ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn nhẹ trên máy bay",
        activities: [
          { desc: "01:30 Làm thủ tục trả phòng, HDV đưa đoàn ra sân bay đáp chuyến bay 9G635 PVG – SGN (05:40 – 09:40) về lại Việt Nam.", highlight: true },
          { desc: "09:40 Về đến sân bay Tân Sơn Nhất, làm thủ tục nhập cảnh và kết thúc hành trình tốt đẹp." }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi theo đoàn: 07kg xách tay + 23kg ký gửi của Sun PhuQuoc Airways",
      "Khách sạn tiêu chuẩn 4 sao + Tặng 01 đêm khách sạn 5 sao tại Ô Trấn",
      "Visa nhập cảnh Trung Quốc cho khách hộ chiếu Việt Nam",
      "Các bữa ăn chính như chương trình, bao gồm bữa Lẩu Trung Hoa + Mì Cua Lông",
      "Vé tham quan, du thuyền Tây Hồ, Ô Trấn theo lịch trình",
      "Xe ô tô vận chuyển máy lạnh đời mới suốt tuyến",
      "Trưởng đoàn và HDV địa phương tận tâm",
      "Bảo hiểm du lịch Quốc tế suốt tuyến và thuế VAT"
    ],
    exclusions: [
      "Chi phí cá nhân: giặt ủi, điện thoại, thức uống minibar...",
      "Phụ thu phòng đơn: 3.200.000 VNĐ / khách / trọn tour",
      "Bồi dưỡng cho tài xế và hướng dẫn viên: 30 USD/khách/trọn tour",
      "Chương trình du thuyền sông Hoàng Phố hoặc vé xem show diễn"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "02 hình 4x6 nền trắng chụp mới",
      "Hồ sơ nộp trước ít nhất 15 ngày khởi hành"
    ]
  },

  // ── 4. KHÁM PHÁ XỨ CẢNG THƠM HONGKONG FREEDAY (4N3D - Cathay Pacific) ──
  {
    id: "tour-cn-hongkong-freeday-4n3d",
    code: "EVG-HK-CATHAY-4N3D",
    title: "KHÁM PHÁ XỨ CẢNG THƠM: HONG KONG FREEDAY (NO SHOPPING)",
    itinerary: "Hong Kong - Cảng Victoria - Đảo Lantau - Núi Thái Bình",
    duration: "04 Ngày 03 Đêm",
    durationDays: 4,
    airline: "Cathay Pacific 5★",
    price: 18390000,
    priceFormatted: "18.390.000 VNĐ",
    highlights: [
      "Trải nghiệm đẳng cấp cùng Hãng Hàng Không 5 Sao Cathay Pacific (CX)",
      "Tặng bữa ăn Buffet trên thuyền dạo quanh Cảng Victoria ngắm toàn cảnh xứ Cảng Thơm",
      "Tặng bữa ăn Dimsum truyền thống, Lẩu Hotpot & ly trà sữa / trà chanh Hong Kong nguyên bản",
      "Trải nghiệm đời sống thực của cư dân tại phim trường 'Cửu Long Thành Trại' nổi tiếng",
      "Viếng Miếu Huỳnh Đại Tiên (Wong Tai Sin) linh thiêng cầu bình an tài lộc",
      "Ngắm toàn cảnh Hong Kong trên Đỉnh Núi Thái Bình (Victoria Peak) & Vịnh Nước Cạn",
      "Khám phá Đại Lộ Ngôi Sao, Quảng Trường Kim Tử Kinh, Trung Tâm Hội Nghị Triển Lãm",
      "Check-in Monster Building (bối cảnh phim bom tấn Transformers: Age of Extinction)",
      "Trải nghiệm thang cuốn ngoài trời có mái che dài nhất thế giới Mid-Levels ở Central",
      "01 Ngày Freeday tự do: Disneyland Hong Kong / Đại Nhĩ Sơn (Phật Thích Ca lớn nhất châu Á) / Công viên Hải Dương"
    ],
    giftMeals: [
      "Hàng không 5 sao Cathay Pacific khứ hồi tiêu chuẩn cao cấp (23kg ký gửi + 07kg xách tay)",
      "Tặng bữa tối Buffet thịnh soạn trên du thuyền dạo quanh vịnh Victoria rực rỡ",
      "Tặng bữa ăn Dimsum truyền thống & bữa tiệc Lẩu Hotpot phong phú",
      "Tặng 01 ly trà sữa hoặc hồng trà chanh Hong Kong nguyên vị",
      "Khách sạn tiêu chuẩn 4 sao quốc tế tiện nghi (Cozi Harbour View, Silka, Ramada Grand...)",
      "Visa nhập cảnh Hong Kong trọn gói và bảo hiểm du lịch quốc tế"
    ],
    country: "Hong Kong",
    region: "Tour Châu Á",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "hong-kong", "trung-quoc", "chau-a"],
    badge: "Cathay 5★ & No Shopping",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1000&q=85",
    departure: "Khởi hành Tháng 11: Ngày 05/11",
    isFeatured: true,
    pdfFile: "KHÁM PHÁ XỨ CẢNG THƠM HONGKONG FREEDAY.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1000&q=85",
      "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80"
    ],
    flightInfo: {
      airline: "Cathay Pacific 5★ (Hãng bay quốc tế hàng đầu thế giới)",
      outbound: "CX 766 SGN – HKG 11:35 – 15:20 (Tân Sơn Nhất – Chek Lap Kok)",
      returnFlight: "CX 799 HKG – SGN 16:45 – 18:35 (Chek Lap Kok – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 23kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "4.800.000 VNĐ / khách / tour",
    pricingTable: [
      { month: "Tháng 11", dates: "05/11", adult: "18.390.000", child: "15.630.000", infant: "6.430.000", singleRoom: "4.800.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ HONG KONG – CẦU THANH MÃ – ĐẠI LỘ NGÔI SAO – CHỢ QUÝ BÀ",
        meals: "Ăn trưa trên máy bay, Ăn tối",
        hotel: "Khách sạn 4 sao quốc tế Hong Kong",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
        activities: [
          { desc: "Quý khách tập trung tại Tân Sơn Nhất làm thủ tục đáp chuyến bay CX766 (11:35 – 15:20) của Cathay Pacific đi Hong Kong." },
          { desc: "15:20 Đến sân bay quốc tế Chek Lap Kok, xe đón đoàn đi qua Cầu Thanh Mã – cầu treo đẹp nhất Châu Á và lớn thứ 7 thế giới.", highlight: true },
          { desc: "Khám phá Đại Lộ Ngôi Sao dài gần nửa km gắn hơn 100 dấu vân tay, chữ ký các ngôi sao điện ảnh Hong Kong huyền thoại." },
          { desc: "Dạo mua sắm tại khu Mong Kok sôi động và Chợ Quý Bà (Ladies Market). Ăn tối và nhận phòng khách sạn 4 sao nghỉ ngơi." }
        ]
      },
      {
        day: 2,
        title: "HONG KONG CITY TOUR – MIẾU HUỲNH ĐẠI TIÊN – CỬU LONG THÀNH TRẠI – NÚI THÁI BÌNH – BUFFET DU THUYỀN",
        meals: "Ăn sáng (Dimsum), Ăn trưa, Ăn tối (Buffet Du Thuyền)",
        hotel: "Khách sạn 4 sao quốc tế Hong Kong",
        image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
        activities: [
          { desc: "Đoàn ăn sáng với món Dimsum truyền thống nổi tiếng. Khởi hành viếng Chùa Wong Tai Sin (Miếu Huỳnh Đại Tiên) – chốn tâm linh linh thiêng bậc nhất xứ Cảng Thơm.", highlight: true },
          { desc: "Tham quan phim trường Cửu Long Thành Trại (Twilight of the Warriors) – tái hiện không gian lịch sử Kowloon Walled City thập niên 90." },
          { desc: "Lên đỉnh Núi Thái Bình (Victoria Peak) – nơi có giá đất đắt đỏ nhất thế giới ngắm nhìn trọn vẹn toàn cảnh Hong Kong và Cửu Long.", highlight: true },
          { desc: "Tham quan Vịnh Nước Cạn (Repulse Bay) với bãi cát trắng mịn màng và viếng Miếu Thần Tài ven biển." },
          { desc: "Quảng Trường Kim Tử Kinh & Trung Tâm Hội Nghị Triển Lãm nơi diễn ra lễ trao trả Hong Kong năm 1997." },
          { desc: "Tối thưởng thức Buffet trên thuyền dạo quanh ngắm cảnh Cảng Victoria lung linh huyền ảo dưới muôn ánh đèn đêm rực rỡ.", highlight: true }
        ]
      },
      {
        day: 3,
        title: "HONG KONG – FREEDAY (KHÁM PHÁ THEO SỞ THÍCH)",
        meals: "Ăn sáng tại khách sạn",
        hotel: "Khách sạn 4 sao quốc tế Hong Kong",
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
        activities: [
          { desc: "Đoàn dùng điểm tâm sáng. Quý khách tự do vui chơi hoặc đăng ký 1 trong 3 option tour đặc sắc:", highlight: true },
          { desc: "OPTION 1: Công viên Disneyland Hong Kong (giá tham khảo 3.800.000 VNĐ) – tham gia các trò chơi không giới hạn, diễu hành Disney và xem pháo hoa rực rỡ tại Lâu đài." },
          { desc: "OPTION 2: Chinh phục Đại Nhĩ Sơn (giá tham khảo 2.800.000 VNĐ) – ngắm tượng Phật Thích Ca lớn nhất châu Á, viếng Hùng Sơn Đại Điện và dùng cơm chay." },
          { desc: "OPTION 3: Công viên giải trí Hải Dương Ocean Park (giá tham khảo 3.100.000 VNĐ) – thủy sinh lớn nhất Hong Kong với hàng nghìn sinh vật biển kỳ thú." }
        ]
      },
      {
        day: 4,
        title: "HONG KONG – MONSTER BUILDING – THANG CUỐN MID-LEVELS ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, Ăn trưa (Lẩu Hotpot)",
        activities: [
          { desc: "Ăn sáng địa phương và tặng mỗi khách 01 ly trà sữa / trà chanh Hong Kong chuẩn vị.", highlight: true },
          { desc: "Check-in Monster Building – công trình kiến trúc độc đáo phản ánh mật độ đô thị Hong Kong, bối cảnh bom tấn Transformers.", highlight: true },
          { desc: "Trải nghiệm Thang cuốn Mid-Levels dài hơn 800m tại Central – thang cuốn ngoài trời có mái che dài nhất thế giới." },
          { desc: "Thưởng thức bữa trưa Lẩu Hotpot đa dạng thơm ngon." },
          { desc: "Tự do mua sắm tại Duty Free Shopping sân bay trước khi đáp chuyến bay CX799 (16:45 – 18:35) của Cathay Pacific về lại Tân Sơn Nhất.", highlight: true }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi theo đoàn của Cathay Pacific 5★ (23kg ký gửi + 07kg xách tay)",
      "Thuế phi trường 2 nước, thuế an ninh, phụ phí xăng dầu",
      "Khách sạn tiêu chuẩn 4 sao quốc tế (2 khách/phòng, lẻ bố trí phòng 3)",
      "Bữa ăn Buffet tối trên du thuyền ngắm vịnh Victoria",
      "Các bữa ăn chính gồm tiệc Dimsum và Lẩu Hotpot",
      "Tặng 01 ly trà sữa / trà chanh Hong Kong cho mỗi khách",
      "Vé tham quan Núi Thái Bình, Miếu Huỳnh Đại Tiên, Monster Building, Cửu Long Thành Trại",
      "Lệ phí Visa nhập cảnh Hong Kong trọn gói",
      "Trưởng đoàn và hướng dẫn viên nhiệt tình suốt tuyến",
      "Bảo hiểm du lịch Quốc tế và Nón du lịch Én Việt"
    ],
    exclusions: [
      "Hộ chiếu còn hạn tối thiểu 6 tháng tính đến ngày kết thúc tour",
      "Chi phí cá nhân: giặt ủi, nước uống minibar, hành lý quá cước",
      "Chi phí các show diễn về đêm và chi phí vui chơi ngày Freeday (Disneyland, Đại Nhĩ Sơn...)",
      "Tiền bồi dưỡng cho HDV và tài xế: 20 USD/khách/tour (ngày Lễ/Tết: 25 USD/khách)"
    ],
    visaRequirements: [
      "Bản scan màu rõ nét trang hộ chiếu có hình (còn hạn trên 6 tháng)",
      "01 ảnh thẻ 4x6 phông trắng mới chụp trong 3 tháng gần nhất",
      "CCCD và xác nhận công việc hoặc giấy phép kinh doanh",
      "Chứng minh tài chính sổ tiết kiệm hoặc số dư trên 50.000.000 VNĐ / khách"
    ]
  },

  // ── 5. TẾ NAM – KHÚC PHỤ – THÁI SƠN – THANH ĐẢO 6N6D ──
  {
    id: "tour-cn-jinan-taishan-qingdao",
    code: "EVG-CN-TNA-TAO-6N6D",
    title: "DU LỊCH TRUNG QUỐC: TẾ NAM – KHÚC PHỤ – NÚI THÁI SƠN – THANH ĐẢO",
    itinerary: "Tế Nam - Khúc Phụ - Núi Thái Sơn - Duy Phường - Thanh Đảo",
    duration: "06 Ngày 06 Đêm",
    durationDays: 6,
    airline: "Shandong Airlines",
    price: 21990000,
    priceFormatted: "21.990.000 VNĐ",
    highlights: [
      "Chiêm bái Quê hương Khổng Tử Khúc Phụ & Quần thể Ni Sơn Thánh Cảnh (72 Hiền Lang, 5 sảnh Nhân – Nghĩa – Lễ – Trí – Tín)",
      "Chinh phục Núi Thái Sơn – Đông Nhạc Đại Tôn, ngọn núi linh thiêng bậc nhất trong Ngũ Nhạc Trung Hoa (Di sản thiên nhiên & văn hóa thế giới)",
      "Trải nghiệm cáp treo hai chiều lên Đỉnh Ngọc Hoàng tế trời, Cổng Nam Thiên & Phố Thiên Nhai bồng bềnh mây trắng",
      "Hồ Đại Minh (Tế Nam) thơ mộng gắn liền phim Hoàn Châu Cách Cách & Suối Mặc Tuyền trong vắt",
      "Khám phá Minh Thủy Cổ Thành – 'Nửa nhân gian khói lửa, nửa mộng cảnh thi họa' của nữ thi nhân Lý Thanh Chiếu",
      "Chiêm ngưỡng màn trình diễn ánh sáng Drone kỳ ảo & Show diễn nghệ thuật 'Tuyền Tú' trên nền trời đêm",
      "Thăm Hải Đới Lâu – Thư viện đẹp nhất Trung Quốc giữa hồ Tề Thịnh & Chợ ẩm thực Bát Đại Cục tại Truy Bác",
      "Bảo tàng Diều lớn nhất thế giới tại Duy Phường & Làng văn hóa dân gian 600 năm Dương Gia Bộ",
      "Quảng trường Ngũ Tứ & Trung tâm Thuyền Buồm Olympic tại thành phố biển Thanh Đảo hiện đại",
      "Cầu Trạm (Trạm Kiều Thanh Đảo), Bãi biển Sa Tử Khẩu & Bảo tàng Bia Thanh Đảo từ 1903 (nổi tiếng nhất châu Á)"
    ],
    giftMeals: [
      "Hàng không Quốc tế Shandong Airlines (23kg ký gửi + 07kg xách tay)",
      "Khách sạn tiêu chuẩn 4 sao cao cấp suốt tuyến (Mingshui Ancient City Hotel, Tai Shan Grand Hotel, Crowne Plaza...)",
      "Vé cáp treo hai chiều chinh phục đỉnh thiêng Núi Thái Sơn",
      "Tặng vé tham quan Ni Sơn Thánh Cảnh, Minh Thủy Cổ Thành, Bảo tàng Bia Thanh Đảo",
      "Tặng 01 bữa trà chiều thư thái tại Phố cổ Đảo Đại Bảo Thanh Đảo",
      "Tặng vé xem trình diễn ánh sáng Drone và Show nghệ thuật Tuyền Tú đặc sắc",
      "Visa đoàn nhập cảnh Trung Quốc thuận tiện và bảo hiểm du lịch quốc tế"
    ],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "trung-quoc", "chau-a"],
    badge: "Đông Nhạc Thái Sơn",
    image: "https://images.unsplash.com/photo-1527684651001-731c474bbb5a?w=1000&q=85",
    departure: "Khởi hành hàng tuần (Tháng 9, 10, 11, 12)",
    isFeatured: true,
    pdfFile: "TẾ NAM – KHÚC PHỤ – THÁI SƠN – THANH ĐẢO 6N6D.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1527684651001-731c474bbb5a?w=1000&q=85",
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
      "https://images.unsplash.com/photo-1544986581-efac024faf62?w=800&q=80"
    ],
    flightInfo: {
      airline: "Shandong Airlines (SC)",
      outbound: "SC 8074 SGN – TNA 01:30 – 07:20 (Tân Sơn Nhất – Tế Nam)",
      returnFlight: "SC 4645 TAO – SGN 20:10 – 00:10 (Thanh Đảo – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 23kg + 07kg hành lý xách tay"
    },
    singleRoomSurcharge: "4.000.000 VNĐ / khách / tour",
    pricingTable: [
      { month: "Tháng 09", dates: "06, 20/09", adult: "21.990.000", child: "20.990.000", infant: "7.990.000" },
      { month: "Tháng 10", dates: "09, 16, 18, 23, 30/10", adult: "21.990.000", child: "20.990.000", infant: "7.990.000" },
      { month: "Tháng 11", dates: "04, 11, 18, 25/11", adult: "21.990.000", child: "20.990.000", infant: "7.990.000" },
      { month: "Tháng 12", dates: "02, 09, 16, 23/12", adult: "21.990.000", child: "20.990.000", infant: "7.990.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ TẾ NAM – KHÚC PHỤ – NI SƠN THÁNH CẢNH – THÁI AN",
        meals: "Ăn nhẹ trên máy bay, Ăn trưa, Ăn tối",
        hotel: "Tai Shan Grand Hotel 4 sao hoặc tương đương",
        image: "https://images.unsplash.com/photo-1527684651001-731c474bbb5a?w=800&q=80",
        activities: [
          { desc: "22:00 Quý khách tập trung tại Tân Sơn Nhất làm thủ tục đáp chuyến bay SC8074 (01:30 – 07:20) đi Tế Nam." },
          { desc: "07:20 Đến Tế Nam, xe và HDV đón đoàn khởi hành đi Khúc Phụ – quê hương của Khổng Tử, chiếc nôi triết lý Nho giáo Á Đông.", highlight: true },
          { desc: "Tham quan Ni Sơn Thánh Cảnh: Quần thể linh thiêng nơi Khổng Tử sinh ra hơn 2.500 năm trước; tìm hiểu tinh thần tôn sư trọng đạo tại Bảy Mươi Hai Hiền Lang và 5 sảnh 'Nhân – Nghĩa – Lễ – Trí – Tín'.", highlight: true },
          { desc: "Tham quan Đại Học Đường và Tượng Khổng Tử uy nghiêm. Sau đó di chuyển về Thái An nhận phòng nghỉ ngơi." }
        ]
      },
      {
        day: 2,
        title: "THÁI AN – CHINH PHỤC NÚI THÁI SƠN (CÁP TREO 2 CHIỀU) – PHỐ THIÊN NHAI",
        meals: "Ăn sáng, Ăn trưa, Tối tự túc",
        hotel: "Tai Shan Grand Hotel 4 sao hoặc tương đương",
        image: "https://images.unsplash.com/photo-1527684651001-731c474bbb5a?w=800&q=80",
        activities: [
          { desc: "Chinh phục Núi Thái Sơn: Đông Nhạc Đại Tôn, ngọn núi linh thiêng bậc nhất trong Ngũ Nhạc Trung Hoa, Di sản văn hóa & thiên nhiên thế giới.", highlight: true },
          { desc: "Trải nghiệm Cáp treo hai chiều băng qua rừng thông xanh ngát, ngắm toàn cảnh núi non hùng vĩ ẩn hiện trong mây bảng lảng." },
          { desc: "Tham quan Cổng Nam Thiên – 'cửa ngõ lên trời' giao hòa giữa đất và trời, dạo Phố Thiên Nhai cổ kính trên đỉnh núi.", highlight: true },
          { desc: "Lên Đỉnh Ngọc Hoàng – điểm cao nhất Thái Sơn nơi đặt miếu thờ Trời, nơi các bậc đế vương thời xưa lập đàn tế lễ cầu phúc cho giang sơn." },
          { desc: "Trở về trung tâm Thái An, tự do khám phá phố ẩm thực Wanda Plaza thưởng thức đặc sản Sơn Đông." }
        ]
      },
      {
        day: 3,
        title: "THÁI AN – TẾ NAM – HỒ ĐẠI MINH – MINH THỦY CỔ THÀNH – SHOW ÁNH SÁNG DRONE",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        hotel: "Mingshui Ancient City Hotel hoặc tương đương tại Tế Nam",
        image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
        activities: [
          { desc: "Đoàn khởi hành về thành phố suối Tế Nam. Tham quan Hồ Đại Minh – viên ngọc xanh phản chiếu bóng liễu thướt tha gắn liền với truyền thuyết vua Càn Long và Hạ Vũ Hà trong phim Hoàn Châu Cách Cách.", highlight: true },
          { desc: "Tham quan Mặc Tuyền – dòng suối trong vắt thanh tịnh nổi tiếng của Tế Nam." },
          { desc: "Khám phá Minh Thủy Cổ Thành – khu phố cổ mang đậm nét văn hóa Sơn Đông, nơi nữ thi nhân Lý Thanh Chiếu từng say đắm miêu tả 'nửa nhân gian khói lửa, nửa mộng cảnh thi họa'.", highlight: true },
          { desc: "Thưởng thức màn trình diễn ánh sáng hàng trăm Drone hiện đại trên nền trời đêm và Show diễn nghệ thuật 'Tuyền Tú' tái hiện câu chuyện thành phố suối." }
        ]
      },
      {
        day: 4,
        title: "TẾ NAM – TRUY BẮC (HẢI ĐỚI LÂU) – DUY PHƯỜNG (BẢO TÀNG DIỀU)",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        hotel: "Holiday Inn Express Weifang 4 sao hoặc tương đương",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
        activities: [
          { desc: "Đoàn đến Truy Bác (Zibo) tham quan Hải Đới Lâu – được mệnh danh là thư viện đẹp nhất Trung Quốc tọa lạc giữa hồ Tề Thịnh thơ mộng.", highlight: true },
          { desc: "Dạo khu ẩm thực nổi tiếng Bát Đại Cục thưởng thức các món ăn dân dã đặc trưng của vùng đất Sơn Đông." },
          { desc: "Khởi hành đi Duy Phường – 'Thủ đô Diều của Thế giới'. Tham quan Bảo tàng Diều Duy Phường lớn nhất thế giới trưng bày hàng nghìn mẫu diều tinh xảo.", highlight: true },
          { desc: "Khám phá Làng văn hóa Dương Gia Bộ hơn 600 năm tuổi nổi tiếng với tranh Tết in mộc bản và nghệ thuật làm diều truyền thống." }
        ]
      },
      {
        day: 5,
        title: "DUY PHƯỜNG – THÀNH PHỐ BIỂN THANH ĐẢO – QUẢNG TRƯỜNG NGŨ TỨ – ĐẢO ĐẠI BẢO",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        hotel: "Crowne Plaza Qingdao Ocean Spring Resort hoặc tương đương",
        image: "https://images.unsplash.com/photo-1544986581-efac024faf62?w=800&q=80",
        activities: [
          { desc: "Đoàn khởi hành đi thành phố biển Thanh Đảo xinh đẹp." },
          { desc: "Tham quan Quảng trường Ngũ Tứ nổi bật với tác phẩm điêu khắc 'Ngọn gió Tháng Năm' và Trung tâm Thuyền Buồm Olympic Bắc Kinh 2008.", highlight: true },
          { desc: "Khám phá Khu phố văn hóa Đảo Đại Bảo – phố cổ mang hơi thở Thanh Đảo xưa pha trộn kiến trúc châu Âu, thưởng thức bữa tiệc trà chiều tại đây.", highlight: true },
          { desc: "Dạo Phố đi bộ Đài Đông sầm uất quy tụ ẩm thực, mua sắm và giải trí sôi động." }
        ]
      },
      {
        day: 6,
        title: "THANH ĐẢO – BẢO TÀNG BIA THANH ĐẢO – CẦU TRẠM ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, Ăn trưa, Ăn nhẹ trên máy bay",
        activities: [
          { desc: "Tham quan Cầu Trạm (Trạm Kiều Thanh Đảo) – điểm check-in tuyệt đẹp ngắm chim hải âu chao lượn trên mặt biển xanh." },
          { desc: "Dạo bãi biển Sa Tử Khẩu với những ngôi nhà đầy màu sắc rực rỡ đối diện biển khơi." },
          { desc: "Tham quan Bảo tàng Bia Thanh Đảo từ năm 1903 – bảo tàng bia nổi tiếng nhất châu Á với lịch sử hơn 120 năm và thưởng thức bia tươi trứ danh.", highlight: true },
          { desc: "Tự do mua sắm tại Outlet Thanh Đảo trước khi ra sân bay đáp chuyến bay SC4645 (20:10 – 00:10) về lại TP.HCM.", highlight: true }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi theo đoàn: 23kg ký gửi + 07kg xách tay của Shandong Airlines",
      "Khách sạn tiêu chuẩn 4 sao địa phương cao cấp (Mingshui Ancient City, Tai Shan Grand, Crowne Plaza...)",
      "Vé cáp treo 2 chiều chinh phục đỉnh thiêng Núi Thái Sơn",
      "Vé tham quan: Ni Sơn Thánh Cảnh, Minh Thủy Cổ Thành, Bảo tàng Diều, Bảo tàng Bia Thanh Đảo",
      "Thưởng thức 01 bữa trà chiều tại phố cổ Đảo Đại Bảo",
      "Vé xem màn trình diễn Drone ánh sáng và Show nghệ thuật Tuyền Tú",
      "Visa đoàn nhập cảnh Trung Quốc trọn gói (Hộ chiếu + file hình 4x6)",
      "Xe ô tô vận chuyển máy lạnh đời mới suốt tuyến",
      "Trưởng đoàn và HDV địa phương tận tâm",
      "Bảo hiểm du lịch Quốc tế suốt tuyến bồi thường theo quy định"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Chi phí cá nhân: giặt ủi, điện thoại, thức uống minibar...",
      "Phụ thu phòng đơn: 4.000.000 VNĐ / khách / tour",
      "Tips cho tài xế và hướng dẫn viên: 42 USD/khách/tour"
    ],
    visaRequirements: [
      "Bản scan Hộ chiếu còn thời hạn sử dụng trên 6 tháng",
      "File ảnh thẻ 4x6cm phông nền trắng tiêu chuẩn quốc tế",
      "Hồ sơ nộp trước ngày khởi hành ít nhất 15 ngày"
    ]
  },

  // ── 6. THÀNH ĐÔ – CỬU TRẠI CÂU – CÔNG VIÊN GẤU TRÚC – LẠC SƠN ĐẠI PHẬT 6N5D ──
  {
    id: "tour-cn-chengdu-jiuzhaigou-6n5d",
    code: "EVG-CN-TFU-JZH-6N5D",
    title: "DU LỊCH TRUNG QUỐC: THÀNH ĐÔ – CỬU TRẠI CÂU – CÔNG VIÊN GẤU TRÚC – LẠC SƠN ĐẠI PHẬT",
    itinerary: "Thành Đô - Cửu Trại Câu - Lạc Sơn",
    duration: "06 Ngày 05 Đêm",
    durationDays: 6,
    airline: "Sichuan Airlines",
    price: 18990000,
    priceFormatted: "18.990.000 VNĐ",
    highlights: [
      "Trải nghiệm ngồi tàu cao tốc hiện đại xuyên qua những đại ngàn hùng vĩ Thành Đô ⇄ Cửu Trại Câu",
      "Khám phá Thiên đường hạ giới Cửu Trại Câu: Hồ Thụ Chính, Thác Nhật Nhược Lan, Bãi Trân Châu, Hồ Ngũ Hoa, Hồ Trường Hải",
      "Tham quan Công Viên Gấu Trúc – ngôi nhà thiên đường của Quốc Bảo Trung Hoa",
      "Chiêm bái Lạc Sơn Đại Phật – Tượng Phật bằng đá cao nhất thế giới (bao gồm du thuyền ngắm Phật)",
      "Dạo phố cổ Ngõ Rộng Ngõ Hẹp giao thoa nét cổ kính nhà Thanh & Công viên Nhân Dân Thành Đô",
      "Check-in hai khu phức hợp mua sắm sầm uất bậc nhất Thành Đô: Phố Thái Cổ Lý & Xuân Hy Lộ",
      "Thưởng thức Yến tiệc đón khách kiểu Tạng truyền thống & Đại tiệc Lẩu Thành Đô cay nồng trứ danh"
    ],
    giftMeals: [
      "Vé máy bay khứ hồi Sichuan Airlines (23kg ký gửi + 05kg xách tay)",
      "Vé tàu cao tốc khứ hồi Thành Đô ⇄ Cửu Trại Câu êm ái hiện đại",
      "Vé vào cổng trọn gói KDL Thiên Đường Cửu Trại Câu kèm xe du lịch sinh thái công cộng",
      "Tặng vé du thuyền ngắm nhìn trọn vẹn Lạc Sơn Đại Phật trên sông Mân Giang",
      "Tặng Yến tiệc đón khách phong cách Tây Tạng & Bữa tối Lẩu Thành Đô đậm đà",
      "Khách sạn tiêu chuẩn 4 sao Trung Quốc tiện nghi suốt hành trình",
      "Visa đoàn nhập cảnh Trung Quốc và bảo hiểm du lịch quốc tế"
    ],
    country: "Trung Quốc",
    region: "Tour Trung Quốc",
    category: "nuoc-ngoai",
    cats: ["all", "nuoc-ngoai", "trung-quoc", "chau-a"],
    badge: "Thiên Đường Cửu Trại Câu",
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62?w=1000&q=85",
    departure: "Khởi hành hàng tuần (Tháng 8, 9, 10, 11, 12)",
    isFeatured: true,
    pdfFile: "THÀNH ĐÔ – CỬU TRẠI CÂU – CÔNG VIÊN GẤU TRÚC – LẠC SƠN ĐẠI PHẬT 6N5D.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1544986581-efac024faf62?w=1000&q=85",
      "https://images.unsplash.com/photo-1527684651001-731c474bbb5a?w=800&q=80",
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80"
    ],
    flightInfo: {
      airline: "Sichuan Airlines (3U)",
      outbound: "3U 3904 SGN – TFU 07:50 – 12:50 (Tân Sơn Nhất – Thiên Phủ Thành Đô)",
      returnFlight: "3U 3903 TFU – SGN 19:35 – 21:55 (Thiên Phủ Thành Đô – Tân Sơn Nhất)",
      baggage: "Hành lý ký gửi 23kg + 05kg hành lý xách tay"
    },
    singleRoomSurcharge: "4.500.000 VNĐ / khách / tour",
    pricingTable: [
      { month: "Tháng 08", dates: "07, 14, 21/08", adult: "18.990.000", child: "17.990.000", infant: "8.990.000" },
      { month: "Lễ 2/9", dates: "28/08", adult: "21.990.000", child: "20.990.000", infant: "10.990.000" },
      { month: "Tháng 09", dates: "11, 18/09", adult: "18.990.000", child: "17.990.000", infant: "8.990.000" },
      { month: "Tháng 10", dates: "09, 16, 23, 30/10", adult: "21.990.000", child: "20.990.000", infant: "10.990.000" },
      { month: "Tháng 11, 12", dates: "06, 13, 20, 27/11, 04, 11, 18, 25/12", adult: "18.990.000", child: "17.990.000", infant: "8.990.000" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH ✈ THÀNH ĐÔ – PHỐ NGÕ RỘNG NGÕ HẸP – CÔNG VIÊN NHÂN DÂN",
        meals: "Ăn nhẹ trên máy bay, Ăn tối",
        hotel: "Khách sạn 4 sao trung tâm Thành Đô",
        image: "https://images.unsplash.com/photo-1544986581-efac024faf62?w=800&q=80",
        activities: [
          { desc: "Quý khách tập trung tại Tân Sơn Nhất đón chuyến bay 3U3904 (07:50 – 12:50) của Sichuan Airlines đi Thành Đô." },
          { desc: "12:50 Đến sân bay Thiên Phủ Thành Đô, xe đón đoàn đi dạo Phố Ngõ Rộng Ngõ Hẹp – khu phố cổ kính giao thoa kiến trúc triều Thanh và hội tụ tinh hoa ẩm thực đường phố Tứ Xuyên.", highlight: true },
          { desc: "Tham quan Công Viên Nhân Dân Thành Đô – lá phổi xanh với không gian sinh hoạt cộng đồng và quán trà truyền thống đậm chất Tứ Xuyên." },
          { desc: "Dùng bữa tối tại nhà hàng và nhận phòng khách sạn 4 sao nghỉ ngơi." }
        ]
      },
      {
        day: 2,
        title: "THÀNH ĐÔ – CÔNG VIÊN GẤU TRÚC – TÀU CAO TỐC ĐI CỬU TRẠI CÂU",
        meals: "Ăn sáng, Ăn trưa, Ăn tối (Yến Tiệc Tạng)",
        hotel: "Khách sạn 4 sao tại Cửu Trại Câu",
        image: "https://images.unsplash.com/photo-1527684651001-731c474bbb5a?w=800&q=80",
        activities: [
          { desc: "Ăn sáng và trả phòng khách sạn. Xe đưa đoàn tham quan Công Viên Gấu Trúc – ngôi nhà thiên đường dành riêng để nuôi dưỡng và bảo tồn loài động vật quốc bảo đáng yêu của Trung Hoa.", highlight: true },
          { desc: "Dùng cơm trưa. Xe đưa đoàn ra ga Thành Đô, trải nghiệm Tàu Cao Tốc hiện đại xuyên qua những hẻm núi trập trùng đến với Cửu Trại Câu.", highlight: true },
          { desc: "Tối tham dự Yến Tiệc Đón Khách Kiểu Tạng Truyền Thống với những món ăn đậm chất cao nguyên và nhận phòng khách sạn nghỉ ngơi." }
        ]
      },
      {
        day: 3,
        title: "KHÁM PHÁ CỬU TRẠI CÂU – THIÊN ĐƯỜNG HẠ GIỚI THỨ 2",
        meals: "Ăn sáng, Ăn trưa tại KDL, Ăn tối",
        hotel: "Khách sạn 4 sao tại Cửu Trại Câu",
        image: "https://images.unsplash.com/photo-1544986581-efac024faf62?w=800&q=80",
        activities: [
          { desc: "Khám phá trọn ngày tại Khu phong cảnh Thiên Đường Cửu Trại Câu (bao gồm xe du lịch sinh thái công cộng) – chốn bồng lai tiên cảnh trần gian.", highlight: true },
          { desc: "Chiêm ngưỡng quần thể hình chữ Y kỳ vĩ: Hồ Thụ Chính, Thác Nhật Nhược Lan, Bãi Trân Châu tung bọt trắng xóa (bối cảnh phim Tây Du Ký 1986).", highlight: true },
          { desc: "Ngắm mặt nước xanh ngọc bích trong vắt nhìn thấu tận đáy tại Hồ Hổ, Hồ Ngũ Hoa, Hồ Song Long, Hồ Trường Hải tuyệt mỹ." },
          { desc: "Tối tự do thưởng thức show ca múa nhạc Phong Tình Khương – Tạng đặc sắc (chi phí tự túc)." }
        ]
      },
      {
        day: 4,
        title: "CỬU TRẠI CÂU – THỊ TRẤN XUYÊN CHỦ TỰ – TÀU CAO TỐC VỀ THÀNH ĐÔ",
        meals: "Ăn sáng, Ăn trưa, Ăn tối (Lẩu Thành Đô)",
        hotel: "Khách sạn 4 sao trung tâm Thành Đô",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
        activities: [
          { desc: "Ăn sáng, trả phòng khách sạn. Đoàn ghé thăm Thị trấn Xuyên Chủ Tự tìm hiểu văn hóa và phong tục tập quán của đồng bào Tây Tạng." },
          { desc: "Ra ga tàu đón chuyến tàu cao tốc hiện đại trở về lại Thủ phủ Thành Đô.", highlight: true },
          { desc: "Thưởng thức bữa tối Lẩu Thành Đô trứ danh với vị cay nồng thơm lừng của hoa tiêu Tứ Xuyên và nhận phòng khách sạn nghỉ ngơi." }
        ]
      },
      {
        day: 5,
        title: "THÀNH ĐÔ – LẠC SƠN ĐẠI PHẬT (DU THUYỀN) – HIỆU THUỐC ĐỒNG NHÂN ĐƯỜNG",
        meals: "Ăn sáng, Ăn trưa, Ăn tối",
        hotel: "Khách sạn 4 sao trung tâm Thành Đô",
        image: "https://images.unsplash.com/photo-1527684651001-731c474bbb5a?w=800&q=80",
        activities: [
          { desc: "Đoàn khởi hành đi Lạc Sơn tham quan: Lạc Sơn Đại Phật – Tượng Phật bằng đá cao nhất thế giới (cao 71m) được tạc thẳng vào vách núi Lăng Vân nơi hội tụ của 3 con sông Mân Giang, Đại Độ và Thanh Khê.", highlight: true },
          { desc: "Du thuyền trên sông ngắm nhìn toàn cảnh bức tượng Phật uy nghiêm sừng sững giữa thiên nhiên non nước.", highlight: true },
          { desc: "Trở về Thành Đô, ghé thăm Hiệu thuốc Đồng Nhân Đường trải nghiệm văn hóa y học cổ truyền Tứ Xuyên." },
          { desc: "Ăn tối và nghỉ đêm tại khách sạn Thành Đô." }
        ]
      },
      {
        day: 6,
        title: "THÀNH ĐÔ – PHỐ THÁI CỔ LÝ & XUÂN HY LỘ ✈ TP. HỒ CHÍ MINH",
        meals: "Ăn sáng, Ăn trưa, Ăn nhẹ trên máy bay",
        activities: [
          { desc: "Ăn sáng và trả phòng khách sạn. Tham quan hai khu phố thương mại sầm uất bậc nhất Thành Đô: Thái Cổ Lý và Xuân Hy Lộ với hơn 700 cửa hàng và thiên đường ẩm thực đường phố.", highlight: true },
          { desc: "Ăn trưa tại nhà hàng. Xe tiễn đoàn ra sân bay Thiên Phủ Thành Đô đáp chuyến bay 3U3903 (19:35 – 21:55) về lại TP.HCM.", highlight: true },
          { desc: "21:55 Đến sân bay Tân Sơn Nhất, hoàn tất thủ tục nhập cảnh. Kết thúc hành trình Cửu Trại Câu – Lạc Sơn Đại Phật kỳ vĩ!" }
        ]
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi theo đoàn của Sichuan Airlines (23kg ký gửi + 05kg xách tay)",
      "Vé tàu cao tốc khứ hồi chặng Thành Đô ⇄ Cửu Trại Câu",
      "Khách sạn tiêu chuẩn 4 sao Trung Quốc tiện nghi (2 khách/phòng)",
      "Vé vào cổng trọn gói KDL Cửu Trại Câu kèm xe du lịch sinh thái",
      "Vé du thuyền chiêm bái Lạc Sơn Đại Phật hùng vĩ",
      "Các bữa ăn theo chương trình gồm tiệc Lẩu Thành Đô và Yến tiệc Tạng",
      "Visa đoàn nhập cảnh Trung Quốc thuận tiện",
      "Xe máy lạnh vận chuyển suốt hành trình",
      "Trưởng đoàn Việt Nam và HDV địa phương tận tình",
      "Bảo hiểm du lịch Quốc tế suốt tuyến"
    ],
    exclusions: [
      "Hộ chiếu còn hạn trên 6 tháng tính từ ngày kết thúc tour",
      "Chi phí cá nhân: giặt ủi, nước uống ngoài chương trình, hành lý quá cước",
      "Phụ thu phòng đơn: 4.500.000 VNĐ / khách",
      "Tiền tip cho tài xế và hướng dẫn viên địa phương: 30 USD/khách/tour"
    ],
    visaRequirements: [
      "Hộ chiếu gốc còn hạn trên 6 tháng tính từ ngày về",
      "02 hình 4x6cm phông nền trắng tiêu chuẩn quốc tế",
      "Thủ tục visa đoàn do Én Việt Group hỗ trợ trọn gói"
    ]
  }
];

// Unified dataset structure
export const TOUR_DATASET = {
  Tour_Trong_Nuoc: [] as TourItem[],
  Tour_Ngoai_Nuoc: [...TOUR_CHAU_A_DATASET, ...TOUR_TRUNG_QUOC_DATASET, ...TOUR_HAN_QUOC_DATASET, ...TOUR_DONG_NAM_A_DATASET, ...TOUR_CHAU_AU_DATASET, ...TOUR_CHAU_MY_DATASET],
  Tour_Trung_Quoc: [...TOUR_TRUNG_QUOC_DATASET, TOUR_DONG_NAM_A_DATASET.find(t => t.id === 'tour-cn-pek-sha')!].filter(Boolean),
  Tour_Han_Quoc: TOUR_HAN_QUOC_DATASET,
  Tour_Chau_A: [...TOUR_CHAU_A_DATASET, ...TOUR_TRUNG_QUOC_DATASET, ...TOUR_HAN_QUOC_DATASET, TOUR_DONG_NAM_A_DATASET.find(t => t.id === 'tour-cn-pek-sha')!].filter(Boolean),
  Tour_Dong_Nam_A: TOUR_DONG_NAM_A_DATASET,
  Tour_Chau_Au: TOUR_CHAU_AU_DATASET,
  Tour_Chau_My: TOUR_CHAU_MY_DATASET
};

// ALL_TOURS contains strictly the official verified tours from user-provided PDF files
export const ALL_TOURS: TourItem[] = [...TOUR_CHAU_A_DATASET, ...TOUR_TRUNG_QUOC_DATASET, ...TOUR_HAN_QUOC_DATASET, ...TOUR_DONG_NAM_A_DATASET, ...TOUR_CHAU_AU_DATASET, ...TOUR_CHAU_MY_DATASET];

// Filter definitions for subpages
export const COUNTRIES = [
  "Tất cả quốc gia",
  "Trung Quốc (Thượng Hải - Nam Kinh - Ô Trấn - Hàng Châu)",
  "Trung Quốc (Thành Đô - Cửu Trại Câu - Lạc Sơn Đại Phật)",
  "Trung Quốc (Tế Nam - Khúc Phụ - Thái Sơn - Thanh Đảo)",
  "Trung Quốc (Thượng Hải - Vô Tích - Tô Châu - Hàng Châu)",
  "Hong Kong (Cathay Pacific 5★ - Disneyland)",
  "Hàn Quốc (Seoul - Đảo Nami - Everland)",
  "Hàn Quốc (Busan - Daegu - Seoul)",
  "Thái Lan (Bangkok - Pattaya)",
  "Thái Lan (Đảo Phuket - Phi Phi)",
  "Campuchia (Siem Reap - Phnom Penh)",
  "Philippines (Đảo Cebu - Oslob - Moalboal)",
  "Indonesia (Thiên đường Đảo Bali)",
  "Lào (Viêng Chăn - Luang Prabang - Văng Viêng)",
  "Malaysia - Singapore",
  "Singapore",
  "Trung Quốc (Bắc Kinh - Thượng Hải - Hàng Châu)",
  "Đài Loan",
  "Nhật Bản",
  "Dubai - UAE",
  "Bhutan",
  "Thổ Nhĩ Kỳ",
  "Tây Âu (Pháp - Thụy Sĩ - Ý - Vatican)",
  "Đông Âu (Đức - Áo - Séc - Hungary)",
  "Nam Âu (Tây Ban Nha - Bồ Đào Nha - Maroc)",
  "Hoa Kỳ (Mỹ)"
];

export const PRICE_RANGES = [
  { id: "all", label: "Tất cả mức giá", en: "All prices", min: 0, max: Infinity },
  { id: "under-10m", label: "Dưới 10 triệu", en: "Under 10M", min: 0, max: 10000000 },
  { id: "10m-20m", label: "10 – 20 triệu", en: "10M – 20M", min: 10000000, max: 20000000 },
  { id: "20m-50m", label: "20 – 50 triệu", en: "20M – 50M", min: 20000000, max: 50000000 },
  { id: "50m-80m", label: "50 – 80 triệu", en: "50M – 80M", min: 50000000, max: 80000000 },
  { id: "over-80m", label: "Trên 80 triệu", en: "Over 80M", min: 80000000, max: Infinity }
];

export const DURATION_FILTERS = [
  { id: "all", label: "Tất cả thời lượng", en: "All durations", minDays: 0, maxDays: Infinity },
  { id: "short", label: "Ngắn ngày (1 – 5 ngày)", en: "Short (1-5 days)", minDays: 1, maxDays: 5 },
  { id: "medium", label: "Trung bình (6 – 8 ngày)", en: "Medium (6-8 days)", minDays: 6, maxDays: 8 },
  { id: "long", label: "Dài ngày (từ 9 ngày trở lên)", en: "Long (9+ days)", minDays: 9, maxDays: Infinity }
];
