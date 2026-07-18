import Image from 'next/image';
import { getAssetPath } from '../utils/assets';
import { localTranslations } from '../translations';

interface GalleryProps {
  language: 'en' | 'ar';
  scrollToSection: (id: string) => void;
}

export default function Gallery({ language, scrollToSection }: GalleryProps) {
  const m = localTranslations[language];

  return (
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
              className="text-xs font-bold text-zinc-900 border border-zinc-300 hover:bg-zinc-50 rounded-full px-5 py-2 transition-all cursor-pointer bg-transparent font-semibold"
            >
              {language === 'ar' ? 'طلب عرض تجريبي' : 'Request Demo'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
