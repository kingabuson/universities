"use client";

import { useState, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const citations = [
  {
    title: "Mapping the Startup Ecosystem in India",
    uni: "Dublin City University",
    year: "2023",
    findings: [
      "Startup activity remains heavily concentrated in Bengaluru, Delhi NCR, and Mumbai",
      "Startups outside these clusters create more jobs despite receiving less funding",
    ],
    quote:
      "Tracxn was extensively used to map startup trends, founders\u2019 profiles, and exit patterns",
  },
  {
    title: "Venture Capital and the Gender Financing Gap",
    uni: "University of Oxford",
    year: "2023",
    findings: [
      "Female-founded startups receive disproportionately less VC funding globally",
      "Sector concentration plays a key role in the observed financing gap",
    ],
    quote:
      "Tracxn data was used to analyze funding patterns across 10,000+ startups by founder gender",
  },
  {
    title: "Platform Business Models in Emerging Markets",
    uni: "IIM Ahmedabad",
    year: "2024",
    findings: [
      "Platform businesses show higher survival rates in B2B segments",
      "Network effects drive valuation premiums in marketplace models",
    ],
    quote:
      "Tracxn\u2019s sector classification and business model descriptors enabled systematic firm-level analysis",
  },
  {
    title: "Impact of Government Policy on Startup Ecosystems",
    uni: "National University of Singapore",
    year: "2022",
    findings: [
      "Tax incentives correlate with 2.3x increase in early-stage funding",
      "Regulatory sandboxes accelerate fintech startup formation by 40%",
    ],
    quote:
      "Tracxn funding data was used to quantify policy impact across 15 Asian economies",
  },
  {
    title: "Serial Entrepreneurship and Venture Outcomes",
    uni: "Imperial College London",
    year: "2023",
    findings: [
      "Serial entrepreneurs raise 1.8x more in first rounds than first-time founders",
      "Prior exit experience significantly predicts subsequent venture success",
    ],
    quote:
      "Tracxn founder profiles enabled tracking entrepreneurial journeys across multiple ventures",
  },
  {
    title: "AI Adoption in Healthcare Startups",
    uni: "Stanford University",
    year: "2024",
    findings: [
      "AI-native health startups achieve product-market fit 30% faster",
      "Regulatory barriers remain the primary bottleneck for AI health deployment",
    ],
    quote:
      "Tracxn sector reports and company data powered the cross-country comparison of 500+ health-AI startups",
  },
  {
    title: "The Role of Accelerators in Startup Success",
    uni: "Cambridge Judge Business School",
    year: "2023",
    findings: [
      "Accelerator-backed startups show 2.1x higher Series A conversion rates",
      "Top-tier accelerator alumni attract follow-on funding 60% faster",
    ],
    quote:
      "Tracxn data was used to track accelerator cohort outcomes across a 10-year longitudinal study",
  },
];

function PaperPlaceholder() {
  return (
    <div className="bg-cream-200 rounded-2xl aspect-[3/4] max-h-[360px] border border-navy-700/[0.06] shadow-[0_8px_32px_rgba(4,34,58,0.06)] p-6">
      <div className="w-full h-full bg-white rounded-lg p-6 shadow-sm">
        <div className="h-2.5 bg-cream-300 rounded w-[70%] mb-3" />
        <div className="h-1.5 bg-cream-200 rounded w-[50%] mb-5" />
        <div className="h-1.5 bg-cream-200 rounded w-full mb-3" />
        <div className="h-1.5 bg-cream-200 rounded w-full mb-3" />
        <div className="h-1.5 bg-cream-200 rounded w-[60%]" />
      </div>
    </div>
  );
}

export default function Citations() {
  const [current, setCurrent] = useState(0);
  const total = citations.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const slide = citations[current];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1180px] mx-auto px-7">
        <ScrollReveal>
          <SectionLabel>Research</SectionLabel>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Citations in global
            <br className="max-sm:hidden" />
            academic research
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl">
            <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-14 p-10 md:p-12 bg-gradient-to-br from-cream to-cream-200 rounded-2xl border border-navy-700/[0.04] items-center">
              <div>
                <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-gray-400 mb-3">
                  {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {slide.title}
                </h3>
                <p className="text-sm font-sans font-semibold text-navy-400 mb-5">
                  {slide.uni} &middot; Published in {slide.year}
                </p>
                <ul className="mb-6">
                  {slide.findings.map((f, i) => (
                    <li
                      key={i}
                      className="relative pl-5 mb-2.5 text-navy-500/80 text-[0.95rem] leading-relaxed"
                    >
                      <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-navy-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <blockquote className="border-l-4 border-gold px-6 py-4 my-6 bg-gold/[0.05] rounded-r-xl italic text-navy-500 font-heading text-base leading-relaxed">
                  &ldquo;{slide.quote}&rdquo;
                </blockquote>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 font-sans font-semibold text-sm text-navy-400 hover:text-gold transition-colors"
                >
                  Read the full article here
                  <ArrowRight size={14} />
                </a>
              </div>
              <div className="max-lg:hidden">
                <PaperPlaceholder />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-7">
            <button
              onClick={() => goTo(current - 1)}
              className="w-11 h-11 rounded-full border border-navy-700/[0.12] bg-white flex items-center justify-center text-navy-700 hover:bg-navy-700 hover:text-white hover:border-navy-700 transition-all duration-300 cursor-pointer"
              aria-label="Previous"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="flex gap-2">
              {citations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? "bg-gold scale-130"
                      : "bg-navy-700/[0.12]"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(current + 1)}
              className="w-11 h-11 rounded-full border border-navy-700/[0.12] bg-white flex items-center justify-center text-navy-700 hover:bg-navy-700 hover:text-white hover:border-navy-700 transition-all duration-300 cursor-pointer"
              aria-label="Next"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
