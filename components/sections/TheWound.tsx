"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";
import Stump from "@/components/illustrations/Stump";

export default function TheWound() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const stumpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Fade up text on scroll
      if (textRef.current) {
        const elements = textRef.current.children;
        gsap.fromTo(elements, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            stagger: 0.2, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%", // start animation when section is 60% down the viewport
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Parallax the stumps slightly
      gsap.to(stumpRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="kisah"
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-[var(--color-forest-950)] flex items-center justify-center py-32 px-5"
      data-navbar-theme="dark"
      data-navbar-bg="rgba(8, 18, 13, 0.6)"
      data-navbar-color="var(--color-neutral-200)"
    >
      <div className="absolute bottom-0 left-0 w-full opacity-60 z-0 pointer-events-none" ref={stumpRef}>
        <Stump className="w-full h-auto max-h-[60vh] object-cover object-bottom" />
      </div>

      <div ref={textRef} className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl lg:text-5xl mb-8 text-[var(--color-neutral-200)] leading-tight">
          Dulu, Gergaji Mesin<br/>Menghancurkan Segalanya.
        </h2>
        <p className="font-sans text-lg lg:text-xl text-[var(--color-neutral-400)] mb-6 leading-relaxed">
          Pada awal 1990-an, Tangkahan adalah pusat pembalakan liar. Deru mesin gergaji membungkam kicauan burung. Pohon-pohon raksasa Leuser bertumbangan, meninggalkan luka dalam bagi ekosistem dan memicu konflik mematikan dengan kawanan gajah liar.
        </p>
        <p className="font-sans text-lg lg:text-xl text-[var(--color-neutral-400)] leading-relaxed">
          Masyarakat lokal, yang terdesak oleh kemiskinan, terpaksa menebang hutan yang justru menjadi paru-paru mereka sendiri.
        </p>
      </div>
    </section>
  );
}
