"use client";

import { Play } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const videos = [
  {
    name: "Khyati Khandelwal",
    role: "Indian School of Business",
    quote:
      "I just attended the Tracxn workshop and it was pretty amazing, we firstly learnt that Tracxn had so many capabilities, especially for a startup founder when it comes to competitor analysis, finding out a lot about the investors, how easy it is to actually use the entire platform. So I think it was a pretty cool research tool and I can\u2019t wait to start leveraging it.",
  },
  {
    name: "Rohil Dokani",
    role: "Indian School of Business",
    quote:
      "I started using Tracxn when I was doing an internship in a VC fund, a couple of years back and it was used extensively by the analysts and the partners, that was the first introduction to Tracxn as a platform. I also did a master of finance in Germany in Frankfurt and It was surprising that Tracxn was used exclusively there, because there was a lot of coverage for US based companies and Indian subsidies.",
  },
  {
    name: "Ganesh Jaju",
    role: "Xavier Institute of Management and Entrepreneurship",
    quote:
      "So we have been provided with Tracxn as a platform. It is a database platform that has immense features. I am continuously using Tracxn from the last 10-12 months. It\u2019s been very useful in analyzing financial data, mainly of unlisted companies, finding out new startups across the location across India or globally.",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1180px] mx-auto px-7">
        <ScrollReveal>
          <SectionLabel>Student Stories</SectionLabel>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            How Students use Tracxn
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div
                key={v.name}
                className="bg-cream rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(4,34,58,0.05)] border border-navy-700/[0.04] hover:translate-y-[-6px] hover:shadow-[0_16px_48px_rgba(4,34,58,0.1)] transition-all duration-400"
              >
                <div className="relative aspect-video bg-gradient-to-br from-[#0f1923] to-[#1a2d42] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/90 text-white flex items-center justify-center shadow-[0_8px_28px_rgba(249,161,31,0.35)] hover:scale-110 transition-transform cursor-pointer pl-1">
                    <Play size={22} fill="currentColor" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-heading font-semibold text-lg mb-1">
                    {v.name}
                  </h4>
                  <p className="text-sm font-sans font-semibold text-navy-400 mb-3">
                    {v.role}
                  </p>
                  <p className="text-sm text-navy-500/60 italic leading-relaxed">
                    &ldquo;{v.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
