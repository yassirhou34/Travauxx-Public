"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const HOVER_DELAY_MS = 80;

interface FeatureItem {
  title: string;
  desc: string;
  icon?: () => React.ReactNode;
  img?: string;
}

interface ElasticGridProps {
  features?: FeatureItem[];
  backgroundColor?: string;
}

const ElasticGrid: React.FC<ElasticGridProps> = ({
  features = [
    { title: "Global Edge", desc: "Latency is a choice. We chose zero.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" },
    { title: "Neural Engine", desc: "Predictive scaling before the spike hits.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" },
    { title: "Vault Security", desc: "Encryption that physics can't break.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" },
    { title: "Fluid Workflow", desc: "Design to production in one breath.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" },
  ],
  backgroundColor = "#f5f5f5",
}) => {
  const [active, setActive] = useState(0);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleHover = (i: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setActive(i), HOVER_DELAY_MS);
  };

  const handleHoverCancel = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-12" style={{ backgroundColor }}>
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl h-[600px]">
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              layout
              onClick={() => { handleHoverCancel(); setActive(i); }}
              onHoverStart={() => handleHover(i)}
              onHoverEnd={handleHoverCancel}
              className={cn(
                "relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                active === i ? "flex-[10]" : "flex-[1] bg-white hover:bg-neutral-200"
              )}
            >
              {/* Background Image (Active Only) */}
              <motion.div
                className="absolute inset-0 bg-black"
                initial={false}
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {item.img && <img src={item.img} className="w-full h-full object-cover opacity-60" alt="" />}
              </motion.div>

              {/* Vertical Label (Inactive) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={false}
                animate={{ opacity: active === i ? 0 : 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <h3 className="transform -rotate-90 text-xl font-bold text-neutral-400 whitespace-nowrap uppercase tracking-widest">{item.title}</h3>
              </motion.div>

              {/* Expanded Content */}
              <motion.div
                className="relative h-full flex flex-col justify-end p-8 md:p-12 pointer-events-none"
                initial={false}
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: active === i ? 0.05 : 0 }}
              >
                {Icon && (
                  <div className="bg-white/10 backdrop-blur-md w-fit p-4 rounded-2xl mb-6 text-white border border-white/20">
                    <Icon />
                  </div>
                )}
                <motion.h2 layout="position" className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </motion.h2>
                <motion.p layout="position" className="text-lg text-white/80 max-w-lg">
                  {item.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ElasticGrid;
