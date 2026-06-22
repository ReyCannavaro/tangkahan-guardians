"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap-config";

type ImpactCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  display?: string;
};

export default function ImpactCounter({
  value,
  suffix = "",
  prefix = "",
  display,
}: ImpactCounterProps) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const counter = { value: 0 };

    const tween = gsap.to(counter, {
      value,
      duration: value > 1000 ? 1.9 : 1.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 75%",
        once: true,
      },
      onUpdate: () => setCurrent(Math.round(counter.value)),
    });

    return () => {
      tween.kill();
    };
  }, [value]);

  const formatted =
    display && current === value
      ? display
      : `${prefix}${current.toLocaleString("id-ID")}${suffix}`;

  return <span ref={ref}>{formatted}</span>;
}
