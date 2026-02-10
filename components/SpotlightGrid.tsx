'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface FeatureItem {
    title: string;
    desc?: string;
    img?: string;
}

interface SpotlightGridProps {
    features?: FeatureItem[];
    backgroundColor?: string;
    hoverGradientFrom?: string;
    hoverGradientTo?: string;
}

const SpotlightRow = ({ item, index }: { item: FeatureItem; index: number; hoverGradientFrom?: string; hoverGradientTo?: string }) => {
    return (
        <div className="relative border-t border-white/15 py-6 sm:py-8 md:py-10 lg:py-12 group cursor-pointer overflow-hidden transition-colors">
            <div className="flex items-center justify-between relative z-20 px-3 sm:px-4 md:px-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                <span className="text-white/60 font-mono text-xs sm:text-sm md:text-base min-w-[40px] sm:min-w-[50px] md:min-w-[60px]">0{index + 1}</span>

                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-light text-white group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2 sm:group-hover:translate-x-3 md:group-hover:translate-x-5 flex-1">
                    {item.title}
                </h2>

                <div className="hidden md:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white text-white opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </div>
            </div>

            {item.img && (
                <div className="absolute top-1/2 left-1/2 w-[300px] h-[200px] sm:w-[400px] sm:h-[280px] md:w-[500px] md:h-[350px] pointer-events-none z-10 rounded-xl overflow-hidden filter brightness-90 contrast-110 opacity-0 scale-90 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out">
                    <img src={item.img} className="w-full h-full object-cover" alt={item.title} loading="lazy" />
                </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
        </div>
    );
};

const SpotlightGrid: React.FC<SpotlightGridProps> = ({
    features = [
        { title: "Global Edge", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" },
        { title: "Neural Engine", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" },
        { title: "Vault Security", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" },
        { title: "Fluid Workflow", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" },
    ],
    backgroundColor = "transparent",
    hoverGradientFrom = "purple-900",
    hoverGradientTo = "blue-900",
}) => {
    return (
        <div
            className="w-full rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5/0 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur-md overflow-hidden"
            style={{ backgroundColor }}
        >
            <div className="w-full">
                {features.map((item, i) => (
                    <SpotlightRow key={i} item={item} index={i} hoverGradientFrom={hoverGradientFrom} hoverGradientTo={hoverGradientTo} />
                ))}
            </div>
        </div>
    );
};

export default SpotlightGrid;

