"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContentItem {
  type: "img" | "text";
  src?: string;
  title?: string;
  text?: string;
  span?: string;
}

interface AgencyGridProps {
  images?: string[];
  content?: ContentItem[];
  backgroundColor?: string;
  projectPrefix?: string;
}

const EXTENSION_IMAGES = [
  "/Banqueimages/DJI_0081.jpg",
  "/Banqueimages/DJI_0087.jpg",
  "/Banqueimages/DSC09109.jpg",
  "/Banqueimages/IMG_1718.JPG",
  "/Banqueimages/IMG_0482.jpg",
];

const defaultContent: ContentItem[] = [
  { type: "img", src: EXTENSION_IMAGES[0], span: "col-span-1 row-span-1" },
  { type: "text", title: "EXTENSION", text: "Un investissement pour votre patrimoine.", span: "col-span-1 row-span-1" },
  { type: "img", src: EXTENSION_IMAGES[1], span: "col-span-1 row-span-2" },
  { type: "img", src: EXTENSION_IMAGES[2], span: "col-span-2 row-span-1" },
  { type: "text", title: "PATRIMOINE", text: "Valorisez votre bien.", span: "col-span-1 row-span-1" },
  { type: "img", src: EXTENSION_IMAGES[3], span: "col-span-1 row-span-1" },
  { type: "img", src: EXTENSION_IMAGES[4], span: "col-span-1 row-span-1" },
];

const AgencyGrid: React.FC<AgencyGridProps> = ({
  images = EXTENSION_IMAGES,
  content,
  backgroundColor = "#050308",
  projectPrefix = "Projet",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const items = content ?? defaultContent;

  return (
    <div ref={containerRef} className="min-h-[80vh] p-4 md:p-8 lg:p-12" style={{ backgroundColor }}>
      <div className="grid grid-cols-12 gap-y-24 gap-x-8">
        {items.map((item, i) => {
          const colStart = (i % 2) === 0 ? "col-start-1 md:col-start-2" : "col-start-2 md:col-start-7";
          const colSpan = (i % 3) === 0 ? "col-span-12 md:col-span-6" : "col-span-11 md:col-span-5";
          const height = (i % 2) === 0 ? "h-[60vh]" : "h-[40vh]";

          return (
            <div key={i} className={cn("relative", colStart, colSpan, height)}>
              <div className="absolute -left-8 top-0 h-full w-[1px] bg-white/20 overflow-hidden">
                <motion.div
                  className="w-full bg-white"
                  initial={{ height: "0%" }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>

              <div className="w-full h-full overflow-hidden relative group">
                <motion.div style={{ y: i % 2 === 0 ? y : 0 }} className="w-full h-[120%] -mt-[10%]">
                  {item.type === "img" && item.src ? (
                    <img
                      src={item.src}
                      className="w-full h-full object-cover filter saturate-0 group-hover:saturate-100 transition-all duration-700 opacity-80 group-hover:opacity-100"
                      alt=""
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-900 border border-neutral-800 p-6 md:p-8">
                      <h2
                        className="font-thin text-white tracking-tighter opacity-50 text-center w-full max-w-full"
                        style={{ fontSize: "clamp(1.5rem, 4vw, 4rem)" }}
                      >
                        {item.title}
                      </h2>
                    </div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                  className="absolute inset-0 origin-bottom z-20"
                  style={{ backgroundColor }}
                />

                <div className="absolute bottom-4 left-4 z-30 mix-blend-difference text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs tracking-widest uppercase">
                    {projectPrefix} {String(i + 1).padStart(3, "0")}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgencyGrid;
