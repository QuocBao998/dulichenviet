const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

const oldLogicRegex = /const lastPromoTime = useRef\(0\);[\s\S]*?const handleDismissPromo = \(\) => \{[\s\S]*?localStorage.setItem\('promoDismissCount', newCount.toString\(\)\);\n  \};/;

const newLogic = `const lastPromoTime = useRef(Date.now() - 15000);
  const dismissCountRef = useRef(0);
  const isPromoOpenRef = useRef(false);
  const isFormOpenRef = useRef(false);

  useEffect(() => {
    const storedDismiss = localStorage.getItem('promoDismissCount_v2');
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
      if (now - lastPromoTime.current >= 15000) {
        setIsPromoOpen(true);
        lastPromoTime.current = now;
      }
    };

    const initTimeout = setTimeout(tryShowPromo, 1000);
    const handleScroll = () => tryShowPromo();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    const interval = setInterval(tryShowPromo, 2000); // Check more frequently, the 15s cooldown prevents spam

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
    const newCount = dismissCount + 1;
    setDismissCount(newCount);
    dismissCountRef.current = newCount;
    localStorage.setItem('promoDismissCount_v2', newCount.toString());
    lastPromoTime.current = Date.now(); // Reset the cooldown when dismissed!
  };`;

code = code.replace(oldLogicRegex, newLogic);
fs.writeFileSync('src/app/App.tsx', code);
