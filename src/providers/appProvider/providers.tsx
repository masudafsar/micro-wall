import { type PropsWithChildren, useReducer } from 'react';
import { AppContext, appReducer, appStateDefaultValue } from '.';

export interface AppProviderPropsType {}

export function AppProvider({ children }: PropsWithChildren<AppProviderPropsType>) {
  const [state, dispatch] = useReducer(appReducer, appStateDefaultValue, null);

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
