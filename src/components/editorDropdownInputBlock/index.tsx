'use client';

import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { EditorBlockWrapper } from '@formaloo/components';
import { blocksInfo } from '@formaloo/constants';
import { BlockEnum } from '@formaloo/enums';
import { AppActionEnum, useAppState } from '@formaloo/providers';
import { type dropdownInputBlockType } from '@formaloo/types/block.type';

export interface EditorDropdownInputBlockPropsType {
  data: dropdownInputBlockType;
}

export function EditorDropdownInputBlock({ data }: EditorDropdownInputBlockPropsType) {
  const { icon: BlockIcon } = blocksInfo[BlockEnum.dropdownInput];
  const [, appDispatch] = useAppState();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isOptionsExpanded, setIsOptionsExpanded] = useState<boolean>(false);

  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<dropdownInputBlockType>({
    defaultValues: data,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'options',
  });

  function handleFormSubmit(data: dropdownInputBlockType) {
    setIsExpanded(false);
    appDispatch({
      type: AppActionEnum.updateBlock,
      payload: {
        type: BlockEnum.dropdownInput,
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

      <Accordion
        expanded={isOptionsExpanded}
        onChange={(event, expanded) => {
          setIsOptionsExpanded(expanded);
        }}
      >
        <AccordionSummary
          id={`options-accordion-header-${data.uuid}`}
          aria-controls={`options-accordion-content-${data.uuid}`}
          expandIcon={<ExpandMoreTwoToneIcon />}
        >
          <Typography sx={{ color: errors.options?.length ? 'error.main' : 'text.secondary' }}>
            Options{' '}
            <small>
              {watch('options')?.length === 0
                ? '(empty)'
                : `(${watch('options')?.length} ${watch('options')?.length > 1 ? 'items' : 'item'})`}
            </small>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            {fields.map((field, index) => {
              return (
                <Box key={field.id} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TextField
                    label="Option Title"
                    fullWidth
                    {...register(`options.${index}.value`, {
                      required: 'Option Title field is required.',
                    })}
                    error={Boolean(errors.options?.[index]?.value)}
                    helperText={errors.options?.[index]?.value && errors.options?.[index]?.value?.message}
                  />
                  <IconButton
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    <DeleteTwoToneIcon />
                  </IconButton>
                </Box>
              );
            })}

            <Button
              variant="text"
              color="primary"
              onClick={() => {
                append({ value: '' });
              }}
            >
              Add Option
            </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <FormControlLabel
        label="Required"
        control={<Checkbox defaultChecked={watch('isRequired')} {...register('isRequired')} />}
      />
    </EditorBlockWrapper>
  );
}
