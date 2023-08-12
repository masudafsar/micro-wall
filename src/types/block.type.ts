import { BlockEnum } from '@formaloo/enums';

export interface BaseBlockType {
  uuid: string;
}

export interface TextBlockType extends BaseBlockType {}

export interface ImageBlockType extends BaseBlockType {}

export interface HtmlBlockType extends BaseBlockType {}

export interface TextInputBlockType extends BaseBlockType {}

export interface MarkupInputBlockType extends BaseBlockType {}

export interface CalendarInputBlockType extends BaseBlockType {}

export interface PhoneInputBlockType extends BaseBlockType {}

export interface RangeInputBlockType extends BaseBlockType {}

export interface dropdownInputBlockType extends BaseBlockType {}

export interface checkboxInputBlockType extends BaseBlockType {}

export interface fileInputBlockType extends BaseBlockType {}

export type BlockType =
  | { type: BlockEnum.text; data: TextBlockType }
  | { type: BlockEnum.image; data: ImageBlockType }
  | { type: BlockEnum.html; data: HtmlBlockType }
  | { type: BlockEnum.textInput; data: TextInputBlockType }
  | { type: BlockEnum.markupInput; data: MarkupInputBlockType }
  | { type: BlockEnum.calendarInput; data: CalendarInputBlockType }
  | { type: BlockEnum.phoneInput; data: PhoneInputBlockType }
  | { type: BlockEnum.rangeInput; data: RangeInputBlockType }
  | { type: BlockEnum.dropdownInput; data: dropdownInputBlockType }
  | { type: BlockEnum.checkboxInput; data: checkboxInputBlockType }
  | { type: BlockEnum.fileInput; data: fileInputBlockType };
