'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-2xl bg-gradient-to-tr from-sky-600 via-cyan-500 to-amber-500 text-white shadow-xl shadow-sky-900/30 hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/30 backdrop-blur-md group ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform duration-200" />
      <span className="sr-only">Go to top</span>
    </button>
  );
}
