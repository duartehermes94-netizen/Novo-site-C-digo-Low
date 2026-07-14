const fs = require('fs');
let code = fs.readFileSync('src/components/Closing.tsx', 'utf8');
code = code.replace(
  'className="w-full h-auto object-cover rounded-3xl shadow-2xl border border-gray-700/50"',
  'className="w-full h-auto object-cover rounded-[2rem] shadow-xl"'
);
fs.writeFileSync('src/components/Closing.tsx', code);
