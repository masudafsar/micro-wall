import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import ChecklistTwoToneIcon from '@mui/icons-material/ChecklistTwoTone';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import DialpadTwoToneIcon from '@mui/icons-material/DialpadTwoTone';
import FormatSizeTwoToneIcon from '@mui/icons-material/FormatSizeTwoTone';
import ImageTwoToneIcon from '@mui/icons-material/ImageTwoTone';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import NotesTwoToneIcon from '@mui/icons-material/NotesTwoTone';
import NumbersTwoToneIcon from '@mui/icons-material/NumbersTwoTone';
import TitleTwoToneIcon from '@mui/icons-material/TitleTwoTone';
import { BlockEnum } from '@formaloo/enums';
import { BlockInfoType } from '@formaloo/types/block.type';

export const blocksInfo: { [key in keyof typeof BlockEnum]: BlockInfoType } = {
  text: {
    title: 'Text Block',
    icon: NotesTwoToneIcon,
    isUnderDevelop: false,
    type: BlockEnum.text,
  },
  image: {
    title: 'Image Block',
    icon: ImageTwoToneIcon,
    isUnderDevelop: false,
    type: BlockEnum.image,
  },
  html: {
    title: 'HTML Block',
    icon: CodeTwoToneIcon,
    isUnderDevelop: true,
    type: BlockEnum.html,
  },
  textInput: {
    title: 'Text Input Block',
    icon: TitleTwoToneIcon,
    isUnderDevelop: false,
    type: BlockEnum.textInput,
  },
  markupInput: {
    title: 'Markup Input Block',
    icon: FormatSizeTwoToneIcon,
    isUnderDevelop: true,
    type: BlockEnum.markupInput,
  },
  calendarInput: {
    title: 'Calendar Input Block',
    icon: CalendarMonthTwoToneIcon,
    isUnderDevelop: true,
    type: BlockEnum.calendarInput,
  },
  phoneInput: {
    title: 'Phone Input Block',
    icon: DialpadTwoToneIcon,
    isUnderDevelop: false,
    type: BlockEnum.phoneInput,
  },
  rangeInput: {
    title: 'Range Input Block',
    icon: NumbersTwoToneIcon,
    isUnderDevelop: false,
    type: BlockEnum.rangeInput,
  },
  dropdownInput: {
    title: 'Dropdown Input Block',
    icon: ListTwoToneIcon,
    isUnderDevelop: false,
    type: BlockEnum.dropdownInput,
  },
  checkboxInput: {
    title: 'Checkbox Input Block',
    icon: ChecklistTwoToneIcon,
    isUnderDevelop: false,
    type: BlockEnum.checkboxInput,
  },
  fileInput: {
    title: 'File Input Block',
    icon: AttachFileTwoToneIcon,
    isUnderDevelop: true,
    type: BlockEnum.fileInput,
  },
};
