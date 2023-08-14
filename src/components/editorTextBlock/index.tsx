'use client';

import { TextField } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { EditorBlockWrapper } from '@formaloo/components';
import { blocksInfo } from '@formaloo/constants';
import { BlockEnum } from '@formaloo/enums';
import { AppActionEnum, useAppState } from '@formaloo/providers';
import { type TextBlockType } from '@formaloo/types/block.type';

export interface EditorTextBlockPropsType {
  data: TextBlockType;
}

export function EditorTextBlock({ data }: EditorTextBlockPropsType) {
  const { icon: BlockIcon } = blocksInfo[BlockEnum.text];
  const [, appDispatch] = useAppState();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TextBlockType>({
    defaultValues: data,
  });

  function handleFormSubmit(data: TextBlockType) {
    setIsExpanded(false);
    appDispatch({
      type: AppActionEnum.updateBlock,
      payload: {
        type: BlockEnum.text,
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
        label="Content"
        fullWidth
        {...register('content', {
          required: 'Content field is required.',
        })}
        error={Boolean(errors.content)}
        helperText={errors.content && errors.content.message}
      />
    </EditorBlockWrapper>
  );
}
