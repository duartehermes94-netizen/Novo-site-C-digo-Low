const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(
  "import { Suspense, lazy } from 'react';",
  "import { Suspense, lazy, useState, useEffect } from 'react';"
);
const originalComponent = `export default function App() {
  return (
    <main className="min-h-screen bg-brand-light">
      <Hero />
      <Suspense fallback={<div className="h-20 w-full bg-brand-light"></div>}>
        <Problem />
        <Solution />
        <Offer />
        <Closing />
        <FaqFooter />
      </Suspense>
    </main>
  );
}`;
const newComponent = `export default function App() {
  const [loadBelowFold, setLoadBelowFold] = useState(false);

  useEffect(() => {
    // Carrega o resto da página após 1.5s ou quando o usuário interagir
    const timer = setTimeout(() => setLoadBelowFold(true), 1500);
    const handleInteraction = () => setLoadBelowFold(true);
    
    window.addEventListener('scroll', handleInteraction, { once: true, passive: true });
    window.addEventListener('mousemove', handleInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleInteraction, { once: true, passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <main className="min-h-screen bg-brand-light">
      <Hero />
      {loadBelowFold && (
        <Suspense fallback={<div className="h-20 w-full bg-brand-light"></div>}>
          <Problem />
          <Solution />
          <Offer />
          <Closing />
          <FaqFooter />
        </Suspense>
      )}
    </main>
  );
}`;
code = code.replace(originalComponent, newComponent);
fs.writeFileSync('src/App.tsx', code);
