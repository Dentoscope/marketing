'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

export interface ModalImage {
  src: string;
  alt: string;
  title: string;
  desc?: string;
}

interface ImageModalProps {
  images: ModalImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (newIndex: number) => void;
  language?: 'en' | 'ar';
}

export default function ImageModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  language = 'en',
}: ImageModalProps) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const currentImg = images[currentIndex] || images[0];

  const resetZoom = useCallback(() => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleNext = useCallback(() => {
    if (!onNavigate || images.length <= 1) return;
    resetZoom();
    const nextIdx = (currentIndex + 1) % images.length;
    onNavigate(nextIdx);
  }, [currentIndex, images.length, onNavigate, resetZoom]);

  const handlePrev = useCallback(() => {
    if (!onNavigate || images.length <= 1) return;
    resetZoom();
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prevIdx);
  }, [currentIndex, images.length, onNavigate, resetZoom]);

  // Keyboard navigation & escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        if (language === 'ar') handlePrev();
        else handleNext();
      } else if (e.key === 'ArrowLeft') {
        if (language === 'ar') handleNext();
        else handlePrev();
      } else if (e.key === '+' || e.key === '=') {
        setZoomLevel((prev) => Math.min(prev + 0.25, 3));
      } else if (e.key === '-') {
        setZoomLevel((prev) => Math.max(prev - 0.25, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handleNext, handlePrev, language]);

  if (!isOpen || !currentImg) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.33, 3));
  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.33, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col justify-between animate-fadeIn select-none overflow-hidden"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div
        className="w-full px-6 py-4 flex items-center justify-between z-20 bg-gradient-to-b from-black/60 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 text-white">
          <span className="text-sm font-semibold tracking-wide text-zinc-300">
            {currentImg.title}
          </span>
          {images.length > 1 && (
            <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full text-zinc-400 font-mono">
              {currentIndex + 1} / {images.length}
            </span>
          )}
        </div>

        {/* Action Buttons: Zoom & Close */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            disabled={zoomLevel <= 1}
            title="Zoom Out"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all border-0 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>

          <button
            onClick={resetZoom}
            title="Reset Zoom"
            className="px-3 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-semibold flex items-center justify-center transition-all border-0 cursor-pointer"
          >
            {Math.round(zoomLevel * 100)}%
          </button>

          <button
            onClick={handleZoomIn}
            disabled={zoomLevel >= 3}
            title="Zoom In"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all border-0 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>

          <div className="w-px h-5 bg-white/20 mx-1" />

          <button
            onClick={onClose}
            title="Close (Esc)"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border-0 cursor-pointer hover:rotate-90 duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        className="relative flex-1 w-full flex items-center justify-center p-4 sm:p-8 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 z-30 w-12 h-12 rounded-full bg-black/50 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10 backdrop-blur-md cursor-pointer hover:scale-110"
              title="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 z-30 w-12 h-12 rounded-full bg-black/50 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10 backdrop-blur-md cursor-pointer hover:scale-110"
              title="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Display Image with transform zoom & pan */}
        <div
          className="relative max-w-full max-h-full transition-transform duration-150 ease-out flex items-center justify-center"
          style={{
            transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
          }}
        >
          <img
            src={currentImg.src}
            alt={currentImg.alt}
            className="max-h-[82vh] max-w-[92vw] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10 pointer-events-none"
          />
        </div>
      </div>

      {/* Bottom Caption Bar */}
      {currentImg.desc && (
        <div
          className="w-full px-6 py-4 z-20 text-center bg-gradient-to-t from-black/80 to-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            {currentImg.desc}
          </p>
        </div>
      )}
    </div>
  );
}
