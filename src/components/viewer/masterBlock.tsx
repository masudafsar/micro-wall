import { BlockEnum } from '@formaloo/enums';
import { type BlockType } from '@formaloo/types';
import { type TextBlockType } from '@formaloo/types/block.type';
import { TextBlock } from './blocks';

export interface MasterBlockPropsType {
  block: BlockType;
}

export function MasterBlock({ block: { type, data } }: MasterBlockPropsType) {
  switch (type) {
    case BlockEnum.text:
      return <TextBlock data={data as TextBlockType} />;
      break;
    case BlockEnum.image:
      break;
    case BlockEnum.html:
      break;
    case BlockEnum.textInput:
      break;
    case BlockEnum.markupInput:
      break;
    case BlockEnum.calendarInput:
      break;
    case BlockEnum.phoneInput:
      break;
    case BlockEnum.rangeInput:
      break;
    case BlockEnum.dropdownInput:
      break;
    case BlockEnum.checkboxInput:
      break;
    case BlockEnum.fileInput:
      break;
  }
  return <></>;
}
