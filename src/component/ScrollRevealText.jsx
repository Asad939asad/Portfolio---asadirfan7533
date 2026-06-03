import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const bioText = "Hey, I'm Asad. I architect AI backends, engineer full-stack applications, and turn complex machine learning models into live, scalable production systems. I’ve spent my time building everything from agentic workflows to award-winning medical AI , thriving on rapid learning and teaming up to build products with real-world impact. I work extensively with Python, TypeScript, React, Docker, and AWS , seamlessly bridging the gap between deep technical architecture and shipping robust, data-driven software.";

export default function ScrollRevealText() {
  const containerRef = useRef(null);
  
  // Track scroll position of the text paragraph
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"] 
  });

  // Smooth the scroll progress to create a "hydraulic" fluid effect
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40, // Slower response for a heavier, fluid feel
    damping: 26,   // Highly damped, pure viscous slide with no bouncing
    restDelta: 0.001
  });

  const words = bioText.split(" ");
  
  // Overlapping duration for each word fade (20% of the entire scroll range).
  // This allows multiple words to fade in parallel, producing a soft rolling color gradient.
  const fadeDuration = 0.2;
  const startRange = 1 - fadeDuration;

  return (
    <p ref={containerRef} className="reveal-paragraph">
      {words.map((word, i) => {
        const start = (i / words.length) * startRange;
        const end = start + fadeDuration;
        
        // Transform text color using smoothed progress
        const color = useTransform(
          smoothProgress, 
          [start, end], 
          ["#e5e7eb", "#000000"]
        );

        return (
          <motion.span key={i} style={{ color }} className="reveal-word">
            {word}{" "}
          </motion.span>
        );
      })}
    </p>
  );
}
