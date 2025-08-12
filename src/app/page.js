// Example usage in src/app/page.js
import Banner from "@/components/Banner";

import Project from "@/components/Project";
import TechnologyStack from "@/components/TechnologyStack";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <Banner
        id="home"
        title="Md. Hridoy Sheikh"
        subtitle="Web Developer | Frontend Developer"
        imageUrl="/hridoy.png"
        imageAlt="Md. Hridoy Sheikh Profile Picture"
      />
      
      <AboutSection id="about" />
      
      <TechnologyStack id="technologies" />
      
      <Project id="projects" />
      
      <ServicesSection id="services" />
      
      <ContactSection id="contact" />
    </div>
  );
}