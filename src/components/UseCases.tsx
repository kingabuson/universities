"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  BookOpen,
  Library,
  Lightbulb,
  BarChart3,
  Briefcase,
  Users,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const tabs = [
  {
    label: "Universities",
    icon: BookOpen,
    title: "Strengthen your incubation portfolio",
    points: [
      "Discover early-stage and pre-seed startups across your focus sectors and geographies.",
      "Conduct quick due diligence with access to company, founder, and financial data.",
      "Identify active investors and potential next-round funders for your portfolio startups.",
    ],
  },
  {
    label: "Libraries",
    icon: Library,
    title: "Power your library with market intelligence",
    points: [
      "Give researchers access to startup and funding data across 1,600+ sectors.",
      "Provide structured datasets for academic papers and dissertations.",
      "Complement existing library databases with real-time private market data.",
    ],
  },
  {
    label: "Aspiring entrepreneurs",
    icon: Lightbulb,
    title: "Boost your entrepreneurial journey",
    points: [
      "Research competitors, market size, and funding trends for your startup idea.",
      "Discover potential investors aligned with your sector and stage.",
      "Learn from successful startup trajectories and founder profiles.",
    ],
  },
  {
    label: "Entrepreneurship cells",
    icon: BarChart3,
    title: "Boost your entrepreneurship cells and clubs",
    points: [
      "Access detailed financials, valuations, and cap tables to build stronger, data-backed case studies.",
      "Track sectoral trends and market shifts to support innovation-driven entrepreneurship activities.",
      "Use Tracxn reports to present the latest insights and opportunities across global ecosystems.",
    ],
  },
  {
    label: "Incubation centers",
    icon: Briefcase,
    title: "Strengthen your incubation portfolio",
    points: [
      "Discover early-stage and pre-seed startups across your focus sectors and geographies.",
      "Conduct quick due diligence with access to company, founder, and financial data.",
      "Identify active investors and potential next-round funders for your portfolio startups.",
    ],
  },
  {
    label: "Placement committees",
    icon: Users,
    title: "Empower your placement committees",
    points: [
      "Map high-growth companies actively hiring across sectors and geographies.",
      "Identify startups with recent funding rounds that are scaling their teams.",
      "Give students data-backed insights to target the right career opportunities.",
    ],
  },
];

function MockupScreen() {
  return (
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
  );
}

export default function UseCases() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activate = useCallback(
    (index: number) => {
      setActive(index);
      setProgressKey((k) => k + 1);
    },
    []
  );

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!paused) {
        setActive((prev) => (prev + 1) % tabs.length);
        setProgressKey((k) => k + 1);
      }
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section className="py-28 bg-cream">
      <div className="max-w-[1180px] mx-auto px-7">
        <ScrollReveal>
          <SectionLabel>Use Cases</SectionLabel>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Designed to solve use cases
            <br className="max-sm:hidden" />
            for Universities
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-12">
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              const isActive = active === i;
              return (
                <button
                  key={tab.label}
                  onClick={() => {
                    activate(i);
                    if (timerRef.current) clearInterval(timerRef.current);
                    timerRef.current = setInterval(() => {
                      if (!paused) {
                        setActive((prev) => (prev + 1) % tabs.length);
                        setProgressKey((k) => k + 1);
                      }
                    }, 5000);
                  }}
                  className={`relative flex items-center gap-2 px-5 py-3 rounded-xl font-sans font-semibold text-sm border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isActive
                      ? "border-navy-700 text-navy-700 bg-white shadow-[0_4px_16px_rgba(4,34,58,0.06)]"
                      : "border-navy-700/[0.08] text-navy-500/60 bg-white hover:border-navy-400 hover:text-navy-700"
                  }`}
                >
                  <Icon
                    size={18}
                    className={`transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-50"
                    }`}
                  />
                  {tab.label}
                  {isActive && (
                    <span
                      key={progressKey}
                      className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-gold to-navy-400 rounded-b-lg animate-tab-progress"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div key={active} className="animate-fadeSlideIn">
                <h3 className="text-2xl font-semibold mb-6">
                  {tabs[active].title}
                </h3>
                <ul className="flex flex-col gap-4">
                  {tabs[active].points.map((point, i) => (
                    <li
                      key={i}
                      className="relative pl-8 text-navy-500/80 text-base leading-relaxed"
                    >
                      <span className="absolute left-0 top-[7px] w-3 h-3 rounded-full bg-gradient-to-br from-gold to-navy-400 opacity-70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <MockupScreen />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
