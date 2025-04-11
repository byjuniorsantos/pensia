
import { CheckCircle2, BarChart4, LineChart } from "lucide-react";

const BeneficiariesSection = () => {
  return (
    <section id="beneficiarios" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pensia-dark to-pensia-blue/30 opacity-80 z-0" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-glow">
            Quem se <span className="text-pensia-purple">Beneficia</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Nossas soluções são especialmente eficazes para empresas que precisam tomar 
            decisões baseadas em grandes volumes de dados.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
          <div className="glass-card p-8 rounded-2xl flex-1 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BarChart4 className="text-pensia-purple" />
              Segmentos que atendemos
            </h3>
            <ul className="space-y-3">
              {["Empresas de tecnologia", "Educação (escolas, faculdades e universidades)", 
                "Saúde", "Contabilidade", "Varejo", "Indústria", 
                "Agronegócio"].map((segment, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-pensia-purple mt-1 shrink-0" />
                  <span>{segment}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-card p-8 rounded-2xl flex-1 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <LineChart className="text-pensia-purple" />
              Nossos resultados
            </h3>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pensia-purple">+300</div>
                <p className="text-gray-300">dashboards entregues</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pensia-purple">+50</div>
                <p className="text-gray-300">empresas atendidas</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dashboard Visualization */}
        <div className="mt-12 relative">
          <div className="glass-card p-4 md:p-8 rounded-2xl overflow-hidden purple-glow">
            <div className="aspect-[16/9] bg-gradient-to-br from-pensia-dark to-pensia-blue/50 rounded-lg overflow-hidden relative">
              {/* Simulated Dashboard Elements */}
              <div className="absolute top-4 left-4 right-4 h-12 bg-white/5 rounded-lg"></div>
              <div className="absolute top-20 left-4 bottom-4 w-1/4 bg-white/5 rounded-lg"></div>
              <div className="absolute top-20 left-[calc(25%+20px)] w-[calc(75%-24px)] bottom-4 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg relative overflow-hidden">
                  <div className="absolute bottom-4 left-4 right-4 h-1/2 bg-pensia-purple/20 rounded-lg"></div>
                  <div className="absolute top-4 left-4 right-4 h-8 bg-white/10 rounded-lg"></div>
                </div>
                <div className="bg-white/5 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-pensia-purple/20 to-pensia-blue/30"></div>
                  <div className="absolute top-4 left-4 right-4 h-8 bg-white/10 rounded-lg"></div>
                </div>
                <div className="bg-white/5 rounded-lg relative overflow-hidden">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    <div className="flex-1 h-16 bg-pensia-purple/40 rounded"></div>
                    <div className="flex-1 h-24 bg-pensia-purple/30 rounded"></div>
                    <div className="flex-1 h-20 bg-pensia-purple/20 rounded"></div>
                    <div className="flex-1 h-12 bg-pensia-purple/10 rounded"></div>
                  </div>
                  <div className="absolute top-4 left-4 right-4 h-8 bg-white/10 rounded-lg"></div>
                </div>
                <div className="bg-white/5 rounded-lg relative overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 h-8 bg-white/10 rounded-lg"></div>
                  <div className="absolute top-16 left-4 right-4 bottom-4 grid grid-rows-3 gap-2">
                    <div className="bg-white/10 rounded-lg"></div>
                    <div className="bg-white/10 rounded-lg"></div>
                    <div className="bg-white/10 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-400">
              Visualização ilustrativa de dashboard de BI com múltiplos insights e KPIs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiariesSection;
