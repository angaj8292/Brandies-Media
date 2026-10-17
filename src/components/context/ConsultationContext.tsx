'use client';

import React, { createContext, useContext, useState } from 'react';

interface ConsultationContextType {
  isOpen: boolean;
  prefilledService: string;
  prefilledMessage: string;
  openConsultation: (service?: string, message?: string) => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType>({
  isOpen: false,
  prefilledService: '',
  prefilledMessage: '',
  openConsultation: () => {},
  closeConsultation: () => {},
});

export const ConsultationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledMessage, setPrefilledMessage] = useState('');

  const openConsultation = (service = '', message = '') => {
    setPrefilledService(service);
    setPrefilledMessage(message);
    setIsOpen(true);
  };

  const closeConsultation = () => {
    setIsOpen(false);
    setPrefilledService('');
    setPrefilledMessage('');
  };

  return (
    <ConsultationContext.Provider
      value={{
        isOpen,
        prefilledService,
        prefilledMessage,
        openConsultation,
        closeConsultation,
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => useContext(ConsultationContext);
