const fs = require('fs');
const files = [
  'src/components/Hero.tsx',
  'src/components/Problem.tsx',
  'src/components/Solution.tsx',
  'src/components/Offer.tsx',
  'src/components/Closing.tsx',
  'src/components/FaqFooter.tsx',
  'src/components/ui.tsx'
];

let allText = '';
for (const file of files) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    // Extract text between > and <
    let matches = content.match(/>([^<]+)</g);
    if (matches) {
      matches.forEach(m => {
        let text = m.substring(1, m.length - 1).trim();
        if (text && !text.startsWith('{') && !text.startsWith('import') && !text.startsWith('export')) {
          allText += text + '\n';
        }
      });
    }
  }
}
fs.writeFileSync('copy.txt', allText);
