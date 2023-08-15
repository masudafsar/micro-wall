'use client';

import { Box, FormLabel, Slider, Stack, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { BlockEnum } from '@formaloo/enums';
import { type RangeInputBlockType } from '@formaloo/types/block.type';

export interface ViewerRangeInputBlockPropsType {
  data: RangeInputBlockType;
}

export function ViewerRangeInputBlock({ data }: ViewerRangeInputBlockPropsType) {
  const fieldName = `${BlockEnum.rangeInput}-${data.uuid}`;
  const { control } = useFormContext();

  return (
    <Box>
      <Stack spacing={1}>
        <Typography component="h3" variant="h6">
          {data.title}
        </Typography>

        <Controller
          control={control}
          name={fieldName}
          defaultValue={
            data.isRange ? [Number(data.min) || 0, Number(data.max) || 100] : (Number(data.min) + Number(data.max)) / 2
          }
          render={({ field }) => (
            <FormLabel>
              {data.label}
              <Slider
                {...field}
                min={Number(data.min) || 0}
                max={Number(data.max) || 100}
                valueLabelDisplay="auto"
                onChange={(_, value) => {
                  field.onChange(value);
                }}
              />
            </FormLabel>
          )}
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
