'use client'
import React, { createContext, useContext, useRef } from 'react';

type ScrollContextType = {
  registerSection: (name: string, ref: React.RefObject<HTMLElement>) => void;
  scrollToSection: (name: string) => void;
};

const ScrollContext = createContext<ScrollContextType>({
  registerSection: () => {},
  scrollToSection: () => {},
});

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sectionsRef = useRef<Record<string, React.RefObject<HTMLElement>>>({});

  const registerSection = (name: string, ref: React.RefObject<HTMLElement>) => {
    sectionsRef.current[name] = ref;
  };

  const scrollToSection = (name: string) => {
    const sectionRef = sectionsRef.current[name];
    if (sectionRef?.current) {
      const offsetTop = sectionRef.current.offsetTop;
      const headerHeight = 56;
      window.scrollTo({
        top: offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ registerSection, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);