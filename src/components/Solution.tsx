import localImg0 from "../assets/images/Design-sem-nome-(50).webp";
import localImg1 from "../assets/images/Design-sem-nome-(51).webp";
import localImg2 from "../assets/images/Design-sem-nome-(53).webp";
import { ReactNode } from "react";
import { BookOpen, ArrowDown } from "lucide-react";
import img0 from "../assets/images/Chat-GPT-Image-7-de-jul-de-2026-23-50-49.webp";
import img1 from "../assets/images/Chat-GPT-Image-8-de-jul-de-2026-15-46-34.webp";
import img2 from "../assets/images/Chat-GPT-Image-8-de-jul-de-2026-11-35-55.webp";
import img3 from "../assets/images/Chat-GPT-Image-8-de-jul-de-2026-15-01-06.webp";
import img4 from "../assets/images/Design-sem-nome-(50).webp";
import img5 from "../assets/images/Design-sem-nome-(51).webp";
import img6 from "../assets/images/Design-sem-nome-(53).webp";


export function Solution() {
  return (
    <section className="bg-brand-light pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center px-4">
        
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-brand-dark">
          Com o Protocolo <br className="md:hidden" />
          <span className="text-[#F59E0B]">Código Emocional da Riqueza</span> <br className="md:hidden" />
          você vai:
        </h2>

        <div className="flex flex-col gap-12 w-full mb-12">
          
          {/* ENTENDER */}
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-xl md:text-2xl font-bold text-brand-dark flex items-center gap-2">
              <span className="text-2xl">🧠</span> ENTENDER
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <FeatureCard 
                icon={<span className="text-3xl" role="img" aria-label="Lupa">🔎</span>}
                title="Entender exatamente por que o dinheiro some"
                desc="e finalmente parar de se culpar por isso"
              />
              <FeatureCard 
                icon={<span className="text-3xl" role="img" aria-label="Cadeado aberto">🔓</span>}
                title="Desbloquear os sabotadores invisíveis"
                desc="aqueles pensamentos que te travam sem você perceber"
              />
            </div>
          </div>

          {/* ELIMINAR */}
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-xl md:text-2xl font-bold text-brand-dark flex items-center gap-2">
              <span className="text-2xl">❌</span> ELIMINAR
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <FeatureCard 
                icon={<span className="text-3xl" role="img" aria-label="Sinal de pare">🛑</span>}
                title="Eliminar a culpa de prosperar"
                desc="e se permitir ganhar sem medo de algo ruim acontecer"
              />
              <FeatureCard 
                icon={<span className="text-3xl" role="img" aria-label="Tesoura">✂️</span>}
                title="Quebrar ciclos repetitivos"
                desc="que sua família passou para você e você está passando adiante"
              />
            </div>
          </div>

          {/* CONSTRUIR */}
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-xl md:text-2xl font-bold text-brand-dark flex items-center gap-2">
              <span className="text-2xl">🛡️</span> CONSTRUIR
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <FeatureCard 
                icon={<span className="text-3xl" role="img" aria-label="Rosto dormindo">😴</span>}
                title="Dormir tranquilo"
                desc="sabendo que você merece riqueza e está no caminho certo"
              />
              <FeatureCard 
                icon={<span className="text-3xl" role="img" aria-label="Dinheiro protegido">🏦</span>}
                title="Ter segurança financeira real"
                desc="não só na cabeça, mas na sua conta bancária"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-[#18181B] pt-16 pb-8 px-4 flex flex-col items-center">
        <div className="bg-[#F59E0B] rounded-full p-2 text-white mb-10 shadow-md -mt-24 border-[8px] border-brand-light z-10 relative">
          <ArrowDown className="w-6 h-6" />
        </div>

        <div className="border border-gray-700 rounded-full px-4 py-1.5 text-sm text-gray-300 font-medium mb-6 bg-[#1C1C1E]">
          E tem mais!
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center text-white max-w-2xl leading-tight">
          Veja tudo que você vai receber com o Protocolo Código Emocional da Riqueza:
        </h2>
      </div>

      <div className="w-full bg-brand-light pt-8 pb-16 px-4 flex flex-col items-center">
        {/* Deliverables List */}
        <div className="flex flex-col gap-8 w-full max-w-3xl mb-16">
          <DeliverableCard 
            title="📚 Jornada de 7 Dias de Transformação Emocional"
            desc="7 capítulos progressivos desbloqueando sua relação com dinheiro"
            imagePlaceholder="[IMAGEM JORNADA AQUI]"
            imageBg="bg-brand-orange"
            imageUrl={img0}
          />
          <h3 className="text-xl md:text-2xl font-bold text-brand-dark text-center mt-4 -mb-2">
            Em cada dia você irá ter acesso a:
          </h3>
          <DeliverableCard 
            title="Reflexões Profundas + Perguntas Poderosas"
            desc="Cada dia com reflexão estruturada, pergunta que provoca autoconhecimento e ação prática para transformar emoções em atitudes reais."
            imagePlaceholder="[IMAGEM REFLEXÕES AQUI]"
            imageBg="bg-brand-green"
            imageUrl={img1}
          />
          <DeliverableCard 
            title="Checklist de Autoanálise"
            desc="Identifique seus bloqueios específicos, seus gatilhos emocionais e seus padrões de sabotagem."
            imagePlaceholder="[IMAGEM CHECKLIST AQUI]"
            imageBg="bg-[#1C1C1E]"
            imageUrl={img2}
          />
          <DeliverableCard 
            title="Ações Práticas Diárias"
            desc="Não é só teoria. Cada dia tem uma ação concreta que você faz em 10 minutos para reprogramar sua mente."
            imagePlaceholder="[IMAGEM AÇÕES AQUI]"
            imageBg="bg-[#D93B1F]"
            imageUrl={img3}
          />
        </div>
      </div>

      <div className="w-full bg-[#18181B] py-8 px-4 flex flex-col items-center">
        <div className="inline-block border border-gray-700 rounded-full px-6 py-2 text-sm text-gray-300 font-medium mb-6 bg-[#1C1C1E] shadow-sm">
          Ainda não acabou!
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl leading-tight text-center">
          Você também vai receber <br className="block md:hidden" /><span className="text-[#e5b85c]">3 bônus exclusivos</span>:
        </h2>
      </div>

      <div className="w-full bg-brand-light pt-12 pb-16 px-4 flex flex-col items-center">
        {/* More Deliverables (Dark Bg) */}
        <div className="w-full max-w-3xl flex flex-col gap-6">
          <MoreDeliverableCard 
            title="🎁 BÔNUS 1: 21 Coisas Que Você Precisa Desapegar Para Prosperar"
            desc="Identifique e libere os 21 bloqueios emocionais e mentais que te afastam da abundância. Cada um com uma nova verdade libertadora e uma ação prática para aplicar imediatamente."
            imagePlaceholder="[IMAGEM BÔNUS 1 AQUI]"
            imageUrl={localImg0}
          />
          <MoreDeliverableCard 
            title="🎁 BÔNUS 2: Guia Rápido|Hábitos de Quem Desbloqueia a Riqueza"
            desc="7 hábitos poderosos que pessoas bem-sucedidas aplicam diariamente. Transformação consistente, mentalidade de abundância, resultados comprováveis. Comece hoje mesmo."
            imagePlaceholder="[IMAGEM BÔNUS 2 AQUI]"
            imageUrl={localImg1}
            reverse
          />
          <MoreDeliverableCard 
            title="🎁 BÔNUS 3: Ativação Matinal da Prosperidade|30 Afirmações Poderosas"
            desc="Reprograme seu subconsciente com 30 afirmações que ativam sua frequência de abundância. Use pela manhã para alinhar seu dia com prosperidade."
            imagePlaceholder="[IMAGEM BÔNUS 3 AQUI]"
            imageUrl={localImg2}
          />
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center md:items-start text-center md:text-left gap-4 shadow-sm border border-gray-100 h-full">
      <div className="bg-orange-50 p-3 rounded-2xl shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-brand-dark text-base md:text-lg mb-1">{title}</h4>
        <p className="font-medium text-gray-600 text-sm md:text-base leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function DeliverableCard({ title, desc, imagePlaceholder, imageBg, imageUrl }: { title: string, desc: string, imagePlaceholder: string, imageBg: string, imageUrl?: string }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
      <div className={`w-full md:w-2/5 min-h-[240px] md:min-h-0 aspect-video md:aspect-auto relative overflow-hidden ${imageBg}`}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover absolute inset-0" loading="lazy" width="662" height="465" />
        ) : (
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-center text-white text-sm p-4 font-medium backdrop-blur-sm">
            {imagePlaceholder}
          </div>
        )}
      </div>
      <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
        <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-4 leading-tight">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function MoreDeliverableCard({ title, desc, imagePlaceholder, imageUrl, reverse = false }: { title: string, desc: string, imagePlaceholder: string, imageUrl?: string, reverse?: boolean }) {
  return (
    <div className={`bg-[#1C1C1E] rounded-3xl overflow-hidden shadow-xl border border-gray-800 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="w-full md:w-2/5 min-h-[240px] md:min-h-0 aspect-video md:aspect-auto relative bg-gray-900 border-gray-800 border-b md:border-b-0 md:border-r overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover absolute inset-0" loading="lazy" width="662" height="465" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-center text-gray-500 text-sm p-4 font-medium">
            {imagePlaceholder}
          </div>
        )}
      </div>
      <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
        <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
