import { createContext } from 'react';
import { type AppContextType } from '.';
import { appContextDefaultValue } from './constants';

export const AppContext = createContext<AppContextType>(appContextDefaultValue);
