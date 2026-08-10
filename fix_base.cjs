const fs = require('fs');

let configCode = fs.readFileSync('vite.config.ts', 'utf8');

if (!configCode.includes('base:')) {
  configCode = configCode.replace(
    'export default defineConfig(() => {\n  return {\n    plugins:',
    "export default defineConfig(() => {\n  return {\n    base: './',\n    plugins:"
  );
}

fs.writeFileSync('vite.config.ts', configCode);
