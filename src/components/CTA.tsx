"use client";

import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section className="px-7 pb-28 pt-10">
      <div className="max-w-[1180px] mx-auto">
        <ScrollReveal>
          <div className="relative rounded-3xl p-16 md:p-20 text-center overflow-hidden bg-gradient-to-br from-navy-700 via-navy-600 to-[#1a4068]">
            {/* Background decoration */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 20% 50%,rgba(249,161,31,0.08) 0%,transparent 50%),radial-gradient(circle at 80% 50%,rgba(55,139,200,0.08) 0%,transparent 50%)",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-white max-w-[560px] mx-auto mb-9 leading-snug">
                Know how other universities have been leveraging Tracxn
              </h2>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-sans font-semibold text-sm text-white bg-gradient-to-br from-gold to-gold-500 shadow-[0_4px_20px_rgba(249,161,31,0.3)] hover:translate-y-[-3px] hover:shadow-[0_8px_32px_rgba(249,161,31,0.4)] transition-all duration-300"
                >
                  Schedule Demo
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-sans font-semibold text-sm text-white border-2 border-white/50 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                >
                  Talk to Us
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
