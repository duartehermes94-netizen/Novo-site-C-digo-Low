const fs = require('fs');
let code = fs.readFileSync('vite.config.ts', 'utf8');
code = code.replace(`            'vendor-motion': ['motion'],`, '');
fs.writeFileSync('vite.config.ts', code);
