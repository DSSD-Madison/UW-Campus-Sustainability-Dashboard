import React, { createContext, useState } from 'react';
import { User, defaultUser } from '@/types/user/user';

interface AppContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  loginLoading: boolean;
  setLoginLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create default context state
const defaultContextState: AppContextProps = {
  user: defaultUser,
  setUser: () => {},
  loginLoading: true,
  setLoginLoading: () => {},
};

// Create the context with the default state
const AppContext = createContext<AppContextProps>(defaultContextState);

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Initialize state with default values
  const [loginLoading, setLoginLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User>(defaultUser);

  const value = {
    user,
    setUser,
    loginLoading,
    setLoginLoading
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};


export { AppContext, AppProvider };