'use client';

import { AppBar as MuiAppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import WebTwoToneIcon from '@mui/icons-material/WebTwoTone';
import PlayArrowTwoToneIcon from '@mui/icons-material/PlayArrowTwoTone';
import StopTwoToneIcon from '@mui/icons-material/StopTwoTone';
import { AppActionEnum, AppModeEnum, useAppState } from '@formaloo/providers/appProvider';

export interface AppBarPropsType {}

export function AppBar({}: AppBarPropsType) {
  function handlePreviewClick() {
    appDispatch({ type: AppActionEnum.GO_TO_GUEST_MODE });
  }

  function handleStopClick() {
    appDispatch({ type: AppActionEnum.GO_TO_EDIT_MODE });
  }

  const [appState, appDispatch] = useAppState();
  return (
    <MuiAppBar sx={{ position: 'fixed', zIndex: 2000 }}>
      <Container>
        <Toolbar sx={{ px: '0 !important' }}>
          <WebTwoToneIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="h1" sx={{ whiteSpace: 'nowrap', flexGrow: 1 }}>
            MicroWall {appState.mode === AppModeEnum.EDIT ? <small>(Edit Mode)</small> : undefined}
          </Typography>
          {appState.mode === AppModeEnum.EDIT ? (
            <Button color="success" variant="contained" endIcon={<PlayArrowTwoToneIcon />} onClick={handlePreviewClick}>
              Preview
            </Button>
          ) : undefined}
          {appState.mode === AppModeEnum.GUEST ? (
            <Button color="error" variant="contained" endIcon={<StopTwoToneIcon />} onClick={handleStopClick}>
              Stop
            </Button>
          ) : undefined}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
