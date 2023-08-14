import { Box, Divider, Paper, Stack } from '@mui/material';
import { ViewerMasterBlock } from '@formaloo/components';
import { useAppState } from '@formaloo/providers';

export interface ViewerPropsType {}

export function Viewer({}: ViewerPropsType) {
  const [appState] = useAppState();

  return (
    <Box>
      <Paper sx={{ p: 3 }}>
        <Stack spacing={2} divider={<Divider />}>
          {appState.blocks.map((block) => (
            <ViewerMasterBlock key={block.data.uuid} block={block} />
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}
