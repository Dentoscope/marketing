import { useState } from 'react';
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
  const [appointmentView, setAppointmentView] = useState<'weekly' | 'monthly'>('weekly');
  const [prescriptionView, setPrescriptionView] = useState<'digital' | 'print'>('digital');

  const getScreenImageSrc = (index: number) => {
    switch (index) {
      case 0:
        return CLINIC_IMAGES.gallery.screen1Capture[language];
      case 1:
        return CLINIC_IMAGES.gallery.screen23D[language];
      case 2:
        return CLINIC_IMAGES.gallery.screen3Appointment[appointmentView][language];
      case 3:
        return CLINIC_IMAGES.gallery.screen4Prescriptions[prescriptionView][language];
      default:
        return CLINIC_IMAGES.gallery.screen1Capture[language];
    }
  };

  const galleryItems = [
    {
      title: m.screen1Title,
      desc: m.screen1Desc,
      alt: "Intraoral capture workstation view screenshot",
      delayClass: "reveal"
    },
    {
      title: m.screen2Title,
      desc: m.screen2Desc,
      alt: "Three.js 3D dental arch screenshot",
      delayClass: "reveal"
    },
    {
      title: m.screen3Title,
      desc: m.screen3Desc,
      alt: "Smart appointment & chair scheduling screenshot",
      delayClass: "reveal",
      isSwappable: true,
      swappableType: 'appointment'
    },
    {
      title: m.screen4Title,
      desc: m.screen4Desc,
      alt: "Digital prescription & direct clinic printing screenshot",
      delayClass: "reveal reveal-delay-100",
      isSwappable: true,
      swappableType: 'prescription'
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
            <div key={index} className={`bg-white border border-zinc-200/60 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-6 relative ${item.delayClass}`}>
              <div className="relative h-[220px] sm:h-[320px] w-full rounded-2xl overflow-hidden border border-zinc-100 group">
                <Image
                  src={getAssetPath(getScreenImageSrc(index))}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="object-cover object-top transition-all duration-300"
                />

                {/* Swappable toggle pills for Appointment Management */}
                {item.isSwappable && item.swappableType === 'appointment' && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-zinc-900/80 backdrop-blur-md p-1 rounded-full flex gap-1 shadow-lg z-10 border border-white/10">
                    <button
                      onClick={() => setAppointmentView('weekly')}
                      className={`px-3 py-1 text-[11px] font-semibold rounded-full transition-all cursor-pointer border-0 ${
                        appointmentView === 'weekly'
                          ? 'bg-white text-zinc-900 shadow-sm'
                          : 'text-zinc-300 hover:text-white bg-transparent'
                      }`}
                    >
                      {language === 'ar' ? 'العرض الأسبوعي' : 'Weekly View'}
                    </button>
                    <button
                      onClick={() => setAppointmentView('monthly')}
                      className={`px-3 py-1 text-[11px] font-semibold rounded-full transition-all cursor-pointer border-0 ${
                        appointmentView === 'monthly'
                          ? 'bg-white text-zinc-900 shadow-sm'
                          : 'text-zinc-300 hover:text-white bg-transparent'
                      }`}
                    >
                      {language === 'ar' ? 'العرض الشهري' : 'Monthly View'}
                    </button>
                  </div>
                )}

                {/* Swappable toggle pills for Digital Prescriptions */}
                {item.isSwappable && item.swappableType === 'prescription' && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-zinc-900/80 backdrop-blur-md p-1 rounded-full flex gap-1 shadow-lg z-10 border border-white/10">
                    <button
                      onClick={() => setPrescriptionView('digital')}
                      className={`px-3 py-1 text-[11px] font-semibold rounded-full transition-all cursor-pointer border-0 ${
                        prescriptionView === 'digital'
                          ? 'bg-white text-zinc-900 shadow-sm'
                          : 'text-zinc-300 hover:text-white bg-transparent'
                      }`}
                    >
                      {language === 'ar' ? 'الشاشة الرقمية' : 'Digital View'}
                    </button>
                    <button
                      onClick={() => setPrescriptionView('print')}
                      className={`px-3 py-1 text-[11px] font-semibold rounded-full transition-all cursor-pointer border-0 ${
                        prescriptionView === 'print'
                          ? 'bg-white text-zinc-900 shadow-sm'
                          : 'text-zinc-300 hover:text-white bg-transparent'
                      }`}
                    >
                      {language === 'ar' ? 'النسخة المطبوعة' : 'Print View'}
                    </button>
                  </div>
                )}
              </div>
              <div className="px-2">
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
