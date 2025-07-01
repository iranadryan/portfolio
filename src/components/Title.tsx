import { useEffect, useRef } from "react";

export function Title({ children }: { children: string }) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      const width = spanRef.current.offsetWidth;
      spanRef.current.style.setProperty("--span-width", `${width + 20}px`);
    }
  }, []);

  return (
    <div className="flex justify-center">
      <span
        ref={spanRef}
        className="text-[40px] text-white font-bold relative after:content-[''] after:absolute after:bottom-2 after:-left-3 after:z-[-1] after:w-[var(--span-width,360px)] after:h-4 after:bg-primary"
      >
        {children}
      </span>
    </div>
  );
}
