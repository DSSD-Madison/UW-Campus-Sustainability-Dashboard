import React, { createContext, useState } from 'react';

const AppContext = createContext({});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};

