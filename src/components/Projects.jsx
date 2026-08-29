import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Terminal, 
  Play, 
  Radio
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';
import Badge from './ui/Badge';

// 8 Streamlined Projects Data Definition
const projectsData = [
  {
    id: 'eunoia',
    title: 'Eunoia',
    category: 'web',
    spotlightColor: 'rgba(0, 229, 255, 0.14)',
    badges: [
      { label: 'Web Audio API', variant: 'cyan' },
      { label: 'Mental Wellness', variant: 'indigo' }
    ],
    description: 'Interactive wellness app synthesizing harmonic frequencies and binaural soundscapes for relaxation and focus.',
    tech: ['JavaScript', 'Web Audio API', 'CSS3', 'Vercel'],
    images: [
      '/eunoia_1.png',
      '/eunoia_2.png',
      '/eunoia_3.png',
      '/eunoia_4.png',
      '/eunoia_5.png'
    ],
    links: [
      { label: 'Launch App', url: 'https://eunoia-companion.vercel.app/', icon: ExternalLink, primary: true },
      { label: 'Source Code', url: 'https://github.com/PrajaktaSarkhel/Eunoia', icon: Github }
    ]
  },
  {
    id: 'posturepro',
    title: 'PosturePro',
    category: 'iot',
    spotlightColor: 'rgba(16, 185, 129, 0.14)',
    badges: [
      { label: 'IoT Hardware', variant: 'emerald' },
      { label: 'TSEC @ IIM-C', variant: 'amber' }
    ],
    description: 'IoT smart wearable actively monitoring spinal curvature with low-latency BLE haptic telemetry.',
    tech: ['IoT', 'BLE', 'Arduino', 'Python'],
    images: [
      '/posturepro_1.png',
      '/posturepro_2.png'
    ],
    links: [
      { label: 'View Report (PDF)', url: '/PosturePro.pdf', icon: FileText, primary: true }
    ]
  },
  {
    id: 'alpha-car',
    title: 'Alpha Car Showcase',
    category: '3d',
    spotlightColor: 'rgba(56, 189, 248, 0.14)',
    badges: [
      { label: '3D WebGL', variant: 'cyan' },
      { label: 'Three.js', variant: 'indigo' }
    ],
    description: 'Interactive 3D automotive showcase featuring 360° orbital inspection, custom shaders, and dynamic lighting.',
    tech: ['Three.js', 'React', 'WebGL', 'Tailwind'],
    images: [
      '/alpha_car_1.png',
      '/alpha_car_2.png'
    ],
    videoUrl: '/alpha_car_video.mp4',
    links: [
      { label: 'Live Showcase', url: 'https://alpha-car-showcase.vercel.app/', icon: ExternalLink, primary: true },
      { label: 'Source Code', url: 'https://github.com/PrajaktaSarkhel/alpha-car-showcase', icon: Github }
    ]
  },
  {
    id: 'orbit',
    title: 'Orbit Social',
    category: 'web',
    spotlightColor: 'rgba(139, 92, 246, 0.14)',
    badges: [
      { label: 'Full-Stack Web', variant: 'indigo' },
      { label: 'Social Network', variant: 'cyan' }
    ],
    description: 'Modern social networking platform with real-time timelines, multimedia posts, and community engagement.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    images: [
      '/orbit_1.png',
      '/orbit_2.png',
      '/orbit_3.png',
      '/orbit_4.png'
    ],
    links: [
      { label: 'Live Demo', url: 'https://orbit-social-app-8ebu.vercel.app/', icon: ExternalLink, primary: true },
      { label: 'Source Code', url: 'https://github.com/PrajaktaSarkhel/orbit_social_app', icon: Github }
    ]
  },
  {
    id: 'lumina-finance',
    title: 'Lumina Finance',
    category: 'web',
    spotlightColor: 'rgba(16, 185, 129, 0.14)',
    badges: [
      { label: 'FinTech', variant: 'emerald' },
      { label: 'Dashboard UI', variant: 'cyan' }
    ],
    description: 'Wealth management dashboard with real-time portfolio metrics, cash flow charts, and spending breakdown.',
    tech: ['React', 'Data Viz', 'Tailwind CSS', 'Vercel'],
    images: [
      '/lumina_1.png'
    ],
    links: [
      { label: 'Live Demo', url: 'https://lumina-finance-flax.vercel.app/', icon: ExternalLink, primary: true },
      { label: 'Source Code', url: 'https://github.com/PrajaktaSarkhel/lumina-finance', icon: Github }
    ]
  },
  {
    id: 'biblios',
    title: 'Biblios',
    category: 'ai-algo',
    spotlightColor: 'rgba(244, 63, 94, 0.14)',
    badges: [
      { label: 'Insight App', variant: 'coral' },
      { label: 'Complete', variant: 'amber' }
    ],
    description: 'Intelligent book insight platform extracting structured takeaways, chapter summaries, and core themes.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'UI/UX'],
    images: [
      '/biblios_1.png',
      '/biblios_2.png',
      '/biblios_3.png',
      '/biblios_4.png'
    ],
    links: [
      { label: 'Source Code', url: 'https://github.com/PrajaktaSarkhel/book-insight-app', icon: Github, primary: true }
    ]
  },
  {
    id: 'sneaker-studio',
    title: 'Sneaker Studio',
    category: '3d',
    spotlightColor: 'rgba(245, 158, 11, 0.14)',
    badges: [
      { label: '3D Customizer', variant: 'amber' },
      { label: 'WebGL Canvas', variant: 'indigo' }
    ],
    description: 'Interactive 3D sneaker design studio enabling real-time colorway, texture, and material personalization.',
    tech: ['Three.js', 'React', 'WebGL', 'Tailwind'],
    images: [
      '/sneaker_studio_1.png',
      '/sneaker_studio_2.png',
      '/sneaker_studio_3.png'
    ],
    links: [
      { label: 'Live Studio', url: 'https://sneaker-studio-one.vercel.app/', icon: ExternalLink, primary: true },
      { label: 'Source Code', url: 'https://github.com/PrajaktaSarkhel/sneaker-studio', icon: Github }
    ]
  },
  {
    id: 'binance-bot',
    title: 'Binance Algo Bot',
    category: 'ai-algo',
    spotlightColor: 'rgba(245, 158, 11, 0.14)',
    badges: [
      { label: 'Algo Trading', variant: 'amber' },
      { label: 'Python / API', variant: 'cyan' }
    ],
    description: 'Automated crypto trading engine with quantitative strategy execution, RSI/MACD triggers, and risk guardrails.',
    tech: ['Python', 'Binance API', 'WebSockets', 'CLI'],
    isTerminal: true,
    links: [
      { label: 'Source Code', url: 'https://github.com/PrajaktaSarkhel/binance_bot', icon: Github, primary: true }
    ]
  }
];

// Interactive High-Tech Terminal Visualizer for Binance Bot
function BinanceTerminalPreview() {
  const [tickerPrice, setTickerPrice] = useState('87,420.50');
  const [logs, setLogs] = useState([
    { time: '14:22:01', msg: 'CONNECTED -> wss://stream.binance.com', type: 'info' },
    { time: '14:22:04', msg: 'BTC/USDT RSI(14): 32.4 [OVERSOLD]', type: 'warn' },
    { time: '14:22:08', msg: 'STRATEGY: MACD Bullish Cross Detected', type: 'success' },
    { time: '14:22:12', msg: 'ORDER: BUY 0.05 BTC @ $87,418.00', type: 'trade' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const base = 87420;
      const delta = (Math.random() * 30 - 14).toFixed(2);
      const newPrice = (base + parseFloat(delta)).toLocaleString('en-US', { minimumFractionDigits: 2 });
      setTickerPrice(newPrice);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#080B12] rounded-2xl border border-amber-500/20 p-3 sm:p-3.5 font-mono text-[10px] sm:text-[11px] flex flex-col justify-between overflow-hidden shadow-inner relative select-none">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-slate-400 text-[10px] font-semibold ml-1 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-amber-400" /> binance_bot.py
          </span>
        </div>
        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px]">
          <Radio className="w-2 h-2 animate-pulse" /> LIVE
        </div>
      </div>

      {/* Live Market Bar */}
      <div className="my-1.5 grid grid-cols-2 gap-1 bg-white/[0.03] p-1.5 rounded-lg border border-white/5 text-[10px]">
        <div>
          <span className="text-slate-500 text-[8px] block">PAIR</span>
          <span className="text-amber-300 font-bold">BTC / USDT</span>
        </div>
        <div className="text-right">
          <span className="text-slate-500 text-[8px] block">LAST PRICE</span>
          <span className="text-emerald-400 font-bold">${tickerPrice}</span>
        </div>
      </div>

      {/* Terminal Output Stream */}
      <div className="space-y-1 text-[9px] sm:text-[10px] leading-tight flex-1 flex flex-col justify-end">
        {logs.map((log, i) => (
          <div key={i} className="flex items-start gap-1 text-slate-300 truncate">
            <span className="text-slate-500">[{log.time}]</span>
            <span className={
              log.type === 'trade' ? 'text-emerald-400 font-semibold' :
              log.type === 'warn' ? 'text-amber-400' :
              log.type === 'success' ? 'text-cyan-400' : 'text-slate-400'
            }>
              {log.msg}
            </span>
          </div>
        ))}
      </div>

      {/* Terminal prompt footer */}
      <div className="mt-1.5 pt-1.5 border-t border-white/10 flex items-center justify-between text-[9px] text-slate-400">
        <span className="text-cyan-400">rsi_macd_v2</span>
        <span className="text-emerald-400 flex items-center gap-1 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
          ACTIVE
        </span>
      </div>
    </div>
  );
}

// Clean Minimal Vertical Project Card Component
function ProjectCard({ project }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const hasImages = project.images && project.images.length > 0;
  const showVideo = project.videoUrl && !videoFailed;

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasImages) {
      setImgIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasImages) {
      setImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <SpotlightCard 
      className="flex flex-col h-full overflow-hidden border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-[#0F131E]/80 backdrop-blur-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group"
      spotlightColor={project.spotlightColor || 'rgba(0, 229, 255, 0.12)'}
    >
      {/* Media Preview Container */}
      <div className="relative w-full aspect-[16/10] bg-slate-100 dark:bg-[#080B12] overflow-hidden border-b border-slate-200 dark:border-white/10">
        
        {/* Scenario 1: Binance Bot Terminal Visual */}
        {project.isTerminal ? (
          <div className="p-2.5 w-full h-full">
            <BinanceTerminalPreview />
          </div>
        ) : showVideo ? (
          /* Scenario 2: Video Player (e.g. for Alpha Car Showcase) */
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            <video
              src={project.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onError={() => setVideoFailed(true)}
            />
            <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
              <Play className="w-2.5 h-2.5 fill-cyan-300" /> 3D Preview
            </div>
          </div>
        ) : hasImages ? (
          /* Scenario 3: Image Carousel */
          <div className="relative w-full h-full group/carousel">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.title} Preview ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
                  idx === imgIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ))}

            {/* Left & Right Controls for Multiple Images */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Previous slide"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 hover:scale-110 active:scale-95 shadow-md z-10"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next slide"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 hover:scale-110 active:scale-95 shadow-md z-10"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setImgIndex(idx);
                      }}
                      aria-label={`Slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === imgIndex ? 'w-3.5 bg-cyan-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 font-mono text-xs">
            Preview Coming Soon
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2.5">
          {/* Badge Row */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {project.badges?.map((badge, idx) => (
              <Badge key={idx} variant={badge.variant}>
                {badge.label}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          {/* Clean 1-2 sentence description */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Compact Tech Stack Pills (Single clean row) */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((t) => (
              <span 
                key={t}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center gap-2">
          {project.links?.map((link, idx) => {
            const Icon = link.icon;
            const isPrimary = link.primary;
            return (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                  isPrimary
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-glow-cyan'
                    : 'bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'web', label: 'Full-Stack & Web', count: projectsData.filter(p => p.category === 'web').length },
    { id: '3d', label: '3D & Interactive', count: projectsData.filter(p => p.category === '3d').length },
    { id: 'iot', label: 'IoT & Systems', count: projectsData.filter(p => p.category === 'iot').length },
    { id: 'ai-algo', label: 'AI & Algo Trading', count: projectsData.filter(p => p.category === 'ai-algo').length },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full" />

      {/* Header */}
      <SectionHeading
        badge="Featured Engineering"
        title="Impact-Driven"
        highlight="Projects"
        subtitle="Full-stack web applications, 3D graphics, IoT prototypes, and algorithmic trading systems."
      />

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 border ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-glow-cyan scale-105 font-bold'
                  : 'bg-white/80 dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/5'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.2 text-[10px] rounded-full ${
                isActive ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Vertical Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Bottom GitHub Archive Banner */}
      <div className="mt-14 text-center">
        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
          Looking for experimental scripts, hackathons, and open-source contributions?
        </p>
        <a
          href="https://github.com/PrajaktaSarkhel?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/60 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 transition-all hover:scale-105"
        >
          <Github className="w-3.5 h-3.5 text-cyan-500" />
          <span>Explore All Repositories on GitHub</span>
        </a>
      </div>
    </section>
  );
}
