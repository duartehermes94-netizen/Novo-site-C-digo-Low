const fs = require('fs');

let faqCode = fs.readFileSync('src/components/FaqFooter.tsx', 'utf8');
faqCode = faqCode.replace('3x de R$ 22,33', '8x de R$ 9,90');
fs.writeFileSync('src/components/FaqFooter.tsx', faqCode);

let offerCode = fs.readFileSync('src/components/Offer.tsx', 'utf8');
offerCode = offerCode.replace('3x de R$ 22,33', '8x de R$ 9,90');
fs.writeFileSync('src/components/Offer.tsx', offerCode);
