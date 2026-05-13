/* ============================================================================
   VIDEO GALLERY – Technical Deep-Dive Showcase
   ============================================================================
   Data is imported from `../data/projectsData.js`.
   Each card has: video player/placeholder, title, tags, and expandable
   Technical Breakdown (Challenge / Solution / Outcome).
   ============================================================================ */

import { useState } from "react";
import { Play, Layers, AlertTriangle, Lightbulb, TrendingUp, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import projectsData from "../data/projectsData";

function VideoPlayer({ videoUrl, title, forceMute }) {
  if (videoUrl) {
    const isEmbed = videoUrl.includes("youtube.com/embed") || videoUrl.includes("player.vimeo.com");
    if (isEmbed) {
      return (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-bg-primary">
          <iframe src={videoUrl} title={title} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      );
    }
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-bg-primary">
        <video src={videoUrl} controls muted={forceMute || undefined} onVolumeChange={forceMute ? (e) => { e.target.muted = true; e.target.volume = 0; } : undefined} className="w-full h-full object-cover" preload="metadata">Your browser does not support the video tag.</video>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-gradient-to-br from-bg-secondary to-bg-tertiary flex items-center justify-center group cursor-pointer">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full border-2 border-accent/30 bg-accent/10 flex items-center justify-center group-hover:border-accent/60 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
          <Play className="w-8 h-8 text-accent ml-1" />
        </div>
        <span className="text-sm text-text-tertiary font-medium">Video Coming Soon</span>
      </div>
    </div>
  );
}

function BreakdownItem({ icon: Icon, label, content, color }) {
  return (
    <div className="p-5 rounded-xl border border-border bg-bg-primary/40 hover:border-border-accent transition-colors duration-300 text-center flex flex-col items-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Icon className={`w-4 h-4 ${color}`} />
        <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">{label}</h4>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line text-center">{content}</p>
    </div>
  );
}

function VideoCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm overflow-hidden hover:border-border-accent transition-all duration-500">
      <div className="p-5 pb-0">
        <VideoPlayer videoUrl={project.videoUrl} title={project.title} forceMute={project.forceMute} />
      </div>
      <div className="p-6 text-center flex flex-col items-center">
        <h3 className="text-xl font-bold text-text-primary mb-1">{project.title}</h3>
        <p className="text-sm text-accent font-medium mb-4 text-center">{project.subtitle}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent-glow border border-accent/20 font-mono">{tag}</span>
          ))}
        </div>
        <button onClick={() => setExpanded(!expanded)} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-border bg-bg-tertiary/50 text-text-secondary hover:text-accent hover:border-border-accent transition-all duration-300 text-sm font-medium cursor-pointer">
          <Layers className="w-4 h-4" />
          {expanded ? "Hide" : "View"} Technical Breakdown
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
          <div className="space-y-4">
            <BreakdownItem icon={AlertTriangle} label="The Challenge" content={project.challenge} color="text-amber-400" />
            <BreakdownItem icon={Lightbulb} label="The Solution" content={project.solution} color="text-accent-glow" />
            <BreakdownItem icon={TrendingUp} label="The Outcome" content={project.outcome} color="text-emerald-400" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function VideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  const currentProject = projectsData[currentIndex];

  return (
    <section id="projects" className="relative pt-28 pb-32 px-6 flex flex-col items-center w-full">
      <div className="max-w-4xl w-full text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-accent bg-bg-secondary/60 backdrop-blur-sm mb-6">
          <Layers className="w-4 h-4 text-accent" />
          <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">Technical Deep-Dive</span>
        </div>
        <h2 style={{ marginTop: '35px' }} className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mb-4">Project Showcase</h2>
        
        <p className="text-text-secondary max-w-xl mx-auto text-center mt-6" style={{ marginBottom: '35px' }}>
          A closer look at the engineering challenges I've tackled — with breakdowns of the problem, approach, and measurable impact.
        </p>
      </div>
      
      <div className="max-w-5xl w-full flex items-center justify-center gap-4 sm:gap-6">
        {/* Left Arrow (Desktop) */}
        <button 
          onClick={handlePrev}
          className="hidden sm:flex p-3 rounded-full bg-bg-secondary/80 border border-border hover:border-accent hover:text-accent transition-all duration-300 z-10 cursor-pointer"
          aria-label="Previous Project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="w-full max-w-4xl relative">
          {/* Mobile Arrows */}
          <div className="absolute top-1/2 left-1 sm:hidden -translate-y-1/2 z-20">
             <button onClick={handlePrev} className="p-2 rounded-full bg-bg-primary border border-border text-text-primary hover:text-accent shadow-lg cursor-pointer"><ChevronLeft className="w-5 h-5"/></button>
          </div>
          <div className="absolute top-1/2 right-1 sm:hidden -translate-y-1/2 z-20">
             <button onClick={handleNext} className="p-2 rounded-full bg-bg-primary border border-border text-text-primary hover:text-accent shadow-lg cursor-pointer"><ChevronRight className="w-5 h-5"/></button>
          </div>

          <VideoCard key={currentProject.id} project={currentProject} />
        </div>

        {/* Right Arrow (Desktop) */}
        <button 
          onClick={handleNext}
          className="hidden sm:flex p-3 rounded-full bg-bg-secondary/80 border border-border hover:border-accent hover:text-accent transition-all duration-300 z-10 cursor-pointer"
          aria-label="Next Project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination indicators */}
      <div style={{ marginBottom: '35px' , marginTop: '35px' }} className="flex justify-center gap-3 mt-14">
        {projectsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
              index === currentIndex ? "bg-accent scale-110" : "bg-border hover:bg-text-secondary"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
