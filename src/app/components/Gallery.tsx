import { useState } from 'react';
import Image from 'next/image';
import { getAssetPath } from '../utils/assets';
import { localTranslations } from '../translations';
import { CLINIC_IMAGES } from '../config/images';
import ImageModal, { ModalImage } from './ImageModal';

interface GalleryProps {
  language: 'en' | 'ar';
  scrollToSection: (id: string) => void;
}

export default function Gallery({ language, scrollToSection }: GalleryProps) {
  const m = localTranslations[language];
  const [appointmentView, setAppointmentView] = useState<'weekly' | 'monthly'>('weekly');
  const [prescriptionView, setPrescriptionView] = useState<'digital' | 'print'>('digital');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

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

  const modalImages: ModalImage[] = galleryItems.map((item, idx) => ({
    src: getAssetPath(getScreenImageSrc(idx)),
    alt: item.alt,
    title: item.title,
    desc: item.desc,
  }));

  const openImageModal = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

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
              
              {/* Image Box with Click-to-Enlarge Action */}
              <div
                onClick={() => openImageModal(index)}
                className="relative h-[220px] sm:h-[320px] w-full rounded-2xl overflow-hidden border border-zinc-100 group cursor-zoom-in"
              >
                <Image
                  src={getAssetPath(getScreenImageSrc(index))}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="object-cover object-top transition-all duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay with Expand Badge */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="bg-zinc-900/90 text-white backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium shadow-lg flex items-center gap-2 border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <span>{language === 'ar' ? 'عرض التكبير' : 'Click to Enlarge'}</span>
                  </div>
                </div>

                {/* Swappable toggle pills for Appointment Management */}
                {item.isSwappable && item.swappableType === 'appointment' && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-zinc-900/80 backdrop-blur-md p-1 rounded-full flex gap-1 shadow-lg z-10 border border-white/10"
                  >
                    <button
                      onClick={() => setAppointmentView('weekly')}
                      className={`px-3 py-1 text-[11px] font-semibold rounded-full transition-all cursor-pointer border-0 ${
                        appointmentView === 'weekly'
                          ? 'bg-white text-zinc-900 shadow-sm'
                          : 'text-zinc-300 hover:text-white bg-transparent'
                      }`}
                    >
                      {language === 'ar' ? 'الأسبوعي' : 'Weekly View'}
                    </button>
                    <button
                      onClick={() => setAppointmentView('monthly')}
                      className={`px-3 py-1 text-[11px] font-semibold rounded-full transition-all cursor-pointer border-0 ${
                        appointmentView === 'monthly'
                          ? 'bg-white text-zinc-900 shadow-sm'
                          : 'text-zinc-300 hover:text-white bg-transparent'
                      }`}
                    >
                      {language === 'ar' ? 'الشهري' : 'Monthly View'}
                    </button>
                  </div>
                )}

                {/* Swappable toggle pills for Digital Prescriptions */}
                {item.isSwappable && item.swappableType === 'prescription' && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-zinc-900/80 backdrop-blur-md p-1 rounded-full flex gap-1 shadow-lg z-10 border border-white/10"
                  >
                    <button
                      onClick={() => setPrescriptionView('digital')}
                      className={`px-3 py-1 text-[11px] font-semibold rounded-full transition-all cursor-pointer border-0 ${
                        prescriptionView === 'digital'
                          ? 'bg-white text-zinc-900 shadow-sm'
                          : 'text-zinc-300 hover:text-white bg-transparent'
                      }`}
                    >
                      {language === 'ar' ? 'الرقمية' : 'Digital View'}
                    </button>
                    <button
                      onClick={() => setPrescriptionView('print')}
                      className={`px-3 py-1 text-[11px] font-semibold rounded-full transition-all cursor-pointer border-0 ${
                        prescriptionView === 'print'
                          ? 'bg-white text-zinc-900 shadow-sm'
                          : 'text-zinc-300 hover:text-white bg-transparent'
                      }`}
                    >
                      {language === 'ar' ? 'المطبوعة' : 'Print View'}
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

      {/* Lightbox Image Modal */}
      <ImageModal
        images={modalImages}
        currentIndex={modalIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNavigate={(newIdx) => setModalIndex(newIdx)}
        language={language}
      />
    </section>
  );
}
