import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    SHOW_FILTERS: 'フィルターを表示',
    HILE_FILTERS: 'フィルターを非表示',
  },
  en: {
    SHOW_FILTERS: 'Show Filters',
    HILE_FILTERS: 'Hide Filters',
  },
  zh: {
    SHOW_FILTERS: '显示筛选器',
    HILE_FILTERS: '隐藏筛选器',
  },
})

langHelper.setLanguage(strings)
export { strings }
