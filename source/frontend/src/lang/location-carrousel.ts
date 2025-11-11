import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    SELECT_LOCATION: '場所を選択',
    AVALIABLE_LOCATION: '利用可能な場所',
    AVALIABLE_LOCATIONS: '利用可能な場所',
  },
  en: {
    SELECT_LOCATION: 'Select Location',
    AVALIABLE_LOCATION: 'available location',
    AVALIABLE_LOCATIONS: 'available locations',
  },
  zh: {
    SELECT_LOCATION: '選擇地点',
    AVALIABLE_LOCATION: '可用地点',
    AVALIABLE_LOCATIONS: '可用地点',
  },
})

langHelper.setLanguage(strings)
export { strings }
