const fs = require('fs');

let closingCode = fs.readFileSync('src/components/Closing.tsx', 'utf8');

if (!closingCode.includes('<Button href=')) {
  closingCode = closingCode.replace(
    'Então, clique no botão abaixo e acesse agora o Protocolo Código Emocional da Riqueza.\n          </p>',
    'Então, clique no botão abaixo e acesse agora o Protocolo Código Emocional da Riqueza.\n          </p>\n          <div className="mt-8 w-full">\n            <Button href="https://pay.cakto.com.br/3bgmavv_855322" className="w-full max-w-sm text-sm md:text-base py-5 font-bold">\n              QUERO DESBLOQUEAR MEU CÓDIGO AGORA\n            </Button>\n          </div>'
  );
  
  if (!closingCode.includes('import { Button }')) {
    closingCode = 'import { Button } from "./ui";\n' + closingCode;
  }
}

fs.writeFileSync('src/components/Closing.tsx', closingCode);
