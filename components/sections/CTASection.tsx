"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { visitorGuidelines } from "@/lib/content";
import { LeafIcon } from "@/components/illustrations/icons/LineIcons";
import { gsap } from "@/lib/gsap-config";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children ?? [],
        { scale: 0.98, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(buttonRef.current, {
        boxShadow: "0 0 36px rgba(217,164,65,0.55)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="kunjungi"
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(160deg,var(--color-forest-800),var(--color-forest-600))] px-5 py-24 text-[var(--color-earth-100)] lg:py-40"
      data-navbar-theme="dark"
      data-navbar-bg="rgba(27, 58, 43, 0.55)"
      data-navbar-color="var(--color-earth-100)"
    >
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <svg className="h-full w-full">
          <filter id="cta-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#cta-grain)" />
        </svg>
      </div>

      <div ref={contentRef} className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-amber-400)]">
          Jadi Bagian dari Cerita
        </p>
        <h2 className="font-display text-4xl leading-tight lg:text-5xl">
          Datang sebagai tamu. Pulang sebagai orang yang ikut menjaga.
        </h2>
        <p className="mx-auto mt-7 max-w-[65ch] font-sans text-lg leading-relaxed text-[var(--color-neutral-200)]">
          Perjalanan bertanggung jawab dimulai dari keputusan kecil: siapa yang
          kita dukung, bagaimana kita bergerak, dan batas apa yang kita hormati.
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-left">
          {visitorGuidelines.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl border border-[rgba(232,228,217,0.12)] bg-[rgba(232,228,217,0.07)] p-4"
            >
              <LeafIcon className="mt-1 shrink-0 text-[var(--color-amber-400)]" size={20} />
              <p className="font-sans text-base leading-relaxed text-[var(--color-neutral-200)]">
                {item}
              </p>
            </div>
          ))}
        </div>

        <Link
          ref={buttonRef}
          href="#kisah"
          className="mt-10 inline-flex rounded-full bg-[var(--color-amber-500)] px-8 py-4 font-sans text-base font-semibold text-[var(--color-forest-950)] transition-all hover:bg-[var(--color-amber-400)] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--color-amber-400)] focus:ring-offset-2 focus:ring-offset-[var(--color-forest-800)]"
        >
          Ulangi Perjalanan
        </Link>
      </div>
    </section>
  );
}
