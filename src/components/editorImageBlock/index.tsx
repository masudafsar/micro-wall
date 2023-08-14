'use client';

import { Checkbox, FormControlLabel, TextField } from '@mui/material';
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
    console.log(data);
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
          required: 'Content field is required.',
        })}
        error={Boolean(errors.imageUrl)}
        helperText={errors.imageUrl && errors.imageUrl.message}
      />

      <FormControlLabel control={<Checkbox />} label="Full Width" {...register('isFullWidth')} />
    </EditorBlockWrapper>
  );
}
