import { EditorImageBlock } from '@formaloo/components/editorImageBlock';
import { EditorTextBlock } from '@formaloo/components/editorTextBlock';
import { EditorTextInputBlock } from '@formaloo/components/editorTextInputBlock';
import { BlockEnum } from '@formaloo/enums';
import { type BlockType } from '@formaloo/types';
import { type ImageBlockType, type TextBlockType, type TextInputBlockType } from '@formaloo/types/block.type';

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
