import { Typography } from '@mui/material';
import { type TextBlockType } from '@formaloo/types/block.type';

export interface ViewerTextBlockPropsType {
  data: TextBlockType;
}

export function ViewerTextBlock({ data }: ViewerTextBlockPropsType) {
  return (
    <>
      {data.title ? <Typography variant="h3">{data.title}</Typography> : undefined}
      <Typography variant="body1">{data.content}</Typography>
    </>
  );
}
