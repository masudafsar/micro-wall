'use client';

import { useContext } from 'react';
import { AppContext } from './contexts';

export function useAppState() {
  const { state, dispatch } = useContext(AppContext);
  return [state, dispatch];
}
