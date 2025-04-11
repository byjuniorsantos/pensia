
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="glass py-12 border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              Somos especialistas em transformar dados em insights de valor para 
              sua empresa. Descubra o verdadeiro potencial dos seus dados com a PensIA.
            </p>
            <p className="mt-6 text-gray-400">
              <span className="text-pensia-purple font-medium">Power Thought. Redefining Intelligence.</span>
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Links rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-pensia-purple transition-colors">Home</a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-pensia-purple transition-colors">Sobre nós</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-pensia-purple transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-pensia-purple transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:consultoria@pensia.com.br" className="text-pensia-purple hover:text-pensia-purple-light transition-colors">
                  consultoria@pensia.com.br
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Telefone/WhatsApp:</span>
                <a href="tel:+553598975151" className="text-pensia-purple hover:text-pensia-purple-light transition-colors">
                  (35) 9897-5151
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Localização:</span>
                <span>Lavras - Minas Gerais, Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {currentYear} PensIA. Todos os direitos reservados.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-pensia-purple transition-colors">
              Termos de uso
            </a>
            <a href="#" className="text-gray-400 hover:text-pensia-purple transition-colors">
              Política de privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
