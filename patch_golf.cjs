const fs = require('fs');

let code = fs.readFileSync('src/app/components/GolfPage.tsx', 'utf8');

const imports = `import { motion as Motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import img3 from "../../imports/img_3.png";
import img4 from "../../imports/img_4.png";`;

code = code.replace(/import \{ motion as Motion \} from "motion\/react";\nimport \{ ArrowRight, Star \} from "lucide-react";/, imports);

code = code.replace(
  /\{ name: "Sân Golf BRG Đà Nẵng", loc: "Đà Nẵng", img: "https:\/\/images\.unsplash\.com\/photo-1535136029863-4a3e36df2eb4\?w=800&q=80" \}/,
  `{ name: "Sân Golf BRG Đà Nẵng", loc: "Đà Nẵng", img: img4 }`
);

code = code.replace(
  /\{ name: "Sân Golf FLC Hạ Long", loc: "Quảng Ninh", img: "https:\/\/images\.unsplash\.com\/photo-1592919505780-303950717480\?w=800&q=80" \}/,
  `{ name: "Sân Golf FLC Hạ Long", loc: "Quảng Ninh", img: img3 }`
);

fs.writeFileSync('src/app/components/GolfPage.tsx', code);
console.log('GolfPage updated');
