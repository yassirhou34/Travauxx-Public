"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Heart, Download } from "lucide-react";

interface LightboxGlassProps {
  image?: string;
  thumbnailImage?: string;
  backgroundColor?: string;
  title?: string;
  subtitle?: string;
  showLike?: boolean;
  showDownload?: boolean;
  embedded?: boolean;
  children?: React.ReactNode;
}

const useScrollLock = (isOpen: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
};

const LightboxGlass: React.FC<LightboxGlassProps> = ({
  image = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2700&auto=format&fit=crop",
  thumbnailImage,
  backgroundColor = "linear-gradient(to bottom right, #312e81, #581c87)",
  title = "Neon Nights",
  subtitle = "Tokyo, Japan",
  showLike = true,
  showDownload = true,
  embedded = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  useScrollLock(isOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setImageLoaded(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [isOpen, close]);

  useEffect(() => {
    if (isOpen && image) setImageLoaded(false);
  }, [isOpen, image]);

  const displayImage = thumbnailImage || image;

  const lightboxContent = (
    <AnimatePresence onExitComplete={() => setImageLoaded(false)}>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/80 cursor-pointer"
            onClick={close}
            onKeyDown={(e) => e.key === "Enter" && close()}
            role="button"
            tabIndex={0}
            aria-label="Fermer"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-[101] w-full max-w-5xl pointer-events-none"
            style={{ pointerEvents: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative rounded-3xl overflow-hidden bg-black/40"
              style={{ boxShadow: "0 0 80px rgba(0,0,0,0.5)" }}
            >
              <div className="relative min-h-[50vh] flex items-center justify-center">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </div>
                )}
                <img
                  src={image}
                  alt=""
                  className="w-full max-h-[80vh] object-cover"
                  onLoad={() => setImageLoaded(true)}
                  style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.2s" }}
                />
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center justify-between shadow-lg text-white"
              >
                <div>
                  <h4 className="font-medium">{title}</h4>
                  <p className="text-xs text-white/60">{subtitle}</p>
                </div>
                <div className="flex gap-2">
                  {showLike && (
                    <button type="button" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <Heart size={18} />
                    </button>
                  )}
                  {showDownload && (
                    <button type="button" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <Download size={18} />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={close}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors cursor-pointer"
                    aria-label="Fermer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div
        className={embedded ? "h-full" : "h-screen flex items-center justify-center"}
        style={embedded ? undefined : { background: backgroundColor }}
      >
        {embedded && children ? (
          <div
            onClick={() => setIsOpen(true)}
            className="relative w-full h-full cursor-pointer block group"
          >
            {children}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Maximize2 size={20} />
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => setIsOpen(true)}
            className="relative w-64 h-64 rounded-2xl overflow-hidden cursor-pointer border border-white/20 hover:scale-105 transition-transform duration-500 shadow-2xl"
          >
            <img src={displayImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Maximize2 size={20} />
              </div>
            </div>
          </div>
        )}
      </div>

      {mounted && typeof document !== "undefined" && createPortal(lightboxContent, document.body)}
    </>
  );
};

export default LightboxGlass;
