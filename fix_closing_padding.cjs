const fs = require('fs');
let code = fs.readFileSync('src/components/Closing.tsx', 'utf8');
code = code.replace(
  '<section className="bg-brand-dark py-20 px-4">',
  '<section className="bg-brand-dark pt-8 pb-20 px-4">'
);
fs.writeFileSync('src/components/Closing.tsx', code);
