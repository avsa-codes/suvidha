'use client';

import { useState } from 'react';

interface MachineDetailsScreenProps {
  onNext: (data: {
    hours: string;
    breaker: 'yes' | 'no';
    breakerHours?: string;
  }) => void;
}

export default function MachineDetailsScreen({
  onNext,
}: MachineDetailsScreenProps) {
  const [hours, setHours] = useState('');
  const [breaker, setBreaker] = useState<'yes' | 'no' | ''>('');
  const [breakerHours, setBreakerHours] = useState('');

  const isValid = hours && breaker;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col">
      
      {/* Header */}
      <h1 className="text-2xl font-bold mb-2">
        मशीन की जानकारी दें
      </h1>
      <p className="text-gray-400 mb-6">
        सही रेट पाने के लिए ये जानकारी जरूरी है
      </p>

      {/* Hours Input */}
      <div className="mb-4">
        <label className="block mb-2 text-sm text-gray-300">
          मशीन कितने घंटे चली है?
        </label>
        <input
          type="number"
          placeholder="जैसे: 4500"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
        />
      </div>

      {/* Breaker Used */}
      <div className="mb-4">
        <label className="block mb-2 text-sm text-gray-300">
          क्या breaker चला है?
        </label>

        <div className="flex gap-3">
          <button
            onClick={() => setBreaker('yes')}
            className={`flex-1 p-3 rounded-lg border ${
              breaker === 'yes'
                ? 'bg-yellow-500 text-black border-yellow-500'
                : 'border-gray-600'
            }`}
          >
            हाँ
          </button>

          <button
            onClick={() => setBreaker('no')}
            className={`flex-1 p-3 rounded-lg border ${
              breaker === 'no'
                ? 'bg-yellow-500 text-black border-yellow-500'
                : 'border-gray-600'
            }`}
          >
            नहीं
          </button>
        </div>
      </div>

      {/* Breaker Hours (conditional) */}
      {breaker === 'yes' && (
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-300">
            Breaker कितने घंटे चला?
          </label>
          <input
            type="number"
            placeholder="जैसे: 1200"
            value={breakerHours}
            onChange={(e) => setBreakerHours(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
          />
        </div>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* CTA Button */}
      <button
        disabled={!isValid}
        onClick={() => {
  if (!breaker) return; // ✅ this fixes the TypeScript error

  onNext({
    hours,
    breaker,
    breakerHours: breaker === 'yes' ? breakerHours : undefined,
  });
}}
        className={`w-full p-4 rounded-lg font-semibold transition ${
          isValid
            ? 'bg-green-500 text-white'
            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
        }`}
      >
        WhatsApp पर रेट पूछें
      </button>
    </div>
  );
}