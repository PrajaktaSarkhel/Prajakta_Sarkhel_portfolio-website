import React, { useState } from 'react';
import { Palette, Award, Sparkles, Eye, X, ZoomIn } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';
import Badge from './ui/Badge';

export default function ArtGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const artWorks = [
    {
      title: 'Monochrome Anatomy & Expression',
      medium: 'Graphite & Charcoal on Paper',
      image: '/drawing.png',
      description: 'Handmade fine art study exploring human anatomy, high-contrast light gradients, and expressive emotion.'
    }
  ];

  return (
    <section id="art" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      <SectionHeading
        badge="Creative Dimension"
        title="Fine Arts &"
        highlight="Design Engineering"
        subtitle="How traditional studio art training cultivates focus, spatial awareness, and design sensitivity in software."
      />

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Story Column (Span 6) */}
        <div className="lg:col-span-6 space-y-6">
          <SpotlightCard className="p-8" spotlightColor="rgba(244, 63, 94, 0.12)">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                  Fine Arts Academic Path
                </h3>
                <p className="text-xs font-mono text-rose-400">
                  Rabindra Bharati University Affiliation
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Currently completing my <span className="font-semibold text-slate-900 dark:text-white">Bachelor's in Fine Arts (BFA)</span> from Bangiya Sangeet Parishad (Graduating April 2026), following a Diploma in Fine Arts awarded in 2019.
            </p>

            <div className="mt-6 pt-6 border-t border-white/10 dark:border-white/10 border-slate-200 flex items-center gap-4">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Credential</p>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">Diploma in Fine Arts (2019) · BFA (2026)</p>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-8" spotlightColor="rgba(245, 158, 11, 0.12)">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Why Art + Engineering?
              </h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Handmade art requires hours of patient, millimeter-precise brushwork. That same discipline translates directly to writing clean code, paying attention to edge cases, and crafting frictionless UI/UX architectures.
            </p>
          </SpotlightCard>
        </div>

        {/* Right Artwork Showcase Column (Span 6) */}
        <div className="lg:col-span-6">
          {artWorks.map((art, idx) => (
            <SpotlightCard 
              key={idx}
              className="p-6 overflow-hidden group cursor-pointer"
              spotlightColor="rgba(244, 63, 94, 0.15)"
              onClick={() => setSelectedImage(art.image)}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                
                {/* Hover overlay button */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-xl bg-white/20 text-white font-mono text-xs flex items-center gap-2 border border-white/30 shadow-2xl">
                    <ZoomIn className="w-4 h-4" />
                    <span>Click to Expand Artwork</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-display font-bold text-slate-900 dark:text-white">
                    {art.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {art.medium}
                  </p>
                </div>
                <Badge variant="coral">Handmade</Badge>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close image modal"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Artwork Fullscreen"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
