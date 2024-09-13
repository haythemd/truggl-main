"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const OBSERVED_SECTIONS = ["hero", "service", "about"];

interface SectionObserverProps {
  children?: React.ReactNode;
}

// Create a context
const SectionContext = createContext<
  | {
      activeSection: string | undefined;
      setActiveSection:
        | React.Dispatch<React.SetStateAction<string | undefined>>
        | undefined;
      sectionIsActive: (sectionName: string) => boolean;
    }
  | undefined
>(undefined);

const SectionOberver = (props: SectionObserverProps) => {
  const [activeSection, setActiveSection] = useState<string>();

  const sectionIsActive = (sectionName: string): boolean => {
    if (OBSERVED_SECTIONS.includes(sectionName) !== true) {
      return false;
    }

    return activeSection === sectionName;
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const shouldIgnoreSection = (section: HTMLElement): boolean => {
      if (!section.id) return true;

      return !OBSERVED_SECTIONS.includes(section.id);
    };

    const sectionIsInView = (section: HTMLElement): boolean => {
      const sectionTop = section.offsetTop;
      const pageYOffset = window.scrollY;

      return pageYOffset >= sectionTop;
    };

    const observeSections = () => {
      sections.forEach((section) => {
        if (shouldIgnoreSection(section)) return;
        if (sectionIsInView(section)) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", observeSections);
    return () => {
      window.removeEventListener("scroll", observeSections);
    };
  }, []);

  const contextValue = {
    activeSection,
    setActiveSection,
    sectionIsActive,
  };

  return (
    <SectionContext.Provider value={contextValue}>
      {props.children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);

  if (!context) {
    throw new Error("useSection must be used within a SectionObserver");
  }

  return context;
};

export default SectionOberver;
