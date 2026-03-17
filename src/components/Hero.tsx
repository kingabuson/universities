"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Users,
  BookOpen,
  Globe,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { icon: Activity, number: "1,600+", label: "Sectors Tracked", delay: 0 },
  { icon: Users, number: "50M+", label: "Companies", delay: 1.2 },
  { icon: BookOpen, number: "500+", label: "University Partners", delay: 2.4 },
  { icon: Globe, number: "100+", label: "Countries Covered", delay: 3.6 },
];

const positions = [
  "top-[5%] left-[8%]",
  "top-[8%] right-[2%]",
  "bottom-[22%] left-[2%]",
  "bottom-[8%] right-[8%]",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 bg-cream">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-[200px] -right-[100px] rounded-full bg-gradient-radial from-gold/[0.06] to-transparent" />
        <div className="absolute w-[400px] h-[400px] -bottom-[100px] -left-[80px] rounded-full bg-gradient-radial from-navy-400/[0.05] to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(4,34,58,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(4,34,58,.02) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%,black 20%,transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%,black 20%,transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-[1180px] mx-auto px-7 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-sans font-semibold tracking-wider uppercase text-navy-400 bg-navy-400/[0.08] border border-navy-400/[0.12] mb-5">
              For Academic Institutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] font-bold leading-[1.15]">
              Tracxn for
              <br />
              Universities
            </h1>
            <p className="text-lg text-navy-500/70 mt-5 mb-10 max-w-[500px] leading-relaxed font-body">
              Empowering academic institutions with global market insights,
              enabling them to conduct thorough research for case-studies and
              fuel the entrepreneurial spirit.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-sans font-semibold text-sm text-white bg-gradient-to-br from-gold to-gold-500 shadow-[0_4px_20px_rgba(249,161,31,0.3)] hover:translate-y-[-3px] hover:shadow-[0_8px_32px_rgba(249,161,31,0.4)] transition-all duration-300"
            >
              Schedule Demo
              <ArrowRight size={18} />
            </a>
          </ScrollReveal>

          {/* Floating cards visual */}
          <ScrollReveal direction="right">
            <div className="relative w-full aspect-square max-w-[460px] mx-auto">
              {/* Blob */}
              <div className="absolute inset-[12%] bg-gradient-to-br from-navy-400/[0.08] to-gold/[0.06] animate-blob-morph blur-sm" />

              {/* Orbit rings */}
              <div className="absolute inset-[4%] border border-dashed border-navy-400/10 rounded-full animate-orbit-spin" />
              <div className="absolute inset-[-6%] border border-dashed border-navy-400/10 rounded-full animate-orbit-spin-reverse" />

              {/* Stat cards */}
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={`absolute bg-white rounded-2xl p-5 shadow-[0_12px_40px_rgba(4,34,58,0.07)] border border-navy-700/[0.04] z-10 ${positions[i]}`}
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: stat.delay,
                  }}
                >
                  <stat.icon
                    size={20}
                    className={`mb-2 ${
                      i % 2 === 0 ? "text-gold" : "text-navy-400"
                    }`}
                  />
                  <span className="block font-heading text-xl font-bold text-navy-700">
                    {stat.number}
                  </span>
                  <span className="text-xs text-navy-500/60 font-sans font-medium tracking-wide">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-700/30 text-[0.7rem] tracking-wider uppercase font-sans font-medium max-lg:hidden">
        <span>Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-navy-700/20 to-transparent animate-scroll-pulse" />
      </div>
    </section>
  );
}
