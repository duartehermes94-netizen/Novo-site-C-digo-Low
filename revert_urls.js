import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');

const urlMap = {
  "https://i.postimg.cc/28PwKsrb/novalogocodigo-copiar-4.webp": "logoImage",
  "https://i.postimg.cc/50B5hVz0/Chat-GPT-Image-8-de-jul-de-2026-15-01-06.webp": "sol4Image",
  "https://i.postimg.cc/9QFQKNdH/BLOQUEIO-EMOCIONAL.webp": "cerebroImage",
  "https://i.postimg.cc/BbvqBzsk/1.png": "dep1Image",
  "https://i.postimg.cc/bNKTB7p2/novalogocodigo-copiar3.webp": "logoLightImage",
  "https://i.postimg.cc/cCJsBzZV/2.png": "dep2Image",
  "https://i.postimg.cc/FKXCqNVK/Copia-de-KCP-Bloco-3.webp": "thoughtsImage",
  "https://i.postimg.cc/j22LbBg8/Design-sem-nome-(50).webp": "sol5Image",
  "https://i.postimg.cc/JnB3j6Cb/Design-sem-nome-(51).webp": "sol6Image",
  "https://i.postimg.cc/P5FGVx0h/Design-sem-nome-(53).webp": "sol7Image",
  "https://i.postimg.cc/PfFWJVqw/Chat-GPT-Image-7-de-jul-de-2026-23-50-49.webp": "sol1Image",
  "https://i.postimg.cc/PfSG9pjH/Chat-GPT-Image-8-de-jul-de-2026-15-46-34.webp": "sol2Image",
  "https://i.postimg.cc/PJqtQ7hg/3.png": "dep3Image",
  "https://i.postimg.cc/rw0XLXBQ/Chat-GPT-Image-10-de-jul-de-2026-16-51-03.webp": "mockupImage",
  "https://i.postimg.cc/SRzb4zJR/Chat-GPT-Image-8-de-jul-de-2026-11-35-55.webp": "sol3Image"
};

// Wait, I already added imports at the top of the files. We can just use git checkout or something. 
