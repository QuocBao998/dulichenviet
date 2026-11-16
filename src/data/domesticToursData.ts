import type { TourItem } from "./toursData";

// ─────────────────────────────────────────────────────────────────────────────
// DANH SÁCH 9 TOUR DU LỊCH TRONG NƯỚC CHÍNH THỨC TỪ FILE PDF ÉN VIỆT GROUP
// ─────────────────────────────────────────────────────────────────────────────

export const TOUR_TRONG_NUOC_DATASET: TourItem[] = [
  // ── 1. TOUR MIỀN BẮC 5N4Đ ──
  {
    id: "tour-vn-hanoi-sapa-5n4d",
    code: "EV-HN-SAPA-5N4D",
    title: "DU LỊCH MIỀN BẮC 5N4Đ: HÀ NỘI – TRÀNG AN – BÁI ĐÍNH – HẠ LONG – YÊN TỬ – SAPA",
    itinerary: "Hà Nội - Tràng An - Bái Đính - Hạ Long - Yên Tử - Sapa",
    duration: "05 Ngày 04 Đêm",
    durationDays: 5,
    airline: "Bay Khứ Hồi & Xe Du Lịch",
    price: 6890000,
    priceFormatted: "6.890.000 VNĐ",
    priceNote: "Chưa bao gồm vé máy bay",
    highlights: [
      "Khám phá Di sản Tràng An, Vịnh Hạ Long & Chinh phục đỉnh Fansipan 3.143m",
      "Viếng Chùa Bái Đính, KDL Yên Tử & Thưởng thức đặc sản dê núi, thắng cố Tây Bắc"
    ],
    giftMeals: [
      "Khách sạn tiêu chuẩn 3 sao trung tâm tại Hà Nội, Hạ Long & Sapa",
      "Thưởng thức đặc sản Dê núi đá Ninh Bình & Ẩm thực Tây Bắc",
      "Bao gồm tàu tham quan Vịnh Hạ Long tuyến Thiên Cung - Đầu Gỗ",
      "Bao gồm thuyền thăm Quần thể Danh thắng Tràng An",
      "Bao gồm xe điện khứ hồi lên Chùa Bái Đính & KDL Yên Tử",
      "Bảo hiểm du lịch mức 30.000.000 VNĐ/trường hợp & Nón du lịch Én Việt"
    ],
    country: "Miền Bắc",
    region: "Tour Miền Bắc",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-bac", "viet-nam"],
    badge: "Bay Khứ Hồi • KS 3 Sao",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1000&q=85",
    departure: "Thứ 5 hàng tuần",
    isFeatured: true,
    pdfFile: "HÀ NỘI - TRÀNG AN - BÁI ĐÍNH- HẠ LONG – KDL YÊN TỬ - SAPA EV - SB.pdf",
    pdfUrl: "/assets/aistudio/HA__NO__I_-_TRA_NG_AN_-_BA_I__I_NH-_HA__LONG___KDL_YE_N_TU___-_SAPA_EV_-_SB_2e9872b3.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=1000&q=85",
      "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1000&q=85",
      "https://images.unsplash.com/photo-1770149682516-4294edca7bca?w=1000&q=85",
      "https://images.unsplash.com/photo-1694083151781-946334842033?w=1000&q=85"
    ],
    singleRoomSurcharge: "1.200.000 VNĐ / khách",
    pricingTable: [
      { month: "Khởi hành Thứ 5 hàng tuần", dates: "Trọn gói Land Tour (chưa gồm VMB)", adult: "6.890.000", child: "75% giá tour (6-10t)", infant: "Miễn phí (<6t)" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP.HCM – ĐÓN KHÁCH HÀ NỘI – CHÙA TRẤN QUỐC – VĂN MIẾU",
        meals: "Ăn trưa, chiều",
        hotel: "Khách sạn 3 sao Hà Nội (Thăng Long Espana / First Eden...)",
        image: "https://images.unsplash.com/photo-1598984128948-0d3421021909?w=800&q=80",
        activities: [
          { desc: "Nhân viên đón Quý khách tại sân bay Tân Sơn Nhất làm thủ tục bay đi Hà Nội (chuyến 06h00 - 07h10). Xe & HDV đón đoàn tại Nội Bài, về khách sạn nhận phòng, ăn trưa." },
          { desc: "Chiều tham quan Chùa Trấn Quốc – ngôi chùa cổ kính 1.500 năm tuổi bên Hồ Tây; Đền Ngọc Sơn, Cầu Thê Húc, Hồ Hoàn Kiếm.", highlight: true },
          { desc: "Tham quan Văn Miếu - Quốc Tử Giám với 82 tấm bia Tiến sĩ. Tối tự do dạo Phố Cổ Hà Nội." }
        ]
      },
      {
        day: 2,
        title: "HÀ NỘI – CHÙA BÁI ĐÍNH – TRÀNG AN – HẠ LONG",
        meals: "Ăn sáng, trưa (Dê núi đá), chiều",
        hotel: "Khách sạn 3 sao Hạ Long (Seastar / Newyork...)",
        image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi Ninh Bình, lễ Phật tại Chùa Bái Đính (bao gồm xe điện) – ngôi chùa lớn nhất Việt Nam với 500 pho tượng La Hán và tượng Phật đồng cao 10m nặng 100 tấn.", highlight: true },
          { desc: "Ăn trưa đặc sản dê núi đá. Chiều lên đò thăm Quần thể Danh thắng Tràng An – Di sản Thế giới UNESCO, xuôi dòng Sào Khê thăm Hang Sáng, Hang Tối, Hang Nấu Rượu.", highlight: true },
          { desc: "15h00 khởi hành đi Hạ Long qua đồng bằng Bắc Bộ. Tối tự do dạo Chợ Đêm Hạ Long và ngắm cầu Bãi Cháy." }
        ]
      },
      {
        day: 3,
        title: "VỊNH HẠ LONG – KDL YÊN TỬ – HÀ NỘI",
        meals: "Ăn sáng, trưa, chiều",
        hotel: "Khách sạn 3 sao Hà Nội",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
        activities: [
          { desc: "Lên tàu tham quan Vịnh Hạ Long – Di sản thiên nhiên thế giới: Động Thiên Cung, hang Đầu Gỗ, hòn Đỉnh Hương, hòn Chó Đá, hòn Gà Chọi.", highlight: true },
          { desc: "Chiều đi Khu danh thắng đất Phật Yên Tử – đất tổ Thiền Phái Trúc Lâm, tham quan Vườn Tháp Tổ, Chùa Hoa Yên (cáp treo tự túc)." },
          { desc: "16h00 về lại Hà Nội, ghé Hải Dương thưởng thức đặc sản bánh Đậu Xanh, bánh cốm." }
        ]
      },
      {
        day: 4,
        title: "HÀ NỘI – SAPA – CHINH PHỤC ĐỈNH FANSIPAN 3.143M",
        meals: "Ăn sáng, trưa, chiều",
        hotel: "Khách sạn 3 sao Sapa (Mây Hồ / Luxury / Delta...)",
        image: "https://images.unsplash.com/photo-1694083151781-946334842033?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi Sapa theo cao tốc Nội Bài – Lào Cai dài 245km ngắm cung đường Tây Bắc hùng vĩ." },
          { desc: "Chiều tham quan KDL Fansipan bằng cáp treo 3 dây hiện đại, ngắm thung lũng Mường Hoa, viếng chùa Bảo An và chinh phục Nóc nhà Đông Dương ở độ cao 3.143m (cáp treo tự túc).", highlight: true },
          { desc: "Tối tự do dạo Sapa thưởng thức Thắng Cố, cơm lam, lợn cắp nách, đồ nướng." }
        ]
      },
      {
        day: 5,
        title: "SAPA – BẢN CÁT CÁT – LÀO CAI – CỬA KHẨU HÀ KHẨU – SÂN BAY NỘI BÀI",
        meals: "Ăn sáng, trưa, chiều",
        activities: [
          { desc: "Đi bộ tham quan Bản Cát Cát của người H'Mông, thăm trạm thủy điện, thác nước Cát Cát và nét văn hóa dệt vải, chạm trổ bạc truyền thống.", highlight: true },
          { desc: "Về Lào Cai ăn trưa, mua sắm tại chợ Cốc Lếu và chụp hình lưu niệm tại Cửa khẩu Hà Khẩu." },
          { desc: "Chiều về Hà Nội ăn tối, xe tiễn ra sân bay Nội Bài đáp chuyến bay 21h00 về TP.HCM." }
        ]
      }
    ],
    inclusions: [
      "Xe vận chuyển máy lạnh đời mới, hiện đại phục vụ suốt tuyến",
      "Tàu tham quan Vịnh Hạ Long tuyến Thiên Cung - Đầu Gỗ & thuyền thăm KDL Tràng An",
      "Xe điện khứ hồi lên Chùa Bái Đính & KDL Yên Tử",
      "Vé tham quan KDL Cát Cát & vé vào cửa 1 lượt các điểm theo chương trình",
      "Khách sạn 3 sao tiêu chuẩn (2 khách/phòng, lẻ ngủ 3)",
      "Các bữa sáng tại khách sạn + bữa chính đặc sản địa phương 150.000đ/suất",
      "Hướng dẫn viên chuyên nghiệp, nước suối, khăn lạnh, nón du lịch, VAT & Bảo hiểm 30.000.000 VNĐ"
    ],
    exclusions: [
      "Vé máy bay khứ hồi TP.HCM – Hà Nội – TP.HCM",
      "Vé cáp treo Yên Tử (tham khảo 350.000đ) & cáp treo Fansipan (tham khảo 850.000đ)",
      "Phụ thu phòng đơn: 1.200.000 VNĐ; Phụ thu khách nước ngoài: 400.000 VNĐ",
      "TIP cho HDV, tài xế và chi phí cá nhân ngoài chương trình"
    ]
  },

  // ── 2. TOUR ĐÀ LẠT 3N3Đ ──
  {
    id: "tour-vn-dalat-lhct-3n3d",
    code: "EV-DL-LHCT-3N3D",
    title: "DU LỊCH ĐÀ LẠT 3N3Đ: LẠC HƯ CỔ TRẤN – THỊ TRẤN IYASHI – VƯỜN CHÂU ÂU",
    itinerary: "TP.HCM - Vườn Châu Âu - Thị Trấn Iyashi - Lạc Hư Cổ Trấn - Fresh Garden - Chùa Linh Ẩn",
    duration: "03 Ngày 03 Đêm",
    durationDays: 3,
    airline: "Xe Limousine / Ghế Ngồi",
    price: 2490000,
    priceFormatted: "2.490.000 VNĐ",
    priceNote: "Giá từ 2.490k - 3.590k tùy loại xe & KS 2-5 sao",
    highlights: [
      "Check-in Vườn Châu Âu (Cầu Đất), Thị trấn Iyashi & Lạc Hư Cổ Trấn",
      "Tặng Buffet rau không giới hạn, Cơm niêu & Đặc sản Bảo Lộc"
    ],
    giftMeals: [
      "01 bữa Buffet rau Đà Lạt không giới hạn (150.000đ/suất)",
      "01 bữa Cơm Niêu phố núi & 01 bữa Cơm Lam đặc sản",
      "01 bữa sáng Bún Bò Bốc Khói Thố Đá",
      "Bao gồm vé cổng Vườn Châu Âu, Thị Trấn Iyashi, Fresh Garden & Lạc Hư Cổ Trấn",
      "Bảo hiểm du lịch lên đến 50.000.000 VNĐ/người/trường hợp"
    ],
    country: "Đà Lạt",
    region: "Tour Miền Trung",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-trung", "mien-nam", "da-lat", "viet-nam"],
    badge: "Xe Limousine / Ghế Ngồi",
    image: "https://images.unsplash.com/photo-1643799297057-374040b7db1b?w=1000&q=85",
    departure: "Tối Thứ 5 hàng tuần",
    isFeatured: true,
    pdfFile: "ĐÀ LẠT – LẠC HƯ CỔ TRẤN EV - HDT.pdf",
    pdfUrl: "/assets/aistudio/_A__LA_T___LA_C_HU__CO___TRA__N_EV_-_HDT_ab682049.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1643799297057-374040b7db1b?w=1000&q=85",
      "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=1000&q=85",
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1000&q=85"
    ],
    singleRoomSurcharge: "400.000 VNĐ/2 đêm (KS 2*) • 600.000 VNĐ/1 đêm (KS 5*)",
    pricingTable: [
      { month: "Xe Ghế Ngồi", dates: "Khách sạn 2 Sao (Thứ 5 hàng tuần)", adult: "2.490.000", child: "80% giá (5-9t)", infant: "Miễn phí (<5t)" },
      { month: "Xe Ghế Ngồi", dates: "Khách sạn 5 Sao (Thứ 5 hàng tuần)", adult: "2.990.000", child: "80% giá (5-9t)", infant: "Miễn phí (<5t)" },
      { month: "Xe Limousine 24-28C", dates: "Khách sạn 2 Sao (Thứ 5 hàng tuần)", adult: "2.990.000", child: "80% giá (5-9t)", infant: "Miễn phí (<5t)" },
      { month: "Xe Limousine 24-28C", dates: "Khách sạn 5 Sao (Thứ 5 hàng tuần)", adult: "3.590.000", child: "80% giá (5-9t)", infant: "Miễn phí (<5t)" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "TP.HCM (ĐÊM) – VƯỜN CHÂU ÂU – THỊ TRẤN IYASHI – LẠC HƯ CỔ TRẤN",
        meals: "Ăn sáng, trưa (Cơm Niêu), tối (Buffet Rau)",
        hotel: "Khách sạn 2 Sao (An Phú...) hoặc 5 Sao Đà Lạt",
        image: "https://images.unsplash.com/photo-1643799297057-374040b7db1b?w=800&q=80",
        activities: [
          { desc: "20h45 tối Thứ 5 khởi hành từ TP.HCM đi Đà Lạt. 06h00 sáng đến Đà Lạt dùng điểm tâm." },
          { desc: "08h00 tham quan Euro Garden – Vườn Châu Âu (Cầu Đất) với Cối xay gió Hà Lan, Quán cà phê toa tàu đỏ Thụy Sĩ & Nông trại trà 100 năm tuổi; ghé Vườn hồng treo gió.", highlight: true },
          { desc: "11h00 check-in Thị trấn Iyashi (Quê Garden) phong cách Nhật Bản, tuyết rơi lãng mạn & không gian Ghibli. Dùng cơm Niêu trưa & nhận phòng.", highlight: true },
          { desc: "15h30 khám phá Lạc Hư Cổ Trấn – 'Phượng Hoàng Cổ Trấn' giữa đại ngàn. Tối thưởng thức Buffet rau không giới hạn và tự do dạo Hồ Xuân Hương." }
        ]
      },
      {
        day: 2,
        title: "NHÀ THỜ DOMAIN DE MARIE – FRESH GARDEN – MIỀN DU MỤC",
        meals: "Ăn sáng, trưa",
        hotel: "Khách sạn tại Đà Lạt",
        activities: [
          { desc: "08h00 tham quan Nhà Thờ Domain De Marie kiến trúc cổ điển Châu Âu." },
          { desc: "08h30 vui chơi tại Tổ hợp Vườn Hoa Thú Fresh Garden: Đồi hoa, Fresh Zoo 80 loài thú, Động băng thiên thần, Cầu kính & Cổng trời.", highlight: true },
          { desc: "Chiều tự do lựa chọn tham quan KDL Miền Du Mục (tự túc vé) hoặc check-in Quảng trường Lâm Viên. Tối tự túc khám phá ẩm thực Đà Lạt về đêm." }
        ]
      },
      {
        day: 3,
        title: "ĐÀ LẠT – CHÙA LINH ẨN – TRẠM CỐ ĐÔ HUẾ – BẢO LỘC – TP.HCM",
        meals: "Ăn sáng (Bún bò thố đá), trưa (Đặc sản Bảo Lộc)",
        activities: [
          { desc: "Trả phòng, thưởng thức Bún Bò Thố Đá và ghé Chợ Đà Lạt mua quà." },
          { desc: "09h30 viếng Chùa Linh Ẩn chiêm bái tượng Quan Âm cao hơn 70m nhìn ra Thác Voi hùng vĩ.", highlight: true },
          { desc: "10h30 ghé Trạm dừng Cố Đô Huế & dùng cơm trưa Đặc sản Bảo Lộc. 20h00 về đến TP.HCM." }
        ]
      }
    ],
    inclusions: [
      "Xe Limousine 24-28 chỗ hoặc xe ghế ngồi đời mới máy lạnh khứ hồi TP.HCM – Đà Lạt",
      "Lưu trú 2 đêm khách sạn 2 sao hoặc 5 sao theo gói lựa chọn",
      "3 bữa sáng (gồm 1 bữa Bún bò bốc khói) + 4 bữa chính (Buffet rau, Cơm niêu, Cơm lam)",
      "Vé vào cổng: Vườn Châu Âu, Thị trấn Iyashi, Fresh Garden, Lạc Hư Cổ Trấn",
      "Hướng dẫn viên suốt tuyến, nước suối, khăn lạnh, nón du lịch, VAT 8% & Bảo hiểm 50.000.000đ"
    ],
    exclusions: [
      "Vé tham quan KDL Miền Du Mục (100.000đ) và bữa tối ngày 2 tự túc",
      "Phụ thu phòng đơn / phòng 2 khách & phụ thu dịp Lễ Tết (31/12/2026 - 1/1/2027)",
      "Chi phí cá nhân, nước uống tại các quán cafe"
    ]
  },

  // ── 3. TOUR ĐÀ NẴNG - HỘI AN - HUẾ 4N3Đ ──
  {
    id: "tour-vn-danang-hue-4n3d",
    code: "EVG-DNHUE-4N3D",
    title: "DU LỊCH MIỀN TRUNG 4N3Đ: ĐÀ NẴNG – SƠN TRÀ – PHỐ CỔ HỘI AN – BÀ NÀ – CỐ ĐÔ HUẾ",
    itinerary: "Đà Nẵng - Sơn Trà - Phố cổ Hội An - Bà Nà Hills - Cố Đô Huế",
    duration: "04 Ngày 03 Đêm",
    durationDays: 4,
    airline: "Ô tô Du Lịch (Đón tại ĐN)",
    price: 4290000,
    priceFormatted: "4.290.000 VNĐ",
    priceNote: "Chưa bao gồm vé máy bay",
    highlights: [
      "Khám phá Phố cổ Hội An, Bà Nà Hills (Cầu Vàng) & Đại Nội Kinh Thành Huế",
      "Thưởng thức Ca Huế trên sông Hương & Đặc sản bánh tráng thịt heo, Mỳ Quảng"
    ],
    giftMeals: [
      "Khách sạn 3 sao Đà Nẵng (Grand Jeep / Sunview / Palazzo) & 4 sao Huế (Mondial / Parkview)",
      "Thưởng thức đặc sản Đà Nẵng: Bánh tráng thịt heo 2 đầu da & Mỳ Quảng",
      "Thưởng thức đặc sản xứ Huế: Bánh bèo, lọc, nậm, khoái",
      "Bao gồm vé nghe Ca Huế trên thuyền Rồng sông Hương",
      "Bảo hiểm du lịch 30.000.000 VNĐ/vụ & 02 chai nước suối/ngày"
    ],
    country: "Miền Trung",
    region: "Tour Miền Trung",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-trung", "da-nang", "hoi-an", "hue", "viet-nam"],
    badge: "KS 3 Sao ĐN & 4 Sao Huế",
    image: "https://images.unsplash.com/photo-1603852452378-a4e8d84324a2?w=1000&q=85",
    departure: "Thứ 4 & Thứ 7 hàng tuần",
    isFeatured: true,
    pdfFile: "TOUR ĐÀ NẴNG - HUẾ 4N3D EVG - SB.pdf",
    pdfUrl: "/assets/aistudio/TOUR__A__NA__NG_-_HUE___4N3D_EVG_-_SB_62579f9a.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1603852452378-a4e8d84324a2?w=1000&q=85",
      "https://images.unsplash.com/photo-1787057438775-c278a5f17e0c?w=1000&q=85",
      "https://images.unsplash.com/photo-1752154970559-20c5b80b7db2?w=1000&q=85",
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1000&q=85"
    ],
    singleRoomSurcharge: "600.000 VNĐ/khách VN • 900.000 VNĐ/khách QT",
    pricingTable: [
      { month: "Thứ 4 & Thứ 7 hàng tuần", dates: "KS 3★ Đà Nẵng & 4★ Huế (Chưa gồm VMB)", adult: "4.290.000", child: "Theo quy định", infant: "Liên hệ" }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "ĐÓN KHÁCH ĐÀ NẴNG – BÁN ĐẢO SƠN TRÀ – BIỂN MỸ KHÊ",
        meals: "Ăn trưa (Bánh tráng thịt heo & Mỳ Quảng), tối",
        hotel: "Khách sạn 3 sao Đà Nẵng",
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
        activities: [
          { desc: "Đón khách tại sân bay/ga Đà Nẵng, thưởng thức đặc sản Bánh tráng thịt heo 2 đầu da & Mỳ Quảng, nhận phòng nghỉ ngơi." },
          { desc: "Chiều tham quan Bán Đảo Sơn Trà, viếng Chùa Linh Ứng với tượng Phật Bà đứng cao 67m, Công viên Kỳ Quan Thế Giới và tắm biển Mỹ Khê.", highlight: true },
          { desc: "Tối ăn nhà hàng, tự do thưởng ngoạn du thuyền sông Hàn và xem Cầu Rồng phun lửa/nước cuối tuần." }
        ]
      },
      {
        day: 2,
        title: "CÔNG VIÊN APEC – CẦU TÌNH YÊU – NGŨ HÀNH SƠN – PHỐ CỔ HỘI AN",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3 sao Đà Nẵng",
        image: "https://images.unsplash.com/photo-1752154970559-20c5b80b7db2?w=800&q=80",
        activities: [
          { desc: "Check-in Công viên Vườn Tượng APEC, Cầu Rồng, Cầu Tình Yêu, tượng Cá Chép Hóa Long, Chùa Quan Thế Âm & Làng Đá Ngũ Hành Sơn." },
          { desc: "Chiều bách bộ Phố Cổ Hội An: Chùa Cầu Nhật Bản, Nhà Cổ trăm năm tuổi, Hội Quán Phước Kiến và ngắm phố đèn lồng lung linh.", highlight: true }
        ]
      },
      {
        day: 3,
        title: "BÀ NÀ HILLS (CẦU VÀNG) – HẦM HẢI VÂN – CỐ ĐÔ HUẾ – CA HUẾ SÔNG HƯƠNG",
        meals: "Ăn sáng, trưa Option, tối (Đặc sản Huế)",
        hotel: "Khách sạn 4 sao Huế",
        image: "https://images.unsplash.com/photo-1603852452378-a4e8d84324a2?w=800&q=80",
        activities: [
          { desc: "Khởi hành đi Sunworld Ba Na Hills (Option tự túc vé cáp treo/buffet): check-in Cầu Vàng, Làng Pháp, Thác Thần Mặt Trời, Fantasy Park, Chùa Linh Ứng.", highlight: true },
          { desc: "Chiều xuyên hầm Hải Vân, dừng chân vịnh Lăng Cô chụp ảnh, đến Cố Đô Huế nhận phòng khách sạn 4 sao." },
          { desc: "Tối thưởng thức đặc sản xứ Huế & xuống thuyền Rồng nghe Ca Huế trên sông Hương, ngắm Cầu Tràng Tiền.", highlight: true }
        ]
      },
      {
        day: 4,
        title: "ĐẠI NỘI HUẾ – ĐIỆN KIẾN TRUNG – CHÙA THIÊN MỤ – LÀNG HƯƠNG THỦY XUÂN",
        meals: "Ăn sáng, trưa",
        activities: [
          { desc: "Tham quan Đại Nội Hoàng Thành Huế: Ngọ Môn, Điện Thái Hòa, Cung Diên Thọ, Cửu Đỉnh và Điện Kiến Trung vừa phục hồi rực rỡ.", highlight: true },
          { desc: "Viếng Chùa Thiên Mụ cổ kính. Chiều tham quan Làng Hương Thủy Xuân hơn 700 năm tuổi rực rỡ sắc màu, tiễn khách ra sân bay." }
        ]
      }
    ],
    inclusions: [
      "Xe du lịch đời mới đưa đón theo chương trình tại Đà Nẵng – Hội An – Huế",
      "Khách sạn 3 sao Đà Nẵng & 4 sao Huế (2-3 khách/phòng)",
      "03 bữa sáng tại khách sạn + 06 bữa chính tiêu chuẩn 130.000 VNĐ/suất",
      "Vé các điểm tham quan theo lịch trình & Vé nghe Ca Huế trên sông Hương",
      "Hướng dẫn viên tiếng Việt nhiệt tình, 02 chai nước suối/ngày & Bảo hiểm 30.000.000 VNĐ/vụ"
    ],
    exclusions: [
      "Vé máy bay khứ hồi, vé tàu, xe đến Đà Nẵng",
      "Combo vé cáp treo & Buffet Bà Nà Hills (theo giá Sun Group), vé du thuyền sông Hàn",
      "Phụ thu 4 sao Đà Nẵng: 500.000đ/khách; Phụ thu khách quốc tế: 500.000đ/khách",
      "Tip cho HDV, tài xế và chi phí cá nhân ngoài chương trình"
    ]
  },

  // ── 4. TOUR CẦN THƠ - CHỢ NỔI - CỒN SƠN 1 NGÀY ──
  {
    id: "tour-vn-cantho-conson-1n",
    code: "EV-TNB-CTCS-1N",
    title: "TOUR MIỀN TÂY 1 NGÀY: CẦN THƠ – CHỢ NỔI CÁI RĂNG – KDL CỒN SƠN",
    itinerary: "Bến Ninh Kiều - Chợ Nổi Cái Răng - Bè Cá Sông Hậu - KDL Cồn Sơn",
    duration: "01 Ngày",
    durationDays: 1,
    airline: "Ô tô + Tàu + Đò",
    price: null,
    priceFormatted: "Liên hệ",
    priceNote: "Liên hệ 0983.056.056 để nhận báo giá tốt nhất",
    highlights: [
      "Trải nghiệm Chợ nổi Cái Răng sáng sớm & Xem biểu diễn Cá Lóc Bay độc đáo",
      "Massage cá Koi, thưởng thức chả cá thác lác & Hái trái cây miệt vườn theo mùa"
    ],
    giftMeals: [
      "01 bữa ăn trưa đặc sản sông nước Hậu Giang (160.000đ/suất: Gà hấp hành, lẩu mắm, cá kho tộ)",
      "Thưởng thức chả cá Thác Lác Cườm & trái cây tươi tại vườn Cồn Sơn",
      "Bảo hiểm du lịch mức đền bù 30.000.000đ/vụ"
    ],
    country: "Cần Thơ",
    region: "Tour Miền Nam",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-nam", "mien-tay", "can-tho", "viet-nam"],
    badge: "Khởi Hành Hàng Ngày",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1000&q=85",
    departure: "Khởi hành hàng ngày",
    pdfFile: "EV - TNB MIỀN TÂY 1 NGÀY CHỢ NỔI - CỒN SƠN.pdf",
    pdfUrl: "/assets/aistudio/EV_-_TNB_MIE__N_TA_Y_1_NGA_Y_CHO___NO__I_-_CO__N_SO_N_900dfb2f.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1000&q=85",
      "https://images.unsplash.com/photo-1626743656249-5d8fa287b941?w=1000&q=85",
      "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=1000&q=85"
    ],
    itineraryDays: [
      {
        day: 1,
        title: "CẦN THƠ – CHỢ NỔI CÁI RĂNG – KDL CỒN SƠN – VƯỜN TRÁI CÂY",
        meals: "Ăn trưa đặc sản miền sông nước",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
        activities: [
          { desc: "05h00 tập trung tại Bến Ninh Kiều (42 Hai Bà Trưng, Cần Thơ) xuống tàu tham quan Chợ nổi Cái Răng – chợ nổi bán sỉ lớn nhất Miền Tây, thăm cơ sở sản xuất hủ tiếu truyền thống.", highlight: true },
          { desc: "09h00 di chuyển sang KDL Cồn Sơn: thăm bè cá sông Hậu với hơn 30 bè cá thác lác cườm, basa; trải nghiệm Massage cá Koi & thưởng thức chả cá thác lác.", highlight: true },
          { desc: "Tham quan vườn trái cây theo mùa (chôm chôm, nhãn, bưởi, măng cụt, ổi...) tự tay hái trái trên cây và xem màn biểu diễn Cá Lóc Bay độc đáo.", highlight: true },
          { desc: "Dùng bữa trưa đặc sản miền sông nước (gà hấp hành, lẩu mắm, cá kho tộ). 14h00 về lại TP. Cần Thơ kết thúc tour." }
        ]
      }
    ],
    inclusions: [
      "Xe vận chuyển đời mới đầy đủ tiện nghi & tàu đò tham quan theo chương trình",
      "01 bữa trưa đặc sản miền Tây tiêu chuẩn 160.000đ/suất/khách",
      "Vé tham quan vào cửa 1 lần các điểm tại Chợ nổi, bè cá, vườn trái cây, khu Cá Lóc Bay",
      "Hướng dẫn viên tiếng Việt phục vụ suốt hành trình, 01 chai nước 500ml & Bảo hiểm 30.000.000đ/vụ"
    ],
    exclusions: [
      "Thuế VAT và chi phí cá nhân ngoài chương trình",
      "Bữa ăn sáng tự túc và vé di chuyển đến Cần Thơ"
    ]
  },

  // ── 5. TOUR MỸ THO - BẾN TRE 1 NGÀY ──
  {
    id: "tour-vn-mytho-bentre-1n",
    code: "EV-TNB-MTBT-1N",
    title: "TOUR MIỀN TÂY 1 NGÀY: SÀI GÒN – MỸ THO – BẾN TRE – CHÈO XUỒNG BA LÁ",
    itinerary: "Sài Gòn - Chùa Vĩnh Tràng - Cồn Lân - Xuồng Ba Lá - Lò Kẹo Dừa Bến Tre",
    duration: "01 Ngày",
    durationDays: 1,
    airline: "Ô tô + Tàu thuyền",
    price: null,
    priceFormatted: "Liên hệ",
    priceNote: "Liên hệ 0983.056.056 để nhận báo giá tốt nhất",
    highlights: [
      "Viếng Chùa Vĩnh Tràng, đi thuyền Cồn Lân & Chèo xuồng ba lá rợp bóng dừa nước",
      "Nghe Đờn ca tài tử, thăm lò kẹo dừa Bến Tre & Thưởng thức cá tai tượng chiên xù"
    ],
    giftMeals: [
      "Thưởng thức trà mật ong, mứt trái cây & trái cây miệt vườn nghe Đờn ca tài tử",
      "Bữa trưa đặc sản miền Tây (160.000đ/suất: Cá tai tượng chiên xù cuốn bánh tráng chấm mắm me, xôi chiên phồng, tôm hấp nước dừa)",
      "Trải nghiệm xe ngựa / xe lambro đường làng Bến Tre"
    ],
    country: "Mỹ Tho - Bến Tre",
    region: "Tour Miền Nam",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-nam", "mien-tay", "my-tho", "ben-tre", "viet-nam"],
    badge: "Khởi Hành Hàng Ngày",
    image: "https://images.unsplash.com/photo-1626743656249-5d8fa287b941?w=1000&q=85",
    departure: "Khởi hành hàng ngày",
    pdfFile: "EV - TNB MIỀN TÂY 1 NGÀY MỸ THO BẾN TRE.pdf",
    pdfUrl: "/assets/aistudio/EV_-_TNB_MIE__N_TA_Y_1_NGA_Y_MY__THO_BE__N_TRE_7a227f5c.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1626743656249-5d8fa287b941?w=1000&q=85",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1000&q=85",
      "https://images.unsplash.com/photo-1555921015-5532091f6026?w=1000&q=85"
    ],
    itineraryDays: [
      {
        day: 1,
        title: "SÀI GÒN – CHÙA VĨNH TRÀNG – CỒN LÂN – BẾN TRE – XUỒNG BA LÁ",
        meals: "Ăn trưa đặc sản miệt vườn",
        image: "https://images.unsplash.com/photo-1626743656249-5d8fa287b941?w=800&q=80",
        activities: [
          { desc: "06h00 - 06h30 đón khách tại Quận 1 & Gò Vấp khởi hành đi Mỹ Tho. 08h30 viếng Chùa Vĩnh Tràng cổ kính bậc nhất Miền Tây Nam Bộ.", highlight: true },
          { desc: "10h00 xuống thuyền máy sang Cồn Lân thăm lò mật ong, thưởng thức trà mật ong, ăn trái cây và nghe Đờn ca tài tử Nam Bộ.", highlight: true },
          { desc: "Trải nghiệm ngồi đò chèo (xuồng ba lá) len lỏi dưới tán dừa nước xanh mát; đi tàu sang Bến Tre thăm lò kẹo dừa thủ công và đi xe ngựa/lambro.", highlight: true },
          { desc: "Dùng cơm trưa với Cá tai tượng chiên xù, xôi chiên phồng, tôm hấp nước dừa. 17h00 về lại TP.HCM." }
        ]
      }
    ],
    inclusions: [
      "Xe máy lạnh đưa đón khách từ TP.HCM & tàu thuyền, vé đò chèo xuồng ba lá",
      "01 bữa trưa đặc sản miền Tây (160.000đ/suất) + trái cây, trà mật ong",
      "Vé tham quan các điểm, thưởng thức Đờn ca tài tử & nước suối 0.5l",
      "Hướng dẫn viên tiếng Việt suốt tuyến & Bảo hiểm du lịch"
    ],
    exclusions: [
      "Thuế VAT",
      "Chi phí cá nhân ngoài chương trình"
    ]
  },

  // ── 6. TOUR MỸ THO - BẾN TRE - CẦN THƠ - CỒN SƠN 2N1Đ ──
  {
    id: "tour-vn-mytho-cantho-2n1d",
    code: "EV-TNB-MTCT-2N1D",
    title: "TOUR MIỀN TÂY 2N1Đ: MỸ THO – BẾN TRE – CẦN THƠ – CỒN SƠN",
    itinerary: "Sài Gòn - Mỹ Tho - Cù Lao Thới Sơn - Bến Tre - Cần Thơ - Chợ Nổi Cái Răng - Cồn Sơn",
    duration: "02 Ngày 01 Đêm",
    durationDays: 2,
    airline: "Ô tô + Tàu thuyền",
    price: null,
    priceFormatted: "Liên hệ",
    priceNote: "Liên hệ 0983.056.056 để nhận báo giá tốt nhất",
    highlights: [
      "Chèo xuồng ba lá Cù lao Thới Sơn, Chợ nổi Cái Răng & KDL cộng đồng Cồn Sơn",
      "Dùng bữa tối giao lưu âm nhạc trên Du thuyền Cần Thơ & Ngắm sông Hậu về đêm"
    ],
    giftMeals: [
      "01 bữa tối đẳng cấp trên Nhà hàng Du thuyền Cần Thơ (200.000đ/suất) giao lưu âm nhạc",
      "02 bữa ăn trưa đặc sản Miệt Vườn & Làng du lịch cộng đồng Cồn Sơn",
      "Khách sạn tiêu chuẩn 3 sao tại Cần Thơ + 01 bữa sáng",
      "Thưởng thức trái cây theo mùa, nghe Đờn ca tài tử & uống trà mật ong chanh"
    ],
    country: "Miền Tây",
    region: "Tour Miền Nam",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-nam", "mien-tay", "my-tho", "ben-tre", "can-tho", "viet-nam"],
    badge: "Hàng Ngày • KS 3 Sao",
    image: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=1000&q=85",
    departure: "Khởi hành hàng ngày",
    pdfFile: "EV - TNB MIỀN TÂY 2N1D MỸ THO - CỒN SƠN - CẦN THƠ.pdf",
    pdfUrl: "/assets/aistudio/EV_-_TNB_MIE__N_TA_Y_2N1D_MY__THO_-_CO__N_SO_N_-_CA__N_THO__1faac024.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1555921015-5532091f6026?w=1000&q=85",
      "https://images.unsplash.com/photo-1626743656249-5d8fa287b941?w=1000&q=85",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1000&q=85"
    ],
    singleRoomSurcharge: "300.000 VNĐ / đêm (KS 3 sao)",
    itineraryDays: [
      {
        day: 1,
        title: "SÀI GÒN – MỸ THO – BẾN TRE – CẦN THƠ – DU THUYỀN SÔNG HẬU",
        meals: "Ăn trưa, tối (Du thuyền Cần Thơ)",
        hotel: "Khách sạn 3 sao Cần Thơ",
        image: "https://images.unsplash.com/photo-1626743656249-5d8fa287b941?w=800&q=80",
        activities: [
          { desc: "06h00 khởi hành đi Tiền Giang, viếng Chùa Vĩnh Tràng. Lên tàu ngắm Tứ Linh (Long - Lân - Quy - Phụng), ghé Cù lao Thới Sơn thưởng thức trái cây, Đờn ca tài tử & trà mật ong." },
          { desc: "Trải nghiệm chèo xuồng ba lá dưới hàng dừa nước, thăm lò kẹo dừa Tân Thạch (Bến Tre) và đi xe ngựa/lambro đường làng; ăn trưa Cá tai tượng chiên giòn.", highlight: true },
          { desc: "Chiều đến Cần Thơ nhận phòng khách sạn 3 sao. Tối dùng cơm trên Du thuyền Cần Thơ, giao lưu âm nhạc & ngắm sông Hậu về đêm.", highlight: true }
        ]
      },
      {
        day: 2,
        title: "CHỢ NỔI CÁI RĂNG – CỒN SƠN – CĂN NHÀ MÀU TÍM – TP.HCM",
        meals: "Ăn sáng, trưa (Làng du lịch Cồn Sơn)",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
        activities: [
          { desc: "05h00 đi tàu tham quan Chợ nổi Cái Răng lúc bình minh sôi động. Về khách sạn dùng điểm tâm." },
          { desc: "09h00 sang KDL Cồn Sơn: thăm bè cá sông Hậu, massage cá Koi, thưởng thức chả cá thác lác, hái trái cây tại vườn và xem Cá Lóc Bay.", highlight: true },
          { desc: "Chiều ghé check-in phim trường Căn Nhà Màu Tím (vé tự túc). 18h30 - 19h00 về đến TP.HCM." }
        ]
      }
    ],
    inclusions: [
      "Xe du lịch máy lạnh đưa đón suốt tuyến & tàu bè, đò chèo tham quan",
      "Khách sạn tiêu chuẩn 3 sao (2 khách/phòng, lẻ ngủ 3)",
      "01 bữa sáng tại khách sạn + 03 bữa chính (gồm bữa tối Du thuyền Cần Thơ 200.000đ)",
      "Vé tham quan các điểm theo lịch trình, HDV tiếng Việt, nước suối & Bảo hiểm 30.000.000đ/vụ"
    ],
    exclusions: [
      "Thuế VAT, vé tham quan Căn Nhà Màu Tím",
      "Phụ thu phòng đơn 300.000đ/đêm (3 sao), tiền tip tự nguyện & chi phí cá nhân"
    ]
  },

  // ── 7. TOUR MỸ THO - CẦN THƠ - SÓC TRĂNG - BẠC LIÊU - CÀ MAU 3N2Đ ──
  {
    id: "tour-vn-camau-3n2d",
    code: "EV-TNB-CAMAU-3N2D",
    title: "TOUR MIỀN TÂY 3N2Đ: MỸ THO – CẦN THƠ – SÓC TRĂNG – BẠC LIÊU – ĐẤT MŨI CÀ MAU",
    itinerary: "Sài Gòn - Mỹ Tho - Cần Thơ - Sóc Trăng - Đất Mũi Cà Mau - Bạc Liêu",
    duration: "03 Ngày 02 Đêm",
    durationDays: 3,
    airline: "Ô tô + Tàu thuyền",
    price: null,
    priceFormatted: "Liên hệ",
    priceNote: "Liên hệ 0983.056.056 để nhận báo giá tốt nhất",
    highlights: [
      "Chinh phục Cực Nam Tổ Quốc – Check-in Mũi Cà Mau (GPS 0001) & Cột cờ Hà Nội",
      "Tặng áo cờ đỏ sao vàng, ăn tối Du thuyền Cần Thơ & Viếng Nhà thờ Tắc Sậy"
    ],
    giftMeals: [
      "Tặng Áo cờ đỏ sao vàng check-in thiêng liêng tại Mũi Cà Mau",
      "Bữa tối Du thuyền Cần Thơ (200.000đ/suất) xem ảo thuật & giao lưu âm nhạc",
      "03 bữa sáng (Trung Lương Restop + 2 bữa KS) & 05 bữa chính đặc sản Miền Tây",
      "Khách sạn 3 sao tại Cần Thơ & Cà Mau suốt tuyến"
    ],
    country: "Đất Mũi Cà Mau",
    region: "Tour Miền Nam",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-nam", "mien-tay", "my-tho", "can-tho", "ca-mau", "viet-nam"],
    badge: "T3, T6, CN • KS 3 Sao",
    image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=1000&q=85",
    departure: "Thứ 3, Thứ 6 & Chủ Nhật",
    pdfFile: "EV - TNB Mỹ Tho - Cần Thơ – Sóc Trăng - Bạc Liêu – Cà Mau 3N2D.pdf",
    pdfUrl: "/assets/aistudio/EV_-_TNB_My__Tho_-_Ca__n_Tho____So_c_Tra_ng_-_Ba_c_Lie_u___Ca__Mau_3N2D_ac506dbc.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=1000&q=85",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1000&q=85",
      "https://images.unsplash.com/photo-1787285006254-db088233fa8d?w=1000&q=85"
    ],
    singleRoomSurcharge: "600.000 VNĐ / khách",
    itineraryDays: [
      {
        day: 1,
        title: "SÀI GÒN – MỸ THO – CỒN LÂN – BẾN TRE – CẦN THƠ",
        meals: "Ăn sáng, trưa, tối (Du thuyền Cần Thơ)",
        hotel: "Khách sạn 3 sao Cần Thơ",
        activities: [
          { desc: "06h15 khởi hành từ Sài Gòn, ăn sáng tại Trung Lương Restop. Đến Mỹ Tho đi thuyền qua Cồn Lân thăm lò mật ong, ăn trái cây, nghe Đờn ca tài tử & chèo xuồng ba lá." },
          { desc: "Thăm lò kẹo dừa Bến Tre, đi xe ngựa/lambro, ăn trưa đặc sản. Chiều đến Cần Thơ nhận phòng khách sạn 3 sao." },
          { desc: "Tối dùng bữa trên Du thuyền Cần Thơ xem ảo thuật, giao lưu văn nghệ & ngắm sông Hậu.", highlight: true }
        ]
      },
      {
        day: 2,
        title: "CHỢ NỔI CÁI RĂNG – SÓC TRĂNG – ĐẤT MŨI CÀ MAU (GPS 0001)",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3 sao TP. Cà Mau",
        image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=800&q=80",
        activities: [
          { desc: "05h00 đi Chợ nổi Cái Răng & cơ sở hủ tiếu. Về khách sạn dùng bữa sáng, trả phòng khởi hành đi Cà Mau (dừng chân Sóc Trăng)." },
          { desc: "Chiều khám phá Đất Mũi Cà Mau: chụp ảnh Pano hình con tàu hướng ra Biển Đông, viếng Đền Mẫu Lạc Long Quân – Tượng Mẹ Âu Cơ, Cột cờ Hà Nội & Check-in Cột mốc tọa độ quốc gia GPS 0001.", highlight: true },
          { desc: "Tối về TP. Cà Mau nhận phòng nghỉ ngơi, ăn tối." }
        ]
      },
      {
        day: 3,
        title: "CÀ MAU – NHÀ THỜ TẮC SẬY – BẠC LIÊU – CHÙA SOM RÔNG – SÀI GÒN",
        meals: "Ăn sáng, trưa",
        activities: [
          { desc: "6h00 ăn sáng trả phòng, khởi hành về Bạc Liêu viếng Nhà thờ Tắc Sậy – Mộ Cha Trương Bửu Diệp, thăm Nhà Công Tử Bạc Liêu.", highlight: true },
          { desc: "Tham quan Cánh đồng Điện Gió Bạc Liêu (hoặc Mẹ Nam Hải Bạc Liêu). Về Sóc Trăng viếng Chùa Som Rông tuyệt đẹp, ăn trưa.", highlight: true },
          { desc: "Chiều về lại TP.HCM (18h30 - 19h00), kết thúc hành trình Cà Mau 3N2Đ." }
        ]
      }
    ],
    inclusions: [
      "Xe vận chuyển đời mới ghế bật máy lạnh suốt tuyến & tàu tham quan",
      "Khách sạn tiêu chuẩn 3 sao (2 khách/phòng, lẻ ngủ 3)",
      "03 bữa sáng + 05 bữa chính (gồm bữa tối Du thuyền Cần Thơ 200.000đ)",
      "Tặng Áo cờ đỏ sao vàng check-in Mũi Cà Mau",
      "Vé tham quan vào cửa 1 lần, HDV tiếng Việt, nước suối & Bảo hiểm 30.000.000đ/vụ"
    ],
    exclusions: [
      "Thuế VAT & vé máy bay khứ hồi (nếu có)",
      "Phụ thu phòng đơn 600.000đ/khách & chi phí cá nhân ngoài chương trình"
    ]
  },

  // ── 8. TOUR LIÊN TUYẾN MIỀN TÂY - CHÂU ĐỐC - CÀ MAU 4N3Đ ──
  {
    id: "tour-vn-camau-chaudoc-4n3d",
    code: "EVG-TNB-CAMAU-4N3D",
    title: "TOUR MIỀN TÂY 4N3Đ: MỸ THO – BẾN TRE – CHÂU ĐỐC – CẦN THƠ – SÓC TRĂNG – BẠC LIÊU – CÀ MAU",
    itinerary: "Mỹ Tho - Bến Tre - Châu Đốc - Rừng Tràm Trà Sư - Cần Thơ - Sóc Trăng - Bạc Liêu - Cà Mau",
    duration: "04 Ngày 03 Đêm",
    durationDays: 4,
    airline: "Ô tô + Tàu thuyền",
    price: null,
    priceFormatted: "Liên hệ",
    priceNote: "Liên hệ 0983.056.056 để nhận báo giá tốt nhất",
    highlights: [
      "Khám phá Rừng tràm Trà Sư, Miếu Bà Chúa Xứ Núi Sam & Cực Nam Mũi Cà Mau",
      "Tặng áo cờ đỏ sao vàng, Du thuyền Cần Thơ, Chợ nổi Cái Răng & Chùa Som Rông"
    ],
    giftMeals: [
      "Tặng Áo cờ đỏ sao vàng check-in tại Cột mốc GPS 0001 Mũi Cà Mau",
      "Bữa tối Du thuyền Cần Thơ (200.000đ/suất) xem ảo thuật & giao lưu âm nhạc",
      "04 bữa sáng + 07 bữa chính đậm chất miệt vườn Tây Nam Bộ & đặc sản Trà Sư",
      "Khách sạn Cần Thơ & Cà Mau 3 sao, Châu Đốc 2 sao+ tương đương 3 sao"
    ],
    country: "Miền Tây 6 Tỉnh",
    region: "Tour Miền Nam",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-nam", "mien-tay", "my-tho", "ben-tre", "chau-doc", "can-tho", "ca-mau", "viet-nam"],
    badge: "T2, T5, T7 • KS 3 Sao",
    image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1000&q=85",
    departure: "Thứ 2, Thứ 5 & Thứ 7",
    pdfFile: "EVG TNB MỸ THO – BẾN TRE – CHÂU ĐỐC - CẦN THƠ – SÓC TRĂNG – BẠC LIÊU – CÀ MAU 4N3D.pdf",
    pdfUrl: "/assets/aistudio/EVG_TNB_MY__THO___BE__N_TRE___CHA_U__O__C_-_CA__N_THO____SO_C_TRA_NG___BA_C_LIE_U___CA__MAU_4N3D_fc6dd0cd.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1000&q=85",
      "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=1000&q=85",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1000&q=85"
    ],
    singleRoomSurcharge: "300.000 VNĐ / đêm (KS 3 sao)",
    itineraryDays: [
      {
        day: 1,
        title: "SÀI GÒN – MỸ THO – BẾN TRE – CHÂU ĐỐC (AN GIANG)",
        meals: "Ăn sáng, trưa (Miệt vườn), tối",
        hotel: "Khách sạn 2*+ / 3 sao Châu Đốc",
        activities: [
          { desc: "06h00 khởi hành đi Tiền Giang, ăn sáng Mỹ Tho, du ngoạn sông Tiền thăm làng nghề mật ong, lò kẹo dừa Bến Tre, nghe Đờn ca tài tử và chèo xuồng ba lá." },
          { desc: "Ăn trưa Miệt Vườn và uống nước lá Sake. Chiều khởi hành đi Châu Đốc qua Sa Đéc, Lai Vung, Long Xuyên.", highlight: true },
          { desc: "Nhận phòng, ăn tối và tự do dạo Châu Đốc thưởng thức chè bưởi nổi tiếng An Giang." }
        ]
      },
      {
        day: 2,
        title: "MIẾU BÀ CHÚA XỨ – RỪNG TRÀM TRÀ SƯ – CẦN THƠ",
        meals: "Ăn sáng, trưa (Trà Sư), tối (Du thuyền Cần Thơ)",
        hotel: "Khách sạn 3 sao Cần Thơ",
        image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80",
        activities: [
          { desc: "Viếng Miếu Bà Chúa Xứ Núi Sam, Lăng Thoại Ngọc Hầu, Chùa Tây An Cổ Tự. Đi dọc kênh Vĩnh Tế ngắm dãy Thất Sơn – Núi Cấm." },
          { desc: "Khám phá Rừng Tràm Trà Sư bằng tắc ráng xuôi dòng bèo xanh mướt, lên đài quan sát, check-in Cầu Tre Vạn Bước & Nhà Bồ Câu; ăn trưa cá lóc nướng, lẩu chua.", highlight: true },
          { desc: "Chiều đến Cần Thơ nhận phòng, tối ăn cơm trên Du thuyền Cần Thơ giao lưu âm nhạc.", highlight: true }
        ]
      },
      {
        day: 3,
        title: "CHỢ NỔI CÁI RĂNG – SÓC TRĂNG – ĐẤT MŨI CÀ MAU",
        meals: "Ăn sáng, trưa, tối",
        hotel: "Khách sạn 3 sao TP. Cà Mau",
        activities: [
          { desc: "05h00 thăm Chợ nổi Cái Răng sầm uất. Ăn sáng trả phòng khởi hành đi Cà Mau, dừng chân Sóc Trăng, ăn trưa tại Năm Căn." },
          { desc: "Chiều chinh phục Đất Mũi Cà Mau: Pano hình con tàu, Đền Lạc Long Quân – Mẹ Âu Cơ, Cột cờ Hà Nội, Cột mốc GPS 0001 & Biểu tượng Con Cua Cà Mau.", highlight: true },
          { desc: "Tối về TP. Cà Mau ăn tối, nghỉ ngơi." }
        ]
      },
      {
        day: 4,
        title: "CÀ MAU – NHÀ THỜ TẮC SẬY – BẠC LIÊU – CHÙA SOM RÔNG – TP.HCM",
        meals: "Ăn sáng, trưa",
        activities: [
          { desc: "Viếng Nhà thờ Tắc Sậy – Mộ Cha Trương Bửu Diệp, thăm Nhà Công Tử Bạc Liêu & Cánh đồng Điện Gió Bạc Liêu (hoặc Mẹ Nam Hải).", highlight: true },
          { desc: "Về Sóc Trăng ăn trưa và viếng Chùa Som Rông. 18h00 - 18h30 về đến Sài Gòn." }
        ]
      }
    ],
    inclusions: [
      "Xe du lịch đời mới đầy đủ tiện nghi & tàu bè di chuyển theo chương trình",
      "Khách sạn Cần Thơ, Cà Mau 3 sao & Châu Đốc 2*+ tương đương 3 sao",
      "04 bữa sáng + 07 bữa chính (gồm bữa tối Du thuyền Cần Thơ 200.000đ)",
      "Tặng Áo cờ đỏ sao vàng check-in tại Mũi Cà Mau",
      "Vé vào cửa 1 lần các điểm (bao gồm tắc ráng Trà Sư), HDV, nước suối & Bảo hiểm"
    ],
    exclusions: [
      "Thuế VAT, vé máy bay khứ hồi",
      "Phụ thu phòng đơn 300.000đ/đêm, tiền tip HDV & tài xế tự nguyện"
    ]
  },

  // ── 9. TOUR TÂY NINH - NÚI BÀ ĐEN 1 NGÀY ──
  {
    id: "tour-vn-tayninh-baden-1n",
    code: "EV-TNB-TAYNINH-1N",
    title: "TOUR TÂY NINH 1 NGÀY: KDL NÚI BÀ ĐEN – ĐỈNH VÂN SƠN – TÒA THÁNH – CHÙA GÒ KÉN",
    itinerary: "Sài Gòn - KDL Núi Bà Đen - Đỉnh Vân Sơn - Tòa Thánh Tây Ninh - Chùa Gò Kén",
    duration: "01 Ngày",
    durationDays: 1,
    airline: "Ô tô + Cáp Treo Vân Sơn",
    price: null,
    priceFormatted: "Liên hệ",
    priceNote: "Liên hệ 0983.056.056 để nhận báo giá tốt nhất",
    highlights: [
      "Chinh phục Nóc nhà Nam Bộ bằng cáp treo Vân Sơn, chiêm bái Tượng Phật Bà 72m",
      "Thưởng thức Buffet 5 Châu trên đỉnh Vân Sơn & Đặc sản Bánh canh Trảng Bàng"
    ],
    giftMeals: [
      "Bao gồm vé cáp treo đỉnh Vân Sơn Núi Bà Đen khứ hồi",
      "Bao gồm 01 bữa trưa Buffet Năm Châu hơn 80 món ăn trên đỉnh Vân Sơn (có buffet chay)",
      "01 bữa sáng đặc sản Bánh canh Trảng Bàng ăn kèm rau rừng",
      "Trải nghiệm khu chiếu phim 3D Video Mapping Nhà Mái Vòm hiện đại"
    ],
    country: "Tây Ninh",
    region: "Tour Miền Nam",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-nam", "tay-ninh", "viet-nam"],
    badge: "Gồm Cáp Treo & Buffet",
    image: "https://images.unsplash.com/photo-1781925696668-3a50d3cd1977?w=1000&q=85",
    departure: "Khởi hành hàng tuần",
    pdfFile: "EV - TNB TÂY NINH 1 NGÀY.pdf",
    pdfUrl: "/assets/aistudio/EV_-_TNB_TA_Y_NINH_1_NGA_Y_9f015bde.pdf",
    galleryImages: [
      "https://images.unsplash.com/photo-1781925696668-3a50d3cd1977?w=1000&q=85",
      "https://images.unsplash.com/photo-1770149682516-4294edca7bca?w=1000&q=85",
      "https://images.unsplash.com/photo-1694083151781-946334842033?w=1000&q=85"
    ],
    itineraryDays: [
      {
        day: 1,
        title: "SÀI GÒN – NÚI BÀ ĐEN – ĐỈNH VÂN SƠN – TÒA THÁNH – CHÙA GÒ KÉN",
        meals: "Ăn sáng (Bánh canh Trảng Bàng), trưa (Buffet Năm Châu)",
        image: "https://images.unsplash.com/photo-1781925696668-3a50d3cd1977?w=800&q=80",
        activities: [
          { desc: "06h00 đón khách tại TP.HCM (Gò Vấp, Quận 1), khởi hành đi Tây Ninh. Dừng chân dùng điểm tâm đặc sản Bánh canh Trảng Bàng ăn kèm rau rừng." },
          { desc: "08h30 đến KDL Núi Bà Đen đi tuyến cáp treo Vân Sơn chinh phục đỉnh cao 986m – Nóc nhà Nam Bộ; chiêm bái Tượng Phật Bà Tây Bổ Đà Sơn bằng đồng đỏ cao 72m và Tôn tượng Phật Di Lặc ghép từ 6.688 viên đá sa thạch.", highlight: true },
          { desc: "Khám phá Khu chiếu phim 3D Video Mapping tại Nhà Mái Vòm & thưởng thức Buffet Năm Châu hơn 80 món trên đỉnh Vân Sơn.", highlight: true },
          { desc: "Chiều xuống núi tham quan Tòa Thánh Tây Ninh (Đạo Cao Đài) và Chùa Gò Kén (Thiền Lâm Cổ Tự) với tượng Phật Quan Thế Âm cưỡi rồng. 18h00 - 18h30 về tới TP.HCM." }
        ]
      }
    ],
    inclusions: [
      "Xe máy lạnh đời mới đưa đón theo chương trình từ TP.HCM",
      "Vé cáp treo đỉnh Vân Sơn & Vé Buffet Năm Châu hơn 80 món",
      "01 bữa sáng đặc sản Bánh canh Trảng Bàng (1 tô + 1 ly)",
      "Vé vào cổng các điểm tham quan theo chương trình, HDV, nước suối & Bảo hiểm du lịch"
    ],
    exclusions: [
      "Thuế VAT & Chi phí cá nhân ngoài chương trình",
      "Vé cáp treo Sun World BaDen Mountain tuyến Chùa Hang",
      "Phụ thu khách nước ngoài: 90.000đ/khách/ngày; Tiền tip tự nguyện"
    ]
  },

  // ── 10. TOUR LIÊN TUYẾN: ĐÀ LẠT – NHA TRANG ──
  {
    id: "eng-hdt-dlnt",
    code: "ENG-HDT",
    title: "TOUR LIÊN TUYẾN: ĐÀ LẠT – NHA TRANG",
    itinerary: "TP.HCM – Đà Lạt – Nha Trang",
    duration: "4 Ngày 4 Đêm",
    durationDays: 4,
    airline: "Ô tô du lịch đời mới",
    price: 2790000,
    priceFormatted: "2.790.000 VNĐ",
    highlights: [
      "Kết hợp nghỉ dưỡng cao nguyên Đà Lạt và biển đảo Nha Trang",
      "Khởi hành tối 18/2, 19/2 (Mùng 2, Mùng 3 Tết)"
    ],
    country: "Đà Lạt - Nha Trang",
    region: "Tour Miền Trung",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-trung", "da-lat", "nha-trang", "viet-nam"],
    badge: "4 Ngày 4 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2026/01/VINWONDERS-6-1024x341.jpg",
    departure: "Tối 18/2, 19/2 (Mùng 2, Mùng 3 Tết)",
    pdfFile: "CHUONG_TRINH_TOUR_ENG-HDT-DLNT.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 11. CHƯƠNG TRÌNH SĂN MÂY ĐÀ LẠT: LANGBIANG LAND – QUE GARDEN ──
  {
    id: "eng-hdt-sanmay",
    code: "ENG-HDT",
    title: "CHƯƠNG TRÌNH SĂN MÂY ĐÀ LẠT: LANGBIANG LAND – QUE GARDEN",
    itinerary: "TP.HCM – Đà Lạt – Langbiang Land – Que Garden",
    duration: "3 Ngày 2 Đêm",
    durationDays: 3,
    airline: "Ô tô du lịch đời mới",
    price: 2790000,
    priceFormatted: "2.790.000 VNĐ",
    highlights: [
      "Trải nghiệm săn mây buổi sớm, check-in Langbiang Land & Que Garden",
      "Khởi hành từ Mùng 2 đến Mùng 8 Tết"
    ],
    country: "Đà Lạt",
    region: "Tour Miền Trung",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-trung", "mien-nam", "da-lat", "viet-nam"],
    badge: "3 Ngày 2 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2026/01/Langbiang-Land-7.jpeg",
    departure: "Mùng 2 đến Mùng 8 Tết",
    pdfFile: "CHUONG_TRINH_TOUR_ENG-HDT-SANMAY.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 12. DU XUÂN TẾT 2026: KHÁM PHÁ ĐÀ LẠT – THUNG LŨNG CÁC VỊ THẦN ──
  {
    id: "eng-hdt-thunglung",
    code: "ENG-HDT",
    title: "DU XUÂN TẾT 2026: KHÁM PHÁ ĐÀ LẠT – THUNG LŨNG CÁC VỊ THẦN",
    itinerary: "TP.HCM – Đà Lạt – Thung Lũng Các Vị Thần",
    duration: "3 Ngày 2 Đêm",
    durationDays: 3,
    airline: "Ô tô du lịch đời mới",
    price: 2790000,
    priceFormatted: "2.790.000 VNĐ",
    highlights: [
      "Tham quan Thung Lũng Các Vị Thần cùng các điểm check-in mới tại Đà Lạt",
      "Khởi hành từ Mùng 2 đến Mùng 8 Tết"
    ],
    country: "Đà Lạt",
    region: "Tour Miền Trung",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-trung", "mien-nam", "da-lat", "viet-nam"],
    badge: "3 Ngày 2 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2026/01/du-lich-Da-Lat-3-1024x606.webp",
    departure: "Mùng 2 đến Mùng 8 Tết",
    pdfFile: "CHUONG_TRINH_TOUR_ENG-HDT-THUNGLUNG.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 13. HÀNH TRÌNH KHÁM PHÁ BẮC CÁT TIÊN – BẢO LỘC – TÀ ĐÙNG ──
  {
    id: "eng-hdt-tadung",
    code: "ENG-HDT",
    title: "HÀNH TRÌNH KHÁM PHÁ BẮC CÁT TIÊN – BẢO LỘC – TÀ ĐÙNG",
    itinerary: "TP.HCM – Bắc Cát Tiên – Bảo Lộc – Hồ Tà Đùng",
    duration: "2 Ngày 2 Đêm",
    durationDays: 2,
    airline: "Ô tô du lịch đời mới",
    price: 2990000,
    priceFormatted: "2.990.000 VNĐ",
    highlights: [
      "Chiêm ngưỡng vẻ đẹp 'Vịnh Hạ Long Tây Nguyên' tại hồ Tà Đùng & Bảo Lộc",
      "Khởi hành Mùng 2, Mùng 3, Mùng 4 Tết"
    ],
    country: "Bảo Lộc - Tà Đùng",
    region: "Tour Miền Trung",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-trung", "mien-nam", "bao-loc", "ta-dung", "viet-nam"],
    badge: "2 Ngày 2 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2026/01/2-ho-ta-dung-1024x767.jpg",
    departure: "Mùng 2, Mùng 3, Mùng 4 Tết",
    pdfFile: "CHUONG_TRINH_TOUR_ENG-HDT-TADUNG.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 14. TOUR TÂY NINH 1 NGÀY: NÚI BÀ ĐEN – CÁP TREO – ĐỈNH VÂN SƠN – BUFFET – TÒA THÁNH – CHÙA GÒ KÉN ──
  {
    id: "evg-tnbt",
    code: "EVG-TNBT",
    title: "TOUR TÂY NINH 1 NGÀY: NÚI BÀ ĐEN – CÁP TREO – ĐỈNH VÂN SƠN – BUFFET – TÒA THÁNH – CHÙA GÒ KÉN",
    itinerary: "TP.HCM – Núi Bà Đen – Đỉnh Vân Sơn – Tòa Thánh – Chùa Gò Kén",
    duration: "1 Ngày",
    durationDays: 1,
    airline: "Ô tô + Cáp Treo Vân Sơn",
    price: 1150000,
    priceFormatted: "1.150.000 VNĐ",
    highlights: [
      "Trọn gói vé cáp treo chinh phục Đỉnh Vân Sơn, Buffet trưa & Tòa Thánh Tây Ninh",
      "Khởi hành Thứ 7, Chủ nhật hàng tuần"
    ],
    country: "Tây Ninh",
    region: "Tour Miền Nam",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-nam", "tay-ninh", "viet-nam"],
    badge: "1 Ngày",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/05/1-2-1024x774.jpg",
    departure: "Thứ 7, Chủ nhật hàng tuần",
    pdfFile: "CHUONG_TRINH_TOUR_EVG-TNBT.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 15. CHƯƠNG TRÌNH THAM QUAN TRẢI NGHIỆM VÙNG CHÈ TÀ XÙA ──
  {
    id: "evg-avt-taxua",
    code: "EVG - AVT",
    title: "CHƯƠNG TRÌNH THAM QUAN TRẢI NGHIỆM VÙNG CHÈ TÀ XÙA",
    itinerary: "Hà Nội – Sống Lưng Khủng Long – Vùng Chè Cổ Thụ Tà Xùa",
    duration: "4 Ngày 3 Đêm",
    durationDays: 4,
    airline: "Ô tô du lịch đời mới",
    price: 5642000,
    priceFormatted: "5.642.000 VNĐ",
    highlights: [
      "Săn mây sống lưng khủng long & trải nghiệm văn hóa vùng chè cổ thụ Tà Xùa",
      "Hành trình khám phá Tây Bắc trọn gói"
    ],
    country: "Tà Xùa",
    region: "Tour Miền Bắc",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-bac", "ta-xua", "viet-nam"],
    badge: "4 Ngày 3 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/09/Ta-Xua-6-1024x1024.jpg",
    departure: "Khởi hành định kỳ",
    pdfFile: "CHUONG_TRINH_TOUR_EVG-AVT-TAXUA.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 16. TOUR MIỀN TÂY 2 NGÀY 1 ĐÊM: MỸ THO – BẾN TRE – CẦN THƠ ──
  {
    id: "evg-mientay-2n1d",
    code: "EVG - MT2N",
    title: "TOUR MIỀN TÂY 2 NGÀY 1 ĐÊM: MỸ THO – BẾN TRE – CẦN THƠ",
    itinerary: "TP.HCM – Mỹ Tho – Bến Tre – Cần Thơ – Chợ Nổi Cái Răng",
    duration: "2 Ngày 1 Đêm",
    durationDays: 2,
    airline: "Ô tô + Tàu thuyền",
    price: null,
    priceFormatted: "Liên hệ",
    priceNote: "Liên hệ 0983.056.056 để nhận báo giá tốt nhất",
    highlights: [
      "Du thuyền sông Tiền, tham quan miệt vườn Bến Tre & Chợ nổi Cái Răng",
      "Khởi hành theo yêu cầu"
    ],
    country: "Miền Tây",
    region: "Tour Miền Nam",
    category: "trong-nuoc",
    cats: ["all", "trong-nuoc", "mien-nam", "mien-tay", "my-tho", "ben-tre", "can-tho", "viet-nam"],
    badge: "2 Ngày 1 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2024/08/TOUR-HANH-HUONG-TRA-VINH-SOC-TRANG-CAN-THO-3N2D-14.jpg",
    departure: "Theo yêu cầu",
    pdfFile: "CHUONG_TRINH_TOUR_EVG-MT2N.pdf (Đang cập nhật)",
    pdfUrl: ""
  }
];
