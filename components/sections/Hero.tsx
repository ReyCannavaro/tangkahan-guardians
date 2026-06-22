"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";
import Link from "next/link";
import HeroCanopy from "@/components/illustrations/HeroCanopy";
import HeroTrees from "@/components/illustrations/HeroTrees";
import HeroBushes from "@/components/illustrations/HeroBushes";
import { heroSignals } from "@/lib/content";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canopyRef = useRef<HTMLDivElement>(null);
  const treesRef = useRef<HTMLDivElement>(null);
  const bushesRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const ctx = gsap.context(() => {
      // 1. Initial Load Sequence
      const tl = gsap.timeline();
      
      // Initial states
      gsap.set([canopyRef.current, treesRef.current, bushesRef.current, headlineRef.current, subheadRef.current, btnRef.current], {
        opacity: 0
      });

      tl.fromTo(canopyRef.current, 
        { scale: 1.05 }, 
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }, 
        0
      )
      .fromTo(treesRef.current,
        { y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        0.2
      )
      .fromTo(bushesRef.current,
        { y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        0.35
      )
      .fromTo(headlineRef.current,
        { y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.6
      )
      .fromTo(subheadRef.current,
        { y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        0.8
      )
      .fromTo(btnRef.current,
        { scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
        1.0
      );

      // 2. Parallax Scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: gsap.timeline()
          .to(canopyRef.current, { y: -60, ease: "none" }, 0)
          .to(treesRef.current, { y: -120, ease: "none" }, 0)
          .to(bushesRef.current, { y: -200, ease: "none" }, 0)
          .to([headlineRef.current, subheadRef.current, btnRef.current], { 
            y: -40, 
            opacity: 0, 
            ease: "none" 
          }, 0)
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[100vh] min-h-[600px] overflow-hidden bg-gradient-to-b from-[var(--color-forest-800)] to-[var(--color-forest-900)] flex items-center justify-center pt-20"
      data-navbar-theme="dark"
      data-navbar-bg="rgba(13, 31, 22, 0.55)"
      data-navbar-color="var(--color-earth-100)"
    >
      {/* Background Layers */}
      <div ref={canopyRef} className="absolute inset-0 z-0 will-change-transform">
        <HeroCanopy className="w-full h-full object-cover" />
      </div>
      <div ref={treesRef} className="absolute inset-0 z-10 will-change-transform">
        <HeroTrees className="w-full h-full object-cover" />
      </div>
      <div ref={bushesRef} className="absolute inset-0 z-20 will-change-transform pt-[5vh]">
        <HeroBushes className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center text-center px-5 max-w-4xl mx-auto mt-[-5vh]">
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {heroSignals.map((signal) => (
            <span
              key={signal}
              className="rounded-full border border-[rgba(232,228,217,0.22)] bg-[rgba(13,31,22,0.26)] px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-neutral-200)] backdrop-blur-sm"
            >
              {signal}
            </span>
          ))}
        </div>
        <h1 
          ref={headlineRef}
          className="font-display font-bold text-5xl lg:text-6xl leading-tight mb-6 text-[var(--color-earth-100)]"
        >
          Dari Penebang, <br/> Menjadi Penjaga.
        </h1>
        <p 
          ref={subheadRef}
          className="font-sans text-lg lg:text-xl text-[var(--color-neutral-200)] max-w-[65ch] mb-10"
        >
          Saksi transformasi nyata Tangkahan. Bagaimana harmoni antara manusia, gajah Sumatra, dan alam Leuser terbentuk lewat keberanian dan konservasi.
        </p>
        <Link 
          href="#kisah" 
          ref={btnRef}
          className="px-8 py-4 rounded-full bg-[var(--color-amber-500)] text-[var(--color-forest-950)] text-base font-semibold transition-all hover:bg-[var(--color-amber-400)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--color-amber-300)] focus:ring-offset-2 focus:ring-offset-[var(--color-forest-900)]"
        >
          Mulai Perjalanan
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-3 text-[var(--color-neutral-200)] md:flex">
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em]">
          Scroll untuk membaca perubahan
        </span>
        <span className="h-12 w-px overflow-hidden bg-[rgba(232,228,217,0.24)]">
          <span className="block h-5 w-px animate-pulse bg-[var(--color-amber-400)]" />
        </span>
      </div>

      {/* Grain overlay for the entire hero to add texture as required by DESIGN.md */}
      <div className="absolute inset-0 z-40 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full">
          <filter id="global-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#global-grain)" />
        </svg>
      </div>
    </section>
  );
}
