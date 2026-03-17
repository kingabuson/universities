"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ImageIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const sessions = [
  { num: "01", title: "New Batches", desc: "Tailored onboarding for incoming cohorts" },
  { num: "02", title: "Specific Courses (PE, VC etc)", desc: "Deep-dive workshops aligned to course curriculum" },
  { num: "03", title: "Research Associates / Assistants", desc: "Power-user sessions for analytical work" },
  { num: "04", title: "Internship Preparation", desc: "Industry-ready workshops for roles at top firms" },
  { num: "05", title: "Faculty One-on-One", desc: "Personalized sessions for curriculum integration" },
];

const slides = ["Campus Session 1", "Campus Session 2", "Campus Session 3", "Campus Session 4"];

export default function CampusConnect() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(((index % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(current + 1), 3500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, goTo]);

  return (
    <section className="relative py-28 bg-gradient-to-br from-navy-700 via-navy-600 to-[#152d4e] text-white overflow-hidden">
      {/* Texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 80%,rgba(249,161,31,0.06) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(55,139,200,0.06) 0%,transparent 50%)",
        }}
      />

      <div className="max-w-[1180px] mx-auto px-7 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <SectionLabel variant="gold">On Campus</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 after:content-[''] after:block after:w-12 after:h-[3px] after:bg-gradient-to-r after:from-gold after:to-navy-400 after:rounded after:mt-4 after:mx-auto">
              Tracxn on Campus
            </h2>
            <p className="text-white/60 max-w-[580px] mx-auto text-base leading-relaxed">
              Our in-person engagement sessions guide faculty and students to
              leverage Tracxn for academia and beyond.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h3 className="text-gold font-heading font-semibold text-lg tracking-wide mb-7">
                Bespoke Training sessions for:
              </h3>
              <div className="flex flex-col gap-5">
                {sessions.map((s) => (
                  <div key={s.num} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 text-gold flex items-center justify-center font-heading font-bold text-sm">
                      {s.num}
                    </span>
                    <div>
                      <strong className="block text-white text-sm mb-0.5">
                        {s.title}
                      </strong>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <div
                  className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {slides.map((label, i) => (
                    <div key={i} className="min-w-full">
                      <div className="bg-gradient-to-br from-[#1a3a5c] to-[#2a5a8c] rounded-2xl aspect-[16/10] flex flex-col items-center justify-center gap-3 text-white/40 font-sans font-medium text-sm">
                        <ImageIcon size={48} strokeWidth={1.5} />
                        <span>{label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-2.5 justify-center mt-5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      goTo(i);
                      if (timerRef.current) clearInterval(timerRef.current);
                      timerRef.current = setInterval(
                        () => goTo(i + 1),
                        3500
                      );
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === current
                        ? "bg-gold scale-150"
                        : "bg-white/20"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
