import { localTranslations } from '../translations';

interface SetupGuideProps {
  language: 'en' | 'ar';
}

export default function SetupGuide({ language }: SetupGuideProps) {
  const m = localTranslations[language];

  return (
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
  );
}
