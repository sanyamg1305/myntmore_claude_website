"use client";

import { useRef, useEffect, type ReactNode, type CSSProperties } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export default function FadeIn({ children, delay = 0, className = "", style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => el.classList.add("reveal-visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
