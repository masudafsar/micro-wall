'use client';

import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { BlockEnum } from '@formaloo/enums';
import { type dropdownInputBlockType } from '@formaloo/types/block.type';

export interface ViewerDropdownInputBlockPropsType {
  data: dropdownInputBlockType;
}

export function ViewerDropdownInputBlock({ data }: ViewerDropdownInputBlockPropsType) {
  const fieldName = `${BlockEnum.dropdownInput}-${data.uuid}`;
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

        <FormControl fullWidth>
          <InputLabel id={`${fieldName}-select-label`}>{data.label}</InputLabel>
          <Select
            labelId={`${fieldName}-select-label`}
            id={`${fieldName}-select`}
            label={data.label}
            {...register(fieldName, {
              ...(data.isRequired
                ? {
                    required: `${data.label} field is required.`,
                  }
                : {}),
            })}
            error={Boolean(errors[fieldName])}
          >
            {data.options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
          {errors[fieldName]?.message ? (
            <FormHelperText sx={{ color: 'error.main' }}>{`${errors[fieldName]?.message || ''}`}</FormHelperText>
          ) : undefined}
        </FormControl>

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
