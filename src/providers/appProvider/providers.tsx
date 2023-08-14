'use client';

import { type PropsWithChildren, useReducer } from 'react';
import { appStateDefaultValue } from './constants';
import { AppContext } from './contexts';
import { appReducer } from './reducer';

export interface AppProviderPropsType {}

export function AppProvider({ children }: PropsWithChildren<AppProviderPropsType>) {
  const [state, dispatch] = useReducer(appReducer, appStateDefaultValue);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
