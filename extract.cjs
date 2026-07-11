const fs = require('fs');
const files = [
  'src/components/Hero.tsx',
  'src/components/Problem.tsx',
  'src/components/Solution.tsx',
  'src/components/Offer.tsx',
  'src/components/Closing.tsx',
  'src/components/FaqFooter.tsx'
];

let allText = '';
for (const file of files) {
  if (fs.existsSync(file)) {
    allText += `\n--- ${file.split('/').pop()} ---\n\n`;
    const content = fs.readFileSync(file, 'utf8');
    
    // Split by lines, try to extract text inside HTML tags
    const lines = content.split('\n');
    for (let line of lines) {
      // Very naive approach: remove JSX tags and just print text
      // Replace all <[^>]+> with empty string
      let text = line.replace(/<[^>]+>/g, '').trim();
      text = text.replace(/\{[^}]+\}/g, '').trim(); // remove curly braces stuff like {text} or {imgUrl}
      text = text.replace(/&mdash;/g, '—').replace(/&quot;/g, '"');
      
      // Filter out code lines
      if (
        text.length > 0 && 
        !text.includes('function ') && 
        !text.includes('export ') && 
        !text.includes('import ') &&
        !text.includes('return ') &&
        !text.includes('className=') &&
        !text.startsWith('//') &&
        !text.match(/^[{}();,\s]+$/) // empty/syntax only
      ) {
        // also clean up random JSX fragments
        if (!text.includes('=>') && !text.includes('===') && !text.includes('}')) {
             allText += text + '\n';
        }
      }
    }
  }
}
fs.writeFileSync('copy.txt', allText);
