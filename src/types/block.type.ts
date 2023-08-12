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
  | { type: BlockEnum.Text; data: TextBlockType }
  | { type: BlockEnum.Image; data: ImageBlockType }
  | { type: BlockEnum.Html; data: HtmlBlockType }
  | { type: BlockEnum.TextInput; data: TextInputBlockType }
  | { type: BlockEnum.MarkupInput; data: MarkupInputBlockType }
  | { type: BlockEnum.CalendarInput; data: CalendarInputBlockType }
  | { type: BlockEnum.PhoneInput; data: PhoneInputBlockType }
  | { type: BlockEnum.RangeInput; data: RangeInputBlockType }
  | { type: BlockEnum.dropdownInput; data: dropdownInputBlockType }
  | { type: BlockEnum.checkboxInput; data: checkboxInputBlockType }
  | { type: BlockEnum.fileInput; data: fileInputBlockType };
