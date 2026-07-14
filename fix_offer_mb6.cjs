const fs = require('fs');
let offerCode = fs.readFileSync('src/components/Offer.tsx', 'utf8');
offerCode = offerCode.replace(
  'className="w-full max-w-4xl mt-16 mb-6"',
  'className="w-full max-w-4xl mt-16 mb-0"'
);
fs.writeFileSync('src/components/Offer.tsx', offerCode);
