import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    RANGE: 'クラス',
    MINI: 'ミニ',
    MIDI: 'ミディ',
    MAXI: 'マキシ',
    SCOOTER: 'スクーター',
  },
  en: {
    RANGE: 'Range',
    MINI: 'Mini',
    MIDI: 'Midi',
    MAXI: 'Maxi',
    SCOOTER: 'Scooter',
  },
  zh: {
    RANGE: '级别',
    MINI: '迷你',
    MIDI: '中型',
    MAXI: '大型',
    SCOOTER: '踏板车',
  },
})

langHelper.setLanguage(strings)
export { strings }
