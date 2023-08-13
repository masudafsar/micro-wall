import { Typography } from '@mui/material';
import { TextBlockType } from '@formaloo/types/block.type';

export interface TextBlockPropsType {
  data: TextBlockType;
}

export function TextBlock({ data }: TextBlockPropsType) {
  return (
    <>
      {data.title ? <Typography variant="h3">{data.title}</Typography> : undefined}
      <Typography variant="body1">{data.content}</Typography>
    </>
  );
}
