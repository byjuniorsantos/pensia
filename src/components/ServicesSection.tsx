
import { LineChart, FileSpreadsheet, BrainCircuit } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Dashboards e relatórios",
    tools: "Power BI, Looker Studio e Tableau",
    description: "Transforme seus dados em visualizações interativas e relatórios dinâmicos para facilitar a tomada de decisões.",
    icon: <LineChart size={32} />,
  },
  {
    id: 2,
    title: "Automação de relatórios e insights",
    description: "Automatize a coleta, tratamento e distribuição de dados, economizando tempo e reduzindo erros humanos.",
    icon: <FileSpreadsheet size={32} />,
  },
  {
    id: 3,
    title: "Consultoria em dados e inteligência de negócios",
    description: "Orientação especializada para identificar oportunidades de melhoria e estratégias baseadas em dados.",
    icon: <BrainCircuit size={32} />,
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
