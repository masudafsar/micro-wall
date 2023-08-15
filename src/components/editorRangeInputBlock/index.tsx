'use client';

import { Box, TextField } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { EditorBlockWrapper } from '@formaloo/components';
import { blocksInfo } from '@formaloo/constants';
import { BlockEnum } from '@formaloo/enums';
import { AppActionEnum, useAppState } from '@formaloo/providers';
import { type RangeInputBlockType } from '@formaloo/types/block.type';

export interface EditorRangeInputBlockPropsType {
  data: RangeInputBlockType;
}

export function EditorRangeInputBlock({ data }: EditorRangeInputBlockPropsType) {
  const { icon: BlockIcon } = blocksInfo[BlockEnum.rangeInput];
  const [, appDispatch] = useAppState();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RangeInputBlockType>({
    defaultValues: data,
  });

  function handleFormSubmit(data: RangeInputBlockType) {
    setIsExpanded(false);
    appDispatch({
      type: AppActionEnum.updateBlock,
      payload: {
        type: BlockEnum.rangeInput,
        data: data,
      },
    });
  }

  return (
    <EditorBlockWrapper
      id={data.uuid}
      title={data.title}
      icon={BlockIcon}
      isExpanded={isExpanded}
      onExpandedChange={setIsExpanded}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <TextField
        label="Title"
        fullWidth
        {...register('title', {
          required: 'Title field is required.',
        })}
        error={Boolean(errors.title)}
        helperText={errors.title && errors.title.message}
      />

      <TextField
        label="Label"
        fullWidth
        {...register('label', {})}
        error={Boolean(errors.label)}
        helperText={errors.label && errors.label.message}
      />

      <TextField
        label="Help Note"
        fullWidth
        {...register('helpNote', {})}
        error={Boolean(errors.helpNote)}
        helperText={errors.helpNote && errors.helpNote.message}
      />

      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          label="Min Value"
          fullWidth
          type="number"
          {...register('min', {
            required: 'Min Value field is required.',
            max: {
              value: watch('max'),
              message: 'Value must be lower than Max field.',
            },
          })}
          error={Boolean(errors.min)}
          helperText={errors.min && errors.min.message}
        />

        <TextField
          label="Max Value"
          fullWidth
          type="number"
          {...register('max', {
            required: 'Min Value field is required.',
            min: {
              value: watch('min'),
              message: 'Value must be higher than Min field.',
            },
          })}
          error={Boolean(errors.max)}
          helperText={errors.max && errors.max.message}
        />
      </Box>
    </EditorBlockWrapper>
  );
}
