import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    UNAUTHORIZED: 'Accès non autorisé',
  },
  en: {
    UNAUTHORIZED: 'Unauthorized access',
  },
  zh: {
    UNAUTHORIZED: 'Acceso no autorizado',
  },
})

langHelper.setLanguage(strings)
export { strings }
