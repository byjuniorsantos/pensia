
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section
      id="contato"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2A2B46 0%, #1A1F2C 100%)",
      }}
    >
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-glow">
            Fale com a <span className="text-pensia-purple">PensIA</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar seus dados em insights valiosos? 
            Entre em contato conosco para uma consultoria personalizada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Seu nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-gray-600 focus:border-pensia-purple focus:outline-none"
                  placeholder="Digite seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-gray-600 focus:border-pensia-purple focus:outline-none"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg glass border border-gray-600 focus:border-pensia-purple focus:outline-none"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glass border border-gray-600 focus:border-pensia-purple focus:outline-none"
                  placeholder="Como podemos ajudar sua empresa?"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6 bg-pensia-purple hover:bg-pensia-purple-dark text-white font-medium rounded-lg flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Enviar mensagem
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações de contato</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-pensia-purple/20 p-4 rounded-full text-pensia-purple">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <a href="mailto:consultoria@pensia.com.br" className="text-gray-300 hover:text-pensia-purple transition-colors">
                    consultoria@pensia.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-pensia-purple/20 p-4 rounded-full text-pensia-purple">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Telefone/WhatsApp</h4>
                  <a href="tel:+553598975151" className="text-gray-300 hover:text-pensia-purple transition-colors">
                    (35) 9897-5151
                  </a>
                  <p className="text-gray-400 text-sm mt-1">
                    Seg - Sex, 8:00 - 18:00
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-pensia-purple/20 p-4 rounded-full text-pensia-purple">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Localização</h4>
                  <p className="text-gray-300">
                    Lavras - Minas Gerais, Brasil
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-pensia-purple/20 p-4 rounded-full text-pensia-purple">
                  <Linkedin />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">LinkedIn</h4>
                  <a href="#" className="text-gray-300 hover:text-pensia-purple transition-colors">
                    linkedin.com/company/pensia
                  </a>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl mt-8">
                <h4 className="text-lg font-semibold mb-2">Agende uma demonstração gratuita</h4>
                <p className="text-gray-300 mb-4">
                  Veja como a PensIA pode transformar seus dados em insights acionáveis.
                </p>
                <a 
                  href="https://wa.me/553598975151" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.05 13.5C2.8 12.69 2.67 11.84 2.67 11C2.67 6.13 6.61 2.19 11.48 2.19C16.35 2.19 20.29 6.13 20.29 11C20.29 15.87 16.35 19.81 11.48 19.81C10.64 19.81 9.79 19.68 8.98 19.43L7.81 20.6L4.22 21.79L5.41 18.2L3.05 13.5Z" fill="currentColor"/>
                    <path d="M15.71 13.3996C15.52 13.4896 14.93 13.7796 14.71 13.8696C14.5 13.9496 14.35 13.9896 14.14 13.7996C13.93 13.5996 13.33 13.0496 12.81 12.5796C12.38 12.1996 12.1 11.7496 11.89 11.5396C11.69 11.3296 11.83 11.1396 11.94 10.9996C12.23 10.6596 12.5 10.2996 12.58 10.0996C12.66 9.89957 12.62 9.69957 12.56 9.59957C12.5 9.49957 11.79 7.89957 11.56 7.47957C11.25 6.89957 10.94 6.99957 10.73 6.98957H10.28C10.08 6.98957 9.76 7.04957 9.48 7.26957C9.21 7.48957 8.55 8.10957 8.55 9.69957C8.55 11.2996 9.68 12.8296 9.83 12.9896C9.98 13.1496 11.76 15.8996 14.49 16.9096C16.73 17.7396 17.14 17.5196 17.58 17.4796C18.23 17.4196 19.5 16.8696 19.73 16.3496C19.96 15.8296 19.96 15.3896 19.9 15.2896C19.84 15.1896 19.64 15.1296 19.34 15.0296C19.04 14.9196 17.44 14.1496 17.17 14.0896C16.9 14.0196 16.7 13.9896 16.5 14.2896C16.3 14.5896 15.81 15.2896 15.63 15.4696C15.44 15.6596 15.26 15.6796 14.96 15.5796L15.71 13.3996Z" fill="white"/>
                  </svg>
                  Falar via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
