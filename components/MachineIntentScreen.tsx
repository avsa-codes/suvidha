'use client';

interface MachineIntentScreenProps {
  onSelect: (type: 'machine-buy' | 'machine-sell') => void;
  onBack: () => void;
}

export default function MachineIntentScreen({
  onSelect,
  onBack,
}: MachineIntentScreenProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col">

      {/* Header */}
      <button
        onClick={onBack}
        className="text-yellow-400 font-bold mb-4"
      >
        ← वापस
      </button>

      <h1 className="text-2xl font-bold mb-2">
        आप क्या करना चाहते हैं?
      </h1>

      <p className="text-gray-400 mb-8">
        मशीन खरीदनी है या बेचनी है?
      </p>

      {/* Options */}
      <div className="flex flex-col gap-4">

        {/* BUY */}
        <button
          onClick={() => onSelect('machine-buy')}
          className="bg-yellow-400 text-black font-bold py-4 rounded-xl"
        >
          🚜 मशीन खरीदनी है
        </button>

        {/* SELL */}
        <button
          onClick={() => onSelect('machine-sell')}
          className="border-2 border-yellow-400 text-yellow-400 font-semibold py-4 rounded-xl"
        >
          💰 मशीन बेचनी है
        </button>

      </div>

    </div>
  );
}