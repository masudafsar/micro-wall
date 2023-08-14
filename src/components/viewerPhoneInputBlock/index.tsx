import { Box, Stack, TextField, Typography } from '@mui/material';
import { type PhoneInputBlockType } from '@formaloo/types/block.type';

export interface ViewerPhoneInputBlockPropsType {
  data: PhoneInputBlockType;
}

export function ViewerPhoneInputBlock({ data }: ViewerPhoneInputBlockPropsType) {
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
