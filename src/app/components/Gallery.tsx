import Image from 'next/image';
import { getAssetPath } from '../utils/assets';
import { localTranslations } from '../translations';
import { CLINIC_IMAGES } from '../config/images';

interface GalleryProps {
  language: 'en' | 'ar';
  scrollToSection: (id: string) => void;
}

export default function Gallery({ language, scrollToSection }: GalleryProps) {
  const m = localTranslations[language];

  // Configured screenshot items mapping to titles & descriptions
  const galleryItems = [
    {
      title: m.screen1Title,
      desc: m.screen1Desc,
      imageSrc: CLINIC_IMAGES.gallery.screen1Capture,
      alt: "Intraoral capture workstation view screenshot",
      delayClass: "reveal"
    },
    {
      title: m.screen2Title,
      desc: m.screen2Desc,
      imageSrc: CLINIC_IMAGES.gallery.screen23D,
      alt: "Three.js 3D dental arch screenshot",
      delayClass: "reveal"
    },
    {
      title: m.screen3Title,
      desc: m.screen3Desc,
      imageSrc: CLINIC_IMAGES.gallery.screen3History,
      alt: "Complete patient history timeline view screenshot",
      delayClass: "reveal"
    },
    {
      title: m.screen4Title,
      desc: m.screen4Desc,
      imageSrc: CLINIC_IMAGES.gallery.screen4Prescriptions,
      alt: "Digital prescription & direct clinic printing screenshot",
      delayClass: "reveal reveal-delay-100"
    }
  ];

  return (
    <section id="gallery" className="py-24 border-t border-zinc-100 bg-[#f5f5f7] px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3 block">
            {language === 'ar' ? 'من داخل العيادة' : 'From Inside the Clinic'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            {m.galleryTitle}
          </h2>
          <p className="text-zinc-500 font-light leading-relaxed">
            {m.gallerySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {galleryItems.map((item, index) => (
            <div key={index} className={`bg-white border border-zinc-200/60 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-6 ${item.delayClass}`}>
              <div className="relative h-[220px] sm:h-[320px] w-full rounded-2xl overflow-hidden border border-zinc-100">
                <Image
                  src={getAssetPath(item.imageSrc[language])}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="object-cover object-top"
                />
              </div>
              <div className="px-2">
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner mockup showing appointment management details */}
        <div className="mt-10 bg-white border border-zinc-200/60 rounded-3xl p-6 shadow-md flex flex-col lg:flex-row items-center gap-8 reveal">
          <div className="lg:w-2/3 relative h-[200px] sm:h-[340px] w-full rounded-2xl overflow-hidden border border-zinc-100">
            <Image
              src={getAssetPath(CLINIC_IMAGES.appointmentBanner[language])}
              alt="Appointment & chair scheduling screenshot"
              fill
              sizes="(max-width: 1024px) 100vw, 680px"
              className="object-cover object-top"
            />
          </div>
          <div className="lg:w-1/3">
            <span className="text-xs font-bold text-zinc-400 tracking-widest uppercase block mb-2">
              {language === 'ar' ? 'تنظيم العيادة' : 'Practice Operations'}
            </span>
            <h3 className="text-xl font-semibold text-zinc-900 mb-3">
              {language === 'ar' ? 'إدارة المواعيد' : 'Appointment Management'}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-light mb-4">
              {language === 'ar'
                ? 'نظّم مواعيد المرضى، تابع جاهزية الكراسي العلاجية، وحدد جلسات المتابعة مباشرة من شاشة العمل السريرية. يومك يظل منظماً'
                : 'Schedule patient visits, track chair availability, and manage follow-up appointments directly from your clinical workstation. Your day stays organized.'}
            </p>
            <button
              onClick={() => scrollToSection('demo')}
              className="text-xs font-bold text-zinc-900 border border-zinc-300 hover:bg-zinc-50 rounded-full px-5 py-2 transition-all cursor-pointer bg-transparent font-semibold"
            >
              {language === 'ar' ? 'احجز عرضاً تجريبياً' : 'Book a Demo'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
