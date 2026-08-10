const fs = require('fs');

let faqCode = fs.readFileSync('src/components/FaqFooter.tsx', 'utf8');

// Add imports
if (!faqCode.includes('import { useState }')) {
  faqCode = faqCode.replace(
    'import { Plus } from "lucide-react";',
    'import { Plus, Minus } from "lucide-react";\nimport { useState } from "react";'
  );
}

// Replace FaqItem function
const oldFaqItem = `function FaqItem({ question, answer, isOpen = false }: { question: string, answer?: string, isOpen?: boolean }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all group">
      <div className="p-5 flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-3">
          <div className={\`w-6 h-6 rounded-full flex items-center justify-center shrink-0 \${isOpen ? 'bg-gray-200' : 'bg-gray-100 group-hover:bg-gray-200'} transition-colors\`}>
            <Plus className={\`w-4 h-4 text-gray-500 \${isOpen ? 'rotate-45' : ''} transition-transform\`} />
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
}`;

const newFaqItem = `function FaqItem({ question, answer, isOpen = false }: { question: string, answer?: string, isOpen?: boolean }) {
  const [open, setOpen] = useState(isOpen);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all group">
      <div className="p-5 flex items-center justify-between cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="flex items-center gap-3">
          <div className={\`w-6 h-6 rounded-full flex items-center justify-center shrink-0 \${open ? 'bg-gray-200' : 'bg-gray-100 group-hover:bg-gray-200'} transition-colors\`}>
            {open ? <Minus className="w-4 h-4 text-gray-500 transition-transform" /> : <Plus className="w-4 h-4 text-gray-500 transition-transform" />}
          </div>
          <h4 className="font-semibold text-brand-dark text-lg text-left">{question}</h4>
        </div>
      </div>
      {open && answer && (
        <div className="px-5 pb-5 pt-1 pl-14 text-gray-600 font-medium text-left">
          {answer}
        </div>
      )}
    </div>
  );
}`;

if (faqCode.includes('function FaqItem')) {
  faqCode = faqCode.replace(/function FaqItem\(\{\s*question[\s\S]*?\}\s*\);\s*\}/, newFaqItem);
}

fs.writeFileSync('src/components/FaqFooter.tsx', faqCode);
