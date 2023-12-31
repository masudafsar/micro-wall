import {
  ViewerTextBlock,
  ViewerImageBlock,
  ViewerPhoneInputBlock,
  ViewerRangeInputBlock,
  ViewerCheckboxInputBlock,
  ViewerTextInputBlock,
  ViewerDropdownInputBlock,
} from '@formaloo/components';
import { BlockEnum } from '@formaloo/enums';
import { type BlockType } from '@formaloo/types';
import {
  checkboxInputBlockType,
  type dropdownInputBlockType,
  type ImageBlockType,
  type PhoneInputBlockType,
  type RangeInputBlockType,
  type TextBlockType,
  type TextInputBlockType,
} from '@formaloo/types/block.type';

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
      return <ViewerPhoneInputBlock data={data as PhoneInputBlockType} />;
    case BlockEnum.rangeInput:
      return <ViewerRangeInputBlock data={data as RangeInputBlockType} />;
    case BlockEnum.dropdownInput:
      return <ViewerDropdownInputBlock data={data as dropdownInputBlockType} />;
    case BlockEnum.checkboxInput:
      return <ViewerCheckboxInputBlock data={data as checkboxInputBlockType} />;
    case BlockEnum.fileInput:
      break;
  }
  return <></>;
}
