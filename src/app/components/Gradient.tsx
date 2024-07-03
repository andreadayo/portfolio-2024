"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface GradientBackgroundProps {
  gradientColor?: string;
  children?: React.ReactNode;
  height?: number;
  width?: number;
  radius?: number; // Circle size
  className?: React.ComponentProps<"div">["className"];
}

const Gradient = ({
  gradientColor = "rgba(255, 255, 255, 0.05)",
  height = 312,
  width = 375,
  radius = 50, // Default circle size
  className,
  children,
  ...props
}: GradientBackgroundProps) => {
  const mainRef = useRef<HTMLDivElement>(null);

  // Initialize position of gradient
  const x = useSpring(50);
  const y = useSpring(50);
  const [currentX, setCurrentX] = useState(x.get());
  const [currentY, setCurrentY] = useState(y.get());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mainRef.current) {
        // Get the dimensions of the container
        const containerRect = mainRef.current.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;

        // Calculate the position in a percentage within the container
        const mousePositionInContainerX = Math.round(
          ((e.clientX - containerRect.left) / containerWidth) * 100
        );
        const mousePositionInContainerY = Math.round(
          ((e.clientY - containerRect.top) / containerHeight) * 100
        );

        // Set the position
        x.set(mousePositionInContainerX);
        y.set(mousePositionInContainerY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mainRef, x, y]);

  useEffect(() => x.onChange((latest) => setCurrentX(latest)), [x]);
  useEffect(() => y.onChange((latest) => setCurrentY(latest)), [y]);

  return (
    <motion.div
      ref={mainRef}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      {...props}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at ${currentX}% ${currentY}%, ${gradientColor} 0%, transparent ${radius}%),
            linear-gradient(116deg, rgba(56, 56, 56, 0.17) -29.94%, rgba(165, 165, 165, 0.13) -29.93%, rgba(124, 124, 124, 0.08) 101.76%)
          `,
          backdropFilter: "blur(50px)",
        }}
      ></div>
      <div
        style={{
          position: "relative",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Gradient;
