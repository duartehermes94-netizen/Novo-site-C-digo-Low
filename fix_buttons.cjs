const fs = require('fs');

let uiCode = fs.readFileSync('src/components/ui.tsx', 'utf8');
uiCode = uiCode.replace(
  'import { ButtonHTMLAttributes } from "react";',
  'import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";'
);
uiCode = uiCode.replace(
  'export function Button({ className = "", children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {\n  return (\n    <button\n      className={`bg-brand-green hover:bg-green-600 transition-colors text-white font-bold text-lg md:text-xl py-4 px-8 rounded-xl shadow-lg w-full max-w-md mx-auto block ${className}`}\n      {...props}\n    >\n      {children}\n    </button>\n  );\n}',
  'export function Button({ className = "", href, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }) {\n  const combinedClassName = `bg-brand-green hover:bg-green-600 transition-colors text-white font-bold text-lg md:text-xl py-4 px-8 rounded-xl shadow-lg w-full max-w-md mx-auto flex justify-center items-center ${className}`;\n  if (href) {\n    return (\n      <a href={href} className={combinedClassName} {...props}>\n        {children}\n      </a>\n    );\n  }\n  return (\n    <button className={combinedClassName} {...props}>\n      {children}\n    </button>\n  );\n}'
);
fs.writeFileSync('src/components/ui.tsx', uiCode);

let faqCode = fs.readFileSync('src/components/FaqFooter.tsx', 'utf8');
faqCode = faqCode.replace(
  '<Button className="mb-6 w-full max-w-sm text-sm md:text-base py-5 font-bold">',
  '<Button href="https://pay.cakto.com.br/3bgmavv_855322" className="mb-6 w-full max-w-sm text-sm md:text-base py-5 font-bold">'
);
fs.writeFileSync('src/components/FaqFooter.tsx', faqCode);

let offerCode = fs.readFileSync('src/components/Offer.tsx', 'utf8');
offerCode = offerCode.replace(
  '<Button className="mb-6 w-full max-w-sm text-sm md:text-base py-5 font-bold">',
  '<Button href="https://pay.cakto.com.br/3bgmavv_855322" className="mb-6 w-full max-w-sm text-sm md:text-base py-5 font-bold">'
);
fs.writeFileSync('src/components/Offer.tsx', offerCode);
