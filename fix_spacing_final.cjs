const fs = require('fs');

let offerCode = fs.readFileSync('src/components/Offer.tsx', 'utf8');
offerCode = offerCode.replace(
  'className="w-full bg-brand-light pt-16 pb-4 px-4 flex flex-col items-center rounded-[3rem] shadow-xl relative z-10"',
  'className="w-full bg-brand-light pt-16 pb-12 px-4 flex flex-col items-center rounded-[3rem] shadow-xl relative z-10"'
);
fs.writeFileSync('src/components/Offer.tsx', offerCode);

let closingCode = fs.readFileSync('src/components/Closing.tsx', 'utf8');
closingCode = closingCode.replace(
  '<section className="bg-brand-dark pt-4 pb-20 px-4">',
  '<section className="bg-brand-dark pt-12 pb-20 px-4">'
);
fs.writeFileSync('src/components/Closing.tsx', closingCode);
