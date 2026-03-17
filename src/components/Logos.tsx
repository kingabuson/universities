"use client";

const universities = [
  "ISB",
  "University of Sydney",
  "IIM Ahmedabad",
  "IIT Bombay",
  "BITS Pilani",
  "NUS Singapore",
  "IIM Bangalore",
  "IIT Delhi",
  "SP Jain",
  "XLRI",
  "IIM Calcutta",
  "IIFT Delhi",
];

export default function Logos() {
  const doubled = [...universities, ...universities];

  return (
    <section className="py-11 bg-white border-y border-navy-700/5">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-center text-xs font-sans font-semibold tracking-[0.12em] uppercase text-gray-400 mb-5">
          Trusted by leading institutions worldwide
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-5 w-max animate-marquee-left marquee-track">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex-shrink-0 font-heading text-base font-semibold text-navy-500 opacity-45 hover:opacity-85 whitespace-nowrap px-5 py-2.5 border border-navy-500/[0.08] rounded-lg bg-navy-500/[0.02] transition-all duration-300 hover:border-navy-500/15 hover:bg-navy-500/[0.04]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
