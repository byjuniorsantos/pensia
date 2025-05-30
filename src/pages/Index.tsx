
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BeneficiariesSection from "@/components/BeneficiariesSection";
import ServicesSection from "@/components/ServicesSection";
import VisionSection from "@/components/VisionSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update title and meta description
    document.title = "PensIA - Consultoria em Dados e Inteligência de Negócios";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "PensIA - Transforme seus dados em insights acionáveis. Consultoria especializada em análise de dados e inteligência de negócios.");
    }
    
    // Scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe both sections and specific elements with animation classes
    const sections = document.querySelectorAll("section > div");
    const animatedElements = document.querySelectorAll(".glass-card.purple-glow");
    
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-pensia-dark text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BeneficiariesSection />
      <ServicesSection />
      <VisionSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
