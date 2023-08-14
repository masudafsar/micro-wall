import { ViewerTextBlock } from '@formaloo/components';
import { ViewerImageBlock } from '@formaloo/components/viewerImageBlock';
import { ViewerTextInputBlock } from '@formaloo/components/viewerTextInputBlock';
import { BlockEnum } from '@formaloo/enums';
import { type BlockType } from '@formaloo/types';
import { type ImageBlockType, type TextBlockType, type TextInputBlockType } from '@formaloo/types/block.type';

export interface ViewerMasterBlockPropsType {
  block: BlockType;
}

export function ViewerMasterBlock({ block: { type, data } }: ViewerMasterBlockPropsType) {
  switch (type) {
    case BlockEnum.text:
      return <ViewerTextBlock data={data as TextBlockType} />;
    case BlockEnum.image:
      return <ViewerImageBlock data={data as ImageBlockType} />;
    case BlockEnum.html:
      break;
    case BlockEnum.textInput:
      return <ViewerTextInputBlock data={data as TextInputBlockType} />;
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
