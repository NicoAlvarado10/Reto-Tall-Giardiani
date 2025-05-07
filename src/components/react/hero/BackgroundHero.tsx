import { useEffect } from "react";

export const BackgroundHero = () => {
    const gridSize = 10;
    
    const handleMouseMove = (e: MouseEvent) => {
      const tiles = document.querySelectorAll("#hero-grid div");
      const { clientX: x, clientY: y } = e;
  
      tiles.forEach((tile) => {
        const rect = (tile as HTMLElement).getBoundingClientRect();
        const dx = x - (rect.left + rect.width / 2);
        const dy = y - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        const intensity = Math.max(0, 1 - distance /  300);
  
        (tile as HTMLElement).style.cssText = `
          box-shadow: 0 0 ${25 * intensity}px rgba(0, 140, 255, ${intensity});
          opacity: ${0.9 + intensity * 0.4};
          transition: box-shadow 0.2s all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        `;
      });
    };
  
    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
  
    return (
      <div 
        id="hero-grid"
        className="hidden md:grid absolute inset-0 grid-cols-10 grid-rows-10 z-[10] pointer-events-none"
      >
        {[...Array(gridSize * gridSize)].map((_, i) => (
          <div 
            key={i}
            className="border-none"
            style={{
              maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
            }}
          />
        ))}
      </div>
    );
  };