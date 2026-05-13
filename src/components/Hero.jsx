/* ============================================================================
   HERO SECTION – Landing / Above-the-Fold
   ============================================================================
   The first thing visitors see. Contains:
   • A bold headline with the persona name
   • A value-proposition subtitle about performance engineering
   • Animated background elements (gradient orbs + grid)
   • A scroll-down CTA

   ── TO CUSTOMIZE ─────────────────────────────────────────────────────────
   • Change the headline, subtitle, or role text in the JSX below.
   • The floating orbs are purely decorative — adjust colors in the
     gradient classes if you want a different ambient feel.
   ============================================================================ */

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Award, Cpu, Zap } from "lucide-react";
import { motion } from "framer-motion";
import SlotMachine from "./SlotMachine";

function SeamlessVideo({ src }) {
  const [activeVideo, setActiveVideo] = useState(1);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const swapping = useRef(false);

  useEffect(() => {
    if (video1Ref.current) {
      video1Ref.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    if (!video1 || !video2) return;

    let animFrameId;

    const checkTime = () => {
      if (swapping.current) {
        animFrameId = requestAnimationFrame(checkTime);
        return;
      }

      if (activeVideo === 1) {
        if (video1.duration && video1.currentTime >= video1.duration - 0.5) {
          swapping.current = true;
          video2.currentTime = 0;
          video2.play().then(() => {
            setActiveVideo(2);
            setTimeout(() => {
              if (video1) video1.pause();
              swapping.current = false;
            }, 600);
          }).catch(() => {
            swapping.current = false;
          });
        }
      } else {
        if (video2.duration && video2.currentTime >= video2.duration - 0.5) {
          swapping.current = true;
          video1.currentTime = 0;
          video1.play().then(() => {
            setActiveVideo(1);
            setTimeout(() => {
              if (video2) video2.pause();
              swapping.current = false;
            }, 600);
          }).catch(() => {
            swapping.current = false;
          });
        }
      }

      animFrameId = requestAnimationFrame(checkTime);
    };

    animFrameId = requestAnimationFrame(checkTime);

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, [activeVideo]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <video
        ref={video1Ref}
        src={src}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          activeVideo === 1 ? "opacity-30" : "opacity-0"
        }`}
      />
      <video
        ref={video2Ref}
        src={src}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          activeVideo === 2 ? "opacity-30" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default function Hero() {
  const waveVariants = {
    animate: (i) => ({
      y: [0, -10, 0],
      transition: {
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.08,
      }
    })
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary py-10"
    >
      {/* ── Looping Video Background ───────────────────────────────── */}
      <SeamlessVideo src="/Videos/TopSectionLoop.mp4" />

      {/* Gradient overlay to blend the video edges into the dark theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-transparent to-bg-primary z-0 pointer-events-none" />

      {/* ── Animated Background Orbs (Layered over video) ───────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large blue orb – top right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] animate-float" />
        {/* Smaller purple orb – bottom left */}
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]"
          style={{ animationDelay: "2s", animation: "float 6s ease-in-out infinite" }}
        />
        {/* Mid accent orb – center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/3 blur-[80px]"
          style={{ animation: "float 5s ease-in-out infinite 1s" }}
        />
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Status badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-accent bg-bg-secondary/60 backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">
            Software Engineer · Light &amp; Wonder
          </span>
        </div>

        {/* ── Main Headline ─────────────────────────────────────────── */}
        <div className="relative inline-block mb-6">
          {/* Subtle text background glow for contrast */}
          <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full pointer-events-none" />
          <h1
            className="relative animate-slide-up text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] flex flex-wrap justify-center gap-x-[0.2em]"
          >
            <span className="flex select-none">
              {"Arnav".split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={waveVariants}
                  animate="animate"
                  className="inline-block text-text-primary drop-shadow-md"
                >
                  {char}
                </motion.span>
              ))}
            </span>{" "}
            <span className="flex select-none">
              {"Dewangan".split("").map((char, index) => {
                const totalChars = 8; // "Dewangan" length is 8
                const bgPos = `${(index / (totalChars - 1)) * 100}% 0%`;
                return (
                  <motion.span
                    key={index}
                    custom={index + 5}
                    variants={waveVariants}
                    animate="animate"
                    style={{
                      backgroundPosition: bgPos,
                      backgroundSize: "800% 100%",
                    }}
                    className="inline-block bg-gradient-to-r from-accent via-accent-glow to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          </h1>
        </div>

        {/* ── Value Proposition ──────────────────────────────────────── */}
        <p
          className="animate-slide-up text-lg sm:text-xl text-text-secondary max-w-2xl mb-16 leading-loose tracking-wide"
          style={{ animationDelay: "0.2s" }}
        >
          I engineer high-performance gaming systems where every millisecond matters —
          from eliminating{" "}
          <span className="text-accent-glow font-semibold drop-shadow-[0_0_10px_rgba(109,140,255,0.3)]">500MB memory leaks</span> to
          building{" "}
          <span className="text-accent-glow font-semibold drop-shadow-[0_0_10px_rgba(109,140,255,0.3)]">deterministic physics simulations</span>{" "}
          for the slot gaming industry.
        </p>

        {/* ── Achievements Section ──────────────────────────────────── */}
        <div 
          className="animate-slide-up w-full max-w-3xl mb-16 relative group"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Outer glow for the container */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-purple-500/30 to-accent-glow/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative p-8 rounded-3xl bg-bg-secondary/60 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col items-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-tertiary mb-6">Key Achievements</p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 w-full">
              {/* Stat 1 */}
              <div className="flex flex-col items-center gap-3">
                <motion.div 
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(251,191,36,0.1)",
                      "0 0 30px rgba(251,191,36,0.6)",
                      "0 0 15px rgba(251,191,36,0.1)"
                    ],
                    borderColor: [
                      "rgba(251,191,36,0.2)",
                      "rgba(251,191,36,0.8)",
                      "rgba(251,191,36,0.2)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0,
                  }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border flex items-center justify-center"
                >
                  <Award className="w-6 h-6 text-amber-400" />
                </motion.div>
                <div className="text-center">
                  <p className="text-sm font-bold text-text-primary mb-1">Creator of the Year</p>
                  <p className="text-xs text-text-tertiary uppercase tracking-wider">Award Winner</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />

              {/* Stat 2 */}
              <div className="flex flex-col items-center gap-3">
                <motion.div 
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(38,204,255,0.1)",
                      "0 0 30px rgba(38,204,255,0.6)",
                      "0 0 15px rgba(38,204,255,0.1)"
                    ],
                    borderColor: [
                      "rgba(38,204,255,0.2)",
                      "rgba(38,204,255,0.8)",
                      "rgba(38,204,255,0.2)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-muted/20 border flex items-center justify-center"
                >
                  <Cpu className="w-6 h-6 text-accent-glow" />
                </motion.div>
                <div className="text-center">
                  <p className="text-sm font-bold text-text-primary mb-1">500MB → 2MB</p>
                  <p className="text-xs text-text-tertiary uppercase tracking-wider">Memory Saved</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />

              {/* Stat 3 */}
              <div className="flex flex-col items-center gap-3">
                <motion.div 
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(52,211,153,0.1)",
                      "0 0 30px rgba(52,211,153,0.6)",
                      "0 0 15px rgba(52,211,153,0.1)"
                    ],
                    borderColor: [
                      "rgba(52,211,153,0.2)",
                      "rgba(52,211,153,0.8)",
                      "rgba(52,211,153,0.2)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.6,
                  }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 border flex items-center justify-center"
                >
                  <Zap className="w-6 h-6 text-emerald-400" />
                </motion.div>
                <div className="text-center">
                  <p className="text-sm font-bold text-text-primary mb-1">12+ Games</p>
                  <p className="text-xs text-text-tertiary uppercase tracking-wider">Titles Shipped</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Scroll Indicator & Slot Machine ────────────────────────── */}
        <div className="flex flex-col items-center gap-10 w-full">
          <a
            href="#experience"
            className="animate-slide-up inline-flex flex-col items-center gap-2 text-text-tertiary hover:text-accent transition-colors duration-300 no-underline"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Explore My Journey
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>

          {/* ── Slot Machine (Centered) ─────────────────────────────── */}
          <div 
            className="hidden sm:block z-20 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <SlotMachine />
          </div>
        </div>
      </div>
    </section>
  );
}
