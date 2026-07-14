const fs = require('fs');
let code = fs.readFileSync('src/components/Offer.tsx', 'utf8');
code = code.replace(
  '<section className="bg-brand-dark flex flex-col items-center pb-20">',
  '<section className="bg-brand-dark flex flex-col items-center pb-0">'
);
fs.writeFileSync('src/components/Offer.tsx', code);
