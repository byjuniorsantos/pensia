
import { BarChart2, TrendingUp, LineChart } from "lucide-react";

const VisionSection = () => {
  return (
    <section
      id="visao"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #1A1F2C, #2A2B46)"
      }}
    >
      {/* Abstract geometry */}
      <div className="absolute w-full h-full inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-pensia-purple/30 rounded-full blur-3xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%)`,
              opacity: Math.random() * 0.7,
            }}
          />
        ))}
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-glow">
            Nossa <span className="text-pensia-purple">Visão</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Você já parou para pensar no quanto os dados da sua empresa podem revelar?
            </h3>
            
            <p className="text-gray-300 mb-6 text-lg">
              A PensIA transforma essa complexidade em clareza. Acreditamos que toda empresa, 
              independentemente do tamanho, pode se beneficiar do poder dos dados para 
              tomar decisões mais inteligentes e estratégicas.
            </p>
            
            <p className="text-gray-300 text-lg mb-6">
              Nosso objetivo é desmistificar a análise de dados e torná-la acessível e útil 
              para todos os níveis de sua organização, desde executivos até equipes operacionais.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-pensia-purple">
                  <TrendingUp />
                </div>
                <p className="text-gray-300">
                  <span className="font-bold text-white">Insights acionáveis</span> que 
                  realmente impulsionam o crescimento e a eficiência do seu negócio.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-pensia-purple">
                  <BarChart2 />
                </div>
                <p className="text-gray-300">
                  <span className="font-bold text-white">Visualizações claras</span> que 
                  transformam dados complexos em informações facilmente compreensíveis.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-pensia-purple">
                  <LineChart />
                </div>
                <p className="text-gray-300">
                  <span className="font-bold text-white">Estratégias orientadas por dados</span> que 
                  reduzem riscos e aumentam suas chances de sucesso.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-10 purple-glow rounded-2xl">
            <blockquote className="text-xl italic">
              "Os dados são o novo petróleo. São valiosos, mas, se não refinados, 
              não podem realmente ser usados. Precisam ser transformados em insights 
              para gerar valor."
            </blockquote>
            <p className="text-right mt-4 text-gray-400">— Clive Humby</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
