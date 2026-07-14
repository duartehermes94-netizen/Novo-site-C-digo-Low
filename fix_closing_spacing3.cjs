const fs = require('fs');

let closingCode = fs.readFileSync('src/components/Closing.tsx', 'utf8');
closingCode = closingCode.replace(
  '<section className="bg-brand-dark pt-16 pb-20 px-4">',
  '<section className="bg-brand-dark pt-8 pb-20 px-4">'
);
fs.writeFileSync('src/components/Closing.tsx', closingCode);

