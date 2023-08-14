import { Box } from '@mui/material';
import { ViewerMasterBlock } from '@formaloo/components';
import { useAppState } from '@formaloo/providers';

export interface ViewerPropsType {}

export function Viewer({}: ViewerPropsType) {
  const [appState] = useAppState();

  return (
    <Box>
      {appState.blocks.map((block) => (
        <ViewerMasterBlock key={block.data.uuid} block={block} />
      ))}
    </Box>
  );
}
