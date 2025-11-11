import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    PICK_UP_LOCATION: 'Lieu de prise en charge',
    DROP_OFF_LOCATION: 'Lieu de restitution',
  },
  en: {
    PICK_UP_LOCATION: 'Pick-up location',
    DROP_OFF_LOCATION: 'Drop-off location',
  },
  zh: {
    PICK_UP_LOCATION: 'Lugar de recogida',
    DROP_OFF_LOCATION: 'Lugar de devolución',
  },
})

langHelper.setLanguage(strings)
export { strings }
