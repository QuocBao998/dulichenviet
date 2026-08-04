const fs = require('fs');
let code = fs.readFileSync('src/app/components/TourPage.tsx', 'utf8');

code = code.replace(
  /import \{ Clock, Plane, ArrowRight, Star \} from "lucide-react";/,
  'import { Clock, Plane, ArrowRight, Star, Flame } from "lucide-react";'
);

code = code.replace(
  /<span className="text-\[11px\] font-black px-3 py-1\.5 rounded-xl shadow-lg backdrop-blur-md uppercase tracking-wide bg-white\/90 text-\[#003B5C\]">\s*\{tour\.tag\}\s*<\/span>/,
  `<span className={\`text-[11px] font-black px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md uppercase tracking-wide \${
    tour.tag === "Hot" ? "bg-red-500/90 text-white" : "bg-white/90 text-[#003B5C]"
  }\`}>
    {tour.tag} {tour.tag === "Hot" && <Flame className="w-3 h-3 inline-block ml-0.5 -mt-0.5" />}
  </span>`
);

fs.writeFileSync('src/app/components/TourPage.tsx', code);
