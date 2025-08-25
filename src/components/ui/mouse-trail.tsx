"use client";

import React, { useEffect, useRef, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

interface MouseTrailProps {
  maxTrailPoints?: number;
  trailColor?: string;
  trailSize?: number;
  fadeDuration?: number;
  className?: string;
}

const MouseTrail: React.FC<MouseTrailProps> = ({
  maxTrailPoints = 20,
  trailColor = "bg-primary",
  trailSize = 6,
  fadeDuration = 800,
  className = "",
}) => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const trailIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailIdRef.current++,
        timestamp: Date.now(),
      };

      setTrail(prevTrail => {
        const updatedTrail = [newPoint, ...prevTrail];
        return updatedTrail.slice(0, maxTrailPoints);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Clean up old trail points
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setTrail(prevTrail =>
        prevTrail.filter(point => now - point.timestamp < fadeDuration)
      );
    }, 50);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, [maxTrailPoints, fadeDuration]);

  return (
    <div className={`pointer-events-none fixed inset-0 z-50 ${className}`}>
      {trail.map((point, index) => {
        const age = Date.now() - point.timestamp;
        const opacity = Math.max(0, 1 - age / fadeDuration);
        const scale = Math.max(0.1, 1 - index / maxTrailPoints);

        return (
          <div
            className={`absolute rounded-full ${trailColor} transition-opacity duration-100`}
            key={point.id}
            style={{
              left: point.x - (trailSize * scale) / 2,
              top: point.y - (trailSize * scale) / 2,
              width: trailSize * scale,
              height: trailSize * scale,
              opacity: opacity,
              transform: `scale(${scale})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default MouseTrail;
