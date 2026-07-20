'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import LatencySimulator from './components/LatencySimulator';
import SetupGuide from './components/SetupGuide';
import FeaturesBento from './components/FeaturesBento';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';

export default function HomePage() {
  const [language, setLanguage] = useState<'ar' | 'en'>('en');
  const [mounted, setMounted] = useState(false);

  // Hydration safety mount check
  useEffect(() => {
    setMounted(true);
    // Disable automatic browser scroll restoration on refresh
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Force scroll to top on fresh mount
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  // Check initial language preference from localStorage if client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = (localStorage.getItem('dentoscope-language') || localStorage.getItem('doctorscope-language')) as 'ar' | 'en';
      if (saved === 'ar' || saved === 'en') {
        setLanguage(saved);
      }
    }
  }, []);

  // Update layout direction on language change
  useEffect(() => {
    if (!mounted) return;
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem('dentoscope-language', language);
  }, [language, mounted]);

  // Intersection Observer for scroll-driven animations
  useEffect(() => {
    if (!mounted) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once revealed, stop observing
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.reveal');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [language, mounted]); // Re-initialize when language DOM or mount state resolves

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-[#f9f9fa] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        scrollToSection={scrollToSection}
      />
      <main className="overflow-x-hidden">
        <Hero language={language} scrollToSection={scrollToSection} />
        <Gallery language={language} scrollToSection={scrollToSection} />
        <LatencySimulator language={language} />
        <SetupGuide language={language} />
        <FeaturesBento language={language} />
        <DemoForm language={language} />
      </main>
      <Footer language={language} scrollToSection={scrollToSection} />
    </div>
  );
}
