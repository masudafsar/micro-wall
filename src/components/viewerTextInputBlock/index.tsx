'use client';

import { Box, Stack, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { BlockEnum } from '@formaloo/enums';
import { type TextInputBlockType } from '@formaloo/types/block.type';

export interface ViewerTextInputBlockPropsType {
  data: TextInputBlockType;
}

export function ViewerTextInputBlock({ data }: ViewerTextInputBlockPropsType) {
  const fieldName = `${BlockEnum.textInput}-${data.uuid}`;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box>
      <Stack spacing={1}>
        <Typography component="h3" variant="h6">
          {data.title}
        </Typography>

        <TextField
          label={data.label}
          {...register(fieldName, {
            ...(data.isRequired
              ? {
                  required: `${data.label} field is required.`,
                }
              : {}),
          })}
          error={Boolean(errors[fieldName])}
          helperText={`${errors[fieldName]?.message || ''}`}
        />

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
