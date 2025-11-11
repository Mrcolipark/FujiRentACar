import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    TOTAL: 'Total :',
  },
  en: {
    TOTAL: 'Total:',
  },
  zh: {
    TOTAL: 'Total:',
  },
})

langHelper.setLanguage(strings)
export { strings }
