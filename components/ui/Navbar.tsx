"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";

export default function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    if (href === "/") {
      window.scrollTo({ top: 0, behavior });
      setIsOpen(false);
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    const navbarOffset = navbarRef.current?.offsetHeight ?? 72;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - navbarOffset - 16;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior,
    });

    window.history.replaceState(null, "", href);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!navbarRef.current) return;
    const triggers: ScrollTrigger[] = [];

    // Set initial transparent state
    gsap.set(navbarRef.current, {
      backgroundColor: "transparent",
      backdropFilter: "blur(0px)",
      WebkitBackdropFilter: "blur(0px)",
      borderColor: "transparent",
      color: "var(--color-earth-100)"
    });

    // 1. Trigger for size and initial transparency vs blur
    triggers.push(ScrollTrigger.create({
      start: "top -20px", // When scrolled down 20px
      end: 99999,
      onToggle: (self) => {
        if (!self.isActive) {
          // Top of page
          gsap.to(navbarRef.current, {
            height: window.innerWidth < 640 ? "64px" : "72px",
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            WebkitBackdropFilter: "blur(0px)",
            borderColor: "transparent",
            color: "var(--color-earth-100)",
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.inOut"
          });
        }
      }
    }));

    triggers.push(ScrollTrigger.create({
      start: "top -80px", // When scrolled down 80px, make it smaller
      end: 99999,
      onToggle: (self) => {
        if (self.isActive) {
          gsap.to(navbarRef.current, {
            height: window.innerWidth < 640 ? "60px" : "60px",
            duration: 0.4,
            ease: "power2.inOut"
          });
        } else {
          // Revert to normal height if we scroll back up, but still blurred if > 20px
          if (window.scrollY > 20) {
            gsap.to(navbarRef.current, {
              height: window.innerWidth < 640 ? "64px" : "72px",
              duration: 0.4,
              ease: "power2.inOut"
            });
          }
        }
      }
    }));

    // 2. Trigger for dynamic colors based on section themes
    const sections = document.querySelectorAll("section[data-navbar-theme], footer[data-navbar-theme]");
    
    sections.forEach((section) => {
      triggers.push(ScrollTrigger.create({
        trigger: section,
        start: "top 72px", // When section hits the bottom of the navbar
        end: "bottom 72px",
        onEnter: () => applyTheme(section),
        onEnterBack: () => applyTheme(section),
      }));
    });

    function applyTheme(section: Element) {
      const bg = section.getAttribute("data-navbar-bg");
      const color = section.getAttribute("data-navbar-color");

      if (!bg || !color) return;

      // Only apply blur and colors if we scrolled past the very top (transparent area)
      if (window.scrollY > 20) {
        gsap.to(navbarRef.current, {
          backgroundColor: bg,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderColor: "rgba(255, 255, 255, 0.08)",
          color: color,
          boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
          duration: 0.4,
          ease: "power2.inOut"
        });
      }
    }
    
    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <nav 
      ref={navbarRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] lg:w-[85%] max-w-[1200px] z-50 flex items-center px-5 lg:px-8 transition-colors border border-transparent rounded-full shadow-lg"
      style={{ height: "72px" }}
    >
      <div className="flex w-full items-center justify-between mx-auto">
        <Link
          href="/"
          className="font-display font-bold text-xl tracking-wide"
          onClick={(event) => scrollToSection(event, "/")}
        >
          TANGKAHAN
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="#kisah"
            className="text-sm font-medium tracking-wide"
            onClick={(event) => scrollToSection(event, "#kisah")}
          >
            Kisah Kami
          </Link>
          <Link
            href="#konservasi"
            className="text-sm font-medium tracking-wide"
            onClick={(event) => scrollToSection(event, "#konservasi")}
          >
            Konservasi
          </Link>
          <Link
            href="#dampak"
            className="text-sm font-medium tracking-wide"
            onClick={(event) => scrollToSection(event, "#dampak")}
          >
            Dampak
          </Link>
          <Link
            href="#kejujuran"
            className="text-sm font-medium tracking-wide"
            onClick={(event) => scrollToSection(event, "#kejujuran")}
          >
            Kejujuran
          </Link>
          <Link 
            href="#kunjungi" 
            className="px-6 py-2.5 rounded-full bg-[var(--color-amber-500)] text-[var(--color-forest-950)] text-sm font-semibold transition-all hover:bg-[var(--color-amber-400)] hover:scale-105"
            onClick={(event) => scrollToSection(event, "#kunjungi")}
          >
            Mulai Perjalanan
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            className="rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-current"
          >
            {isOpen ? (
              <X size={28} weight="thin" color="currentColor" />
            ) : (
              <List size={28} weight="thin" color="currentColor" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="fixed inset-x-4 top-[88px] z-40 flex flex-col space-y-6 rounded-3xl border border-white/10 bg-[rgba(13,31,22,0.82)] p-6 shadow-2xl backdrop-blur-md lg:hidden"
        >
          <Link
            href="#kisah"
            className="text-lg font-medium text-earth-100"
            onClick={(event) => scrollToSection(event, "#kisah")}
          >
            Kisah Kami
          </Link>
          <Link
            href="#konservasi"
            className="text-lg font-medium text-earth-100"
            onClick={(event) => scrollToSection(event, "#konservasi")}
          >
            Konservasi
          </Link>
          <Link
            href="#dampak"
            className="text-lg font-medium text-earth-100"
            onClick={(event) => scrollToSection(event, "#dampak")}
          >
            Dampak
          </Link>
          <Link
            href="#kejujuran"
            className="text-lg font-medium text-earth-100"
            onClick={(event) => scrollToSection(event, "#kejujuran")}
          >
            Kejujuran
          </Link>
          <Link
            href="#kunjungi"
            className="rounded-full bg-[var(--color-amber-500)] px-5 py-3 text-center text-base font-semibold text-[var(--color-forest-950)]"
            onClick={(event) => scrollToSection(event, "#kunjungi")}
          >
            Mulai Perjalanan
          </Link>
        </div>
      )}
    </nav>
  );
}
