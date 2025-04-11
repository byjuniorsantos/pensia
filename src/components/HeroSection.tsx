
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1A1F2C 0%, #253155 50%, #1A1F2C 100%)",
      }}
    >
      {/* Abstract shapes in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pensia-purple/20 blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-pensia-purple/10 blur-[80px]" />
      
      <div className="section-container flex flex-col items-center text-center z-10">
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 heading-glow">
            Descubra o poder dos seus{" "}
            <span className="text-gradient">dados</span> com a PensIA
          </h1>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            <em>Power Thought. Redefining Intelligence.</em>
          </p>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Transformamos dados complexos em insights claros e acionáveis para impulsionar seu negócio.
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <a 
            href="#contato" 
            className="glass-card group px-8 py-4 text-lg font-medium text-white rounded-full flex items-center gap-2 purple-glow"
          >
            Fale com um consultor
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
