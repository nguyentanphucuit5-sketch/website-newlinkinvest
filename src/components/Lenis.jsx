"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      lerp: 0.05, // Reduced for smoother scrolling (was 0.1)
      duration: 1.2, // Slightly shorter for snappier feel (was 1.5)
      smoothWheel: true, // Smooth mouse wheel
      smoothTouch: false, // Disable touch (enable later if needed)
      normalizeWheel: true, // Consistent wheel behavior
      wheelMultiplier: 1, // Default wheel speed
      touchMultiplier: 2, // Default touch speed (if enabled)
      infinite: false, // Prevent infinite scrolling issues
    });

    setLenis(lenisInstance);

    // Optimized RAF loop
    let lastTime = 0;
    function raf(time) {
      if (time - lastTime >= 16.67) { // Cap at ~60fps
        lenisInstance.raf(time);
        lastTime = time;
      }
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}