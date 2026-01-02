"use client";

interface DottedGlowBackgroundProps {
  className?: string;
  opacity?: number;
  size?: number;
  gap?: number;
  glow?: boolean;
  dotColor?: string;
  glowColor?: string;
}

export function DottedGlowBackground({
  className = "",
  opacity = 0.3,
  size = 1.5,
  gap = 20,
  glow = true,
  dotColor = "#059669",
  glowColor = "#10b981",
}: DottedGlowBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Main dotted pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle ${size}px at ${gap}px ${gap}px, ${dotColor} 50%, transparent 50%)`,
          backgroundSize: `${gap * 2}px ${gap * 2}px`,
          opacity: opacity * 0.7,
        }}
      />
      
      {/* Glow overlay */}
      {glow && (
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle ${size * 3}px at ${gap}px ${gap}px, ${glowColor}20 50%, transparent 50%)`,
            backgroundSize: `${gap * 2}px ${gap * 2}px`,
            opacity: opacity,
            filter: 'blur(2px)',
          }}
        />
      )}
      
      {/* Animated gradient overlay for subtle movement */}
      <div 
        className="absolute inset-0 animate-[shimmer_8s_infinite]"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.05), transparent)`,
        }}
      />
    </div>
  );
}