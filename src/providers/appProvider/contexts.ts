import { createContext } from 'react';
import { appContextDefaultValue } from './constants';
import { type AppContextType } from '.';

export const AppContext = createContext<AppContextType>(appContextDefaultValue);
