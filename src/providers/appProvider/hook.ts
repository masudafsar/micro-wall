'use client';

import { useContext } from 'react';
import { type AppDispatchType, type AppStateType } from '@formaloo/providers';
import { AppContext } from './contexts';

export function useAppState(): [AppStateType, AppDispatchType] {
  const { state, dispatch } = useContext(AppContext);
  return [state, dispatch];
}
