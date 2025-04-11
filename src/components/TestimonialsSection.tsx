
import { Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "A implementação dos dashboards da PensIA transformou completamente nossa operação. Conseguimos visualizar tendências que antes eram invisíveis e tomar decisões muito mais rápidas e precisas.",
    author: "Ricardo Santos",
    position: "Diretor de Operações, Supermercado Regional",
    rating: 5,
  },
  {
    id: 2,
    text: "A consultoria da PensIA nos ajudou a organizar nossos dados de maneira eficiente. Hoje conseguimos prever demandas sazonais e planejar nosso estoque com muito mais precisão, reduzindo custos e aumentando vendas.",
    author: "Carla Mendes",
    position: "CEO, Distribuidora de Alimentos",
    rating: 5,
  },
  {
    id: 3,
    text: "Os relatórios automatizados desenvolvidos pela equipe da PensIA economizam pelo menos 40 horas mensais da nossa equipe. O suporte técnico é excelente e sempre disponível quando precisamos.",
    author: "Paulo Ferreira",
    position: "Gerente de TI, Rede de Varejo",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pensia-dark to-pensia-blue-light/10 z-0" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-glow">
            O que nossos <span className="text-pensia-purple">clientes</span> dizem
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`glass-card p-8 rounded-2xl transition-all duration-300 ${
                activeIndex === index ? 'purple-glow transform scale-105' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex justify-between items-start mb-6">
                <Quote size={32} className="text-pensia-purple opacity-50" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="#9b87f5" 
                      stroke="none"
                      className="ml-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-300 mb-6 min-h-[180px]">
                "{testimonial.text}"
              </blockquote>
              
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
