import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Card = ({ children, index, total }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  // Apply a physics-based spring to smooth out the depth transition
  // This makes the fade and shrink feel incredibly buttery and organic
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Y-translation MUST use raw scroll progress to stay perfectly pinned without bouncing
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);
  
  // Scale and Opacity use the smoothed spring progress for a premium 3D feel
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(smoothProgress, [0, 1], [1, 0.3]);

  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className="w-full relative"
      style={{
        zIndex: index, // Next card renders on top
      }}
    >
      <motion.div
        className="w-full origin-top bg-bg-primary"
        style={{
          y: isLast ? 0 : y,
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : opacity,
          borderTopLeftRadius: index > 0 ? "3rem" : "0",
          borderTopRightRadius: index > 0 ? "3rem" : "0",
          borderTop: index > 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
          boxShadow: index > 0 ? "0 -20px 50px rgba(0,0,0,0.5)" : "none",
          minHeight: "100vh", // Ensures every card can cover the screen
          willChange: "transform, opacity", // Force GPU acceleration for buttery smoothness
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function CardsStack({ children }) {
  const cards = React.Children.toArray(children);

  return (
    <div className="w-full relative bg-bg-primary">
      {cards.map((child, index) => (
        <Card key={index} index={index} total={cards.length}>
          {child}
        </Card>
      ))}
    </div>
  );
}
