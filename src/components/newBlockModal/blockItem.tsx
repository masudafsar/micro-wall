import { Button, Grid, Typography } from '@mui/material';
import { BlockEnum } from '@formaloo/enums';
import { BlockInfoType } from '@formaloo/types/block.type';

export interface BlockItemPropsType {
  type: BlockEnum;
  info: BlockInfoType;
  onItemClick?: (type: BlockEnum) => void;
}

export function BlockItem({ type, onItemClick, info: { title, icon: Icon, isUnderDevelop } }: BlockItemPropsType) {
  function handleClick() {
    onItemClick?.(type);
  }

  return (
    <Grid item xs={4}>
      <Button
        color="inherit"
        variant="outlined"
        fullWidth
        disabled={isUnderDevelop}
        onClick={handleClick}
        sx={{
          height: ['100px'],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          borderColor: 'grey.300',
        }}
      >
        {Icon ? <Icon /> : undefined}
        <Typography variant="caption">{title}</Typography>
      </Button>
    </Grid>
  );
}
