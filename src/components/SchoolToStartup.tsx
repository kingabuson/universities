"use client";

import { ArrowRight, User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const professors = [
  {
    name: "Prof Chengwei Liu",
    uni: "Imperial College London",
    desc: "Talks about the role of luck and fear of failure for student entrepreneurs, and how academic institutions can better support entrepreneurship.",
  },
  {
    name: "Professor Thomas Hellmann",
    uni: "University of Oxford",
    desc: "Explores why blindly imitating Silicon Valley can backfire, what makes founders resilient, & how universities can rethink entrepreneurship education.",
  },
  {
    name: "Prof. Allan O\u2019Connor",
    uni: "University of South Australia",
    desc: "A high-school dropout turned entrepreneurship Professor talks about purpose-driven ventures & that the role of education is nothing short of inspiring.",
  },
  {
    name: "Prof Erkko Autio",
    uni: "Imperial College London",
    desc: "Talks about the importance of social entrepreneurship & how universities act as catalysts by fostering innovation, & connecting stakeholders and startups.",
  },
  {
    name: "Professor Jaideep Prabhu",
    uni: "Judge Business School, Cambridge University",
    desc: "Talks about how a university can contribute towards building a start up and its founder from ground-up.",
  },
  {
    name: "Professor Jan Kratzer",
    uni: "Technical University Berlin",
    desc: "Talks about the change in entrepreneurship, latest trends and see entrepreneurship from a different angle.",
  },
];

export default function SchoolToStartup() {
  return (
    <section className="py-28 bg-cream">
      <div className="max-w-[1180px] mx-auto px-7">
        <ScrollReveal>
          <SectionLabel>Faculty Insights</SectionLabel>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            School to Startup:
            <br className="max-sm:hidden" />
            Insights from academia
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {professors.map((prof) => (
              <div
                key={prof.name}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(4,34,58,0.05)] border border-navy-700/[0.04] hover:translate-y-[-8px] hover:shadow-[0_16px_48px_rgba(4,34,58,0.1)] hover:border-navy-700/[0.08] transition-all duration-400"
              >
                <div className="h-[200px] bg-gradient-to-br from-cream-200 to-cream-300 flex items-center justify-center">
                  <User size={40} className="text-cream-500" strokeWidth={1.5} />
                </div>
                <div className="p-6">
                  <h4 className="font-heading font-semibold text-lg mb-1">
                    {prof.name}
                  </h4>
                  <p className="text-sm font-sans font-semibold text-navy-400 mb-3">
                    {prof.uni}
                  </p>
                  <p className="text-sm text-navy-500/60 leading-relaxed mb-3">
                    {prof.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 font-sans font-semibold text-sm text-navy-400 hover:text-gold hover:gap-2.5 transition-all"
                  >
                    Watch now
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 font-sans font-semibold text-sm text-navy-400 hover:text-gold px-6 py-2.5 rounded-lg border border-navy-400/20 bg-navy-400/[0.04] hover:border-gold hover:bg-gold/[0.04] transition-all"
            >
              View All
              <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
