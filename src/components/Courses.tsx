"use client";

import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const points = [
  {
    num: "1",
    title: "Bring real-world insights to class",
    desc: "Make lessons engaging and connected to today\u2019s business landscape.",
  },
  {
    num: "2",
    title: "Shape industry-ready graduates",
    desc: "Develop students\u2019 analytical and problem-solving skills through practical, real-world projects.",
  },
  {
    num: "3",
    title: "Assignments Live across Universities",
    desc: "Analyzing the investment lifecycle from early-stage startups to sector portfolios and large-cap IPOs.",
  },
];

export default function Courses() {
  return (
    <section className="py-28 bg-cream">
      <div className="max-w-[1180px] mx-auto px-7">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel align="left">Curriculum</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold text-left mb-9 after:content-[''] after:block after:w-12 after:h-[3px] after:bg-gradient-to-r after:from-gold after:to-navy-400 after:rounded after:mt-4">
                Tracxn in your Courses
              </h2>
              <div className="flex flex-col gap-7 mb-8">
                {points.map((p) => (
                  <div key={p.num} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-navy-700 to-navy-500 text-gold flex items-center justify-center font-heading font-bold text-base">
                      {p.num}
                    </span>
                    <div>
                      <strong className="block text-navy-700 mb-1 font-heading text-base">
                        {p.title}
                      </strong>
                      <p className="text-sm text-navy-500/60 leading-relaxed font-body">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 font-sans font-semibold text-sm text-navy-400 hover:text-gold hover:gap-2.5 transition-all"
              >
                Experience how Tracxn powers curriculum with real-world projects?
                Book a Demo now
                <ArrowRight size={14} />
              </a>
            </div>
            <div className="bg-cream-200 rounded-2xl aspect-[4/3] overflow-hidden border border-navy-700/[0.06] shadow-[0_8px_32px_rgba(4,34,58,0.06)] p-6">
              <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-7 bg-cream-100 border-b border-black/[0.06] flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
                <div className="p-4">
                  <div className="h-2 bg-cream-200 rounded w-3/5 mb-2.5" />
                  <div className="h-2 bg-cream-200 rounded w-4/5 mb-2.5" />
                  <div className="h-2 bg-cream-200 rounded w-2/5 mb-4" />
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="aspect-square rounded-md bg-cream-100 border border-black/[0.04]" />
                    <div className="aspect-square rounded-md bg-cream-100 border border-black/[0.04]" />
                    <div className="aspect-square rounded-md bg-cream-100 border border-black/[0.04]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
