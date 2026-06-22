"use client";

import { useEffect, useRef } from "react";
import { impactStats } from "@/lib/content";
import ImpactCounter from "@/components/interactive/ImpactCounter";
import { gsap } from "@/lib/gsap-config";

export default function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children ?? [],
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="dampak"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-neutral-50)] px-5 py-24 text-[var(--color-neutral-900)] lg:py-40"
      data-navbar-theme="light"
      data-navbar-bg="rgba(250, 250, 248, 0.7)"
      data-navbar-color="var(--color-neutral-900)"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-earth-700)]">
            Dampak Terukur
          </p>
          <h2 className="font-display text-4xl leading-tight lg:text-5xl">
            Dampak yang bisa dibaca, dengan catatan yang tetap jujur.
          </h2>
          <p className="mt-7 font-sans text-lg leading-relaxed text-[var(--color-neutral-600)]">
            Angka di bawah dipakai sebagai rangka awal narasi dan harus
            diverifikasi ulang sebelum publikasi final. Tujuannya bukan
            membesar-besarkan, tetapi memberi konteks bahwa konservasi juga
            menyentuh ekonomi warga.
          </p>
        </div>

        <div ref={cardsRef} className="mt-12 grid gap-5 lg:grid-cols-3">
          {impactStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-3xl border border-[rgba(26,24,20,0.08)] bg-white/55 p-7 shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:p-8"
            >
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-earth-700)]">
                {stat.label}
              </p>
              <p className="mt-7 font-display text-5xl leading-none text-[var(--color-forest-800)] lg:text-6xl">
                <ImpactCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  display={stat.display}
                />
              </p>
              <p className="mt-6 font-sans text-sm leading-relaxed text-[var(--color-neutral-600)]">
                {stat.source}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
