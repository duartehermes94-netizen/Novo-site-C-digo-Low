const fs = require('fs');

let offerCode = fs.readFileSync('src/components/Offer.tsx', 'utf8');
offerCode = offerCode.replace(
  'className="w-full bg-brand-light pt-16 pb-8 px-4 flex flex-col items-center rounded-t-[3rem] shadow-xl relative z-10 mb-0"',
  'className="w-full bg-brand-light pt-16 pb-16 px-4 flex flex-col items-center rounded-[3rem] shadow-xl relative z-10 mb-0"'
);
fs.writeFileSync('src/components/Offer.tsx', offerCode);
