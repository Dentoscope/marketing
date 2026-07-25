import { useState, useEffect } from 'react';
import { localTranslations } from '../translations';

interface LatencySimulatorProps {
  language: 'en' | 'ar';
}

export default function LatencySimulator({ language }: LatencySimulatorProps) {
  const m = localTranslations[language];
  const [mounted, setMounted] = useState(false);
  const [timeRTC, setTimeRTC] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeRTC(Date.now());
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="latency" className="py-24 border-t border-zinc-100 bg-[#f5f5f7] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Descriptions */}
          <div className="reveal">
            <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3 block">
              {language === 'ar' ? 'تنسيق فوري بين اليد والشاشة' : 'Precision Hand-Eye Sync'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
              {m.latencyTitle}
            </h2>
            <p className="text-zinc-500 mb-8 font-light leading-relaxed">
              {m.latencySubtitle}
            </p>
          </div>

          {/* Interactive Visualizer Panel */}
          <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 flex flex-col gap-6 shadow-lg shadow-zinc-200/40 relative overflow-hidden reveal reveal-delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-transparent pointer-events-none" />

            {/* Rotating Object to demonstrate lag */}
            <div className="flex flex-col items-center justify-center p-8 bg-zinc-50 rounded-2xl border border-zinc-100 relative">
              <div
                className="w-16 h-16 border-2 border-dashed border-zinc-300 rounded-full flex items-center justify-center transition-transform"
                style={{
                  transform: `rotate(${mounted ? (Date.now() / 10) % 360 : 45}deg)`,
                }}
              >
                <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3" />
                </svg>
              </div>
              <span className="text-xs text-zinc-400 uppercase tracking-widest mt-4 font-semibold">
                {language === 'ar' ? 'الحدث الفعلي (حركة يدك)' : 'What Actually Happens (Your Movement)'}
              </span>
            </div>

            {/* Single feed display without comparison */}
            <div className="flex justify-center w-full">

              {/* Dentoscope WebRTC Feed */}
              <div className="bg-zinc-50 border border-emerald-500/20 rounded-2xl p-6 relative flex flex-col items-center text-center max-w-sm w-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-4 right-4 animate-ping" />
                <div
                  className="w-12 h-12 border border-dashed border-emerald-500/40 rounded-full flex items-center justify-center mb-4"
                  style={{
                    transform: `rotate(${mounted ? (Date.now() / 10) % 360 : 45}deg)`,
                  }}
                >
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-zinc-800 block truncate w-full">{m.latencyRTC}</span>
                <span className="text-xs text-zinc-500 mt-1 block leading-tight font-mono">{m.latencyRTCLag}</span>

                {/* Digital Clock Display */}
                <div className="mt-4 bg-white border border-zinc-200 rounded-full px-4 py-1 text-xs font-mono text-emerald-600 font-bold">
                  {mounted ? new Date(timeRTC).toISOString().slice(17, -1) : '12:04.382'}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
