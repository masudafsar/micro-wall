import { Box, Stack, TextField, Typography } from '@mui/material';
import { type TextInputBlockType } from '@formaloo/types/block.type';

export interface ViewerTextInputBlockPropsType {
  data: TextInputBlockType;
}

export function ViewerTextInputBlock({ data }: ViewerTextInputBlockPropsType) {
  return (
    <Box>
      <Stack spacing={1}>
        <Typography component="h3" variant="h6">
          {data.title}
        </Typography>

        <TextField label={data.label} name={`text-input-${data.uuid}`} required={data.isRequired} />

        {data.helpNote ? (
          <Typography component="p" variant="body2">
            <Typography component="span" variant="body2" sx={{ color: 'error.main' }}>
              *
            </Typography>{' '}
            {data.helpNote}
          </Typography>
        ) : undefined}
      </Stack>
    </Box>
  );
}
