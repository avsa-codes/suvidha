'use client';

import Image from 'next/image';
import { companies } from '@/lib/data';

interface CompanyScreenProps {
  onSelect: (companyId: string) => void;
  onBack: () => void;
}

export default function CompanyScreen({ onSelect, onBack }: CompanyScreenProps) {
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
          कंपनी चुनें
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          अपने उपकरण की कंपनी सिलेक्ट करें
        </p>
      </div>

      {/* Companies Grid */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="grid grid-cols-1 gap-4">
          {companies.map((company) => (
            <button
              key={company.id}
              onClick={() => onSelect(company.id)}
              className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:ring-2 hover:ring-yellow-400 transition-all duration-200 transform hover:scale-102"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition"></div>
              </div>
              <div className="p-4 bg-gray-800">
                <h3 className="text-xl font-bold text-white mb-1" style ={{fontSize : '34px'}}>
                  {company.name}
                </h3>
                <p className="text-yellow-400 text-sm font-semibold">
                  {company.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
