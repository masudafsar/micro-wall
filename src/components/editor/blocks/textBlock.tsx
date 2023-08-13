import { TextBlockType } from '@formaloo/types/block.type';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { AppActionEnum, useAppState } from '@formaloo/providers';
import { BlockEnum } from '@formaloo/enums';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { useState } from 'react';
import { blocksInfo } from '@formaloo/constants';

export interface TextBlockPropsType {
  data: TextBlockType;
}

export function TextBlock({ data }: TextBlockPropsType) {
  const { icon: BlockIcon } = blocksInfo[BlockEnum.text];
  const [, appDispatch] = useAppState();
  const [isExpandForm, setIsExpandForm] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TextBlockType>({
    defaultValues: data,
  });

  function handleFormSubmit(data: TextBlockType) {
    setIsExpandForm(false);

    appDispatch({
      type: AppActionEnum.updateBlock,
      payload: {
        type: BlockEnum.text,
        data: data,
      },
    });
  }

  function handleRemoveBlock() {
    appDispatch({
      type: AppActionEnum.removeBlock,
      uuid: data.uuid,
    });
  }

  return (
    <Accordion
      expanded={isExpandForm}
      onChange={(event, expanded) => {
        setIsExpandForm(expanded);
      }}
    >
      <AccordionSummary
        id={`accordion-header-${data.uuid}`}
        aria-controls={`accordion-content-${data.uuid}`}
        expandIcon={<ExpandMoreTwoToneIcon />}
      >
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'nowrap', gap: 1 }}>
          <BlockIcon />

          <Typography sx={{ flex: '1', color: 'text.secondary' }}>{data.title}</Typography>

          <IconButton onClick={handleRemoveBlock}>
            <DeleteTwoToneIcon />
          </IconButton>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
          <Stack spacing={1}>
            <TextField label="Title" fullWidth {...register('title', {})} />

            <TextField
              label="Content"
              fullWidth
              {...register('content', { required: 'Content field is required.' })}
              error={Boolean(errors.content)}
              helperText={errors.content && errors.content.message}
            />

            <Box>
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Box>
          </Stack>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
