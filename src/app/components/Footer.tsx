import Image from 'next/image';
import { getAssetPath } from '../utils/assets';
import { localTranslations } from '../translations';

interface FooterProps {
  language: 'en' | 'ar';
  scrollToSection: (id: string) => void;
}

export default function Footer({ language, scrollToSection }: FooterProps) {
  const m = localTranslations[language];

  return (
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
          <button onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-0 font-semibold">
            {language === 'ar' ? 'الرجوع للأعلى ↑' : 'Back to Top ↑'}
          </button>
        </div>

        <div className="text-xs text-zinc-400 border-t border-zinc-200/80 w-full pt-8 mt-6">
          {m.footerCopyright}
        </div>
      </div>
    </footer>
  );
}
