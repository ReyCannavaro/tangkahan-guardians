import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

gsap.defaults({ ease: "power2.out", duration: 0.6 });

export { gsap, ScrollTrigger };
