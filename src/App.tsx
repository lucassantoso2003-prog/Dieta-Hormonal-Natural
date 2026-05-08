import React, { useState } from 'react';

function StepOne({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh]">
      <div className="mt-auto flex flex-col items-center w-full pt-8">
        <h1 className="text-2xl font-bold text-center text-slate-800">
          Você está no <br />
          <span className="text-[#d82a27]">Climatério ou Menopausa?</span>
        </h1>
        
        <div className="bg-[#feee00] px-3 py-1 mt-4 mb-4 font-bold text-sm text-center border-b-2 border-[#d82a27]/30 rounded">
          👇 CLIQUE ABAIXO PARA RESPONDER 👇
        </div>
      </div>

      <div className="mb-auto sticky bottom-0 left-0 w-full bg-white pt-2 pb-3 z-50 space-y-3 border-t border-slate-50">
        <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4 hover:bg-slate-50 border border-slate-100"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-[#d82a27] shadow-inner shrink-0" />
          <div className="text-left text-sm font-medium text-slate-700">
            <strong>CLIMATÉRIO!</strong> Eu menstruei nos últimos 12 meses.
          </div>
        </button>

        <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4 hover:bg-slate-50 border border-slate-100"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-[#e85d04] shadow-inner shrink-0" />
          <div className="text-left text-sm font-medium text-slate-700">
            <strong>MENOPAUSA!</strong> Estou há mais de 12 meses sem Menstruar.
          </div>
        </button>

        <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4 hover:bg-slate-50 border border-slate-100"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffd500] to-[#f48c06] shadow-inner shrink-0" />
          <div className="text-left text-sm font-medium text-slate-700">
            <strong>NÃO SEI!</strong> Estou com sintomas e engordando na barriga.
          </div>
        </button>
      </div>
    </div>
  );
}

function StepTwo({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh]">
      <div className="mt-auto flex flex-col items-center w-full pt-8">
        <h1 className="text-xl sm:text-2xl font-bold text-center text-slate-800 leading-tight">
          Você sente que a <strong className="text-[#d82a27] font-black border-b-[3px] border-[#d82a27] pb-0.5">GORDURA</strong><br/> só vai pra sua BARRIGA?
        </h1>
        
        <div className="w-full mt-6 mb-4 max-w-[280px] rounded-2xl overflow-hidden flex items-center justify-center bg-slate-100 p-2 relative aspect-square">
          <img 
            src="https://i.imgur.com/GAYjd8g.png" 
            alt="Belly fat moldura"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain rounded-xl absolute inset-0"
          />
        </div>
      </div>

      <div className="mb-auto sticky bottom-0 left-0 w-full bg-white pt-2 pb-3 z-50">
        <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-[#d82a27] text-white rounded-xl py-4 font-bold text-[15px] hover:bg-[#b0221f] transition-colors shadow-lg active:scale-[0.98] flex items-center justify-center"
        >
          SIM! ME INCOMODA MUITO ✅
        </button>
      </div>
    </div>
  );
}

function StepThree({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh]">
      <div className="mt-auto flex flex-col items-center w-full pt-8">
        <h1 className="text-[1.35rem] sm:text-2xl font-bold text-center text-slate-800 leading-tight px-1">
          A Barriga cresce por conta da <span className="bg-[#d82a27] text-white px-2 border-2 border-[#d82a27] rounded-sm leading-none inline-block pb-0.5">QUEDA</span><br/>
          <span className="bg-[#d82a27] text-white px-2 border-2 border-[#d82a27] rounded-sm mt-1 inline-block leading-none pb-0.5">HORMONAL</span>
        </h1>
        <p className="text-sm mt-3 text-slate-800 font-medium">
          Causada pelo <strong className="font-bold border-b border-black pb-[1px]">CLIMATÉRIO/MENOPAUSA</strong>.
        </p>

        <div className="w-full mt-6 mb-4 flex justify-center">
          <img 
            src="https://i.imgur.com/tIT5AJO.png" 
            alt="Queda Hormonal"
            referrerPolicy="no-referrer"
            className="w-[85%] max-w-[280px] h-auto object-contain"
          />
        </div>

        <p className="text-[17px] mt-2 mb-6 font-medium text-center text-slate-800 leading-snug px-3">
          <strong className="text-[#d82a27] font-black border-b-2 border-[#d82a27] pb-0.5 block w-fit mx-auto mb-1">A CULPA NÃO É SUA!</strong> O seu <strong className="font-black">ESTROGÊNIO</strong> caiu e bagunçou todo seu corpo.
        </p>
      </div>

      <div className="mb-auto sticky bottom-0 left-0 w-full bg-white pt-2 pb-3 z-50">
        <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-[#d82a27] text-white rounded-xl py-4 font-bold text-[15px] hover:bg-[#b0221f] transition-colors shadow-lg shadow-black/20 active:scale-[0.98] flex justify-center"
        >
          CONTINUAR ✅
        </button>
      </div>
    </div>
  );
}

function StepFour({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh]">
      <div className="mt-auto flex flex-col items-center w-full pt-8">
        <h1 className="text-xl sm:text-2xl font-bold text-center text-slate-800 leading-tight px-1 mb-8">
          Já fez um <span className="text-[#24a048]">protocolo de</span><br/>
          <span className="text-[#24a048]">emagrecimento</span> 100% focado para<br/>
          climatério/menopausa?
        </h1>
      </div>

      <div className="mb-auto sticky bottom-0 left-0 w-full bg-white pt-2 pb-3 z-50 space-y-3 border-t border-slate-50">
        <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between hover:bg-slate-50 border border-slate-100"
        >
          <div className="flex items-center gap-3 w-full pr-2 overflow-hidden">
            <span className="text-[22px] sm:text-[26px] shrink-0 leading-none">🤯</span>
            <div className="text-left text-[12.5px] min-[370px]:text-[13.5px] sm:text-[14px] leading-tight font-bold text-slate-700 w-full">
              NÃO! Sempre tentei coisas genéricas.
            </div>
          </div>
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold shrink-0">
            ›
          </div>
        </button>

        <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between hover:bg-slate-50 border border-slate-100"
        >
          <div className="flex items-center gap-3 w-full pr-2 overflow-hidden">
            <span className="text-[22px] sm:text-[26px] shrink-0 leading-none">😔</span>
            <div className="text-left text-[12.5px] min-[370px]:text-[13.5px] sm:text-[14px] leading-tight font-bold text-slate-700 w-full">
              SIM! Mas não tão completo como o seu.
            </div>
          </div>
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold shrink-0">
            ›
          </div>
        </button>
      </div>
    </div>
  );
}

function StepFive({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh]">
      <div className="mt-auto flex flex-col items-center w-full pt-8">
        <h1 className="text-[1.3rem] sm:text-2xl font-bold text-center text-slate-800 leading-tight tracking-tight px-1">
          Sou a <strong className="font-black">NUTRI MARINA CARDOZO</strong><br/>
          e criei a <span className="text-[#24a048]">Dieta Hormonal</span>
        </h1>
        
        <p className="text-center font-bold text-[11px] sm:text-sm mt-3 px-1 uppercase text-slate-800 leading-snug">
          PARA VOCÊ <span className="bg-[#d82a27] text-white px-1">ELIMINAR 1KG POR SEMANA</span> E ALIVIAR<br/>
          OS SINTOMAS DESSA FASE 💚
        </p>

        <div className="w-full mt-5 relative rounded-2xl overflow-hidden shadow-md">
          <img 
            src="https://i.imgur.com/9Vuz6qb.jpeg" 
            alt="Nutricionista"
            referrerPolicy="no-referrer"
            className="w-full h-52 object-cover object-top"
          />
          <div className="absolute right-2 sm:right-4 top-4 sm:top-8 bg-[#ffc300] text-white font-black text-xs sm:text-sm px-4 py-2 rounded-xl rotate-[4deg] shadow-lg border-2 border-white/20 text-center leading-snug whitespace-nowrap">
            ALIMENTOS<br/>FITO-HORMONAIS
          </div>
        </div>

        <div className="mt-4 mb-4 text-center px-4 w-full">
          <p className="font-semibold text-[13.5px] leading-tight text-slate-800 text-balance w-full">
            📗 SIGA <span className="text-[#24a048] underline">2 PASSOS</span> PARA ELIMINAR 1KG/SEMANA<br/> E ALIVIAR SEUS SINTOMAS
          </p>
        </div>
      </div>

      <div className="mb-auto sticky bottom-0 left-0 w-full bg-white pt-2 pb-3 z-50">
        <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-[#24a048] text-white rounded-xl py-4 font-bold text-[15px] hover:bg-[#1a7f38] transition-colors active:scale-[0.98] flex items-center justify-center gap-2" style={{ boxShadow: 'none' }}>
          QUAIS SÃO OS 2 PASSOS?
        </button>
      </div>
    </div>
  );
}

function StepSix({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh] justify-center items-center py-10 px-5 my-auto">
      <div className="flex flex-col items-center w-full">
        <div className="bg-[#24a048] text-white px-2 py-0.5 rounded text-sm font-bold flex items-center gap-1 mb-2">
          <span className="opacity-80 text-xs">👇</span> PASSO 01 <span className="opacity-80 text-xs">👇</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-center text-slate-800 leading-tight">
          Siga a Semana da <strong className="text-[#24a048] font-black underline decoration-[3px] underline-offset-4">DESINFLAMAÇÃO</strong>
        </h1>
        
        <p className="mt-4 text-center text-[13.5px] sm:text-[14px] leading-tight text-slate-800 px-1">
          🔥 Um passo a passo de <strong className="font-black">07 Dias</strong> para você<br/>
          <strong className="text-[#d82a27] font-black uppercase">Desinflamar a gordura da barriga 🔥</strong>
        </p>

        <div className="w-full mt-5 rounded-2xl overflow-hidden flex items-center justify-center p-0.5 relative">
          {/* Placeholder para a imagem do tablet "Protocolo de desinflamação" */}
          <img 
            src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=800&auto=format&fit=crop" 
            alt="Protocolo"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <p className="mt-6 text-center text-[13.5px] sm:text-[14px] leading-tight text-slate-800 px-0">
          A <span className="underline decoration-slate-400 underline-offset-2">Meire</span> perdeu <strong className="font-black uppercase">4 Quilos em 1 semana</strong> de<br/> <strong className="bg-[#24a048] text-white px-1 py-0.5 rounded-[3px]">PROTOCOLO DE DESINFLAMAÇÃO</strong>🔥
        </p>

        <div className="w-full mt-5 rounded-2xl overflow-hidden flex items-center justify-center p-0.5 relative">
          {/* Placeholder para a imagem "Antes e Depois" */}
          <img 
            src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop" 
            alt="Antes e Depois"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-white via-white/90 to-transparent pt-10 pb-3 z-50 px-5 pointer-events-none">
        <div className="max-w-[480px] mx-auto w-full pointer-events-auto">
          <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-[#24a048] text-white rounded-xl py-4 font-bold text-[15px] hover:bg-[#1a7f38] transition-colors active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl shadow-[#24a048]/20" style={{ boxShadow: '0 10px 25px -5px rgba(36, 160, 72, 0.4)' }}>
            QUERO RECEBER <span className="bg-white/20 rounded text-xs px-1 py-0.5">✔</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function StepSeven({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh]">
      <div className="flex flex-col items-center w-full pt-8 pb-32">
        <div className="bg-[#24a048] text-white px-2 py-0.5 rounded text-sm font-bold flex items-center gap-1 mb-2">
          <span className="opacity-80 text-xs">👇</span> PASSO 02 <span className="opacity-80 text-xs">👇</span>
        </div>
        <h1 className="text-[0.95rem] min-[370px]:text-[1rem] sm:text-[1.2rem] tracking-tighter font-bold text-center text-slate-800 leading-tight px-0 w-full overflow-hidden text-ellipsis">
          <span className="whitespace-nowrap">Siga os Cardápios Prontos da <strong className="font-black">Dieta Hormonal</strong></span><br/>
          <span className="whitespace-nowrap">e <strong className="text-[#24a048] font-black">elimine 1kg por semana</strong> <span className="opacity-80 text-base align-middle">👇</span></span>
        </h1>
        
        <p className="mt-4 text-center text-[13.5px] sm:text-[14.5px] tracking-tight font-medium text-slate-800 leading-snug px-0.5">
          Receba o <strong className="font-black">Plano Alimentar</strong> com os alimentos<br/>
          certos para você <strong className="text-[#d82a27] font-black uppercase">QUEIMAR GORDURA</strong> 🔥
        </p>

        <div className="w-full mt-5 rounded-2xl overflow-hidden flex items-center justify-center p-0.5 relative">
          <img 
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop" 
            alt="Dieta Hormonal Cardápio"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover rounded-xl shadow-sm"
          />
        </div>

        <div className="w-full mt-6 space-y-3">
          <div className="bg-green-50/50 border border-green-200 rounded-xl p-4 flex gap-3 items-start">
            <span className="text-xl mt-0.5 shrink-0 select-none">☕</span>
            <p className="text-[13px] text-slate-900 font-bold leading-[1.35]">
              <strong className="text-[#24a048] font-black">CAFÉ DA MANHÃ:</strong> Você receberá diversas opções para começar o dia do jeito certo e com muita energia.
            </p>
          </div>

          <div className="bg-green-50/50 border border-green-200 rounded-xl p-4 flex gap-3 items-start">
            <span className="text-xl mt-0.5 shrink-0 select-none">🍽️</span>
            <p className="text-[13px] text-slate-900 font-bold leading-[1.35]">
              <strong className="text-[#24a048] font-black">ALMOÇO:</strong> Você receberá todo plano detalhado do seu almoço, desde proteínas, acompanhamentos e etc...
            </p>
          </div>

          <div className="bg-green-50/50 border border-green-200 rounded-xl p-4 flex gap-3 items-start">
            <span className="text-xl mt-0.5 shrink-0 select-none">🫖</span>
            <p className="text-[13px] text-slate-900 font-bold leading-[1.35]">
              <strong className="text-[#24a048] font-black">CAFÉ DA TARDE:</strong> Seu café da tarde será delicioso, emagrecedor e nutritivo.
            </p>
          </div>

          <div className="bg-green-50/50 border border-green-200 rounded-xl p-4 flex gap-3 items-start">
            <span className="text-xl mt-0.5 shrink-0 select-none">🥗</span>
            <p className="text-[13px] text-slate-900 font-bold leading-[1.35]">
              <strong className="text-[#24a048] font-black">JANTAR:</strong> Não pule a janta! Você vai comer os alimentos certos para ter uma ótima noite de sono.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-white via-white/90 to-transparent pt-10 pb-3 z-50 px-5 pointer-events-none">
        <div className="max-w-[480px] mx-auto w-full pointer-events-auto">
          <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-[#24a048] text-white rounded-xl py-4 font-bold text-[15px] hover:bg-[#1a7f38] transition-colors active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl shadow-[#24a048]/20" style={{ boxShadow: '0 10px 25px -5px rgba(36, 160, 72, 0.4)' }}>
            QUERO RECEBER <span className="bg-white/20 rounded text-xs px-1 py-0.5">✔</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function StepEight({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh]">
      <div className="flex flex-col items-center w-full pt-10 pb-32">
        <h1 className="text-[1.25rem] sm:text-[1.35rem] font-bold text-center text-slate-800 leading-tight px-2">
          Elas perderam <strong className="text-[#24a048] font-black">1KG/Semana</strong> e<br/>
          <strong className="text-[#d82a27] font-black uppercase">ALIVIARAM</strong> os <span className="whitespace-nowrap">Sintomas 💚 🤩</span>
        </h1>
        
        <p className="mt-3 text-center text-[13px] sm:text-[14px] font-bold text-slate-800 underline uppercase decoration-slate-800 underline-offset-2">
          COM A DIETA HORMONAL NATURAL 💚
        </p>

        <div className="w-full mt-6 relative overflow-hidden flex flex-col items-center">
          <div className="w-[85%] mx-auto relative flex items-center justify-center">
            <div className="absolute -left-[15%] top-0 bottom-0 w-[12%] bg-slate-200 rounded-xl overflow-hidden shadow-inner opacity-70">
              <img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover blur-sm" alt="" />
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop" 
              alt="Antes e Depois"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover rounded-xl shadow-md border border-slate-100 z-10 relative"
            />
            
            <div className="absolute -right-[15%] top-0 bottom-0 w-[12%] bg-slate-200 rounded-xl overflow-hidden shadow-inner opacity-70">
              <img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover blur-sm" alt="" />
            </div>
          </div>
          <p className="mt-4 text-center text-[13px] sm:text-[14px] text-slate-800 px-0 leading-tight tracking-tight">
            A Meire perdeu <strong className="font-black">4 KGs apenas na Primeira Semana</strong><br/>
            de Desinflamação.
          </p>
        </div>

        <div className="w-full mt-10 space-y-3 px-3 sm:px-8">
          <p className="text-[13px] sm:text-[14.5px] text-slate-800 flex items-center gap-2 whitespace-nowrap tracking-tight">
            <span className="text-lg w-5 text-center">💚</span> 
            <span><strong className="text-[#24a048] font-bold">100% NATURAL</strong> e <strong className="text-[#d82a27] font-bold">SEM REMÉDIOS</strong></span>
          </p>
          <p className="text-[13px] sm:text-[14.5px] text-slate-800 flex items-center gap-2 tracking-tight px-0.5">
            <span className="text-lg w-5 text-center">🚫</span> 
            <span><strong className="font-bold">SEM PASSAR FOME</strong> ou restrições.</span>
          </p>
          <p className="text-[13px] sm:text-[14.5px] text-slate-800 flex items-center gap-2 tracking-tight px-0.5">
            <span className="text-lg w-5 text-center">🍔</span> 
            <span>Comendo <strong className="font-bold">COMIDAS GOSTOSAS</strong></span>
          </p>
          <p className="text-[13px] sm:text-[14.5px] text-slate-800 flex items-center gap-2 tracking-tight px-0.5">
            <span className="text-lg w-5 text-center">💪🏼</span> 
            <span>Com <strong className="font-bold">CONSTÂNCIA</strong> e perdendo 1Kg/semana</span>
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-white via-white/90 to-transparent pt-10 pb-3 z-50 px-5 pointer-events-none">
        <div className="max-w-[480px] mx-auto w-full pointer-events-auto">
          <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-[#24a048] text-white rounded-xl py-4 font-bold text-[15px] hover:bg-[#1a7f38] transition-colors active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl shadow-[#24a048]/20" style={{ boxShadow: '0 10px 25px -5px rgba(36, 160, 72, 0.4)' }}>
            EMAGRECER 1KG POR SEMANA <span className="bg-white/20 rounded text-xs px-1 py-0.5">✔</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function StepNine({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh] justify-center py-12 px-5">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-[1.35rem] sm:text-[1.5rem] tracking-tight font-bold text-center text-slate-800 leading-tight px-1">
          Você sentiu que a sua<br/>
          <strong className="text-[#d82a27] font-black uppercase">LIBIDO</strong> vem diminuindo?
        </h1>
        
        <div className="flex flex-col gap-4 mt-8 w-full">
          <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto flex items-center justify-start gap-3 bg-white border border-slate-200 shadow-sm rounded-[14px] py-4 px-4 hover:border-[#d82a27] hover:shadow-md transition-all active:scale-[0.98]">
            <span className="text-[22px] sm:text-2xl drop-shadow-sm shrink-0">😭</span>
            <span className="text-slate-800 font-medium text-[13px] sm:text-[14px] whitespace-nowrap overflow-hidden text-ellipsis w-full text-left"><strong className="text-[#d82a27] font-black uppercase">SIM.</strong> Minha libido está caindo</span>
          </button>

          <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto flex items-center justify-start gap-3 bg-white border border-slate-200 shadow-sm rounded-[14px] py-4 px-4 hover:border-slate-400 hover:shadow-md transition-all active:scale-[0.98]">
            <span className="text-[22px] sm:text-2xl drop-shadow-sm shrink-0">😳</span>
            <span className="text-slate-800 font-medium text-[13px] sm:text-[14px] whitespace-nowrap overflow-hidden text-ellipsis w-full text-left"><strong className="font-black uppercase">NÃO!</strong> Minha libido está normal</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function StepTen({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh] justify-center items-center py-10 px-5 my-auto">
      <div className="flex flex-col items-center w-full">
        <div className="bg-[#e8f5e9] text-[#24a048] px-4 py-1.5 rounded-lg text-[13px] font-bold flex items-center justify-center gap-2 mb-4 w-fit mx-auto uppercase">
          <span>🎁</span> VOCÊ VAI RECEBER TAMBÉM <span>🎁</span>
        </div>
        
        <h1 className="text-[1.1rem] min-[370px]:text-[1.18rem] sm:text-[1.35rem] tracking-tighter font-bold text-center text-slate-800 leading-tight px-2 w-full text-balance">
          Guia dos <strong className="text-[#d82a27] font-black uppercase">ESTIMULANTES NATURAIS</strong> da Libido 🤫 🔥
        </h1>
        
        <p className="mt-3 text-center text-[13.5px] sm:text-[14.5px] font-medium text-slate-800 leading-snug px-0">
          Protocolo com o <strong className="text-[#d82a27] font-bold">Alimentos Afrodisíacos e chás, shots e ervas</strong> <u className="underline-offset-2">que aumentam a Libido.</u>
        </p>

        <div className="w-full mt-4 rounded-2xl overflow-hidden flex items-center justify-center p-0.5 relative">
          <img 
            src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop" 
            alt="Guia de Estimulantes"
            referrerPolicy="no-referrer"
            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm"
          />
        </div>
      </div>

      <div className="w-full mt-6 flex justify-center w-full px-1">
        <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-[#24a048] text-white rounded-xl py-4 font-bold text-[15px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl shadow-[#24a048]/20" style={{ boxShadow: '0 10px 25px -5px rgba(36, 160, 72, 0.4)' }}>
          QUERO EMAGRECER <span className="bg-white/20 rounded text-xs px-1 py-0.5">✔</span>
        </button>
      </div>
    </div>
  );
}


function StepThirteen({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh] justify-center py-12 px-5">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-[1.25rem] sm:text-[1.4rem] tracking-tight font-bold text-center text-slate-800 leading-tight px-0 text-balance w-full">
          Você tem desejos de comer <strong className="text-[#d82a27] font-black">Doces, Salgados e Massas?</strong> 🍔
        </h1>
        
        <div className="flex flex-col gap-4 mt-8 w-full">
          <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto flex items-center justify-start gap-3 bg-white border border-[#24a048] shadow-sm rounded-xl py-4 px-4 hover:bg-slate-50 transition-all active:scale-[0.98]">
            <span className="text-[22px] sm:text-2xl drop-shadow-sm shrink-0">😭</span>
            <span className="text-slate-800 font-medium text-[13px] sm:text-[14px] whitespace-nowrap overflow-hidden text-ellipsis w-full text-left"><strong className="text-[#24a048] font-black uppercase">SIM!</strong> Acho muito difícil de parar.</span>
          </button>

          <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto flex items-center justify-start gap-3 bg-white border border-slate-200 shadow-sm rounded-xl py-4 px-4 hover:border-slate-400 hover:shadow-md transition-all active:scale-[0.98]">
            <span className="text-[22px] sm:text-2xl drop-shadow-sm shrink-0">🙄</span>
            <span className="text-slate-800 font-medium text-[13px] sm:text-[14px] whitespace-nowrap overflow-hidden text-ellipsis w-full text-left"><strong className="font-black uppercase">NÃO!</strong> Não tenho esses desejos</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function StepTwelve({ onNext }: { onNext?: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh] justify-center pt-10 pb-32 px-5">
      <div className="flex flex-col items-center w-full">
        <div className="bg-[#e8f5e9] text-[#24a048] px-4 py-1.5 rounded-lg text-[13px] font-bold flex items-center justify-center gap-2 mb-4 w-fit mx-auto uppercase">
          <span>🎁</span> VOCÊ VAI RECEBER TAMBÉM <span>🎁</span>
        </div>
        
        <h1 className="text-[1.15rem] min-[370px]:text-[1.25rem] sm:text-[1.4rem] tracking-tighter font-bold text-center text-slate-800 leading-tight px-0 w-full overflow-hidden text-ellipsis mb-4">
          <span className="whitespace-nowrap">Protocolo de <strong className="text-[#24a048]">Chás Hormonais</strong></span><br/>
          que <strong className="font-black uppercase">ALIVIAM</strong> os Sintomas ☕
        </h1>
        
        <div className="w-full mt-2 rounded-2xl overflow-hidden flex items-center justify-center p-0.5 relative">
          <img 
            src="https://images.unsplash.com/photo-1576092762791-dd9e2220abd4?q=80&w=800&auto=format&fit=crop" 
            alt="Protocolo de Chás Hormonais"
            referrerPolicy="no-referrer"
            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm border border-slate-100"
          />
        </div>

        <p className="mt-5 text-center text-[13px] sm:text-[14px] font-medium text-slate-800 leading-snug px-2 w-full max-w-[380px] text-balance">
          Gisela eliminou <strong className="text-[#d82a27] font-bold">12KGs</strong>, perdeu a Barriga e aliviou os sintomas com os <strong className="text-[#24a048] font-bold underline decoration-2 underline-offset-2">Chás Hormonais</strong>
        </p>

        <div className="w-full mt-5 rounded-2xl overflow-hidden flex items-center justify-center p-0.5 relative">
          <img 
            src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=800&auto=format&fit=crop" 
            alt="Antes e Depois Gisela"
            referrerPolicy="no-referrer"
            className="w-full aspect-square object-cover rounded-2xl shadow-sm"
          />
          <div className="absolute top-3 left-3 bg-[#d82a27] text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
            ANTES 😔
          </div>
          <div className="absolute top-3 right-3 bg-[#24a048] text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
            DEPOIS 😍
          </div>
          <div className="absolute bottom-3 inset-x-3 bg-black/80 backdrop-blur-sm rounded-xl p-3 text-white">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-pink-500 shrink-0 flex items-center justify-center text-sm">💖</div>
              <div>
                <p className="text-[11px] font-medium leading-tight">
                  <strong className="font-bold text-white">gisela...</strong> comentou: Funciona mesmo gente! E a Mari é maravilhosa! Eu perdi 12 kg em 2 meses. E estou seguindo direitinho. <span className="opacity-70 font-normal">5 h</span>
                </p>
                <div className="flex gap-4 mt-1 text-[10px] font-medium opacity-70">
                  <span>♡</span>
                  <span>Ver resposta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-white via-white/90 to-transparent pt-10 pb-3 z-50 px-5 pointer-events-none">
        <div className="max-w-[480px] mx-auto w-full pointer-events-auto">
          <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-[#24a048] text-white rounded-xl py-4 font-bold text-[15px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl shadow-[#24a048]/20" style={{ boxShadow: '0 10px 25px -5px rgba(36, 160, 72, 0.4)' }}>
            QUERO EMAGRECER <span className="text-white/80 shrink-0 text-[13px]">✔</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function StepEleven({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh] justify-center items-center py-10 my-auto">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-[1.35rem] sm:text-[1.5rem] tracking-tight font-bold text-center text-slate-800 leading-tight px-1">
          Você <strong className="font-black">SOFRE</strong> com algum desses<br/>
          <strong className="text-[#d82a27] font-black uppercase">SINTOMAS</strong>? 👇 💔 😔
        </h1>
        
        <div className="grid grid-cols-2 gap-1 w-full mt-6 px-1">
          <div className="relative aspect-square rounded-tl-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Calorão" />
            <div className="absolute bottom-2 inset-x-0 mx-1 flex justify-center">
              <span className="bg-[#d82a27] text-white text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded text-center whitespace-nowrap">CALORÃO/FOGACHO</span>
            </div>
          </div>
          <div className="relative aspect-square rounded-tr-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1588667500139-6f97fd1d7915?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Falta de Libido" />
            <div className="absolute bottom-2 inset-x-0 mx-1 flex justify-center">
              <span className="bg-[#d82a27] text-white text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded text-center whitespace-nowrap">FALTA DE LIBIDO</span>
            </div>
          </div>
          <div className="relative aspect-square rounded-bl-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542598953-ce20b666a7b7?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cansaço" />
            <div className="absolute bottom-2 inset-x-0 mx-1 flex justify-center">
              <span className="bg-[#d82a27] text-white text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded text-center whitespace-nowrap">CANSAÇO E DESÂNIMO</span>
            </div>
          </div>
          <div className="relative aspect-square rounded-br-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1520638025219-4824baec6d78?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Insônia" />
            <div className="absolute bottom-2 inset-x-0 mx-1 flex justify-center">
              <span className="bg-[#d82a27] text-white text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded text-center whitespace-nowrap">INSÔNIA/SONO RUIM</span>
            </div>
          </div>
        </div>

        <div className="w-full px-4 mt-6">
          <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-[#d82a27] text-white rounded-xl py-4 font-bold text-[15px] hover:bg-[#b02220] transition-colors flex justify-center shadow-none active:scale-[0.98]"
          >
            SIM! SOFRO COM PELO MENOS 1
          </button>
        </div>
      </div>
    </div>
  );
}


function StepFourteen({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh] pt-10 pb-32 px-5">
      <div className="flex flex-col items-center w-full">
        <div className="bg-[#e8f5e9] text-[#24a048] px-4 py-1.5 rounded-lg text-[13px] font-bold flex items-center justify-center gap-2 mb-6 w-fit mx-auto uppercase">
          <span>🎁</span> VOCÊ VAI RECEBER TAMBÉM <span>🎁</span>
        </div>
        
        <div className="flex flex-col items-center justify-center mb-4">
          <span className="bg-[#5c8aff] text-white rounded w-6 h-[22px] flex items-center justify-center text-[14px] font-bold mb-2">1</span>
          <h2 className="text-[1.1rem] sm:text-[1.2rem] font-bold text-center text-slate-800 leading-tight text-balance">
            Receitas: <strong className="text-[#24a048] font-black">Doces Gostosos</strong> pra comer sem culpa 😋
          </h2>
        </div>

        <div className="w-full rounded-2xl overflow-hidden flex items-center justify-center p-0.5 relative mb-6">
          <img 
            src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop" 
            alt="Doces Gostosos"
            referrerPolicy="no-referrer"
            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm border border-slate-100"
          />
        </div>

        <div className="flex flex-col items-center justify-center mb-4">
          <span className="bg-[#5c8aff] text-white rounded w-6 h-[22px] flex items-center justify-center text-[14px] font-bold mb-2">2</span>
          <h2 className="text-[1.1rem] sm:text-[1.2rem] font-bold text-center text-slate-800 leading-tight text-balance">
            +de 100 Receitas de <strong className="text-[#24a048] font-black">Salgados, Massas e Lanches</strong>
          </h2>
        </div>

        <div className="w-full rounded-2xl overflow-hidden flex items-center justify-center p-0.5 relative">
          <img 
            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop" 
            alt="Salgados e Massas"
            referrerPolicy="no-referrer"
            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm border border-slate-100"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-white via-white/90 to-transparent pt-10 pb-3 z-50 px-5 pointer-events-none">
        <div className="max-w-[480px] mx-auto w-full pointer-events-auto">
          <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-[#24a048] text-white rounded-xl py-4 font-bold text-[15px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl shadow-[#24a048]/20" style={{ boxShadow: '0 10px 25px -5px rgba(36, 160, 72, 0.4)' }}>
            QUERO EMAGRECER <span className="bg-white/20 rounded text-xs px-1 py-0.5">✔</span>
          </button>
        </div>
      </div>
    </div>
  );
}



function StepFifteen({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh] pt-10 pb-36 px-5">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-[1.25rem] sm:text-[1.4rem] tracking-tight font-bold text-center text-slate-800 leading-tight px-0 text-balance w-full mb-8">
          A <strong className="text-[#24a048] font-black">Dieta Hormonal</strong><br />
          é para você que <span className="text-xl">👇🏼</span>
        </h1>

        <div className="w-full bg-[#e53935] rounded-[24px] p-4 flex relative overflow-hidden mb-8 min-h-[300px] shadow-sm">
          <div className="w-[45%] h-full absolute left-0 top-0 bottom-0 bg-white/10 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1574400788625-f3ae1016dc25?q=80&w=400&auto=format&fit=crop"
              className="w-full h-full object-cover mix-blend-multiply opacity-80 scale-110 object-left-top"
              alt="Desanimada"
            />
          </div>
          
          <div className="w-[58%] ml-auto flex flex-col gap-2.5 z-10 py-1 justify-center relative">
            <div className="bg-white text-[#e53935] font-black text-[12.5px] sm:text-[13px] leading-tight p-2.5 pt-2 pb-2 rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] text-center uppercase tracking-tighter w-[110%] -ml-[10%] relative">
              ESTÁ DESANIMADA, SEM ENERGIA E DISPOSIÇÃO 😴
            </div>
            <div className="bg-white text-[#e53935] font-black text-[12.5px] sm:text-[13px] leading-tight p-2.5 pt-2 pb-2 rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] text-center uppercase tracking-tighter w-[110%] -ml-[10%] relative">
              ACUMULOU MUITA 😥😥 GORDURA NA BARRIGA
            </div>
            <div className="bg-white text-[#e53935] font-black text-[12.5px] sm:text-[13px] leading-tight p-2.5 pt-2 pb-2 rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] text-center uppercase tracking-tighter w-[110%] -ml-[10%] relative">
              JÁ TENTOU DE TUDO PARA EMAGRECER 😭
            </div>
            <div className="bg-white text-[#e53935] font-black text-[12.5px] sm:text-[13px] leading-tight p-2.5 pt-2 pb-2 rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] text-center uppercase tracking-tighter w-[110%] -ml-[10%] relative">
              PERDEU LIBIDO E DESEJO 🤫
            </div>
          </div>
        </div>

        <h2 className="text-[1.1rem] sm:text-[1.2rem] font-bold text-center text-slate-800 leading-tight mb-6 uppercase">
          E PARA VOCÊ QUE QUER <span className="text-xl">👇🏼</span>
        </h2>

        <div className="w-full bg-[#00b050] rounded-[24px] p-4 flex relative overflow-hidden min-h-[300px] shadow-sm">
          <div className="w-[45%] h-full absolute left-0 top-0 bottom-0 bg-white/10 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=400&auto=format&fit=crop"
              className="w-full h-full object-cover mix-blend-multiply opacity-90 scale-110 object-left-top"
              alt="Feliz e magra"
            />
          </div>
          
          <div className="w-[58%] ml-auto flex flex-col gap-2.5 z-10 py-1 justify-center relative">
            <div className="bg-white text-[#00b050] font-black text-[12.5px] sm:text-[13px] leading-tight p-2.5 pt-2 pb-2 rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] text-center uppercase tracking-tighter w-[110%] -ml-[10%] relative">
              QUER EMAGRECER 1KG POR SEMANA 🥰💚😀💚
            </div>
            <div className="bg-white text-[#00b050] font-black text-[12.5px] sm:text-[13px] leading-tight p-2.5 pt-2 pb-2 rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] text-center uppercase tracking-tighter w-[110%] -ml-[10%] relative">
              QUER VOLTAR A VESTIR 😍 SUAS ROUPAS FAVORITAS
            </div>
            <div className="bg-white text-[#00b050] font-black text-[12.5px] sm:text-[13px] leading-tight p-2.5 pt-2 pb-2 rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] text-center uppercase tracking-tighter w-[110%] -ml-[10%] relative">
              QUER SECAR SEM PASSAR FOME E SEM RESTRIÇÕES
            </div>
            <div className="bg-white text-[#00b050] font-black text-[12.5px] sm:text-[13px] leading-tight p-2.5 pt-2 pb-2 rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] text-center uppercase tracking-tighter w-[110%] -ml-[10%] relative">
              QUER ALIVIAR OS SINTOMAS DO CLIMATÉRIO E MENOPAUSA 🥰🥰
            </div>
          </div>
        </div>

      </div>

      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-white via-white/90 to-transparent pt-10 pb-3 z-50 px-5 pointer-events-none">
        <div className="max-w-[480px] mx-auto w-full pointer-events-auto">
          <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-[#24a048] text-white rounded-xl py-4 font-bold text-[15px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl shadow-[#24a048]/20" style={{ boxShadow: '0 10px 25px -5px rgba(0, 176, 80, 0.4)' }}>
            QUERO EMAGRECER 1KG/SEMANA <span className="bg-white/20 rounded text-xs px-1 py-0.5 ml-1">✔</span>
          </button>
        </div>
      </div>
    </div>
  );
}



function StepSixteen({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh] pt-10 pb-36 px-5 bg-white">
      <div className="flex flex-col items-center w-full">
        
        <div className="bg-[#24a048] text-white px-3 py-1 rounded-[4px] text-[12.5px] font-bold tracking-widest mb-4">
          RECAPITULANDO
        </div>

        <h1 className="text-[1.1rem] min-[370px]:text-[1.15rem] sm:text-[1.3rem] tracking-tighter font-bold text-center text-slate-800 leading-tight px-0 mb-6 w-full flex flex-col items-center">
          <span className="whitespace-nowrap">Veja tudo que você irá receber na</span>
          <span><strong className="text-[#24a048] font-black underline decoration-2 underline-offset-4">Dieta Hormonal Natural</strong> 👇🏼</span>
        </h1>

        <div className="w-full mb-8 relative">
          <img 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" 
            alt="Bundle"
            className="w-full h-auto object-contain drop-shadow-md rounded-xl"
          />
        </div>

        <div className="w-full flex flex-col gap-3 mb-6">
          <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <span className="text-2xl drop-shadow-sm">🔥</span>
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-[12.5px] sm:text-[13px] leading-tight uppercase"><strong className="text-[#d82a27] line-through mr-1 opacity-80">(R$ 199)</strong> PROTOCOLO DE DESINFLAMAÇÃO DE 7 DIAS</span>
            </div>
          </div>

          <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <span className="text-2xl drop-shadow-sm">📗</span>
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-[12.5px] sm:text-[13px] leading-tight uppercase"><strong className="text-[#d82a27] line-through mr-1 opacity-80">(R$ 299)</strong> CARDÁPIO COMPLETO DA DIETA HORMONAL</span>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-center text-[15px] text-slate-800 mb-4 mt-2">
          + todos esses <strong className="text-[#24a048] font-black uppercase">BÔNUS</strong> 👇🏼
        </h3>

        <div className="w-full flex flex-col gap-3 mb-8">
          <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <span className="text-2xl drop-shadow-sm">👄</span>
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-[12.5px] sm:text-[13px] leading-tight uppercase"><strong className="text-[#d82a27] line-through mr-1 opacity-80">(R$ 99)</strong> GUIA DOS ESTIMULANTES NATURAIS DA LIBIDO FEMININA</span>
            </div>
          </div>

          <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <span className="text-2xl drop-shadow-sm">🍵</span>
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-[12.5px] sm:text-[13px] leading-tight uppercase"><strong className="text-[#d82a27] line-through mr-1 opacity-80">(R$ 99)</strong> CHÁS HORMONAIS PARA ALÍVIO DE SINTOMAS</span>
            </div>
          </div>

          <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <span className="text-2xl drop-shadow-sm">🍫</span>
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-[12.5px] sm:text-[13px] leading-tight uppercase"><strong className="text-[#d82a27] line-through mr-1 opacity-80">(R$ 99)</strong> <strong className="text-[#24a048]">DOCES GOSTOSOS</strong> PARA COMER SEM CULPA</span>
            </div>
          </div>

          <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <span className="text-2xl drop-shadow-sm">🍔</span>
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-[12.5px] sm:text-[13px] leading-tight uppercase"><strong className="text-[#d82a27] line-through mr-1 opacity-80">(R$ 99)</strong> +DE 100 RECEITAS DE <strong className="text-[#24a048]">SALGADOS, MASSAS E LANCHES</strong></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-4 text-center">
          <p className="text-[15px] font-bold text-slate-800 mb-1">Tudo isso poderia custar facilmente</p>
          <div className="relative inline-block mb-1">
            <span className="text-[36px] font-black text-[#d82a27] line-through decoration-slate-800/40 decoration-[3px]">R$ 894</span>
          </div>
          <p className="text-[14px] font-bold text-slate-800 mt-2 text-balance">
            Mas você não pagará <strong className="text-[#24a048]">nem metade disso...</strong>
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-white via-white/90 to-transparent pt-10 pb-3 z-50 px-5 pointer-events-none">
        <div className="max-w-[480px] mx-auto w-full pointer-events-auto">
          <button onClick={onNext} className="w-[94%] max-w-[340px] mx-auto bg-[#24a048] text-white rounded-xl py-4 font-bold text-[15px] sm:text-lg whitespace-nowrap hover:bg-[#1a7f38] transition-colors active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl shadow-[#24a048]/20" style={{ boxShadow: '0 10px 25px -5px rgba(36, 160, 72, 0.4)' }}>
            QUERO EMAGRECER 1KG POR SEMANA
          </button>
        </div>
      </div>
    </div>
  );
}



function StepSeventeen() {
  const PrimaryButton = () => (
    <div className="flex w-full justify-center mt-4 mb-4">
      <button className="w-[94%] max-w-[340px] bg-[#24a048] text-white rounded-xl py-3.5 sm:py-4 font-bold text-[14px] sm:text-base whitespace-nowrap hover:bg-[#1a7f38] transition-colors active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl shadow-[#24a048]/20" style={{ boxShadow: '0 10px 25px -5px rgba(36, 160, 72, 0.4)' }}>
        QUERO ELIMINAR 1KG POR SEMANA
      </button>
    </div>
  );

  const PriceBlock = () => (
    <div className="flex flex-col items-center justify-center mt-2 mb-4">
      <div className="bg-[#d82a27] text-white font-black text-lg px-2 py-0.5 rounded-sm line-through decoration-2 decoration-white/70">
        De: R$ 894,00
      </div>
      <div className="flex items-baseline text-[#24a048] font-black mt-2">
        <span className="text-xl">3x de</span>
        <span className="text-5xl ml-2 tracking-tighter">R$ 5,<span className="underline decoration-4 underline-offset-4">96</span></span>
      </div>
      <div className="bg-[#24a048] text-white font-bold text-lg px-3 py-1 mt-2.5 rounded-md text-center inline-block">
        OU R$ 17,90 NO PIX
      </div>
    </div>
  );

  const BundleImage = () => (
    <div className="w-full relative px-2">
      <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" alt="Bundle" className="w-full h-auto object-contain drop-shadow-md rounded-xl mix-blend-multiply" />
    </div>
  );

  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[100dvh] pt-6 pb-24 px-4 bg-white text-slate-800">
      
      {/* 1. Recado da Nutri */}
      <div className="flex flex-col items-center w-full mb-10">
        <h2 className="text-[1.3rem] font-black text-center text-[#d82a27] leading-tight mb-2 uppercase">
          🚨 Recado da Nutri 🚨<br/>
          Clique para assistir
        </h2>
        
        <div className="w-full aspect-[4/5] bg-[#8bc34a] rounded-xl flex flex-col items-center justify-center p-6 text-white shadow-md relative overflow-hidden mb-2">
          <div className="absolute inset-x-0 top-0 bottom-0 bg-black/90 px-3 w-[5px] left-0"></div>
          <div className="absolute inset-x-0 top-0 bottom-0 bg-black/90 px-3 w-[5px] right-0"></div>
          <h3 className="font-bold text-lg text-center mb-8">Você já começou a assistir esse vídeo</h3>
          <button className="w-[94%] max-w-[340px] mx-auto flex items-center gap-3 bg-transparent text-white justify-center active:opacity-70 transition-opacity mb-2">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
              <span className="ml-1 text-xl">▶</span>
            </div>
            <span className="font-bold">Continuar assistindo?</span>
          </button>
          <button className="w-[94%] max-w-[340px] mx-auto flex items-center gap-3 bg-transparent text-white justify-center active:opacity-70 transition-opacity mb-2">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-xl">↺</span>
            </div>
            <span className="font-bold">Assistir do início?</span>
          </button>
        </div>

        <PrimaryButton />
      </div>

      {/* 2. Seca 1kg ou dinheiro */}
      <div className="flex flex-col items-center w-full mb-10">
        <h2 className="text-[1.1rem] min-[370px]:text-[1.2rem] sm:text-[1.3rem] font-black text-center text-[#24a048] leading-tight mb-1 uppercase px-0 w-full tracking-tighter">
          <span className="whitespace-nowrap">Ou você seca 1kg/semana</span><br/>
          <span className="text-[#d82a27] whitespace-nowrap">ou seu dinheiro de volta!</span>
        </h2>
        <div className="bg-[#ffeb3b] text-slate-900 font-bold px-2 py-0.5 rounded text-sm mb-4">🔓 100% GARANTIDO 🔓</div>

        <BundleImage />
        <PriceBlock />
        <PrimaryButton />
      </div>

      {/* Recap Block Inserted */}
      <div className="flex flex-col items-center w-full mb-10">
        <div className="bg-[#24a048] text-white px-3 py-1 rounded-[4px] text-[12.5px] font-bold tracking-widest mb-4 uppercase">
          RECAPITULANDO
        </div>

        <h1 className="text-[1.1rem] min-[370px]:text-[1.15rem] sm:text-[1.3rem] tracking-tighter font-bold text-center text-slate-800 leading-tight px-0 mb-6 w-full flex flex-col items-center">
          <span className="whitespace-nowrap">Veja tudo que você irá receber na</span>
          <span><strong className="text-[#24a048] font-black underline decoration-2 underline-offset-4">Dieta Hormonal Natural</strong> 👇🏼</span>
        </h1>

        <div className="w-full flex flex-col gap-3 mb-6">
          <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <span className="text-2xl drop-shadow-sm">📗</span>
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-[12.5px] sm:text-[13px] leading-tight uppercase"><strong className="text-[#d82a27] line-through mr-1 opacity-80">(R$ 199)</strong> PROTOCOLO DE DESINFLAMAÇÃO</span>
            </div>
          </div>
          <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <span className="text-2xl drop-shadow-sm">🍏</span>
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-[12.5px] sm:text-[13px] leading-tight uppercase"><strong className="text-[#d82a27] line-through mr-1 opacity-80">(R$ 299)</strong> CARDÁPIOS DA DIETA HORMONAL</span>
            </div>
          </div>
          <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <span className="text-2xl drop-shadow-sm">🔥</span>
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-[12.5px] sm:text-[13px] leading-tight uppercase"><strong className="text-[#d82a27] line-through mr-1 opacity-80">(R$ 99)</strong> GUIA ESTIMULANTES DA LIBIDO</span>
            </div>
          </div>
          <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <span className="text-2xl drop-shadow-sm">☕</span>
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-[12.5px] sm:text-[13px] leading-tight uppercase"><strong className="text-[#d82a27] line-through mr-1 opacity-80">(R$ 99)</strong> CHÁS HORMONAIS PARA ALÍVIO DE SINTOMAS</span>
            </div>
          </div>
          <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <span className="text-2xl drop-shadow-sm">🍫</span>
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-[12.5px] sm:text-[13px] leading-tight uppercase"><strong className="text-[#d82a27] line-through mr-1 opacity-80">(R$ 99)</strong> DOCES PARA COMER SEM CULPA</span>
            </div>
          </div>
          <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <span className="text-2xl drop-shadow-sm">🍔</span>
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-[12.5px] sm:text-[13px] leading-tight uppercase"><strong className="text-[#d82a27] line-through mr-1 opacity-80">(R$ 99)</strong> +DE 100 RECEITAS DE LANCHES</span>
            </div>
          </div>
        </div>
        <PrimaryButton />
      </div>

      {/* 3. Engordando ou emagrecer */}
      <div className="flex flex-col items-center w-full mb-10">
        <h2 className="text-[1.3rem] font-black text-center leading-tight mb-4 text-balance">
          <span className="text-[#d82a27]">Continuar engordando?</span><br/>
          <span className="text-[#24a048] underline decoration-2 underline-offset-4">Ou emagrecer 1kg/semana?</span>
        </h2>

        <div className="w-full relative rounded-xl overflow-hidden mb-6 flex">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&fit=crop" className="w-1/2 h-48 object-cover" alt="Engordando" />
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&fit=crop" className="w-1/2 h-48 object-cover" alt="Emagrecendo" />
          
          <div className="absolute bottom-3 left-2 right-2 flex justify-between gap-2">
            <div className="bg-[#d82a27] text-white font-bold text-[10px] leading-tight p-1.5 text-center w-1/2 rounded-md uppercase">Continuar engordando?</div>
            <div className="bg-[#24a048] text-white font-bold text-[10px] leading-tight p-1.5 text-center w-1/2 rounded-md uppercase">Emagrecer 1kg por semana?</div>
          </div>
        </div>

        <p className="text-[12.5px] min-[370px]:text-[13.5px] leading-[1.2] tracking-tighter w-full font-medium text-slate-700 mb-3 px-0">
          <span className="text-[#d82a27] font-bold">❌ Você prefere sofrer com o <span className="uppercase">Metabolismo Morto</span> na Menopausa</span> e engordar mais.
        </p>
        <p className="text-[12.5px] min-[370px]:text-[13.5px] leading-[1.2] tracking-tighter w-full font-medium text-slate-700 mb-6 px-0">
          <span className="text-[#24a048] font-bold">✅ Ou eliminar 1KG/SEMANA</span> ao lado de uma <strong>nutricionista especialista</strong> no seu momento?
        </p>

        <BundleImage />
        <PrimaryButton />
      </div>

      {/* 4. A Nutri */}
      <div className="flex flex-col items-center w-full mb-10">
        <h2 className="text-[1.3rem] font-black text-center text-slate-800 leading-tight mb-4">
          💚 Veja quem será sua<br/>
          <span className="text-[#24a048] underline decoration-2 underline-offset-4">nova nutricionista</span> 👇🏼 🤩
        </h2>
        
        <div className="w-full relative pt-4 pb-0 flex justify-center mb-0 px-8">
          <img src="https://images.unsplash.com/photo-1594824436998-ddedefa57053?q=80&w=400&fit=crop" alt="Nutri" className="w-[280px] object-cover drop-shadow-xl" />
        </div>
        <PrimaryButton />

        <div className="bg-[#e8f5e9] w-full max-w-[90%] rounded-xl p-4 text-center mt-6 mb-6">
          <p className="text-[#24a048] font-black text-[15px] mb-1">💚 Nutricionista Marina Cardoso 💚</p>
          <p className="text-[#24a048] font-medium text-[13px] leading-tight">Especialista em emagrecimento de mulheres no Climatério e na Menopausa</p>
        </div>

        <p className="text-[15px] text-slate-800 mb-4 px-2">
          💚 Olá, eu me chamo Marina Cardoso e <strong>nas próximas semanas serei sua nova nutricionista.</strong>
        </p>

        <p className="text-[15px] text-slate-800 mb-6 px-2">
          😭 Eu comecei a atender mulheres na menopausa <strong>observando a luta da minha mãe contra a obesidade</strong>, por anos ela tentou de tudo <u>mas nunca aplicou um protocolo 100% focado na menopausa.</u>
        </p>

        <div className="w-full relative flex items-center justify-center gap-2 mb-6 bg-slate-100 py-6 px-2 rounded-xl">
          <img src="https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=200&fit=crop" className="w-[110px] h-[110px] object-cover rounded shadow-md -rotate-6" alt="Mãe antes" />
          <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=200&fit=crop" className="w-[110px] h-[110px] object-cover rounded shadow-md rotate-3" alt="Mãe depois" />
          <div className="absolute -bottom-2 right-4 text-[12px] font-bold text-slate-600 italic bg-white px-2 py-0.5 rounded shadow-sm border border-slate-200">
            <span className="text-[#24a048]">↩</span> Antes e depois<br/>da minha mãe
          </div>
        </div>

        <PrimaryButton />

        <p className="text-[15px] text-slate-800 mb-4 px-2 mt-6">
          👉 Foi aí que me especializei e criei um <strong>método exclusivo para Resetar o Metabolismo Morto</strong> de mulheres no climatério e menopausa <u>de forma 100% natural.</u>
        </p>

        <p className="text-[15px] text-slate-800 mb-8 px-2">
          👉 Já ajudei mais de <strong>800 mulheres</strong> a emagrecerem sem sofrimento, sem efeito sanfona e <strong>agora quero transformar o seu corpo também!</strong>
        </p>

        <BundleImage />
        <PriceBlock />
        <PrimaryButton />
      </div>

      {/* 5. Depoimentos Audio */}
      <div className="flex flex-col items-center w-full -mt-2 mb-10">
        <div className="mt-2 mb-8 w-full text-center">
          <h3 className="text-[1.2rem] font-bold text-slate-800 mb-1">
            💚 Ela perdeu quase<br/><strong className="text-[#24a048] font-black">1KG em 3 dias</strong> 👇🏼 😍
          </h3>
          <p className="text-sm font-bold text-slate-600 mb-3">Clique no triângulo para ouvir 👇🏼</p>
          
          <div className="bg-[#0f172a] rounded-[18px] p-2 pr-4 flex items-center gap-3 w-full max-w-[340px] mx-auto shadow-md">
            <div className="bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-lg ml-1">▶</span>
            </div>
            <div className="flex-1 flex items-center gap-1 opacity-50">
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-5 bg-white rounded-full"></div>
              <div className="w-1 h-4 bg-white rounded-full"></div>
              <div className="w-1 h-6 bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-5 bg-white rounded-full"></div>
              <div className="w-1 h-4 bg-white rounded-full"></div>
              <div className="w-1 h-6 bg-white rounded-full"></div>
            </div>
            <div className="bg-slate-300 w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-[10px]">🎙️</div>
          </div>
        </div>

        <div className="mb-8 w-full text-center">
          <h3 className="text-[1.2rem] font-bold text-slate-800 mb-1">
            💚 O marido dela disse que<br/><strong className="text-[#24a048] font-black">ela emagreceu</strong> 👇🏼 😍
          </h3>
          <p className="text-sm font-bold text-slate-600 mb-3">Clique no triângulo para ouvir 👇🏼</p>
          
          <div className="bg-[#0f172a] rounded-[18px] p-2 pr-4 flex items-center gap-3 w-full max-w-[340px] mx-auto shadow-md">
            <div className="bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-lg ml-1">▶</span>
            </div>
            <div className="flex-1 flex items-center gap-1 opacity-50">
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-5 bg-white rounded-full"></div>
              <div className="w-1 h-4 bg-white rounded-full"></div>
              <div className="w-1 h-2 bg-white rounded-full"></div>
              <div className="w-1 h-5 bg-white rounded-full"></div>
              <div className="w-1 h-4 bg-white rounded-full"></div>
            </div>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&fit=crop" className="w-8 h-8 rounded-full shrink-0 object-cover" alt="Profile" />
          </div>
        </div>

        <PrimaryButton />
      </div>

      {/* 6. Photo Testimonial */}
      <div className="flex flex-col items-center w-full mb-10">
        <h2 className="text-[1.05rem] min-[370px]:text-[1.1rem] tracking-tighter font-bold text-center text-slate-800 leading-tight mb-2 flex flex-col items-center w-full">
          <span className="whitespace-nowrap">💚 Todas elas <strong className="text-slate-900 font-black">EMAGRECERAM</strong> com a</span>
          <span className="whitespace-nowrap"><strong className="text-[#24a048] font-black">Dieta Hormonal</strong> 👇🏼 😍</span>
        </h2>

        <div className="w-full mt-2 bg-[#4caf50] rounded-[20px] p-0.5 overflow-hidden shadow-md my-4">
          <div className="text-center text-white font-bold text-xs py-1.5 uppercase tracking-wide">
            ELIZETE PERDEU <span className="underline">4KG EM 21 DIAS</span><br/>COM A DIETA HORMONAL
          </div>
          <div className="flex bg-white h-[260px]">
            <div className="w-1/2 h-full border-r border-[#4caf50] relative">
               <img src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=400&fit=crop" className="w-full h-full object-cover" alt="Antes" />
               <div className="absolute bottom-2 left-2 right-2 bg-[#d82a27] text-white text-[10px] font-bold text-center py-1 rounded">ANTES DA<br/>DIETA HORMONAL</div>
            </div>
            <div className="w-1/2 h-full relative">
               <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&fit=crop" className="w-full h-full object-cover opacity-90" alt="Depois" />
               <div className="absolute bottom-2 left-2 right-2 bg-[#4caf50] text-white text-[10px] font-bold text-center py-1 rounded">DEPOIS DA<br/>DIETA HORMONAL</div>
            </div>
          </div>
        </div>

        <h3 className="text-[1.1rem] min-[370px]:text-[1.15rem] tracking-tighter font-bold text-center text-slate-800 mt-6 mb-2 flex flex-col items-center w-full">
          <span className="whitespace-nowrap">Emagreça <strong className="text-[#24a048]">1kg por semana</strong> ou seu</span>
          <span className="whitespace-nowrap">dinheiro de volta 🔓</span>
        </h3>

        <div className="w-full bg-[#24a048] rounded-[24px] p-4 flex flex-col items-center justify-center relative shadow-lg mt-4 mb-4 pt-5 overflow-hidden">
          <h3 className="text-white text-3xl font-black text-center leading-none z-10 drop-shadow-md">
            Super Garantia<br/>
            de 30 Dias 🔒
          </h3>
          <img src="https://images.unsplash.com/photo-1594824436998-ddedefa57053?q=80&w=200&fit=crop" className="absolute right-0 -bottom-2 w-28 opacity-80" alt="Nutri" />
          <div className="w-full mt-6 z-10 flex justify-center">
            <button className="w-[94%] max-w-[340px] bg-[#24a048] border-2 border-white/50 text-white rounded-xl py-3.5 font-bold text-[14px] sm:text-base whitespace-nowrap hover:bg-[#1a7f38] transition-colors flex items-center justify-center inset-0 backdrop-blur-sm">
              QUERO ELIMINAR 1KG POR SEMANA
            </button>
          </div>
        </div>

      </div>

      {/* 7. FAQ */}
      <div className="w-full -mt-2 -mb-2">
        <PrimaryButton />
      </div>
      <div className="flex flex-col w-full mb-8">
        <h2 className="text-[1.15rem] min-[370px]:text-[1.25rem] tracking-tighter font-black text-center text-slate-900 leading-[1.1] mb-8 mt-4 px-1 w-full flex flex-col items-center">
          <span className="whitespace-nowrap">Respostas que confirmam que <span className="text-[#24a048]">essa é</span></span>
          <span className="whitespace-nowrap text-[#24a048]">a melhor decisão da sua vida <span className="text-slate-900">👇🏼</span></span>
        </h2>

        <div className="flex w-full justify-center px-2 sm:px-6 mb-4">
          <h3 className="text-[16px] sm:text-[17px] font-black text-slate-900 flex gap-2 items-start text-left max-w-[380px] w-full">
            <span className="bg-[#5c8aff] text-white w-5 h-5 flex items-center justify-center rounded shrink-0 text-[11px] text-center mt-0.5"><span className="ml-[0.5px]">1</span></span>
            <span className="leading-tight font-black">Eu já tentei de tudo e nada funcionou, <span className="text-[#24a048]">por que agora seria diferente?</span></span>
          </h3>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-4">
          <p className="text-[15px] text-slate-800 leading-tight font-medium text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">👉</span>
            <span>Porque tudo o que você tentou <strong>não foi feito para mulheres na menopausa</strong>. Dietas e exercícios comuns não resolvem o verdadeiro problema: <strong>seus hormônios desregulados travaram seu metabolismo.</strong></span>
          </p>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-4">
          <p className="text-[15px] text-slate-800 leading-tight font-medium text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">👉</span>
            <span>A Dieta Hormonal <strong>reativa sua queima de gordura naturalmente</strong>, sem forçar seu corpo. Ele foi criado <strong>exclusivamente para mulheres na menopausa</strong> que já tentaram de tudo e precisam de um método que realmente funciona.</span>
          </p>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-10">
          <p className="text-[15px] text-slate-900 font-bold leading-tight text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">💚 🔥</span>
            <span>Agora é sua chance! Reative seu metabolismo e comece a emagrecer hoje. 👉 Garanta seu acesso agora!</span>
          </p>
        </div>

        <div className="flex w-full justify-center px-2 sm:px-6 mb-6">
          <h3 className="text-[16px] sm:text-[17px] font-black text-slate-900 flex gap-2 items-start text-left max-w-[380px] w-full">
            <span className="bg-[#5c8aff] text-white w-5 h-5 flex items-center justify-center rounded shrink-0 text-[11px] text-center mt-0.5"><span className="ml-[0.5px]">2</span></span>
            <span className="leading-tight font-black">Como irei <span className="text-[#24a048]">receber o meu acesso?</span></span>
          </h3>
        </div>

        <div className="flex w-full justify-center px-2 sm:px-6 mb-4">
          <p className="text-[15px] text-slate-800 leading-tight font-medium text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">👉</span>
            <span>Dois minutos após a compra, você receberá um e-mail da minha equipe com o seu acesso a <strong>Dieta Hormonal.</strong></span>
          </p>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-4">
          <p className="text-[15px] text-slate-800 leading-tight font-medium text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">👉</span>
            <span>Todo o material estará disponível para você começar imediatamente e seguir o passo a passo de forma simples e prática.</span>
          </p>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-10">
          <p className="text-[15px] text-slate-900 font-bold leading-tight text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">💚 🔥</span>
            <span>Seu acesso chega em minutos! Não perca tempo, comece agora! 👉 Garanta a sua <strong className="text-[#24a048]">Dieta Hormonal.</strong></span>
          </p>
        </div>

        <div className="flex w-full justify-center px-2 sm:px-6 mb-4">
          <h3 className="text-[16px] sm:text-[17px] font-black text-slate-900 flex gap-2 items-start text-left max-w-[380px] w-full">
            <span className="bg-[#5c8aff] text-white w-5 h-5 flex items-center justify-center rounded shrink-0 text-[11px] text-center mt-0.5"><span className="ml-[0.5px]">3</span></span>
            <span className="leading-tight font-black">Se meu metabolismo morreu, <span className="text-[#24a048]">como ele pode voltar a funcionar?</span></span>
          </h3>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-4">
          <p className="text-[15px] text-slate-800 leading-tight font-medium text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">👉</span>
            <span>Seu metabolismo <strong>não morreu, apenas desacelerou</strong> por causa da menopausa. <strong>Hormônios desregulados bloqueiam a queima de gordura</strong>, e a Dieta Hormonal resolve isso.</span>
          </p>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-4">
          <p className="text-[15px] text-slate-800 leading-tight font-medium text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">👉</span>
            <span>O protocolo <strong>reativa seu metabolismo naturalmente</strong>, equilibrando hormônios como cortisol, insulina e estrogênio. Assim, seu corpo volta a queimar gordura sem esforço.</span>
          </p>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-10">
          <p className="text-[15px] text-slate-900 font-bold leading-tight text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">💚 🔥</span>
            <span>Seu metabolismo pode ser reativado! Comece agora e volte a queimar gordura! 👉 Garanta a Dieta Hormonal</span>
          </p>
        </div>

        <div className="flex w-full justify-center px-2 sm:px-6 mb-4">
          <h3 className="text-[16px] sm:text-[17px] font-black text-slate-900 flex gap-2 items-start text-left max-w-[380px] w-full">
            <span className="bg-[#5c8aff] text-white w-5 h-5 flex items-center justify-center rounded shrink-0 text-[11px] text-center mt-0.5"><span className="ml-[0.5px]">4</span></span>
            <span className="leading-tight font-black">Em quanto tempo <span className="text-[#24a048]">começo a ver resultados?</span></span>
          </h3>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-3">
          <p className="text-[14.5px] text-slate-800 leading-tight font-medium text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">👉</span>
            <span>Nos <strong>primeiros 7 dias</strong>, seu corpo já começa a desinchar, eliminar líquidos e regular os hormônios que <strong>impedem a queima de gordura</strong>. Muitas mulheres perdem até 3kg já na primeira semana.</span>
          </p>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-5">
          <p className="text-[14.5px] text-slate-800 leading-tight font-medium text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">👉</span>
            <span>Em <strong>30 dias</strong>, você pode eliminar <strong>até 5kg de forma definitiva</strong>, sentindo seu corpo mais leve, sua energia voltando e sua fome descontrolada reduzindo.</span>
          </p>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-10">
          <p className="text-[14.5px] text-slate-800 font-bold leading-tight text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">💚🔥</span>
            <span><strong>Elimine até 3kg na primeira semana e 5kg em 21 dias!</strong> 👉 Clique no botão e comece agora mesmo!</span>
          </p>
        </div>

        <div className="flex w-full justify-center px-2 sm:px-6 mb-4">
          <h3 className="text-[16px] sm:text-[17px] font-black text-slate-900 flex gap-2 items-start text-left max-w-[380px] w-full">
            <span className="bg-[#5c8aff] text-white w-5 h-5 flex items-center justify-center rounded shrink-0 text-[11px] text-center mt-0.5"><span className="ml-[0.5px]">5</span></span>
            <span className="leading-tight font-black underline decoration-2 underline-offset-2">Por que esse programa custa tão pouco <span className="text-[#24a048]">se entrega tanto?</span></span>
          </h3>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-3">
          <p className="text-[14.5px] text-slate-800 leading-tight font-medium text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">👉</span>
            <span>Porque meu objetivo é ajudar <strong>o maior número possível de mulheres na menopausa</strong> a recuperarem o corpo e a autoestima.</span>
          </p>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-5">
          <p className="text-[14.5px] text-slate-800 leading-tight font-medium text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">👉</span>
            <span>Se esse protocolo fosse vendido como consultas individuais, <strong>o investimento seria de mais de R$ 800</strong>, mas eu quis deixar acessível para que qualquer mulher possa aplicar e ver os resultados.</span>
          </p>
        </div>
        <div className="flex w-full justify-center px-2 sm:px-6 mb-10">
          <p className="text-[14.5px] text-slate-800 font-bold leading-tight text-left flex gap-1.5 items-start max-w-[380px] w-full">
            <span className="shrink-0 mt-0.5">💚🔥</span>
            <span>Por isso, <strong>essa oferta é por tempo limitado</strong> e pode sair do ar a qualquer momento, então clique e aproveite!</span>
          </p>
        </div>
      </div>

      <BundleImage />
      <PriceBlock />
      <PrimaryButton />
      
      <div className="bg-slate-100/50 rounded-xl p-4 mt-6 mb-1 border border-slate-200">
        <p className="text-[12px] text-center text-slate-600 mb-2 font-medium">
          Compra 100% Segura | Seus dados estão protegidos.
        </p>
        <p className="text-[11px] text-center font-bold text-slate-700">
          📩 EMAIL: resethormonal.suporte@gmail.com
        </p>
      </div>
    </div>
  );
}


export default function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep(s => Math.min(s + 1, 17));
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-rose-100">
      <main className="max-w-[480px] mx-auto bg-white min-h-screen px-5 shadow-sm border-x border-slate-100 overflow-hidden relative">
        {step === 1 && <StepOne onNext={nextStep} />}
        {step === 2 && <StepTwo onNext={nextStep} />}
        {step === 3 && <StepThree onNext={nextStep} />}
        {step === 4 && <StepFour onNext={nextStep} />}
        {step === 5 && <StepFive onNext={nextStep} />}
        {step === 6 && <StepSix onNext={nextStep} />}
        {step === 7 && <StepSeven onNext={nextStep} />}
        {step === 8 && <StepEight onNext={nextStep} />}
        {step === 9 && <StepNine onNext={nextStep} />}
        {step === 10 && <StepTen onNext={nextStep} />}
        {step === 11 && <StepEleven onNext={nextStep} />}
        {step === 12 && <StepTwelve onNext={nextStep} />}
        {step === 13 && <StepThirteen onNext={nextStep} />}
        {step === 14 && <StepFourteen onNext={nextStep} />}
        {step === 15 && <StepFifteen onNext={nextStep} />}
        {step === 16 && <StepSixteen onNext={nextStep} />}
        {step === 17 && <StepSeventeen />}
      </main>
    </div>
  );
}
