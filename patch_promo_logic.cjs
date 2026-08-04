const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

const appStateRegex = /export default function App\(\) \{[\s\S]*?const navigateTo = \(p: Page\) => \{/;

const newAppState = `export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [dismissCount, setDismissCount] = useState(0);

  const lastPromoTime = useRef(0);
  const dismissCountRef = useRef(0);
  const isPromoOpenRef = useRef(false);
  const isFormOpenRef = useRef(false);

  useEffect(() => {
    const storedDismiss = localStorage.getItem('promoDismissCount');
    if (storedDismiss) {
      const val = parseInt(storedDismiss);
      setDismissCount(val);
      dismissCountRef.current = val;
    }
  }, []);

  useEffect(() => { isPromoOpenRef.current = isPromoOpen; }, [isPromoOpen]);
  useEffect(() => { isFormOpenRef.current = isFormOpen; }, [isFormOpen]);
  useEffect(() => { dismissCountRef.current = dismissCount; }, [dismissCount]);

  useEffect(() => {
    const tryShowPromo = () => {
      if (dismissCountRef.current >= 3) return;
      if (isPromoOpenRef.current || isFormOpenRef.current) return;
      
      const now = Date.now();
      // Cooldown 15 giây
      if (now - lastPromoTime.current >= 15000) {
        setIsPromoOpen(true);
        lastPromoTime.current = now;
      }
    };

    // 1. Tự động hiển thị khi loading trang web (có độ trễ nhẹ để tải xong giao diện)
    const initTimeout = setTimeout(tryShowPromo, 800);

    // 2. Tự động hiển thị mỗi lần lăn chuột lên xuống
    const handleScroll = () => tryShowPromo();
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 3. Tự động kiểm tra để hiển thị sau mỗi 15 giây (kể cả khi đứng im)
    const interval = setInterval(tryShowPromo, 15000);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // 4. Tự động hiển thị khi qua các tab/trang khác
  useEffect(() => {
    if (dismissCount >= 3 || isPromoOpen || isFormOpen) return;
    const now = Date.now();
    if (now - lastPromoTime.current >= 15000) {
      setIsPromoOpen(true);
      lastPromoTime.current = now;
    }
  }, [page]);

  const handleDismissPromo = () => {
    setIsPromoOpen(false);
    const newCount = dismissCount + 1;
    setDismissCount(newCount);
    localStorage.setItem('promoDismissCount', newCount.toString());
  };

  const navigateTo = (p: Page) => {`;

code = code.replace(appStateRegex, newAppState);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Promo logic updated');
