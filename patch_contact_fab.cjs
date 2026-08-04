const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Add state for contact FAB
code = code.replace(
  /const \[dismissCount, setDismissCount\] = useState\(0\);/,
  `const [dismissCount, setDismissCount] = useState(0);\n  const [isContactOpen, setIsContactOpen] = useState(false);`
);

// 2. Add MessageCircle import
code = code.replace(
  /import \{ Search, Phone, Mail, MapPin, Menu, X, ArrowRight, Plane, Globe, Users, Star, Calendar, Clock, ChevronDown, Shield, Headphones, Award, ChevronRight, Flame, Facebook, Youtube, Music2 \} from "lucide-react";/,
  `import { Search, Phone, Mail, MapPin, Menu, X, ArrowRight, Plane, Globe, Users, Star, Calendar, Clock, ChevronDown, Shield, Headphones, Award, ChevronRight, Flame, Facebook, Youtube, Music2, MessageCircle } from "lucide-react";`
);

// 3. Inject the FAB code into AppContent return (before Footer)
const fabCode = `
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
              <a href="#" className="flex items-center gap-3 bg-white pl-4 pr-2 py-2 rounded-full shadow-xl border border-gray-100 hover:scale-105 transition-transform group">
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
`;

code = code.replace(
  /\{\/\* Floating Socials \*\/\}/,
  `${fabCode}\n      {/* Floating Socials */}`
);

fs.writeFileSync('src/app/App.tsx', code);
