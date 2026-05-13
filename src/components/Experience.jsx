/* ============================================================================
   EXPERIENCE SECTION – Career Timeline
   ============================================================================
   Displays a vertical timeline of career roles at Light & Wonder.
   Data is imported from `../data/experienceData.js`.

   ── LAYOUT ───────────────────────────────────────────────────────────────
   • On desktop: alternating left/right timeline cards
   • On mobile: single-column with all cards on one side
   • Each card shows role, period, description, highlights, and tech tags

   ── TO CUSTOMIZE ─────────────────────────────────────────────────────────
   • Edit the data in `../data/experienceData.js` to change roles
   • The timeline line and dot colors use the `accent` theme token
   • Section heading text can be changed in the JSX below
   ============================================================================ */

import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import experienceData from "../data/experienceData";

export default function Experience({ item, showHeader = false }) {
  const itemsToRender = item ? [item] : experienceData;

  const bgVariants = {
    animate: {
      scale: [1, 1.04, 1],
      filter: [
        "blur(2px) brightness(0.35)",
        "blur(6px) brightness(0.55)",
        "blur(2px) brightness(0.35)",
      ],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const cardVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className={`relative w-full min-h-screen flex flex-col justify-center items-center px-6 bg-bg-primary overflow-hidden ${showHeader ? 'pt-10 pb-20' : 'py-20'}`}
    >
      {/* ── Animated Ambient Background Image ────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={bgVariants}
          animate="animate"
          className="w-full h-full"
          style={{
            backgroundImage: `url('${item?.bgImage || "/experience-bg.jpg"}')`, // Resolves custom bgImages or falls back gracefully
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform, filter",
          }}
        />
        {/* Blending vignettes to fade the image edges into pure black */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/20 to-bg-primary" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* ── Section Header ─────────────────────────────────────────────── */}
      {showHeader && (
        <div className="relative w-full px-6 max-w-4xl flex flex-col items-center text-center z-20 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-accent bg-bg-secondary/60 backdrop-blur-sm mb-4">
            <Briefcase className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">
              Career Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Experience
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl text-center leading-relaxed">
            A chronological journey from intern to software engineer at Light &amp;
            Wonder, specializing in performance engineering for the slot gaming
            industry.
          </p>
        </div>
      )}

      <div className="w-full max-w-4xl flex flex-col items-center relative z-10">

        {/* ── Timeline ───────────────────────────────────────────────────── */}
        <div className="relative w-full flex flex-col items-center gap-12">
          {/* Vertical line (Only show if multiple items or if we want a short timeline stub) */}
          {itemsToRender.length > 1 && (
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent -translate-x-px hidden sm:block" />
          )}

          {itemsToRender.map((currItem) => (
            <div
              key={currItem.id}
              className="relative flex flex-col items-center w-full"
            >
              {/* ── Timeline Dot ──────────────────────────────────────── */}
              <div className="absolute left-1/2 w-4 h-4 -translate-x-1/2 top-10 z-0 hidden sm:block">
                <div className="w-4 h-4 rounded-full bg-accent border-4 border-bg-primary shadow-lg shadow-accent/30" />
              </div>

              {/* ── Card ──────────────────────────────────────────────── */}
              <div className="w-full sm:w-11/12 relative z-10">
                <motion.div
                  variants={cardVariants}
                  animate="animate"
                  className="group p-5 sm:p-8 md:p-10 rounded-2xl border border-border bg-bg-primary/80 backdrop-blur-md hover:border-border-accent hover:bg-bg-secondary/90 transition-all duration-500 flex flex-col items-center text-center shadow-xl shadow-black/20"
                >
                  {/* Period & Type */}
                  <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">
                      {currItem.period}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent-glow border border-accent/20">
                      {currItem.type}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {currItem.role}
                  </h3>
                  <p className="text-lg text-text-tertiary mb-6">{currItem.company}</p>

                  {/* Description */}
                  <p className="text-base text-text-secondary leading-relaxed mb-8 max-w-2xl text-center">
                    {currItem.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-4 mb-8 flex flex-col items-center text-center w-full max-w-2xl">
                    {currItem.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex flex-col items-center text-center gap-2 text-base text-text-secondary"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0 hidden" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {currItem.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-4 py-2 rounded-md bg-bg-tertiary text-text-secondary border border-border font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
