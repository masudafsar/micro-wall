import { Box, Button, Divider, Paper, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { ViewerMasterBlock } from '@formaloo/components';
import { SubmittedDataModal } from '@formaloo/components/submittedDataModal';
import { AppActionEnum, useAppState } from '@formaloo/providers';

export interface ViewerPropsType {}

export function Viewer({}: ViewerPropsType) {
  const [appState, appDispatch] = useAppState();

  function handleDismissNewBlockModal() {
    appDispatch({ type: AppActionEnum.closeSubmittedDataModal });
  }

  const methods = useForm();

  function handleSubmit(data: unknown) {
    appDispatch({ type: AppActionEnum.openSubmittedDataModal, payload: data });
    console.log('form_log', data);
  }

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(handleSubmit)}>
        <Paper sx={{ p: 3 }}>
          <Stack spacing={2} divider={<Divider />}>
            {appState.blocks.map((block) => (
              <ViewerMasterBlock key={block.data.uuid} block={block} />
            ))}
            <Box>
              <Button type="submit" color="primary" variant="contained">
                Submit
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Box>

      <SubmittedDataModal open={appState.isOpenSubmittedDataModal} onClose={handleDismissNewBlockModal} />
    </FormProvider>
  );
}
