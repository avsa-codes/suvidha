'use client';

import { useEffect, useState } from 'react';

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;

    if (choice.outcome === 'accepted') {
      console.log('User installed app');
    }

    setDeferredPrompt(null);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      {/* Modal */}
      <div className="relative w-[90%] max-w-sm bg-gradient-to-b from-gray-900 to-black border border-yellow-400 rounded-2xl p-6 shadow-xl text-center">

        {/* ❌ Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
        >
          ✕
        </button>

        {/* 🔥 Icon / Branding */}
        <div className="mb-4">
          <div className="w-20 h-20 mx-auto bg-black border border-yellow-400 rounded-2xl flex items-center justify-center shadow-lg mb-2">
  <img
    src="/icons/icon-192.png"
    alt="Suvidha App"
    className="w-14 h-14 object-contain"
  />
</div>
        </div>

        {/* Title */}
        <h2 className="text-white text-xl font-bold mb-2">
          ऐप इंस्टॉल करें
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-5">
          Suvidha Earthmovers ऐप इंस्टॉल करें और  
          <span className="text-yellow-400"> तुरंत रेट पाएं</span>
        </p>

        {/* Install Button */}
        <button
          onClick={installApp}
          className="w-full bg-gradient-to-b from-yellow-300 to-yellow-500 text-black font-bold py-3 rounded-xl shadow-lg active:scale-95 transition"
        >
          Install App
        </button>

        {/* Secondary hint */}
        <p className="text-xs text-gray-500 mt-3">
          {/* या browser menu से “Add to Home Screen” */}
        </p>

      </div>
    </div>
  );
}