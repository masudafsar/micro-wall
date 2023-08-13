'use client';

import { useContext } from 'react';
import { AppContext } from './contexts';
import { type AppDispatchType, type AppStateType } from '@formaloo/providers';

export function useAppState(): [AppStateType, AppDispatchType] {
  const { state, dispatch } = useContext(AppContext);
  return [state, dispatch];
}
