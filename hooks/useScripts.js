import { useRef } from 'react';

export const useScripts = (scripts) => {
  const scriptsLoaded = useRef(false);
  if (typeof window !== "undefined" && !scriptsLoaded.current) {
    scripts.forEach((script) => {
      script();
    });
    scriptsLoaded.current = true;
  }
};