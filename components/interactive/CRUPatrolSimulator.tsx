"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "@phosphor-icons/react";
import { cruScenarios } from "@/lib/content";
import {
  CanopyIcon,
  FootprintIcon,
  PatrolIcon,
  RiverIcon,
} from "@/components/illustrations/icons/LineIcons";
import { gsap } from "@/lib/gsap-config";

type Scenario = (typeof cruScenarios)[number];

export default function CRUPatrolSimulator() {
  const [activeScenario, setActiveScenario] = useState<Scenario>(cruScenarios[0]);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [visitedScenarioIds, setVisitedScenarioIds] = useState<string[]>([
    cruScenarios[0].id,
  ]);
  const panelRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mapRef.current,
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".cru-hotspot",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(".cru-hotspot-pulse", {
        scale: 1.08,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }, mapRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      panelRef.current,
      { x: 24, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.35 }
    );
  }, [activeScenario]);

  const handleScenarioSelect = (scenario: Scenario) => {
    setActiveScenario(scenario);
    setSelectedChoice(null);
    setVisitedScenarioIds((current) =>
      current.includes(scenario.id) ? current : [...current, scenario.id]
    );
  };

  const isComplete = visitedScenarioIds.length === cruScenarios.length;

  return (
    <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
      <div
        ref={mapRef}
        className="relative aspect-square overflow-hidden rounded-3xl border border-[rgba(232,228,217,0.16)] bg-[var(--color-forest-800)] p-5 shadow-2xl shadow-[rgba(13,31,22,0.22)] lg:aspect-[4/3]"
        aria-label="Peta simulasi patroli CRU"
      >
        <div className="absolute left-5 top-5 z-10 rounded-full border border-[rgba(232,228,217,0.18)] bg-[rgba(13,31,22,0.42)] px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-neutral-200)] backdrop-blur-sm">
          {visitedScenarioIds.length}/{cruScenarios.length} skenario dibaca
        </div>

        <div className="absolute inset-0 opacity-70">
          <div className="absolute left-[8%] top-[12%] h-28 w-28 rounded-full border border-[rgba(232,228,217,0.16)]" />
          <div className="absolute right-[12%] top-[14%] h-36 w-36 rounded-full border border-[rgba(232,228,217,0.12)]" />
          <div className="absolute bottom-[10%] left-[22%] h-40 w-52 rounded-[50%] border border-[rgba(232,228,217,0.12)]" />
        </div>

        <RiverIcon className="absolute bottom-[18%] left-[8%] h-28 w-28 text-[rgba(232,228,217,0.28)] lg:h-36 lg:w-36" />
        <CanopyIcon className="absolute right-[14%] top-[16%] h-24 w-24 text-[rgba(232,228,217,0.26)] lg:h-32 lg:w-32" />
        <PatrolIcon className="absolute left-[16%] top-[52%] h-20 w-20 text-[rgba(232,228,217,0.22)] lg:h-28 lg:w-28" />

        <svg className="absolute inset-0 h-full w-full text-[rgba(229,188,108,0.34)]" aria-hidden="true">
          <path
            d="M 90 160 C 180 90, 300 120, 380 210 S 570 300, 680 170"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 10"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {cruScenarios.map((scenario, index) => {
          const isActive = scenario.id === activeScenario.id;

          return (
            <button
              key={scenario.id}
              type="button"
              className="cru-hotspot absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[var(--color-amber-500)] bg-[rgba(217,164,65,0.18)] text-[var(--color-earth-100)] outline-none transition-colors focus:ring-2 focus:ring-[var(--color-amber-400)] focus:ring-offset-2 focus:ring-offset-[var(--color-forest-800)]"
              style={{ left: scenario.x, top: scenario.y }}
              aria-label={`Buka skenario: ${scenario.title}`}
              aria-pressed={isActive}
              onClick={() => handleScenarioSelect(scenario)}
            >
              <span className="cru-hotspot-pulse absolute inset-1 rounded-full bg-[rgba(217,164,65,0.16)]" />
              {visitedScenarioIds.includes(scenario.id) && (
                <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border border-[var(--color-forest-800)] bg-[var(--color-amber-400)]" />
              )}
              <span className="relative flex h-full w-full items-center justify-center">
                {index === 0 ? (
                  <FootprintIcon size={24} />
                ) : index === 1 ? (
                  <CanopyIcon size={24} />
                ) : (
                  <PatrolIcon size={24} />
                )}
              </span>
            </button>
          );
        })}
      </div>

      <div
        ref={panelRef}
        className="rounded-3xl border border-[rgba(232,228,217,0.18)] bg-[rgba(232,228,217,0.09)] p-6 backdrop-blur-md lg:p-8"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber-400)]">
              Skenario Patroli
            </p>
            <h3 className="font-display text-2xl leading-tight text-[var(--color-earth-100)]">
              {activeScenario.title}
            </h3>
          </div>
          <button
            type="button"
            className="rounded-full p-2 text-[var(--color-neutral-200)] transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-amber-400)]"
            aria-label="Reset pilihan skenario"
            onClick={() => setSelectedChoice(null)}
          >
            <X size={20} weight="thin" />
          </button>
        </div>

        <p className="font-sans text-base leading-relaxed text-[var(--color-neutral-200)]">
          {activeScenario.description}
        </p>

        <div className="mt-7 grid gap-3">
          {activeScenario.choices.map((choice, index) => (
            <button
              key={choice.text}
              type="button"
              className="rounded-full border border-current px-5 py-3 text-left font-sans text-sm font-semibold text-[var(--color-earth-100)] transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-amber-400)]"
              onClick={() => setSelectedChoice(index)}
            >
              {choice.text}
            </button>
          ))}
        </div>

        <div className="mt-7 min-h-[128px] rounded-2xl border border-[rgba(232,228,217,0.14)] bg-[rgba(13,31,22,0.22)] p-5">
          {selectedChoice === null ? (
            <p className="font-sans text-sm leading-relaxed text-[var(--color-neutral-400)]">
              Pilih salah satu tindakan untuk melihat konsekuensi naratifnya.
              Tidak ada skor benar-salah; yang dipelajari adalah trade-off di
              lapangan.
            </p>
          ) : (
            <>
              <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-400)]">
                Konsekuensi
              </p>
              <p className="font-sans text-sm leading-relaxed text-[var(--color-neutral-200)]">
                {activeScenario.choices[selectedChoice].consequence}
              </p>
            </>
          )}
        </div>

        {isComplete && (
          <div className="mt-5 rounded-2xl border border-[rgba(229,188,108,0.34)] bg-[rgba(217,164,65,0.1)] p-5">
            <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-400)]">
              Ringkasan patroli
            </p>
            <p className="font-sans text-sm leading-relaxed text-[var(--color-neutral-200)]">
              CRU bekerja bukan dengan satu keputusan heroik, tetapi dengan
              rangkaian keputusan kecil: mengurangi risiko, membaca konteks,
              menjaga bukti, dan tetap memberi ruang bagi warga serta satwa.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
