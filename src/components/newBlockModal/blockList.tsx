import { Grid } from '@mui/material';
import { blocksInfo } from '@formaloo/constants';
import { BlockEnum } from '@formaloo/enums';
import { type BlockInfoType } from '@formaloo/types/block.type';
import { BlockItem } from '.';

export interface BlockListPropsType {
  onItemClick: (type: BlockEnum) => void;
}

export function BlockList({ onItemClick }: BlockListPropsType) {
  return (
    <Grid container spacing={1}>
      {Object.keys(blocksInfo)
        .map((blockTitle) => {
          const blockType = BlockEnum[blockTitle as keyof typeof BlockEnum] as BlockEnum;
          const info: BlockInfoType = blocksInfo[blockType];
          return info;
        })
        .map((info) => (
          <BlockItem key={info.type} info={info} onItemClick={onItemClick} />
        ))}
    </Grid>
  );
}
