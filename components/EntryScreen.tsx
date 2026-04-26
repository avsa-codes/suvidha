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

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        {/* Bottom focus glow */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-6">

  {/* ===== TOP LOGO ===== */}
<div className="flex justify-center mt-6">
  <Image
    src="/images/logo.png"
    alt="Suvidha Earthmovers"
    width={350}
    height={100}
    className="object-contain rounded-xl border border-yellow-400"
    priority
  />
</div>

  {/* ===== CENTER CONTENT ===== */}
  <div className="flex flex-1 items-center justify-center">

    <div className="flex flex-col items-center text-center max-w-sm w-full" style={{ position: 'relative', top: '-50px' }}>

      {/* FAST PROMISE */}
      <p className="text-yellow-300 text-sm mb-2 font-medium">
        ⚡ Ab 2 min me WhatsApp pe rate milega
      </p>

      {/* HOOK */}
      <h1 className="text-white text-4xl font-extrabold leading-tight" style={{ fontSize: '50px'}}>
        Zyada paisa de rhe hain
      </h1>

      <h2 className="text-white text-3xl font-bold" style={{ fontSize: '45px'}}>
        machine ke parts ka?
      </h2>

      {/* SUPPORT */}
      <p className="text-yellow-400 text-lg mt-3 font-semibold">
        Part ka sahi rate yahan milega
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col gap-4 mt-8 w-full" style={{ position: 'relative', top: '110px' }}>

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
    </div>
  );
}