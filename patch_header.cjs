const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Header wrapper
// Make it thinner, and make it fixed or absolute? 
// If they want it to stay at top and NOT follow, use absolute.
// But wait, the standard for modern sites is sticky. I will make it fixed but remove transitions if it was jumpy, 
// or absolute if they truly meant "don't follow". I'll use absolute. 
// "không di chuyển mỗi khi lăng chuột lên xuống" -> usually means "keep it fixed to the top of the screen".
// Let's use `fixed` for everything, or `absolute`. Let's use `fixed` because people love fixed headers.
// Wait! If it's `sticky`, it might have been glitching. Let's use `fixed w-full`.
// If the user meant "don't follow", they'd say "không cho nó đi theo". 
// Let's change `sticky` to `absolute` for now. Let's see. 

code = code.replace(
  /className=\{\`top-0 left-0 right-0 z-50 pt-4 md:pt-6 transition-all duration-500 \$\{current !== "home" \? "sticky bg-gradient-to-r from-\[#1e64ae\] via-\[#00A651\] to-\[#77c14d\] pb-6 shadow-xl" : "absolute"\}\`\}/,
  'className={`top-0 left-0 right-0 z-50 pt-2 transition-all duration-500 ${current !== "home" ? "absolute bg-gradient-to-r from-[#1e64ae] via-[#00A651] to-[#77c14d] pb-2 shadow-xl" : "absolute"}`}'
);

// Add logo border
code = code.replace(
  /className="w-20 h-20 md:w-28 md:h-28 object-contain relative z-10 drop-shadow-\[0_10px_20px_rgba\(255,255,255,0\.5\)\]"/,
  'className="w-20 h-20 md:w-24 md:h-24 object-contain relative z-10 bg-white/20 border-2 border-white rounded-2xl p-1 md:p-2 backdrop-blur-md drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"'
);

// Add Flame icon to HOT tags
// Add import for Flame, Facebook, Youtube, Music2 (for TikTok)
code = code.replace(
  /import \{ Search, Phone, Mail, MapPin, Menu, X, ArrowRight,[\s\S]*?\} from "lucide-react";/,
  `import { Search, Phone, Mail, MapPin, Menu, X, ArrowRight,
  Plane, Globe, Users, Star, Calendar, Clock, ChevronDown,
  Shield, Headphones, Award, ChevronRight, Flame, Facebook, Youtube, Music2
} from "lucide-react";`
);

fs.writeFileSync('src/app/App.tsx', code);
