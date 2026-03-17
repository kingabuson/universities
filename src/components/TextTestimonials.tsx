"use client";

import ScrollReveal from "./ScrollReveal";

interface Testimonial {
  name: string;
  role: string;
  initials: string;
  quote: string;
}

const faculty: Testimonial[] = [
  {
    name: "Dr. Jeemol Unni",
    role: "Professor, Economics",
    initials: "JU",
    quote:
      "Tracxn is an excellent choice if you need a structured, up-to-date view of companies, especially for classification, sector analysis, or market mapping. For time series analysis, however, supplementing with additional financial datasets may be necessary. Using Tracxn for my research on platform businesses. Given the evolving definitions in this space, the detailed descriptors such as Short Description, Overview, Sector, and Business Models help me clearly classify each firm as a platform or non-platform business.",
  },
  {
    name: "Arnab Bhattacharya",
    role: "Associate Professor, Finance & Control Group",
    initials: "AB",
    quote:
      "Tracxn Technologies provides an excellent global database on early-stage fundraising by start-ups across different stages, industries & geographies. I have been using the Tracxn database for my MBA as well as executive education teaching in core courses such as Corporate Finance, as well as elective courses such as Investment Analysis and Portfolio Management, Entrepreneurial Financing, Private Equity, Venture Capital & Alternate Investments, and Business Valuation.",
  },
  {
    name: "Dr. Anuja Agrawal",
    role: "Adjunct Faculty",
    initials: "AA",
    quote:
      "I have started recommending Tracxn to my students for their data needs, and I personally like Tracxn, it\u2019s quite useful! I am also exploring ways to integrate Tracxn into my upcoming course in Strategic Management & projects for my students, as I see strong potential for its application in management courses.",
  },
  {
    name: "Dr. Vinod Thakur",
    role: "Assistant Professor",
    initials: "VT",
    quote:
      "Tracxn has been an invaluable resource for my academic research and teaching. It provides deep market insights on emerging trends, especially in the start-up ecosystem. I highly recommend Tracxn for learning and staying ahead of the curve.",
  },
  {
    name: "Vikram Pandya",
    role: "Director",
    initials: "VP",
    quote:
      "I have used Tracxn as part of our fintech program. The platform provides useful data on fintech startups, funding rounds, and market trends. Our students use curated data for research projects and to stay informed about developments in the fintech sector. Besides that, what I really value the most is their excellent analyst support and their ability to curate the company data based on custom requests. Tracxn\u2019s company profiles and sector reports have been helpful in our case study discussions. The platform\u2019s search features allow students to find relevant information for their assignments.",
  },
];

const students: Testimonial[] = [
  {
    name: "Khyati Khandelwal",
    role: "Indian School of Business",
    initials: "KK",
    quote:
      "I just attended the Tracxn workshop and it was pretty amazing, we firstly learnt that Tracxn had so many capabilities, especially for a startup founder when it comes to competitor analysis, finding out a lot about the investors, how easy it is to actually use the entire platform. So I think it was a pretty cool research tool and I can\u2019t wait to start leveraging it.",
  },
  {
    name: "Rohil Dokani",
    role: "Indian School of Business",
    initials: "RD",
    quote:
      "I started using Tracxn when I was doing an internship in a VC fund, a couple of years back and it was used extensively by the analysts and the partners, that was the first introduction to Tracxn as a platform. I also did a master of finance in Germany in Frankfurt and It was surprising that Tracxn was used exclusively there, because there was a lot of coverage for US based companies and Indian subsidies.",
  },
  {
    name: "Ganesh Jaju",
    role: "Xavier Institute of Management and Entrepreneurship",
    initials: "GJ",
    quote:
      "So we have been provided with Tracxn as a platform. It is a database platform that has immense features. I am continuously using Tracxn from the last 10-12 months. It\u2019s been very useful in analyzing financial data, mainly of unlisted companies, finding out new startups across the location across India or globally.",
  },
  {
    name: "Hathim Syed Mohamed M",
    role: "IIM Kozhikode, PGP Batch \u201926",
    initials: "HM",
    quote:
      "Tracxn has been a valuable resource during my business development internship. It\u2019s helped me efficiently identify potential clients by filtering companies based on recent funding rounds, team size, and hiring trends. While not all internships require this, especially given the variety in domains and functions, Tracxn stands out as a powerful tool for anyone looking to quickly grasp industry dynamics and make informed outreach decisions.",
  },
  {
    name: "Shivangi Tiwari",
    role: "Research Scholar, Batch of 2022",
    initials: "ST",
    quote:
      "Tracxn has been a valuable resource for identifying and accessing a diverse pool of industry professionals. The depth and organisation of the database have made large-scale academic data collection both feasible and efficient.",
  },
];

function MarqueeRow({
  items,
  direction,
  variant,
}: {
  items: Testimonial[];
  direction: "left" | "right";
  variant: "faculty" | "student";
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-5 w-max marquee-track ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {doubled.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className={`flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(4,34,58,0.04)] border hover:shadow-[0_8px_32px_rgba(4,34,58,0.08)] transition-all duration-300 relative ${
              variant === "student"
                ? "border-navy-400/[0.08]"
                : "border-navy-700/[0.05]"
            }`}
          >
            <span
              className={`absolute top-4 right-6 font-heading text-5xl font-bold leading-none ${
                variant === "student"
                  ? "text-navy-400/10"
                  : "text-gold/[0.12]"
              }`}
            >
              &ldquo;
            </span>
            <p className="text-sm text-navy-500/60 italic leading-relaxed mb-5">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-sans text-xs font-bold tracking-wide ${
                  variant === "faculty"
                    ? "bg-gradient-to-br from-navy-700 to-navy-500 text-gold"
                    : "bg-gradient-to-br from-navy-400 to-navy-300 text-white"
                }`}
              >
                {t.initials}
              </div>
              <div>
                <strong className="block text-navy-700 text-sm">
                  {t.name}
                </strong>
                <span className="text-xs text-navy-400 font-sans font-medium">
                  {t.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TextTestimonials() {
  return (
    <section className="py-28 bg-cream overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-7">
        <ScrollReveal>
          <h3 className="font-heading text-xl text-navy-700 mb-5 pl-1">
            How Faculties use Tracxn
          </h3>
        </ScrollReveal>
      </div>
      <MarqueeRow items={faculty} direction="left" variant="faculty" />

      <div className="max-w-[1180px] mx-auto px-7">
        <ScrollReveal>
          <h3 className="font-heading text-xl text-navy-700 mb-5 pl-1">
            How Students use Tracxn
          </h3>
        </ScrollReveal>
      </div>
      <MarqueeRow items={students} direction="right" variant="student" />
    </section>
  );
}
