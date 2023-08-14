import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { type ImageBlockType } from '@formaloo/types/block.type';

export interface ViewerImageBlockPropsType {
  data: ImageBlockType;
}

export function ViewerImageBlock({ data }: ViewerImageBlockPropsType) {
  return (
    <Box>
      <Typography component="h3" variant="h6">
        {data.title}
      </Typography>
      <Box position="relative" height={`${data.height}px`}>
        <Image layout="fill" objectFit={data.isCovered ? 'cover' : 'contain'} src={data.imageUrl} alt={data.title} />
      </Box>
    </Box>
  );
}
