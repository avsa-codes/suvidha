'use client';

import Image from 'next/image';
import InstallPrompt from '@/components/InstallPrompt';

interface EntryScreenProps {
  onStart: (type: 'parts' | 'machine') => void;
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
      <div className="relative z-10 flex flex-col h-full px-6">

        {/* ===== TOP LOGO ===== */}
        <div className="flex flex-col items-center mt-6">

          <Image
            src="/images/logo.png"
            alt="Suvidha Earthmovers"
            width={350}
            height={100}
            className="object-contain rounded-xl border border-yellow-400"
            priority
          />

          {/* ===== CONTACT INFO ===== */}
          <div className="mt-2 flex flex-col items-center text-xs text-gray-300">

            <div className="flex gap-3 text-white font-medium" style ={{fontSize : '16px'}}>
              <a href="tel:9140468817" className="hover:text-yellow-400 transition">
                 9140468817
              </a>
              <span className="text-gray-500">|</span>
              <a href="tel:9839837184" className="hover:text-yellow-400 transition">
                 9839837184
              </a>
            </div>

            <div className="text-gray-400 mt-1" style ={{fontSize : '20px', color : 'white'}}>
               Prayagraj
            </div>

          </div>
        </div>

        {/* ===== CENTER CONTENT ===== */}
        <div className="flex flex-1 items-center justify-center">

          <div className="flex flex-col items-center text-center max-w-sm w-full relative -top-12">

            {/* FAST PROMISE */}
            <p className="text-yellow-300 text-sm mb-2 font-medium">
              ⚡ Ab 2 min me WhatsApp pe rate milega
            </p>

            {/* HOOK */}
            <h1 className="text-white font-extrabold leading-tight text-5xl">
              Zyada paisa de rhe hain
            </h1>

            <h2 className="text-white font-bold leading-tight text-4xl">
              machine ke parts ka?
            </h2>

            {/* SUPPORT */}
            <p className="text-yellow-400 text-lg mt-3 font-semibold">
              Part ka sahi rate yahan milega
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4 mt-10 w-full relative top-16" style={{position : 'relative', top : '30px'}}>

              <button
                onClick={() => onStart('parts')}
                className="w-full bg-yellow-400 text-black font-bold py-5 rounded-2xl text-lg shadow-xl"
              >
                ⚙️ PART KA RATE CHECK KARE
              </button>

              <button
                onClick={() => onStart('machine')}
                className="w-full border-2 border-yellow-400 text-yellow-400 font-semibold py-5 rounded-2xl text-lg"
              >
                ₹ PURANI MACHINE KA RATE CHECK KARO
              </button>

            </div>

            <InstallPrompt />

          </div>
        </div>

      </div>

      {/* ===== WHATSAPP BUTTON ===== */}
      {/* WhatsApp Hint Bubble */}
<div className="fixed bottom-24 right-6 z-50 bg-white text-black text-xs px-3 py-2 rounded-lg shadow-md animate-bounce">
  WhatsApp par chat karein 💬
</div>
      <a
  href="https://wa.me/919839837184"
  target="_blank"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full shadow-xl flex items-center justify-center"
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
  className="fixed bottom-6 left-6 z-50 bg-yellow-400 hover:bg-yellow-500 w-14 h-14 rounded-full shadow-xl flex items-center justify-center"
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