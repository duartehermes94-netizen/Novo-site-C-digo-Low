const fs = require('fs');

let closingCode = fs.readFileSync('src/components/Closing.tsx', 'utf8');
closingCode = closingCode.replace(
  '<section className="bg-brand-dark pt-8 pb-20 px-4">',
  '<section className="bg-brand-dark pt-4 pb-20 px-4">'
);
fs.writeFileSync('src/components/Closing.tsx', closingCode);

let offerCode = fs.readFileSync('src/components/Offer.tsx', 'utf8');
offerCode = offerCode.replace(
  'className="w-full bg-brand-light py-16 px-4 flex flex-col items-center rounded-t-[3rem]"',
  'className="w-full bg-brand-light pt-16 pb-8 px-4 flex flex-col items-center rounded-t-[3rem]"'
);
fs.writeFileSync('src/components/Offer.tsx', offerCode);
