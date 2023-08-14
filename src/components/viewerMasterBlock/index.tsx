import { ViewerTextBlock } from '@formaloo/components';
import { BlockEnum } from '@formaloo/enums';
import { type BlockType } from '@formaloo/types';
import { type TextBlockType } from '@formaloo/types/block.type';

export interface ViewerMasterBlockPropsType {
  block: BlockType;
}

export function ViewerMasterBlock({ block: { type, data } }: ViewerMasterBlockPropsType) {
  switch (type) {
    case BlockEnum.text:
      return <ViewerTextBlock data={data as TextBlockType} />;
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
