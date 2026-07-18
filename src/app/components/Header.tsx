import Image from 'next/image';
import { getAssetPath } from '../utils/assets';
import { localTranslations } from '../translations';

interface HeaderProps {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  scrollToSection: (id: string) => void;
}

export default function Header({ language, toggleLanguage, scrollToSection }: HeaderProps) {
  const m = localTranslations[language];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-zinc-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold text-zinc-500">
          <button onClick={() => scrollToSection('gallery')} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-0 font-semibold">{m.navGallery}</button>
          <button onClick={() => scrollToSection('latency')} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-0 font-semibold">{m.navLatency}</button>
          <button onClick={() => scrollToSection('features')} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-0 font-semibold">{m.navFeatures}</button>
          <button onClick={() => scrollToSection('specs')} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-0 font-semibold">{m.navSpecs}</button>
          <button onClick={() => scrollToSection('demo')} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-0 font-semibold">{m.navDemo}</button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-zinc-200 hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 transition-all cursor-pointer bg-transparent"
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </button>

          {/* Primary Action */}
          <button
            onClick={() => scrollToSection('demo')}
            className="bg-zinc-900 hover:bg-black text-white text-[10px] sm:text-xs font-semibold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full transition-all shadow-sm flex items-center gap-1 cursor-pointer border-0"
          >
            {m.navDemo}
          </button>
        </div>
      </div>
    </header>
  );
}
