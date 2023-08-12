import { createContext } from 'react';
import { type AppContextType } from './types';
import { appContextDefaultValue } from './constants';

export const AppContext = createContext<AppContextType>(appContextDefaultValue);
