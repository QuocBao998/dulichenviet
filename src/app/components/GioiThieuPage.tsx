import { useState, useEffect, useRef } from "react";
import {
  motion as Motion,
  useInView,
  animate,
} from "motion/react";
import {
  Award,
  Shield,
  Users,
  Target,
  CheckCircle,
  Headphones,
  Globe,
} from "lucide-react";

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
            nodeRef.current.textContent =
              Math.round(v) + suffix;
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const popOut = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "backOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export function GioiThieuPage() {
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
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-4">
            Về Chúng Tôi
          </h1>
          <div className="w-24 h-1 bg-[#00A651] mx-auto rounded-full" />
        </Motion.div>

        {/* NEW SECTION: Du Lịch Sự Kiện Én Việt */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 mt-8">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#00A651] font-black tracking-widest uppercase text-sm mb-2">
              Du Lịch Sự Kiện Én Việt
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#003B5C] mb-6 leading-tight">
              Du lịch Én Việt Nhà Tổ Chức Tour Du Lịch Chuyên
              Nghiệp - Tổng Đại Lý Vé Máy Bay Hàng Đầu Việt Nam
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify mb-6">
              Với phương châm luôn mang đến cho khách hàng những
              giá trị tốt đẹp nhất khi đồng hành cùng Du Lịch Sự
              Kiện Én Việt. Du Lịch Sự Kiện Én Việt là đơn vị
              luôn mang đến những chuyến đi đầy thú vị và tiết
              kiệm nhất với chiếc vé máy bay cũng như tour du
              lịch giá rẻ mà hành khách khó tìm được ở bất kỳ
              nơi nào. Đội ngũ nhân viên chuyên nghiệp, tận
              tình, chu đáo và tinh thần làm việc năng động chắc
              chắn hành khách sẽ cảm thấy hài lòng với những
              trải nghiệm dịch vụ tại Du Lịch Sự Kiện Én Việt.
            </p>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
              alt="Máy bay - Én Việt Travel"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#003B5C]/40 to-transparent" />
          </Motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] overflow-hidden shadow-2xl relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Team"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/60 to-transparent" />
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-extrabold text-[#003B5C] mb-6">
              Hành Trình Khám Phá Cùng Én Việt
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Thành lập với sứ mệnh mang đến những trải nghiệm
              du lịch tuyệt vời nhất, Én Việt Group tự hào là
              người bạn đồng hành đáng tin cậy trên mọi nẻo
              đường. Chúng tôi không ngừng nỗ lực đổi mới để
              cung cấp các dịch vụ chất lượng cao, từ tour trong
              và ngoài nước, vé máy bay đến dịch vụ visa trọn
              gói.
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
                  <CheckCircle className="w-5 h-5 text-[#00A651]" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </Motion.div>
        </div>

        {/* NEW SECTION: Tầm nhìn sứ mệnh */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="bg-white/50 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 mb-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#003B5C] mb-6 uppercase tracking-wide">
              TẦM NHÌN VÀ SỨ MỆNH KINH DOANH
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-justify md:text-center">
              Công Ty Cổ Phần Đầu Tư Giáo Dục Và Dịch Vụ Lữ Hành
              Én Việt – ENVIETGROUP là đơn vị cung cấp tour du
              lịch bao gồm nội địa và quốc tế, các dịch vụ liên
              quan đến du lịch: dịch vụ visa, dịch vụ golf trip,
              tour du lịch,… Du Lịch Sự Kiện Én Việt luôn mang
              lại cho khách hàng dịch vụ với mức giá tốt nhất và
              tiện lợi nhất.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify md:text-center font-medium">
              Với phương châm{" "}
              <span className="text-[#1e64ae] font-bold">
                “Mỗi chuyến đi là một giá trị”
              </span>{" "}
              cùng đội ngũ nhân viên chuyên nghiệp, tận tình,
              chu đáo và tinh thần làm việc năng động chắc chắn
              sẽ đem đến sự hài lòng khi hành khách trải nghiệm
              những dịch vụ tại Du Lịch Sự Kiện Én Việt. Sự hài
              lòng của quý khách hàng là niềm vui đồng thời là
              mục tiêu phấn đấu cho toàn thể đội ngũ nhân viên
              Du Lịch Sự Kiện Én Việt.
            </p>
          </div>
        </Motion.div>

        {/* NEW SECTION: GIÁ TRỊ CỐT LÕI (Sơ đồ) */}
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
                  Chúng tôi luôn hướng đến mục tiêu mang những
                  trải nghiệm – dịch vụ tốt nhất cho khách hàng.
                  Các dịch vụ Du Lịch Sự Kiện Én Việt cung cấp
                  luôn được thực hiện một cách chuyên nghiệp và
                  nhanh chóng đáp ứng đúng nhu cầu của khách
                  hàng.
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
                  Tất cả đội ngũ nhân viên của Du Lịch Sự Kiện
                  Én Việt luôn được đào tạo chuyên nghiệp từ
                  nghiệp vụ chuyên môn đến tinh thần trách
                  nhiệm. Đội ngũ nhân viên luôn sẵn sàng phục vụ
                  khách hàng một cách “CHUYÊN NGHIỆP VÀ HIỆU
                  QUẢ”.
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
                  Luôn mang đến cho khách hàng những chiếc vé
                  máy bay và dịch vụ du lịch với mức giá tốt
                  nhất từ đối tác. Bên cạnh đó thường xuyên có
                  chính sách ưu đãi riêng của công ty hàng
                  tháng, dịp lễ, tết.
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
                  Đội ngũ chuyên viên Du Lịch Sự Kiện Én Việt
                  luôn sẵn sàng phục vụ, tư vấn hỗ trợ nhiệt
                  tình 24/7. Sẵn sàng giải đáp mọi thắc mắc của
                  khách hàng liên quan đến vé máy bay và các
                  dịch vụ.
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
              <span className="text-font-black text-[#003B5C]">
                Én Việt
              </span>
              ?
            </h2>
          </Motion.div>

          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {reasons.map((r, i) => (
              <Motion.div
                key={r.title}
                variants={popOut}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 text-center hover:bg-white transition-all hover:border-blue-100 shadow-xl shadow-blue-900/5 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50 opacity-0 group-hover:opaciSự hài lòng của quý khách hàng là niềm vui đồng thời là mục tiêu phấn đấu cho toàn thể đội ngũ nhân viên Du Lịch Sự Kiện Én Việt.ty-100 transition-opacity" />
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
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#00A651] group-hover:from-[#00A651] group-hover:to-[#1e64ae] transition-colors mb-2 drop-shadow-md">
                  <AnimatedNumber
                    value={s.val}
                    suffix={s.suf}
                  />
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