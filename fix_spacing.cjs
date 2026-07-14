const fs = require('fs');

let closingCode = fs.readFileSync('src/components/Closing.tsx', 'utf8');
closingCode = closingCode.replace(
  '<section className="bg-brand-dark pt-4 pb-20 px-4">',
  '<section className="bg-brand-dark pt-0 pb-20 px-4">'
);
fs.writeFileSync('src/components/Closing.tsx', closingCode);

let offerCode = fs.readFileSync('src/components/Offer.tsx', 'utf8');
offerCode = offerCode.replace(
  'className="w-full max-w-4xl mt-24 mb-8"',
  'className="w-full max-w-4xl mt-24 mb-0"'
);
fs.writeFileSync('src/components/Offer.tsx', offerCode);
