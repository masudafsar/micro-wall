'use client';

import { Editor, Viewer } from '@formaloo/components';
import { AppModeEnum, useAppState } from '@formaloo/providers';

export default function Home() {
  const [appState] = useAppState();
  return (
    <>
      {appState.mode === AppModeEnum.edit ? <Editor /> : undefined}
      {appState.mode === AppModeEnum.view ? <Viewer /> : undefined}
    </>
  );
}
