const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

if (!code.includes('Flame, Facebook')) {
  code = code.replace(
    /import \{ Search, Phone, Mail, MapPin, Menu, X, ArrowRight,\s*Plane, Globe, Users, Star, Calendar, Clock, ChevronDown,\s*Shield, Headphones, Award, ChevronRight\s*\} from "lucide-react";/,
    `import { Search, Phone, Mail, MapPin, Menu, X, ArrowRight, Plane, Globe, Users, Star, Calendar, Clock, ChevronDown, Shield, Headphones, Award, ChevronRight, Flame, Facebook, Youtube, Music2 } from "lucide-react";`
  );
  fs.writeFileSync('src/app/App.tsx', code);
}
