import { Plus } from "lucide-react";
import { Button, SecurityBadges } from "./ui";


export function FaqFooter() {
  return (
    <>
      {/* 2nd Offer Area */}
      <section className="bg-brand-light py-16 px-4 flex justify-center">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl w-full max-w-5xl flex flex-col md:flex-row border border-gray-100">
          <div className="w-full md:w-1/2 bg-[#EA9E18]">
             <img 
               src="https://i.postimg.cc/rw0XLXBQ/Chat-GPT-Image-10-de-jul-de-2026-16-51-03.webp"
               alt="Mockup do Produto" 
               className="w-full h-full object-cover"
               loading="lazy"
               width="800"
               height="800"
             />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center items-center text-center">
            <div className="mb-6 border-b border-gray-200 pb-6 w-full flex justify-center">
              <img 
                src="/logo.webp"
                alt="Código Emocional da Riqueza - Protocolo de Desbloqueio" 
                className="h-20 md:h-24 object-contain w-auto max-w-full"
                loading="lazy"
                width="270"
                height="112"
              />
            </div>

            <div className="mb-6 border-b border-gray-200 pb-6 w-full">
              <p className="text-gray-500 line-through text-lg">De R$ 487,00 por apenas</p>
              <p className="text-5xl md:text-6xl font-bold text-brand-green tracking-tight my-2">3x de R$ 22,33</p>
              <p className="text-gray-600 font-medium">ou R$ 67,00 à vista</p>
            </div>

            <Button className="mb-6 w-full max-w-sm text-sm md:text-base py-5 font-bold">
              QUERO DESBLOQUEAR MEU CÓDIGO AGORA
            </Button>
            
            <SecurityBadges />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-light pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-10">
            Perguntas Frequentes
          </h2>
          <div className="flex flex-col gap-4">
            <FaqItem 
              question="Por quanto tempo tenho acesso ao Código Emocional da Riqueza?" 
              answer="Acesso vitalício! Uma vez que você compra, o material é seu para sempre. Pode revisar os 7 dias quantas vezes quiser, quando precisar." 
              isOpen 
            />
            <FaqItem 
              question="Preciso ter conhecimento prévio sobre transformação emocional?" 
              answer="Não! O Protocolo foi criado para iniciantes. Cada dia é progressivo e fácil de acompanhar. Você só precisa estar aberto(a) para a mudança." 
            />
            <FaqItem 
              question="Como funciona o acesso ao material?" 
              answer="Você recebe um link de acesso no e-mail imediatamente após a compra. Pode acessar de qualquer dispositivo (celular, tablet, computador) — online ou offline." 
            />
            <FaqItem 
              question="Posso fazer os 7 dias em meu próprio ritmo?" 
              answer="Sim! Se precisar de mais tempo em algum capítulo, respeite seu ritmo. Não há pressa — o importante é a qualidade da sua reflexão." 
            />
            <FaqItem 
              question="Meus dados estão seguros?" 
              answer="Sim. Usamos criptografia de ponta a ponta. Seus dados nunca são compartilhados com terceiros." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 px-4 text-center border-t border-gray-900">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/logo.webp"
              alt="Código Emocional da Riqueza - Protocolo de Desbloqueio" 
              className="h-16 md:h-20 object-contain w-auto max-w-full"
              loading="lazy"
              width="270"
              height="112"
            />
          </div>

          <p className="font-bold text-white mb-1">Dúvidas? Fale conosco:</p>
          <p className="text-white font-medium mb-8">contato@codigoemocionaldariqueza.com.br</p>

          <p className="text-sm font-medium text-gray-500 mb-2">
            CNPJ: XX.XXX.XXX/0001-XX
          </p>
          <p className="text-sm font-medium mb-8">
            © 2026 Todos os direitos reservados.
          </p>

          <p className="text-xs max-w-3xl leading-relaxed mb-8 opacity-60">
            Aviso Legal: Este site não é afiliado ao Facebook, Instagram, Google ou qualquer outra plataforma de mídia social. Todos os nomes de marcas mencionados são propriedade de seus respectivos proprietários.
          </p>

          <div className="flex gap-4 text-sm font-medium underline opacity-80">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function FaqItem({ question, answer, isOpen = false }: { question: string, answer?: string, isOpen?: boolean }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all group">
      <div className="p-5 flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-3">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isOpen ? 'bg-gray-200' : 'bg-gray-100 group-hover:bg-gray-200'} transition-colors`}>
            <Plus className={`w-4 h-4 text-gray-500 ${isOpen ? 'rotate-45' : ''} transition-transform`} />
          </div>
          <h4 className="font-semibold text-brand-dark text-lg">{question}</h4>
        </div>
      </div>
      {isOpen && answer && (
        <div className="px-5 pb-5 pt-1 pl-14 text-gray-600 font-medium">
          {answer}
        </div>
      )}
    </div>
  );
}
