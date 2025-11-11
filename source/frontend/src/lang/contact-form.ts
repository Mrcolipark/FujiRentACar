import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    CONTACT_HEADING: 'お問い合わせ',
    SUBJECT: '件名',
    MESSAGE: 'メッセージ',
    SEND: '送信',
    MESSAGE_SENT: 'メッセージが送信されました',
  },
  en: {
    CONTACT_HEADING: 'Contact',
    SUBJECT: 'Subject',
    MESSAGE: 'Message',
    SEND: 'Send',
    MESSAGE_SENT: 'Message sent'
  },
  zh: {
    CONTACT_HEADING: '联系我们',
    SUBJECT: '主题',
    MESSAGE: '消息',
    SEND: '发送',
    MESSAGE_SENT: '消息已发送',
  },
})

langHelper.setLanguage(strings)
export { strings }
