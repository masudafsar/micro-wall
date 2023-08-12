import { Box, Button } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

export interface EmptyBlockPropsType {}

export function EmptyBlock({}: EmptyBlockPropsType) {
  function handleOnAddNewBlockClick() {}

  return (
    <Box
      sx={{
        height: '10rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '2px',
        borderStyle: 'dashed',
        borderColor: 'grey.400',
        borderRadius: '1rem',
      }}
    >
      <Button color="inherit" variant="text" startIcon={<AddTwoToneIcon />} onClick={handleOnAddNewBlockClick}>
        Add New Block
      </Button>
    </Box>
  );
}
