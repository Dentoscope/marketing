'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import { localTranslations, countriesList } from './translations';

const isGithubActions = typeof process !== 'undefined' && process.env.GITHUB_ACTIONS === 'true';
const repoName = isGithubActions && process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`
  : '';

const getAssetPath = (src: string) => {
  return `${repoName}${src}`;
};

export default function HomePage() {
  const [language, setLanguage] = useState<'ar' | 'en'>('en');

  // Latency Simulator states
  const [simRunning, setSimRunning] = useState(true);
  const [timeRTC, setTimeRTC] = useState(0);
  const [timeRTSP, setTimeRTSP] = useState(0);

  // Hydration safety mount check
  const [mounted, setMounted] = useState(false);
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
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem('dentoscope-language', language);
  }, [language]);

  // Latency Simulator Clock
  useEffect(() => {
    if (simRunning) {
      const interval = setInterval(() => {
        const now = Date.now();
        // WebRTC has 0 lag in simulation
        setTimeRTC(now);
        // RTSP is no longer simulated
        setTimeRTSP(now - 2980);
      }, 16);
      return () => clearInterval(interval);
    }
  }, [simRunning]);

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

  // Demo Request Form states
  const [formData, setFormData] = useState({
    name: '',
    clinic: '',
    email: '',
    phone: '',
    country: 'Egypt',
    preferredTime: 'morning',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.warn("Web3Forms Access Key is not configured. Simulating email transmission.");
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        setFormData({
          name: '',
          clinic: '',
          email: '',
          phone: '',
          country: 'Egypt',
          preferredTime: 'morning',
          message: ''
        });
      }, 1500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Dentoscope Demo Request from ${formData.name}`,
          from_name: "Dentoscope Marketing",
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          clinic: '',
          email: '',
          phone: '',
          country: 'Egypt',
          preferredTime: 'morning',
          message: ''
        });
      } else {
        alert(language === 'ar' ? 'حدث خطأ أثناء إرسال طلب العرض. يرجى المحاولة مرة أخرى.' : 'Failed to send demo request. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert(language === 'ar' ? 'حدث خطأ في الاتصال. يرجى التحقق من اتصال الإنترنت.' : 'Connection error. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Slider handlers removed

  const m = localTranslations[language] || localTranslations.en;
  const isRTL = language === 'ar';

  const renderFeatureIcon = (icon: string) => {
    switch (icon) {
      case 'video':
        return (
          <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'mic':
        return (
          <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        );
      case 'database':
        return (
          <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'hardware':
        return (
          <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={2} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.636 5.636l.707.707m11.314 11.314l.707.707M18.364 5.636l-.707.707M6.343 17.657l-.707.707" />
          </svg>
        );
      case 'twain':
        return (
          <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        );
      case '3d':
        return (
          <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case 'timeline':
        return (
          <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        );
      case 'calendar':
        return (
          <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'rx':
        return (
          <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'print':
        return (
          <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
        );
      case 'feedback':
        return (
          <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10v4m-3-2h6" />
          </svg>
        );
      case 'pdf':
      default:
        return (
          <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  const features = [
    { title: m.feat1Title, desc: m.feat1Desc, icon: "video" },
    { title: m.feat2Title, desc: m.feat2Desc, icon: "mic" },
    { title: m.feat3Title, desc: m.feat3Desc, icon: "database" },
    { title: m.feat4Title, desc: m.feat4Desc, icon: "hardware" },
    { title: m.feat5Title, desc: m.feat5Desc, icon: "twain" },
    { title: m.feat6Title, desc: m.feat6Desc, icon: "3d" },
    { title: m.feat7Title, desc: m.feat7Desc, icon: "timeline" },
    { title: m.feat8Title, desc: m.feat8Desc, icon: "calendar" },
    { title: m.feat9Title, desc: m.feat9Desc, icon: "rx" },
    { title: m.feat10Title, desc: m.feat10Desc, icon: "print" },
    { title: m.feat11Title, desc: m.feat11Desc, icon: "feedback" },
    { title: m.feat12Title, desc: m.feat12Desc, icon: "pdf" }
  ];

  return (
    <div className={`min-h-screen bg-[#f9f9fa] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white ${isRTL ? 'rtl' : 'ltr'}`}>

      {/* Sticky Glassmorphism Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-zinc-200/80 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-center overflow-hidden p-1 shadow-sm transition-all hover:border-zinc-300">
              <Image
                src={getAssetPath("/logo.png")}
                alt="Dentoscope Logo"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-lg tracking-tight text-zinc-900 hover:opacity-80 transition-opacity">
              {language === 'ar' ? 'دنتوسكوب' : 'Dentoscope'}
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-zinc-500">
            <button onClick={() => scrollToSection('gallery')} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-0">{m.navGallery}</button>
            <button onClick={() => scrollToSection('latency')} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-0">{m.navLatency}</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-0">{m.navFeatures}</button>
            <button onClick={() => scrollToSection('specs')} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-0">{m.navSpecs}</button>
            <button onClick={() => scrollToSection('demo')} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-0">{m.navDemo}</button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-zinc-200 hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 transition-all cursor-pointer bg-transparent"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>

            {/* Primary Action */}
            <button
              onClick={() => scrollToSection('demo')}
              className="bg-zinc-900 hover:bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-all shadow-sm flex items-center gap-1 cursor-pointer border-0"
            >
              {m.navDemo}
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 flex flex-col items-center text-center max-w-6xl mx-auto">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-zinc-100 rounded-full blur-[100px] pointer-events-none -z-10" />

        <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">
          {language === 'ar' ? 'مساعد تصوير العيادات المتطور' : 'Medical assistant for dental clinics'}
        </span>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-zinc-900 mb-6 leading-none select-none reveal">
          {m.heroTitle}
        </h1>

        <p className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-500 max-w-3xl mb-8 leading-tight reveal reveal-delay-100">
          {m.heroSubtitle}
        </p>

        <p className="text-base text-zinc-500 max-w-xl mb-10 leading-relaxed font-light reveal reveal-delay-200">
          {m.heroDesc}
        </p>

        {/* Hero CTA */}
        <div className="flex gap-4 mb-20 reveal reveal-delay-300">
          <button
            onClick={() => scrollToSection('demo')}
            className="bg-zinc-900 hover:bg-black text-white font-semibold px-8 py-3 rounded-full text-sm transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer border-0"
          >
            {m.navDemo}
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="border border-zinc-200 hover:bg-zinc-50 font-semibold px-8 py-3 rounded-full text-sm transition-all flex items-center justify-center gap-2 cursor-pointer text-zinc-600 hover:text-zinc-900 bg-transparent"
          >
            {language === 'ar' ? 'تصفح النظام' : 'Explore System'}
            <svg className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Hero Interactive UI Card Displaying Dashboard screenshot */}
        <div className="w-full max-w-5xl rounded-2xl border border-zinc-200/80 bg-white p-2.5 shadow-2xl shadow-zinc-200/80 relative overflow-hidden group reveal reveal-delay-400">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-2.5 mb-2.5 px-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-zinc-200" />
              <div className="w-3 h-3 rounded-full bg-zinc-200" />
              <div className="w-3 h-3 rounded-full bg-zinc-200" />
            </div>
            <div className="w-12" />
          </div>
          <div className="relative h-[250px] sm:h-[480px] w-full rounded-lg overflow-hidden border border-zinc-100">
            <Image
              src={getAssetPath("/screenshots/dashboard_real.png")}
              alt="Dentoscope Clinic Dashboard Screenshot"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top select-none"
              priority
            />
          </div>
        </div>
      </section>

      {/* Screenshots Gallery Showcase Section */}
      <section id="gallery" className="py-24 border-t border-zinc-100 bg-[#f5f5f7] px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3 block">
              {language === 'ar' ? 'لقطات من واجهة النظام' : 'Visual Workstation Showcase'}
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
              {m.galleryTitle}
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed">
              {m.gallerySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Screen 1: Camera Capture */}
            <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-6 reveal">
              <div className="relative h-[220px] sm:h-[320px] w-full rounded-2xl overflow-hidden border border-zinc-100">
                <Image
                  src={getAssetPath("/screenshots/camera_real.png")}
                  alt="Intraoral capture workstation view screenshot"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="object-cover object-top"
                />
              </div>
              <div className="px-2">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{m.screen1Title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-light">{m.screen1Desc}</p>
              </div>
            </div>

            {/* Screen 2: 3D Annotations */}
            <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-6 reveal">
              <div className="relative h-[220px] sm:h-[320px] w-full rounded-2xl overflow-hidden border border-zinc-100">
                <Image
                  src={getAssetPath("/screenshots/annotations_real.png")}
                  alt="Three.js 3D dental arch screenshot"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="object-cover object-top"
                />
              </div>
              <div className="px-2">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{m.screen2Title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-light">{m.screen2Desc}</p>
              </div>
            </div>

          </div>

          {/* Banner mockup showing preset details */}
          <div className="mt-10 bg-white border border-zinc-200/60 rounded-3xl p-6 shadow-md flex flex-col lg:flex-row items-center gap-8 reveal">
            <div className="lg:w-2/3 relative h-[200px] sm:h-[340px] w-full rounded-2xl overflow-hidden border border-zinc-100">
              <Image
                src={getAssetPath("/screenshots/preset_real.png")}
                alt="Preset adjustments before/after screenshot"
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover object-top"
              />
            </div>
            <div className="lg:w-1/3">
              <span className="text-xs font-bold text-zinc-400 tracking-widest uppercase block mb-2">
                {language === 'ar' ? 'أدوات التحليل والقياس' : 'Diagnostic Enhancements'}
              </span>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">
                {language === 'ar' ? 'فلاتر الأشعة وتحسين الصور' : 'Diagnostic Image Processing'}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-light mb-4">
                {language === 'ar'
                  ? 'يحتوي دنتوسكوب على محرك لمعالجة الصور لتطبيق فلاتر الأشعة والتباين المزدوج، بالإضافة إلى مقارنة ذكية للصور لتتبع حالة المريض.'
                  : 'Toggle custom medical presets instantly. Increase contrast bounds, invert exposure grids to examine microfractures, or sharpen deep microscope feeds for ultimate clarity.'}
              </p>
              <button
                onClick={() => scrollToSection('demo')}
                className="text-xs font-bold text-zinc-900 border border-zinc-300 hover:bg-zinc-50 rounded-full px-5 py-2 transition-all cursor-pointer bg-transparent"
              >
                {language === 'ar' ? 'طلب عرض تجريبي' : 'Request Demo'}
              </button>
            </div>
          </div>

        </div>
      </section>



      {/* Latency Simulator Section */}
      <section id="latency" className="py-24 border-t border-zinc-100 bg-[#f5f5f7] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Descriptions */}
            <div className="reveal">
              <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3 block">
                {language === 'ar' ? 'التنسيق الحركي الجراحي' : 'Sterile Clinical Coordination'}
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
                {m.latencyTitle}
              </h2>
              <p className="text-zinc-500 mb-8 font-light leading-relaxed">
                {m.latencySubtitle}
              </p>
            </div>

            {/* Interactive Visualizer Panel */}
            <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 flex flex-col gap-6 shadow-lg shadow-zinc-200/40 relative overflow-hidden reveal reveal-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-transparent pointer-events-none" />

              {/* Rotating Object to demonstrate lag */}
              <div className="flex flex-col items-center justify-center p-8 bg-zinc-50 rounded-2xl border border-zinc-100 relative">
                <div
                  className="w-16 h-16 border-2 border-dashed border-zinc-300 rounded-full flex items-center justify-center transition-transform"
                  style={{
                    transform: `rotate(${mounted && simRunning ? (Date.now() / 10) % 360 : 45}deg)`,
                  }}
                >
                  <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3" />
                  </svg>
                </div>
                <span className="text-xs text-zinc-400 uppercase tracking-widest mt-4 font-semibold">
                  {language === 'ar' ? 'الحدث الفعلي (حركة الطبيب)' : 'Actual Clinic Event (Doctor Action)'}
                </span>
              </div>

              {/* Single feed display without comparison */}
              <div className="flex justify-center w-full">

                {/* Dentoscope WebRTC Feed */}
                <div className="bg-zinc-50 border border-emerald-500/20 rounded-2xl p-6 relative flex flex-col items-center text-center max-w-sm w-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-4 right-4 animate-ping" />
                  <div
                    className="w-12 h-12 border border-dashed border-emerald-500/40 rounded-full flex items-center justify-center mb-4"
                    style={{
                      transform: `rotate(${mounted && simRunning ? (Date.now() / 10) % 360 : 45}deg)`,
                    }}
                  >
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-zinc-800 block truncate w-full">{m.latencyRTC}</span>
                  <span className="text-xs text-zinc-500 mt-1 block leading-tight font-mono">{m.latencyRTCLag}</span>

                  {/* Digital Clock Display */}
                  <div className="mt-4 bg-white border border-zinc-200 rounded-full px-4 py-1 text-xs font-mono text-emerald-600 font-bold">
                    {mounted && simRunning ? new Date(timeRTC).toISOString().slice(17, -1) : '12:04.382'}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sterile Assistant Setup Guide Section */}
      <section className="py-24 bg-transparent border-t border-zinc-100 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3 block">
              {language === 'ar' ? 'إعداد سريع وبسيط' : 'Quick & Simple Setup'}
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
              {m.workflowHeader}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col gap-4 relative reveal">
              <div className="text-5xl font-black text-zinc-200">01</div>
              <h3 className="text-lg font-bold text-zinc-900">{m.workflowStep1Title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">{m.workflowStep1Desc}</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-4 relative reveal reveal-delay-100">
              <div className="text-5xl font-black text-zinc-200">02</div>
              <h3 className="text-lg font-bold text-zinc-900">{m.workflowStep2Title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">{m.workflowStep2Desc}</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-4 relative reveal reveal-delay-200">
              <div className="text-5xl font-black text-zinc-200">03</div>
              <h3 className="text-lg font-bold text-zinc-900">{m.workflowStep3Title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">{m.workflowStep3Desc}</p>
            </div>
          </div>

        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section id="features" className="py-24 bg-transparent border-t border-zinc-100 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16 reveal">
            <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3 block">
              {language === 'ar' ? 'مواصفات ومميزات النظام' : 'System Capabilities'}
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
              {m.bentoHeader}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className={`bg-[#f5f5f7] border border-zinc-200/50 rounded-3xl p-8 hover:bg-[#e8e8ed] transition-all flex flex-col justify-between group reveal ${idx % 3 === 1 ? 'reveal-delay-100' : idx % 3 === 2 ? 'reveal-delay-200' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {renderFeatureIcon(feat.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{feat.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Tech Specifications Accordion Section */}
      <section id="specs" className="py-24 border-t border-zinc-100 bg-transparent px-6">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-black tracking-tight text-zinc-900">
              {m.specsTitle}
            </h2>
          </div>

          <div className="border border-zinc-200 rounded-3xl divide-y divide-zinc-200 overflow-hidden bg-white shadow-sm reveal reveal-delay-100">

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <span className="text-sm font-bold text-zinc-800">{m.specsDb}</span>
              <span className="md:col-span-2 text-xs text-zinc-500 leading-relaxed font-light">{m.specsDbVal}</span>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <span className="text-sm font-bold text-zinc-800">{m.specsVideo}</span>
              <span className="md:col-span-2 text-xs text-zinc-500 leading-relaxed font-light">{m.specsVideoVal}</span>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <span className="text-sm font-bold text-zinc-800">{m.specsTwain}</span>
              <span className="md:col-span-2 text-xs text-zinc-500 leading-relaxed font-light">{m.specsTwainVal}</span>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <span className="text-sm font-bold text-zinc-800">{m.specsRtc}</span>
              <span className="md:col-span-2 text-xs text-zinc-500 leading-relaxed font-light">{m.specsRtcVal}</span>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <span className="text-sm font-bold text-zinc-800">{m.specsNetwork}</span>
              <span className="md:col-span-2 text-xs text-zinc-500 leading-relaxed font-light">{m.specsNetworkVal}</span>
            </div>

          </div>
        </div>
      </section>

      {/* Request Demo Form Section */}
      <section id="demo" className="py-24 border-t border-zinc-100 bg-[#f5f5f7] px-6">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-16 reveal">
            <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3 block">
              {m.navDemo}
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
              {m.demoTitle}
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed">
              {m.demoSubtitle}
            </p>
          </div>

          <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 md:p-10 shadow-lg shadow-zinc-200/40 relative overflow-hidden reveal reveal-delay-100">

            {formSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">{m.demoSuccessTitle}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-md font-light">{m.demoSuccessDesc}</p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-8 text-xs font-bold text-zinc-900 border border-zinc-300 hover:bg-zinc-50 rounded-full px-6 py-2 transition-all cursor-pointer bg-transparent"
                >
                  {language === 'ar' ? 'إرسال طلب آخر' : 'Submit Another Request'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="demo-name" className="text-xs font-bold text-zinc-700">{m.demoName} *</label>
                    <input
                      id="demo-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-full px-4 py-2.5 bg-white text-zinc-900 text-sm transition-all outline-none"
                    />
                  </div>

                  {/* Clinic Name */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="demo-clinic" className="text-xs font-bold text-zinc-700">{m.demoClinic} *</label>
                    <input
                      id="demo-clinic"
                      type="text"
                      name="clinic"
                      required
                      value={formData.clinic}
                      onChange={handleInputChange}
                      className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-full px-4 py-2.5 bg-white text-zinc-900 text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="demo-email" className="text-xs font-bold text-zinc-700">{m.demoEmail} *</label>
                    <input
                      id="demo-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-full px-4 py-2.5 bg-white text-zinc-900 text-sm transition-all outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="demo-phone" className="text-xs font-bold text-zinc-700">{m.demoPhone} *</label>
                    <input
                      id="demo-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-full px-4 py-2.5 bg-white text-zinc-900 text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Country Selector */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="demo-country" className="text-xs font-bold text-zinc-700">{m.demoCountry}</label>
                    <div className="relative">
                      <select
                        id="demo-country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-full px-5 py-2.5 bg-white text-zinc-900 text-sm transition-all outline-none appearance-none cursor-pointer"
                      >
                        {countriesList.map((country) => (
                          <option key={country.code} value={country.enName}>
                            {language === 'ar' ? country.arName : country.enName}
                          </option>
                        ))}
                      </select>
                      <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRTL ? 'left-5' : 'right-5'} text-zinc-500`}>
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Preferred Contact Time */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="demo-time" className="text-xs font-bold text-zinc-700">{m.demoTime}</label>
                    <div className="relative">
                      <select
                        id="demo-time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-full px-5 py-2.5 bg-white text-zinc-900 text-sm transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="morning">{m.demoTimeMorning}</option>
                        <option value="afternoon">{m.demoTimeAfternoon}</option>
                        <option value="evening">{m.demoTimeEvening}</option>
                      </select>
                      <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRTL ? 'left-5' : 'right-5'} text-zinc-500`}>
                        ▼
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes/Message */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="demo-message" className="text-zinc-700 text-xs font-bold">{m.demoMessage}</label>
                  <textarea
                    id="demo-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-2xl px-5 py-3 bg-white text-zinc-900 text-sm transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-zinc-900 hover:bg-black disabled:bg-zinc-400 text-white font-bold px-8 py-3 rounded-full text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : null}
                    {m.demoSubmit}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-[#f5f5f7] py-16 px-6 text-center text-zinc-500">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-zinc-200/60 bg-white/50 flex items-center justify-center overflow-hidden p-1.5 shadow-sm">
              <Image
                src={getAssetPath("/logo.png")}
                alt="Dentoscope Logo"
                width={18}
                height={18}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-sm text-zinc-900 tracking-tight">
              {language === 'ar' ? 'دنتوسكوب' : 'Dentoscope'}
            </span>
          </div>

          <p className="text-xs text-zinc-500 max-w-md font-light leading-relaxed">
            {m.footerDesc}
          </p>

          <div className="flex gap-6 mt-4 text-xs font-semibold text-zinc-500">
            <button onClick={() => scrollToSection('demo')} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-0 font-semibold">{m.navDemo}</button>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-0 font-semibold">
              {language === 'ar' ? 'الرجوع للأعلى ↑' : 'Back to Top ↑'}
            </button>
          </div>

          <div className="text-xs text-zinc-400 border-t border-zinc-200/80 w-full pt-8 mt-6">
            {m.footerCopyright}
          </div>
        </div>
      </footer>

    </div>
  );
}

