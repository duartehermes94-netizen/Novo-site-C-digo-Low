import { Check, X, Mail, ShieldCheck, MessageSquareHeart } from "lucide-react";
import { Button, SecurityBadges } from "./ui";
import { motion } from "motion/react";


export function Offer() {
  return (
    <section className="bg-brand-dark flex flex-col items-center pb-20">
      
      {/* Para quem é */}
      <div className="w-full bg-black py-16 px-4 flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="bg-[#1C1C1E] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-brand-green text-center">
              O Protocolo Código Emocional é para você que:
            </h3>
            <ul className="flex flex-col gap-4 max-w-2xl mx-auto">
              <CheckItem text="Ganha bem, mas no fim do mês não sobra nada" />
              <CheckItem text="Sente culpa quando pensa em prosperar ou ganhar mais" />
              <CheckItem text="Tem medo de perder o que conquistou se crescer demais" />
              <CheckItem text="Herdou bloqueios financeiros da sua família" />
              <CheckItem text="Já tentou tudo (planilhas, cursos, livros) mas algo invisível te trava" />
              <CheckItem text="Quer finalmente entender por que se sabota financeiramente" />
              <CheckItem text="Está pronto(a) para transformar sua relação com dinheiro de dentro para fora" />
            </ul>
            <p className="text-center text-white mt-8 font-medium">Enfim... Se você quer finalmente desbloquear sua riqueza e criar uma mentalidade de abundância, o Código Emocional da Riqueza é para você!</p>
          </div>
        </div>
      </div>

      {/* Transition to Offer */}
      <div className="w-full text-center pt-16 pb-8 px-4 bg-brand-dark">
        <div className="inline-block border border-gray-600 rounded-full px-6 py-2 text-sm text-gray-300 font-medium mb-6">
          Oferta especial
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Quanto custa sua liberdade emocional?
        </h2>
      </div>

      {/* The Offer Details */}
      <div className="w-full bg-brand-light py-16 px-4 flex flex-col items-center rounded-t-[3rem]">
        
        <div className="bg-white rounded-3xl p-8 md:p-10 w-full max-w-2xl shadow-sm border border-gray-100 mb-10 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-8">
            Recapitulando tudo que você vai receber no <span className="text-[#e5b85c]">Protocolo Código Emocional da Riqueza</span>:
          </h3>
          
          <div className="flex flex-col gap-4 text-left mb-8">
            <RecapItem text="Jornada de 7 Dias de Transformação Emocional" price="R$ 197,00" />
            <RecapItem text="Reflexões Profundas + Perguntas Poderosas" price="R$ 97,00" />
            <RecapItem text="Checklist de Autoanálise" price="R$ 47,00" />
            <RecapItem text="Ações Práticas Diárias" price="R$ 49,00" />
            <RecapItem text="21 Coisas Que Você Precisa Desapegar" price="R$ 97,00" />
            <RecapItem text="Guia Rápido — Hábitos de Quem Desbloqueia a Riqueza" price="R$ 97,00" />
            <RecapItem text="Ativação Matinal da Prosperidade — 30 Afirmações" price="R$ 97,00" />
          </div>

          <div className="inline-block border border-gray-200 rounded-full px-6 py-3 font-medium text-brand-dark">
            Tudo isso deveria custar: <span className="text-brand-orange line-through font-bold ml-1">R$ 487,00</span>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center text-brand-dark max-w-3xl leading-tight mb-12">
          Mas somente HOJE você pode ter acesso ao Protocolo Código Emocional da Riqueza junto com todos os bônus por apenas:
        </h3>

        {/* CTA Card */}
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
                src="https://i.postimg.cc/28PwKsrb/novalogocodigo-copiar-4.webp"
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

        {/* Delivery Steps */}
        <div className="w-full max-w-4xl mt-24 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-brand-dark mb-10 leading-tight">
            Compre agora e receba seu <br className="hidden md:block"/> acesso no e-mail imediatamente!
          </h3>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white rounded-3xl p-8 flex-1 text-center shadow-sm border border-gray-100 flex flex-col items-center">
              <Mail className="w-10 h-10 text-[#e5b85c] mb-4" strokeWidth={2.5} />
              <h4 className="text-lg font-bold text-brand-dark mb-2">Acesse seu e-mail</h4>
              <p className="text-gray-600 text-sm">Assim que finalizar a compra, você vai receber seu acesso no email.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 flex-1 text-center shadow-sm border border-gray-100 flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-[#e5b85c] mb-4" strokeWidth={2.5} />
              <h4 className="text-lg font-bold text-brand-dark mb-2">Acesso ao produto</h4>
              <p className="text-gray-600 text-sm">Você vai receber todos os entregáveis imediatamente.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 flex-1 text-center shadow-sm border border-gray-100 flex flex-col items-center">
              <MessageSquareHeart className="w-10 h-10 text-[#e5b85c] mb-4" strokeWidth={2.5} />
              <h4 className="text-lg font-bold text-brand-dark mb-2">Tudo pronto!</h4>
              <p className="text-gray-600 text-sm">Agora é só acessar e iniciar seu desbloqueio emocional hoje mesmo.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" strokeWidth={3} />
      <span className="text-gray-300 text-sm font-medium">{text}</span>
    </li>
  );
}

function CrossItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <X className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" strokeWidth={3} />
      <span className="text-gray-300 text-sm font-medium">{text}</span>
    </li>
  );
}

function RecapItem({ text, price }: { text: string, price: string }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
      <div className="flex items-center gap-2 pr-4">
        <Check className="w-5 h-5 text-brand-green shrink-0" strokeWidth={2.5} />
        <span className="text-gray-700 font-medium text-sm md:text-base">{text}</span>
      </div>
      <div className="relative whitespace-nowrap shrink-0">
        <span className="text-brand-green font-bold">{price}</span>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="absolute left-[-5%] top-1/2 w-[110%] h-[2px] bg-red-500 -translate-y-1/2 rounded-full origin-left"
        ></motion.div>
      </div>
    </div>
  );
}
