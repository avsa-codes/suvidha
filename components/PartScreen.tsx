'use client';

import Image from 'next/image';
import { parts, companies, models } from '@/lib/data';

interface PartScreenProps {
  companyId: string;
  modelId: string;
  onSelect: (partId: string) => void;
  onBack: () => void;
}

export default function PartScreen({ companyId, modelId, onSelect, onBack }: PartScreenProps) {
  const companyName = companies.find(c => c.id === companyId)?.name || '';
  const modelName = models[companyId as keyof typeof models]?.find(m => m.id === modelId)?.name || '';
  const companyParts = parts[companyId as keyof typeof parts] || [];

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
          पार्ट चुनें
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          {companyName} • {modelName}
        </p>
      </div>

      {/* Parts Grid */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="grid grid-cols-1 gap-4">
          {companyParts.map((part) => (
            <button
              key={part.id}
              onClick={() => onSelect(part.id)}
              className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:ring-2 hover:ring-yellow-400 transition-all duration-200 text-left"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={part.image}
                  alt={part.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-300 transition">
                  {part.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {part.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
