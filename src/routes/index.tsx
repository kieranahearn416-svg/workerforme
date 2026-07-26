import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-dvh">
      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 z-50 w-full bg-[#FDF8F0]/80 backdrop-blur-md border-b border-[#E8D5A3]/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" onClick={() => scrollTo("hero")}>
            <img src="/logo.svg" alt="Village Doré" className="h-10 w-auto" />
          </a>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollTo("experiences")}
              className="font-body text-sm font-medium tracking-widest uppercase text-[#6B5D4F] hover:text-[#C8963E] transition-colors"
            >
              Experiences
            </button>
            <button
              onClick={() => scrollTo("story")}
              className="font-body text-sm font-medium tracking-widest uppercase text-[#6B5D4F] hover:text-[#C8963E] transition-colors"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollTo("reserve")}
              className="font-body text-sm font-medium tracking-widest uppercase text-[#C8963E] border border-[#C8963E] px-4 py-2 hover:bg-[#C8963E] hover:text-white transition-colors"
            >
              Reserve
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-[#6B5D4F] transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#6B5D4F] transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#6B5D4F] transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-[#E8D5A3]/30 bg-[#FDF8F0]/95 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-4 px-6 py-6">
              <button
                onClick={() => scrollTo("experiences")}
                className="font-body text-sm font-medium tracking-widest uppercase text-[#6B5D4F] text-left"
              >
                Experiences
              </button>
              <button
                onClick={() => scrollTo("story")}
                className="font-body text-sm font-medium tracking-widest uppercase text-[#6B5D4F] text-left"
              >
                Our Story
              </button>
              <button
                onClick={() => scrollTo("reserve")}
                className="font-body text-sm font-medium tracking-widest uppercase text-[#C8963E] text-left"
              >
                Reserve
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section
        id="hero"
        className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pt-20"
        style={{
          background: `
            linear-gradient(180deg,
              #FDF8F0 0%,
              #FBF6ED 8%,
              #E8D5A3 25%,
              #C8963E 38%,
              #C17A4E 48%,
              #9B7BC0 62%,
              #C4B5D8 72%,
              #3D4F28 85%,
              #2B3A1E 95%,
              #2B2318 100%
            )
          `,
        }}
      >
        {/* Warm golden overlay glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 55%, rgba(200, 150, 62, 0.25) 0%, transparent 70%),
              radial-gradient(ellipse 60% 30% at 50% 30%, rgba(232, 213, 163, 0.3) 0%, transparent 60%),
              radial-gradient(circle at 80% 75%, rgba(155, 123, 192, 0.12) 0%, transparent 40%),
              radial-gradient(circle at 20% 80%, rgba(61, 79, 40, 0.15) 0%, transparent 35%)
            `,
          }}
        />

        {/* Subtle texture dots */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #2B2318 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src="/logo.svg"
            alt="Village Doré — Provence"
            className="mb-8 w-72 sm:w-80 md:w-96 drop-shadow-[0_4px_20px_rgba(43,35,24,0.3)]"
          />

          {/* Headline */}
          <h1 className="mb-6 max-w-2xl text-balance font-heading text-4xl font-bold leading-tight tracking-wide text-[#FDF8F0] sm:text-5xl md:text-6xl lg:text-7xl">
            An ancient village.
            <br />
            Reborn as your private retreat.
          </h1>

          {/* Subheadline */}
          <p className="mb-10 font-heading text-xl font-normal tracking-[0.25em] text-[#E8D5A3] sm:text-2xl">
            Provence, France
          </p>

          {/* CTA */}
          <button
            onClick={() => scrollTo("reserve")}
            className="inline-block rounded-sm border border-[#E8D5A3] bg-[#E8D5A3]/10 px-10 py-4 font-body text-sm font-medium tracking-[0.2em] uppercase text-[#E8D5A3] backdrop-blur-sm transition-all hover:bg-[#E8D5A3] hover:text-[#2B2318]"
          >
            Reserve Your Stay
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E8D5A3"
            strokeWidth="1.5"
            opacity="0.7"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* ===== EXPERIENCE PILLARS ===== */}
      <section id="experiences" className="bg-[#FBF6ED] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section header */}
          <div className="mb-16 text-center">
            <p className="mb-3 font-body text-xs font-medium tracking-[0.3em] uppercase text-[#C8963E]">
              Experience
            </p>
            <h2 className="font-heading text-4xl font-semibold tracking-wide text-[#2B2318] sm:text-5xl">
              The Art of Slow Living
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#C8963E]/40" />
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Cycling */}
            <div className="group rounded-sm border border-[#C4B8AC]/30 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8D5A3]/20">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C8963E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="5.5" cy="17.5" r="3.5" />
                  <circle cx="18.5" cy="17.5" r="3.5" />
                  <path d="M15 6a1 1 0 100-2 1 1 0 000 2zm-3 11.5V14l-3-3 4-3 2 3h2" />
                  <path d="M9 17.5H5.5" />
                  <path d="M18.5 17.5H15" />
                </svg>
              </div>
              <h3 className="mb-3 font-heading text-2xl font-semibold tracking-wide text-[#2B2318]">
                Cycling
              </h3>
              <p className="font-body text-base leading-relaxed text-[#6B5D4F]">
                Ride through lavender fields and vineyards on curated routes. Wind
                past ancient stone villages, olive groves, and sun-drenched
                hillsides — at your own pace.
              </p>
            </div>

            {/* Wellness */}
            <div className="group rounded-sm border border-[#C4B8AC]/30 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#C4B5D8]/20">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9B7BC0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12V6a2 2 0 012-2h12a2 2 0 012 2v6" />
                  <path d="M16 22v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4" />
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="mb-3 font-heading text-2xl font-semibold tracking-wide text-[#2B2318]">
                Wellness
              </h3>
              <p className="font-body text-base leading-relaxed text-[#6B5D4F]">
                Restore body and mind with spa treatments in ancient stone walls.
                Soak in thermal pools, practice yoga among cypress trees, and let
                Provence quiet your soul.
              </p>
            </div>

            {/* Fine Dining */}
            <div className="group rounded-sm border border-[#C4B8AC]/30 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#3D4F28]/10">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3D4F28"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 10h18" />
                  <path d="M3 14h18" />
                  <path d="M12 6v12" />
                  <path d="M8 2l4 4 4-4" />
                  <path d="M8 22l4-4 4 4" />
                </svg>
              </div>
              <h3 className="mb-3 font-heading text-2xl font-semibold tracking-wide text-[#2B2318]">
                Fine Dining
              </h3>
              <p className="font-body text-base leading-relaxed text-[#6B5D4F]">
                Farm-to-table Provençal cuisine under the stars. Our chef sources
                from local markets and our own gardens — each meal a celebration of
                the land.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section id="story" className="relative overflow-hidden bg-[#FDF8F0] py-24 sm:py-32">
        {/* Background decoration */}
        <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-96 w-96 rounded-full bg-[#E8D5A3]/10" />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
          <div className="h-80 w-80 rounded-full bg-[#C4B5D8]/8" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 font-body text-xs font-medium tracking-[0.3em] uppercase text-[#C17A4E]">
            Our Story
          </p>
          <h2 className="mb-8 font-heading text-4xl font-semibold tracking-wide text-[#2B2318] sm:text-5xl">
            A Village Comes Home
          </h2>
          <div className="mx-auto mb-10 h-px w-16 bg-[#C8963E]/40" />

          <div className="space-y-6 font-body text-lg leading-relaxed text-[#6B5D4F]">
            <p>
              In the 11th century, Cistercian monks built a small village on a
              sun-drenched hillside in Provence. For centuries, its stone walls
              sheltered quiet lives of prayer, harvest, and craft — until the
              village was slowly abandoned, left to the lavender and the wind.
            </p>
            <p>
              Forgotten for generations, it was discovered by a visionary who saw
              not ruins, but a sanctuary. Over years of painstaking restoration,
              each stone building was brought back to life — transformed into
              exquisite luxury accommodations while preserving the soul of the
              original architecture.
            </p>
            <p>
              Today, Village Doré welcomes guests from around the world. Here,
              among golden stone and ancient cypress, you are invited to slow down,
              breathe deeply, and rediscover the beauty of a life unhurried.
            </p>
          </div>
        </div>
      </section>

      {/* ===== RESERVE YOUR STAY ===== */}
      <section id="reserve" className="bg-[#FBF6ED] py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 font-body text-xs font-medium tracking-[0.3em] uppercase text-[#C8963E]">
              Inquire
            </p>
            <h2 className="font-heading text-4xl font-semibold tracking-wide text-[#2B2318] sm:text-5xl">
              Reserve Your Stay
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#C8963E]/40" />
            <p className="mt-4 font-body text-base text-[#6B5D4F]">
              We'll respond within 24 hours to confirm availability and begin
              crafting your Provençal retreat.
            </p>
          </div>

          <form
            className="space-y-6 rounded-sm border border-[#C4B8AC]/30 bg-white p-8 shadow-sm sm:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="mb-2 block font-body text-sm font-medium tracking-wide text-[#2B2318]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-[#C4B8AC] bg-transparent px-0 py-3 font-body text-base text-[#2B2318] placeholder-[#9E9082] transition-colors focus:border-[#C8963E] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="mb-2 block font-body text-sm font-medium tracking-wide text-[#2B2318]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b border-[#C4B8AC] bg-transparent px-0 py-3 font-body text-base text-[#2B2318] placeholder-[#9E9082] transition-colors focus:border-[#C8963E] focus:outline-none"
                />
              </div>

              {/* Check-in */}
              <div>
                <label
                  htmlFor="checkin"
                  className="mb-2 block font-body text-sm font-medium tracking-wide text-[#2B2318]"
                >
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkin"
                  name="checkin"
                  className="w-full border-b border-[#C4B8AC] bg-transparent px-0 py-3 font-body text-base text-[#2B2318] transition-colors focus:border-[#C8963E] focus:outline-none"
                />
              </div>

              {/* Check-out */}
              <div>
                <label
                  htmlFor="checkout"
                  className="mb-2 block font-body text-sm font-medium tracking-wide text-[#2B2318]"
                >
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkout"
                  name="checkout"
                  className="w-full border-b border-[#C4B8AC] bg-transparent px-0 py-3 font-body text-base text-[#2B2318] transition-colors focus:border-[#C8963E] focus:outline-none"
                />
              </div>

              {/* Guests */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="guests"
                  className="mb-2 block font-body text-sm font-medium tracking-wide text-[#2B2318]"
                >
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  className="w-full border-b border-[#C4B8AC] bg-transparent px-0 py-3 font-body text-base text-[#2B2318] transition-colors focus:border-[#C8963E] focus:outline-none"
                >
                  <option value="">Select…</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6+">6+ Guests</option>
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block font-body text-sm font-medium tracking-wide text-[#2B2318]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your ideal stay…"
                  className="w-full border-b border-[#C4B8AC] bg-transparent px-0 py-3 font-body text-base text-[#2B2318] placeholder-[#9E9082] transition-colors focus:border-[#C8963E] focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="inline-block rounded-sm bg-[#C8963E] px-12 py-4 font-body text-sm font-medium tracking-[0.2em] uppercase text-white transition-colors hover:bg-[#B8862D]"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#2B2318] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <img
              src="/logo.svg"
              alt="Village Doré"
              className="mb-6 h-16 w-auto brightness-[10] opacity-80"
            />

            <p className="mb-2 font-heading text-lg tracking-[0.15em] text-[#C4B8AC]">
              Provence, France
            </p>

            {/* Divider */}
            <div className="my-6 h-px w-12 bg-[#C8963E]/30" />

            <p className="font-body text-sm tracking-widest uppercase text-[#8B7B6B]">
              Coming Summer 2026
            </p>

            <p className="mt-8 font-body text-xs text-[#6B5D4F]">
              &copy; {new Date().getFullYear()} Village Doré. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
