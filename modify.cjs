const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// The original StepTwelve (Chás Hormonais)
code = code.replace('function StepTwelve({ onNext }: { onNext: () => void }) {', 'function Step__NEW_THIRTEEN__() {');

// The original StepThirteen (Sintomas)
code = code.replace('function StepThirteen() {', 'function Step__NEW_TWELVE__({ onNext }: { onNext: () => void }) {');

// Rename them finally
code = code.replace('function Step__NEW_THIRTEEN__() {', 'function StepThirteen() {');
code = code.replace('function Step__NEW_TWELVE__({ onNext }: { onNext: () => void }) {', 'function StepTwelve({ onNext }: { onNext: () => void }) {');

// 2. Adjust "Gisela eliminou..."
code = code.replace(
  'Gisela eliminou <strong className="text-[#d82a27] font-bold">12KGs</strong>, perdeu Barriga e Aliviou os<br/>\n          sintomas com os <strong className="text-[#24a048] font-bold underline decoration-2 underline-offset-2">Chás Hormonais</strong>',
  'Gisela eliminou <strong className="text-[#d82a27] font-bold">12KGs</strong>, perdeu Barriga e Aliviou<br/>\n          os sintomas com os <strong className="text-[#24a048] font-bold underline decoration-2 underline-offset-2">Chás Hormonais</strong>'
);

// We need to also adjust its classname so it has w-full max-w-[340px] if it hasn't been added
code = code.replace(
  '<p className="mt-5 text-center text-[13.5px] sm:text-[14.5px] font-medium text-slate-800 leading-snug px-2">',
  '<p className="mt-5 text-center text-[13.5px] sm:text-[14px] font-medium text-slate-800 leading-snug px-2 w-full max-w-[340px]">'
);

// 3. Remove shadow from fixed bottom button in the "Chás Hormonais" (Now Step 13, but let's replace its string)
// We will look for the exact button in Chás Hormonais:
code = code.replace(
  '<button \n            onClick={onNext}\n            className="w-full bg-[#24a048] text-white rounded-xl py-4 font-bold text-[13px] min-[370px]:text-[14px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors shadow-[0_8px_20px_-6px_rgba(36,160,72,0.6)] active:scale-[0.98] flex items-center justify-center gap-2"\n          >\n            QUERO EMAGRECER <span className="bg-white/20 rounded text-xs px-1 py-0.5">✔</span>\n          </button>',
  '<button \n            className="w-full bg-[#24a048] text-white rounded-xl py-4 font-bold text-[13px] min-[370px]:text-[14px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors shadow-sm active:scale-[0.98] flex items-center justify-center gap-2"\n          >\n            QUERO EMAGRECER <span className="bg-white/20 rounded text-xs px-1 py-0.5">✔</span>\n          </button>'
);
code = code.replace(
  '<button \n            onClick={onNext}\n            className="w-full bg-[#24a048] text-white rounded-xl py-4 font-bold text-[15px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors shadow-[0_4px_12px_-4px_rgba(36,160,72,0.5)] active:scale-[0.98] flex items-center justify-center gap-2"\n          >\n            QUERO EMAGRECER <span className="text-white/80 shrink-0 text-[13px]">✔</span>\n          </button>',
  '<button \n            className="w-full bg-[#24a048] text-white rounded-xl py-4 font-bold text-[15px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors shadow-[0_4px_12px_-4px_rgba(36,160,72,0.5)] active:scale-[0.98] flex items-center justify-center gap-2"\n          >\n            QUERO EMAGRECER <span className="text-white/80 shrink-0 text-[13px]">✔</span>\n          </button>'
);

// 4. Remove the block with the last QUERO ELIMINAR 1KG POR SEMANA inline button
let buttonBlock = `<div className="w-full mt-8 flex justify-center">
            <button 
              className="w-full bg-[#24a048] text-white rounded-xl py-4 font-bold text-[14px] min-[370px]:text-[15px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors shadow-[0_4px_12px_-4px_rgba(36,160,72,0.5)] active:scale-[0.98]"
            >
              QUERO ELIMINAR 1KG POR SEMANA
            </button>
          </div>`;
code = code.replace(buttonBlock, '');

// 5. Add onClick={onNext} and fix shadow in the fixed bottom button of StepTwelve (Sintomas)
let oldBottomBtn = `<button 
            className="w-full bg-[#24a048] text-white rounded-xl py-4 font-bold text-[13px] min-[370px]:text-[14px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors shadow-[0_8px_20px_-6px_rgba(36,160,72,0.6)] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            QUERO ELIMINAR 1KG POR SEMANA <span className="bg-white/20 rounded text-xs px-1 py-0.5">✔</span>
          </button>`;
let newBottomBtn = `<button 
            onClick={onNext}
            className="w-full bg-[#24a048] text-white rounded-xl py-4 font-bold text-[13px] min-[370px]:text-[14px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors shadow-sm active:scale-[0.98] flex items-center justify-center gap-2"
          >
            QUERO ELIMINAR 1KG POR SEMANA <span className="bg-white/20 rounded text-xs px-1 py-0.5">✔</span>
          </button>`;
code = code.replace(oldBottomBtn, newBottomBtn);

// 6. Add onClick={onNext} to the inline buttons in StepTwelve (Sintomas)
code = code.replace(
  '<button \n            className="w-full bg-[#d82a27] text-white rounded-xl py-4 font-bold tracking-tight text-[15px] hover:bg-[#b02220] transition-colors shadow-[0_4px_12px_-4px_rgba(216,42,39,0.5)] active:scale-[0.98]"\n          >',
  '<button \n            onClick={onNext}\n            className="w-full bg-[#d82a27] text-white rounded-xl py-4 font-bold tracking-tight text-[15px] hover:bg-[#b02220] transition-colors shadow-[0_4px_12px_-4px_rgba(216,42,39,0.5)] active:scale-[0.98]"\n          >'
);

code = code.replace(
  '<button \n            className="w-full bg-[#24a048] text-white rounded-xl py-4 font-bold text-[14px] min-[370px]:text-[15px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors shadow-[0_4px_12px_-4px_rgba(36,160,72,0.5)] active:scale-[0.98]"\n          >',
  '<button \n            onClick={onNext}\n            className="w-full bg-[#24a048] text-white rounded-xl py-4 font-bold text-[14px] min-[370px]:text-[15px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors shadow-[0_4px_12px_-4px_rgba(36,160,72,0.5)] active:scale-[0.98]"\n          >'
);

fs.writeFileSync('src/App.tsx', code, 'utf8');
console.log('done correctly!');
