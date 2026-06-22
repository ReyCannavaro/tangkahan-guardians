"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-config";

const pillars = [
  {
    label: "Gajah",
    copy: "Kekuatan dan memori hutan yang membantu membuka jalur patroli tanpa memutus hubungan liar ekosistemnya.",
  },
  {
    label: "Mahout",
    copy: "Penjaga harian yang membaca bahasa tubuh gajah, arah angin, dan tanda kecil yang sering luput dari mata pengunjung.",
  },
  {
    label: "Hutan",
    copy: "Rumah bersama yang memberi air, pangan, perlindungan, dan alasan bagi masyarakat untuk terus menjaga.",
  },
];

export default function Coexistence() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        visualRef.current,
        { scale: 0.78, opacity: 0.35, y: 80 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "center 35%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        textRef.current?.children ?? [],
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.16,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 58%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        pillarsRef.current?.children ?? [],
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          scrollTrigger: {
            trigger: pillarsRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[var(--color-earth-100)] px-5 py-24 text-[var(--color-neutral-900)] lg:py-36"
      data-navbar-theme="light"
      data-navbar-bg="rgba(232, 228, 217, 0.65)"
      data-navbar-color="var(--color-neutral-900)"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div
          ref={visualRef}
          className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-lg bg-[var(--color-forest-800)] shadow-2xl shadow-[rgba(61,46,31,0.2)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(117,156,126,0.95),rgba(27,58,43,0.95)_52%,rgba(13,31,22,1))]" />
          <div className="absolute left-1/2 top-[18%] h-28 w-28 -translate-x-1/2 rounded-full border border-[rgba(232,228,217,0.28)] bg-[rgba(232,228,217,0.12)] backdrop-blur-sm" />
          <div className="absolute bottom-[18%] left-[18%] h-32 w-20 rounded-t-full border border-[rgba(232,228,217,0.26)] bg-[rgba(232,228,217,0.16)]" />
          <div className="absolute bottom-[18%] right-[16%] h-40 w-28 rounded-t-[4rem] border border-[rgba(232,228,217,0.26)] bg-[rgba(232,228,217,0.12)]" />
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-[linear-gradient(to_top,rgba(13,31,22,0.92),transparent)]" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-amber-400)]">
              Living Alliance
            </p>
            <p className="mt-3 max-w-xs font-display text-3xl leading-tight text-[var(--color-earth-100)]">
              Satu ritme antara langkah, tangan, dan akar.
            </p>
          </div>
        </div>

        <div ref={textRef}>
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-earth-700)]">
            Harmoni Kehidupan
          </p>
          <h2 className="font-display text-4xl leading-tight lg:text-5xl">
            Coexistence bukan slogan. Ia adalah latihan harian.
          </h2>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-[var(--color-neutral-600)]">
            Di Tangkahan, konservasi bekerja karena relasinya dekat: mahout
            mengenal gajahnya, masyarakat mengenal hutannya, dan setiap
            perjalanan mengajarkan batas yang harus dihormati.
          </p>
        </div>
      </div>

      <div
        ref={pillarsRef}
        className="mx-auto mt-16 grid max-w-6xl gap-px overflow-hidden rounded-lg border border-[rgba(61,46,31,0.16)] bg-[rgba(61,46,31,0.16)] lg:grid-cols-3"
      >
        {pillars.map((pillar) => (
          <article
            key={pillar.label}
            className="bg-[var(--color-earth-100)] p-7 lg:p-8"
          >
            <h3 className="font-display text-2xl text-[var(--color-forest-800)]">
              {pillar.label}
            </h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-[var(--color-neutral-600)]">
              {pillar.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
