import React, { createContext, useState } from 'react';

interface AppContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create default context state
const defaultContextState: AppContextProps = {
  loading: true,
  setLoading: () => {},
};

// Create the context with the default state
const AppContext = createContext<AppContextProps>(defaultContextState);

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Initialize state with default values
  const [loading, setLoading] = useState<boolean>(true);

  const value = {
    loading,
    setLoading,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};


export { AppContext, AppProvider };