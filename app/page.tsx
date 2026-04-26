'use client';

import { useState } from 'react';
import EntryScreen from '@/components/EntryScreen';
import CompanyScreen from '@/components/CompanyScreen';
import ModelScreen from '@/components/ModelScreen';
import PartScreen from '@/components/PartScreen';
import FinalScreen from '@/components/FinalScreen';

type Screen = 'entry' | 'company' | 'model' | 'part' | 'final';

interface NavigationState {
  currentScreen: Screen;
  selectedCompany: string | null;
  selectedModel: string | null;
  selectedPart: string | null;
}

export default function Home() {
  const [state, setState] = useState<NavigationState>({
    currentScreen: 'entry',
    selectedCompany: null,
    selectedModel: null,
    selectedPart: null,
  });

  const handleStart = () => {
    setState(prev => ({
      ...prev,
      currentScreen: 'company',
    }));
  };

  const handleSelectCompany = (companyId: string) => {
    setState(prev => ({
      ...prev,
      currentScreen: 'model',
      selectedCompany: companyId,
    }));
  };

  const handleSelectModel = (modelId: string) => {
    setState(prev => ({
      ...prev,
      currentScreen: 'part',
      selectedModel: modelId,
    }));
  };

  const handleSelectPart = (partId: string) => {
    setState(prev => ({
      ...prev,
      currentScreen: 'final',
      selectedPart: partId,
    }));
  };

  const handleBack = () => {
    if (state.currentScreen === 'company') {
      setState(prev => ({
        ...prev,
        currentScreen: 'entry',
      }));
    } else if (state.currentScreen === 'model') {
      setState(prev => ({
        ...prev,
        currentScreen: 'company',
        selectedModel: null,
      }));
    } else if (state.currentScreen === 'part') {
      setState(prev => ({
        ...prev,
        currentScreen: 'model',
        selectedPart: null,
      }));
    } else if (state.currentScreen === 'final') {
      setState(prev => ({
        ...prev,
        currentScreen: 'part',
      }));
    }
  };

  return (
    <main className="w-full min-h-screen bg-gray-900">
      {state.currentScreen === 'entry' && (
        <EntryScreen onStart={handleStart} />
      )}
      {state.currentScreen === 'company' && (
        <CompanyScreen
          onSelect={handleSelectCompany}
          onBack={handleBack}
        />
      )}
      {state.currentScreen === 'model' && state.selectedCompany && (
        <ModelScreen
          companyId={state.selectedCompany}
          onSelect={handleSelectModel}
          onBack={handleBack}
        />
      )}
      {state.currentScreen === 'part' && state.selectedCompany && (
        <PartScreen
          companyId={state.selectedCompany}
          modelId={state.selectedModel || ''}
          onSelect={handleSelectPart}
          onBack={handleBack}
        />
      )}
      {state.currentScreen === 'final' && state.selectedCompany && (
        <FinalScreen
          companyId={state.selectedCompany}
          modelId={state.selectedModel || ''}
          partId={state.selectedPart || ''}
          onBack={handleBack}
        />
      )}
    </main>
  );
}
