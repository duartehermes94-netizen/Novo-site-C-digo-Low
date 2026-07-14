const fs = require('fs');
let code = fs.readFileSync('src/components/Offer.tsx', 'utf8');

code = code.replace('import { motion } from "motion/react";\n', '');

const oldRecap = `function RecapItem({ text, price }: { text: string, price: string }) {
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
}`;

const newRecap = `function RecapItem({ text, price }: { text: string, price: string }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
      <div className="flex items-center gap-2 pr-4">
        <Check className="w-5 h-5 text-brand-green shrink-0" strokeWidth={2.5} />
        <span className="text-gray-700 font-medium text-sm md:text-base">{text}</span>
      </div>
      <div className="relative whitespace-nowrap shrink-0">
        <span className="text-brand-green font-bold">{price}</span>
        <div className="absolute left-[-5%] top-1/2 w-[110%] h-[2px] bg-red-500 -translate-y-1/2 rounded-full"></div>
      </div>
    </div>
  );
}`;

code = code.replace(oldRecap, newRecap);
fs.writeFileSync('src/components/Offer.tsx', code);
