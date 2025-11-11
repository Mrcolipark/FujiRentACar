import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    TITLE: 'メールマガジン登録',
    SUB_TITLE: '最新情報を受け取るために、メールマガジンに登録してください！',
    SUBSCRIBE: '登録',
    SUCCESS: '登録が完了しました！',
  },
  en: {
    TITLE: 'Subscribe',
    SUB_TITLE: 'Subscribe to our mailing list for the latest updates!',
    SUBSCRIBE: 'Subscribe',
    SUCCESS: 'Subscription successful!',
  },
  zh: {
    TITLE: '订阅',
    SUB_TITLE: '订阅我们的邮件列表以获取最新更新！',
    SUBSCRIBE: '订阅',
    SUCCESS: '订阅成功！',
  },
})

langHelper.setLanguage(strings)
export { strings }
