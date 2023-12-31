import { Box, Stack, Typography } from '@mui/material';
import { type TextBlockType } from '@formaloo/types/block.type';

export interface ViewerTextBlockPropsType {
  data: TextBlockType;
}

export function ViewerTextBlock({ data }: ViewerTextBlockPropsType) {
  return (
    <Box>
      <Stack spacing={1}>
        <Typography component="h3" variant="h6">
          {data.title}
        </Typography>

        <Typography component="p" variant="body1">
          {data.content?.split('\n').map((line, index) => (
            <>
              {index !== 0 ? <br /> : undefined}
              <span key={index}>{line}</span>
            </>
          ))}
        </Typography>
      </Stack>
    </Box>
  );
}
