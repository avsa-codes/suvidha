'use client';

import Image from 'next/image';
import { companies, models, parts } from '@/lib/data';

import type { FlowType } from '@/app/page';

interface FinalScreenProps {
  companyId: string;
  modelId: string;
  partId: string;
  flowType: FlowType; // ✅ ADD THIS
  machineData?: {
    hours: string;
    breaker: 'yes' | 'no';
    breakerHours?: string;
  }; // ✅ ADD THIS
  onBack: () => void;
}

export default function FinalScreen({ companyId, modelId, partId, flowType,
  machineData, onBack }: FinalScreenProps) {
  const company = companies.find(c => c.id === companyId);
  const model = models[companyId as keyof typeof models]?.find(m => m.id === modelId);
  const part = parts[companyId as keyof typeof parts]?.find(p => p.id === partId);

const handleWhatsApp = () => {
  let message = '';

if (flowType === 'part') {
  message = `नमस्ते, मुझे इस पार्ट का रेट चाहिए:

कंपनी: ${company?.name}
मॉडल: ${model?.name}
पार्ट: ${part?.name}`;
}

else if (flowType === 'used-part') {
  message = `नमस्ते, मुझे इस पार्ट का पुराना (used) रेट चाहिए:

कंपनी: ${company?.name}
मॉडल: ${model?.name}
पार्ट: ${part?.name}`;
}

else if (flowType === 'mechanic') {
  message = `नमस्ते, मुझे मशीन के लिए मैकेनिक/सर्विस चाहिए:

कंपनी: ${company?.name}
मॉडल: ${model?.name}

समस्या: (कृपया बताएं)`;
}

else if (flowType === 'machine-sell') {
  message = `नमस्ते, मैं अपनी मशीन बेचना चाहता हूँ:

कंपनी: ${company?.name}
मॉडल: ${model?.name}
चले हुए घंटे: ${machineData?.hours}
ब्रेकर इस्तेमाल हुआ: ${machineData?.breaker === 'yes' ? 'हाँ' : 'नहीं'}
${
  machineData?.breaker === 'yes'
    ? `ब्रेकर के घंटे: ${machineData?.breakerHours}`
    : ''
}`;
}

else if (flowType === 'machine-buy') {
  message = `नमस्ते, मुझे मशीन खरीदनी है:

कंपनी: ${company?.name}
मॉडल: ${model?.name}`;
}

  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/919839837184?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 border-b-2 border-yellow-400 p-4 sticky top-0 z-10">
        <button
          onClick={onBack}
          className="text-yellow-400 font-bold mb-3 text-lg hover:text-yellow-300 transition"
        >
          ← वापस
        </button>
        <h2 className="text-2xl font-bold text-white">
          अनुरोध भेजें
        </h2>
      </div>

      {/* Summary Card */}
      <div className="flex-1 p-4 flex flex-col items-center justify-center">
        {/* Part Image */}
        {flowType === 'part' && part && (
          <div className="relative h-56 w-56 mb-6 rounded-lg overflow-hidden shadow-2xl border-4 border-yellow-400">
            <Image
              src={part.image}
              alt={part.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Selection Summary */}
        <div className="bg-gray-800 rounded-lg p-6 w-full max-w-sm shadow-lg border-2 border-yellow-400/30">
          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-2">कंपनी</p>
            <p className="text-white text-xl font-bold">{company?.name}</p>
          </div>

          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-2">मॉडल</p>
            <p className="text-white text-xl font-bold">{model?.name}</p>
            <p className="text-gray-400 text-sm">क्षमता: {model?.capacity}</p>
          </div>

          {(flowType === 'machine-sell' || flowType === 'machine-buy') && (
  <div className="mb-6">
    <p className="text-gray-400 text-sm mb-2">मशीन जानकारी</p>

    <p className="text-white text-lg">
      Hours: {machineData?.hours}
    </p>

    <p className="text-white text-lg">
      Breaker: {machineData?.breaker === 'yes' ? 'हाँ' : 'नहीं'}
    </p>

    {machineData?.breaker === 'yes' && (
      <p className="text-white text-lg">
        Breaker Hours: {machineData?.breakerHours}
      </p>
    )}
  </div>
)}

         {flowType === 'part' && (
  <div className="mb-6">
    <p className="text-gray-400 text-sm mb-2">पार्ट</p>
    <p className="text-white text-xl font-bold">{part?.name}</p>
    <p className="text-gray-400 text-sm">{part?.description}</p>
  </div>
)}
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="p-4 bg-gray-900 border-t-2 border-yellow-400">
        <button
  onClick={handleWhatsApp}
  className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-lg flex items-center justify-center gap-2"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.87 1.172c-1.493.807-2.786 1.962-3.756 3.355C2.997 10.749 2.5 12.469 2.5 14.237c0 1.768.497 3.488 1.441 4.95l-1.532 5.594 5.783-1.438c1.429.796 3.01 1.217 4.808 1.217 5.522 0 10-4.477 10-10s-4.478-10-10-10z"/>
  </svg>

  {flowType === 'part' && 'पार्ट का रेट पाएं'}
  {flowType === 'used-part' && 'पुराने पार्ट्स का रेट पाएं'}
  {flowType === 'machine-sell' && 'मशीन बेचने के लिए संपर्क करें'}
  {flowType === 'machine-buy' && 'मशीन खरीदने के लिए संपर्क करें'}
  {flowType === 'mechanic' && 'मैकेनिक से संपर्क करें'}
</button>
        
        <p className="text-center text-gray-400 text-xs mt-3">
           
        </p>
      </div>
    </div>
  );
}
