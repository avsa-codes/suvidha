'use client';

import { models, companies } from '@/lib/data';

interface ModelScreenProps {
  companyId: string;
  onSelect: (modelId: string) => void;
  onBack: () => void;
}

export default function ModelScreen({ companyId, onSelect, onBack }: ModelScreenProps) {
  const companyName = companies.find(c => c.id === companyId)?.name || '';
  const companyModels = models[companyId as keyof typeof models] || [];

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
          मॉडल चुनें
        </h2>
        <p className="text-yellow-400 text-sm mt-1 font-semibold">
          {companyName}
        </p>
      </div>

      {/* Models List */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-3">
          {companyModels.map((model) => (
            <button
              key={model.id}
              onClick={() => onSelect(model.id)}
              className="w-full bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-xl hover:ring-2 hover:ring-yellow-400 transition-all duration-200 group text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition">
                    {model.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    क्षमता: {model.capacity}
                  </p>
                </div>
                <div className="text-yellow-400 text-2xl ml-4 group-hover:scale-110 transition-transform">
                  →
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
