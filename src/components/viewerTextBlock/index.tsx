import { Box, Typography } from '@mui/material';
import { type TextBlockType } from '@formaloo/types/block.type';

export interface ViewerTextBlockPropsType {
  data: TextBlockType;
}

export function ViewerTextBlock({ data }: ViewerTextBlockPropsType) {
  return (
    <Box>
      <Typography component="h3" variant="h6">
        {data.title}
      </Typography>
      <Typography component="p" variant="body1">
        {data.content}
      </Typography>
    </Box>
  );
}
