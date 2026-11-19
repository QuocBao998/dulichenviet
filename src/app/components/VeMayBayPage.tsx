import { useState, useMemo } from "react";
import { motion as Motion } from "motion/react";
import {
  Plane, ArrowRight, ChevronLeft, Calendar, Tag, Phone,
  Search, CheckCircle, FileText
} from "lucide-react";
import { useLang, t } from "../App";

interface FlightPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  gallery?: string[];
  date: string;
  category: "Ưu đãi vé" | "Đường bay mới" | "Quy định & Thủ tục bay" | "Cẩm nang săn vé";
  categoryColor: string;
  sections: { heading: string; body: string }[];
  notes?: string[];
}

const FLIGHT_POSTS: FlightPost[] = [
  {
    id: 1,
    title: "CHẠM ĐẾN NHỮNG CHÂN TRỜI MỚI VỚI VÉ 0Đ!",
    excerpt:
      "Chào mừng đường bay mới, Vietjet tặng ngay deal vé Eco chỉ từ 0Đ (chưa bao gồm thuế, phí) cho hàng loạt đường bay đến Singapore, Sri Lanka và Ấn Độ.",
    image:
      "https://dulichenviet.vn/wp-content/uploads/2026/06/z7942438322740_f9c58c0c712d80cb31d8b2291274b8ad-819x1024.jpg",
    date: "06/2026",
    category: "Ưu đãi vé",
    categoryColor: "bg-red-50 text-red-600 border-red-200",
    sections: [
      {
        heading: "Ưu đãi vé Eco chỉ từ 0Đ chào mừng đường bay mới",
        body: "Chào mừng đường bay mới, Vietjet tặng ngay deal vé Eco chỉ từ 0Đ (chưa bao gồm thuế, phí) cho hàng loạt đường bay quốc tế hấp dẫn đến Singapore, Sri Lanka và Ấn Độ.",
      },
      {
        heading: "Thời gian mở bán & Thời gian bay áp dụng",
        body: "Thời gian đặt vé ưu đãi: từ 15/06 – 21/06/2026. Thời gian bay áp dụng: từ 18/08/2026 – 31/03/2027 (không áp dụng cho giai đoạn Lễ, Tết và mùa cao điểm theo quy định của hãng).",
      },
    ],
    notes: [
      "Giá vé 0Đ hạng Eco chưa bao gồm thuế, phí sân bay và hành lý ký gửi.",
      "Số lượng vé khuyến mãi có hạn trên từng chuyến bay.",
      "Liên hệ Én Việt qua Hotline 0983.056.056 để được hỗ trợ săn vé và giữ chỗ nhanh nhất.",
    ],
  },
  {
    id: 2,
    title: "THÔNG BÁO QUY ĐỊNH SỬ DỤNG HỘ CHIẾU KHI BAY CHUYẾN BAY NỘI ĐỊA TẠI VIỆT NAM",
    excerpt:
      "Căn cứ Thông tư 14/2026/TT-BCA ngày 03/02/2026 của Cục Quản lý Xuất nhập cảnh, khi thực hiện các chuyến bay nội địa tại Việt Nam, hành khách mang hộ chiếu nước ngoài cần tuân thủ đúng quy định.",
    image:
      "https://dulichenviet.vn/wp-content/uploads/2026/04/QUY-DINH-SU-DUNG-HO-CHIEU-KHI-BAY-CHUYEN-BAY-NOI-DIA-1024x589.jpg",
    date: "04/2026",
    category: "Quy định & Thủ tục bay",
    categoryColor: "bg-amber-50 text-amber-700 border-amber-200",
    sections: [
      {
        heading: "Quy định theo Thông tư 14/2026/TT-BCA",
        body: "Căn cứ Thông tư 14/2026/TT-BCA ngày 03/02/2026 của Cục Quản lý Xuất nhập cảnh, khi thực hiện các chuyến bay nội địa tại Việt Nam, hành khách là người nước ngoài hoặc Việt Kiều bắt buộc sử dụng đúng hộ chiếu đã dùng để nhập cảnh vào Việt Nam để làm thủ tục.",
      },
      {
        heading: "Lưu ý cho hành khách có 2 quốc tịch",
        body: "1. Khi làm thủ tục check-in và qua cửa an ninh, chỉ sử dụng đúng cuốn hộ chiếu đã dùng để nhập cảnh Việt Nam. 2. Trường hợp có 2 quốc tịch (Việt Nam và nước ngoài): Nhập cảnh bằng hộ chiếu nào thì khi bay nội địa phải xuất trình đúng hộ chiếu đó và đặt vé khớp đúng họ tên trên cuốn hộ chiếu đó. Sử dụng sai hộ chiếu sẽ bị từ chối làm thủ tục bay.",
      },
      {
        heading: "Ví dụ minh họa đặt tên vé chính xác",
        body: "Nếu hành khách có Hộ chiếu Việt Nam tên NGUYỄN THANH HÀ và Hộ chiếu Mỹ tên NGUYEN/JULIA: khi nhập cảnh bằng hộ chiếu Việt Nam, vé bay nội địa bắt buộc đặt theo tên NGUYEN/THANH HA.",
      },
    ],
    notes: [
      "Kiểm tra kỹ cuốn hộ chiếu đã đóng dấu nhập cảnh trước khi xuất vé nội địa.",
      "Đảm bảo họ tên trên vé máy bay khớp 100% với hộ chiếu sử dụng làm thủ tục.",
    ],
  },
  {
    id: 3,
    title: "EVA Air chính thức mở đường bay đến Washington D.C",
    excerpt:
      "EVA Air chính thức mở đường bay đến Washington D.C – “trái tim của nước Mỹ” nơi giao thoa tinh hoa văn hóa và chiều sâu lịch sử, khai thác từ ngày 26/06/2026.",
    image:
      "https://dulichenviet.vn/wp-content/uploads/2026/03/EVA-Air-chinh-thuc-mo-duong-bay-den-Washington-DC-724x1024.jpg",
    date: "03/2026",
    category: "Đường bay mới",
    categoryColor: "bg-blue-50 text-[#1e64ae] border-blue-200",
    sections: [
      {
        heading: "Đường bay mới đến thủ đô Washington D.C bằng Boeing 787-9",
        body: "EVA Air chính thức khai thác đường bay mới từ Đài Bắc (TPE) đến Washington D.C (IAD) với tần suất 4 chuyến/tuần (Thứ 2, 4, 6, 7) bằng dòng máy bay Boeing 787-9 trang bị khoang Phổ thông Cao cấp thế hệ mới. Chuyến bay đầu tiên cất cánh từ ngày 26/06/2026.",
      },
      {
        heading: "Lịch bay nối chuyến thuận tiện từ Việt Nam",
        body: "Chặng Việt Nam – Đài Bắc: BR398 (HAN – TPE: 18:00 – 21:55), BR384 (DAD – TPE: 12:55 – 16:45), BR382 (SGN – TPE: 01:50 – 06:10). Chặng Đài Bắc – Washington D.C: BR004 (TPE – IAD: 10:10 – 13:00).",
      },
    ],
    notes: [
      "Kết nối dễ dàng từ Hà Nội, Đà Nẵng và TP.HCM qua điểm trung chuyển Đài Bắc.",
      "Khoang Phổ thông Cao cấp mới nhất trên Boeing 787-9 mang lại sự thoải mái cho hành trình dài.",
    ],
  },
  {
    id: 4,
    title: "STARLUX AIRLINES MỞ ĐƯỜNG BAY ĐẾN PRAHA (CỘNG HÒA SÉC)",
    excerpt:
      "STARLUX Airlines công bố đường bay mới từ Đài Bắc đến Praha (Cộng hòa Séc), chính thức khai thác từ ngày 01/08/2026 chỉ với 1 điểm trung chuyển từ Việt Nam.",
    image:
      "https://dulichenviet.vn/wp-content/uploads/2026/03/z7629247008205_776682d76168586b1beee770fe93bf2d-1024x1024.jpg",
    date: "03/2026",
    category: "Đường bay mới",
    categoryColor: "bg-blue-50 text-[#1e64ae] border-blue-200",
    sections: [
      {
        heading: "Kết nối Việt Nam – Trung Âu cùng hãng hàng không 5 sao STARLUX",
        body: "Từ ngày 01/08/2026, STARLUX Airlines chính thức mở đường bay thẳng từ Đài Bắc (TPE) đến Praha (PRG – Cộng hòa Séc). Hành khách từ Việt Nam có thể dễ dàng đặt chân đến “trái tim châu Âu” chỉ với một điểm dừng trung chuyển tại Đài Bắc.",
      },
      {
        heading: "Lịch bay dự kiến khai thác bằng Airbus A350-900",
        body: "Giai đoạn khởi đầu (01/08 – 30/09/2026): Tần suất 3 chuyến/tuần vào Thứ 3, Thứ 5, Thứ 7. Chuyến đi JX101 (TPE → PRG: 00:10 – 07:50 giờ địa phương); Chuyến về JX102 (PRG → TPE: 10:20 – 05:10+1 giờ địa phương). Từ 01/10/2026 dự kiến tăng tần suất khai thác mùa cao điểm.",
      },
    ],
  },
  {
    id: 5,
    title: "CẬP NHẬT QUAN TRỌNG: SƠ ĐỒ KHAI THÁC CÁC HÃNG NỘI ĐỊA TẠI SÂN BAY TÂN SƠN NHẤT",
    excerpt:
      "Cập nhật vị trí các nhà ga và quầy làm thủ tục mới nhất của các hãng hàng không nội địa tại Cảng HKQT Tân Sơn Nhất (Nhà ga T1, T2 và Nhà ga mới T3).",
    image:
      "https://dulichenviet.vn/wp-content/uploads/2026/03/z7629259817644_583db817f26ee8bafc427bbf41351b2b-1024x687.jpg",
    date: "03/2026",
    category: "Quy định & Thủ tục bay",
    categoryColor: "bg-amber-50 text-amber-700 border-amber-200",
    sections: [
      {
        heading: "Phân chia Nhà ga tại Cảng HKQT Tân Sơn Nhất",
        body: "Để mỗi chuyến đi luôn suôn sẻ ngay từ bước làm thủ tục, hành khách cần lưu ý sơ đồ khai thác mới nhất tại sân bay Tân Sơn Nhất: Nhà ga T1 dành riêng cho hành khách bay Vietjet Air; Nhà ga T2 (Khu vực Quốc tế) bố trí 20 quầy làm thủ tục từ A – L.",
      },
      {
        heading: "Vị trí quầy làm thủ tục tại Nhà ga T3 (Các hãng nội địa)",
        body: "Vietnam Airlines: Quầy 56 đến 109 | Bamboo Airways: Quầy 45 đến 50 | Pacific Airlines: Quầy 45 đến 1 | Vasco: Quầy 19 đến 16 | Vietravel Airlines: Quầy 25 đến 32 | Sun PhuQuoc Airways: Quầy 32 đến 39.",
      },
    ],
    notes: [
      "Kiểm tra đúng tên hãng hàng không và ký hiệu Nhà ga (T1 hay T3) trên mặt vé trước khi di chuyển ra sân bay.",
      "Có mặt trước giờ khởi hành tối thiểu 90–120 phút đối với các chuyến bay nội địa.",
    ],
  },
  {
    id: 6,
    title: "Sun PhuQuoc Airways THÔNG BÁO MỞ BÁN ĐƯỜNG BAY MỚI PHÚ QUỐC – HÀN QUỐC",
    excerpt:
      "Sun PhuQuoc Airways (9G) thông báo mở bán đường bay thẳng Phú Quốc – Hàn Quốc với tần suất 01 chuyến/ngày, khởi hành chuyến đầu tiên từ 17/04/2026.",
    image:
      "https://dulichenviet.vn/wp-content/uploads/2026/03/z7613376738807_ca1d9b4a425304936412050f140edcf2.jpg",
    date: "03/2026",
    category: "Đường bay mới",
    categoryColor: "bg-blue-50 text-[#1e64ae] border-blue-200",
    sections: [
      {
        heading: "Đường bay thẳng kết nối Đảo Ngọc Phú Quốc và Hàn Quốc",
        body: "Sun PhuQuoc Airways (mã hãng 9G) chính thức mở bán đường bay thẳng Phú Quốc – Hàn Quốc, rút ngắn tối đa thời gian di chuyển và mang đến lựa chọn bay thuận tiện cho cả du lịch nghỉ dưỡng và công tác giữa hai điểm đến.",
      },
      {
        heading: "Thông tin khai thác chính thức",
        body: "Đường bay: Phú Quốc – Hàn Quốc | Ngày mở bán: 11/03/2026 | Chuyến bay khai thác đầu tiên: 17/04/2026 | Tần suất khai thác: 01 chuyến mỗi ngày.",
      },
    ],
  },
  {
    id: 7,
    title: "CẬP NHẬT QUY ĐỊNH GIẤY TỜ LÀM THỦ TỤC BAY",
    excerpt:
      "KHẨN – Theo Phụ lục 9 ban hành kèm Thông tư 14/2026/TT-BCA ngày 03/02/2026 của Bộ Công an: Giấy phép lái xe không còn là giấy tờ hợp lệ để làm thủ tục bay nội địa.",
    image:
      "https://dulichenviet.vn/wp-content/uploads/2026/02/CAP-NHAT-QUY-DINH-GIAY-TO-LAM-THU-TUC-BAY-1-664x1024.jpg",
    gallery: [
      "https://dulichenviet.vn/wp-content/uploads/2026/02/CAP-NHAT-QUY-DINH-GIAY-TO-LAM-THU-TUC-BAY-1-664x1024.jpg",
      "https://dulichenviet.vn/wp-content/uploads/2026/02/CAP-NHAT-QUY-DINH-GIAY-TO-LAM-THU-TUC-BAY-2.jpg",
      "https://dulichenviet.vn/wp-content/uploads/2026/02/CAP-NHAT-QUY-DINH-GIAY-TO-LAM-THU-TUC-BAY-3.jpg",
    ],
    date: "02/2026",
    category: "Quy định & Thủ tục bay",
    categoryColor: "bg-amber-50 text-amber-700 border-amber-200",
    sections: [
      {
        heading: "Thay đổi quan trọng theo Thông tư 14/2026/TT-BCA",
        body: "Theo Phụ lục 9 ban hành kèm Thông tư 14/2026/TT-BCA ngày 03/02/2026 của Bộ Công an: GIẤY PHÉP LÁI XE KHÔNG CÒN là giấy tờ hợp lệ để làm thủ tục đi tàu bay trên các chuyến bay nội địa.",
      },
      {
        heading: "Khuyến nghị chuẩn bị giấy tờ tùy thân hợp lệ",
        body: "Hành khách cần chủ động mang theo CCCD/Thẻ Căn cước còn hạn, Hộ chiếu còn hạn hoặc sử dụng tài khoản định danh điện tử VNeID mức 2 để thực hiện check-in và qua cửa an ninh hàng không thuận lợi.",
      },
    ],
    notes: [
      "Kiểm tra hạn sử dụng CCCD, Căn cước hoặc Hộ chiếu trước ngày bay.",
      "Trẻ em dưới 14 tuổi sử dụng Giấy khai sinh bản chính hoặc bản sao trích lục hợp lệ.",
    ],
  },
  {
    id: 8,
    title: "ÉN VIỆT | Sun Phú Quốc Airways (SPA) CHÍNH THỨC MỞ BÁN VÉ 15/10/2025",
    excerpt:
      "Từ ngày 15/10/2025, Sun Phú Quốc Airways (SPA) chính thức mở bán vé các đường bay nội địa kết nối đảo ngọc Phú Quốc và cất cánh từ ngày 01/11/2025.",
    image:
      "https://dulichenviet.vn/wp-content/uploads/2025/10/z7119190363875_f5b95ecfa53bc60c24f5f1b932e43906-1024x683.jpg",
    date: "10/2025",
    category: "Đường bay mới",
    categoryColor: "bg-blue-50 text-[#1e64ae] border-blue-200",
    sections: [
      {
        heading: "Hãng hàng không mới kết nối Đảo Ngọc Phú Quốc",
        body: "Từ ngày 15/10/2025, Sun Phú Quốc Airways (SPA) chính thức mở bán vé cho các đường bay nội địa trong giai đoạn đầu ra mắt. Những chuyến bay thương mại đầu tiên chính thức cất cánh từ ngày 01/11/2025, mở ra thêm lựa chọn bay chất lượng đến thiên đường biển đảo Phú Quốc.",
      },
      {
        heading: "Đặt vé Sun Phú Quốc Airways dễ dàng tại Én Việt",
        body: "Én Việt Tour & Event hỗ trợ tra cứu lịch bay, giữ chỗ, xuất vé nhanh và tư vấn combo vé máy bay – khách sạn – tour nghỉ dưỡng Phú Quốc trọn gói với mức giá cạnh tranh.",
      },
    ],
  },
  {
    id: 9,
    title: "KHÁM PHÁ NƯỚC MỸ “NHƯ NGƯỜI BẢN ĐỊA” CÙNG CHINA AIRLINES! 2025",
    excerpt:
      "China Airlines kết hợp cùng Southwest Airlines (WN) giúp bạn dễ dàng nối chuyến từ Phoenix (PHX) đến Salt Lake City, Sacramento, Oklahoma City và Tampa.",
    image:
      "https://dulichenviet.vn/wp-content/uploads/2025/10/My-1-1024x1024.jpg",
    gallery: [
      "https://dulichenviet.vn/wp-content/uploads/2025/10/My-1-1024x1024.jpg",
      "https://dulichenviet.vn/wp-content/uploads/2025/10/My-2.jpg",
      "https://dulichenviet.vn/wp-content/uploads/2025/10/My-3.jpg",
      "https://dulichenviet.vn/wp-content/uploads/2025/10/My-4.jpg",
    ],
    date: "10/2025",
    category: "Ưu đãi vé",
    categoryColor: "bg-red-50 text-red-600 border-red-200",
    sections: [
      {
        heading: "Liên danh China Airlines × Southwest Airlines nối chuyến nước Mỹ",
        body: "China Airlines kết hợp cùng hãng hàng không nội địa Southwest Airlines (WN) mang đến hành trình nối chuyến liền mạch từ Phoenix (PHX) đến hàng loạt thành phố đậm chất bản địa khắp nước Mỹ.",
      },
      {
        heading: "4 điểm đến trải nghiệm “local” không thể bỏ lỡ",
        body: "1. Salt Lake City (SLC): Trải nghiệm hiking, leo núi tại American Fork hùng vĩ. 2. Sacramento (SMF): Đạp xe dọc bờ sông American và khám phá phố cổ Old Sacramento. 3. Oklahoma City (OKC): Dạo chơi khu Bricktown và thưởng thức BBQ miền Tây chính hiệu. 4. Tampa (TPA): Ngắm hoàng hôn ngoạn mục bên bờ biển Clearwater Beach.",
      },
    ],
  },
  {
    id: 10,
    title: "Vé Máy Bay Giá Rẻ 2025 – Bí Quyết Săn Vé Đúng Thời Điểm",
    excerpt:
      "Khám phá bí quyết đặt vé máy bay giá rẻ đi Anh, Canada, Đài Loan năm 2025. Cập nhật mẹo săn vé, thời điểm đặt vé tốt nhất và ưu đãi hấp dẫn từ Du Lịch Sự Kiện Én Việt.",
    image:
      "https://dulichenviet.vn/wp-content/uploads/2025/04/dat-ve-doan-1024x640.webp",
    date: "04/2025",
    category: "Cẩm nang săn vé",
    categoryColor: "bg-emerald-50 text-[#00A651] border-emerald-200",
    sections: [
      {
        heading: "1. Vì sao nên săn vé máy bay giá rẻ từ sớm?",
        body: "Lên kế hoạch đặt vé sớm giúp tiết kiệm từ 30–50% chi phí di chuyển, đặc biệt trên các đường bay dài quốc tế đi Anh, Canada, Mỹ hay Đài Loan, đồng thời dễ dàng chọn được khung giờ bay đẹp và vị trí ghế ngồi ưng ý.",
      },
      {
        heading: "2. Mẹo đặt vé máy bay giá rẻ hiệu quả",
        body: "Đặt vé trước ngày khởi hành từ 2–3 tháng để đón mức giá gốc tốt nhất; ưu tiên tìm và đặt vé vào khung giờ sáng sớm hoặc đêm muộn; linh hoạt lựa chọn hành trình bay nối chuyến và theo dõi các đợt flash sale định kỳ qua hệ thống đại lý chính thức Én Việt.",
      },
    ],
    notes: [
      "Én Việt hỗ trợ xuất vé đoàn công ty, vé du học, vé thăm thân và vé hành hương với chính sách hành lý ưu đãi.",
      "Hotline hỗ trợ báo giá vé nội địa & quốc tế 24/7: 0983.056.056.",
    ],
  },
];

const CATEGORIES = ["Tất cả", "Ưu đãi vé", "Đường bay mới", "Quy định & Thủ tục bay", "Cẩm nang săn vé"] as const;

const FLIGHT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1000&q=85";

export function VeMayBayPage({ openForm }: { openForm?: () => void }) {
  const { lang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePost, setActivePost] = useState<FlightPost | null>(null);

  const filteredPosts = useMemo(() => {
    return FLIGHT_POSTS.filter((post) => {
      const matchCat = selectedCategory === "Tất cả" || post.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  if (activePost) {
    return (
      <div className="relative z-10 pt-10 pb-24 min-h-screen bg-transparent">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => {
              setActivePost(null);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#003B5C] font-bold text-xs shadow-sm hover:bg-gray-50 transition-all mb-6 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t(lang, "Quay lại danh sách tin vé máy bay", "Back to flight news")}</span>
          </button>

          <article className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
            <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-100">
              <img
                src={activePost.image}
                alt={activePost.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = FLIGHT_FALLBACK_IMAGE;
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/95 text-[#003B5C] text-xs font-black uppercase tracking-wide">
                    {activePost.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-xs font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {activePost.date}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black leading-snug drop-shadow-md">
                  {activePost.title}
                </h1>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <p className="text-base sm:text-lg font-semibold text-[#003B5C] leading-relaxed bg-blue-50/70 border-l-4 border-[#1e64ae] p-4 rounded-r-2xl">
                {activePost.excerpt}
              </p>

              <div className="space-y-6">
                {activePost.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h2 className="text-lg font-black text-[#003B5C] flex items-center gap-2">
                      <Plane className="w-4 h-4 text-[#00A651] shrink-0" />
                      <span>{sec.heading}</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{sec.body}</p>
                  </div>
                ))}
              </div>

              {activePost.gallery && activePost.gallery.length > 1 && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-black uppercase tracking-wider text-[#003B5C] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1e64ae]" />
                    <span>Hình ảnh & Thông báo đính kèm</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activePost.gallery.map((imgUrl, idx) => (
                      <div key={idx} className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
                        <img
                          src={imgUrl}
                          alt={`${activePost.title} - ${idx + 1}`}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = FLIGHT_FALLBACK_IMAGE;
                          }}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activePost.notes && activePost.notes.length > 0 && (
                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2.5">
                  <div className="font-black text-sm text-[#003B5C] uppercase">Lưu ý quan trọng từ Én Việt</div>
                  <ul className="space-y-2">
                    {activePost.notes.map((n, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#00A651] shrink-0 mt-0.5" />
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Consultation Footer CTA */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Tổng đại lý vé máy bay chính thức
                  </div>
                  <div className="text-base font-black text-[#003B5C]">
                    Hỗ trợ tra giá, giữ chỗ & xuất vé nội địa – quốc tế 24/7
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="tel:0983056056"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-[#1e64ae] text-[#1e64ae] hover:bg-[#1e64ae] hover:text-white font-black text-sm transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>0983.056.056</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => openForm?.()}
                    className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-[#1e64ae] to-[#00A651] hover:brightness-110 text-white font-black text-sm shadow-lg transition-all cursor-pointer uppercase tracking-wide"
                  >
                    {t(lang, "Đăng Ký Tư Vấn Vé", "Request Flight Quote")}
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 pb-24 min-h-screen bg-transparent">
      {/* ── Page Hero Header sharing unified continuous backdrop ── */}
      <div data-unified-hero-end className="pt-11 pb-13 md:pt-12 md:pb-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Motion.div
            initial={{ opacity: 0.92 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <h1 className="text-3xl md:text-5xl font-black text-[#003B5C] tracking-tight mb-4">
              {t(lang, "Vé Máy Bay – Tin Tức & Ưu Đãi Hàng Không", "Flight Tickets – Airline News & Deals")}
            </h1>
            <p className="text-[#134E6F] max-w-2xl mx-auto text-sm md:text-base font-medium">
              {t(
                lang,
                "Cập nhật liên tục đường bay mới, vé khuyến mãi 0Đ, quy định giấy tờ hàng không và sơ đồ khai thác tại sân bay Tân Sơn Nhất.",
                "Stay updated on new flight routes, 0 VND promo deals, aviation ID regulations, and airport terminal guides."
              )}
            </p>
          </Motion.div>
        </div>
      </div>

      {/* ── Filter Bar & Search ── */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-[0_10px_30px_-10px_rgba(0,59,92,0.08)] border border-gray-100 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-[#1e64ae] to-[#00A651] text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative lg:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t(lang, "Tìm hãng bay, sân bay, quy định...", "Search airlines, routes, rules...")}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold text-[#003B5C] focus:outline-none focus:ring-2 focus:ring-[#1e64ae]/25 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* ── Articles Grid ── */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-sm">
            <Plane className="w-12 h-12 text-[#1e64ae] mx-auto mb-4 opacity-70" />
            <h3 className="text-lg font-black text-[#003B5C] mb-2">Không tìm thấy bài viết phù hợp</h3>
            <p className="text-sm text-gray-500 mb-5">Vui lòng thử từ khóa khác hoặc đặt lại bộ lọc danh mục.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("Tất cả");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1e64ae] to-[#00A651] text-white text-xs font-black uppercase cursor-pointer"
            >
              Xem Tất Cả Tin Vé Máy Bay
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPosts.map((post, idx) => (
              <Motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                onClick={() => {
                  setActivePost(post);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_12px_35px_-12px_rgba(0,59,92,0.1)] hover:shadow-[0_20px_45px_-12px_rgba(30,100,174,0.2)] transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1.5"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = FLIGHT_FALLBACK_IMAGE;
                    }}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-black border shadow-sm bg-white/95 backdrop-blur-sm ${post.categoryColor}`}
                    >
                      <Tag className="w-3 h-3" />
                      <span>{post.category}</span>
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 text-white text-xs font-bold flex items-center gap-1.5 drop-shadow">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-base sm:text-lg font-black text-[#003B5C] leading-snug line-clamp-2 mb-3 group-hover:text-[#1e64ae] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-5">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-black text-[#1e64ae] group-hover:text-[#00A651] transition-colors uppercase tracking-wide flex items-center gap-1.5">
                      <span>{t(lang, "Xem chi tiết", "Read more")}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[11px] font-bold text-gray-400">Én Việt Air</span>
                  </div>
                </div>
              </Motion.article>
            ))}
          </div>
        )}

        {/* ── Direct Ticket Consultation Banner ── */}
        <div className="mt-14 rounded-[2rem] bg-gradient-to-r from-[#003B5C] via-[#1e64ae] to-[#00A651] p-7 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 colored-banner-sheen">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-black uppercase tracking-widest text-[#00E676]">
              Hỗ Trợ Đặt Vé Nội Địa & Quốc Tế 24/7
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              Cần Tra Giá Vé Hoặc Đặt Vé Đoàn?
            </h3>
            <p className="text-sm text-white/85 max-w-xl">
              Đội ngũ tư vấn Én Việt hỗ trợ giữ chỗ nhanh, săn vé khuyến mãi các hãng Vietnam Airlines, Vietjet, Bamboo, Starlux, EVA Air, China Airlines...
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:0983056056"
              className="px-6 py-3.5 rounded-2xl bg-white text-[#003B5C] hover:bg-gray-100 font-black text-sm flex items-center gap-2 shadow-md transition-all"
            >
              <Phone className="w-4 h-4 text-[#00A651]" />
              <span>0983.056.056</span>
            </a>
            <button
              type="button"
              onClick={() => openForm?.()}
              className="px-7 py-3.5 rounded-2xl bg-[#00A651] hover:bg-emerald-500 text-white font-black text-sm shadow-lg transition-all cursor-pointer uppercase tracking-wide"
            >
              Đăng Ký Tư Vấn Vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}