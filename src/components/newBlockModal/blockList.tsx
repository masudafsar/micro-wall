import { blocksInfo } from '@formaloo/constants';
import { Grid } from '@mui/material';
import { BlockItem } from '@formaloo/components/newBlockModal/blockItem';
import { BlockEnum } from '@formaloo/enums';
import { BlockInfoType } from '@formaloo/types/block.type';

export interface BlockListPropsType {
  onItemClick: (type: BlockEnum) => void;
}

export function BlockList({ onItemClick }: BlockListPropsType) {
  return (
    <Grid container spacing={1}>
      {Object.keys(blocksInfo).map((blockTitle) => {
        const blockType = BlockEnum[blockTitle as keyof typeof BlockEnum] as BlockEnum;
        const info: BlockInfoType = blocksInfo[blockType];
        if (!info) return <></>;

        return <BlockItem key={blockType} type={blockType} info={info} onItemClick={onItemClick} />;
      })}
    </Grid>
  );
}
