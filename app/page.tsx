'use client';

import { useState } from 'react';
import EntryScreen from '@/components/EntryScreen';
import CompanyScreen from '@/components/CompanyScreen';
import ModelScreen from '@/components/ModelScreen';
import PartScreen from '@/components/PartScreen';
import FinalScreen from '@/components/FinalScreen';
import {useEffect } from 'react';

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


  useEffect(() => {
  const handlePopState = () => {
    setState(prev => {
      if (prev.currentScreen === 'final') {
        return { ...prev, currentScreen: 'part' };
      }
      if (prev.currentScreen === 'part') {
        return { ...prev, currentScreen: 'model' };
      }
      if (prev.currentScreen === 'model') {
        return { ...prev, currentScreen: 'company' };
      }
      if (prev.currentScreen === 'company') {
        return { ...prev, currentScreen: 'entry' };
      }
      return prev;
    });
  };

  window.addEventListener('popstate', handlePopState);
  return () => window.removeEventListener('popstate', handlePopState);
}, []);

const handleStart = () => {
  window.history.pushState({ screen: 'company' }, '');
  setState(prev => ({
    ...prev,
    currentScreen: 'company',
  }));
};

const handleSelectCompany = (companyId: string) => {
  window.history.pushState({ screen: 'model' }, '');
  setState(prev => ({
    ...prev,
    currentScreen: 'model',
    selectedCompany: companyId,
  }));
};

const handleSelectModel = (modelId: string) => {
  window.history.pushState({ screen: 'part' }, '');
  setState(prev => ({
    ...prev,
    currentScreen: 'part',
    selectedModel: modelId,
  }));
};

const handleSelectPart = (partId: string) => {
  window.history.pushState({ screen: 'final' }, '');
  setState(prev => ({
    ...prev,
    currentScreen: 'final',
    selectedPart: partId,
  }));
};

const handleBack = () => {
  window.history.back();
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
