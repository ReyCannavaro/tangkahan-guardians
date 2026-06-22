"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-config";
import Sunrise from "@/components/illustrations/Sunrise";
import { turnMilestones } from "@/lib/content";

export default function TheTurn() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sunriseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Scale up the sunrise to create a transition
      gsap.fromTo(sunriseRef.current,
        { scale: 0.8, y: 150, opacity: 0.5 },
        {
          scale: 1.2,
          y: -50,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom top",
            scrub: true
          }
        }
      );

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
              start: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center py-32 px-5"
      style={{ background: "linear-gradient(to bottom, var(--color-forest-950), var(--color-sunset-600))" }}
      data-navbar-theme="dark"
      data-navbar-bg="rgba(90, 45, 20, 0.5)"
      data-navbar-color="var(--color-earth-100)"
    >
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none" ref={sunriseRef}>
        <Sunrise className="w-full h-auto min-h-[50vh] object-cover object-bottom" />
      </div>

      <div ref={textRef} className="relative z-10 max-w-4xl mx-auto text-center mt-[-10vh]">
        <p className="mx-auto mb-5 w-fit rounded-full border border-[rgba(232,228,217,0.2)] bg-[rgba(13,31,22,0.18)] px-5 py-2 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-amber-400)] backdrop-blur-sm">
          April 2001
        </p>
        <h2 className="font-display text-4xl lg:text-5xl mb-8 text-[var(--color-earth-100)] leading-tight">
          Sebuah Titik Balik
        </h2>
        <p className="font-sans text-xl lg:text-2xl text-[var(--color-neutral-100)] mb-8 font-medium">
          Tahun 2001, kesadaran itu muncul.
        </p>
        <p className="font-sans text-lg lg:text-xl text-[var(--color-neutral-200)] leading-relaxed mb-6">
          Warga desa menyadari bahwa tanpa hutan, tidak ada masa depan. Mereka meletakkan gergaji dan merangkul sebuah konsep revolusioner: Ekowisata. Bersama pemerintah dan lembaga konservasi, lahirlah <strong>Conservation Response Unit (CRU)</strong>.
        </p>
        <p className="font-sans text-lg lg:text-xl text-[var(--color-neutral-200)] leading-relaxed">
          Gajah-gajah yang dulunya dianggap hama perusak kebun, kini direkrut menjadi patroli penjaga hutan bersama warga. Mantan penebang liar berevolusi menjadi pemandu wisata dan pelindung Leuser.
        </p>
        <blockquote className="mx-auto mt-10 max-w-2xl border-l-4 border-[var(--color-amber-500)] pl-6 text-left font-display text-2xl italic leading-snug text-[var(--color-earth-100)]">
          Transformasinya tidak terjadi karena hutan tiba-tiba aman. Ia terjadi
          karena manusia memilih berhenti mengambil, lalu mulai menjaga.
        </blockquote>
      </div>

      <div className="relative z-10 mx-auto mt-16 grid max-w-6xl gap-4 px-5 lg:grid-cols-3">
        {turnMilestones.map((item) => (
          <article
            key={item.year}
            className="rounded-3xl border border-[rgba(232,228,217,0.14)] bg-[rgba(13,31,22,0.16)] p-6 text-left backdrop-blur-sm"
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber-400)]">
              {item.year}
            </p>
            <h3 className="mt-4 font-display text-2xl text-[var(--color-earth-100)]">
              {item.title}
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[var(--color-neutral-200)]">
              {item.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
