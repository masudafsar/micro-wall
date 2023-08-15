'use client';

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { BlockEnum } from '@formaloo/enums';
import { type checkboxInputBlockType } from '@formaloo/types/block.type';

export interface ViewerCheckboxInputBlockPropsType {
  data: checkboxInputBlockType;
}

export function ViewerCheckboxInputBlock({ data }: ViewerCheckboxInputBlockPropsType) {
  const fieldName = `${BlockEnum.checkboxInput}-${data.uuid}`;
  const { watch, setValue } = useFormContext();

  function handleCheckboxChange(index: number, checked: boolean) {
    let checkedOptions = watch(fieldName);
    if (checkedOptions === undefined) checkedOptions = [];
    if (!data.isMulti) {
      checkedOptions = [data.options[index]];
    } else {
      if (checked) {
        const itemIndex = checkedOptions.findIndex((item) => item === data.options[index]);
        if (itemIndex === -1) checkedOptions.push(data.options[index]);
      } else {
        const itemIndex = checkedOptions.findIndex((item) => item === data.options[index]);
        if (itemIndex !== -1) checkedOptions.splice(itemIndex, 1);
      }
    }
    setValue(fieldName, checkedOptions);
  }

  return (
    <Box>
      <Stack spacing={1}>
        <Typography component="h3" variant="h6">
          {data.title}
        </Typography>

        <Stack spacing={0}>
          <FormControl>
            <FormLabel id={`${fieldName}-group-label`}>{data.label}</FormLabel>
            <RadioGroup aria-labelledby={`${fieldName}-group-label`} name={fieldName}>
              {data.options.map((option, index) => (
                <Box key={index}>
                  <FormControlLabel
                    label={option}
                    control={
                      data.isMulti ? (
                        <Checkbox
                          // checked={watch(fieldName)?.findIndex((item) => item === option) !== -1}
                          value={option}
                          onChange={(event, checked) => {
                            handleCheckboxChange(index, checked);
                          }}
                        />
                      ) : (
                        <Radio
                          value={option}
                          onChange={(event, checked) => {
                            console.log('_log', event, checked);
                            handleCheckboxChange(index, checked);
                          }}
                        />
                      )
                    }
                  />
                </Box>
              ))}
            </RadioGroup>
          </FormControl>
        </Stack>

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
