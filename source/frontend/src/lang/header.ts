import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    SIGN_IN: 'ログイン',
    HOME: 'ホーム',
    BOOKINGS: '予約',
    ABOUT: '概要',
    TOS: '利用規約',
    CONTACT: 'お問い合わせ',
    LANGUAGE: '言語',
    SETTINGS: '設定',
    SIGN_OUT: 'ログアウト',
    SUPPLIERS: 'サプライヤー',
    LOCATIONS: '場所',
    PRIVACY_POLICY: 'プライバシーポリシー',
    FAQ: 'よくある質問',
    COOKIE_POLICY: 'クッキーポリシー',
  },
  en: {
    SIGN_IN: 'Sign in',
    HOME: 'Home',
    BOOKINGS: 'Bookings',
    ABOUT: 'About',
    TOS: 'Terms of Service',
    CONTACT: 'Contact',
    LANGUAGE: 'Language',
    SETTINGS: 'Settings',
    SIGN_OUT: 'Sign out',
    SUPPLIERS: 'Suppliers',
    LOCATIONS: 'Locations',
    PRIVACY_POLICY: 'Privacy Policy',
    FAQ: 'FAQ',
    COOKIE_POLICY: 'Cookie Policy',
  },
  zh: {
    SIGN_IN: '登录',
    HOME: '首页',
    BOOKINGS: '预订',
    ABOUT: '关于',
    TOS: '服务条款',
    CONTACT: '联系我们',
    LANGUAGE: '语言',
    SETTINGS: '设置',
    SIGN_OUT: '退出登录',
    SUPPLIERS: '供应商',
    LOCATIONS: '地点',
    PRIVACY_POLICY: '隐私政策',
    FAQ: '常见问题',
    COOKIE_POLICY: 'Cookie政策',
  },
})

langHelper.setLanguage(strings)
export { strings }
