import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    NO_MATCH: 'ページが見つかりません',
  },
  en: {
    NO_MATCH: 'Nothing to see here!',
  },
  zh: {
    NO_MATCH: '未找到页面',
  },
})

langHelper.setLanguage(strings)
export { strings }
