import { ReactNode } from "react";
import { ShieldCheck, Info, Check, TrendingUp, Brain, DollarSign, Clock } from "lucide-react";


export function Hero() {
  return (
    <>
      <section className="bg-[#0c100d] flex flex-col items-center pt-8 md:pt-12 pb-12">
        {/* Logo Placeholder */}
        <div className="mb-6 px-4 w-full max-w-4xl mx-auto flex justify-center">
          <img 
            src="https://i.ibb.co/r2QzKSrc/novalogocodigo-copiar3.webp"
            alt="Código Emocional da Riqueza - Protocolo de Desbloqueio" 
            className="h-16 md:h-20 object-contain w-auto max-w-full"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width="270"
            height="112"
          />
        </div>

        {/* Top Bar moved below logo */}
        <div className="bg-[#e8e3d3] w-full py-3 px-4 text-center mb-8 md:mb-10 shadow-inner">
          <p className="text-black font-bold text-base md:text-2xl font-['Poppins']">
            <span className="text-[#B56A3C]">Empreendedor,</span> seu dinheiro some e você não consegue entender por quê?
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
          {/* Headline */}
          <h1 className="text-2xl md:text-4xl font-extrabold text-center text-white leading-tight mb-6 max-w-4xl tracking-tight">
            Descubra o <span className="text-[#e5b85c]">bloqueio emocional</span> que trava seu dinheiro e comece a <span className="text-[#e5b85c]">destravar</span> sua vida financeira em <span className="text-[#e5b85c]">10 minutos por dia.</span>
          </h1>

          {/* Benefits Icons */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-2 md:gap-4 w-full max-w-5xl mb-4">
            <Badge icon={<Check className="w-3 h-3 md:w-3.5 md:h-3.5" />} text="Acesso vitalício" />
            <Badge icon={<Check className="w-3 h-3 md:w-3.5 md:h-3.5" />} text="10 minutos por dia" />
            <Badge icon={<Check className="w-3 h-3 md:w-3.5 md:h-3.5" />} text="Comece hoje" />
          </div>

          <div className="w-full max-w-2xl mt-0">
            <img 
              src="https://i.ibb.co/jvCK5W1J/BLOQUEIO-EMOCIONAL-1.webp"
              alt="Representação visual do cérebro com moedas" 
              className="w-full h-auto rounded-2xl shadow-2xl border border-gray-800/50"
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              width="662"
              height="496"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-light flex flex-col items-center py-12 md:py-16">
        {/* Social Proof */}
        <div className="w-full max-w-5xl px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8 text-brand-dark">
            Veja casos de pessoas que conseguiram transformar sua relação com dinheiro usando esse <span className="text-[#F59E0B]">Protocolo de 7 Dias</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 pt-4">
            <TestimonialItem 
              imgUrl="https://i.postimg.cc/NfSg9ZzX/1.webp"
              alt="Depoimento 1" 
              summary="Virou outra pessoa após o desafio" 
            />
            <TestimonialItem 
              imgUrl="https://i.postimg.cc/jdmswBFJ/2.webp"
              alt="Depoimento 2" 
              summary="Conseguiu a virada de chave que procurava" 
            />
            <TestimonialItem 
              imgUrl="https://i.postimg.cc/BQXSvJMB/3.webp"
              alt="Depoimento 3" 
              summary="Desbloqueou sua autossabotagem financeira" 
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Badge({ icon, text }: { icon: ReactNode, text: string }) {
  return (
    <div className="flex items-center justify-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold shadow-sm text-gray-900 w-auto text-center">
      <span className="text-brand-green shrink-0">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function TestimonialItem({ imgUrl, summary, alt }: { imgUrl: string, summary: string, alt: string }) {
  return (
    <div className="relative mt-12 md:mt-14">
      <div className="absolute -top-12 md:-top-14 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-gray-950 font-bold text-sm md:text-base px-4 py-2.5 rounded-xl shadow-lg w-11/12 max-w-[280px] text-center z-10">
        {summary}
      </div>
      <img src={imgUrl} alt={alt} className="w-full h-auto rounded-2xl shadow-xl border border-gray-800 relative z-0" referrerPolicy="no-referrer" loading="lazy" width="500" height="889" />
    </div>
  );
}



