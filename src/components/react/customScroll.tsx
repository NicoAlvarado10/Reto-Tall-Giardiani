import React, { useEffect, useRef, useState } from "react";

interface CustomScrollProps {
  children: React.ReactNode;
  height?: string;
}

export default function CustomScroll({ children, height = "100%" }: CustomScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const scrollStartTop = useRef(0);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const update = () => {
      const { scrollHeight, clientHeight, scrollTop } = content;
      const heightRatio = clientHeight / scrollHeight;
      setThumbHeight(clientHeight * heightRatio);
      setThumbTop((scrollTop / scrollHeight) * clientHeight);
    };

    update();
    content.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      content.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !contentRef.current) return;
      const deltaY = e.clientY - dragStartY.current;
      const scrollRatio = contentRef.current.scrollHeight / contentRef.current.clientHeight;
      contentRef.current.scrollTop = scrollStartTop.current + deltaY * scrollRatio;
    };

    const onMouseUp = () => setIsDragging(false);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartY.current = e.clientY;
    scrollStartTop.current = contentRef.current?.scrollTop || 0;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height }}
    >
      <div
        ref={contentRef}
        className="h-full w-full overflow-y-scroll scrollbar-none"
      >
        {children}
      </div>

      <div className="absolute right-2 top-0 h-full w-[7px] bg-transparent z-40">
        <div
          onMouseDown={handleThumbMouseDown}
          className={`rounded-full cursor-pointer transition-colors duration-200 ${isDragging ? "bg-white" : "bg-gray-400 hover:bg-white"
            }`}
          style={{
            height: `${thumbHeight}px`,
            transform: `translateY(${thumbTop}px)`,
          }}
        />
      </div>
    </div>
  );
}
