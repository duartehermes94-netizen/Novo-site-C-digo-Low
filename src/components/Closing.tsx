import { Button } from "./ui";
import { CheckCircle } from "lucide-react";

export function Closing() {
  return (
    <>
      {/* Two Choices */}
      <section className="bg-brand-dark pt-8 pb-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-block border border-gray-600 rounded-full px-6 py-2 text-sm text-gray-300 font-medium mb-6">
            Vamos conversar sério?
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Agora você tem <span className="text-[#e5b85c]">duas opções</span> e precisa escolher HOJE:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
            
            {/* Option 1 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col shadow-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center shrink-0 text-3xl overflow-hidden border border-gray-300 shadow-inner">
                   <div className="bg-gray-100 w-full h-full flex items-center justify-center">
                     <span className="opacity-50 grayscale">❌</span>
                   </div>
                </div>
                <div>
                  <div className="bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                    Opção 1
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark leading-tight">Continuar sofrendo com o ciclo</h3>
                </div>
              </div>
              <div className="text-gray-600 font-medium flex flex-col gap-3">
                <p>Continuar ganhando bem, mas vendo o dinheiro sumir. Continuar se culpando por não conseguir juntar.</p>
                <p>Continuar com medo de prosperar. Continuar herdando os bloqueios da sua família.</p>
                <p>Continuar se sabotando sem entender por quê. Envelhecer sem ter construído segurança financeira real.</p>
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col shadow-xl border-2 border-brand-green/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-green"></div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center shrink-0 shadow-inner border border-green-600">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2 shadow-sm">
                    Opção 2
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark leading-tight">Desbloquear seu código emocional HOJE</h3>
                </div>
              </div>
              <div className="text-gray-600 font-medium flex flex-col gap-3">
                <p>Investir R$ 67 em 7 dias que vão mudar sua relação com dinheiro para sempre.</p>
                <p>Entender por que você se sabota — e parar. Eliminar a culpa de prosperar.</p>
                <p>Dormir tranquila sabendo que você merece riqueza. Finalmente ter segurança financeira real.</p>
              </div>
            </div>

          </div>

          <div className="text-center text-white mb-6">
            <p className="text-2xl md:text-3xl font-bold text-white mt-6">
              Você e eu sabemos que a <span className="text-[#e5b85c]">opção 2</span> é a mais <span className="text-[#e5b85c]">inteligente</span>.
            </p>
          </div>
          
          
          
        </div>
      </section>

      {/* Author */}
      <section className="bg-brand-darker py-20 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Quem criou o Código Emocional da Riqueza
            </h2>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#e5b85c]">Izabel Zenith</h3>
              <p className="text-white font-medium">Criadora do Código Emocional da Riqueza</p>
            </div>
            <div className="space-y-4 text-gray-300 text-lg mb-8">
              <p>Auxilia empreendedores, autônomos e profissionais a desbloquear sua relação com dinheiro e prosperar sem culpa.</p>
              <p>Identifica bloqueios profundos, elimina padrões de sabotagem financeira e constrói uma relação saudável e consciente com o dinheiro.</p>
              <p>Acredita que a verdadeira riqueza começa dentro e que quando você muda por dentro, os resultados aparecem por fora.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center">
            {/* Orange rocket shape background placeholder */}
            <div className="absolute inset-0 bg-brand-orange rounded-full blur-3xl opacity-20 transform scale-75"></div>
            <div className="relative z-10 w-full max-w-md flex items-center justify-center">
              <img 
                src="/foto profissional.webp" 
                alt="Izabel Zenith" 
                className="w-full h-auto object-cover rounded-[2rem] shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
