
import { CheckCircle2, BarChart, LineChart, Clock } from "lucide-react";

const reasons = [
  {
    text: "Tome decisões baseadas em dados reais e atualizados",
    icon: <CheckCircle2 className="text-pensia-purple" size={24} />,
  },
  {
    text: "Identifique oportunidades de crescimento e redução de custos",
    icon: <BarChart className="text-pensia-purple" size={24} />,
  },
  {
    text: "Antecipe tendências de mercado e comportamento de clientes",
    icon: <LineChart className="text-pensia-purple" size={24} />,
  },
  {
    text: "Otimize processos e aumente a eficiência operacional",
    icon: <Clock className="text-pensia-purple" size={24} />,
  },
];

const kpis = [
  {
    value: "30%",
    label: "Redução média no tempo de tomada de decisão",
  },
  {
    value: "25%",
    label: "Aumento na produtividade da equipe",
  },
  {
    value: "40h",
    label: "Economia mensal em geração de relatórios",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="porque-escolher" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pensia-dark to-pensia-blue/20 opacity-90 z-0" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-glow">
            Por que escolher a <span className="text-pensia-purple">PensIA</span>?
          </h2>
          
          {/* Marketing phrase with subtle text glow */}
          <div className="max-w-4xl mx-auto mb-16 text-balance animate-fade-in">
            <p className="text-lg mb-4 text-gray-300" style={{ textShadow: "0 0 10px rgba(155, 135, 245, 0.3)" }}>
              "Porque enquanto sua concorrência ainda tenta entender os dados, você já estará tomando decisões estratégicas com eles."
            </p>
            <p className="text-lg text-gray-300" style={{ textShadow: "0 0 10px rgba(155, 135, 245, 0.3)" }}>
              "A PensIA transforma números em vantagem competitiva — com dashboards poderosos, automação real e insights que colocam sua empresa à frente do mercado."
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Why Choose Us */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Vantagens competitivas</h3>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">{reason.icon}</div>
                  <p className="text-lg text-gray-300">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tangible Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Benefícios Tangíveis</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {kpis.map((kpi, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pensia-purple mb-3">
                    {kpi.value}
                  </div>
                  <p className="text-gray-300">{kpi.label}</p>
                </div>
              ))}
            </div>
            
            <div className="glass-card p-6 mt-8 rounded-2xl">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="bg-pensia-purple/10 p-3 rounded-xl flex items-center justify-center">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" 
                    className="w-10 h-10 opacity-70"
                    alt="SQL Server" 
                  />
                </div>
                <div className="bg-pensia-purple/10 p-3 rounded-xl flex items-center justify-center">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                    className="w-10 h-10 opacity-70"
                    alt="PostgreSQL" 
                  />
                </div>
                <div className="bg-pensia-purple/10 p-3 rounded-xl flex items-center justify-center">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
                    className="w-10 h-10 opacity-70"
                    alt="MySQL" 
                  />
                </div>
                <div className="bg-pensia-purple/10 p-3 rounded-xl flex items-center justify-center">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                    className="w-10 h-10 opacity-70"
                    alt="Python" 
                  />
                </div>
              </div>
              <p className="text-center text-sm text-gray-400 mt-4">
                Compatível com as principais tecnologias e bancos de dados do mercado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

