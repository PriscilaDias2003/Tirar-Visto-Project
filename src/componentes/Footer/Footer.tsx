import NewsletterInput from './NewsletterInput'

function Footer() {
    return (
      <footer id='contato' className="bg-white px-6 md:px-28 py-16 border-t border-gray-100">
      
        <div className="flex flex-col lg:flex-row justify-between gap-12">
       
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4 md:text-6xl max-w-[500px]">Está com alguma dúvida?</h3>
            <p className="text-gray-600 mb-6 max-w-[500px]">
              Entre em contato através do nosso canal direto ao cliente
              através do botão abaixo
            </p>
            <button className="bg-[#0A0E3F] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1A1E5F] transition">
              Central de Atendimento
            </button>
          </div>
  
          <div className="flex-1">
            <NewsletterInput/>
          </div>

        </div>

        <div className="w-full flex flex-col justify-between md:flex-row">

            <div className="mt-12 flex flex-col self-end md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <p className="font-medium mb-2">Siga em nossas redes:</p>
                <div className="flex gap-3 flex-wrap">
                    {["Instagram", "X", "Facebook", "Youtube"].map((rede) => (
                        <button
                        key={rede}
                        className="border border-gray-400 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition"
                        >
                        {rede}
                        </button>
                    ))}
                </div>
            </div>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 w-[100%] md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 w-[50%] text-sm text-gray-600">
            <div>
                <h4 className="font-bold text-base mb-2">Empresa</h4>
                <ul className="space-y-1">
                <li><a href="#home"> Home</a></li>
                <li><a href="#quem-somos"> Quem somos</a></li>
                <li><a href="#servicos"> Serviços</a></li>
                <li><a href="#contato"> Contato</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-base mb-2">Novidades</h4>
                <ul className="space-y-1">
                <li><a href="#passaporte"> Passaporte</a></li>
                <li><a href="#visto"> Visto</a></li>
                <li><a href="#entrevista"> Entrevista</a></li>
                <li><a href="#policia"> Polícia Federal</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-base mb-2">Suporte</h4>
                <ul className="space-y-1">
                <li><a href="#faq"> FAQ</a></li>
                <li><a href="#contato"> Contato</a></li>
                <li><a href="#duvidas"> Dúvidas Frequentes</a></li>
                </ul>
            </div>
            </div>

        </div>
  
  
        <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-100 pt-6">
          © 2025 Tirar Visto – Todos os Direitos Reservados
        </div>
      </footer>
    );
  }
  
  export default Footer;
  