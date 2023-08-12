import { BlockEnum } from '@formaloo/enums';

export const blockTitles: { [key in keyof typeof BlockEnum]: string } = {
  text: 'Text Block',
  image: 'Image Block',
  html: 'HTML Block',
  textInput: 'Text Input Block',
  markupInput: 'Markup Input Block',
  calendarInput: 'Calendar Input Block',
  phoneInput: 'Phone Input Block',
  rangeInput: 'Range Input Block',
  dropdownInput: 'Dropdown Input Block',
  checkboxInput: 'Checkbox Input Block',
  fileInput: 'File Input Block',
};
