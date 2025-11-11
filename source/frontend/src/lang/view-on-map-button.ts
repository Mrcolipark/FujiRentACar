import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    VIEW_ON_MAP: '地図で見る',
  },
  en: {
    VIEW_ON_MAP: 'View on map',
  },
  zh: {
    VIEW_ON_MAP: '在地图上查看',
  },
})

langHelper.setLanguage(strings)
export { strings }
