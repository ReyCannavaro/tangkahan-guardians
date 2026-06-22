import Hero from "@/components/sections/Hero";
import TheWound from "@/components/sections/TheWound";
import TheTurn from "@/components/sections/TheTurn";

export default function Home() {
  return (
    <main>
      <Hero />
      <TheWound />
      <TheTurn />

      {/* CRU System */}
      <section 
        className="min-h-screen py-24 lg:py-40 px-5 flex flex-col items-center justify-center bg-[var(--color-forest-700)]"
        data-navbar-theme="dark"
        data-navbar-bg="rgba(27, 58, 43, 0.55)"
        data-navbar-color="var(--color-earth-100)"
      >
        <h2 className="font-display text-4xl lg:text-5xl mb-6 text-[var(--color-earth-100)]">CRU System</h2>
      </section>

      {/* Coexistence */}
      <section 
        className="min-h-screen py-24 lg:py-40 px-5 flex flex-col items-center justify-center bg-[var(--color-earth-100)] text-[var(--color-neutral-900)]"
        data-navbar-theme="light"
        data-navbar-bg="rgba(232, 228, 217, 0.65)"
        data-navbar-color="var(--color-neutral-900)"
      >
        <h2 className="font-display text-4xl lg:text-5xl mb-6">Coexistence</h2>
      </section>

      {/* Impact Stats */}
      <section 
        className="min-h-[80vh] py-24 lg:py-40 px-5 flex flex-col items-center justify-center bg-[var(--color-neutral-50)] text-[var(--color-neutral-900)]"
        data-navbar-theme="light"
        data-navbar-bg="rgba(250, 250, 248, 0.7)"
        data-navbar-color="var(--color-neutral-900)"
      >
        <h2 className="font-display text-4xl lg:text-5xl mb-6">Impact Stats</h2>
      </section>

      {/* Still Learning */}
      <section 
        className="min-h-screen py-24 lg:py-40 px-5 flex flex-col items-center justify-center bg-[var(--color-earth-900)]"
        data-navbar-theme="dark"
        data-navbar-bg="rgba(61, 46, 31, 0.6)"
        data-navbar-color="var(--color-earth-100)"
      >
        <h2 className="font-display text-4xl lg:text-5xl mb-6 text-[var(--color-earth-100)]">Still Learning</h2>
      </section>

      {/* Footer */}
      <section 
        className="min-h-[50vh] py-12 px-5 flex flex-col items-center justify-center bg-[var(--color-neutral-900)] text-[var(--color-neutral-400)]"
        data-navbar-theme="dark"
        data-navbar-bg="rgba(26, 24, 20, 0.8)"
        data-navbar-color="var(--color-neutral-400)"
      >
        <p>Footer Content</p>
      </section>
    </main>
  );
}
