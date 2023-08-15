'use client';

import { type SvgIconComponent } from '@mui/icons-material';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
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

  function handleRemoveBlock(event: MouseEvent) {
    event.stopPropagation();
    appDispatch({
      type: AppActionEnum.removeBlock,
      uuid: id,
    });
  }

  function handleMoveUpBlock(event: MouseEvent) {
    event.stopPropagation();
    appDispatch({
      type: AppActionEnum.moveUpBlock,
      uuid: id,
    });
  }

  function handleMoveDownBlock(event: MouseEvent) {
    event.stopPropagation();
    appDispatch({
      type: AppActionEnum.moveDownBlock,
      uuid: id,
    });
  }

  return (
    <Accordion
      expanded={isExpanded}
      onChange={(event, expanded) => {
        onExpandedChange(expanded);
      }}
      sx={{
        '&:first-child': {
          '.move-up': {
            display: 'block',
            height: 0,
            py: 0,
            overflow: 'hidden',
            opacity: 0,
          },
        },
        '&:last-child': {
          '.move-down': {
            display: 'block',
            height: 0,
            py: 0,
            overflow: 'hidden',
            opacity: 0,
          },
        },
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

          {!isExpanded ? (
            <>
              <IconButton className="move-up" onClick={handleMoveUpBlock}>
                <ArrowDropUpTwoToneIcon />
              </IconButton>

              <IconButton className="move-down" onClick={handleMoveDownBlock}>
                <ArrowDropDownTwoToneIcon />
              </IconButton>
            </>
          ) : undefined}

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
