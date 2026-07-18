import { localTranslations } from '../translations';

interface SpecsAccordionProps {
  language: 'en' | 'ar';
}

export default function SpecsAccordion({ language }: SpecsAccordionProps) {
  const m = localTranslations[language];

  return (
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
  );
}
