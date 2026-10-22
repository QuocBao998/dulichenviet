import { useState, useEffect } from "react";
import BannerVisa1 from "../../imports/Banner_visa.png";
const BannerVisa2 = BannerVisa1;
import { motion as Motion, AnimatePresence } from "motion/react";
import {
  CheckCircle, Calendar, Clock, ArrowRight,
  ChevronLeft, Tag, Globe, FileText, AlertCircle, Star,
} from "lucide-react";

/* ─── Types ─── */
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  tag: string;
  sections: { heading: string; body: string }[];
  tips: string[];
  requirements: string[];
}

/* ─── Posts — khớp với dulichenviet.vn/chuyen-muc/dich-vu-visa/dich-vu-passport/ ─── */
const passportPosts: BlogPost[] = [
  {
    id: 1,
    title: "ÉN VIỆT | Hành trình gắn kết đầu năm 2026 cùng Xưởng Kết Cấu Thép 1",
    excerpt: "Ngày 24–27/01/2026, Én Việt Tour & Event hân hạnh đồng hành cùng Xưởng Kết Cấu Thép 1 trong chuyến tham quan - team building ý nghĩa đầu năm mới.",
    image: "https://dulichenviet.vn/wp-content/uploads/2026/01/Xuong-Ket-Cau-Thep-1-2.jpg",
    date: "31/01/2026",
    readTime: "3 phút đọc",
    category: "Tin tức",
    categoryColor: "bg-orange-50 text-orange-600",
    tag: "Team Building",
    sections: [
      {
        heading: "Chuyến đi gắn kết đầu năm 2026",
        body: "Từ ngày 24 đến 27/01/2026, Én Việt Tour & Event vinh dự đồng hành cùng toàn thể cán bộ nhân viên Xưởng Kết Cấu Thép 1 trong hành trình tham quan, nghỉ dưỡng và team building đầy ý nghĩa. Chuyến đi không chỉ là khoảng thời gian nghỉ ngơi sau những ngày làm việc miệt mài mà còn là dịp để các thành viên trong đội ngũ gắn kết, chia sẻ và cùng nhau tạo nên những kỷ niệm đẹp.",
      },
      {
        heading: "Hoạt động nổi bật trong chuyến đi",
        body: "Đoàn tham gia nhiều hoạt động team building sôi nổi như thử thách vượt chướng ngại vật, trò chơi đồng đội, giao lưu văn nghệ và dạ tiệc cuối chương trình. Những hoạt động này giúp từng thành viên hiểu nhau hơn, từ đó nâng cao tinh thần đoàn kết và hiệu quả làm việc nhóm.",
      },
      {
        heading: "Dịch vụ trọn gói từ Én Việt",
        body: "Én Việt Tour & Event đảm nhận toàn bộ khâu lên kế hoạch, đặt phòng, tổ chức hoạt động và hậu cần cho đoàn. Mọi chi tiết từ phương tiện di chuyển, bố trí ăn uống đến chương trình hoạt động đều được chuẩn bị chu đáo, đảm bảo chuyến đi diễn ra suôn sẻ và đáng nhớ.",
      },
    ],
    tips: [
      "Liên hệ Én Việt sớm để nhận báo giá ưu đãi cho đoàn đông người",
      "Tùy chỉnh chương trình theo nhu cầu và ngân sách của doanh nghiệp",
    ],
    requirements: [],
  },
  {
    id: 2,
    title: "Thay Đổi Quy Trình Làm Hộ Chiếu Online Tại TP.HCM – Hỗ Trợ Làm Online 100% Từ Quý 2/2025",
    excerpt: "Bắt đầu từ tháng 5/2025, TP.HCM chính thức áp dụng quy trình làm hộ chiếu online hoàn toàn, cho phép công dân đăng ký, khai báo và nộp hồ sơ từ xa.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/12043622392de373ba3c-16763905502392136415267.webp",
    date: "21/04/2025",
    readTime: "5 phút đọc",
    category: "Dịch vụ Passport",
    categoryColor: "bg-blue-50 text-blue-600",
    tag: "Hộ chiếu online",
    sections: [
      {
        heading: "TP.HCM triển khai làm hộ chiếu online 100%",
        body: "Từ tháng 5/2025, Công an TP.HCM chính thức áp dụng quy trình cấp hộ chiếu trực tuyến hoàn toàn thông qua Cổng Dịch vụ công Quốc gia (dichvucong.gov.vn) và ứng dụng VNeID. Người dân không cần đến trực tiếp công an phường/quận để nộp hồ sơ mà có thể thực hiện từ xa, tiết kiệm thời gian và công sức.",
      },
      {
        heading: "Các bước thực hiện làm hộ chiếu online",
        body: "Bước 1: Đăng nhập vào dichvucong.gov.vn hoặc ứng dụng VNeID. Bước 2: Chọn dịch vụ 'Cấp hộ chiếu' và điền thông tin theo mẫu. Bước 3: Tải lên ảnh chân dung đúng chuẩn (4×6cm, nền trắng, chụp trong 6 tháng). Bước 4: Nộp phí trực tuyến. Bước 5: Chờ xác nhận lịch hẹn chụp ảnh và lấy dấu vân tay (nếu lần đầu). Bước 6: Nhận hộ chiếu qua bưu điện hoặc đến nhận trực tiếp.",
      },
      {
        heading: "Điều kiện và lưu ý quan trọng",
        body: "Quy trình online áp dụng cho công dân đã có tài khoản định danh điện tử mức độ 2 (VNeID). Người làm hộ chiếu lần đầu hoặc cần cập nhật dữ liệu sinh trắc học vẫn cần đến điểm thu thập một lần. Thời gian xử lý hồ sơ từ 5–7 ngày làm việc kể từ khi hồ sơ hợp lệ.",
      },
    ],
    tips: [
      "Kích hoạt tài khoản VNeID mức 2 trước khi nộp hồ sơ",
      "Ảnh tải lên phải đúng chuẩn: nền trắng, không đội mũ, không đeo kính",
      "Kiểm tra kỹ thông tin trước khi gửi để tránh phải bổ sung hồ sơ",
      "Theo dõi tiến trình hồ sơ trực tiếp trên ứng dụng VNeID",
    ],
    requirements: [
      "CCCD/CMND còn hiệu lực",
      "Tài khoản VNeID đã xác thực mức 2",
      "Ảnh 4×6cm nền trắng chụp trong 6 tháng",
      "Phí cấp hộ chiếu (200.000đ cho hộ chiếu thường)",
      "Giấy tờ chứng minh nhân thân (nếu có thay đổi)",
    ],
  },
  {
    id: 3,
    title: "Việt Nam Đàm Phán Song Phương Với 5 Quốc Gia Mở Rộng Miễn Visa Cho Hộ Chiếu Phổ Thông Trong Năm 2025",
    excerpt: "Trong nỗ lực tăng cường quan hệ ngoại giao và kích cầu du lịch, Việt Nam đàm phán song phương với 5 quốc gia mở rộng miễn thị thực cho hộ chiếu phổ thông.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/songphuong.jpg",
    date: "21/04/2025",
    readTime: "4 phút đọc",
    category: "Dịch vụ Passport",
    categoryColor: "bg-blue-50 text-blue-600",
    tag: "Miễn visa",
    sections: [
      {
        heading: "Chiến lược mở rộng miễn visa song phương của Việt Nam",
        body: "Năm 2025, Bộ Ngoại giao Việt Nam đẩy mạnh đàm phán với 5 quốc gia mới để ký kết thỏa thuận miễn thị thực cho hộ chiếu phổ thông. Mục tiêu nhằm tạo điều kiện thuận lợi cho công dân Việt Nam di chuyển quốc tế, đồng thời thúc đẩy giao lưu thương mại và thu hút khách du lịch nước ngoài vào Việt Nam.",
      },
      {
        heading: "Lợi ích của chính sách miễn visa song phương",
        body: "Với mỗi quốc gia ký kết thỏa thuận miễn visa, công dân Việt Nam được nhập cảnh mà không cần xin visa trước, thường có thời gian lưu trú từ 14 đến 30 ngày. Điều này giúp tiết kiệm đáng kể chi phí visa (thường từ 800.000–4.000.000đ/lần) và thời gian làm hồ sơ, đặc biệt phù hợp cho các chuyến du lịch ngắn ngày hoặc công tác.",
      },
      {
        heading: "Danh sách quốc gia miễn visa hiện tại",
        body: "Tính đến năm 2025, hộ chiếu phổ thông Việt Nam được miễn visa tại hơn 50 quốc gia và vùng lãnh thổ, bao gồm toàn bộ ASEAN, nhiều nước Đông Bắc Á và một số nước châu Âu. Danh sách tiếp tục mở rộng theo từng năm nhờ nỗ lực ngoại giao tích cực của Việt Nam.",
      },
    ],
    tips: [
      "Kiểm tra chính sách miễn visa tại trang web Bộ Ngoại giao Việt Nam trước khi đi",
      "Hộ chiếu cần còn hạn ít nhất 6 tháng từ ngày nhập cảnh",
      "Miễn visa không đồng nghĩa với miễn kiểm tra tại cửa khẩu",
    ],
    requirements: [
      "Hộ chiếu phổ thông Việt Nam còn hạn ≥ 6 tháng",
      "Vé máy bay khứ hồi hoặc bằng chứng sẽ rời khỏi nước",
      "Chứng minh tài chính đủ cho thời gian lưu trú",
      "Địa chỉ nơi ở tại quốc gia đến",
    ],
  },
  {
    id: 4,
    title: "Hộ Chiếu Gắn Chip Việt Nam Được Nhiều Nước Chấp Nhận Qua Cửa Tự Động e-Gate Năm 2025",
    excerpt: "Trong nửa đầu năm 2025, hộ chiếu gắn chip Việt Nam đã chính thức được nhiều nước chấp nhận qua cổng tự động E-Gate tại sân bay quốc tế.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/photo-8-17132039245641682544149.jpg",
    date: "21/04/2025",
    readTime: "4 phút đọc",
    category: "Dịch vụ Passport",
    categoryColor: "bg-blue-50 text-blue-600",
    tag: "Hộ chiếu chip",
    sections: [
      {
        heading: "Hộ chiếu gắn chip (e-Passport) là gì?",
        body: "Hộ chiếu điện tử (e-Passport) của Việt Nam được tích hợp chip RFID lưu trữ thông tin sinh trắc học như ảnh khuôn mặt, vân tay và dữ liệu cá nhân. Được cấp từ năm 2022, loại hộ chiếu này tuân thủ tiêu chuẩn ICAO Doc 9303 của Tổ chức Hàng không Dân dụng Quốc tế, đảm bảo tương thích với hệ thống kiểm soát tự động toàn cầu.",
      },
      {
        heading: "Các quốc gia chấp nhận e-Gate năm 2025",
        body: "Tính đến năm 2025, hộ chiếu chip Việt Nam được chấp nhận qua cổng e-Gate tại nhiều sân bay lớn ở: Nhật Bản (Narita, Haneda, Kansai), Hàn Quốc (Incheon), Đức, Pháp, Hà Lan và một số nước Schengen khác. Danh sách tiếp tục mở rộng khi nhiều quốc gia cập nhật hệ thống nhận dạng chip Việt Nam.",
      },
      {
        heading: "Lợi ích khi sử dụng e-Gate",
        body: "Sử dụng cổng tự động e-Gate giúp rút ngắn thời gian làm thủ tục xuất nhập cảnh từ 5–15 phút xuống còn khoảng 30–60 giây. Du khách không cần xếp hàng tại quầy có nhân viên, phù hợp đặc biệt cho những chuyến đi gấp hoặc kết nối chuyển tiếp ngắn tại sân bay.",
      },
    ],
    tips: [
      "Kiểm tra hộ chiếu của bạn có ký hiệu hình con chip ở bìa trước không để biết loại e-Passport",
      "Đăng ký thông tin e-Passport với cơ quan lãnh sự trước khi đến quốc gia sử dụng e-Gate",
      "Một số quốc gia yêu cầu đăng ký trước trực tuyến để sử dụng e-Gate",
    ],
    requirements: [
      "Hộ chiếu điện tử (e-Passport) còn hạn",
      "Chip RFID hoạt động bình thường (không bị hỏng)",
      "Đăng ký trước với hệ thống e-Gate của quốc gia đến (nếu yêu cầu)",
    ],
  },
  {
    id: 5,
    title: "Gia Hạn Passport – Khi Nào Cần và Thủ Tục Như Thế Nào?",
    excerpt: "Cần gia hạn passport? Cùng Du lịch Én Việt tìm hiểu thời điểm cần thiết và thủ tục nhanh gọn, tiết kiệm thời gian, chi phí hợp lý.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/gia-han-ho-chieu-doi-ho-chieu-1.png",
    date: "21/04/2025",
    readTime: "5 phút đọc",
    category: "Dịch vụ Passport",
    categoryColor: "bg-blue-50 text-blue-600",
    tag: "Gia hạn hộ chiếu",
    sections: [
      {
        heading: "Khi nào cần gia hạn (đổi) hộ chiếu?",
        body: "Hộ chiếu Việt Nam có thời hạn 10 năm đối với người từ 14 tuổi trở lên và 5 năm với trẻ em dưới 14 tuổi. Bạn cần đổi hộ chiếu khi: hộ chiếu sắp hết hạn (còn dưới 6 tháng), hộ chiếu bị hư hỏng, thông tin cá nhân thay đổi (họ tên, giới tính), hoặc hộ chiếu hết trang visa.",
      },
      {
        heading: "Quy trình đổi hộ chiếu tại Việt Nam",
        body: "Bước 1: Chuẩn bị hồ sơ gồm hộ chiếu cũ, CCCD, ảnh 4×6cm nền trắng và tờ khai đề nghị cấp hộ chiếu. Bước 2: Nộp hồ sơ tại Phòng Quản lý Xuất nhập cảnh công an tỉnh/thành phố hoặc nộp online qua VNeID. Bước 3: Nộp lệ phí 200.000đ (hộ chiếu thường) hoặc 400.000đ (hộ chiếu nhanh). Bước 4: Nhận kết quả sau 5–8 ngày làm việc.",
      },
      {
        heading: "Dịch vụ làm hộ chiếu nhanh tại Én Việt",
        body: "Én Việt cung cấp dịch vụ hỗ trợ làm hộ chiếu tại TP.HCM với thời gian xử lý nhanh, hướng dẫn hồ sơ tận tình và đến tận nhà khách hàng nhận hồ sơ. Phí dịch vụ cạnh tranh, phù hợp cho cả cá nhân và doanh nghiệp cần làm số lượng lớn.",
      },
    ],
    tips: [
      "Nên đổi hộ chiếu khi còn ít nhất 12 tháng để đủ hạn xin visa các nước",
      "Kiểm tra hộ chiếu còn bao nhiêu trang trắng — visa một số nước yêu cầu ít nhất 2 trang trống",
      "Trẻ em dưới 14 tuổi phải có cha/mẹ hoặc người giám hộ ký tên trong hồ sơ",
    ],
    requirements: [
      "Hộ chiếu cũ (bản gốc)",
      "CCCD hoặc CMND còn hiệu lực",
      "Ảnh 4×6cm nền trắng chụp trong 6 tháng",
      "Tờ khai đề nghị cấp hộ chiếu (theo mẫu)",
      "Lệ phí 200.000đ (thường) hoặc 400.000đ (nhanh)",
    ],
  },
  {
    id: 6,
    title: "Dịch vụ Làm Hộ Chiếu Nhanh – Đơn Giản – Giá Tốt Tại TP.HCM",
    excerpt: "Hộ chiếu (passport) là giấy tờ bắt buộc khi bạn muốn xuất cảnh ra nước ngoài. Én Việt cung cấp dịch vụ làm hộ chiếu nhanh, đơn giản và giá tốt tại TP.HCM.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/quy-dinh-chup-anh-ho-chieu-1.jpg",
    date: "21/04/2025",
    readTime: "6 phút đọc",
    category: "Dịch vụ Passport",
    categoryColor: "bg-blue-50 text-blue-600",
    tag: "Làm hộ chiếu TP.HCM",
    sections: [
      {
        heading: "Tại sao nên sử dụng dịch vụ làm hộ chiếu qua Én Việt?",
        body: "Én Việt có đội ngũ tư vấn giàu kinh nghiệm, am hiểu sâu về quy trình và thủ tục cấp hộ chiếu tại TP.HCM. Chúng tôi giúp khách hàng tiết kiệm thời gian chờ đợi, tránh sai sót hồ sơ và hỗ trợ tận nơi từ khâu chuẩn bị đến khi nhận kết quả.",
      },
      {
        heading: "Quy trình đơn giản chỉ 3 bước",
        body: "Bước 1: Liên hệ Én Việt qua hotline 0964.110.000 hoặc inbox fanpage để được tư vấn và nhận danh sách hồ sơ. Bước 2: Chuẩn bị hồ sơ theo hướng dẫn (hoặc để nhân viên đến tận nơi hỗ trợ). Bước 3: Én Việt nộp hồ sơ thay bạn và thông báo kết quả, giao hộ chiếu tận nhà.",
      },
      {
        heading: "Bảng giá dịch vụ tham khảo",
        body: "Làm hộ chiếu lần đầu: từ 200.000đ lệ phí nhà nước + phí dịch vụ Én Việt. Đổi/gia hạn hộ chiếu: từ 200.000đ. Làm hộ chiếu khẩn (trong ngày/2 ngày): liên hệ báo giá. Phí dịch vụ Én Việt: cạnh tranh nhất thị trường TP.HCM, đã bao gồm đi lại và hỗ trợ hồ sơ.",
      },
    ],
    tips: [
      "Ảnh hộ chiếu phải đúng quy chuẩn: nền trắng, không mang kính, không đội mũ, nhìn thẳng",
      "CCCD chip có thể thay thế bản sao CMND trong hồ sơ",
      "Liên hệ sớm nếu cần hộ chiếu gấp để được ưu tiên xử lý",
    ],
    requirements: [
      "CCCD/CMND còn hiệu lực (bản gốc + bản sao)",
      "Ảnh 4×6cm nền trắng (2–4 tấm)",
      "Tờ khai đề nghị cấp hộ chiếu",
      "Hộ chiếu cũ nếu đổi/gia hạn",
      "Lệ phí nhà nước theo quy định",
    ],
  },
  {
    id: 7,
    title: "Hướng Dẫn Làm Passport Nhanh Chóng, Đơn Giản",
    excerpt: "Hướng dẫn làm passport nhanh chóng, đơn giản và tiết kiệm thời gian nhất! Trong thời đại hội nhập và phát triển, việc sở hữu một cuốn hộ chiếu là vô cùng cần thiết.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/dich-vu-lam-ho-chieu-02.jpg",
    date: "21/04/2025",
    readTime: "7 phút đọc",
    category: "Dịch vụ Passport",
    categoryColor: "bg-blue-50 text-blue-600",
    tag: "Hướng dẫn passport",
    sections: [
      {
        heading: "Hộ chiếu là gì và ai cần có?",
        body: "Hộ chiếu (passport) là giấy tờ tùy thân do Nhà nước cấp, xác nhận quốc tịch và danh tính của công dân khi ra nước ngoài. Bất kỳ công dân Việt Nam nào từ 0 tuổi trở lên đều có thể được cấp hộ chiếu. Đây là giấy tờ bắt buộc để xuất cảnh, xin visa và nhập cảnh vào hầu hết các quốc gia trên thế giới.",
      },
      {
        heading: "Hồ sơ cần chuẩn bị",
        body: "Người từ 14 tuổi trở lên: CCCD/CMND bản gốc, ảnh 4×6cm nền trắng (2 tấm), tờ khai đề nghị cấp hộ chiếu theo mẫu. Trẻ em dưới 14 tuổi: thêm giấy khai sinh bản gốc và CCCD/CMND của cha hoặc mẹ. Trường hợp đổi hộ chiếu: nộp thêm hộ chiếu cũ.",
      },
      {
        heading: "Nơi nộp hồ sơ và thời gian xử lý",
        body: "Tại TP.HCM: Phòng Quản lý Xuất nhập cảnh – Công an TP.HCM (số 254 Nguyễn Trãi, Q.1) hoặc Phòng PC09 các quận/huyện. Nộp online qua dichvucong.gov.vn. Thời gian xử lý: 5–7 ngày làm việc (thường), 1–3 ngày (khẩn). Lệ phí: 200.000đ (hộ chiếu thường 10 năm).",
      },
    ],
    tips: [
      "Khai tờ khai bằng bút mực đen, không dùng bút chì hoặc bút đỏ",
      "Không ký tên trên ảnh hoặc nhàu ảnh — ảnh phải phẳng và sắc nét",
      "Đến nộp hồ sơ vào buổi sáng để tránh đông người",
      "Lưu lại số biên nhận để tra cứu tiến trình online",
    ],
    requirements: [
      "CCCD/CMND còn hiệu lực",
      "Ảnh 4×6cm nền trắng, chụp trong 6 tháng",
      "Tờ khai đề nghị cấp hộ chiếu (mẫu TK01)",
      "Giấy khai sinh (trẻ dưới 14 tuổi)",
      "Lệ phí 200.000đ",
    ],
  },
];

/* ─── Tư Vấn Visa posts — khớp với dulichenviet.vn/chuyen-muc/dich-vu-visa/tu-van-visa/ ─── */
const tuVanVisaPosts: BlogPost[] = [
  {
    id: 101,
    title: "ÉN VIỆT | Rừng Sác Cần Giờ – Hành trình về nguồn cùng Công ty Cổ phần 28.1",
    excerpt: "Không chỉ là một chuyến đi team building, đây còn là hành trình về nguồn giàu giá trị lịch sử và cảm xúc, nơi tinh thần đoàn kết được thắp sáng.",
    image: "https://dulichenviet.vn/wp-content/uploads/2026/01/Cong-ty-Co-phan-28.1-3.jpg",
    date: "31/01/2026",
    readTime: "3 phút đọc",
    category: "Tư vấn Visa",
    categoryColor: "bg-teal-50 text-teal-700",
    tag: "Team Building",
    sections: [
      { heading: "Hành trình về nguồn tại Rừng Sác Cần Giờ", body: "Rừng Sác Cần Giờ – Khu dự trữ sinh quyển thế giới được UNESCO công nhận – là điểm đến lý tưởng để gắn kết và trải nghiệm thiên nhiên. Cùng Công ty Cổ phần 28.1, Én Việt đã tổ chức chuyến đi đầy ý nghĩa, kết hợp giữa tham quan lịch sử kháng chiến và các hoạt động team building sôi nổi tại vùng đất này." },
      { heading: "Các hoạt động nổi bật trong chuyến đi", body: "Đoàn tham quan các địa danh lịch sử tại Rừng Sác, trải nghiệm chèo thuyền kayak, khám phá hệ sinh thái rừng ngập mặn độc đáo. Buổi tối, đoàn tổ chức giao lưu văn nghệ và dạ tiệc ấm cúng bên bờ sông. Những hoạt động này tạo ra không gian để các thành viên hiểu nhau hơn, cùng nhau chia sẻ và tạo nên kỷ niệm đẹp." },
      { heading: "Dịch vụ tổ chức sự kiện của Én Việt", body: "Én Việt Tour & Event đảm nhận toàn bộ từ lên kế hoạch, chuẩn bị chương trình đến hậu cần và dẫn chương trình. Với kinh nghiệm hơn 10 năm tổ chức sự kiện doanh nghiệp, chúng tôi cam kết mang lại chuyến đi trọn vẹn, đáng nhớ cho mọi đoàn." },
    ],
    tips: ["Liên hệ Én Việt sớm để nhận báo giá ưu đãi theo quy mô đoàn", "Tùy chỉnh chương trình phù hợp với văn hóa và ngân sách doanh nghiệp"],
    requirements: [],
  },
  {
    id: 102,
    title: "Cập nhật những thông tin thay đổi về visa Mỹ trong năm 2025",
    excerpt: "Từ đầu năm 2025, Chính phủ Hoa Kỳ đã đưa ra nhiều thay đổi quan trọng về chính sách visa ảnh hưởng trực tiếp đến người xin thị thực Việt Nam.",
    image: "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?w=1000&q=80",
    date: "05/08/2025",
    readTime: "6 phút đọc",
    category: "Tư vấn Visa",
    categoryColor: "bg-teal-50 text-teal-700",
    tag: "Visa Mỹ 2025",
    sections: [
      { heading: "Những thay đổi chính về visa Mỹ năm 2025", body: "Từ đầu năm 2025, Bộ Ngoại giao Hoa Kỳ (DOS) đã cập nhật một số quy định liên quan đến quy trình xét duyệt visa, bao gồm: tăng cường kiểm tra lý lịch mạng xã hội (yêu cầu khai báo tài khoản 5 năm gần nhất), điều chỉnh lịch phỏng vấn tại Đại sứ quán Hà Nội và Lãnh sự quán TP.HCM, đồng thời cập nhật mẫu đơn DS-160 với các câu hỏi chi tiết hơn." },
      { heading: "Ảnh hưởng đến người xin visa Việt Nam", body: "Thời gian chờ đặt lịch phỏng vấn hiện dao động từ 3–6 tháng tại TP.HCM và 2–4 tháng tại Hà Nội. Tỷ lệ từ chối tăng nhẹ do chính sách thắt chặt với nhóm đơn xin visa lần đầu. Tuy nhiên, những người có lịch sử nhập cảnh Mỹ tốt vẫn được xét duyệt thuận lợi." },
      { heading: "Bí quyết vượt qua các thay đổi mới", body: "Để tăng tỷ lệ đậu trong bối cảnh chính sách mới: chuẩn bị hồ sơ tài chính mạnh hơn (số dư tối thiểu $5.000–$8.000 USD), chứng minh ràng buộc rõ ràng với Việt Nam (việc làm ổn định, tài sản, gia đình), và trả lời thành thật, nhất quán trong buổi phỏng vấn." },
    ],
    tips: [
      "Đặt lịch phỏng vấn sớm nhất có thể – tối thiểu 6 tháng trước ngày cần visa",
      "Cập nhật DS-160 với đầy đủ tài khoản mạng xã hội theo yêu cầu mới",
      "Chuẩn bị bằng chứng ràng buộc mạnh: hợp đồng lao động, sổ đỏ, sổ tiết kiệm",
    ],
    requirements: ["Hộ chiếu còn hạn ≥ 6 tháng", "Form DS-160 đã điền đầy đủ", "Ảnh 5×5cm nền trắng chuẩn Mỹ", "Biên lai nộp phí $185", "Tài liệu chứng minh tài chính và ràng buộc"],
  },
  {
    id: 103,
    title: "Top 5 Quốc Gia Dễ Xin Visa Nhất Cho Người Việt Nam",
    excerpt: "Cùng Én Việt khám phá top 5 quốc gia dễ xin visa nhất dành cho người Việt, đồng thời hướng dẫn chuẩn bị hồ sơ để tăng tỷ lệ thành công.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/Cac-loai-visa-Thai-Lan-ban-can-biet.jpg",
    date: "21/04/2025",
    readTime: "5 phút đọc",
    category: "Tư vấn Visa",
    categoryColor: "bg-teal-50 text-teal-700",
    tag: "Top visa dễ",
    sections: [
      { heading: "Top 5 quốc gia dễ xin visa nhất", body: "1. Thái Lan: Miễn visa 30 ngày, thủ tục đơn giản. 2. Singapore: Tỷ lệ cấp visa cao, quy trình online thuận tiện. 3. Nhật Bản: Visa du lịch ngày càng thông thoáng với tỷ lệ đậu trên 90% khi hồ sơ đúng chuẩn. 4. Hàn Quốc: Mở rộng miễn phỏng vấn từ 2024, nhiều đối tượng được cấp visa đa lần. 5. Đài Loan: Thủ tục nhanh gọn, thời gian xử lý chỉ 3–5 ngày." },
      { heading: "Bí quyết chuẩn bị hồ sơ cho các nước này", body: "Dù thuộc nhóm dễ xin, hồ sơ vẫn cần đầy đủ và chính xác: ảnh đúng chuẩn, sao kê ngân hàng đủ mức, lịch trình du lịch hợp lý. Tránh đặt vé máy bay không hoàn tiền trước khi có visa, và luôn chuẩn bị bảo hiểm du lịch để tăng độ tin cậy của hồ sơ." },
      { heading: "Dịch vụ hỗ trợ xin visa tại Én Việt", body: "Én Việt cung cấp dịch vụ tư vấn và hỗ trợ xin visa cho tất cả 5 quốc gia trên. Đội ngũ chuyên viên giàu kinh nghiệm sẽ đánh giá hồ sơ, tư vấn điểm mạnh/yếu và hỗ trợ hoàn thiện trước khi nộp, giúp tối ưu tỷ lệ đậu visa." },
    ],
    tips: ["Nộp hồ sơ sớm 4–6 tuần trước ngày dự kiến khởi hành", "Sao kê ngân hàng cần thể hiện giao dịch đều đặn, không đột biến"],
    requirements: ["Hộ chiếu còn hạn ≥ 6 tháng", "Ảnh đúng chuẩn từng nước", "Sao kê ngân hàng 3 tháng", "Lịch trình và đặt phòng"],
  },
  {
    id: 104,
    title: "Tổng Hợp Các Câu Hỏi Phỏng Vấn Visa Mỹ Và Cách Trả Lời",
    excerpt: "Phỏng vấn visa Mỹ là cửa ải ai cũng phải vượt qua. Cùng Én Việt tổng hợp các câu hỏi thường gặp và cách trả lời thuyết phục nhất.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/phong-van-visa-my-de-dang-nhat-visana-e1745209022967.jpg",
    date: "21/04/2025",
    readTime: "8 phút đọc",
    category: "Tư vấn Visa",
    categoryColor: "bg-teal-50 text-teal-700",
    tag: "Phỏng vấn Visa Mỹ",
    sections: [
      { heading: "Những câu hỏi phỏng vấn visa Mỹ hay gặp nhất", body: "1. 'Mục đích chuyến đi của bạn là gì?' – Trả lời ngắn gọn, rõ ràng. 2. 'Bạn làm nghề gì và thu nhập bao nhiêu?' – Nêu cụ thể, khớp với giấy tờ. 3. 'Ai sẽ tài trợ cho chuyến đi?' – Nếu tự túc, chứng minh bằng sao kê. 4. 'Bạn có người thân ở Mỹ không?' – Trả lời thành thật. 5. 'Bạn có kế hoạch ở lại Mỹ không?' – Khẳng định sẽ về nước." },
      { heading: "Bí quyết trả lời thuyết phục", body: "Câu trả lời cần nhất quán với DS-160, ngắn gọn (không nói dài dòng), tự tin và thành thật. Cán bộ phỏng vấn thường chỉ hỏi 3–5 câu trong 2–3 phút. Đừng mang theo quá nhiều giấy tờ – chỉ cần bộ hồ sơ cốt lõi và sẵn sàng giải thích nếu được hỏi thêm." },
      { heading: "Những điều cần tránh trong buổi phỏng vấn", body: "Không nói dối hoặc phóng đại. Không trả lời mâu thuẫn với nội dung đã khai. Không tỏ ra lo lắng hoặc cáu gắt. Không mang quá nhiều người đi cùng. Mặc trang phục lịch sự, đến đúng giờ hẹn và nói chậm rõ nếu tiếng Anh không tốt (có thể trả lời tiếng Việt với phiên dịch tại chỗ)." },
    ],
    tips: ["Luyện tập trả lời trước gương hoặc với người thân ít nhất 2–3 lần", "In đơn DS-160 ra giấy để đối chiếu câu trả lời trong phỏng vấn"],
    requirements: ["Hộ chiếu gốc", "DS-160 đã hoàn tất", "Ảnh 5×5cm nền trắng", "Biên lai nộp phí", "Hồ sơ hỗ trợ (sao kê, xác nhận công tác)"],
  },
  {
    id: 105,
    title: "Luyện Phỏng Vấn Visa Du Học – Bí Quyết Trả Lời Thuyết Phục Lãnh Sự",
    excerpt: "Ở nhiều quốc gia như Mỹ, Canada, Úc hay New Zealand, phỏng vấn xin visa du học là bước bắt buộc và quyết định sự thành công của toàn bộ hồ sơ.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/phong-van-du-hoc-my.jpg",
    date: "21/04/2025",
    readTime: "7 phút đọc",
    category: "Tư vấn Visa",
    categoryColor: "bg-teal-50 text-teal-700",
    tag: "Visa du học",
    sections: [
      { heading: "Tại sao cần luyện phỏng vấn visa du học?", body: "Khác với visa du lịch, visa du học yêu cầu bạn chứng minh mục đích học tập rõ ràng, khả năng tài chính đủ trang trải toàn khóa học và ý định trở về Việt Nam sau khi hoàn thành chương trình. Lãnh sự viên sẽ đánh giá từ cách bạn trả lời đến ngôn ngữ cơ thể và sự chuẩn bị tổng thể." },
      { heading: "Các câu hỏi thường gặp khi phỏng vấn visa du học", body: "Tại sao bạn chọn trường/ngành này? Kế hoạch sau khi tốt nghiệp là gì? Ai tài trợ cho việc học của bạn? Bạn đã chuẩn bị gì để thích nghi với môi trường mới? Bạn biết gì về trường và chương trình học? Hãy trả lời dựa trên nghiên cứu thực tế về trường và kế hoạch học tập của bạn." },
      { heading: "Cách luyện tập hiệu quả cùng Én Việt", body: "Én Việt cung cấp dịch vụ mock interview (phỏng vấn thử) với chuyên viên visa có kinh nghiệm, giúp bạn nhận phản hồi cụ thể và cải thiện cách diễn đạt. Kết hợp với gói tư vấn hồ sơ toàn diện, chúng tôi đồng hành từ khi chuẩn bị đến khi nhận kết quả visa." },
    ],
    tips: ["Nghiên cứu kỹ về trường, chương trình học trước khi phỏng vấn", "Chuẩn bị câu trả lời cho kế hoạch nghề nghiệp dài hạn sau khi về nước"],
    requirements: ["I-20/CoE từ trường đã nhận", "Bằng chứng tài chính đủ cho toàn khóa học", "Hồ sơ học bạ và bằng cấp", "Thư chấp nhận từ trường"],
  },
  {
    id: 106,
    title: "Hồ Sơ Xin Visa Du Học Úc – Hướng Dẫn Chi Tiết Chuẩn Nhất 2025",
    excerpt: "Hướng dẫn chi tiết cách chuẩn bị hồ sơ xin visa du học Úc (Student Visa – Subclass 500) đúng chuẩn nhất cho người Việt Nam năm 2025.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/visa-du-hoc-uc-la-gi-1024x683-1.webp",
    date: "21/04/2025",
    readTime: "9 phút đọc",
    category: "Tư vấn Visa",
    categoryColor: "bg-teal-50 text-teal-700",
    tag: "Visa du học Úc",
    sections: [
      { heading: "Visa du học Úc (Subclass 500) là gì?", body: "Student Visa Subclass 500 là loại visa cho phép học sinh, sinh viên đến Úc theo học tại các cơ sở giáo dục đã được đăng ký CRICOS (Commonwealth Register of Institutions and Courses for Overseas Students). Visa có thể được cấp cho toàn bộ thời gian học, kèm theo quyền làm thêm tối đa 48 giờ/2 tuần trong kỳ học và không giới hạn trong kỳ nghỉ." },
      { heading: "Hồ sơ xin visa du học Úc cần chuẩn bị", body: "Giấy tờ bắt buộc: CoE (Confirmation of Enrolment) từ trường Úc, OSHC (Bảo hiểm y tế sinh viên nước ngoài), hộ chiếu còn hạn, ảnh đúng chuẩn, bằng chứng tài chính (sao kê ngân hàng hoặc thư bảo lãnh, tối thiểu AUD $20.000–$25.000), kết quả IELTS/PTE (tùy trường). Nộp hồ sơ hoàn toàn online qua hệ thống ImmiAccount." },
      { heading: "Thời gian và chi phí xử lý visa", body: "Thời gian xử lý trung bình: 4–6 tuần (có thể lên đến 2–3 tháng trong mùa cao điểm). Phí visa: AUD $710 (~11,5 triệu đồng). Én Việt hỗ trợ toàn bộ quy trình từ chuẩn bị hồ sơ, kiểm tra CoE, chuẩn bị tài liệu tài chính đến theo dõi kết quả." },
    ],
    tips: ["Nộp hồ sơ ít nhất 3 tháng trước ngày khai giảng", "Đảm bảo OSHC có hiệu lực từ ngày nhập cảnh Úc"],
    requirements: ["CoE từ trường Úc đã đăng ký CRICOS", "Bảo hiểm OSHC", "Bằng chứng tài chính AUD $20.000+", "Kết quả ngoại ngữ (IELTS/PTE)", "Hộ chiếu còn hạn"],
  },
  {
    id: 107,
    title: "Hướng Dẫn Xin Visa Du Học – Tăng Tỷ Lệ Đậu Cùng Én Việt",
    excerpt: "Visa du học (Student Visa) là loại thị thực đặc biệt, đòi hỏi hồ sơ chi tiết và thuyết phục. Cùng Én Việt tìm hiểu quy trình và bí quyết để tăng tỷ lệ đậu.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/Lam-visa-du-hoc-Anh-1.jpg",
    date: "21/04/2025",
    readTime: "7 phút đọc",
    category: "Tư vấn Visa",
    categoryColor: "bg-teal-50 text-teal-700",
    tag: "Visa du học",
    sections: [
      { heading: "Visa du học là gì và vì sao không dễ như bạn nghĩ?", body: "Visa du học (Student Visa) không chỉ đơn giản là chứng minh bạn được nhận vào trường. Cán bộ lãnh sự còn đánh giá: mục đích học tập có rõ ràng không, khả năng tài chính có đủ trang trải không, và quan trọng nhất – bạn có ý định trở về nước sau khi học xong không. Đây là ba trụ cột quyết định kết quả hồ sơ." },
      { heading: "Quy trình xin visa du học theo từng bước", body: "Bước 1: Nhận thư chấp nhận (offer letter) từ trường. Bước 2: Xác nhận đăng ký học (CoE/I-20/CAS tùy quốc gia). Bước 3: Chuẩn bị hồ sơ tài chính, bảo hiểm và hộ chiếu. Bước 4: Điền đơn xin visa trực tuyến. Bước 5: Nộp phí và đặt lịch phỏng vấn (nếu yêu cầu). Bước 6: Chờ kết quả và nhận visa." },
      { heading: "Tại sao chọn Én Việt để hỗ trợ xin visa du học?", body: "Én Việt đã hỗ trợ hàng nghìn học sinh, sinh viên xin visa du học thành công tại Mỹ, Úc, Anh, Canada và New Zealand. Chúng tôi đánh giá hồ sơ miễn phí, tư vấn điểm yếu cần cải thiện và đồng hành trong suốt quá trình cho đến khi bạn nhận được visa." },
    ],
    tips: ["Chuẩn bị statement of purpose (SOP) rõ ràng, thể hiện kế hoạch học tập và sự nghiệp", "Bằng chứng tài chính cần đủ cho ít nhất 1 năm học đầu tiên"],
    requirements: ["Thư chấp nhận từ trường", "Chứng minh tài chính", "Bảo hiểm du học", "Hộ chiếu còn hạn", "Kết quả học tập và ngoại ngữ"],
  },
  {
    id: 108,
    title: "Dịch Vụ Tư Vấn Visa Du Lịch – Đậu Visa Dễ Dàng Cùng Én Việt",
    excerpt: "Visa du lịch (Tourist Visa) là loại thị thực phổ biến nhất. Tuy nhiên không phải lúc nào cũng dễ xin – hãy để Én Việt hỗ trợ bạn.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/dich-vu-visa-uy-tin-cong-ty-visa.jpg",
    date: "21/04/2025",
    readTime: "6 phút đọc",
    category: "Tư vấn Visa",
    categoryColor: "bg-teal-50 text-teal-700",
    tag: "Visa du lịch",
    sections: [
      { heading: "Visa du lịch là gì và những nước nào yêu cầu?", body: "Visa du lịch (Tourist Visa hay Visitor Visa) là giấy phép nhập cảnh cấp cho mục đích tham quan, nghỉ dưỡng và thăm thân. Hầu hết các nước phát triển như Mỹ, Canada, Úc, Anh, Schengen đều yêu cầu công dân Việt Nam xin visa trước khi nhập cảnh. Thời hạn visa thường từ 15–90 ngày tùy từng nước và từng trường hợp." },
      { heading: "Những lý do hồ sơ visa du lịch hay bị từ chối", body: "Tài chính không đủ hoặc không ổn định. Lịch trình du lịch không rõ ràng hoặc không thực tế. Không có bằng chứng ràng buộc với Việt Nam. Lịch sử vi phạm visa (ở quá hạn ở nước khác). Thông tin trong hồ sơ mâu thuẫn nhau. Én Việt sẽ đánh giá và tư vấn cụ thể từng trường hợp." },
      { heading: "Quy trình dịch vụ tư vấn visa du lịch tại Én Việt", body: "Liên hệ tư vấn → Đánh giá hồ sơ miễn phí → Hướng dẫn chuẩn bị tài liệu → Kiểm tra và nộp hồ sơ → Theo dõi tiến trình → Nhận kết quả. Chúng tôi hỗ trợ visa du lịch cho hơn 50 quốc gia, cam kết tỷ lệ đậu cao và hoàn phí dịch vụ nếu từ chối do lỗi của Én Việt." },
    ],
    tips: ["Đặt lịch tư vấn sớm – ít nhất 6–8 tuần trước ngày dự kiến khởi hành", "Không khai man bất kỳ thông tin nào trong hồ sơ xin visa"],
    requirements: ["Hộ chiếu còn hạn ≥ 6 tháng", "Sao kê ngân hàng 3–6 tháng", "Lịch trình và đặt phòng", "Bảo hiểm du lịch", "Giấy tờ chứng minh nghề nghiệp"],
  },
  {
    id: 109,
    title: "Visa Du Lịch Bị Từ Chối? 5 Lý Do Thường Gặp Và Cách Khắc Phục",
    excerpt: "Việc bị từ chối visa du lịch có thể khiến bạn hụt hẫng và lo lắng. Cùng Én Việt tìm hiểu 5 nguyên nhân phổ biến nhất và cách khắc phục hiệu quả.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/visa-denial_650x350.jpeg",
    date: "18/04/2025",
    readTime: "6 phút đọc",
    category: "Tư vấn Visa",
    categoryColor: "bg-teal-50 text-teal-700",
    tag: "Visa bị từ chối",
    sections: [
      { heading: "5 lý do visa du lịch thường bị từ chối", body: "1. Tài chính không đủ hoặc bất thường: số dư tăng đột biến trước khi nộp hồ sơ. 2. Không có ràng buộc với Việt Nam: không có việc làm, tài sản hay gia đình chứng minh sẽ trở về. 3. Lịch trình du lịch không hợp lý: quá kín hoặc không khớp với đặt phòng. 4. Hồ sơ không đầy đủ hoặc có thông tin mâu thuẫn. 5. Lịch sử nhập cảnh xấu: từng bị từ chối visa trước đây hoặc ở quá hạn." },
      { heading: "Cách khắc phục và tái nộp hồ sơ", body: "Phân tích kỹ lý do từ chối ghi trong thư (nếu có). Cải thiện điểm yếu: bổ sung bằng chứng tài chính, thêm giấy tờ ràng buộc, điều chỉnh lịch trình. Chờ đủ thời gian quy định trước khi tái nộp (thường 3–6 tháng). Đối với visa Schengen có thể khiếu nại trong 30 ngày kể từ ngày nhận quyết định từ chối." },
      { heading: "Én Việt hỗ trợ nộp lại hồ sơ visa bị từ chối", body: "Chúng tôi có kinh nghiệm xử lý nhiều hồ sơ bị từ chối và tư vấn chiến lược tái nộp hiệu quả. Tỷ lệ đậu khi tái nộp qua Én Việt đạt trên 85%, nhờ đội ngũ phân tích nguyên nhân chi tiết và tư vấn cải thiện hồ sơ toàn diện." },
    ],
    tips: ["Đọc kỹ thư từ chối để xác định đúng nguyên nhân trước khi tái nộp", "Không nộp lại hồ sơ tương tự – cần cải thiện rõ ràng ít nhất một điểm yếu chính"],
    requirements: ["Thư từ chối visa gốc (nếu có)", "Hồ sơ cải thiện dựa trên lý do từ chối", "Bằng chứng ràng buộc mạnh hơn lần trước"],
  },
  {
    id: 110,
    title: "Cập Nhật Chính Sách Visa Du Lịch Canada 2025",
    excerpt: "Canada không chỉ nổi tiếng với cảnh quan thiên nhiên hùng vĩ mà còn là điểm đến du lịch và định cư hàng đầu. Cập nhật chính sách visa Canada mới nhất năm 2025.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/VISA-500-HE-VET-Vocational-Education-and-Training-Huong-dan-toan-dien-ve-chuong-trinh-giao-duc-va-dao-tao-nghe-10.png",
    date: "18/04/2025",
    readTime: "7 phút đọc",
    category: "Tư vấn Visa",
    categoryColor: "bg-teal-50 text-teal-700",
    tag: "Visa Canada 2025",
    sections: [
      { heading: "Những thay đổi chính sách visa Canada 2025", body: "Từ đầu năm 2025, IRCC (Immigration, Refugees and Citizenship Canada) đã cập nhật một số quy định quan trọng: yêu cầu sinh trắc học (vân tay + ảnh chân dung) cho hầu hết người xin visa, kéo dài thời gian xử lý lên 4–12 tuần, và tăng cường kiểm tra thông tin tài chính để đối phó với tình trạng nhập cư bất hợp pháp tăng cao." },
      { heading: "Yêu cầu tài chính và ràng buộc trong nước", body: "Để tăng tỷ lệ đậu visa Canada 2025, hồ sơ tài chính cần mạnh hơn bao giờ hết. Nên có số dư tài khoản tối thiểu CAD $5.000–$8.000. Bên cạnh đó, chứng minh ràng buộc tại Việt Nam đặc biệt quan trọng: hợp đồng lao động dài hạn, bất động sản, gia đình (vợ/chồng, con nhỏ). Người lần đầu xin visa Canada cần chuẩn bị hồ sơ đặc biệt kỹ lưỡng." },
      { heading: "Nộp hồ sơ và thu thập sinh trắc học tại TP.HCM", body: "Trung tâm VAC tại TP.HCM: Vincom Center A, 171 Đồng Khởi, Q.1. Lịch hẹn phải đặt online trước qua vfsglobal.com/canada/vietnam. Phí visa: CAD $100 (~1,8 triệu đồng) + phí sinh trắc học CAD $85. Nộp hồ sơ sớm nhất 6 tháng và không muộn hơn 16 tuần trước ngày đi." },
    ],
    tips: ["Đặt lịch sinh trắc học sớm vì thường kín 2–3 tuần trong mùa cao điểm", "Giữ số dư tài khoản ổn định ít nhất 6 tháng trước khi nộp hồ sơ"],
    requirements: ["Hộ chiếu gốc + bản sao", "Dữ liệu sinh trắc học tại VAC", "Sao kê ngân hàng 6 tháng", "Xác nhận công việc + mức lương", "Bảo hiểm du lịch"],
  },
  {
    id: 111,
    title: "Kinh Nghiệm Xin Visa Du Lịch Tự Túc Anh – Canada – Mỹ Từ A Đến Z",
    excerpt: "Bạn đang lên kế hoạch du lịch Anh, Canada hoặc Mỹ tự túc nhưng chưa biết bắt đầu từ đâu? Bài viết này tổng hợp kinh nghiệm thực tế từ A đến Z.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/xin-visa-du-lich-canada-tu-tuc.jpg",
    date: "18/04/2025",
    readTime: "10 phút đọc",
    category: "Tư vấn Visa",
    categoryColor: "bg-teal-50 text-teal-700",
    tag: "Visa tự túc",
    sections: [
      { heading: "So sánh độ khó xin visa: Anh – Canada – Mỹ", body: "Mỹ: Khó nhất vì phải phỏng vấn, tỷ lệ từ chối cao với người lần đầu. Thời gian chờ phỏng vấn 3–6 tháng. Canada: Không phỏng vấn nhưng hồ sơ tài chính và ràng buộc rất quan trọng. Thời gian xử lý 4–12 tuần. Anh: Cần chứng minh tài chính mạnh và có kế hoạch lịch trình rõ ràng. Phí visa cao (GBP £115), thời gian xử lý 3–4 tuần." },
      { heading: "Hồ sơ cốt lõi cần có cho cả 3 quốc gia", body: "Dù là nước nào, 5 yếu tố sau luôn bắt buộc: (1) Tài chính đủ và ổn định – sao kê 3–6 tháng. (2) Ràng buộc tại Việt Nam – việc làm, gia đình, tài sản. (3) Lịch trình và đặt phòng hợp lý – không quá kín, không quá lỏng. (4) Bảo hiểm du lịch đủ mức bảo hiểm. (5) Hồ sơ sạch – không có vi phạm visa, không tiền án tiền sự." },
      { heading: "Kinh nghiệm thực tế từ khách hàng của Én Việt", body: "Nhiều khách hàng sau khi bị từ chối tự làm đã nhờ Én Việt tư vấn và đậu visa ngay lần tái nộp. Bí quyết nằm ở việc xác định đúng điểm yếu và cải thiện đúng chỗ, không phải bổ sung hồ sơ theo kiểu 'càng nhiều càng tốt'." },
    ],
    tips: ["So sánh yêu cầu cụ thể của từng nước – đừng áp dụng máy móc hồ sơ của nước này sang nước khác", "Kế hoạch tài chính cần xây dựng ít nhất 6 tháng trước ngày nộp hồ sơ"],
    requirements: ["Hộ chiếu còn hạn ≥ 6 tháng", "Sao kê tài chính 3–6 tháng", "Xác nhận công việc", "Đặt phòng và lịch trình", "Bảo hiểm du lịch"],
  },
  {
    id: 112,
    title: "Top 10 Tour Du Lịch Nước Ngoài Hot Nhất 2025 Bạn Không Thể Bỏ Lỡ",
    excerpt: "Năm 2025 hứa hẹn là thời điểm bùng nổ du lịch quốc tế. Nếu bạn đang tìm kiếm những điểm đến hấp dẫn, đây là 10 tour nước ngoài hot nhất không thể bỏ lỡ.",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/04/images2228940__nh_1__3_.jpg",
    date: "18/04/2025",
    readTime: "5 phút đọc",
    category: "Tư vấn Visa",
    categoryColor: "bg-teal-50 text-teal-700",
    tag: "Tour nước ngoài 2025",
    sections: [
      { heading: "Top 10 điểm đến quốc tế hot nhất năm 2025", body: "1. Nhật Bản (Tokyo – Osaka – Kyoto). 2. Hàn Quốc (Seoul – Busan – Jeju). 3. Thái Lan (Phuket – Bangkok – Chiang Mai). 4. Singapore – Malaysia – Indonesia (combo 3 nước). 5. Pháp – Ý – Thụy Sĩ (tour Schengen 10 ngày). 6. Mỹ (New York – Las Vegas – Los Angeles). 7. Dubai – Abu Dhabi (UAE). 8. Thổ Nhĩ Kỳ (Istanbul – Cappadocia). 9. Úc (Sydney – Melbourne – Great Barrier Reef). 10. Nhật Bản mùa hoa anh đào." },
      { heading: "Vì sao cần đặt tour và visa sớm năm 2025?", body: "Nhu cầu du lịch quốc tế phục hồi mạnh mẽ khiến lịch phỏng vấn visa nhiều nước kín đến vài tháng, giá vé máy bay và khách sạn tăng cao vào mùa cao điểm. Đặt sớm 3–6 tháng giúp bạn có lựa chọn tốt hơn về thời gian bay, loại phòng và giá cả, đồng thời đủ thời gian xử lý visa." },
      { heading: "Dịch vụ tour trọn gói quốc tế của Én Việt", body: "Én Việt cung cấp tour trọn gói đến tất cả 10 điểm đến trên, bao gồm visa, vé máy bay, khách sạn, hướng dẫn viên và bảo hiểm du lịch. Liên hệ ngay để nhận báo giá chi tiết và đặt chỗ với ưu đãi sớm!" },
    ],
    tips: ["Đặt tour trọn gói tiết kiệm hơn tự đặt lẻ, đặc biệt với nhóm từ 4 người trở lên", "Kiểm tra yêu cầu visa cho từng điểm đến ngay khi lên kế hoạch"],
    requirements: ["Hộ chiếu còn hạn ≥ 6 tháng", "Ảnh passport đúng chuẩn", "Tiền đặt cọc tour theo quy định"],
  },
];

/* ─── Gộp tất cả posts ─── */
const posts: BlogPost[] = [...passportPosts, ...tuVanVisaPosts];

/* ─── Constants ─── */
const CATEGORIES = ["Tất cả", "Tư vấn Visa", "Dịch vụ Passport", "Tin tức"];

const SERVICE_CARDS = [
  { region: "Làm mới Passport", examples: "Cấp lần đầu, làm nhanh trong ngày", price: "Từ 200.000đ", flag: "🛂" },
  { region: "Đổi / Gia hạn", examples: "Hộ chiếu sắp hết hạn, hết trang visa", price: "Từ 200.000đ", flag: "🔄" },
  { region: "Hỗ trợ Visa", examples: "Tư vấn hồ sơ xin visa các nước", price: "Từ 500.000đ", flag: "🌏" },
  { region: "Dịch vụ trọn gói", examples: "Passport + Visa + Vé máy bay", price: "Liên hệ báo giá", flag: "✈️" },
];

const STATS = [
  { value: "12.000+", label: "Khách hàng tin tưởng" },
  { value: "98%", label: "Tỷ lệ đậu visa" },
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "50+", label: "Quốc gia hỗ trợ" },
];

const BANNERS = [
  {
    src: BannerVisa1,
    heading: "Dịch Vụ Visa & Passport",
    sub: "Hỗ trợ làm hộ chiếu & visa hơn 50 quốc gia",
    desc: "Tỷ lệ đậu cao · Thủ tục nhanh · Hỗ trợ tận tâm từ A đến Z",
  },
  {
    src: BannerVisa2,
    heading: "Làm Hộ Chiếu Nhanh Tại TP.HCM",
    sub: "Hộ chiếu – Vé máy bay – Trọn gói dịch vụ",
    desc: "Nhận hồ sơ tận nơi · Xử lý trong ngày · Giao hộ chiếu tại nhà",
  },
];

/* ─── HeroBanner Component ─── */
function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setCurrent((current - 1 + BANNERS.length) % BANNERS.length);
  const next = () => setCurrent((current + 1) % BANNERS.length);

  return (
    <section className="relative overflow-hidden bg-black w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[560px]">
      <AnimatePresence>
        <Motion.img
          key={current}
          src={BANNERS[current].src}
          alt={BANNERS[current].heading}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-2xl">
        <AnimatePresence mode="wait">
          <Motion.div
            key={current}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-3 md:mb-4">
              <Globe className="w-3.5 h-3.5" /> {BANNERS[current].sub}
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-2 md:mb-3 drop-shadow-2xl">
              {BANNERS[current].heading}
            </h1>
            <p className="text-white/85 text-xs md:text-base mb-4 md:mb-6 drop-shadow hidden sm:block">
              {BANNERS[current].desc}
            </p>
            <div className="hidden sm:flex flex-wrap gap-2">
              {["Tư vấn miễn phí", "Xử lý nhanh 24h", "Cam kết hoàn phí"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 bg-white/15 border border-white/25 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-3 h-3 text-[#7fe8c4]" /> {t}
                </span>
              ))}
            </div>
          </Motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-500 ${i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/20 hover:bg-white/40 border border-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all">
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/20 hover:bg-white/40 border border-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all">
        <ChevronLeft className="w-4 h-4 rotate-180" />
      </button>
    </section>
  );
}

/* ─── VisaPage ─── */
export function VisaPage({ defaultTab = "Tư vấn Visa" }: { defaultTab?: string }) {
  const [selected, setSelected] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState(defaultTab);

  useEffect(() => {
    setSelected(null);
    setActiveCategory(defaultTab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [defaultTab]);

  const filtered = activeCategory === "Tất cả"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const featured = filtered[0] ?? null;
  const rest = filtered.slice(1);

  if (selected) {
    return <ArticleDetail post={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#f4f6f9]">

      {/* Hero */}
      <HeroBanner />

      {/* Service cards */}
      <div className="max-w-5xl mx-auto px-6 -mt-6 mb-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICE_CARDS.map((c, i) => (
            <Motion.div
              key={c.region}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-2xl mb-3 block">{c.flag}</span>
              <p className="font-bold text-[#003B5C] text-sm mb-1">{c.region}</p>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">{c.examples}</p>
              <p className="text-[#00A651] font-black text-sm">{c.price}</p>
            </Motion.div>
          ))}
        </div>
      </div>

      {/* Blog section */}
      <div className="max-w-5xl mx-auto px-6 pb-24">

        {/* Header + tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[#00A651] font-semibold text-xs uppercase tracking-widest mb-1.5">Tin tức & Cập nhật</p>
            <h2 className="text-2xl font-black text-[#003B5C]">Dịch Vụ Visa & Passport</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#003B5C] text-white shadow"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-[#003B5C] hover:text-[#003B5C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured post — full width horizontal card */}
        {featured && (
          <Motion.article
            key={featured.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setSelected(featured)}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 mb-6 flex flex-col md:flex-row"
          >
            {/* Image */}
            <div className="md:w-[45%] relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img
                src={featured.image}
                alt={featured.title}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?w=1000&q=80";
                }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${featured.categoryColor}`}>
                {featured.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-3">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                <span className="w-0.5 h-0.5 bg-gray-300 rounded-full" />
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
              </div>
              <h3 className="text-lg md:text-xl font-black text-[#003B5C] leading-snug mb-3 group-hover:text-[#00639b] transition-colors line-clamp-2">
                {featured.title}
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2 mb-5">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
                  <Tag className="w-3 h-3" />{featured.tag}
                </span>
                <span className="flex items-center gap-1.5 text-[#00A651] font-bold text-xs group-hover:gap-2.5 transition-all">
                  Đọc bài viết <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Motion.article>
        )}

        {/* 2-column grid for remaining posts */}
        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((post, i) => (
            <Motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              onClick={() => setSelected(post)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
            >
              {/* 16:9 image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={post.image}
                  alt={post.title}
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?w=1000&q=80";
                  }}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
                <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  <span className="w-0.5 h-0.5 bg-gray-300 rounded-full" />
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
                <h3 className="text-[15px] font-black text-[#003B5C] leading-snug mb-2 line-clamp-2 group-hover:text-[#00639b] transition-colors min-h-[2.5rem]">
                  {post.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2 flex-1 min-h-[2.5rem]">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
                    <Tag className="w-3 h-3" />{post.tag}
                  </span>
                  <span className="flex items-center gap-1 text-[#00A651] font-bold text-xs group-hover:gap-2 transition-all">
                    Đọc thêm <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>

        {/* Why us */}
        <div className="mt-20 bg-gradient-to-r from-[#002d47] to-[#004b7a] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#7fe8c4] text-xs font-bold uppercase tracking-widest mb-2">Cam kết của Én Việt</p>
              <h2 className="text-2xl font-black mb-6">Tại sao chọn dịch vụ Passport của chúng tôi?</h2>
              <ul className="space-y-3.5">
                {[
                  "Tư vấn miễn phí và kiểm tra hồ sơ trước khi nộp",
                  "Nhận hồ sơ tận nơi, giao hộ chiếu đến tay bạn",
                  "Xử lý nhanh, thông báo tiến trình liên tục",
                  "Hỗ trợ làm nhanh trong ngày khi cần gấp",
                  "Giá dịch vụ cạnh tranh, minh bạch, không phát sinh",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <CheckCircle className="w-4 h-4 text-[#7fe8c4] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-5 text-center">
                  <p className="text-3xl font-black text-[#7fe8c4]">{s.value}</p>
                  <p className="text-xs text-white/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Article Detail ─── */
function ArticleDetail({ post, onBack }: { post: BlogPost; onBack: () => void }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-[#f4f6f9]"
    >
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-[#003B5C] hover:text-[#00A651] transition-colors">
            <ChevronLeft className="w-5 h-5" /> Quay lại Dịch Vụ Visa & Passport
          </button>
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${post.categoryColor}`}>{post.category}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-10">
        <Motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="flex items-center gap-1.5"><Tag className="w-3.5 h-3.5" />{post.tag}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-[#003B5C] leading-tight mb-5">{post.title}</h1>
          <p className="text-base text-gray-500 leading-relaxed border-l-4 border-[#00A651] pl-4 italic mb-8">{post.excerpt}</p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl overflow-hidden mb-10 shadow-lg"
          style={{ aspectRatio: "16/9" }}
        >
          <img 
            src={post.image} 
            alt={post.title} 
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?w=1000&q=80";
            }}
            className="w-full h-full object-cover" 
          />
        </Motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {post.sections.map((section, i) => (
              <Motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.06 }}>
                <h2 className="text-lg font-black text-[#003B5C] mb-3 flex items-start gap-3">
                  <span className="w-6 h-6 min-w-[1.5rem] bg-[#003B5C] text-white text-xs rounded-full flex items-center justify-center font-bold mt-0.5">{i + 1}</span>
                  {section.heading}
                </h2>
                <p className="text-[14px] text-gray-600 leading-relaxed pl-9">{section.body}</p>
              </Motion.div>
            ))}

            {post.tips.length > 0 && (
              <Motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-black text-amber-800 mb-4 flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-amber-500" /> Lưu ý quan trọng
                </h3>
                <ul className="space-y-2.5">
                  {post.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-amber-800">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />{tip}
                    </li>
                  ))}
                </ul>
              </Motion.div>
            )}
          </div>

          {post.requirements.length > 0 && (
            <Motion.aside initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-fit sticky top-20">
              <h3 className="font-black text-[#003B5C] mb-4 flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4 text-[#00A651]" /> Hồ sơ cần chuẩn bị
              </h3>
              <ul className="space-y-3 mb-6">
                {post.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#00A651] flex-shrink-0 mt-0.5" />{req}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-5 space-y-2">
                <button className="w-full bg-[#00A651] text-white font-bold py-3 rounded-xl hover:bg-[#008c44] transition-colors text-sm">
                  Liên hệ tư vấn ngay
                </button>
                <button onClick={onBack} className="w-full bg-[#f0f7ff] text-[#003B5C] font-semibold py-3 rounded-xl hover:bg-[#dceeff] transition-colors text-sm">
                  Xem bài viết khác
                </button>
              </div>
            </Motion.aside>
          )}
        </div>
      </article>
    </Motion.div>
  );
}
