"use client";

import { useEffect, useRef } from "react";
import { learningPoints } from "@/lib/content";
import { LeafIcon } from "@/components/illustrations/icons/LineIcons";
import { gsap } from "@/lib/gsap-config";

export default function StillLearning() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current?.children ?? [],
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        listRef.current?.children ?? [],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: listRef.current,
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
      id="kejujuran"
      ref={sectionRef}
      className="bg-[var(--color-earth-900)] px-5 py-24 text-[var(--color-earth-100)] lg:py-40"
      data-navbar-theme="dark"
      data-navbar-bg="rgba(61, 46, 31, 0.6)"
      data-navbar-color="var(--color-earth-100)"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div ref={textRef}>
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-warning-amber)]">
            Still Learning
          </p>
          <h2 className="font-display text-4xl leading-tight lg:text-5xl">
            Kejujuran adalah bagian dari konservasi.
          </h2>
          <p className="mt-7 max-w-[65ch] font-sans text-lg leading-relaxed text-[var(--color-neutral-200)]">
            Tangkahan kuat bukan karena kisahnya sempurna, tetapi karena ia
            berani berubah. Bagian ini sengaja menampilkan tantangan agar
            narasi tidak jatuh menjadi greenwashing.
          </p>
        </div>

        <div ref={listRef} className="grid gap-4">
          {learningPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-3xl border border-[rgba(232,228,217,0.12)] bg-[rgba(232,228,217,0.06)] p-6"
            >
              <div className="mb-4 flex items-center gap-3 text-[var(--color-amber-400)]">
                <LeafIcon size={22} />
                <h3 className="font-display text-2xl text-[var(--color-earth-100)]">
                  {point.title}
                </h3>
              </div>
              <p className="font-sans text-base leading-relaxed text-[var(--color-neutral-200)]">
                {point.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
