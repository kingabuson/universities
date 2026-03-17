import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import UseCases from "@/components/UseCases";
import Citations from "@/components/Citations";
import Courses from "@/components/Courses";
import CampusConnect from "@/components/CampusConnect";
import SchoolToStartup from "@/components/SchoolToStartup";
import VideoTestimonials from "@/components/VideoTestimonials";
import TextTestimonials from "@/components/TextTestimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Logos />
      <UseCases />
      <Citations />
      <Courses />
      <CampusConnect />
      <SchoolToStartup />
      <VideoTestimonials />
      <TextTestimonials />
      <CTA />
    </main>
  );
}
