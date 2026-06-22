"use client";

import { useEffect, useRef } from "react";
import {
  Binoculars,
  ChalkboardTeacher,
  ShieldCheck,
} from "@phosphor-icons/react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";

const cruCards = [
  {
    title: "Patroli Gajah Terpadu",
    eyebrow: "01 / CRU Patrol",
    description:
      "Mahout dan gajah Sumatra bergerak menyusuri batas hutan, membaca jejak, dan menjaga koridor satwa tetap aman dari konflik.",
    Icon: Binoculars,
  },
  {
    title: "Edukasi Konservasi",
    eyebrow: "02 / Community",
    description:
      "CRU menjadi ruang belajar hidup bagi warga dan pengunjung tentang perilaku gajah, restorasi hutan, dan etika berada di Leuser.",
    Icon: ChalkboardTeacher,
  },
  {
    title: "Patroli Anti-Pembalakan Liar",
    eyebrow: "03 / Forest Guard",
    description:
      "Jalur lama pembalakan kini diawasi bersama. Setiap patroli mempersempit ruang perusakan dan memperkuat rasa kepemilikan warga.",
    Icon: ShieldCheck,
  },
];

export default function CRUSystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        introRef.current?.children ?? [],
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.14,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          if (!sectionRef.current || !trackRef.current || reduceMotion.matches) {
            return undefined;
          }

          const distance =
            trackRef.current.scrollWidth - sectionRef.current.offsetWidth;

          const tween = gsap.to(trackRef.current, {
            x: -distance,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: () => `+=${distance + window.innerHeight * 0.7}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          return () => tween.scrollTrigger?.kill();
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[var(--color-forest-700)] py-24 text-[var(--color-earth-100)] lg:min-h-screen lg:py-0"
      data-navbar-theme="dark"
      data-navbar-bg="rgba(27, 58, 43, 0.55)"
      data-navbar-color="var(--color-earth-100)"
    >
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[var(--color-forest-400)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--color-forest-900)] blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-center gap-14 px-5 lg:px-12">
        <div
          ref={introRef}
          className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end"
        >
          <div>
            <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-amber-400)]">
              Conservation Response Unit
            </p>
            <h2 className="font-display text-4xl leading-tight lg:text-5xl">
              Gajah yang dulu berkonflik, kini menjaga hutan.
            </h2>
          </div>
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-[var(--color-neutral-200)]">
            CRU Tangkahan mengubah patroli konservasi menjadi kerja bersama:
            gajah, mahout, ranger, dan masyarakat membaca denyut hutan dari
            jarak dekat.
          </p>
        </div>

        <div className="-mx-5 overflow-visible lg:-mx-12">
          <div
            ref={trackRef}
            className="flex w-max flex-col gap-5 px-5 lg:flex-row lg:gap-8 lg:px-[max(3rem,calc((100vw-72rem)/2))] lg:pr-[35vw]"
          >
            {cruCards.map(({ title, eyebrow, description, Icon }) => (
              <article
                key={title}
                className="group relative flex min-h-[360px] w-[calc(100vw-2.5rem)] max-w-[430px] flex-col justify-between overflow-hidden rounded-lg border border-[rgba(232,228,217,0.22)] bg-[rgba(232,228,217,0.08)] p-7 shadow-2xl shadow-[rgba(13,31,22,0.24)] backdrop-blur-md lg:h-[440px] lg:w-[430px] lg:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(232,228,217,0.55)] to-transparent" />
                <div>
                  <Icon
                    size={44}
                    weight="thin"
                    className="mb-10 text-[var(--color-amber-400)] transition-transform duration-500 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-neutral-200)]">
                    {eyebrow}
                  </p>
                  <h3 className="font-display text-3xl leading-tight text-[var(--color-earth-100)]">
                    {title}
                  </h3>
                </div>
                <p className="mt-10 font-sans text-base leading-relaxed text-[var(--color-neutral-200)]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
