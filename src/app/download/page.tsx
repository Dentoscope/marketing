'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '../utils/assets';
import { DOWNLOAD_CONFIG } from '../config/download';

export default function DownloadPage() {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const exeUrl = getAssetPath(DOWNLOAD_CONFIG.windowsExePath);

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-zinc-900 flex flex-col justify-between p-6">
      {/* Top Header */}
      <header className="max-w-4xl mx-auto w-full pt-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-8 h-8 rounded-lg border border-zinc-200 bg-white flex items-center justify-center p-1 shadow-sm">
            <Image
              src={getAssetPath('/logo.png')}
              alt="Dentoscope Logo"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-lg tracking-tight text-zinc-900">
            Dentoscope
          </span>
        </Link>

        <Link
          href="/"
          className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors no-underline"
        >
          ← Back to Home
        </Link>
      </header>

      {/* Center Download Card */}
      <div className="max-w-xl mx-auto w-full my-auto py-12">
        <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 sm:p-12 shadow-xl text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-zinc-900 text-white flex items-center justify-center shadow-md">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-2">
              Download Dentoscope
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed max-w-md mx-auto">
              Click the button below to download the official Windows installer (.exe) for your clinic workstation.
            </p>
          </div>

          {/* Download Button */}
          <a
            href={exeUrl}
            download={DOWNLOAD_CONFIG.windowsFileName}
            onClick={() => setDownloadStarted(true)}
            className="w-full sm:w-auto bg-zinc-900 hover:bg-black text-white font-semibold px-8 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer no-underline hover:scale-105 active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Dentoscope-Setup-3.0.0.exe
          </a>

          {/* System Requirements */}
          <div className="w-full border-t border-zinc-100 pt-6 mt-2 text-start text-xs text-zinc-500 flex justify-between items-center">
            <div>
              <span className="font-semibold text-zinc-800 block mb-0.5">
                Supported Platform
              </span>
              Windows 10 / 11 (64-bit)
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto w-full pb-6 text-center text-xs text-zinc-400">
        © 2026 Dentoscope. All rights reserved.
      </footer>
    </main>
  );
}
