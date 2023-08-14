'use client';

import { Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { EditorBlockWrapper } from '@formaloo/components';
import { blocksInfo } from '@formaloo/constants';
import { BlockEnum } from '@formaloo/enums';
import { AppActionEnum, useAppState } from '@formaloo/providers';
import { type ImageBlockType } from '@formaloo/types/block.type';

export interface EditorImageBlockPropsType {
  data: ImageBlockType;
}

export function EditorImageBlock({ data }: EditorImageBlockPropsType) {
  const { icon: BlockIcon } = blocksInfo[BlockEnum.image];
  const [, appDispatch] = useAppState();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImageBlockType>({
    defaultValues: data,
  });

  function handleFormSubmit(data: ImageBlockType) {
    setIsExpanded(false);
    appDispatch({
      type: AppActionEnum.updateBlock,
      payload: {
        type: BlockEnum.image,
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
        label="Image Url"
        fullWidth
        {...register('imageUrl', {
          required: 'Image Url field is required.',
        })}
        error={Boolean(errors.imageUrl)}
        helperText={errors.imageUrl && errors.imageUrl.message}
      />

      <TextField
        label="Height"
        type="number"
        fullWidth
        {...register('height', {
          required: 'Height field is required.',
          valueAsNumber: true,
          min: { value: 0, message: 'Height must between 0 and 1000' },
          max: { value: 1000, message: 'Height must between 0 and 1000' },
        })}
        error={Boolean(errors.height)}
        helperText={errors.height && errors.height.message}
      />

      <FormControlLabel
        label="Covered"
        control={<Checkbox defaultChecked={data.isCovered} {...register('isCovered')} />}
      />

      <Typography variant="body2">
        Use unsplash random image as example
        <br />
        https://source.unsplash.com/random
      </Typography>
    </EditorBlockWrapper>
  );
}
