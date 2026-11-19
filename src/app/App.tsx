import { useState, useEffect, useLayoutEffect, useRef, useMemo, RefObject } from "react";
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
import HotIcon from "../imports/1108.png";
import { GioiThieuPage } from "./components/GioiThieuPage";
import { TourPage } from "./components/TourPage";
import { GolfPage } from "./components/GolfPage";
import { VeMayBayPage } from "./components/VeMayBayPage";
import { VisaPage } from "./components/VisaPage";
import { ThongTinPage } from "./components/ThongTinPage";
import { LienHePage } from "./components/LienHePage";
import { ThuVienAnhPage } from "./components/ThuVienAnhPage";
import { ALL_TOURS, TOUR_DATASET, TourItem } from "../data/toursData";
import { LiquidTourCard } from "./components/LiquidTourCard";
import { LiquidTourModal } from "./components/LiquidTourModal";

export type Page = "home" | "gioi-thieu" | "tour" | "tour-trong-nuoc" | "tour-mien-bac" | "tour-mien-trung" | "tour-mien-nam" | "tour-nuoc-ngoai" | "tour-trung-quoc" | "tour-han-quoc" | "tour-dong-nam-a" | "tour-chau-a" | "tour-chau-au" | "tour-chau-my" | "tour-gio-chot" | "tour-hanh-huong" | "tour-hanh-huong-cong-giao" | "tour-hanh-huong-phat-giao" | "golf" | "ve-may-bay" | "visa" | "thong-tin" | "lien-he" | "thu-vien-anh";

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



function isUnifiedSubpageRoute(p: Page): boolean {
  return p.startsWith("tour") || p === "ve-may-bay" || p === "thong-tin";
}

/* ── Header ── */
function Header({
  current,
  nav,
  headerBarRef,
}: {
  current: Page;
  nav: (p: Page, tab?: string) => void;
  headerBarRef?: RefObject<HTMLDivElement | null>;
}) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const isUnifiedSubpage = isUnifiedSubpageRoute(current);

  const subMenus: Record<string, { label: string; enLabel: string; page: Page; sub?: { label: string; enLabel: string; page: Page }[] }[]> = {
    "tour": [
      { 
        label: "Tour ngoài nước", enLabel: "International Tours", page: "tour-nuoc-ngoai",
        sub: [
          { label: "Tour Châu Á", enLabel: "Asia Tours", page: "tour-chau-a" },
          { label: "Tour Châu Âu", enLabel: "Europe Tours", page: "tour-chau-au" },
          { label: "Tour Châu Mỹ", enLabel: "Americas Tours", page: "tour-chau-my" }
        ]
      },
      { 
        label: "Tour trong nước", enLabel: "Domestic Tours", page: "tour-trong-nuoc",
        sub: [
          { label: "Tour Miền Bắc", enLabel: "Northern Vietnam Tours", page: "tour-mien-bac" },
          { label: "Tour Miền Trung", enLabel: "Central Vietnam Tours", page: "tour-mien-trung" },
          { label: "Tour Miền Nam", enLabel: "Southern Vietnam Tours", page: "tour-mien-nam" }
        ]
      },
      { label: "Tour giờ chót", enLabel: "Last Minute Tours", page: "tour-gio-chot" },
      { 
        label: "Tour hành hương", enLabel: "Pilgrimage Tours", page: "tour-hanh-huong",
        sub: [
          { label: "Tour Hành Hương Công Giáo", enLabel: "Catholic Pilgrimage", page: "tour-hanh-huong-cong-giao" },
          { label: "Tour Hành Hương Phật Giáo", enLabel: "Buddhist Pilgrimage", page: "tour-hanh-huong-phat-giao" }
        ]
      },
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
    <header
      className={`top-0 left-0 w-full z-50 pt-1 transition-colors duration-300 ${
        current !== "home"
          ? isUnifiedSubpage
            ? "relative bg-transparent pb-1"
            : "relative bg-gradient-to-r from-[#1e64ae] via-[#00A651] to-[#77c14d] pb-1 shadow-md"
          : "absolute"
      }`}
    >
      {/* Gentle top gradient glow clipped safely to prevent horizontal overflow (handled by unified backdrop on Tour/VeMayBay/ThongTin) */}
      {!isUnifiedSubpage && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 overflow-hidden z-0">
          {current === "home" && (
            <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-black/50 via-black/22 to-transparent" />
          )}
          <div className="absolute top-[-50px] md:top-[-80px] left-1/2 -translate-x-1/2 w-[140vw] md:w-[115vw] h-[200px] md:h-[250px] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.9)_30%,_rgba(255,255,255,0)_70%)] blur-md" />
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[80vw] h-[150px] bg-white opacity-80 blur-3xl rounded-full" />
        </div>
      )}

      <div
        ref={headerBarRef}
        className="w-full max-w-[1440px] mx-auto px-4 lg:px-6 relative z-10 flex flex-col items-center gap-3"
      >
        
        {/* Logo - Free floating */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          
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
          className={`hidden xl:flex w-full max-w-[1440px] mx-auto h-[62px] 2xl:h-[68px] rounded-full bg-white/20 backdrop-blur-xl border border-white/35 items-center justify-between px-4 2xl:px-6 py-2 gap-4 relative z-20 ${
            isUnifiedSubpage
              ? "shadow-[0_6px_18px_-8px_rgba(0,59,92,0.10)]"
              : "shadow-[0_15px_35px_-5px_rgba(0,0,0,0.12)]"
          }`}
        >
          {/* Main Menu */}
          <nav className="flex items-center justify-start gap-1 2xl:gap-3 flex-1 overflow-visible">
            {NAV.map((item, index) => {
              // Position submenus perfectly: middle items centered, right items align-right
              const popoverPos = index > NAV.length - 3 ? "right-0" : index < 2 ? "left-0" : "left-1/2 -translate-x-1/2";
              const isItemActive =
                item.page === "tour"
                  ? current.startsWith("tour")
                  : current === item.page;
              return (
              <div 
                key={item.page} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveMenu(item.page)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => nav(item.page)}
                  className={`relative z-10 px-3.5 xl:px-4 2xl:px-5 py-2.5 text-[13px] 2xl:text-[14px] font-black rounded-full transition-colors duration-300 whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                    isItemActive
                      ? "text-white shadow-md"
                      : "text-white hover:text-white hover:bg-white/30"
                  }`}
                >
                  {isItemActive && (
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
                    <div className="backdrop-blur-3xl border border-white/60 rounded-2xl shadow-2xl py-2 min-w-[240px] bg-white/95 ring-1 ring-black/5 overflow-visible">
                      {subMenus[item.page].map((sub) => (
                        <div key={t(lang, sub.label, sub.enLabel)} className="group/sub relative">
                          <button
                            onClick={() => { nav(sub.page, (sub as any).tab); setActiveMenu(null); }}
                            className="w-full text-left px-5 py-2.5 text-[13px] font-bold text-[#003B5C] hover:bg-gradient-to-r hover:from-[#1e64ae] hover:to-[#77c14d] hover:text-white transition-all flex items-center justify-between cursor-pointer rounded-xl mx-auto"
                          >
                            <span>{t(lang, sub.label, sub.enLabel)}</span>
                            {sub.sub ? (
                              <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover/sub:text-white group-hover/sub:translate-x-0.5 transition-all" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-1 transition-all" />
                            )}
                          </button>
                          
                          {/* Nested Submenu (bay ra bên phải mượt mà khi hover) */}
                          {sub.sub && (
                            <div className="absolute top-0 left-full pl-2 opacity-0 -translate-x-2 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:pointer-events-auto transition-all duration-200 z-[110]">
                              <div className="backdrop-blur-3xl border border-white/60 rounded-2xl shadow-2xl py-2 min-w-[220px] bg-white/95 ring-1 ring-black/5">
                                {sub.sub.map((deepSub) => (
                                  <button 
                                    key={t(lang, deepSub.label, deepSub.enLabel)}
                                    onClick={(e) => { e.stopPropagation(); nav(deepSub.page); setActiveMenu(null); }}
                                    className="w-full text-left px-5 py-2.5 text-[13px] font-bold text-[#003B5C] hover:bg-gradient-to-r hover:from-[#1e64ae] hover:to-[#77c14d] hover:text-white transition-all flex items-center justify-between group/deep cursor-pointer"
                                  >
                                    <span>{t(lang, deepSub.label, deepSub.enLabel)}</span>
                                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/deep:opacity-100 group-hover/deep:translate-x-1 transition-all" />
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
          <div className="flex items-center justify-end gap-3 2xl:gap-4 shrink-0">
            {/* Lang */}
            <div className="flex items-center bg-white/20 hover:bg-white/30 transition-all border border-white/40 rounded-full p-1 h-[42px] 2xl:h-[46px] shrink-0">
              <button onClick={() => setLang("vi")} className={`px-3.5 2xl:px-4 h-full text-[12px] 2xl:text-[13px] font-black rounded-full transition-colors ${lang === "vi" ? "bg-white text-[#1e64ae] shadow-sm" : "text-white/80 hover:text-white"}`}>VN</button>
              <button onClick={() => setLang("en")} className={`px-3.5 2xl:px-4 h-full text-[12px] 2xl:text-[13px] font-black rounded-full transition-colors ${lang === "en" ? "bg-white text-[#1e64ae] shadow-sm" : "text-white/80 hover:text-white"}`}>EN</button>
            </div>

            {/* CTA */}
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => nav("tour")}
              className="bg-gradient-to-r from-[#1e64ae] to-[#77c14d] hover:brightness-110 text-white text-[12px] xl:text-[13px] 2xl:text-[14px] font-black px-6 2xl:px-8 h-[42px] 2xl:h-[46px] rounded-full transition-all shadow-lg whitespace-nowrap uppercase tracking-tight shrink-0 flex items-center justify-center cursor-pointer"
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
            {NAV.map((item) => {
              const isMobileActive =
                item.page === "tour"
                  ? current.startsWith("tour")
                  : current === item.page;
              return (
              <div key={item.page} className="flex flex-col">
                <div className="flex items-center">
                  <button
                    onClick={() => { nav(item.page); setOpen(false); }}
                    className={`flex-1 text-left px-5 py-3 text-sm font-bold rounded-xl transition-all ${
                      isMobileActive
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
            )})}

            {/* Mobile / Tablet Language & Book Tour Actions */}
            <div className="mt-2 pt-3 border-t border-gray-100 flex items-center justify-between gap-3 px-2 pb-1">
              <div className="flex items-center bg-[#EEF4FB] rounded-full p-1 shrink-0">
                <button
                  onClick={() => setLang("vi")}
                  className={`px-3.5 py-1.5 text-xs font-black rounded-full transition-colors ${lang === "vi" ? "bg-[#1e64ae] text-white shadow-sm" : "text-[#003B5C]/70"}`}
                >
                  VN
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-3.5 py-1.5 text-xs font-black rounded-full transition-colors ${lang === "en" ? "bg-[#1e64ae] text-white shadow-sm" : "text-[#003B5C]/70"}`}
                >
                  EN
                </button>
              </div>
              <button
                onClick={() => { nav("tour"); setOpen(false); }}
                className="flex-1 bg-gradient-to-r from-[#1e64ae] to-[#77c14d] text-white text-xs font-black px-4 py-2.5 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap text-center cursor-pointer"
              >
                {t(lang, "ĐẶT TOUR", "BOOK TOUR")}
              </button>
            </div>
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
function HomePage({
  nav,
  openForm,
  isPromoActive,
  onOpenPromo,
}: {
  nav: (p: Page) => void;
  openForm: () => void;
  isPromoActive: boolean;
  onOpenPromo: () => void;
}) {
  const { lang } = useLang();
  const [dest, setDest] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [heroIndex, setHeroIndex] = useState(0);

  const heroBanners = [
    {
      src: "/assets/aistudio/Du_thuye__n_giu__a_Vi_nh_Ha__Long-1_a25c2fd3.png",
      alt: t(lang, "Du thuyền giữa Vịnh Hạ Long - Du lịch Én Việt", "Cruise ship in Ha Long Bay - Én Việt Travel"),
      positionClass: "object-[58%_68%] sm:object-[56%_66%] lg:object-[55%_75%] min-[1600px]:object-[55%_82%]",
    },
    {
      src: "/assets/aistudio/Nu_i_Phu__Si__be_n_ho___Kawaguchi-2_326a380a.png",
      alt: t(lang, "Núi Phú Sĩ bên hồ Kawaguchi - Du lịch Én Việt", "Mount Fuji beside Lake Kawaguchi - Én Việt Travel"),
      positionClass: "object-[50%_26%] sm:object-[50%_24%] lg:object-[50%_20%] min-[1600px]:object-[50%_18%]",
    },
    {
      src: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=1800&q=80",
      alt: t(lang, "Phố châu Âu ven sông - Du lịch Én Việt", "European riverside town - Én Việt Travel"),
      positionClass: "object-[50%_46%] lg:object-[50%_42%]",
    },
  ];

  useEffect(() => {
    // Banner đầu tiên (Hạ Long) hiển thị 10 giây, các banner tiếp theo hiển thị 5 giây và lặp lại
    const duration = heroIndex === 0 ? 10000 : 5000;
    const timer = setTimeout(() => {
      setHeroIndex((prev) => (prev + 1) % heroBanners.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [heroIndex, heroBanners.length]);

  const [selectedHomeTour, setSelectedHomeTour] = useState<TourItem | null>(null);

  // Cụm 1: Tour Nổi Bật Nhất (4 tour nổi bật đặc sắc: Đài Loan, Nhật Bản, Trung Quốc, Hàn Quốc)
  const noiBatTours = useMemo(() => {
    return [
      TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-tw-starlux")!,
      TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-jp-xuan")!,
      (TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-cn-chengdu-jiuzhaigou-6n5d") || TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-cn-pek-sha"))!,
      (TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-kr-everland-seoul-nami") || TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-kr-seoul-nami-autumn"))!,
    ].filter(Boolean);
  }, []);

  // Cụm 2: TREND TOUR - TOUR CHÂU ÂU & HOA KỲ ĐẲNG CẤP (Đầy đủ 4 tour chuẩn)
  const trendTours = useMemo(() => {
    return [
      (TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-us-bo-tay") || TOUR_DATASET.Tour_Chau_My[0])!,      // Bờ Tây Hoa Kỳ (Mỹ)
      TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-eu-tay-au")!,    // Tây Âu: Pháp - Thụy Sĩ - Ý - Vatican
      TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-eu-nam-au")!,    // Nam Âu: Maroc - Tây Ban Nha - Bồ Đào Nha
      TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-eu-dong-au")!,   // Đông Âu: Lãng Mạn Sông Danube
    ].filter(Boolean).slice(0, 4);
  }, []);

  // Cụm 3: TOUR ĐỘC BẢN & DI SẢN (Hành trình vàng thế giới)
  const docNhatTours = useMemo(() => {
    return [
      TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-bhutan")!,                    // Bhutan Chinh Phục Tiger's Nest
      TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-kh-siemreap-phnompenh")!,     // Campuchia Angkor Wat
      TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-la-vientiane-luangprabang")!, // Lào Thác Kuang Si
      TOUR_DATASET.Tour_Ngoai_Nuoc.find(t => t.id === "tour-15-tho-nhi-ky")!,             // Thổ Nhĩ Kỳ Hành Trình Vàng
    ].filter(Boolean);
  }, []);

  // Cụm 4: TOUR TRONG NƯỚC NỔI BẬT (4 tour tiêu biểu Bắc - Trung - Nam - Miền Tây)
  const trongNuocTours = useMemo(() => {
    return [
      TOUR_DATASET.Tour_Trong_Nuoc.find(t => t.id === "tour-vn-hanoi-sapa-5n4d")!,
      TOUR_DATASET.Tour_Trong_Nuoc.find(t => t.id === "tour-vn-dalat-lhct-3n3d")!,
      TOUR_DATASET.Tour_Trong_Nuoc.find(t => t.id === "tour-vn-danang-hue-4n3d")!,
      TOUR_DATASET.Tour_Trong_Nuoc.find(t => t.id === "tour-vn-camau-chaudoc-4n3d")!,
    ].filter(Boolean);
  }, []);

  // Cụm 5: TOUR HÀNH HƯƠNG TÂM LINH (Công Giáo & Phật Giáo)
  const hanhHuongTours = useMemo(() => {
    return [
      TOUR_DATASET.Tour_Hanh_Huong.find(t => t.id === "evg-hh2")!,
      TOUR_DATASET.Tour_Hanh_Huong.find(t => t.id === "evg-hh1")!,
      TOUR_DATASET.Tour_Hanh_Huong.find(t => t.id === "evg-nbcx-2026")!,
      TOUR_DATASET.Tour_Hanh_Huong.find(t => t.id === "evg-dhv-chauau")!,
    ].filter(Boolean);
  }, []);

  const reasons = [
    { icon: <Award className="w-8 h-8" />, title: "20+ Năm Kinh Nghiệm", desc: "Đội ngũ hướng dẫn viên chuyên nghiệp, am hiểu sâu sắc từng điểm đến." },
    { icon: <Shield className="w-8 h-8" />, title: "Cam Kết Chất Lượng", desc: "Dịch vụ đúng cam kết, chuẩn 5 sao, mang lại trải nghiệm hoàn hảo." },
    { icon: <Headphones className="w-8 h-8" />, title: "Hỗ Trợ 24/7", desc: "Luôn đồng hành và hỗ trợ khách hàng trong suốt mọi nẻo đường." },
    { icon: <Globe className="w-8 h-8" />, title: "Tất Cả Trong Một", desc: "Tour, vé máy bay, visa – một nơi giải quyết tất cả nhu cầu của bạn." },
  ];

  const handleSearchTours = () => {
    if (type.includes("Hành Hương") || type.includes("Pilgrimage")) nav("tour-hanh-huong");
    else if (type.includes("Trong Nước") || dest.includes("Việt Nam")) nav("tour-trong-nuoc");
    else if (type.includes("Ngoài Nước") || dest) nav("tour-nuoc-ngoai");
    else nav("tour");
  };

  return (
    <main className="bg-[#f8fcfb] min-h-screen">
      {/* ── Hero Banner Slideshow (3 ảnh phong cảnh + slogan 2 dòng căn giữa) ── */}
      <section className="relative w-full h-[370px] sm:h-[440px] md:h-[480px] lg:h-[520px] xl:h-[550px] min-[1600px]:h-[610px] min-[2200px]:h-[680px] flex items-center justify-center overflow-hidden bg-[#002840]">
        <AnimatePresence>
          <Motion.img
            key={heroIndex}
            initial={{ scale: 1.07, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            src={heroBanners[heroIndex].src}
            alt={heroBanners[heroIndex].alt}
            referrerPolicy="no-referrer"
            loading={heroIndex === 0 ? "eager" : "auto"}
            {...({ fetchpriority: heroIndex === 0 ? "high" : "auto" } as Record<string, string>)}
            className={`absolute inset-0 w-full h-full object-cover ${heroBanners[heroIndex].positionClass}`}
          />
        </AnimatePresence>

        {/* Subtle top-only contrast scrim for two-tier header legibility on bright skies */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-44 sm:h-48 xl:h-52 bg-gradient-to-b from-black/48 via-black/18 to-transparent z-[1]"
        />

        {/* Subtle bottom contrast scrim so H1 sitting above the search bar never sinks into bright water/reflections */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-32 xl:h-36 bg-gradient-to-t from-black/48 via-black/20 to-transparent z-[1]"
        />

        {/* Centered Two-Line Slogan (without description box or action buttons) */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-4 pt-[118px] pb-[82px] sm:pt-[135px] sm:pb-[92px] md:pt-[142px] md:pb-[105px] lg:pt-[148px] lg:pb-[120px] xl:pt-[150px] xl:pb-[132px] flex justify-center">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative max-w-3xl text-center px-5 sm:px-10 py-3 sm:py-4"
          >
            {/* Soft radial contrast scrim only behind slogan letters for bright skies */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-6 -inset-y-3 bg-[radial-gradient(ellipse_at_center,rgba(0,22,44,0.52)_0%,rgba(0,22,44,0.24)_52%,rgba(0,22,44,0)_78%)] rounded-full blur-sm -z-10"
            />
            <p className="font-black leading-[1.12] tracking-tight text-[26px] min-[380px]:text-[31px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[58px] drop-shadow-[0_6px_22px_rgba(0,18,38,0.65)]">
              <span className="block text-white">
                {t(lang, "Chắp Cánh Đam Mê", "Ignite Your Passion for")}
              </span>
              <Motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] via-[#00E676] to-[#77c14d] bg-[length:200%_auto] pb-1 drop-shadow-[0_4px_14px_rgba(0,15,35,0.6)]"
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                {t(lang, "Khám Phá Thế Giới", "Exploring the World")}
              </Motion.span>
            </p>
          </Motion.div>
        </div>
      </section>

      {/* ── External High-Contrast Animated Heading + Tour Search Card Overlapping Bottom Edge of Desktop Banner ── */}
      <section className="max-w-5xl xl:max-w-6xl mx-auto px-4 -mt-14 sm:-mt-20 md:-mt-24 lg:-mt-28 xl:-mt-32 pb-2 relative z-30">
        <div className="relative text-center mb-3 sm:mb-3.5 px-2">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-xl h-14 bg-[radial-gradient(ellipse_at_center,rgba(0,22,44,0.56)_0%,rgba(0,22,44,0.25)_55%,transparent_80%)] rounded-full blur-md -z-10"
          />
          <h1 className="headline-twinkle-wiggle text-[19px] min-[380px]:text-[22px] sm:text-2xl md:text-[27px] xl:text-[31px] font-black tracking-tight leading-tight text-balance bg-gradient-to-b from-[#FFF9C4] via-[#FFD54F] to-[#FF9800] bg-clip-text text-transparent">
            {t(lang, "Tìm tour du lịch cùng Én Việt", "Find Your Travel Tour with Én Việt")}
          </h1>
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="rounded-[1.75rem] sm:rounded-[2rem] bg-white/95 backdrop-blur-2xl border border-white shadow-[0_22px_55px_-12px_rgba(0,59,92,0.18)] p-4 sm:p-5 lg:p-6 xl:px-7 xl:py-5"
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 xl:gap-4">
            <div className="group min-w-0">
              <label className="text-[11px] font-black text-[#003B5C]/75 uppercase tracking-widest block mb-1.5 pl-1.5">
                {t(lang, "Điểm Đến", "Destination")}
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#00A651] group-focus-within:text-[#1e64ae] transition-colors pointer-events-none" />
                <select
                  className="w-full min-w-0 pl-10 pr-9 py-3.5 bg-[#f8fbfd] hover:bg-white border border-gray-200/80 rounded-2xl text-[13px] sm:text-[14px] focus:outline-none focus:ring-4 focus:ring-[#00A651]/20 text-[#003B5C] font-bold appearance-none cursor-pointer transition-all shadow-sm group-hover:shadow-md truncate"
                  value={dest}
                  onChange={(e) => setDest(e.target.value)}
                >
                  <option value="" className="text-gray-400">{t(lang, "Bạn muốn đi đâu?", "Where to?")}</option>
                  {["Việt Nam (Miền Bắc - Đà Lạt - Đà Nẵng - Miền Tây)", "Đài Loan", "Nhật Bản", "Dubai", "Bhutan", "Thổ Nhĩ Kỳ", "Tây Âu (Pháp - Thụy Sĩ - Ý)", "Đông Âu (Áo - Séc - Đức - Hungary)", "Nam Âu (Tây Ban Nha - Bồ Đào Nha - Maroc)"].map((d) => (
                    <option key={d} value={d} className="text-[#003B5C] font-semibold">{d}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#003B5C]/45 pointer-events-none" />
              </div>
            </div>

            <div className="group min-w-0">
              <label className="text-[11px] font-black text-[#003B5C]/75 uppercase tracking-widest block mb-1.5 pl-1.5">
                {t(lang, "Loại Tour", "Tour Type")}
              </label>
              <div className="relative">
                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#00A651] group-focus-within:text-[#1e64ae] transition-colors pointer-events-none" />
                <select
                  className="w-full min-w-0 pl-10 pr-9 py-3.5 bg-[#f8fbfd] hover:bg-white border border-gray-200/80 rounded-2xl text-[13px] sm:text-[14px] focus:outline-none focus:ring-4 focus:ring-[#00A651]/20 text-[#003B5C] font-bold appearance-none cursor-pointer transition-all shadow-sm group-hover:shadow-md truncate"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">{t(lang, "Tất cả loại tour", "All tour types")}</option>
                  <option>{t(lang, "Tour Châu Á", "Asia Tours")}</option>
                  <option>{t(lang, "Tour Châu Âu", "Europe Tours")}</option>
                  <option>{t(lang, "Tour Nước Ngoài", "International")}</option>
                  <option>{t(lang, "Tour Trong Nước", "Domestic")}</option>
                  <option>Golf Trip</option>
                  <option>{t(lang, "Hành Hương Công Giáo", "Catholic Pilgrimage")}</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#003B5C]/45 pointer-events-none" />
              </div>
            </div>

            <div className="group min-w-0">
              <label className="text-[11px] font-black text-[#003B5C]/75 uppercase tracking-widest block mb-1.5 pl-1.5">
                {t(lang, "Thời Gian", "Time")}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#00A651] group-focus-within:text-[#1e64ae] transition-colors pointer-events-none" />
                <input
                  type="date"
                  className="w-full min-w-0 pl-10 pr-3 py-3.5 bg-[#f8fbfd] hover:bg-white border border-gray-200/80 rounded-2xl text-[13px] sm:text-[14px] focus:outline-none focus:ring-4 focus:ring-[#00A651]/20 text-[#003B5C] font-bold transition-all shadow-sm group-hover:shadow-md"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-end min-w-0">
              <Motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSearchTours}
                className="w-full h-[50px] bg-gradient-to-r from-[#1e64ae] to-[#77c14d] hover:brightness-110 text-white font-black text-sm rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20 uppercase tracking-wide whitespace-nowrap shrink-0 cursor-pointer px-5"
              >
                <Search className="w-4.5 h-4.5 shrink-0" />
                <span>{t(lang, "TÌM TOUR", "FIND TOURS")}</span>
              </Motion.button>
            </div>
          </div>
        </Motion.div>

        {/* Secondary Consultation Link Below Search Bar */}
        <div className="mt-3 flex justify-center">
          <button
            type="button"
            onClick={() => nav("lien-he")}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1e64ae] hover:text-[#00A651] transition-colors underline underline-offset-4 decoration-[#1e64ae]/40 hover:decoration-[#00A651] cursor-pointer py-1 px-2"
          >
            <span>{t(lang, "Nhận tư vấn", "Get Consultation")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ── CỤM 1: Tour Nổi Bật Nhất ── */}
      <section className="relative max-w-7xl mx-auto px-4 mt-20 mb-16 overflow-visible">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-6 top-16 bottom-0 rounded-[3rem] bg-gradient-to-br from-[#1e64ae]/[0.04] via-red-500/[0.03] to-[#00A651]/[0.04] blur-2xl -z-10"
        />
        <Motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
        >
          <div>
            <p className="text-[#00A651] text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#00A651] rounded-full" /> {t(lang, "KHÁM PHÁ NGAY", "EXPLORE NOW")}
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003B5C] tracking-tight uppercase">
              {t(lang, "Tour Nổi Bật Nhất", "Most Featured Tours")}
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-500 font-medium">
              {t(lang, "Lựa chọn những hành trình tuyệt vời nhất được thiết kế riêng dành cho bạn.", "Hand-picked extraordinary travel itineraries crafted just for you.")}
            </p>
          </div>
          <button 
            onClick={() => nav("tour")} 
            className="text-[#1e64ae] font-black text-xs md:text-sm flex items-center gap-2 hover:gap-3 transition-all group bg-white/80 hover:bg-white backdrop-blur-md px-5 py-2.5 rounded-full border border-white/80 shadow-sm hover:shadow cursor-pointer"
          >
            <span>{t(lang, "Xem tất cả hành trình", "View all tours")}</span>
            <ArrowRight className="w-4 h-4 group-hover:text-[#00A651] transition-colors" />
          </button>
        </Motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {noiBatTours.map((tour, index) => (
            <LiquidTourCard
              key={tour.id}
              tour={tour}
              index={index}
              featuredHighlight
              badgeType={index === 0 ? "hot" : index === 1 ? "new" : index === 2 ? "price" : "trend"}
              onSelect={(t) => setSelectedHomeTour(t)}
              onBook={(t) => setSelectedHomeTour(t)}
            />
          ))}
        </div>
      </section>

      {/* ── Khối Gọn Chương Trình Quà Tặng (Khi Ưu Đãi Đang Hoạt Động) ── */}
      {isPromoActive && (
        <section className="max-w-7xl mx-auto px-4 my-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-3xl bg-white border border-emerald-100/90 shadow-[0_14px_40px_-14px_rgba(30,100,174,0.14)] p-4 sm:p-5 md:p-6 flex flex-col md:flex-row items-center gap-5 md:gap-7"
          >
            <div
              onClick={onOpenPromo}
              className="w-full md:w-[320px] lg:w-[360px] shrink-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer group"
            >
              <img
                src={PromoImage}
                alt={t(lang, "Chương trình quà tặng Én Việt", "Én Việt Gift Program")}
                className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-[#00A651] text-xs font-extrabold tracking-[0.18em] uppercase mb-1.5">
                {t(lang, "ƯU ĐÃI ĐẶC BIỆT", "SPECIAL OFFER")}
              </p>
              <h3 className="text-xl sm:text-2xl font-black text-[#003B5C] tracking-tight mb-2">
                {t(lang, "Chương trình quà tặng", "Gift Program")}
              </h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed max-w-2xl mb-4">
                {t(
                  lang,
                  "Nhận ngay bộ quà tặng du lịch chính hãng Én Việt khi đăng ký các hành trình trong và ngoài nước đang áp dụng ưu đãi.",
                  "Receive exclusive Én Việt travel gifts when booking eligible domestic and international tour packages."
                )}
              </p>
              <button
                type="button"
                onClick={onOpenPromo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#1e64ae] to-[#00A651] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wide shadow-md shadow-blue-900/15 transition-all cursor-pointer"
              >
                <span>{t(lang, "Xem quà tặng", "View Gifts")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Motion.div>
        </section>
      )}

      {/* ── CỤM 2: TREND TOUR ── */}
      <section className="max-w-7xl mx-auto px-4 my-16 overflow-visible">
        <Motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
        >
          <div>
            <p className="text-[#00A651] text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#00A651] rounded-full" /> {t(lang, "KHÁM PHÁ NGAY", "EXPLORE NOW")}
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003B5C] tracking-tight uppercase">
              {t(lang, "TREND TOUR", "TRENDING TOURS")}
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-500 font-medium">
              {t(lang, "Những xu hướng du lịch được yêu thích và lựa chọn nhiều nhất trong năm.", "The most sought-after and popular travel trends of the year.")}
            </p>
          </div>
          <button 
            onClick={() => nav("tour")} 
            className="text-[#1e64ae] font-black text-xs md:text-sm flex items-center gap-2 hover:gap-3 transition-all group bg-white/80 hover:bg-white backdrop-blur-md px-5 py-2.5 rounded-full border border-white/80 shadow-sm hover:shadow cursor-pointer"
          >
            <span>{t(lang, "Xem tất cả hành trình", "View all tours")}</span>
            <ArrowRight className="w-4 h-4 group-hover:text-[#00A651] transition-colors" />
          </button>
        </Motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendTours.map((tour, index) => (
            <LiquidTourCard
              key={tour.id}
              tour={tour}
              index={index}
              badgeType={index === 0 ? "trend" : index === 1 ? "price" : index === 2 ? "hot" : "price"}
              onSelect={(t) => setSelectedHomeTour(t)}
              onBook={(t) => setSelectedHomeTour(t)}
            />
          ))}
        </div>
      </section>

      {/* ── CỤM 3: TOUR ĐỘC NHẤT ── */}
      <section className="max-w-7xl mx-auto px-4 my-16 overflow-visible">
        <Motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
        >
          <div>
            <p className="text-[#00A651] text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#00A651] rounded-full" /> {t(lang, "KHÁM PHÁ NGAY", "EXPLORE NOW")}
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003B5C] tracking-tight uppercase">
              {t(lang, "TOUR ĐỘC NHẤT", "EXCLUSIVE TOURS")}
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-500 font-medium">
              {t(lang, "Khám phá những vùng đất huyền bí, di sản văn hóa thế giới và những kỳ quan độc bản.", "Explore mysterious lands, world heritage sites, and singular wonders.")}
            </p>
          </div>
          <button 
            onClick={() => nav("tour")} 
            className="text-[#1e64ae] font-black text-xs md:text-sm flex items-center gap-2 hover:gap-3 transition-all group bg-white/80 hover:bg-white backdrop-blur-md px-5 py-2.5 rounded-full border border-white/80 shadow-sm hover:shadow cursor-pointer"
          >
            <span>{t(lang, "Xem tất cả hành trình", "View all tours")}</span>
            <ArrowRight className="w-4 h-4 group-hover:text-[#00A651] transition-colors" />
          </button>
        </Motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {docNhatTours.map((tour, index) => (
            <LiquidTourCard
              key={tour.id}
              tour={tour}
              index={index}
              badgeType={index === 0 ? "unique" : index === 1 ? "unique" : index === 2 ? "new" : "hot"}
              onSelect={(t) => setSelectedHomeTour(t)}
              onBook={(t) => setSelectedHomeTour(t)}
            />
          ))}
        </div>
      </section>

      {/* ── CỤM 4: TOUR DU LỊCH TRONG NƯỚC ── */}
      {trongNuocTours.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 my-16 overflow-visible">
          <Motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
          >
            <div>
              <p className="text-[#00A651] text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#00A651] rounded-full" /> {t(lang, "KHÁM PHÁ VIỆT NAM", "DISCOVER VIETNAM")}
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-[#003B5C] tracking-tight uppercase">
                {t(lang, "TOUR TRONG NƯỚC NỔI BẬT", "FEATURED DOMESTIC TOURS")}
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-500 font-medium">
                {t(lang, "Trọn vẹn vẻ đẹp ba miền từ Sapa, Hạ Long, Đà Nẵng, Đà Lạt đến Miền Tây sông nước & Đất Mũi Cà Mau.", "Explore Vietnam from North to South: Sapa, Ha Long, Da Nang, Da Lat & the Mekong Delta.")}
              </p>
            </div>
            <button 
              onClick={() => nav("tour-trong-nuoc")} 
              className="text-[#1e64ae] font-black text-xs md:text-sm flex items-center gap-2 hover:gap-3 transition-all group bg-white/80 hover:bg-white backdrop-blur-md px-5 py-2.5 rounded-full border border-white/80 shadow-sm hover:shadow cursor-pointer"
            >
              <span>{t(lang, "Xem tất cả tour trong nước", "View all domestic tours")}</span>
              <ArrowRight className="w-4 h-4 group-hover:text-[#00A651] transition-colors" />
            </button>
          </Motion.div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trongNuocTours.map((tour, index) => (
              <LiquidTourCard
                key={tour.id}
                tour={tour}
                index={index}
                onSelect={(t) => setSelectedHomeTour(t)}
                onBook={(t) => setSelectedHomeTour(t)}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── CỤM 5: TOUR HÀNH HƯƠNG TÂM LINH ── */}
      {hanhHuongTours.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 my-16 overflow-visible">
          <Motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
          >
            <div>
              <p className="text-[#00A651] text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#00A651] rounded-full" /> {t(lang, "HÀNH TRÌNH TÂM LINH", "SPIRITUAL JOURNEYS")}
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-[#003B5C] tracking-tight uppercase">
                {t(lang, "TOUR HÀNH HƯƠNG NỔI BẬT", "FEATURED PILGRIMAGE TOURS")}
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-500 font-medium">
                {t(lang, "Chiêm bái các thánh tích Phật giáo & Công giáo linh thiêng trong nước và quốc tế.", "Sacred Buddhist & Catholic pilgrimage journeys in Vietnam and around the world.")}
              </p>
            </div>
            <button 
              onClick={() => nav("tour-hanh-huong")} 
              className="text-[#1e64ae] font-black text-xs md:text-sm flex items-center gap-2 hover:gap-3 transition-all group bg-white/80 hover:bg-white backdrop-blur-md px-5 py-2.5 rounded-full border border-white/80 shadow-sm hover:shadow cursor-pointer"
            >
              <span>{t(lang, "Xem tất cả tour hành hương", "View all pilgrimage tours")}</span>
              <ArrowRight className="w-4 h-4 group-hover:text-[#00A651] transition-colors" />
            </button>
          </Motion.div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hanhHuongTours.map((tour, index) => (
              <LiquidTourCard
                key={tour.id}
                tour={tour}
                index={index}
                onSelect={(t) => setSelectedHomeTour(t)}
                onBook={(t) => setSelectedHomeTour(t)}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── Home Page Tour Detail Modal ── */}
      <AnimatePresence>
        {selectedHomeTour && (
          <LiquidTourModal
            tour={selectedHomeTour}
            onClose={() => setSelectedHomeTour(null)}
            openForm={openForm}
          />
        )}
      </AnimatePresence>

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
  const unifiedRootRef = useRef<HTMLDivElement>(null);
  const headerBarRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const backdropGradRef = useRef<HTMLDivElement>(null);
  const backdropGlowRef = useRef<HTMLDivElement>(null);

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

  const isUnifiedSubpage = isUnifiedSubpageRoute(page);

  useLayoutEffect(() => {
    if (!isUnifiedSubpage) return;
    const rootEl = unifiedRootRef.current;
    const barEl = headerBarRef.current;
    const backdropEl = backdropRef.current;
    const gradEl = backdropGradRef.current;
    const glowEl = backdropGlowRef.current;
    if (!rootEl || !barEl || !backdropEl || !gradEl || !glowEl) return;

    let lastKey = "";
    let observedHeroEnd: HTMLElement | null = null;

    const syncBackdrop = () => {
      const rootRect = rootEl.getBoundingClientRect();
      const barRect = barEl.getBoundingClientRect();
      const heroEndEl = rootEl.querySelector("[data-unified-hero-end]") as HTMLElement | null;

      // Exact bottom of logo + menu tier (plus header pb-1 = 4px)
      const menuBottom = Math.max(120, Math.round(barRect.bottom - rootRect.top) + 4);
      const totalHeight = heroEndEl
        ? Math.max(menuBottom + 64, Math.round(heroEndEl.getBoundingClientRect().bottom - rootRect.top))
        : menuBottom + 36;

      const key = `${menuBottom}:${totalHeight}:${heroEndEl ? 1 : 0}`;
      if (key === lastKey) return;
      lastKey = key;

      backdropEl.style.height = `${totalHeight}px`;
      glowEl.style.height = `${Math.max(110, menuBottom - 6)}px`;

      let mask: string;
      if (heroEndEl) {
        const s0 = Math.max(0, menuBottom - 8);
        const s1 = menuBottom + 4;
        const s2 = menuBottom + 18;
        const s3 = menuBottom + 32;
        const s4 = Math.max(s3 + 16, totalHeight - 34);
        mask = `linear-gradient(to bottom, rgba(0,0,0,1) 0px, rgba(0,0,0,1) ${s0}px, rgba(0,0,0,0.68) ${s1}px, rgba(0,0,0,0.28) ${s2}px, rgba(0,0,0,0.17) ${s3}px, rgba(0,0,0,0.10) ${s4}px, rgba(0,0,0,0) ${totalHeight}px)`;
      } else {
        const s0 = Math.max(0, menuBottom - 6);
        const s1 = menuBottom + 10;
        mask = `linear-gradient(to bottom, rgba(0,0,0,1) 0px, rgba(0,0,0,1) ${s0}px, rgba(0,0,0,0.45) ${s1}px, rgba(0,0,0,0) ${totalHeight}px)`;
      }
      gradEl.style.webkitMaskImage = mask;
      gradEl.style.maskImage = mask;
    };

    const ro = new ResizeObserver(syncBackdrop);
    ro.observe(rootEl);
    ro.observe(barEl);

    const attachHeroEnd = () => {
      const nextHeroEnd = rootEl.querySelector("[data-unified-hero-end]") as HTMLElement | null;
      if (nextHeroEnd !== observedHeroEnd) {
        if (observedHeroEnd) ro.unobserve(observedHeroEnd);
        observedHeroEnd = nextHeroEnd;
        if (observedHeroEnd) ro.observe(observedHeroEnd);
      }
    };

    attachHeroEnd();
    syncBackdrop();

    const mo = new MutationObserver(() => {
      attachHeroEnd();
      syncBackdrop();
    });
    mo.observe(rootEl, { childList: true, subtree: true });

    window.addEventListener("resize", syncBackdrop);
    return () => {
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("resize", syncBackdrop);
    };
  }, [isUnifiedSubpage, page, thongTinTab]);

  // Slow scroll-driven specular sheen across bottom colored banner boxes
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const rootEl = unifiedRootRef.current;
    if (!rootEl) return;

    type SheenState = {
      el: HTMLElement;
      current: number;
      target: number;
    };

    const tracked = new Map<HTMLElement, SheenState>();
    let rafId = 0;
    let lastTime = 0;

    const computeTarget = (el: HTMLElement): number => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const scrollY = window.scrollY;
      const maxScrollY = Math.max(0, document.documentElement.scrollHeight - vh);
      const docTop = rect.top + scrollY;

      const enterY = Math.max(0, docTop - vh * 0.96);
      const rawExitY = docTop - vh * 0.12;
      const exitY = Math.min(maxScrollY, Math.max(enterY + 140, rawExitY));
      const span = Math.max(1, exitY - enterY);

      return Math.min(1, Math.max(0, (scrollY - enterY) / span));
    };

    const applyProgress = (el: HTMLElement, p: number) => {
      const xPct = -115 + p * 230;
      el.style.setProperty("--sheen-x", `${xPct.toFixed(2)}%`);
    };

    const tick = (now: number) => {
      const dt = lastTime ? Math.min(0.05, (now - lastTime) / 1000) : 0.016;
      lastTime = now;
      // Gentle, deliberately slow damping so the sheen glides calmly (~2.5s settle)
      const alpha = 1 - Math.exp(-1.45 * dt);
      let needsMore = false;

      tracked.forEach((state, el) => {
        if (!el.isConnected) {
          tracked.delete(el);
          return;
        }
        const diff = state.target - state.current;
        if (Math.abs(diff) > 0.0008) {
          state.current += diff * alpha;
          applyProgress(el, state.current);
          needsMore = true;
        } else if (state.current !== state.target) {
          state.current = state.target;
          applyProgress(el, state.current);
        }
      });

      if (needsMore) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        rafId = 0;
        lastTime = 0;
      }
    };

    const startLoop = () => {
      if (!rafId) {
        lastTime = 0;
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const refreshTargets = () => {
      let anyMoved = false;
      tracked.forEach((state, el) => {
        if (!el.isConnected) {
          tracked.delete(el);
          return;
        }
        const nextTarget = computeTarget(el);
        if (Math.abs(nextTarget - state.target) > 0.0008) {
          state.target = nextTarget;
          anyMoved = true;
        }
      });
      if (anyMoved) startLoop();
    };

    const scanElements = () => {
      const nodes = rootEl.querySelectorAll<HTMLElement>(".colored-banner-sheen");
      const activeSet = new Set<HTMLElement>();
      nodes.forEach((el) => {
        activeSet.add(el);
        if (!tracked.has(el)) {
          const initTarget = computeTarget(el);
          tracked.set(el, { el, current: initTarget, target: initTarget });
          applyProgress(el, initTarget);
        }
      });
      tracked.forEach((_, el) => {
        if (!activeSet.has(el)) tracked.delete(el);
      });
    };

    scanElements();

    const onScrollOrResize = () => refreshTargets();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    const ro = new ResizeObserver(refreshTargets);
    ro.observe(rootEl);

    const mo = new MutationObserver(() => {
      scanElements();
      refreshTargets();
    });
    mo.observe(rootEl, { childList: true, subtree: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      ro.disconnect();
      mo.disconnect();
    };
  }, [page, thongTinTab, visaTab]);

  const isPromoActive = dismissCount < 3;
  const pageSurfaceClass = page.startsWith("tour")
    ? "bg-gradient-to-b from-[#f0f6fa] via-[#f7fbf9] to-[#ffffff]"
    : page === "ve-may-bay"
      ? "bg-gradient-to-br from-[#f0f7fa] via-[#ffffff] to-[#eef7f2]"
      : page === "thong-tin"
        ? "bg-white"
        : "bg-[#f8fcfb]";

  return (
    <div className={`min-h-screen font-sans selection:bg-[#00A651] selection:text-white overflow-x-clip ${pageSurfaceClass}`}>
      <div ref={unifiedRootRef} className="relative">
        {/* Single continuous gradient canvas shared across logo, menu bar, and title/description */}
        {isUnifiedSubpage && (
          <div
            ref={backdropRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-0 overflow-hidden"
            style={{ height: "340px" }}
          >
            <div
              ref={backdropGradRef}
              className="absolute inset-0 bg-gradient-to-r from-[#1e64ae] via-[#00A651] to-[#77c14d]"
            />
            <div
              ref={backdropGlowRef}
              className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden"
              style={{
                height: "184px",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 58%, transparent 96%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 58%, transparent 96%)",
              }}
            >
              <div className="absolute top-[-50px] md:top-[-80px] left-1/2 -translate-x-1/2 w-[140vw] md:w-[115vw] h-[200px] md:h-[250px] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.9)_30%,_rgba(255,255,255,0)_70%)] blur-md" />
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[80vw] h-[150px] bg-white opacity-80 blur-3xl rounded-full" />
            </div>
          </div>
        )}

        <Header current={page} nav={navigateTo} headerBarRef={headerBarRef} />
        
        {page === "home" && (
          <HomePage
            nav={navigateTo}
            openForm={() => setIsFormOpen(true)}
            isPromoActive={isPromoActive}
            onOpenPromo={() => setIsPromoOpen(true)}
          />
        )}
        {page === "gioi-thieu" && <GioiThieuPage />}
        {page.startsWith("tour") && <TourPage category={page} openForm={() => setIsFormOpen(true)} />}
        {page === "golf" && <GolfPage />}
        {page === "ve-may-bay" && <VeMayBayPage openForm={() => setIsFormOpen(true)} />}
        {page === "visa" && <VisaPage defaultTab={visaTab} />}
        {page === "thong-tin" && <ThongTinPage defaultTab={thongTinTab} />}
        {page === "thu-vien-anh" && <ThuVienAnhPage nav={navigateTo} />}
        {page === "lien-he" && <LienHePage />}
      </div>
      
      
      
      {/* Contact FAB */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[70] flex flex-col items-end gap-3">
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
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#1e64ae] to-[#00A651] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,166,81,0.4)] relative"
        >
          {isContactOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
          
          {/* Pulse effect */}
          {!isContactOpen && (
            <span className="absolute inset-0 rounded-full border-2 border-[#00A651] animate-ping opacity-75" />
          )}
        </Motion.button>
      </div>

      {/* Floating Socials */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 sm:gap-3 z-[60] p-1 sm:p-2">
        <a href="https://www.facebook.com/dulichsukienenviet" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-l-xl flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:w-12 hover:-translate-x-1 transition-all duration-300">
          <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <a href="https://www.tiktok.com/@envietofficial" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-black to-gray-800 text-white rounded-l-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:w-12 hover:-translate-x-1 transition-all duration-300">
          <Music2 className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <a href="https://www.youtube.com/@DuL%E1%BB%8Bch%C3%89nVi%E1%BB%87t" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-l-xl flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:w-12 hover:-translate-x-1 transition-all duration-300">
          <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
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
