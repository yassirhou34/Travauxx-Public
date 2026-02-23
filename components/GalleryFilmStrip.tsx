"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface GalleryFilmStripProps {
  images?: string[];
  backgroundColor?: string;
  borderColor?: string;
}

const GalleryFilmStrip: React.FC<GalleryFilmStripProps> = ({
  images = [
    "/Banqueimages/M7_01325.jpg",
    "/Banqueimages/M7_01321.jpg",
    "/Banqueimages/M7_01323.jpg",
    "/Banqueimages/M7_01330.jpg",
    "/Banqueimages/DSC09109.jpg",
  ],
  backgroundColor = "#111",
  borderColor = "#222",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <div
      ref={sectionRef}
      className="overflow-hidden relative flex flex-col justify-center gap-8 min-h-0"
      style={{ backgroundColor, height: "100vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center gap-10">
        {/* Strip 1 */}
        <div
          className="w-full -rotate-3 bg-black py-4 shadow-2xl"
          style={{
            borderTop: `8px solid ${borderColor}`,
            borderBottom: `8px solid ${borderColor}`,
          }}
        >
          <motion.div
            style={{ x: x1 }}
            className="flex gap-8 w-[200vw] will-change-transform"
          >
            {[...images, ...images].map((src, i) => (
              <div
                key={`s1-${i}`}
                className="w-96 aspect-square bg-neutral-800 rounded-sm relative shrink-0"
              >
                <img
                  src={src}
                  className="w-full h-full object-cover opacity-80"
                  alt=""
                  loading={i < 4 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />

                <div className="absolute -top-6 left-0 w-full h-4 bg-transparent flex justify-between px-2 pointer-events-none">
                  {Array(10)
                    .fill(0)
                    .map((_, j) => (
                      <div
                        key={j}
                        className="w-2 h-3 bg-white/20 rounded-sm"
                      />
                    ))}
                </div>
                <div className="absolute -bottom-6 left-0 w-full h-4 bg-transparent flex justify-between px-2 pointer-events-none">
                  {Array(10)
                    .fill(0)
                    .map((_, j) => (
                      <div
                        key={j}
                        className="w-2 h-3 bg-white/20 rounded-sm"
                      />
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Strip 2 */}
        <div
          className="w-full rotate-3 bg-black py-4 shadow-2xl z-10"
          style={{
            borderTop: `8px solid ${borderColor}`,
            borderBottom: `8px solid ${borderColor}`,
          }}
        >
          <motion.div
            style={{ x: x2 }}
            className="flex gap-8 w-[200vw] ml-[-50vw] will-change-transform"
          >
            {[...images, ...images]
              .reverse()
              .map((src, i) => (
                <div
                  key={`s2-${i}`}
                  className="w-96 aspect-square bg-neutral-800 rounded-sm relative shrink-0"
                >
                  <img
                    src={src}
                    className="w-full h-full object-cover opacity-80"
                    alt=""
                    loading={i < 4 ? "eager" : "lazy"}
                  />
                  <div className="absolute -top-6 left-0 w-full h-4 bg-transparent flex justify-between px-2 pointer-events-none">
                    {Array(10)
                      .fill(0)
                      .map((_, j) => (
                        <div
                          key={j}
                          className="w-2 h-3 bg-white/20 rounded-sm"
                        />
                      ))}
                  </div>
                  <div className="absolute -bottom-6 left-0 w-full h-4 bg-transparent flex justify-between px-2 pointer-events-none">
                    {Array(10)
                      .fill(0)
                      .map((_, j) => (
                        <div
                          key={j}
                          className="w-2 h-3 bg-white/20 rounded-sm"
                        />
                      ))}
                  </div>
                </div>
              ))}
          </motion.div>
        </div>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black" />
      </div>
    </div>
  );
};

export default GalleryFilmStrip;
