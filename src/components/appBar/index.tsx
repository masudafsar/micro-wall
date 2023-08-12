import { AppBar as MuiAppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import WebTwoToneIcon from '@mui/icons-material/WebTwoTone';
import PlayArrowTwoToneIcon from '@mui/icons-material/PlayArrowTwoTone';

export interface AppBarPropsType {}

export function AppBar({}: AppBarPropsType) {
  return (
    <MuiAppBar sx={{ position: 'fixed', zIndex: 2000 }}>
      <Container>
        <Toolbar sx={{ px: '0 !important' }}>
          <WebTwoToneIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="h1" sx={{ whiteSpace: 'nowrap', flexGrow: 1 }}>
            MicroWall <small>(Edit Mode)</small>
          </Typography>
          <Button color="success" variant="contained" endIcon={<PlayArrowTwoToneIcon />}>
            Preview
          </Button>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
