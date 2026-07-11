import { AlertTriangle } from "lucide-react";

import thoughtsImage from '@/src/assets/images/Copia-de-KCP-Bloco-3.webp';

export function Problem() {
  return (
    <section className="bg-brand-dark text-white py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="inline-block bg-white rounded-full px-4 py-1.5 text-sm text-black font-medium mb-8">
          A verdade nua e crua...
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 leading-tight">
          Você não aguenta mais abrir a conta bancária e ver que o <span className="text-brand-orange">dinheiro sumiu</span> de novo.
        </h2>
        
        <p className="text-white text-center text-lg mb-12 max-w-2xl">
          É como se houvesse um buraco invisível na sua carteira. Por isso, você pensa:
        </p>

        {/* Image with pain points representation */}
        <div className="relative w-full max-w-4xl mx-auto mb-20">
          <div className="relative">
            <img 
              src={thoughtsImage}
              alt="Pensamentos e bloqueios emocionais" 
              className="w-full h-auto"
              loading="lazy"
              width="665"
              height="568"
            />
          </div>
        </div>

        <p className="text-xl md:text-2xl font-semibold text-center mb-10 max-w-3xl">
          Eu sei... Você não aguenta mais essa sensação de estar preso em um ciclo que não consegue quebrar. Estou certa?
        </p>

        {/* Agitation Card */}
        <div className="bg-white rounded-3xl max-w-[540px] mx-auto shadow-xl mt-8 pt-12 p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-red-500"></div>
          
          <div className="bg-[#F59E0B] rounded-full p-4 mb-6 inline-flex relative z-10">
            <AlertTriangle className="w-8 h-8 text-brand-dark" strokeWidth={2.5} />
          </div>
            
          <h3 className="text-xl md:text-[22px] font-bold mb-5 text-brand-dark leading-snug">
            Mas e se você pudesse desbloquear sua relação com dinheiro em apenas 7 dias, sem esperar meses ou investir alto? Isso mudaria sua vida?
          </h3>
          
          <div className="w-12 h-1 bg-gray-200 my-4 rounded-full"></div>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Se a sua resposta for "SIM", o <strong className="text-[#F59E0B] font-bold">Protocolo Código Emocional da Riqueza</strong> é para você.
          </p>
        </div>

      </div>
    </section>
  );
}
