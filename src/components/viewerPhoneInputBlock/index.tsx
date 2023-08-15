'use client';

import { Box, Stack, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { phoneRegexWithCountryCode, phoneRegexWithoutCountryCode } from '@formaloo/constants/regex';
import { BlockEnum } from '@formaloo/enums';
import { type PhoneInputBlockType } from '@formaloo/types/block.type';

export interface ViewerPhoneInputBlockPropsType {
  data: PhoneInputBlockType;
}

export function ViewerPhoneInputBlock({ data }: ViewerPhoneInputBlockPropsType) {
  const fieldName = `${BlockEnum.phoneInput}-${data.uuid}`;
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
            ...(data.withCountryCode
              ? {
                  pattern: {
                    value: phoneRegexWithCountryCode,
                    message: `Enter ${data.label} in valid format with country code.`,
                  },
                }
              : {
                  pattern: {
                    value: phoneRegexWithoutCountryCode,
                    message: `Enter ${data.label} in valid format without country code.`,
                  },
                }),
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
