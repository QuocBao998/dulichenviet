import { useState, useEffect } from "react";
import { motion as Motion } from "motion/react";
import { ArrowRight, Calendar, Clock, Tag, ChevronLeft } from "lucide-react";

interface NewsPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  sections: { heading: string; body: string }[];
}

const BASE = "https://dulichenviet.vn/wp-content/uploads/";

const newsPosts: NewsPost[] = [
  {
    id: 1,
    title: "Khai Báo Y Tế Từ 01/7/2026 – Những Điều Bạn Cần Biết",
    excerpt: "Từ ngày 01/7/2026, hành khách nhập cảnh vào Việt Nam phải thực hiện khai báo y tế điện tử theo quy định mới của Bộ Y tế.",
    image: BASE + "2026/07/z7996110442706_6a965d50619ffbdb4182a5f04e5794ce.jpg",
    date: "01/07/2026",
    readTime: "3 phút",
    category: "Tin tức du lịch",
    categoryColor: "bg-blue-100 text-blue-700",
    sections: [
      { heading: "Quy định mới có hiệu lực từ 01/7/2026", body: "Bộ Y tế ban hành quy định bắt buộc khai báo y tế điện tử với tất cả hành khách nhập cảnh vào Việt Nam. Hành khách cần điền đầy đủ thông tin sức khỏe trước khi lên máy bay." },
      { heading: "Cách thực hiện khai báo y tế", body: "Hành khách truy cập cổng thông tin khai báo y tế trực tuyến, điền thông tin cá nhân, thông tin chuyến bay và trả lời các câu hỏi về sức khỏe. Mã QR sẽ được cấp ngay sau khi hoàn thành." },
      { heading: "Lưu ý quan trọng", body: "Hành khách không khai báo hoặc khai báo không đầy đủ có thể bị từ chối nhập cảnh. EnViet Tour hỗ trợ khách hàng thực hiện khai báo y tế khi đặt tour." },
    ],
  },
  {
    id: 2,
    title: "Thông Báo Khai Báo Thông Tin Nhập Cảnh Tại Sân Bay Tân Sơn Nhất",
    excerpt: "Cục Quản lý Xuất nhập cảnh thông báo về quy trình khai báo thông tin hành khách mới tại cửa khẩu hàng không Tân Sơn Nhất, áp dụng từ tháng 4/2026.",
    image: BASE + "2026/04/THONG-DIEP-NHAP-CNAH-1.jpg",
    date: "17/04/2026",
    readTime: "4 phút",
    category: "Tin tức du lịch",
    categoryColor: "bg-blue-100 text-blue-700",
    sections: [
      { heading: "Hệ thống khai báo điện tử mới", body: "Sân bay Tân Sơn Nhất triển khai hệ thống khai báo thông tin hành khách điện tử thế hệ mới, giúp rút ngắn thời gian làm thủ tục nhập cảnh xuống còn 2-3 phút." },
      { heading: "Quy trình thực hiện", body: "Hành khách nhập cảnh cần truy cập ứng dụng hoặc website được chỉ định, khai báo thông tin theo biểu mẫu điện tử trước khi đến cửa khẩu để nhận mã xác nhận." },
      { heading: "Hỗ trợ từ EnViet Tour", body: "Đội ngũ EnViet Tour sẽ hỗ trợ hướng dẫn khách hàng hoàn thành thủ tục khai báo, đảm bảo hành trình của bạn diễn ra suôn sẻ." },
    ],
  },
  {
    id: 3,
    title: "Dự Án Âm Nhạc S.H.E – Hành Trình Nghệ Thuật 2026",
    excerpt: "EnViet Tour vinh dự đồng hành cùng dự án âm nhạc S.H.E trong hành trình kết nối nghệ thuật và du lịch văn hóa năm 2026.",
    image: BASE + "2026/03/HAN-HANH-DONG-HANH-DU-AN-2026-6.jpg",
    date: "18/03/2026",
    readTime: "5 phút",
    category: "Nhật ký du lịch",
    categoryColor: "bg-purple-100 text-purple-700",
    sections: [
      { heading: "Sự kiện âm nhạc đặc biệt", body: "Dự án âm nhạc S.H.E 2026 quy tụ các nghệ sĩ tài năng trong một hành trình sáng tạo kết hợp biểu diễn và khám phá văn hóa địa phương trên khắp Việt Nam." },
      { heading: "EnViet Tour đồng hành", body: "Với vai trò đối tác du lịch chính thức, EnViet Tour đảm nhận toàn bộ công tác logistics, di chuyển và tổ chức trải nghiệm văn hóa cho toàn đoàn nghệ sĩ." },
      { heading: "Điểm đến trong hành trình", body: "Đoàn đã đi qua nhiều tỉnh thành từ Hà Nội, Huế, Đà Nẵng đến TP.HCM, ghi lại những khoảnh khắc đẹp về con người và văn hóa Việt Nam." },
    ],
  },
  {
    id: 4,
    title: "Rừng Sác Cần Giờ – Hành Trình Xanh Cùng Công Ty Cổ Phần 28.1",
    excerpt: "Chuyến team building đặc biệt tại Rừng Sác Cần Giờ dành cho cán bộ, nhân viên Công ty Cổ phần 28.1 – khám phá thiên nhiên và gắn kết đội nhóm.",
    image: BASE + "2026/01/Cong-ty-Co-phan-28.1-3.jpg",
    date: "31/01/2026",
    readTime: "4 phút",
    category: "Nhật ký du lịch",
    categoryColor: "bg-purple-100 text-purple-700",
    sections: [
      { heading: "Điểm đến: Rừng Sác Cần Giờ", body: "Khu dự trữ sinh quyển Rừng Sác Cần Giờ – Di sản thiên nhiên thế giới UNESCO – là điểm đến lý tưởng cho các hoạt động team building kết hợp bảo tồn môi trường." },
      { heading: "Các hoạt động nổi bật", body: "Đoàn tham gia chèo thuyền kayak khám phá rừng ngập mặn, trải nghiệm câu cá, nướng BBQ và các trò chơi gắn kết đội nhóm độc đáo trong không gian thiên nhiên hoang sơ." },
      { heading: "Ý nghĩa chuyến đi", body: "Chuyến đi không chỉ giúp các thành viên thư giãn sau những ngày làm việc căng thẳng mà còn nâng cao tinh thần đoàn kết và ý thức bảo vệ môi trường sinh thái." },
    ],
  },
  {
    id: 5,
    title: "Hành Trình Xưởng Kết Cấu Thép 1 – Trải Nghiệm Đáng Nhớ",
    excerpt: "EnViet Tour tổ chức thành công chuyến tham quan và nghỉ dưỡng cho đội ngũ cán bộ Xưởng Kết Cấu Thép 1, mang lại những kỷ niệm đẹp đầu năm 2026.",
    image: BASE + "2026/01/Xuong-Ket-Cau-Thep-1-2.jpg",
    date: "31/01/2026",
    readTime: "3 phút",
    category: "Nhật ký du lịch",
    categoryColor: "bg-purple-100 text-purple-700",
    sections: [
      { heading: "Chuyến đi đặc biệt đầu năm", body: "Nhân dịp đầu xuân năm mới, Xưởng Kết Cấu Thép 1 tổ chức chuyến du lịch nghỉ dưỡng cho toàn bộ cán bộ nhân viên nhằm tri ân những đóng góp trong suốt năm qua." },
      { heading: "Lịch trình và hoạt động", body: "Đoàn tham quan các địa danh nổi tiếng, trải nghiệm ẩm thực địa phương và tham gia các hoạt động vui chơi, giải trí do EnViet Tour tổ chức chu đáo." },
      { heading: "Phản hồi từ đoàn khách", body: "Các thành viên đều bày tỏ sự hài lòng với chất lượng dịch vụ và công tác tổ chức chuyên nghiệp của EnViet Tour. Chuyến đi để lại nhiều kỷ niệm đẹp cho cả đoàn." },
    ],
  },
  {
    id: 6,
    title: "Vietnam Airlines Chính Thức Cung Cấp Dịch Vụ Internet Trên Tàu Bay",
    excerpt: "Từ đầu năm 2026, Vietnam Airlines triển khai dịch vụ internet tốc độ cao trên nhiều chuyến bay quốc tế và nội địa, nâng cao trải nghiệm hành khách.",
    image: BASE + "2026/01/Vietnam-Airlines-chinh-thuc-cung-cap-dich-vu-internet-tren-tau-bay-1.jpg",
    date: "05/01/2026",
    readTime: "4 phút",
    category: "Tin tức du lịch",
    categoryColor: "bg-blue-100 text-blue-700",
    sections: [
      { heading: "Dịch vụ internet trên không trung", body: "Vietnam Airlines lắp đặt hệ thống wifi tốc độ cao Ku-band và Ka-band trên các máy bay thế hệ mới, cho phép hành khách kết nối internet trong suốt hành trình bay." },
      { heading: "Gói cước và cách đăng ký", body: "Hành khách có thể chọn gói dữ liệu theo nhu cầu, từ gói 100MB cho đến gói không giới hạn trong một chuyến bay. Đăng ký trực tiếp thông qua màn hình ghế ngồi hoặc thiết bị cá nhân." },
      { heading: "Phủ sóng các tuyến đường", body: "Dịch vụ internet hiện có trên hầu hết các chuyến bay quốc tế và đang được mở rộng dần sang các tuyến nội địa trong năm 2026." },
    ],
  },
  {
    id: 7,
    title: "TOUR TẾT QUỐC TẾ 2026 – Đón Xuân Ở Trời Tây",
    excerpt: "Chào đón năm mới 2026 bằng những hành trình khám phá thế giới cùng EnViet Tour – các tour Tết quốc tế hấp dẫn đến Châu Âu, Nhật Bản, Hàn Quốc.",
    image: BASE + "2025/12/TOUR-TET-QUOC-TE-2.jpg",
    date: "29/12/2025",
    readTime: "5 phút",
    category: "Khuyến mãi",
    categoryColor: "bg-red-100 text-red-700",
    sections: [
      { heading: "Các điểm đến Tết Quốc tế 2026", body: "EnViet Tour giới thiệu loạt tour Tết đặc biệt đến Nhật Bản mùa hoa mận, Hàn Quốc tuyết trắng, Châu Âu lãng mạn và các điểm đến Đông Nam Á gần gũi." },
      { heading: "Ưu đãi đặc biệt mùa Tết", body: "Đặt tour Tết trước ngày 15/12/2025 được giảm đến 15% và tặng gói bảo hiểm du lịch toàn diện trị giá 500.000đ/người." },
      { heading: "Dịch vụ đi kèm", body: "Tất cả tour Tết quốc tế đều bao gồm hỗ trợ xin visa, vé máy bay, khách sạn 4-5 sao, hướng dẫn viên song ngữ và các bữa ăn đặc sắc theo lịch trình." },
    ],
  },
  {
    id: 8,
    title: "YEAR END PARTY 2025 – EnViet Tour Tri Ân Khách Hàng",
    excerpt: "EnViet Tour tổ chức tiệc tổng kết năm 2025 hoành tráng, tri ân đối tác và khách hàng đã đồng hành cùng công ty suốt một năm đầy thành công.",
    image: BASE + "2025/12/year-end-party.jpg",
    date: "29/12/2025",
    readTime: "3 phút",
    category: "Nhật ký du lịch",
    categoryColor: "bg-purple-100 text-purple-700",
    sections: [
      { heading: "Đêm tiệc Year End Party 2025", body: "Sự kiện Year End Party 2025 của EnViet Tour quy tụ hơn 200 đối tác, khách hàng thân thiết và toàn thể nhân viên trong không khí ấm cúng và rực rỡ." },
      { heading: "Nhìn lại năm 2025", body: "Năm 2025 đánh dấu nhiều cột mốc quan trọng: đạt 10.000+ lượt khách phục vụ, mở rộng thêm 20 điểm đến mới và nhận nhiều giải thưởng uy tín ngành du lịch." },
      { heading: "Hướng tới năm 2026", body: "Ban lãnh đạo chia sẻ kế hoạch phát triển năm 2026 với nhiều chương trình tour mới, nâng cao chất lượng dịch vụ và mở rộng thị trường quốc tế." },
    ],
  },
  {
    id: 9,
    title: "DỊCH VỤ FAST TRACK – Thủ Tục Nhanh Tại Sân Bay",
    excerpt: "EnViet Tour cung cấp dịch vụ Fast Track hỗ trợ hành khách làm thủ tục check-in, an ninh và xuất nhập cảnh nhanh chóng tại các sân bay lớn.",
    image: BASE + "2025/12/DICH-VU-FAST-TRACK-.jpg",
    date: "29/12/2025",
    readTime: "4 phút",
    category: "Tin tức du lịch",
    categoryColor: "bg-blue-100 text-blue-700",
    sections: [
      { heading: "Dịch vụ Fast Track là gì?", body: "Fast Track là dịch vụ hỗ trợ hành khách được ưu tiên làm thủ tục tại sân bay, bỏ qua hàng chờ thông thường, giúp tiết kiệm thời gian và tránh lo lắng về giờ bay." },
      { heading: "Các sân bay áp dụng", body: "EnViet Tour cung cấp dịch vụ Fast Track tại sân bay Tân Sơn Nhất (SGN), Nội Bài (HAN), Đà Nẵng (DAD) và nhiều sân bay quốc tế tại Đông Nam Á." },
      { heading: "Cách đặt dịch vụ", body: "Khách hàng đặt dịch vụ Fast Track khi mua tour hoặc liên hệ trực tiếp hotline EnViet Tour ít nhất 48 giờ trước chuyến bay. Giá dịch vụ từ 300.000đ/người." },
    ],
  },
  {
    id: 10,
    title: "TOUR TẾT NỘI ĐỊA 2026 – Khám Phá Việt Nam Ngày Xuân",
    excerpt: "Hành trình khám phá vẻ đẹp Việt Nam trong những ngày Tết Nguyên Đán 2026 cùng EnViet Tour – thiên nhiên, văn hóa và ẩm thực tuyệt vời.",
    image: BASE + "2025/12/TOUR-TET-NOI-DIA-2.jpg",
    date: "29/12/2025",
    readTime: "5 phút",
    category: "Khuyến mãi",
    categoryColor: "bg-red-100 text-red-700",
    sections: [
      { heading: "Tour Tết nội địa hấp dẫn", body: "Từ Sa Pa băng giá đến Hà Giang hoa đào, từ Hội An đèn lồng đến Phú Quốc biển xanh – EnViet Tour mang đến những hành trình Tết nội địa đặc sắc nhất." },
      { heading: "Ưu đãi Tết nội địa", body: "Đặt tour Tết nội địa nhận ngay ưu đãi giảm 10%, tặng quà Tết đặc biệt và được ưu tiên bố trí phòng khách sạn gần trung tâm các điểm đến." },
      { heading: "Dịch vụ trọn gói", body: "Xe đưa đón, hướng dẫn viên nhiệt tình, bữa ăn đặc sản vùng miền và chương trình giải trí phong phú suốt hành trình đảm bảo mang lại Tết vui cho cả gia đình." },
    ],
  },
  {
    id: 11,
    title: "THÔNG BÁO QUAN TRỌNG – Nhập Cảnh Đài Loan Có Sự Thay Đổi",
    excerpt: "Văn phòng Kinh tế và Văn hóa Đài Bắc thông báo thay đổi quy định nhập cảnh Đài Loan áp dụng từ quý IV/2025, du khách Việt cần cập nhật thông tin.",
    image: BASE + "2025/09/z7016455930057_162a352b009315e84b32414d62783d34.jpg",
    date: "16/09/2025",
    readTime: "4 phút",
    category: "Tư vấn du lịch",
    categoryColor: "bg-green-100 text-green-700",
    sections: [
      { heading: "Thay đổi chính sách visa Đài Loan", body: "Đài Loan điều chỉnh một số yêu cầu về hồ sơ xin visa du lịch, trong đó bổ sung yêu cầu chứng minh tài chính và lịch sử đi lại trong 2 năm gần nhất." },
      { heading: "Đối tượng được miễn visa", body: "Công dân Việt Nam có visa còn hạn của Mỹ, Nhật Bản, EU hoặc Schengen có thể được miễn visa vào Đài Loan theo chính sách hiện hành. Cần kiểm tra điều kiện cụ thể trước khi đi." },
      { heading: "Tư vấn từ EnViet Tour", body: "Đội ngũ tư vấn visa của EnViet Tour sẽ hỗ trợ bạn kiểm tra hồ sơ, chuẩn bị đầy đủ giấy tờ và nộp visa Đài Loan với tỷ lệ đậu cao nhất." },
    ],
  },
  {
    id: 12,
    title: "Emirates – Quy Định Sử Dụng Pin Dự Phòng Trên Máy Bay",
    excerpt: "Hãng hàng không Emirates cập nhật quy định về mang và sử dụng pin dự phòng (power bank) trên các chuyến bay, hành khách cần nắm rõ trước khi lên máy bay.",
    image: BASE + "2025/08/EK-Quy-dinh-su-dung-pin-du-phong-tren-may-bay.jpg",
    date: "14/08/2025",
    readTime: "3 phút",
    category: "Cẩm nang du lịch",
    categoryColor: "bg-yellow-100 text-yellow-700",
    sections: [
      { heading: "Quy định mới của Emirates", body: "Emirates yêu cầu tất cả pin dự phòng phải được mang theo hành lý xách tay, không được ký gửi. Dung lượng tối đa cho phép là 100Wh/pin, và mỗi hành khách chỉ được mang tối đa 2 pin." },
      { heading: "Cách tính dung lượng pin", body: "Dung lượng tính theo công thức: Wh = mAh × V / 1000. Pin 20.000mAh/3.7V = 74Wh (được phép); pin 30.000mAh/3.7V = 111Wh (cần xin phép hãng bay)." },
      { heading: "Lưu ý khi qua kiểm tra an ninh", body: "Hành khách nên để pin dự phòng dễ lấy ra khi qua cửa an ninh. Pin bị cấm nếu không có thông tin nhà sản xuất hoặc dung lượng không rõ ràng." },
    ],
  },
  {
    id: 13,
    title: "Vi Vu Miền Tây – Xí Nghiệp Nhuộm Trải Nghiệm Sông Nước",
    excerpt: "Chuyến tham quan miền Tây sông nước đặc sắc dành cho cán bộ công nhân viên Xí Nghiệp Nhuộm – khám phá văn hóa đồng bằng sông Cửu Long.",
    image: BASE + "2025/08/xn-nhuom-1.jpg",
    date: "05/08/2025",
    readTime: "4 phút",
    category: "Nhật ký du lịch",
    categoryColor: "bg-purple-100 text-purple-700",
    sections: [
      { heading: "Hành trình miền Tây sông nước", body: "Đoàn khởi hành từ TP.HCM, khám phá vùng đất miền Tây với những dòng kênh xanh mát, vườn trái cây trĩu quả và những điệu đờn ca tài tử đặc trưng." },
      { heading: "Trải nghiệm văn hóa địa phương", body: "Các thành viên được tham quan chợ nổi Cái Răng, học làm bánh dân gian, nghe nhạc tài tử và thưởng thức các món ăn đặc sản miền Tây đậm đà hương vị quê hương." },
      { heading: "Kỷ niệm đáng nhớ", body: "Chuyến đi để lại nhiều ấn tượng đẹp, tăng cường sự gắn kết giữa các thành viên và giúp mọi người tái tạo năng lượng sau những ngày làm việc bận rộn." },
    ],
  },
  {
    id: 14,
    title: "Vi Vu Vũng Tàu – Tổng Công Ty 28 Nghỉ Dưỡng Biển",
    excerpt: "EnViet Tour đồng hành cùng Tổng Công Ty 28 trong chuyến nghỉ dưỡng biển Vũng Tàu, mang đến kỳ nghỉ sảng khoái và đầy ắp kỷ niệm.",
    image: BASE + "2025/07/cty-28-2.jpg",
    date: "24/07/2025",
    readTime: "3 phút",
    category: "Nhật ký du lịch",
    categoryColor: "bg-purple-100 text-purple-700",
    sections: [
      { heading: "Điểm đến: Vũng Tàu – thành phố biển gần TP.HCM", body: "Vũng Tàu – điểm nghỉ dưỡng biển yêu thích cách TP.HCM chỉ 90km – luôn là lựa chọn hoàn hảo cho các chuyến team building và nghỉ dưỡng ngắn ngày của các doanh nghiệp." },
      { heading: "Các hoạt động tại Vũng Tàu", body: "Đoàn tham gia bơi biển, chơi các trò thể thao dưới nước, tham quan Bạch Dinh, Hải Đăng và thưởng thức hải sản tươi ngon tại các nhà hàng nổi tiếng ven biển." },
      { heading: "Dịch vụ EnViet Tour", body: "Xe đưa đón, resort 4 sao, hướng dẫn viên chuyên nghiệp và chương trình gala dinner tri ân được tổ chức chu đáo, nhận được nhiều lời khen từ đoàn khách Tổng Công Ty 28." },
    ],
  },
];

const CATEGORIES = ["Tất cả", "Tin tức du lịch", "Nhật ký du lịch", "Cẩm nang du lịch", "Tư vấn du lịch", "Khuyến mãi"];

function ArticleDetail({ post, onBack }: { post: NewsPost; onBack: () => void }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#1e64ae] font-semibold mb-6 hover:gap-3 transition-all text-sm"
      >
        <ChevronLeft className="w-4 h-4" /> Quay lại danh sách
      </button>

      <div className="relative w-full rounded-2xl overflow-hidden mb-8" style={{ aspectRatio: "16/9" }}>
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${post.categoryColor}`}>
          {post.category}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime} đọc</span>
        <span className="flex items-center gap-1.5"><Tag className="w-4 h-4" /> {post.category}</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-black text-[#003B5C] mb-6 leading-tight">{post.title}</h1>
      <p className="text-gray-600 text-base leading-relaxed mb-8 border-l-4 border-[#1e64ae] pl-4 italic">
        {post.excerpt}
      </p>

      <div className="space-y-8">
        {post.sections.map((s, i) => (
          <div key={i}>
            <h2 className="text-lg font-bold text-[#003B5C] mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#1e64ae] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </span>
              {s.heading}
            </h2>
            <p className="text-gray-700 leading-relaxed pl-9">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-gray-200 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#003B5C] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          EV
        </div>
        <div>
          <p className="font-semibold text-[#003B5C] text-sm">EnViet Tour & Event</p>
          <p className="text-xs text-gray-400">Đăng ngày {post.date}</p>
        </div>
      </div>
    </Motion.div>
  );
}

export function ThongTinPage({ defaultTab = "Tất cả" }: { defaultTab?: string }) {
  const [selected, setSelected] = useState<NewsPost | null>(null);
  const [activeCategory, setActiveCategory] = useState(defaultTab);

  useEffect(() => {
    setSelected(null);
    setActiveCategory(defaultTab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [defaultTab]);

  const filtered =
    activeCategory === "Tất cả"
      ? newsPosts
      : newsPosts.filter((p) => p.category === activeCategory);

  const featured = filtered[0] ?? null;
  const rest = filtered.slice(1);

  if (selected) {
    return (
      <div className="pt-4 pb-24 min-h-screen bg-white">
        <ArticleDetail
          post={selected}
          onBack={() => {
            setSelected(null);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
    );
  }

  return (
    <div className="pb-24 min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-gradient-to-br from-[#003B5C] to-[#1e64ae] py-12 px-4 mb-10">
        <div className="max-w-7xl mx-auto text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight"
          >
            Thông Tin Du Lịch
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-blue-200 text-base md:text-lg max-w-xl mx-auto"
          >
            Tin tức mới nhất, cẩm nang và kinh nghiệm du lịch từ EnViet Tour
          </Motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-20">Chưa có bài viết trong danh mục này.</p>
        )}

        {/* Featured post */}
        {featured && (
          <Motion.div
            key={featured.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => {
              setSelected(featured);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group cursor-pointer flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow mb-8"
          >
            <div className="md:w-[48%] relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${featured.categoryColor}`}>
                {featured.category}
              </span>
            </div>
            <div className="md:w-[52%] p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-medium">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-[#003B5C] leading-tight mb-3 group-hover:text-[#1e64ae] transition-colors line-clamp-2 min-h-[3.5rem]">
                {featured.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                {featured.excerpt}
              </p>
              <span className="flex items-center gap-1.5 text-[#1e64ae] font-bold text-sm group-hover:gap-2.5 transition-all">
                Đọc tiếp <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Motion.div>
        )}

        {/* Grid of remaining posts */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-6">
            {rest.map((post, i) => (
              <Motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onClick={() => {
                  setSelected(post);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-0.5 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2 font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#003B5C] leading-snug mb-2 group-hover:text-[#1e64ae] transition-colors line-clamp-2 min-h-[2.75rem]">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-2 min-h-[2.5rem]">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[#1e64ae] font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Đọc tiếp <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
