'use client';

import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { EditorBlockWrapper } from '@formaloo/components';
import { blocksInfo } from '@formaloo/constants';
import { BlockEnum } from '@formaloo/enums';
import { AppActionEnum, useAppState } from '@formaloo/providers';
import { type PhoneInputBlockType } from '@formaloo/types/block.type';

export interface EditorPhoneInputBlockPropsType {
  data: PhoneInputBlockType;
}

export function EditorPhoneInputBlock({ data }: EditorPhoneInputBlockPropsType) {
  const { icon: BlockIcon } = blocksInfo[BlockEnum.textInput];
  const [, appDispatch] = useAppState();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneInputBlockType>({
    defaultValues: data,
  });

  function handleFormSubmit(data: PhoneInputBlockType) {
    setIsExpanded(false);
    appDispatch({
      type: AppActionEnum.updateBlock,
      payload: {
        type: BlockEnum.phoneInput,
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

      <FormControlLabel control={<Checkbox />} label="Required" {...register('isRequired')} />

      <FormControlLabel control={<Checkbox />} label="With Country Code" {...register('withCountryCode')} />
    </EditorBlockWrapper>
  );
}
