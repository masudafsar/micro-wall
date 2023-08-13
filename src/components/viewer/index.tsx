import { useAppState } from '@formaloo/providers';
import { MasterBlock } from './masterBlock';
import { Box } from '@mui/material';

export interface ViewerPropsType {}

export function Viewer({}: ViewerPropsType) {
  const [appState] = useAppState();

  return (
    <Box>
      {appState.blocks.map((block) => (
        <MasterBlock key={block.data.uuid} block={block} />
      ))}
    </Box>
  );
}
