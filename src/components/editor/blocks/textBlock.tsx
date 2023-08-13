import { TextBlockType } from '@formaloo/types/block.type';
import { Card, CardContent, CardHeader, Paper, Typography } from '@mui/material';

export interface TextBlockPropsType {
  data: TextBlockType;
}

export function TextBlock({ data }: TextBlockPropsType) {
  return (
    <Card>
      <CardHeader title="Text Block" />
      <CardContent>
        <Typography variant="body1">{data.uuid}</Typography>
      </CardContent>
    </Card>
  );
}
