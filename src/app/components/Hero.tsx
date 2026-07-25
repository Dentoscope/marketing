import Image from 'next/image';
import { getAssetPath } from '../utils/assets';
import { localTranslations } from '../translations';
import { CLINIC_IMAGES } from '../config/images';

interface HeroProps {
  language: 'en' | 'ar';
  scrollToSection: (id: string) => void;
}

export default function Hero({ language, scrollToSection }: HeroProps) {
  const m = localTranslations[language];
  const isRTL = language === 'ar';

  return (
    <section className="relative pt-20 pb-16 px-6 flex flex-col items-center text-center max-w-6xl mx-auto">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-zinc-100 rounded-full blur-[100px] pointer-events-none -z-10" />

      <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
        {language === 'ar' ? 'المنصة الرقمية المتكاملة لعيادات الأسنان' : 'The complete digital platform for dental clinics'}
      </span>

      <h1 className="text-6xl md:text-8xl font-black tracking-tight text-zinc-900 leading-none select-none reveal my-5">
        {m.heroTitle}
      </h1>

      <p className="text-xl md:text-2xl font-medium max-w-3xl mb-8 leading-relaxed reveal reveal-delay-100">
        <span className="hero-subtitle-selected">
          {m.heroSubtitle}
        </span>
      </p>

      <p className="text-sm sm:text-base text-zinc-500 max-w-xl mb-10 leading-relaxed font-normal reveal reveal-delay-200">
        {m.heroDesc}
      </p>

      {/* Hero CTA */}
      <div className="flex gap-4 mb-20 reveal reveal-delay-300">
        <button
          onClick={() => scrollToSection('demo')}
          className="bg-zinc-900 hover:bg-black text-white font-semibold px-5 py-2.5 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer border-0"
        >
          {m.navDemo}
        </button>
        <button
          onClick={() => scrollToSection('gallery')}
          className="border border-zinc-200 hover:bg-zinc-50 font-semibold px-5 py-2.5 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer text-zinc-600 hover:text-zinc-900 bg-transparent"
        >
          {language === 'ar' ? 'شاهد النظام' : 'See It in Action'}
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
            src={getAssetPath(CLINIC_IMAGES.heroDashboard[language])}
            alt="Dentoscope Clinic Dashboard Screenshot"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-top select-none"
            priority
          />
        </div>
      </div>
    </section>
  );
}
