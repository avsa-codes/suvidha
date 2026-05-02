'use client';

import Image from 'next/image';
import InstallPrompt from '@/components/InstallPrompt';

import type { FlowType } from '@/app/page';

interface EntryScreenProps {
  onStart: (type: FlowType) => void;
}

export default function EntryScreen({ onStart }: EntryScreenProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/bground.png"
          alt="Excavator"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-6 pb-28">

        {/* ===== TOP LOGO ===== */}
        <div className="flex flex-col items-center mt-6">

          <Image
            src="/images/logo.png"
            alt="Suvidha Earthmovers"
            width={350}
            height={100}
            className="object-contain rounded-xl border border-yellow-400"
            priority
            style={{position:'relative', top:'-16px'}}
          />

          {/* ===== CONTACT INFO ===== */}
          <div className="mt-2 flex items-center justify-center gap-4 text-white font-medium text-sm" style={{position:'relative', top:'-18px', fontSize:'14px'}}>

  {/* 📞 Phone 1 */}
  <a href="tel:9140468817" className="flex items-center gap-1 hover:text-yellow-400 transition">
  
    9140468817
  </a>

  {/* Divider */}
  <span className="text-gray-500">|</span>

  {/* 📞 Phone 2 */}
  <a href="tel:9839837184" className="flex items-center gap-1 hover:text-yellow-400 transition">
    
    9839837184
  </a>

  {/* Divider */}
  <span className="text-gray-500">|</span>

  {/* 📍 Location */}
  <div className="flex items-center gap-1 hover:text-yellow-400 transition">
    
    PRAYAGRAJ
  </div>

</div>
        </div>

        {/* ===== VALUE STRIPS ===== */}
<div className="space-y-3 mb-6">

  <div className="flex items-center gap-3 border border-yellow-400/60 rounded-lg px-3 py-2 bg-black/40 backdrop-blur-sm">
    <span className="text-yellow-400 text-lg">✔</span>
    <p className="text-sm text-white">
      आपकी मशीन और पार्ट्स की पूरी सुविधा
    </p>
  </div>

  <div className="flex items-center gap-3 border border-yellow-400/60 rounded-lg px-3 py-2 bg-black/40 backdrop-blur-sm">
    <span className="text-yellow-400 text-lg">⭐</span>
    <p className="text-sm text-yellow-400 font-semibold">
      भारत का सबसे आसान प्लेटफॉर्म मशीन और पार्ट्स के लिए
    </p>
  </div>

</div>

        {/* ===== CENTER CONTENT ===== */}
        <div className="flex flex-1 flex-col justify-between py-6 pb-32">

  {/* ===== TOP SPACE (keeps balance) ===== */}
 

  {/* ===== MAIN CTA ===== */}
<div className="text-center" style={{position:'relative', top:'-34px'}}>
  <h2 className="text-white text-5xl font-extrabold leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
    आपको <br />
    क्या चाहिए?
  </h2>

  {/* Glow line */}
  <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-2 mb-6" />
</div>

  {/* ===== BIG BUTTON GRID ===== */}
  <div className="grid grid-cols-2 gap-5 w-full" style={{position:'relative', top:'-50px'}}>

    {/* 🔧 PART */}
    <button
    
      onClick={() => onStart('part')}
      className="bg-gradient-to-b from-yellow-300 to-yellow-500 text-black rounded-2xl p-5 flex flex-col items-center justify-center h-40 shadow-xl shadow-yellow-500/30 active:scale-95 transition border border-yellow-200"
    >
      <img
  src="/icons/gear.png"
  alt="Gear"
  className="w-20 h-20 object-contain"
/>

<div className="text-xl font-extrabold leading-tight">
  स्पेयर 
 <br /> पार्ट्स
</div>
    </button>

    {/* 🚜 MACHINE */}
    <button
  onClick={() => onStart('machine-intent')}
  className="bg-gradient-to-b from-yellow-300 to-yellow-500 text-black rounded-2xl p-5 flex flex-col items-center justify-center h-40 shadow-xl shadow-yellow-500/30 active:scale-95 transition border border-yellow-200"
>
  <img
  src="/icons/excavator.png"
  alt="Gear"
  className="w-20 h-20 object-contain"
/>

  <div className="text-2xl font-extrabold leading-tight">
    मशीन <br /> खरीदें/बेचें
  </div>
</button>

    {/* 🛠️ MECHANIC */}
    <button
  onClick={() => onStart('mechanic')}
  className="bg-black/60  rounded-2xl p-5 flex flex-col items-center justify-center h-40 backdrop-blur-sm active:scale-95 transition border border-yellow-200 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
>
  <img
  src="/icons/mechanic.png"
  alt="Gear"
  className="w-20 h-20 object-contain"
/>

  <div className="text-2xl font-bold text-white leading-tight">
    मैकेनिक <br /> चाहिए
  </div>
</button>

    {/* ♻️ USED PART */}
    <button
  onClick={() => onStart('used-part')}
  className="bg-black/60  rounded-2xl p-5 flex flex-col items-center justify-center h-40 backdrop-blur-sm active:scale-95 transition border border-yellow-200 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
>
 <img
  src="/icons/recycle.png"
  alt="Gear"
  className="w-20 h-20 object-contain"
/>

  <div className="text-2xl font-bold text-white leading-tight">
    पुराने <br /> पार्ट्स
  </div>
</button>

  </div>

  {/* ===== BOTTOM TRUST LINE ===== */}
<div className="mt-6 mb-4 flex items-center justify-center">
  <div className="flex items-center gap-3 bg-black/70 border border-yellow-400/50 rounded-full px-4 py-2 backdrop-blur-sm" style={{position:'relative', top:'-50px'}}>

    {/* <span className="text-yellow-400 text-lg">⚡</span> */}

    <p className="text-sm text-white">
    ⚡2 मिनट में <span className="text-yellow-400 font-semibold">WhatsApp</span> पर जवाब मिलेगा
    </p>

  </div>
</div>

</div>

      </div>

      {/* ===== WHATSAPP BUTTON ===== */}
      {/* WhatsApp Hint Bubble */}

      <a
  href="https://wa.me/919839837184"
  target="_blank"
  className="fixed bottom-10 right-6 z-50 bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full shadow-xl flex items-center justify-center"
  style={{position:'relative', left:'336px', top:'-78px', width:'50px', height:'50px'}}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-7 h-7 fill-white"
  >
    <path d="M16 .4C7.2.4 0 7.6 0 16.4c0 2.9.8 5.7 2.2 8.1L0 32l7.7-2.1c2.3 1.3 4.9 2 7.6 2 8.8 0 16-7.2 16-16S24.8.4 16 .4zm0 29.3c-2.5 0-4.9-.7-7-2l-.5-.3-4.6 1.3 1.2-4.5-.3-.5c-1.4-2.2-2.1-4.7-2.1-7.3 0-7.5 6.1-13.6 13.6-13.6S29.9 8.9 29.9 16.4 23.8 29.7 16 29.7zm7.5-10.2c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.3-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8 0 1.6 1.2 3.2 1.4 3.4.2.2 2.4 3.6 5.8 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2 .1.6-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z" />
  </svg>
</a>

      {/* ===== CALL BUTTON ===== */}
      <a
  href="tel:9140468817"
  className="fixed bottom-10  left-6 z-50 bg-yellow-400 hover:bg-yellow-500 w-14 h-14 rounded-full shadow-xl flex items-center justify-center"
  style={{position:'relative', left:'4px', top:'-128px', width:'50px', height:'50px'}}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-6 h-6 fill-black"
  >
    <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z"/>
  </svg>
</a>

    </div>
  );
}