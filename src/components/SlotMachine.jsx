import { useState } from "react";
import confetti from "canvas-confetti";

const SYMBOLS = ["🍋", "🍊", "🍎", "7️⃣"];
const SPIN_DURATION = 2000;

export default function SlotMachine() {
  const [reels, setReels] = useState(["7️⃣", "7️⃣", "7️⃣"]);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinReels = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    let spins = 0;
    const maxSpins = 20;

    const spinInterval = setInterval(() => {
      spins++;
      setReels([
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      ]);

      if (spins >= maxSpins) {
        clearInterval(spinInterval);

        // Force a win 25% of the time
        const isWin = Math.random() < 0.25;
        let final1, final2, final3;

        if (isWin) {
          const winSymbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
          final1 = winSymbol;
          final2 = winSymbol;
          final3 = winSymbol;
        } else {
          final1 = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
          final2 = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
          final3 = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
          // Prevent accidental wins on non-win path
          if (final1 === final2 && final2 === final3) {
            final3 = SYMBOLS[(SYMBOLS.indexOf(final1) + 1) % SYMBOLS.length];
          }
        }

        setReels([final1, final2, final3]);
        setIsSpinning(false);

        if (final1 === final2 && final2 === final3) {
          // Add a tiny delay so the final render happens before confetti
          setTimeout(() => triggerConfetti(), 50);
        }
      }
    }, 100);
  };

  const triggerConfetti = () => {
    if (typeof confetti !== "function") return; // Safety check
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff",
        ],
        zIndex: 9999, // Ensure it's on top of everything
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff",
        ],
        zIndex: 9999,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <div
      className="group flex flex-col items-center justify-center p-6 bg-bg-secondary/40 backdrop-blur-md rounded-3xl border border-border shadow-2xl cursor-pointer transition-all duration-300 hover:border-accent/50 hover:shadow-accent/20 w-full max-w-80 relative overflow-hidden"
      onClick={spinReels}
    >
      {/* Decorative inner glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="text-xl font-bold mb-5 text-accent uppercase tracking-[0.3em] ml-[0.3em] flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        Casino
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
      </div>

      <style>{`
        @keyframes slot-spin {
          0% { transform: translateY(-15px); }
          50% { transform: translateY(15px); }
          100% { transform: translateY(-15px); }
        }
        .animate-slot-spin {
          animation: slot-spin 0.08s linear infinite;
        }
      `}</style>

      <div className="flex gap-4 bg-bg-primary p-5 rounded-2xl shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)] border border-bg-secondary relative">
        {/* Shine overlay */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none" />

        {reels.map((symbol, idx) => (
          <div
            key={idx}
            className="w-14 sm:w-16 h-16 sm:h-20 flex items-center justify-center text-3xl sm:text-4xl bg-gradient-to-b from-bg-secondary to-bg-primary rounded-xl border border-white/5 shadow-lg overflow-hidden relative"
          >
            <span
              className={isSpinning ? "animate-slot-spin" : "transform transition-transform duration-300"}
              style={{ animationDelay: `${idx * 0.02}s` }}
            >
              {symbol}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 relative z-10">
        <button
          className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 ${isSpinning
            ? "bg-bg-secondary text-text-tertiary cursor-not-allowed border border-border"
            : "bg-gradient-to-r from-accent to-accent-glow text-white shadow-[0_0_20px_rgba(38,204,255,0.4)] hover:shadow-[0_0_30px_rgba(38,204,255,0.6)] hover:scale-105 border border-transparent"
            }`}
        >
          {isSpinning ? "Spinning..." : "Spin To Win"}
        </button>
      </div>
    </div>
  );
}
