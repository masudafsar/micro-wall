'use client';

import { AppModeEnum, useAppState } from '@formaloo/providers/appProvider';
import { Editor } from '@formaloo/components/editor';
import { Viewer } from '@formaloo/components/viewer';

export default function Home() {
  const [appState, appDispatch] = useAppState();
  return (
    <>
      {appState.mode === AppModeEnum.edit ? <Editor /> : undefined}
      {appState.mode === AppModeEnum.view ? <Viewer /> : undefined}
    </>
  );
}
