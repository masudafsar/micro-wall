import { TextBlockType } from '@formaloo/types/block.type';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
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

export interface TextBlockPropsType {
  data: TextBlockType;
}

export function TextBlock({ data }: TextBlockPropsType) {
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
    appDispatch({
      type: AppActionEnum.updateBlock,
      payload: {
        type: BlockEnum.text,
        data: data,
      },
    });
  }

  function handleRemoveBlock() {
    setIsExpandForm(false);

    appDispatch({
      type: AppActionEnum.removeBlock,
      uuid: data.uuid,
    });
  }

  function handleExpandForm() {
    setIsExpandForm((prev) => !prev);
  }

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h6">
            {data.title} <small>(Text Block)</small>
          </Typography>
        }
        action={
          <>
            <IconButton onClick={handleRemoveBlock}>
              <DeleteTwoToneIcon />
            </IconButton>
            <IconButton onClick={handleExpandForm}>
              <ExpandMoreTwoToneIcon />
            </IconButton>
          </>
        }
      />
      <CardContent sx={{ display: isExpandForm ? 'block' : 'none' }}>
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
      </CardContent>
    </Card>
  );
}
