import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    RATING: '評価',
    RATING_1: '(1以上)',
    RATING_2: '(2以上)',
    RATING_3: '(3以上)',
    RATING_4: '(4以上)',
  },
  en: {
    RATING: 'Rating',
    RATING_1: '(1 and up)',
    RATING_2: '(2 and up)',
    RATING_3: '(3 and up)',
    RATING_4: '(4 and up)',
  },
  zh: {
    RATING: '评分',
    RATING_1: '(1星及以上)',
    RATING_2: '(2星及以上)',
    RATING_3: '(3星及以上)',
    RATING_4: '(4星及以上)',
  },
})

langHelper.setLanguage(strings)
export { strings }
