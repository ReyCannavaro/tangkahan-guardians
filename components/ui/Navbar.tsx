"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";
import { List } from "@phosphor-icons/react";
import Link from "next/link";

export default function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
      behavior: "smooth",
    });
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
            href="#kunjungi" 
            className="px-6 py-2.5 rounded-full bg-[var(--color-amber-500)] text-[var(--color-forest-950)] text-sm font-semibold transition-all hover:bg-[var(--color-amber-400)] hover:scale-105"
            onClick={(event) => scrollToSection(event, "#kunjungi")}
          >
            Mulai Perjalanan
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <List size={28} weight="thin" color="currentColor" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[80px] bg-black/50 backdrop-blur-md z-40 p-5 flex flex-col space-y-6 lg:hidden border-t border-white/10 rounded-2xl mx-4">
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
        </div>
      )}
    </nav>
  );
}
