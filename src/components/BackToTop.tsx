import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <>
      {isVisible && <button onClick={scrollToTop} className="fixed bottom-6 right-6 p-3 bg-[#FFD400] text-[#231F20] rounded-full shadow-lg hover:bg-[#e6c000] transition-all duration-300 z-40 transform hover:scale-110" aria-label="Back to top">
          <ArrowUp size={24} />
        </button>}
    </>;
}