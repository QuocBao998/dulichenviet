import { useState, useEffect, useRef } from "react";
import {
  Search, Phone, Mail, MapPin, Menu, X, ArrowRight,
  Plane, Globe, Users, Star, Calendar, Clock, ChevronDown,
  Shield, Headphones, Award, ChevronRight, Flame, Facebook, Youtube, Music2, MessageCircle
} from "lucide-react";

import { createContext, useContext } from "react";

export type Lang = "vi" | "en";
export const LangContext = createContext<{lang: Lang, setLang: (l: Lang) => void}>({lang: "vi", setLang: () => {}});
export const useLang = () => useContext(LangContext);
export const t = (lang: Lang, vi: string, en: string) => lang === "vi" ? vi : en;

import { motion as Motion, useInView, animate, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import IntroVideo from "../imports/Gio__i_thie__u.mp4";
import TeamBuildingVideo from "../imports/Teambuilding.mp4";
import ChaoCamVideo from "../imports/Cha_o_Cam.mp4";
import LogoImage from "../imports/Logo.png";
import PromoImage from "../imports/Gemini_Generated_Image_z8oi6gz8oi6gz8oi.png";
import HeroImageNew from "../imports/Banner_Khuyen_mai.png.png";
import HotIcon from "../imports/1108.png";
import { GioiThieuPage } from "./components/GioiThieuPage";
import { TourPage } from "./components/TourPage";
import { GolfPage } from "./components/GolfPage";
import { VeMayBayPage } from "./components/VeMayBayPage";
import { VisaPage } from "./components/VisaPage";
import { ThongTinPage } from "./components/ThongTinPage";
import { LienHePage } from "./components/LienHePage";
import { ThuVienAnhPage } from "./components/ThuVienAnhPage";

export type Page = "home" | "gioi-thieu" | "tour" | "tour-trong-nuoc" | "tour-nuoc-ngoai" | "tour-gio-chot" | "tour-hanh-huong" | "tour-hanh-huong-cong-giao" | "tour-hanh-huong-phat-giao" | "golf" | "ve-may-bay" | "visa" | "thong-tin" | "lien-he" | "thu-vien-anh";

const NAV: { label: string; enLabel: string; page: Page }[] = [
  { label: "Trang Chủ", enLabel: "Home", page: "home" },
  { label: "Giới Thiệu", enLabel: "About", page: "gioi-thieu" },
  { label: "Tour", enLabel: "Tours", page: "tour" },
  { label: "Golf Trip", enLabel: "Golf Trip", page: "golf" },
  { label: "Vé Máy Bay", enLabel: "Flights", page: "ve-may-bay" },
  { label: "Dịch Vụ Visa", enLabel: "Visa Services", page: "visa" },
  { label: "Thông Tin Du Lịch", enLabel: "Travel Info", page: "thong-tin" },
  { label: "Liên Hệ", enLabel: "Contact", page: "lien-he" },
];

/* ── Animation Variants ── */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const popOut = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

/* ── Shared Utilities ── */
const glass = "bg-white/10 backdrop-blur-md border border-white/20";
const liquidGlass = "bg-white/60 backdrop-blur-2xl border border-white/50 shadow-2xl";



/* ── Header ── */
function Header({ current, nav }: { current: Page; nav: (p: Page, tab?: string) => void }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const subMenus: Record<string, { label: string; enLabel: string; page: Page; sub?: { label: string; enLabel: string; page: Page }[] }[]> = {
    "tour": [
      { label: "Tour Trong Nước", enLabel: "Domestic Tours", page: "tour-trong-nuoc" },
      { label: "Tour Nước Ngoài", enLabel: "International Tours", page: "tour-nuoc-ngoai" },
      { label: "Tour Giờ Chót", enLabel: "Last Minute Tours", page: "tour-gio-chot" },
      { 
        label: "Tour Hành Hương", enLabel: "Pilgrimage Tours",
        page: "tour-hanh-huong",
        sub: [
          { label: "Tour Hành Hương Công Giáo", enLabel: "Catholic Pilgrimage", page: "tour-hanh-huong-cong-giao" },
          { label: "Tour Hành Hương Phật Giáo", enLabel: "Buddhist Pilgrimage", page: "tour-hanh-huong-phat-giao" }
        ]
      },
    ],
    "ve-may-bay": [
      { label: "Vé Nội Địa", enLabel: "Domestic Flights", page: "ve-may-bay" },
      { label: "Vé Quốc Tế", enLabel: "International Flights", page: "ve-may-bay" },
    ],
    "visa": [
      { label: "Dịch Vụ Passport", enLabel: "Passport Services", page: "visa", tab: "Dịch vụ Passport" },
      { label: "Tư Vấn Visa", enLabel: "Visa Consultation", page: "visa", tab: "Tư vấn Visa" },
    ],
    "thong-tin": [
      { label: "Tin Tức Du Lịch", enLabel: "Travel News", page: "thong-tin", tab: "Tin tức du lịch" },
      { label: "Nhật Ký Du Lịch", enLabel: "Travel Diaries", page: "thong-tin", tab: "Nhật ký du lịch" },
      { label: "Cẩm Nang Du Lịch", enLabel: "Travel Guide", page: "thong-tin", tab: "Cẩm nang du lịch" },
      { label: "Tư Vấn Du Lịch", enLabel: "Travel Advice", page: "thong-tin", tab: "Tư vấn du lịch" },
      { label: "Khuyến Mãi", enLabel: "Promotions", page: "thong-tin", tab: "Khuyến mãi" },
      { label: "Thư viện ảnh", enLabel: "Photo Gallery", page: "thu-vien-anh" },
    ]
  };

  return (
    <header className={`top-0 left-0 w-full z-50 pt-1 transition-all duration-500 ${current !== "home" ? "relative bg-gradient-to-r from-[#1e64ae] via-[#00A651] to-[#77c14d] pb-1 shadow-md" : "absolute"}`}>
      {/* Soft top gradient glow for better readability */}
      {current === "home" && <div className="absolute inset-0 h-40 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />}
      
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-6 relative z-10 flex flex-col items-center gap-3">
        
        {/* Logo - Free floating */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* Cloud-like white background behind logo, reaching the top */}
          <div className="absolute top-[-50px] md:top-[-80px] left-1/2 -translate-x-1/2 w-[150vw] md:w-[120vw] h-[200px] md:h-[250px] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.9)_30%,_rgba(255,255,255,0)_70%)] pointer-events-none blur-md z-[-1]" />
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[80vw] h-[150px] bg-white opacity-80 blur-3xl rounded-full pointer-events-none z-[-1]" />
          
          <button onClick={() => nav("home")} className="relative group transition-all duration-700 hover:scale-110 active:scale-95">
            <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl opacity-60 scale-150 group-hover:opacity-100 transition-opacity" />
            <ImageWithFallback 
              src={LogoImage} 
              className="w-20 h-20 md:w-28 md:h-28 object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(255,255,255,0.5)]" 
              alt="Én Việt Logo" 
            />
          </button>
        </Motion.div>

        {/* Navigation Bar - Sleek Glass Pill */}
        <Motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden xl:flex w-full max-w-[1400px] mx-auto h-[60px] 2xl:h-[66px] rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] items-center justify-between px-2 2xl:px-4 py-2 gap-2 relative z-20"
        >
          {/* Main Menu */}
          <nav className="flex items-center justify-center gap-0.5 2xl:gap-1 flex-1 w-full overflow-visible">
            {NAV.map((item, index) => {
              // Position submenus perfectly: middle items centered, right items align-right
              const popoverPos = index > NAV.length - 3 ? "right-0" : index < 2 ? "left-0" : "left-1/2 -translate-x-1/2";
              return (
              <div 
                key={item.page} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveMenu(item.page)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => nav(item.page)}
                  className={`relative px-2 xl:px-3 2xl:px-4 py-2 text-[12px] 2xl:text-[13px] font-black rounded-full transition-all duration-300 whitespace-nowrap flex items-center gap-1 shrink-0 ${
                    current === item.page
                      ? "text-white shadow-md"
                      : "text-white hover:text-white hover:bg-white/30"
                  }`}
                >
                  {current === item.page && (
                    <Motion.div 
                      layoutId="nav-bg"
                      className="absolute inset-0 bg-gradient-to-r from-[#1e64ae] to-[#77c14d] rounded-full z-0" 
                    />
                  )}
                  <span className="relative z-10">{t(lang, item.label, item.enLabel)}</span>
                  {subMenus[item.page] && (
                    <ChevronDown className="relative z-10 w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform" />
                  )}
                </button>

                {/* Submenu Popover */}
                {subMenus[item.page] && (
                  <div className={`absolute top-[110%] ${popoverPos} pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-[100]`}>
                    <div className="backdrop-blur-3xl border border-white/50 rounded-2xl shadow-2xl py-3 min-w-[240px] bg-white/95 ring-1 ring-black/5 overflow-hidden">
                      {subMenus[item.page].map((sub) => (
                        <div key={t(lang, sub.label, sub.enLabel)} className="group/sub relative">
                          <button
                            onClick={() => { nav(sub.page, (sub as any).tab); setActiveMenu(null); }}
                            className="w-full text-left px-6 py-2.5 text-[13px] font-bold text-[#003B5C] hover:bg-gradient-to-r hover:from-[#1e64ae] hover:to-[#77c14d] hover:text-white transition-all flex items-center justify-between"
                          >
                            {t(lang, sub.label, sub.enLabel)}
                            {sub.sub ? (
                              <ChevronRight className="w-3 h-3 opacity-50" />
                            ) : (
                              <ChevronRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-1 transition-all" />
                            )}
                          </button>
                          
                          {/* Nested Submenu (Level 3) if exists */}
                          {sub.sub && (
                            <div className="absolute top-0 left-[100%] ml-1 opacity-0 -translate-x-2 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:pointer-events-auto transition-all duration-300">
                              <div className="backdrop-blur-3xl border border-white/50 rounded-2xl shadow-2xl py-2 min-w-[240px] bg-white/95 ring-1 ring-black/5">
                                {sub.sub.map((deepSub) => (
                                  <button 
                                    key={t(lang, deepSub.label, deepSub.enLabel)}
                                    onClick={() => { nav(deepSub.page); setActiveMenu(null); }}
                                    className="w-full text-left px-6 py-2.5 text-[13px] font-bold text-[#003B5C] hover:bg-gradient-to-r hover:from-[#1e64ae] hover:to-[#77c14d] hover:text-white transition-all flex items-center justify-between group/deep"
                                  >
                                    {t(lang, deepSub.label, deepSub.enLabel)}
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover/deep:opacity-100 group-hover/deep:translate-x-1 transition-all" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )})}
          </nav>

          {/* Right Utilities */}
          <div className="flex items-center justify-end gap-1.5 2xl:gap-3 shrink-0">
            {/* Search - Always visible text on XL+ */}
            <div className="flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 rounded-full w-32 xl:w-40 2xl:w-48 h-[40px] 2xl:h-[44px] transition-all hover:shadow-md focus-within:w-48 focus-within:bg-white focus-within:shadow-md group/search shrink-0 px-3 overflow-hidden">
              <Search className="w-4 h-4 text-white group-hover/search:text-[#003B5C] focus-within:text-[#003B5C] transition-colors shrink-0" />
              <input 
                type="text" 
                placeholder={t(lang, "Tìm kiếm...", "Search...")} 
                className="bg-transparent border-none text-[12px] font-bold text-white group-hover/search:text-[#003B5C] focus-within:text-[#003B5C] focus:ring-0 w-full placeholder:text-white/70 focus-within:placeholder:text-[#003B5C]/50 ml-2 outline-none block" 
              />
            </div>

            {/* Lang */}
            <div className="flex items-center bg-white/20 hover:bg-white/30 transition-all border border-white/40 rounded-full p-1 h-[40px] 2xl:h-[44px] shrink-0">
              <button onClick={() => setLang("vi")} className={`px-3 2xl:px-4 h-full text-[11px] 2xl:text-[12px] font-black rounded-full transition-colors ${lang === "vi" ? "bg-white text-[#1e64ae] shadow-sm" : "text-white/80 hover:text-white"}`}>VN</button>
              <button onClick={() => setLang("en")} className={`px-3 2xl:px-4 h-full text-[11px] 2xl:text-[12px] font-black rounded-full transition-colors ${lang === "en" ? "bg-white text-[#1e64ae] shadow-sm" : "text-white/80 hover:text-white"}`}>EN</button>
            </div>

            {/* CTA */}
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => nav("tour")}
              className="bg-gradient-to-r from-[#1e64ae] to-[#77c14d] hover:brightness-110 text-white text-[11px] xl:text-[12px] 2xl:text-[13px] font-black px-4 xl:px-5 2xl:px-6 h-[40px] 2xl:h-[44px] rounded-full transition-all shadow-lg whitespace-nowrap uppercase tracking-tight shrink-0 flex items-center justify-center"
            >
              {t(lang, "ĐẶT TOUR", "BOOK TOUR")}
            </Motion.button>
          </div>
        </Motion.div>

        {/* Mobile Menu Toggle */}
        <div className="xl:hidden w-full flex justify-end px-4 text-[16px]">
           <button 
             className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-xl" 
             onClick={() => setOpen(!open)}
           >
             {open ? <X className="w-6 h-6 text-[#003B5C]" /> : <Menu className="w-6 h-6 text-[#003B5C]" />}
           </button>
        </div>
      </div>

      {open && (
        <Motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden mt-4 max-w-7xl mx-4 overflow-hidden rounded-2xl border border-white/50 bg-white/95 backdrop-blur-2xl shadow-2xl relative z-40 max-h-[70vh] overflow-y-auto"
        >
          <div className="p-3 flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.page} className="flex flex-col">
                <div className="flex items-center">
                  <button
                    onClick={() => { nav(item.page); setOpen(false); }}
                    className={`flex-1 text-left px-5 py-3 text-sm font-bold rounded-xl transition-all ${
                      current === item.page 
                        ? "bg-gradient-to-r from-[#1e64ae] to-[#77c14d] text-white shadow-md" 
                        : "text-[#003B5C] hover:bg-blue-50 active:bg-blue-100"
                    }`}
                  >
                    {t(lang, item.label, item.enLabel)}
                  </button>
                  {subMenus[item.page] && (
                    <button 
                      onClick={() => setMobileExpanded(mobileExpanded === item.page ? null : item.page)}
                      className="p-3 text-[#003B5C]"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpanded === item.page ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                
                {/* Mobile Submenu Accordion */}
                {subMenus[item.page] && mobileExpanded === item.page && (
                  <div className="pl-6 pr-2 py-2 flex flex-col gap-1 border-l-2 border-[#1e64ae]/20 ml-6 my-1">
                    {subMenus[item.page].map((sub) => (
                      <div key={t(lang, sub.label, sub.enLabel)} className="flex flex-col">
                        <button 
                          onClick={() => { if(!sub.sub) { nav(sub.page, (sub as any).tab); setOpen(false); } }}
                          className="text-left px-4 py-2 text-[13px] font-bold text-[#003B5C]/80 hover:text-[#1e64ae] hover:bg-blue-50 rounded-lg transition-colors flex justify-between items-center"
                        >
                          {t(lang, sub.label, sub.enLabel)}
                        </button>
                        {/* Mobile Deep Submenu */}
                        {sub.sub && (
                          <div className="pl-4 py-1 flex flex-col gap-1 border-l-2 border-[#1e64ae]/10 ml-4 my-1">
                            {sub.sub.map((deepSub) => (
                              <button 
                                key={t(lang, deepSub.label, deepSub.enLabel)}
                                onClick={() => { nav(deepSub.page); setOpen(false); }}
                                className="text-left px-4 py-1.5 text-[12px] font-bold text-[#003B5C]/60 hover:text-[#1e64ae] transition-colors"
                              >
                                {t(lang, deepSub.label, deepSub.enLabel)}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Motion.div>
      )}
    </header>
  );
}

/* ── Footer ── */
function Footer({ nav }: { nav: (p: Page) => void }) {
  const { lang } = useLang();
  return (
    <footer className="bg-[#001D2E] text-white mt-0 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e64ae] opacity-10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <ImageWithFallback 
              src={LogoImage} 
              className="w-16 h-16 object-contain brightness-0 invert" 
              alt="ÉN VIỆT GROUP" 
            />
            <div>
              <div className="text-white font-black text-xl tracking-tight">ÉN VIỆT GROUP</div>
              <div className="text-[#00E676] text-xs tracking-[0.2em] uppercase font-bold mt-1">{t(lang, "Du Lịch · Sự Kiện", "Travel · Events")}</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            CTY CỔ PHẦN ĐẦU TƯ GIÁO DỤC VÀ DỊCH VỤ LỮ HÀNH ÉN VIỆT.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <div className="flex items-start gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-[#00A651] mt-0.5 shrink-0" />
              <span>45B Ông Ích Khiêm, Phường Bình Thới, TP.HCM</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-[#00A651] shrink-0" />
              <span>0964.110.000 | 0983.056.056 | 0971.33.55.33</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-[#00A651] shrink-0" />
              <span>sale1.dulichenviet@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Clock className="w-5 h-5 text-[#00A651] shrink-0" />
              <span>T2–T7: 8h–22h | CN: 8h–17h30</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A651]" />{t(lang, "Dịch Vụ", "Services")}</h4>
          <ul className="space-y-3">
            {NAV.map((item) => (
              <li key={item.page}>
                <button onClick={() => nav(item.page)} className="text-gray-400 hover:text-white text-sm flex items-center gap-2 group transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#00A651] group-hover:translate-x-1 transition-transform" />
                  {t(lang, item.label, item.enLabel)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1e64ae]" />{t(lang, "Tour Nổi Bật", "Featured Tours")}</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {["Nhật Bản Mùa Hoa Tử Đằng", "Thổ Nhĩ Kỳ 8N7Đ", "Hàn Quốc Busan–Seoul", "Thái Lan Bangkok–Pattaya", "Đà Lạt Săn Mây", "Hà Giang Vòng Cung"].map((t) => (
              <li key={t}>
                <button onClick={() => nav("tour")} className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3 h-3 text-[#1e64ae] group-hover:translate-x-1 transition-transform" />
                  {t}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-xs">
            © 2026 Du Lịch Sự Kiện Én Việt – ENVIETGROUP. All rights reserved.
          </div>
          <div className="text-gray-500 text-xs">
            www.dulichenviet.vn
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────────────────────────────────────── */
function HomePage({ nav, openForm }: { nav: (p: Page) => void, openForm: () => void }) {
  const { lang } = useLang();
  const [dest, setDest] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [heroIndex, setHeroIndex] = useState(0);

  const heroBanners = [
    HeroImageNew,
    "https://images.unsplash.com/photo-1766721375768-2ddbfeeb1f4e?w=1800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80",
    "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=1800&q=80"
  ];

  useEffect(() => {
    // Banner đầu tiên (index 0) sẽ hiển thị 10 giây, các banner khác hiển thị 5 giây
    const duration = heroIndex === 0 ? 10000 : 5000;
    const timer = setTimeout(() => {
      setHeroIndex(prev => (prev + 1) % heroBanners.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [heroIndex]);

  const featuredTours = [
    {
      img: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80",
      country: "🇯🇵 Nhật Bản",
      title: "Khám Phá Nhật Bản – Mùa Hoa Tử Đằng Tuyệt Đẹp",
      duration: "6N5Đ",
      price: "45.888.000đ",
      tag: "Hot",
    },
    {
      img: "https://images.unsplash.com/photo-1752228898255-edf840342a9d?w=800&q=80",
      country: "🇹🇷 Thổ Nhĩ Kỳ",
      title: "Hành Trình Vàng Istanbul – Cappadocia",
      duration: "8N7Đ",
      price: "48.800.000đ",
      tag: "Mới",
    },
    {
      img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80",
      country: "🇹🇭 Thái Lan",
      title: "Bangkok – Pattaya Thiên Đường Mua Sắm 2026",
      duration: "5N4Đ",
      price: "7.490.000đ",
      tag: "Giá Tốt",
    },
    {
      img: "https://images.unsplash.com/photo-1688952397229-d4260e2630ba?w=800&q=80",
      country: "🇻🇳 Việt Nam",
      title: "Săn Mây Trùng Điệp Đà Lạt – Langbiang",
      duration: "3N2Đ",
      price: "2.790.000đ",
      tag: "Nội Địa",
    },
  ];

  const reasons = [
    { icon: <Award className="w-8 h-8" />, title: "20+ Năm Kinh Nghiệm", desc: "Đội ngũ hướng dẫn viên chuyên nghiệp, am hiểu sâu s���c từng điểm đến." },
    { icon: <Shield className="w-8 h-8" />, title: "Cam Kết Chất Lượng", desc: "Dịch vụ đúng cam kết, chuẩn 5 sao, mang lại trải nghiệm hoàn hảo." },
    { icon: <Headphones className="w-8 h-8" />, title: "Hỗ Trợ 24/7", desc: "Luôn đồng hành và hỗ trợ khách hàng trong suốt mọi nẻo đường." },
    { icon: <Globe className="w-8 h-8" />, title: "Tất Cả Trong Một", desc: "Tour, vé máy bay, visa – một nơi giải quyết tất cả nhu cầu của bạn." },
  ];

  return (
    <main className="bg-[#f8fcfb] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
        <AnimatePresence>
          <Motion.img
            key={heroIndex}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            src={heroBanners[heroIndex]}
            alt="Banner Én Việt"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Richer hero overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003B5C]/80 via-[#1e64ae]/50 to-[#00A651]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fcfb] via-transparent to-transparent opacity-90" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-16">
          <Motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl text-center mx-auto flex flex-col items-center"
          >
            
            <Motion.h1 variants={fadeInUp} className="font-black text-white leading-[1.1] mb-6 drop-shadow-2xl text-[64px]">
              {t(lang, "Chắp Cánh Đam Mê", "Ignite Your Passion for")} <br />
              <Motion.span 
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] via-[#00E676] to-[#77c14d] bg-[length:200%_auto] pb-2 text-[64px]"
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                {t(lang, "Khám Phá Thế Giới", "Exploring the World")}
              </Motion.span>
            </Motion.h1>
            
            <Motion.p variants={fadeInUp} className="text-white/95 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-semibold drop-shadow-lg backdrop-blur-sm bg-black/10 p-4 rounded-2xl border border-white/10">
              {t(lang, "Dịch vụ du lịch ", "All-in-one travel services ")}<strong className="text-white">{t(lang, "TẤT CẢ TRONG MỘT", "ALL IN ONE")}</strong>{t(lang, " — Tour trong & ngoài nước, vé máy bay, dịch vụ visa và tổ chức sự kiện trọn gói.", " — Domestic & international tours, flights, visa services, and events.")}
            </Motion.p>
            
            <Motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openForm} 
                className="bg-gradient-to-r from-[#1e64ae] to-[#77c14d] text-white font-extrabold px-10 py-4 rounded-2xl transition-all shadow-[0_10px_30px_rgba(30,100,174,0.4)] text-sm md:text-base tracking-wide uppercase"
              >{t(lang, "ĐĂNG KÝ NGAY ĐỂ NHẬN ƯU ĐÃI", "REGISTER NOW FOR OFFERS")}</Motion.button>
              <Motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => nav("lien-he")} 
                className={`${glass} bg-white/10 text-white font-bold px-10 py-4 rounded-2xl transition-all text-sm md:text-base tracking-wide border-white/50 backdrop-blur-2xl hover:border-white shadow-xl`}
              >{t(lang, "Nhận Tư Vấn", "Get Advice")}</Motion.button>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* ── Search Bar / Filter ── */}
      <section className="max-w-5xl mx-auto px-4 -mt-24 relative z-30 perspective-1000">
        <Motion.div 
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className={`${liquidGlass} rounded-[2rem] p-4 md:p-6`}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="group">
              <label className="text-[11px] font-black text-[#003B5C]/70 uppercase tracking-widest block mb-2 pl-2">{t(lang, "Điểm Đến", "Destination")}</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A651] group-focus-within:text-[#1e64ae] transition-colors" />
                <select
                  className="w-full pl-12 pr-4 py-4 bg-white/80 hover:bg-white backdrop-blur-xl border border-white/80 rounded-2xl text-[14px] focus:outline-none focus:ring-4 focus:ring-[#00A651]/20 text-[#003B5C] font-bold appearance-none cursor-pointer transition-all shadow-sm group-hover:shadow-md"
                  value={dest} onChange={(e) => setDest(e.target.value)}
                >
                  <option value="" className="text-gray-400">{t(lang, "Bạn muốn đi đâu?", "Where to?")}</option>
                  {["Nhật Bản", "Thổ Nhĩ Kỳ", "Hàn Quốc", "Thái Lan", "Dubai", "Châu Âu", "Đà Lạt", "Hà Giang", "Hạ Long"].map((d) => (
                    <option key={d} value={d} className="text-[#003B5C] font-semibold">{d}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#003B5C]/40 pointer-events-none" />
              </div>
            </div>
            <div className="group">
              <label className="text-[11px] font-black text-[#003B5C]/70 uppercase tracking-widest block mb-2 pl-2">{t(lang, "Loại Tour", "Tour Type")}</label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A651] group-focus-within:text-[#1e64ae] transition-colors" />
                <select
                  className="w-full pl-12 pr-4 py-4 bg-white/80 hover:bg-white backdrop-blur-xl border border-white/80 rounded-2xl text-[14px] focus:outline-none focus:ring-4 focus:ring-[#00A651]/20 text-[#003B5C] font-bold appearance-none cursor-pointer transition-all shadow-sm group-hover:shadow-md"
                  value={type} onChange={(e) => setType(e.target.value)}
                >
                  <option value="">{t(lang, "Tất cả loại tour", "All tour types")}</option>
                  <option>{t(lang, "Tour Trong Nước", "Domestic")}</option>
                  <option>{t(lang, "Tour Ngoài Nước", "International")}</option>
                  <option>Golf Trip</option>
                  <option>{t(lang, "Hành Hương Công Giáo", "Catholic Pilgrimage")}</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#003B5C]/40 pointer-events-none" />
              </div>
            </div>
            <div className="group">
              <label className="text-[11px] font-black text-[#003B5C]/70 uppercase tracking-widest block mb-2 pl-2">{t(lang, "Thời Gian", "Time")}</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A651] group-focus-within:text-[#1e64ae] transition-colors" />
                <input
                  type="date"
                  className="w-full pl-12 pr-4 py-4 bg-white/80 hover:bg-white backdrop-blur-xl border border-white/80 rounded-2xl text-[14px] focus:outline-none focus:ring-4 focus:ring-[#00A651]/20 text-[#003B5C] font-bold transition-all shadow-sm group-hover:shadow-md"
                  value={date} onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-end">
              <Motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => nav("tour")}
                className="w-full h-[54px] bg-gradient-to-r from-[#1e64ae] to-[#77c14d] hover:brightness-110 text-white font-black text-sm rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20 uppercase tracking-wide"
              >
                <Search className="w-5 h-5" /> {t(lang, "Tìm Kiếm", "Search")}
              </Motion.button>
            </div>
          </div>
        </Motion.div>
      </section>

      {/* ── Featured Tours ── */}
      <section className="max-w-7xl mx-auto px-4 mt-24 mb-20 overflow-visible">
        <Motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="text-[#00A651] text-sm font-extrabold tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#00A651] rounded-full" /> {t(lang, "Khám Phá Ngay", "Explore Now")}</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#003B5C] tracking-tight">{t(lang, "Tour Nổi Bật Nhất", "Most Featured Tours")}</h2>
          </div>
          <button onClick={() => nav("tour")} className="text-[#1e64ae] font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all group bg-blue-50 px-5 py-2.5 rounded-full hover:bg-blue-100"> {t(lang, "Xem tất cả hành trình", "View all tours")} <ArrowRight className="w-4 h-4 group-hover:text-[#00A651] transition-colors" />
          </button>
        </Motion.div>

        <Motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000"
        >
          {featuredTours.map((tour) => (
            <Motion.div
              key={tour.title}
              variants={popOut}
              whileHover={{ y: -12, scale: 1.02, rotateX: 2, rotateY: -2 }}
              className="group cursor-pointer rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col"
              onClick={() => nav("tour")}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative h-60 overflow-hidden">
                <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D2E]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className={`text-[11px] font-black px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md uppercase tracking-wide ${
                    tour.tag === "Hot" ? "bg-red-500/90 text-white" :
                    tour.tag === "Mới" ? "bg-[#00A651]/90 text-white" :
                    tour.tag === "Giá Tốt" ? "bg-amber-400/90 text-[#003B5C]" :
                    "bg-white/90 text-[#003B5C]"
                  }`}>{tour.tag} {tour.tag === "Hot" && <img src={HotIcon} className="w-4 h-4 inline-block ml-1 -mt-1 drop-shadow-sm" alt="hot" />}</span>
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-2 text-white shadow-sm border border-white/30">
                     <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-white text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">{tour.country}</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-extrabold text-[#003B5C] text-lg leading-snug mb-4 line-clamp-2 group-hover:text-[#1e64ae] transition-colors">{tour.title}</h3>
                <div className="mt-auto">
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 mb-4 bg-gray-50 p-3 rounded-xl">
                    <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#00A651]" /> {tour.duration}</div>
                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                    <div className="flex items-center gap-1.5"><Plane className="w-4 h-4 text-[#1e64ae]" /> {t(lang, "Bay khứ hồi", "Round trip")}</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{t(lang, "Giá từ", "From")}</div>
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#00A651] font-black text-xl">{tour.price}</div>
                    </div>
                    <div className="bg-blue-50 text-[#1e64ae] group-hover:bg-[#1e64ae] group-hover:text-white p-3 rounded-xl transition-colors shadow-sm">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </section>

      {/* ── Video Section ── */}
      <section className="max-w-7xl mx-auto px-4 mt-8 mb-24">
        <Motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-4">{t(lang, "Trải Nghiệm Cùng Én Việt", "Experience with Én Việt")}</h2>
          <div className="w-24 h-1 bg-[#00A651] mx-auto rounded-full" />
        </Motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: IntroVideo, title: t(lang, "Giới Thiệu Én Việt Group", "About Én Việt Group") },
            { src: TeamBuildingVideo, title: t(lang, "Teambuilding & Sự Kiện", "Teambuilding & Events") },
            { src: ChaoCamVideo, title: t(lang, "Khám Phá Các Điểm Đến", "Explore Destinations") }
          ].map((vid, idx) => (
            <Motion.div 
              key={idx}
              variants={fadeInUp}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-[2rem] overflow-hidden shadow-2xl relative group bg-black"
            >
              <video 
                src={vid.src} 
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                controls 
                preload="metadata"
              />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                {vid.title}
              </div>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* ── Customer Reviews ── */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f8fcfb] via-[#e6f4ea] to-[#eef7f2]">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#77c14d] text-sm font-extrabold tracking-[0.2em] uppercase mb-3 drop-shadow-sm inline-block">Khách Hàng Nói Gì</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#003B5C]">Đánh Giá Từ Khách Hàng</h2>
          </Motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Chị Minh Thư", role: "Du khách Tour Nhật Bản", text: "Trải nghiệm tuyệt vời! Hướng dẫn viên rất chu đáo và nhiệt tình. Chuyến đi Nhật ngắm hoa tử đằng thực sự để lại nhiều kỷ niệm đẹp cho cả gia đình." },
              { name: "Anh Hoàng Nam", role: "Khách hàng Teambuilding", text: "Công ty chúng tôi đã có một chương trình teambuilding thành công rực rỡ. Tổ chức chuyên nghiệp, trò chơi thú vị, ẩm thực ngon miệng." },
              { name: "Cô Phương Lan", role: "Du khách Tour Thái Lan", text: "Giá cả hợp lý mà dịch vụ lại rất tốt. Khách sạn đẹp, xe di chuyển thoải mái. Lần sau tôi chắc chắn sẽ tiếp tục ủng hộ Én Việt." }
            ].map((review, i) => (
              <Motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 relative"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1e64ae] to-[#00A651] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(4)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003B5C]">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Call To Action Banner ── */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <Motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <img src="https://images.unsplash.com/photo-1609412058473-c199497c3c5d?w=1600&q=80" alt="Banner" className="absolute inset-0 w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C]/90 via-[#1e64ae]/80 to-transparent" />
          
          <div className="relative z-10 p-12 md:p-20 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Bạn Đã Sẵn Sàng Cho Chuyến Đi Tiếp Theo?
            </h2>
            <p className="text-white/80 text-lg mb-10 font-medium leading-relaxed">
              Đăng ký ngay để nhận thông báo về các chương trình khuyến mãi độc quyền và các tour du lịch mới nhất từ Én Việt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Nhập email của bạn..." 
                className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder:text-white/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#00E676] font-medium"
              />
              <Motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00E676] hover:bg-[#00c563] text-[#003B5C] font-black px-8 py-4 rounded-2xl transition-colors whitespace-nowrap uppercase tracking-wide shadow-lg"
              >
                Đăng Ký Ngay
              </Motion.button>
            </div>
          </div>
        </Motion.div>
      </section>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   APP ROUTER
───────────────────────────────────────────────────────────────────────────── */
export default function App() {
  const [lang, setLang] = useState<Lang>("vi");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <AppContent />
    </LangContext.Provider>
  );
}

function AppContent() {
  const { lang, setLang } = useLang();

  const [page, setPage] = useState<Page>("home");
  const [visaTab, setVisaTab] = useState<string>("Tư vấn Visa");
  const [thongTinTab, setThongTinTab] = useState<string>("Tất cả");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [dismissCount, setDismissCount] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const lastPromoTime = useRef(Date.now());
  const dismissCountRef = useRef(0);
  const isPromoOpenRef = useRef(false);
  const isFormOpenRef = useRef(false);

  useEffect(() => {
    try {
      const storedDismiss = localStorage.getItem('promoDismissCount_v4');
      if (storedDismiss) {
        const val = parseInt(storedDismiss);
        setDismissCount(val);
        dismissCountRef.current = val;
      }
    } catch(e) {}
  }, []);

  useEffect(() => { isPromoOpenRef.current = isPromoOpen; }, [isPromoOpen]);
  useEffect(() => { isFormOpenRef.current = isFormOpen; }, [isFormOpen]);
  useEffect(() => { dismissCountRef.current = dismissCount; }, [dismissCount]);

  useEffect(() => {
    const tryShowPromo = () => {
      if (dismissCountRef.current >= 3) return;
      if (isPromoOpenRef.current || isFormOpenRef.current) return;
      
      const now = Date.now();
      if (now - lastPromoTime.current >= 15000) {
        setIsPromoOpen(true);
        lastPromoTime.current = now;
      }
    };

    const handleScroll = () => tryShowPromo();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const interval = setInterval(tryShowPromo, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (dismissCountRef.current >= 3) return;
    if (isPromoOpenRef.current || isFormOpenRef.current) return;
    
    const now = Date.now();
    if (now - lastPromoTime.current >= 15000) {
      setIsPromoOpen(true);
      lastPromoTime.current = now;
    }
  }, [page]);

  const handleDismissPromo = () => {
    setIsPromoOpen(false);
    const newCount = dismissCountRef.current + 1;
    setDismissCount(newCount);
    dismissCountRef.current = newCount;
    try {
      localStorage.setItem('promoDismissCount_v4', newCount.toString());
    } catch(e) {}
    lastPromoTime.current = Date.now();
  };

  const navigateTo = (p: Page, tab?: string) => {
    setPage(p);
    if (tab && p === "visa") setVisaTab(tab);
    if (tab && p === "thong-tin") setThongTinTab(tab);
    if (!tab && p === "thong-tin") setThongTinTab("Tất cả");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#00A651] selection:text-white bg-[#f8fcfb]">
      <Header current={page} nav={navigateTo} />
      
      {page === "home" && <HomePage nav={navigateTo} openForm={() => setIsFormOpen(true)} />}
      {page === "gioi-thieu" && <GioiThieuPage />}
      {page.startsWith("tour") && <TourPage category={page} openForm={() => setIsFormOpen(true)} />}
      {page === "golf" && <GolfPage />}
      {page === "ve-may-bay" && <VeMayBayPage />}
      {page === "visa" && <VisaPage defaultTab={visaTab} />}
      {page === "thong-tin" && <ThongTinPage defaultTab={thongTinTab} />}
      {page === "thu-vien-anh" && <ThuVienAnhPage nav={navigateTo} />}
      {page === "lien-he" && <LienHePage />}
      
      
      
      {/* Contact FAB */}
      <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end gap-3">
        <AnimatePresence>
          {isContactOpen && (
            <Motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="flex flex-col gap-2"
            >
              <a href="https://www.youtube.com/@DuL%E1%BB%8Bch%C3%89nVi%E1%BB%87t" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white pl-4 pr-2 py-2 rounded-full shadow-xl border border-gray-100 hover:scale-105 transition-transform group">
                <span className="text-sm font-bold text-[#003B5C] whitespace-nowrap">{t(lang, "Liên hệ Zalo", "Contact Zalo")}</span>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
                  Zalo
                </div>
              </a>
              <button onClick={() => setIsFormOpen(true)} className="flex items-center gap-3 bg-white pl-4 pr-2 py-2 rounded-full shadow-xl border border-gray-100 hover:scale-105 transition-transform group">
                <span className="text-sm font-bold text-[#003B5C] whitespace-nowrap">{t(lang, "Chat với nhân viên", "Chat with Staff")}</span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#1e64ae] to-[#00A651] flex items-center justify-center text-white">
                  <MessageCircle className="w-4 h-4" />
                </div>
              </button>
            </Motion.div>
          )}
        </AnimatePresence>

        <Motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsContactOpen(!isContactOpen)}
          className="w-14 h-14 bg-gradient-to-r from-[#1e64ae] to-[#00A651] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,166,81,0.4)] relative"
        >
          {isContactOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          
          {/* Pulse effect */}
          {!isContactOpen && (
            <span className="absolute inset-0 rounded-full border-2 border-[#00A651] animate-ping opacity-75" />
          )}
        </Motion.button>
      </div>

      {/* Floating Socials */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[60] p-2">
        <a href="https://www.facebook.com/dulichsukienenviet" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-l-xl flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:w-12 hover:-translate-x-1 transition-all duration-300">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="https://www.tiktok.com/@envietofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-black to-gray-800 text-white rounded-l-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:w-12 hover:-translate-x-1 transition-all duration-300">
          <Music2 className="w-5 h-5" />
        </a>
        <a href="https://www.youtube.com/@DuL%E1%BB%8Bch%C3%89nVi%E1%BB%87t" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-l-xl flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:w-12 hover:-translate-x-1 transition-all duration-300">
          <Youtube className="w-5 h-5" />
        </a>
      </div>

      <Footer nav={navigateTo} />
      {/* Registration Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <Motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsFormOpen(false)}
            />
            <Motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              <div className="bg-gradient-to-r from-[#1e64ae] to-[#00A651] p-6 text-center relative">
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 rounded-full p-2 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">{t(lang, "Nhận Ưu Đãi Ngay", "Get Offer Now")}</h3>
                <p className="text-white/90 text-sm font-medium">{t(lang, "Để lại thông tin, chuyên viên sẽ liên hệ ngay!", "Leave your info, our specialist will contact you soon!")}</p>
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#003B5C] mb-1">{t(lang, "Họ và tên *", "Full Name *")}</label>
                  <input type="text" placeholder={t(lang, "Nhập họ tên của bạn", "Enter your name")} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/20 outline-none transition-all text-sm font-medium bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#003B5C] mb-1">{t(lang, "Số điện thoại *", "Phone Number *")}</label>
                  <input type="tel" placeholder={t(lang, "Nhập số điện thoại", "Enter your phone number")} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/20 outline-none transition-all text-sm font-medium bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#003B5C] mb-1">{t(lang, "Điểm đến mong muốn", "Desired Destination")}</label>
                  <input type="text" placeholder={t(lang, "Ví dụ: Nhật Bản, Châu Âu...", "E.g: Japan, Europe...")} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/20 outline-none transition-all text-sm font-medium bg-gray-50 focus:bg-white" />
                </div>
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="w-full bg-[#00A651] hover:bg-[#008f45] text-white font-black py-4 rounded-xl shadow-lg transition-colors mt-4 uppercase tracking-wider"
                >{t(lang, "Gửi Thông Tin", "Submit Info")}</button>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Promo Banner Popup */}
      <AnimatePresence>
        {isPromoOpen && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
            <Motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={handleDismissPromo}
            />
            <Motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 3 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-lg md:max-w-2xl lg:max-w-4xl z-10"
            >
              <button 
                onClick={handleDismissPromo}
                className="absolute -top-4 -right-4 z-20 bg-white hover:bg-gray-100 text-[#003B5C] rounded-full p-2.5 shadow-xl transition-transform hover:scale-110 border border-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5 font-bold" />
              </button>
              
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative group">
                <img src={PromoImage} alt="Khuyến mãi đặc biệt" className="w-full h-auto object-cover" />
                
                {/* Static Registration Button placed carefully on the image */}
                <div className="absolute bottom-[2%] md:bottom-[4%] left-1/2 -translate-x-1/2 w-[85%] max-w-sm">
                  <Motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setIsPromoOpen(false); setIsFormOpen(true); }}
                    className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-[#003B5C] font-black py-2.5 md:py-3.5 px-6 rounded-2xl shadow-[0_10px_30px_rgba(251,191,36,0.6)] w-full text-center uppercase tracking-widest border-2 border-amber-200 text-sm md:text-base transition-all"
                  >{t(lang, "Đăng Ký Có Hạn", "Limited Registration")}</Motion.button>
                </div>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
