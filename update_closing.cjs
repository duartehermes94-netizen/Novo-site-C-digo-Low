const fs = require('fs');
let code = fs.readFileSync('src/components/Closing.tsx', 'utf8');

const original = `            <div className="relative z-10 w-full max-w-md aspect-[3/4] bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden flex items-center justify-center">
              <div className="text-gray-500 font-medium text-center px-4">
                {'{PLACEHOLDER: Adicionar foto profissional + bio}'}
              </div>
            </div>`;

const replacement = `            <div className="relative z-10 w-full max-w-md flex items-center justify-center">
              <img 
                src="/foto profissional.webp" 
                alt="Izabel Zenith" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>`;

code = code.replace(original, replacement);
fs.writeFileSync('src/components/Closing.tsx', code);
