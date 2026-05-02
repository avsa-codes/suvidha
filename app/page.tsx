'use client';

import { useState } from 'react';
import EntryScreen from '@/components/EntryScreen';
import CompanyScreen from '@/components/CompanyScreen';
import ModelScreen from '@/components/ModelScreen';
import PartScreen from '@/components/PartScreen';
import FinalScreen from '@/components/FinalScreen';
import {useEffect } from 'react';
import MachineDetailsScreen from '@/components/machineDetailsScreen';
import MachineIntentScreen from '@/components/MachineIntentScreen';

type Screen =
  | 'entry'
  | 'company'
  | 'model'
  | 'part'
  | 'machineIntent'   // ✅ ADD THIS
  | 'machineDetails'
  | 'final';

export type FlowType =
  | 'part'
  | 'machine-sell'
  | 'machine-intent'  
  | 'machine-buy'
  | 'mechanic'
  | 'used-part';

interface NavigationState {
  currentScreen: Screen;
  flowType: FlowType; //
  selectedCompany: string | null;
  selectedModel: string | null;
  selectedPart: string | null;

  machineData?: {
    hours: string;
    breaker: 'yes' | 'no';
    breakerHours?: string;
  };
}

export default function Home() {
const [state, setState] = useState<NavigationState>({
  currentScreen: 'entry',
  flowType: 'part', // default
  selectedCompany: null,
  selectedModel: null,
  selectedPart: null,
});


useEffect(() => {
  const handlePopState = () => {
    setState(prev => {
      // FINAL → go back based on flow
      if (prev.currentScreen === 'final') {
        if (
          prev.flowType === 'machine-sell' ||
          prev.flowType === 'machine-buy'
        ) {
          return { ...prev, currentScreen: 'machineDetails' };
        }

        if (prev.flowType === 'mechanic') {
          return { ...prev, currentScreen: 'model' };
        }

        // part + used-part
        return { ...prev, currentScreen: 'part' };
      }

      // MACHINE DETAILS → MODEL
      if (prev.currentScreen === 'machineDetails') {
        return { ...prev, currentScreen: 'model' };
      }

      // PART → MODEL
      if (prev.currentScreen === 'part') {
        return { ...prev, currentScreen: 'model' };
      }

      // MODEL → COMPANY
      if (prev.currentScreen === 'model') {
        return { ...prev, currentScreen: 'company' };
      }

      // COMPANY → ENTRY
      if (prev.currentScreen === 'company') {
        return { ...prev, currentScreen: 'entry' };
      }

      return prev;
    });
  };

  window.addEventListener('popstate', handlePopState);
  return () => window.removeEventListener('popstate', handlePopState);
}, []);


useEffect(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
}, []);


const handleMachineIntent = (type: 'machine-buy' | 'machine-sell') => {
  window.history.pushState({ screen: 'company' }, '');

  setState({
    currentScreen: 'company',
    flowType: type, // ✅ THIS is the key
    selectedCompany: null,
    selectedModel: null,
    selectedPart: null,
    machineData: undefined,
  });
};

const handleStart = (type: FlowType) => {
  // 🚜 MACHINE INTENT (NEW FLOW)
  if (type === 'machine-intent') {
    window.history.pushState({ screen: 'machineIntent' }, '');

    setState({
      currentScreen: 'machineIntent',
      flowType: type,
      selectedCompany: null,
      selectedModel: null,
      selectedPart: null,
      machineData: undefined,
    });

    return; // ⚠️ VERY IMPORTANT
  }

  // 🔁 DEFAULT FLOW (others)
  window.history.pushState({ screen: 'company' }, '');

  setState({
    currentScreen: 'company',
    flowType: type,
    selectedCompany: null,
    selectedModel: null,
    selectedPart: null,
    machineData: undefined,
  });
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

  // 🟡 PART + USED PART
  if (state.flowType === 'part' || state.flowType === 'used-part') {
    window.history.pushState({ screen: 'part' }, '');

    setState(prev => ({
      ...prev,
      currentScreen: 'part',
      selectedModel: modelId,
    }));
  }

  // 🟢 MACHINE SELL → go to form
  else if (state.flowType === 'machine-sell') {
    window.history.pushState({ screen: 'machineDetails' }, '');

    setState(prev => ({
      ...prev,
      currentScreen: 'machineDetails',
      selectedModel: modelId,
    }));
  }

  // 🔵 MACHINE BUY → go directly to final
  else if (state.flowType === 'machine-buy') {
    window.history.pushState({ screen: 'final' }, '');

    setState(prev => ({
      ...prev,
      currentScreen: 'final',
      selectedModel: modelId,
    }));
  }

  // 🟣 MECHANIC → also go directly to final
  else if (state.flowType === 'mechanic') {
    window.history.pushState({ screen: 'final' }, '');

    setState(prev => ({
      ...prev,
      currentScreen: 'final',
      selectedModel: modelId,
    }));
  }
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


const handleMachineDetails = (data: {
  hours: string;
  breaker: 'yes' | 'no';
  breakerHours?: string;
}) => {
  window.history.pushState({ screen: 'final' }, '');

  setState(prev => ({
    ...prev,
    currentScreen: 'final',
    machineData: data,
  }));
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
  flowType={state.flowType}
  machineData={state.machineData}
  onBack={handleBack}
/>
      )}

      

{state.currentScreen === 'machineIntent' && (
  <MachineIntentScreen
    onSelect={handleMachineIntent}
    onBack={handleBack}
  />
)}

{state.currentScreen === 'machineDetails' && state.selectedCompany && (
  <MachineDetailsScreen
    onNext={handleMachineDetails}
  />
)}



    </main>

    
  );
}
