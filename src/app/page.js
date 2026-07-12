import Banner from "@/components/Banner";
import TechnologyStack from "@/components/TechnologyStack";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <Banner
        title="Md. Hridoy Sheikh"
        subtitle="Web Developer | Frontend Developer"
        imageUrl="/hridoy.png"
        imageAlt="Md. Hridoy Sheikh Profile Picture"
      />
      
      <AboutSection id="about" />
      
      <TechnologyStack id="technologies" />
      
      <ServicesSection id="services" />

      <ExperienceSection id="experience" />
      
      <ContactSection id="contact" />
    </div>
  );
}
