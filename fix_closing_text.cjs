const fs = require('fs');

let closingCode = fs.readFileSync('src/components/Closing.tsx', 'utf8');

closingCode = closingCode.replace(
  '<p className="text-white text-center max-w-md">\n            Então, clique no botão abaixo e acesse agora o Protocolo Código Emocional da Riqueza.\n          </p>',
  ''
);

fs.writeFileSync('src/components/Closing.tsx', closingCode);
