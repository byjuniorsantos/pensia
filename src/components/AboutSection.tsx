
import { Users, Lightbulb, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-pensia-dark to-pensia-blue/20 opacity-70 z-0" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-glow">
            Sobre a <span className="text-pensia-purple">PensIA</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Somos uma consultoria que une pensamento estratégico com inteligência artificial 
            para transformar dados em decisões.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="glass-card p-8 rounded-2xl">
            <div className="bg-pensia-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users size={28} className="text-pensia-purple" />
            </div>
            <h3 className="text-xl font-bold mb-4">Equipe especializada</h3>
            <p className="text-gray-300">
              Nossos consultores possuem ampla experiência em análise de dados, 
              estatística e inteligência de negócios.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl">
            <div className="bg-pensia-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb size={28} className="text-pensia-purple" />
            </div>
            <h3 className="text-xl font-bold mb-4">Pensamento estratégico</h3>
            <p className="text-gray-300">
              Compreendemos profundamente seu negócio para fornecer insights 
              significativos e orientados a resultados.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl">
            <div className="bg-pensia-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Zap size={28} className="text-pensia-purple" />
            </div>
            <h3 className="text-xl font-bold mb-4">Tecnologia avançada</h3>
            <p className="text-gray-300">
              Utilizamos as mais modernas tecnologias em IA e análise de dados 
              para extrair o máximo valor de suas informações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
