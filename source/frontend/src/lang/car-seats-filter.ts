import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    SEATS: 'シート数',
    TWO: '2人乗り',
    FOUR: '4人乗り',
    FIVE: '5人乗り',
    FIVE_PLUS: '5人乗り以上',
  },
  en: {
    SEATS: 'Seats',
    TWO: '2 seats',
    FOUR: '4 seats',
    FIVE: '5 seats',
    FIVE_PLUS: '5+ seats',
  },
  zh: {
    SEATS: '座位',
    TWO: '2座',
    FOUR: '4座',
    FIVE: '5座',
    FIVE_PLUS: '5座及以上',
  },
})

langHelper.setLanguage(strings)
export { strings }
