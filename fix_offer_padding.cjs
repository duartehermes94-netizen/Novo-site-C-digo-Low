const fs = require('fs');
let code = fs.readFileSync('src/components/Offer.tsx', 'utf8');
code = code.replace(
  'className="w-full bg-brand-light pt-16 pb-8 px-4 flex flex-col items-center rounded-t-[3rem]"',
  'className="w-full bg-brand-light pt-16 pb-0 px-4 flex flex-col items-center rounded-t-[3rem]"'
);
fs.writeFileSync('src/components/Offer.tsx', code);
