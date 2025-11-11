import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    SELECT_PICK_UP_LOCATION: '受取場所を選択',
    SELECT_DROP_OFF_LOCATION: '返却場所に設定',
  },
  en: {
    SELECT_PICK_UP_LOCATION: 'Select Location',
    SELECT_DROP_OFF_LOCATION: 'Set as Drop-off Location',
  },
  zh: {
    SELECT_PICK_UP_LOCATION: '選擇取車地点',
    SELECT_DROP_OFF_LOCATION: '设為还車地点',
  },
})

langHelper.setLanguage(strings)
export { strings }
