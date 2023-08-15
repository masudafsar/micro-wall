import {
  EditorImageBlock,
  EditorPhoneInputBlock,
  EditorRangeInputBlock,
  EditorTextBlock,
  EditorTextInputBlock,
  EditorDropdownInputBlock,
} from '@formaloo/components';
import { BlockEnum } from '@formaloo/enums';
import { type BlockType } from '@formaloo/types';
import {
  type dropdownInputBlockType,
  type ImageBlockType,
  type PhoneInputBlockType,
  type RangeInputBlockType,
  type TextBlockType,
  type TextInputBlockType,
} from '@formaloo/types/block.type';

export interface EditorMasterBlockPropsType {
  block: BlockType;
}

export function EditorMasterBlock({ block: { type, data } }: EditorMasterBlockPropsType) {
  switch (type) {
    case BlockEnum.text:
      return <EditorTextBlock data={data as TextBlockType} />;
    case BlockEnum.image:
      return <EditorImageBlock data={data as ImageBlockType} />;
    case BlockEnum.html:
      break;
    case BlockEnum.textInput:
      return <EditorTextInputBlock data={data as TextInputBlockType} />;
    case BlockEnum.markupInput:
      break;
    case BlockEnum.calendarInput:
      break;
    case BlockEnum.phoneInput:
      return <EditorPhoneInputBlock data={data as PhoneInputBlockType} />;
    case BlockEnum.rangeInput:
      return <EditorRangeInputBlock data={data as RangeInputBlockType} />;
    case BlockEnum.dropdownInput:
      return <EditorDropdownInputBlock data={data as dropdownInputBlockType} />;
    case BlockEnum.checkboxInput:
      break;
    case BlockEnum.fileInput:
      break;
  }
  return <></>;
}
