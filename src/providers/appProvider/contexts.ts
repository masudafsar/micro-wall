import { createContext } from 'react';
import { appContextDefaultValue, type AppContextType } from '.';

export const AppContext = createContext<AppContextType>(appContextDefaultValue);
