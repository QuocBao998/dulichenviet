import { useState, useEffect, useRef } from "react";
import {
  motion as Motion,
  useInView,
  useScroll,
  useSpring,
  animate,
} from "motion/react";
import {
  Award,
  Shield,
  Target,
  CheckCircle,
  Headphones,
  Globe,
  Building2,
  MapPin,
  TrendingUp,
  FileCheck2,
} from "lucide-react";
import heritageLobbyImg from "../../assets/images/enviet_heritage_lobby_1794817319787.jpg";
import teamCultureImg from "../../assets/images/enviet_team_culture_1794817301104.jpg";

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { margin: "-50px 0px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(v) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(v) + suffix;
          }
        },
      });
      return () => controls.stop();
    } else if (!inView && nodeRef.current) {
      nodeRef.current.textContent = "0" + suffix;
    }
  }, [inView, value, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const popOut = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

interface HistoryMilestone {
  id: string;
  shortDate: string;
  displayYear: string;
  dateLabel: string;
  title: string;
  era: "2004-2019" | "2022";
  categoryLabel: string;
  keyFactLabel: string;
  keyFactValue: string;
  description: string;
  icon: "building" | "location" | "trending" | "license" | "award";
}

const HISTORY_MILESTONES: HistoryMilestone[] = [
  {
    id: "m-2004",
    shortDate: "2004",
    displayYear: "2004",
    dateLabel: "Năm 2004",
    title: "Thành Lập Công Ty TNHH TM – DV – Du Lịch Cánh Én",
    era: "2004-2019",
    categoryLabel: "Khởi nguồn thương hiệu",
    keyFactLabel: "Trụ sở đầu tiên",
    keyFactValue: "460 Minh Phụng, F.9, Q.11, TP.HCM",
    description:
      "Du lịch Én Việt được thành lập vào năm 2004 với tên gọi là CTY TNHH THƯƠNG MẠI – DV - DU LỊCH CÁNH ÉN - CANH EN TRADING – SERVICE – TOURISM COMPANY LIMITED viết tắt CANH EN CO.,LTD, trụ sở của công ty được đặt tại 460 Minh Phụng, F.9, Quận 11, TP.HCM.",
    icon: "building",
  },
  {
    id: "m-2007",
    shortDate: "2007",
    displayYear: "2007",
    dateLabel: "Năm 2007",
    title: "Thay Đổi Lần 1 — Dời Trụ Sở Về 45/10 Ông Ích Khiêm",
    era: "2004-2019",
    categoryLabel: "Mở rộng hoạt động",
    keyFactLabel: "Địa điểm mới",
    keyFactValue: "45/10 Ông Ích Khiêm, F.10, Q.11",
    description:
      "Sau đó đến năm 2007: Công ty thay đổi lần 1 đăng ký Kinh doanh thay đổi địa chỉ dời trụ sở về 45/10 Ông Ích Khiêm F.10, Quận 11 TP.HCM.",
    icon: "location",
  },
  {
    id: "m-2011",
    shortDate: "2011",
    displayYear: "2011",
    dateLabel: "Năm 2011",
    title: "Thay Đổi Lần 2 — Tăng Vốn 1 Tỷ Đồng & Mở Rộng Ngành Nghề",
    era: "2004-2019",
    categoryLabel: "Tăng vốn & địa điểm mới",
    keyFactLabel: "Vốn điều lệ",
    keyFactValue: "1.000.000.000 VNĐ · 45/12 Ông Ích Khiêm",
    description:
      "Năm 2011: Công ty thay đổi lần 2 đăng ký kinh doanh tăng vốn điều lệ lên 1.000.000.000 vnđ và thêm ngành nghề và dời đổi trụ sở công ty về địa chỉ 45/12 Ông Ích Khiêm F.10, Quận 11 TP.HCM.",
    icon: "trending",
  },
  {
    id: "m-2016",
    shortDate: "2016",
    displayYear: "2016",
    dateLabel: "Năm 2016",
    title: "Thay Đổi Lần 3 — Định Danh Thương Hiệu Én Việt (Swallow Wing)",
    era: "2004-2019",
    categoryLabel: "Tái định vị thương hiệu",
    keyFactLabel: "Tên viết tắt",
    keyFactValue: "SWALLOW WING CO.,LTD",
    description:
      "Năm 2016: Công ty thay đổi lần 3 – Ban Giám Đốc quyết định đổi tên CTY CÁNH ÉN thành CTY TNHH DU LỊCH TRUYỀN THÔNG VÀ SỰ KIỆN ÉN VIỆT – VIET SWALLOW EVENT AND MEDIA TOURIST COMPANY LIMITED tên viết tắt SWALLOW WING CO.,LTD.",
    icon: "award",
  },
  {
    id: "m-2019",
    shortDate: "2019",
    displayYear: "2019",
    dateLabel: "Năm 2019",
    title: "Thay Đổi Lần 4 — Mở Chi Nhánh 2 Tại Buôn Ma Thuột",
    era: "2004-2019",
    categoryLabel: "Phát triển mạng lưới",
    keyFactLabel: "Vốn & Chi nhánh 2",
    keyFactValue: "1.35 Tỷ · 53/3 Thăng Long, ĐắkLắk",
    description:
      "Năm 2019: Công ty thay đổi lần 4 đăng ký Kinh doanh tăng thành viên góp vốn và tăng vốn điều lệ lên 1.350.000.000 vnđ ngày 03/04/2019. Đồng thời thành lập chi nhánh 2 tại 53/3 đường Thăng Long, F. Tự An, TP. Buôn Ma Thuột, Tỉnh ĐắkLắk.",
    icon: "location",
  },
  {
    id: "m-2022-02",
    shortDate: "15/02/22",
    displayYear: "02.2022",
    dateLabel: "15/02/2022",
    title: "Đổi Tên CTY TNHH Dịch Vụ Lữ Hành Én Việt - ENVIET GROUP",
    era: "2022",
    categoryLabel: "Chuẩn hóa tập đoàn",
    keyFactLabel: "Vốn & Trụ sở",
    keyFactValue: "1.5 Tỷ VNĐ · 45/6 Ông Ích Khiêm",
    description:
      "Ngày 15/02/2022: Công ty đổi tên thành CTY TNHH DỊCH VỤ LỮ HÀNH ÉN VIỆT -ENVIET GROUP và dời trụ sở về 45/6 Ông Ích Khiêm, F.10, Quận 11, TP.HCM. Vốn điều lệ tăng 1.500.000.000vnđ.",
    icon: "building",
  },
  {
    id: "m-2022-03a",
    shortDate: "09/03/22",
    displayYear: "03.2022",
    dateLabel: "09/03/2022",
    title: "Nâng Vốn Điều Lệ Lên 30 Tỷ Đồng",
    era: "2022",
    categoryLabel: "Bứt phá quy mô vốn",
    keyFactLabel: "Vốn điều lệ mới",
    keyFactValue: "30.000.000.000 VNĐ (30 Tỷ)",
    description:
      "Ngày 09/03/2022: Công ty đăng ký thay đổi vốn điều lệ lên 30 tỷ đồng.",
    icon: "trending",
  },
  {
    id: "m-2022-03b",
    shortDate: "25/03/22",
    displayYear: "03.2022",
    dateLabel: "25/03/2022",
    title: "Cấp Lại Giấy Phép Kinh Doanh Lữ Hành Quốc Tế",
    era: "2022",
    categoryLabel: "Chứng nhận pháp lý quốc tế",
    keyFactLabel: "Số giấy phép",
    keyFactValue: "79-1303/2022/TCDLGP LHQT",
    description:
      "Ngày 25/03/2022: Xin cấp lại giấy phép Kinh Doanh Lữ Hành Quốc Tế số 79-1303/2022/TCDLGP LHQT.",
    icon: "license",
  },
  {
    id: "m-2022-04a",
    shortDate: "07/04/22",
    displayYear: "04.2022",
    dateLabel: "07/04/2022",
    title: "Đăng Ký Tăng Thêm Ngành Nghề Kinh Doanh",
    era: "2022",
    categoryLabel: "Đa dạng hóa dịch vụ",
    keyFactLabel: "Mở rộng pháp lý",
    keyFactValue: "Đăng ký tăng thêm ngành nghề 5",
    description:
      "Ngày 07/04/2022: Công ty Đăng ký kinh doanh tăng thêm ngành nghề 5.",
    icon: "award",
  },
  {
    id: "m-2022-04b",
    shortDate: "26/04/22",
    displayYear: "04.2022",
    dateLabel: "26/04/2022",
    title: "Chuyển Đổi Thành Công Ty Cổ Phần — ENVIETGROUP JSC",
    era: "2022",
    categoryLabel: "Chuyển đổi mô hình cổ phần",
    keyFactLabel: "Tên viết tắt",
    keyFactValue: "ENVIETGROUP - ENVIET JSC",
    description:
      "Ngày 26/04/2022: Ban Giám Đốc Công ty quyết định thay đổi đăng ký Kinh Doanh đổi tên công ty thành CTY CỔ PHẦN ĐẦU TƯ GIÁO DỤC VÀ DỊCH VỤ LỮ HÀNH ÉN VIỆT -ENVIET GROUP – ENVIET TRAVEL SERVICE AND EDUCATION INVESTMENT JOINT STOCK COMPANY tên viết tắt ENVIETGROUP -ENVIET JSC.",
    icon: "building",
  },
  {
    id: "m-2022-06",
    shortDate: "01/06/22",
    displayYear: "06.2022",
    dateLabel: "01/06/2022",
    title: "An Cư Trụ Sở Chính Tại 45B Ông Ích Khiêm",
    era: "2022",
    categoryLabel: "Trụ sở hiện tại",
    keyFactLabel: "Trụ sở chính",
    keyFactValue: "45B Ông Ích Khiêm, F.10, Q.11, TP.HCM",
    description:
      "Ngày 01/06/2022: Công ty dời trụ sở về 45B Ông Ích Khiêm F.10, Quận 11, TP.HCM.",
    icon: "location",
  },
];

function renderMilestoneIcon(type: HistoryMilestone["icon"]) {
  switch (type) {
    case "building":
      return <Building2 className="w-5 h-5" />;
    case "location":
      return <MapPin className="w-5 h-5" />;
    case "trending":
      return <TrendingUp className="w-5 h-5" />;
    case "license":
      return <FileCheck2 className="w-5 h-5" />;
    case "award":
      return <Award className="w-5 h-5" />;
  }
}

export function GioiThieuPage() {
  const [eraFilter, setEraFilter] = useState<"all" | "2004-2019" | "2022">("all");
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 70%"],
  });
  const spineScaleY = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    restDelta: 0.001,
  });

  const visibleMilestones =
    eraFilter === "all"
      ? HISTORY_MILESTONES
      : HISTORY_MILESTONES.filter((m) => m.era === eraFilter);

  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "20+ Năm Kinh Nghiệm",
      desc: "Đội ngũ hướng dẫn viên chuyên nghiệp, am hiểu sâu sắc từng điểm đến.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cam Kết Chất Lượng",
      desc: "Dịch vụ đúng cam kết, chuẩn 5 sao, mang lại trải nghiệm hoàn hảo.",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Hỗ Trợ 24/7",
      desc: "Luôn đồng hành và hỗ trợ khách hàng trong suốt mọi nẻo đường.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Tất Cả Trong Một",
      desc: "Tour, vé máy bay, visa – một nơi giải quyết tất cả nhu cầu của bạn.",
    },
  ];

  return (
    <div className="pt-12 pb-24 min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#ffffff] to-[#e8f5e9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* ── Page Header ── */}
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-[#00A651] font-extrabold tracking-[0.2em] uppercase text-xs md:text-sm mb-3">
            ENVIETGROUP · TỪ NĂM 2004
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-4">
            Về Chúng Tôi
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1e64ae] to-[#00A651] mx-auto rounded-full" />
        </Motion.div>

        {/* ── SECTION 1 (ĐẦU TIÊN): QUÁ TRÌNH HÌNH THÀNH VÀ PHÁT TRIỂN ── */}
        <section className="mb-24">
          {/* Hàng 1: Chữ Trái + Ảnh Phải (đồng bộ mẫu editorial thoáng sạch) */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 mt-4">
            <Motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <h2 className="text-[#00A651] font-black tracking-widest uppercase text-sm mb-2">
                Quá Trình Hình Thành Và Phát Triển
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#003B5C] mb-6 leading-tight">
                Hành Trình Hơn 20 Năm Xây Dựng &amp; Phát Triển Thương Hiệu Én
                Việt Từ Năm 2004
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify mb-6">
                Khởi đầu từ năm 2004 với tiền thân là Công ty TNHH Thương Mại –
                Dịch Vụ – Du Lịch Cánh Én tại TP.HCM, qua nhiều cột mốc nâng
                tầm quy mô, tăng vốn điều lệ lên 30 tỷ đồng và mở rộng mạng lưới
                chi nhánh,{" "}
                <strong className="text-[#003B5C]">
                  ENVIETGROUP – ENVIET JSC
                </strong>{" "}
                ngày nay là thương hiệu lữ hành quốc tế uy tín, đặt trụ sở chính
                tại 45B Ông Ích Khiêm, F.10, Quận 11, TP.HCM.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                <div>
                  <div className="text-2xl font-black text-[#1e64ae] tabular-nums">
                    2004
                  </div>
                  <div className="text-xs font-semibold text-gray-500 mt-0.5">
                    Năm thành lập
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#00A651] tabular-nums">
                    30 Tỷ
                  </div>
                  <div className="text-xs font-semibold text-gray-500 mt-0.5">
                    Vốn điều lệ (2022)
                  </div>
                </div>
                <div>
                  <div className="text-lg md:text-xl font-black text-[#003B5C] tabular-nums leading-8">
                    79-1303
                  </div>
                  <div className="text-xs font-semibold text-gray-500 mt-0.5">
                    GP Lữ hành QT
                  </div>
                </div>
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl group"
            >
              <img
                src="/assets/aistudio/z7893500614515_8302406d17517986f1085e7000a7352b_5bb587d3.jpg"
                alt="Đội ngũ Én Việt Group tại trụ sở 45B Ông Ích Khiêm, Q.11, TP.HCM"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.onerror = null;
                  img.src = heritageLobbyImg;
                }}
                className="w-full h-[410px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#003B5C]/25 via-transparent to-transparent" />
            </Motion.div>
          </div>

          {/* ── Biểu Đồ Các Cột Mốc Phát Triển (Vertical Alternating Diagram) ── */}
          <div className="mb-20">
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="text-center mb-10"
            >
              <p className="text-[#00A651] font-extrabold tracking-[0.2em] uppercase text-xs mb-2">
                2004 – 01/06/2022
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#003B5C] mb-4 uppercase tracking-wide">
                Biểu Đồ Các Cột Mốc Lịch Sử
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-[#1e64ae] to-[#00A651] mx-auto rounded-full mb-6" />

              {/* Era filter tabs */}
              <div className="inline-flex items-center gap-1 p-1.5 bg-white/85 backdrop-blur-md border border-gray-200/80 rounded-xl shadow-sm">
                {[
                  { id: "all", label: "Tất cả (11 mốc)" },
                  { id: "2004-2019", label: "2004 – 2019" },
                  { id: "2022", label: "Bước ngoặt 2022" },
                ].map((tab) => {
                  const active = eraFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() =>
                        setEraFilter(tab.id as "all" | "2004-2019" | "2022")
                      }
                      className={`relative px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                        active
                          ? "text-white"
                          : "text-slate-600 hover:text-[#003B5C]"
                      }`}
                    >
                      {active && (
                        <Motion.div
                          layoutId="eraFilterPill"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                          className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#1e64ae] to-[#00A651] shadow-sm"
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </Motion.div>

            {/* Diagram Container with Scroll-Linked Center Spine */}
            <div ref={timelineRef} className="relative max-w-6xl mx-auto overflow-x-clip px-1 py-2">
              {/* Static Background Rail */}
              <div
                aria-hidden="true"
                className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 md:-translate-x-1/2 bg-slate-200/80 rounded-full"
              />
              {/* Animated Scroll Progress Fill Spine */}
              <Motion.div
                aria-hidden="true"
                style={{ scaleY: spineScaleY }}
                className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 md:-translate-x-1/2 bg-gradient-to-b from-[#1e64ae] via-[#00A651] to-[#1e64ae] rounded-full origin-top z-[1]"
              />

              <div className="space-y-8 md:space-y-10">
                {visibleMilestones.map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <div
                      key={item.id}
                      className={`relative flex items-start md:items-center ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Center Node Marker */}
                      <Motion.div
                        initial={{ scale: 0.4, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                          type: "spring",
                          stiffness: 320,
                          damping: 20,
                        }}
                        className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1e64ae] to-[#00A651] text-white shadow-[0_8px_24px_rgba(30,100,174,0.3)] border-[3px] border-white flex items-center justify-center z-20 mt-5 md:mt-0"
                      >
                        {renderMilestoneIcon(item.icon)}
                      </Motion.div>

                      {/* Horizontal Connector Stem on Desktop */}
                      <Motion.div
                        aria-hidden="true"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-0.5 bg-gradient-to-r from-[#1e64ae]/50 to-[#00A651]/50 z-10 ${
                          isLeft ? "right-1/2 mr-6 origin-right" : "left-1/2 ml-6 origin-left"
                        }`}
                      />

                      {/* Card Slot - flies in cleanly when scrolling both up & down */}
                      <Motion.div
                        initial={{
                          opacity: 0,
                          x: isLeft ? -75 : 75,
                          y: 20,
                          scale: 0.94,
                        }}
                        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.18 }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 24,
                          mass: 0.9,
                        }}
                        className={`w-full pl-16 md:pl-0 md:w-1/2 ${
                          isLeft ? "md:pr-16" : "md:pl-16"
                        }`}
                      >
                        <Motion.div
                          whileHover={{
                            y: -5,
                            transition: {
                              type: "spring",
                              stiffness: 340,
                              damping: 24,
                            },
                          }}
                          className="bg-white p-6 md:p-7 rounded-3xl shadow-xl border border-gray-100 hover:border-blue-100 hover:shadow-[0_22px_48px_-12px_rgba(30,100,174,0.18)] transition-all duration-300 relative overflow-hidden group"
                        >
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-[180%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-blue-50/50 to-transparent skew-x-[-20deg]"
                          />
                          <div className="relative z-10">
                            <div className="flex flex-wrap items-center gap-2 text-xs font-extrabold mb-2">
                              <span className="text-[#1e64ae] uppercase tracking-wider tabular-nums">
                                {item.dateLabel}
                              </span>
                              <span className="text-slate-300" aria-hidden="true">
                                ·
                              </span>
                              <span className="text-[#00A651] font-bold">
                                {item.categoryLabel}
                              </span>
                            </div>
                            <h4 className="text-lg font-extrabold text-[#003B5C] leading-snug mb-2 group-hover:text-[#1e64ae] transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed text-justify">
                              {item.description}
                            </p>
                          </div>
                        </Motion.div>
                      </Motion.div>

                      {/* Empty half on desktop */}
                      <div className="hidden md:block md:w-1/2" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hàng 2: Ảnh Trái + Chữ Phải (đồng bộ mẫu editorial thoáng sạch) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="rounded-[2rem] overflow-hidden shadow-2xl relative group"
            >
              <img
                src={teamCultureImg}
                alt="Đội ngũ nhân sự Du lịch Én Việt thân thiện và chuyên nghiệp"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/50 via-transparent to-transparent" />
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            >
              <h2 className="text-[#00A651] font-black tracking-widest uppercase text-sm mb-2">
                Văn Hóa &amp; Khát Vọng Phát Triển
              </h2>
              <h3 className="text-3xl font-extrabold text-[#003B5C] mb-5 leading-tight">
                Không Ai Bị Bỏ Lại Phía Sau — Vươn Tầm Khu Vực &amp; Thế Giới
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed text-justify">
                Ngay từ lúc thành lập, những người sáng lập đã mong muốn tạo ra
                một môi trường công ty thân thiện, hòa đồng nhưng đồng thời cũng
                thách thức mỗi cá nhân phải có năng lực để thực hiện những mục
                tiêu lớn hơn. Với tiêu chí không ai bị bỏ lại phía sau, mọi nhân
                viên trong công ty sẽ được đào tạo và học hỏi, cũng như được
                truyền đạt kinh nghiệm từ những người đi trước nhằm mục đích
                phục vụ cho lợi ích của khách hàng, của công ty và xa hơn là cả
                ngành du lịch Việt Nam nói chung.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Du lịch Én Việt đang và mong muốn phấn đấu trở thành top công ty
                du lịch lữ hành hàng đầu tại Việt Nam, cung cấp các sản phẩm du
                lịch chất lượng cho khách hàng với giá cả hợp lý. Bên cạnh đó là
                tạo công ăn việc làm và giúp đỡ đào tạo nhiều nhân sự chuyên
                nghiệp phục vụ du lịch. Én Việt cũng phấn đấu trong tương lai xa
                hơn nữa vươn mình ra khắp các thị trường ở khu vực cũng như thế
                giới.
              </p>
              <ul className="space-y-3">
                {[
                  "Môi trường thân thiện, hòa đồng & đào tạo kế thừa thực chiến",
                  "Sản phẩm du lịch chất lượng cao với mức giá hợp lý",
                  "Phấn đấu trở thành top công ty lữ hành hàng đầu vươn tầm quốc tế",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[#003B5C] font-semibold text-sm md:text-base"
                  >
                    <CheckCircle className="w-5 h-5 text-[#00A651] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Motion.div>
          </div>
        </section>

        {/* ── SECTION 2: Du Lịch Sự Kiện Én Việt ── */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch mb-24 mt-8">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-[#00A651] font-black tracking-widest uppercase text-sm mb-2">
              Du Lịch Sự Kiện Én Việt
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#003B5C] mb-6 leading-tight">
              Du lịch Én Việt Nhà Tổ Chức Tour Du Lịch Chuyên Nghiệp - Tổng Đại
              Lý Vé Máy Bay Hàng Đầu Việt Nam
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify mb-6">
              Với phương châm luôn mang đến cho khách hàng những giá trị tốt đẹp
              nhất khi đồng hành cùng Du Lịch Sự Kiện Én Việt. Du Lịch Sự Kiện
              Én Việt là đơn vị luôn mang đến những chuyến đi đầy thú vị và tiết
              kiệm nhất với chiếc vé máy bay cũng như tour du lịch giá rẻ mà
              hành khách khó tìm được ở bất kỳ nơi nào. Đội ngũ nhân viên chuyên
              nghiệp, tận tình, chu đáo và tinh thần làm việc năng động chắc
              chắn hành khách sẽ cảm thấy hài lòng với những trải nghiệm dịch vụ
              tại Du Lịch Sự Kiện Én Việt.
            </p>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[340px]"
          >
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
              alt="Máy bay - Én Việt Travel"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.onerror = null;
                img.src = heritageLobbyImg;
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#003B5C]/40 to-transparent" />
          </Motion.div>
        </div>

        {/* ── SECTION 3: Hành Trình Khám Phá Cùng Én Việt ── */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch mb-20">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] overflow-hidden shadow-2xl relative min-h-[340px]"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Đội ngũ chuyên viên Én Việt Group"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.onerror = null;
                img.src = teamCultureImg;
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/60 to-transparent" />
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-extrabold text-[#003B5C] mb-6">
              Hành Trình Khám Phá Cùng Én Việt
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Thành lập với sứ mệnh mang đến những trải nghiệm du lịch tuyệt vời
              nhất, Én Việt Group tự hào là người bạn đồng hành đáng tin cậy
              trên mọi nẻo đường. Chúng tôi không ngừng nỗ lực đổi mới để cung
              cấp các dịch vụ chất lượng cao, từ tour trong và ngoài nước, vé
              máy bay đến dịch vụ visa trọn gói.
            </p>
            <ul className="space-y-4">
              {[
                "Dịch vụ tận tâm, chăm sóc khách hàng 24/7",
                "Đội ngũ hướng dẫn viên giàu kinh nghiệm",
                "Đối tác chiến lược của nhiều hãng hàng không lớn",
                "Quy trình nhanh chóng, minh bạch và an toàn",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[#003B5C] font-semibold"
                >
                  <CheckCircle className="w-5 h-5 text-[#00A651] shrink-0" />{" "}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Motion.div>
        </div>

        {/* ── SECTION 4: Tầm nhìn sứ mệnh ── */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 mb-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#003B5C] mb-6 uppercase tracking-wide">
              TẦM NHÌN VÀ SỨ MỆNH KINH DOANH
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-justify md:text-center">
              Công Ty Cổ Phần Đầu Tư Giáo Dục Và Dịch Vụ Lữ Hành Én Việt –
              ENVIETGROUP là đơn vị cung cấp tour du lịch bao gồm nội địa và
              quốc tế, các dịch vụ liên quan đến du lịch: dịch vụ visa, dịch vụ
              golf trip, tour du lịch,… Du Lịch Sự Kiện Én Việt luôn mang lại
              cho khách hàng dịch vụ với mức giá tốt nhất và tiện lợi nhất.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify md:text-center font-medium">
              Với phương châm{" "}
              <span className="text-[#1e64ae] font-bold">
                “Mỗi chuyến đi là một giá trị”
              </span>{" "}
              cùng đội ngũ nhân viên chuyên nghiệp, tận tình, chu đáo và tinh
              thần làm việc năng động chắc chắn sẽ đem đến sự hài lòng khi hành
              khách trải nghiệm những dịch vụ tại Du Lịch Sự Kiện Én Việt. Sự
              hài lòng của quý khách hàng là niềm vui đồng thời là mục tiêu phấn
              đấu cho toàn thể đội ngũ nhân viên Du Lịch Sự Kiện Én Việt.
            </p>
          </div>
        </Motion.div>

        {/* ── SECTION 5: GIÁ TRỊ CỐT LÕI (Sơ đồ) ── */}
        <div className="mb-24 mt-12">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003B5C] mb-4 uppercase tracking-wide">
              GIÁ TRỊ CỐT LÕI
            </h2>
            <div className="w-24 h-1 bg-[#00A651] mx-auto rounded-full" />
          </Motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Node (Core) */}
            <Motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                x: "-50%",
                y: "-50%",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: "-50%",
                y: "-50%",
              }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="hidden md:flex absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-[#1e64ae] to-[#00A651] rounded-full z-10 items-center justify-center shadow-[0_0_40px_rgba(0,166,81,0.4)] border-4 border-white"
            >
              <div className="text-center">
                <span className="block text-white font-black text-2xl uppercase tracking-widest">
                  Én Việt
                </span>
                <span className="block text-white/80 font-bold text-sm tracking-[0.2em] mt-1">
                  Group
                </span>
              </div>
            </Motion.div>

            {/* Connecting lines for Desktop */}
            <Motion.div
              initial={{
                opacity: 0,
                x: "-50%",
                y: "-50%",
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                x: "-50%",
                y: "-50%",
                scale: 1,
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block absolute top-1/2 left-1/2 w-[60%] h-[60%] border-2 border-dashed border-gray-300 rounded-full z-0 animate-[spin_60s_linear_infinite]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-48 md:gap-y-16 relative z-20">
              {/* UY TÍN */}
              <Motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col md:items-end text-left md:text-right group hover:-translate-y-2 transition-transform"
              >
                <div className="w-14 h-14 bg-blue-50 text-[#1e64ae] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#1e64ae] group-hover:text-white transition-colors">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#003B5C] mb-3">
                  UY TÍN
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Chúng tôi luôn hướng đến mục tiêu mang những trải nghiệm –
                  dịch vụ tốt nhất cho khách hàng. Các dịch vụ Du Lịch Sự Kiện
                  Én Việt cung cấp luôn được thực hiện một cách chuyên nghiệp và
                  nhanh chóng đáp ứng đúng nhu cầu của khách hàng.
                </p>
              </Motion.div>

              {/* CHUYÊN NGHIỆP */}
              <Motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col text-left group hover:-translate-y-2 transition-transform"
              >
                <div className="w-14 h-14 bg-green-50 text-[#00A651] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#00A651] group-hover:text-white transition-colors">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#003B5C] mb-3">
                  CHUYÊN NGHIỆP
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Tất cả đội ngũ nhân viên của Du Lịch Sự Kiện Én Việt luôn được
                  đào tạo chuyên nghiệp từ nghiệp vụ chuyên môn đến tinh thần
                  trách nhiệm. Đội ngũ nhân viên luôn sẵn sàng phục vụ khách hàng
                  một cách “CHUYÊN NGHIỆP VÀ HIỆU QUẢ”.
                </p>
              </Motion.div>

              {/* MỨC GIÁ CẠNH TRANH */}
              <Motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col md:items-end text-left md:text-right group hover:-translate-y-2 transition-transform"
              >
                <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-white transition-colors">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#003B5C] mb-3">
                  MỨC GIÁ CẠNH TRANH
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Luôn mang đến cho khách hàng những chiếc vé máy bay và dịch vụ
                  du lịch với mức giá tốt nhất từ đối tác. Bên cạnh đó thường
                  xuyên có chính sách ưu đãi riêng của công ty hàng tháng, dịp
                  lễ, tết.
                </p>
              </Motion.div>

              {/* TẬN TÂM */}
              <Motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col text-left group hover:-translate-y-2 transition-transform"
              >
                <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <Headphones className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#003B5C] mb-3">
                  TẬN TÂM
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Đội ngũ chuyên viên Du Lịch Sự Kiện Én Việt luôn sẵn sàng phục
                  vụ, tư vấn hỗ trợ nhiệt tình 24/7. Sẵn sàng giải đáp mọi thắc
                  mắc của khách hàng liên quan đến vé máy bay và các dịch vụ.
                </p>
              </Motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Why Én Việt (3D Modern View) ── */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#f8fcfb] via-[#e6f4ea] to-[#eef7f2]">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, #1E64AE, transparent 50%), radial-gradient(circle at bottom left, #77c14d, transparent 50%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#77c14d] text-sm font-extrabold tracking-[0.2em] uppercase mb-3 drop-shadow-sm inline-block">
              Chất Lượng Vượt Trội
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#003B5C]">
              Vì Sao Chọn{" "}
              <span className="font-black text-[#003B5C]">Én Việt</span>?
            </h2>
          </Motion.div>

          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {reasons.map((r) => (
              <Motion.div
                key={r.title}
                variants={popOut}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 text-center hover:bg-white transition-all hover:border-blue-100 shadow-xl shadow-blue-900/5 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e64ae]/10 to-[#00A651]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-[#1e64ae] border border-white group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:text-[#00A651]">
                  {r.icon}
                </div>
                <h3 className="font-extrabold text-[#003B5C] text-lg mb-3 relative z-10">
                  {r.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium relative z-10">
                  {r.desc}
                </p>
              </Motion.div>
            ))}
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-blue-900/10"
          >
            {[
              { val: 20, suf: "+", l: "Năm Kinh Nghiệm" },
              { val: 50, suf: "K+", l: "Lượt Khách / Năm" },
              { val: 5, suf: "+", l: "Văn Phòng, Chi Nhánh" },
              { val: 300, suf: "+", l: "Khách Hàng Mỗi Năm" },
            ].map((s) => (
              <div key={s.l} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#00A651] group-hover:from-[#00A651] group-hover:to-[#1e64ae] transition-colors mb-2 drop-shadow-md tabular-nums">
                  <AnimatedNumber value={s.val} suffix={s.suf} />
                </div>
                <div className="text-[#003B5C]/60 text-sm font-bold uppercase tracking-widest">
                  {s.l}
                </div>
              </div>
            ))}
          </Motion.div>
        </div>
      </section>
    </div>
  );
}