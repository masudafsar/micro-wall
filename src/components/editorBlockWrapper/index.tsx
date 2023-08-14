'use client';

import { type SvgIconComponent } from '@mui/icons-material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { type FormEvent, type PropsWithChildren } from 'react';
import { AppActionEnum, useAppState } from '@formaloo/providers';

export interface EditorBlockWrapperPropsType {
  id: string;
  title: string;
  icon?: SvgIconComponent;
  onSubmit?: <T>(event: FormEvent<T>) => void;
  isExpanded: boolean;
  onExpandedChange: (isOpen: boolean) => void;
}

export function EditorBlockWrapper({
  id,
  title,
  icon: Icon,
  onSubmit,
  children,
  isExpanded,
  onExpandedChange,
}: PropsWithChildren<EditorBlockWrapperPropsType>) {
  const [, appDispatch] = useAppState();

  function handleRemoveBlock() {
    appDispatch({
      type: AppActionEnum.removeBlock,
      uuid: id,
    });
  }

  return (
    <Accordion
      expanded={isExpanded}
      onChange={(event, expanded) => {
        onExpandedChange(expanded);
      }}
    >
      <AccordionSummary
        id={`accordion-header-${id}`}
        aria-controls={`accordion-content-${id}`}
        expandIcon={<ExpandMoreTwoToneIcon />}
      >
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'nowrap', gap: 1 }}>
          {Icon ? <Icon /> : undefined}

          <Typography sx={{ flex: '1', color: 'text.secondary' }}>{title}</Typography>

          <IconButton onClick={handleRemoveBlock}>
            <DeleteTwoToneIcon />
          </IconButton>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Box component="form" onSubmit={onSubmit}>
          <Stack spacing={1}>
            {children}

            <Box>
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Box>
          </Stack>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
