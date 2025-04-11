
import { useState } from "react";
import { 
  LineChart, 
  FileSpreadsheet, 
  BrainCircuit, 
  Database, 
  TrendingUp, 
  Headphones 
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Desenvolvimento de dashboards",
    tools: "Power BI, Looker Studio, Excel e Tableau",
    description: "Criamos dashboards personalizados nas principais plataformas para transformar seus dados em visualizações interativas.",
    icon: <LineChart size={32} />,
  },
  {
    id: 2,
    title: "Consultoria em análise de dados",
    description: "Orientamos sua equipe na interpretação e uso estratégico dos dados para tomada de decisões mais eficientes.",
    icon: <BrainCircuit size={32} />,
  },
  {
    id: 3,
    title: "Automatização de relatórios",
    description: "Elimine o trabalho manual com relatórios automáticos que economizam tempo e reduzem erros.",
    icon: <FileSpreadsheet size={32} />,
  },
  {
    id: 4,
    title: "Integração de bancos de dados",
    tools: "Firebird, MySQL, PostgreSQL e outros",
    description: "Integramos diferentes fontes de dados para uma visão unificada e completa do seu negócio.",
    icon: <Database size={32} />,
  },
  {
    id: 5,
    title: "Geração de insights e previsões",
    description: "Utilizamos modelos de previsão para antecipar tendências e orientar decisões proativas.",
    icon: <TrendingUp size={32} />,
  },
  {
    id: 6,
    title: "Suporte técnico e treinamento",
    description: "Oferecemos treinamento personalizado e suporte contínuo para maximizar o valor das suas soluções de dados.",
    icon: <Headphones size={32} />,
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-20 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-pensia-purple/20 rounded-full blur-[120px] z-0" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-glow">
            Nossos <span className="text-pensia-purple">Serviços</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas para extrair valor dos seus dados e 
            transformá-los em vantagens competitivas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`glass-card p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
                activeService === service.id ? 'purple-glow bg-white/10' : ''
              }`}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              <div className="bg-pensia-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-pensia-purple">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              
              {service.tools && (
                <p className="text-pensia-purple mb-4 text-sm font-medium">{service.tools}</p>
              )}
              
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
