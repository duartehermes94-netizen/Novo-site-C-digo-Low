const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'src/components/FaqFooter.tsx',
  'src/components/Offer.tsx',
  'src/components/Problem.tsx',
  'src/components/Solution.tsx'
];

const imageMap = {
  "https://i.postimg.cc/rw0XLXBQ/Chat-GPT-Image-10-de-jul-de-2026-16-51-03.webp": "Chat-GPT-Image-10-de-jul-de-2026-16-51-03.webp",
  "https://i.postimg.cc/28PwKsrb/novalogocodigo-copiar-4.webp": "novalogocodigo-copiar-4.webp",
  "https://i.postimg.cc/bNKTB7p2/novalogocodigo-copiar3.webp": "novalogocodigo-copiar3.webp",
  "https://i.postimg.cc/FKXCqNVK/Copia-de-KCP-Bloco-3.webp": "Copia-de-KCP-Bloco-3.webp",
  "https://i.postimg.cc/PfFWJVqw/Chat-GPT-Image-7-de-jul-de-2026-23-50-49.webp": "Chat-GPT-Image-7-de-jul-de-2026-23-50-49.webp",
  "https://i.postimg.cc/PfSG9pjH/Chat-GPT-Image-8-de-jul-de-2026-15-46-34.webp": "Chat-GPT-Image-8-de-jul-de-2026-15-46-34.webp",
  "https://i.postimg.cc/SRzb4zJR/Chat-GPT-Image-8-de-jul-de-2026-11-35-55.webp": "Chat-GPT-Image-8-de-jul-de-2026-11-35-55.webp",
  "https://i.postimg.cc/50B5hVz0/Chat-GPT-Image-8-de-jul-de-2026-15-01-06.webp": "Chat-GPT-Image-8-de-jul-de-2026-15-01-06.webp",
  "https://i.postimg.cc/j22LbBg8/Design-sem-nome-(50).webp": "Design-sem-nome-(50).webp",
  "https://i.postimg.cc/JnB3j6Cb/Design-sem-nome-(51).webp": "Design-sem-nome-(51).webp",
  "https://i.postimg.cc/P5FGVx0h/Design-sem-nome-(53).webp": "Design-sem-nome-(53).webp"
};

for (const file of filesToProcess) {
  let content = fs.readFileSync(file, 'utf8');
  let imports = [];
  let index = 0;
  
  for (const [url, filename] of Object.entries(imageMap)) {
    if (content.includes(url)) {
      const varName = `img${index++}`;
      imports.push(`import ${varName} from "../assets/images/${filename}";`);
      // Replace the string with the variable (without quotes)
      content = content.replace(new RegExp(`"${url}"`, 'g'), `{${varName}}`);
    }
  }
  
  if (imports.length > 0) {
    // Add imports after the last import statement
    const importRegex = /import [^;]+;/g;
    let lastImportMatch;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      lastImportMatch = match;
    }
    
    if (lastImportMatch) {
      const insertPos = lastImportMatch.index + lastImportMatch[0].length;
      content = content.slice(0, insertPos) + '\n' + imports.join('\n') + content.slice(insertPos);
    } else {
      content = imports.join('\n') + '\n' + content;
    }
    fs.writeFileSync(file, content);
  }
}
