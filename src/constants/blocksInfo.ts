import { BlockEnum } from '@formaloo/enums';
import { BlockInfoType } from '@formaloo/types/block.type';

import NotesTwoToneIcon from '@mui/icons-material/NotesTwoTone';
import ImageTwoToneIcon from '@mui/icons-material/ImageTwoTone';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import TitleTwoToneIcon from '@mui/icons-material/TitleTwoTone';
import FormatSizeTwoToneIcon from '@mui/icons-material/FormatSizeTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import DialpadTwoToneIcon from '@mui/icons-material/DialpadTwoTone';
import NumbersTwoToneIcon from '@mui/icons-material/NumbersTwoTone';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import ChecklistTwoToneIcon from '@mui/icons-material/ChecklistTwoTone';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';

export const blocksInfo: { [key in keyof typeof BlockEnum]: BlockInfoType } = {
  text: {
    title: 'Text Block',
    icon: NotesTwoToneIcon,
    isUnderDevelop: false,
  },
  image: {
    title: 'Image Block',
    icon: ImageTwoToneIcon,
    isUnderDevelop: true,
  },
  html: {
    title: 'HTML Block',
    icon: CodeTwoToneIcon,
    isUnderDevelop: true,
  },
  textInput: {
    title: 'Text Input Block',
    icon: TitleTwoToneIcon,
    isUnderDevelop: true,
  },
  markupInput: {
    title: 'Markup Input Block',
    icon: FormatSizeTwoToneIcon,
    isUnderDevelop: true,
  },
  calendarInput: {
    title: 'Calendar Input Block',
    icon: CalendarMonthTwoToneIcon,
    isUnderDevelop: true,
  },
  phoneInput: {
    title: 'Phone Input Block',
    icon: DialpadTwoToneIcon,
    isUnderDevelop: true,
  },
  rangeInput: {
    title: 'Range Input Block',
    icon: NumbersTwoToneIcon,
    isUnderDevelop: true,
  },
  dropdownInput: {
    title: 'Dropdown Input Block',
    icon: ListTwoToneIcon,
    isUnderDevelop: true,
  },
  checkboxInput: {
    title: 'Checkbox Input Block',
    icon: ChecklistTwoToneIcon,
    isUnderDevelop: true,
  },
  fileInput: {
    title: 'File Input Block',
    icon: AttachFileTwoToneIcon,
    isUnderDevelop: true,
  },
};
