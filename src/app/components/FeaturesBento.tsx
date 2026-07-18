import { localTranslations } from '../translations';

interface FeaturesBentoProps {
  language: 'en' | 'ar';
}

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

export default function FeaturesBento({ language }: FeaturesBentoProps) {
  const m = localTranslations[language];

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
  );
}
