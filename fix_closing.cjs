const fs = require('fs');
let code = fs.readFileSync('src/components/Closing.tsx', 'utf8');

const original = `            <div className="relative z-10 w-full max-w-md flex items-center justify-center">
              <img 
                src="/foto profissional.webp" 
                alt="Izabel Zenith" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>`;

const replacement = `            <div className="relative z-10 w-full max-w-md flex items-center justify-center">
              <img 
                src="/foto profissional.webp" 
                alt="Izabel Zenith" 
                className="w-full h-auto object-cover rounded-3xl shadow-2xl border border-gray-700/50"
                loading="lazy"
              />
            </div>`;

code = code.replace(original, replacement);
fs.writeFileSync('src/components/Closing.tsx', code);
