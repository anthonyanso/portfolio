import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { CategoriesSection } from "@/sections/Categories";
import { FAQSection } from "@/sections/FAQSection";
import { ExperienceSection } from '@/sections/Experience';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CategoriesSection />
      <TapeSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
