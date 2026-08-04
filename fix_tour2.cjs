const fs = require('fs');
let code = fs.readFileSync('src/app/components/TourPage.tsx', 'utf8');

code = code.replace(
  /import \{ Search, MapPin, Calendar, Plane, ArrowRight, Star, Clock \} from "lucide-react";/,
  'import { Search, MapPin, Calendar, Plane, ArrowRight, Star, Clock, Flame } from "lucide-react";'
);

fs.writeFileSync('src/app/components/TourPage.tsx', code);
