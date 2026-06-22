"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-config";
import Stump from "@/components/illustrations/Stump";
import { SawIcon } from "@/components/illustrations/icons/LineIcons";

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
        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(224,222,213,0.18)] bg-[rgba(224,222,213,0.05)] text-[var(--color-neutral-200)]">
          <SawIcon size={32} />
        </div>
        <h2 className="font-display text-4xl lg:text-5xl mb-8 text-[var(--color-neutral-200)] leading-tight">
          Dulu, Gergaji Mesin<br/>Menghancurkan Segalanya.
        </h2>
        <p className="font-sans text-lg lg:text-xl text-[var(--color-neutral-400)] mb-6 leading-relaxed">
          Pada awal 1990-an, Tangkahan adalah pusat pembalakan liar. Deru mesin gergaji membungkam kicauan burung. Pohon-pohon raksasa Leuser bertumbangan, meninggalkan luka dalam bagi ekosistem dan memicu konflik mematikan dengan kawanan gajah liar.
        </p>
        <p className="font-sans text-lg lg:text-xl text-[var(--color-neutral-400)] leading-relaxed">
          Masyarakat lokal, yang terdesak oleh kemiskinan, terpaksa menebang hutan yang justru menjadi paru-paru mereka sendiri.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
          {["Hutan rusak", "Konflik satwa", "Ekonomi rapuh"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[rgba(224,222,213,0.1)] bg-[rgba(224,222,213,0.04)] p-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-neutral-400)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
