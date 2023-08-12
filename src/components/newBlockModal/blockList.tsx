import { blocksInfo } from '@formaloo/constants';
import { Grid } from '@mui/material';
import { BlockItem } from '@formaloo/components/newBlockModal/blockItem';
import { BlockEnum } from '@formaloo/enums';

export interface BlockListPropsType {}

export function BlockList({}: BlockListPropsType) {
  return (
    <Grid container spacing={1}>
      {Object.keys(blocksInfo).map((blockTitle) => {
        const info = blocksInfo[blockTitle];
        const blockType = BlockEnum[blockTitle as keyof typeof BlockEnum] as BlockEnum;
        if (!info) return <></>;

        return <BlockItem key={blockType} type={blockType} info={info} />;
      })}
    </Grid>
  );
}
