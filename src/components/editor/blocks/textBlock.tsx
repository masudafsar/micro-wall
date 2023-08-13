import { TextBlockType } from '@formaloo/types/block.type';
import { Button, Card, CardContent, CardHeader, IconButton, List, ListItem, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AppActionEnum, useAppState } from '@formaloo/providers';
import { BlockEnum } from '@formaloo/enums';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

export interface TextBlockPropsType {
  data: TextBlockType;
}

export function TextBlock({ data }: TextBlockPropsType) {
  const [, appDispatch] = useAppState();

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
    appDispatch({
      type: AppActionEnum.removeBlock,
      uuid: data.uuid,
    });
  }

  return (
    <Card>
      <CardHeader
        title="Text Block"
        action={
          <IconButton onClick={handleRemoveBlock}>
            <DeleteTwoToneIcon />
          </IconButton>
        }
      />
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <List>
            <ListItem>
              <TextField label="Title" fullWidth {...register('title', {})} />
            </ListItem>

            <ListItem>
              <TextField
                label="Content"
                fullWidth
                {...register('content', { required: 'Content field is required.' })}
                error={Boolean(errors.content)}
                helperText={errors.content && errors.content.message}
              />
            </ListItem>

            <ListItem>
              <Button type="submit">Save</Button>
            </ListItem>
          </List>
        </form>
      </CardContent>
    </Card>
  );
}
