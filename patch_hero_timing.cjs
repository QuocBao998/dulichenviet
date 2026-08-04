const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

const oldEffect = `  useEffect(() => {
    const int = setInterval(() => setHeroIndex(prev => (prev + 1) % heroBanners.length), 5000);
    return () => clearInterval(int);
  }, []);`;

const newEffect = `  useEffect(() => {
    // Banner đầu tiên (index 0) sẽ hiển thị 10 giây, các banner khác hiển thị 5 giây
    const duration = heroIndex === 0 ? 10000 : 5000;
    const timer = setTimeout(() => {
      setHeroIndex(prev => (prev + 1) % heroBanners.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [heroIndex]);`;

code = code.replace(oldEffect, newEffect);
fs.writeFileSync('src/app/App.tsx', code);
console.log('Hero timing updated');
