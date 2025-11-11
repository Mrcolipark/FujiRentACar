import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    CAR_SPECS: '車両仕様',
    AIRCON: 'エアコン',
    MORE_THAN_FOOR_DOORS: '4ドア以上',
    MORE_THAN_FIVE_SEATS: '5人乗り以上',
  },
  en: {
    CAR_SPECS: 'Car specs',
    AIRCON: 'Air Conditioning',
    MORE_THAN_FOOR_DOORS: '4+ doors',
    MORE_THAN_FIVE_SEATS: '5+ seats',
  },
  zh: {
    CAR_SPECS: '车辆规格',
    AIRCON: '空调',
    MORE_THAN_FOOR_DOORS: '4门及以上',
    MORE_THAN_FIVE_SEATS: '5座及以上',
  },
})

langHelper.setLanguage(strings)
export { strings }
