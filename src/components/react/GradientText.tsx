import React from 'react';

interface GradientTextProps {
  children: string;
  className?: string;
  colors?: string[];           // ahora expuesto como prop
  animationSpeed?: number;     // en segundos
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = [""], 
  animationSpeed = 8, 
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text  ${className}`}>
      {showBorder && (
        <div
          className="gradient-overlay "
          style={gradientStyle}
        />
      )}
      <div
        className="text-content font-bold"
        style={gradientStyle}
      >
        {children}
      </div>
    </div>
  );
}
