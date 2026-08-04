const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

const oldLogic = /const lastPromoTime = useRef\(Date\.now\(\) - 15000\);[\s\S]*?const handleDismissPromo = \(\) => \{[\s\S]*?lastPromoTime\.current = Date\.now\(\); \/\/ Reset the cooldown when dismissed!\n  \};/;

const newLogic = `const lastPromoTime = useRef(Date.now() - 15000);
  const dismissCountRef = useRef(0);
  const isPromoOpenRef = useRef(false);
  const isFormOpenRef = useRef(false);

  useEffect(() => {
    try {
      const storedDismiss = localStorage.getItem('promoDismissCount_v3');
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

    const initTimeout = setTimeout(tryShowPromo, 2000);
    const handleScroll = () => tryShowPromo();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    const interval = setInterval(tryShowPromo, 3000);

    return () => {
      clearTimeout(initTimeout);
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
      localStorage.setItem('promoDismissCount_v3', newCount.toString());
    } catch(e) {}
    lastPromoTime.current = Date.now();
  };`;

code = code.replace(oldLogic, newLogic);
fs.writeFileSync('src/app/App.tsx', code);
