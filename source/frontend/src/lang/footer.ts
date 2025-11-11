import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'
import env from '@/config/env.config'

const COPYRIGHT_PART1 = `Copyright © ${new Date().getFullYear()} ${env.WEBSITE_NAME}`

const strings = new LocalizedStrings({
  ja: {
    COPYRIGHT_PART1,
    COPYRIGHT_PART2: '. 全著作権所有。',
    BRAND_DESCRIPTION: '最高級のラグジュアリーカーレンタルサービスで、お客様に忘れられない体験をお届けします。',
    ADDRESS: '東京都港区六本木1-1-1',
    SERVICES_TITLE: 'サービス',
    FOLLOW_US: 'フォローする',
    SEARCH_VEHICLES: '車両を検索',
    CORPORATE: '企業情報',
    ABOUT: '私たちについて',
    TOS: '利用規約',
    RENT: 'レンタカー',
    SUPPLIERS: 'サプライヤー',
    LOCATIONS: '所在地',
    SUPPORT: 'サポート',
    CONTACT: 'お問い合わせ',
    SECURE_PAYMENT: `${env.WEBSITE_NAME}による100%安全な支払い`,
    PRIVACY_POLICY: 'プライバシーポリシー',
    FAQ: 'よくある質問',
    COOKIE_POLICY: 'クッキーポリシー',
  },
  en: {
    COPYRIGHT_PART1,
    COPYRIGHT_PART2: '. All rights reserved.',
    BRAND_DESCRIPTION: 'Experience luxury car rentals at their finest. We deliver unforgettable journeys with our premium fleet.',
    ADDRESS: '1-1-1 Roppongi, Minato-ku, Tokyo',
    SERVICES_TITLE: 'Services',
    FOLLOW_US: 'Follow Us',
    SEARCH_VEHICLES: 'Search Vehicles',
    CORPORATE: 'Corporate',
    ABOUT: 'About Us',
    TOS: 'Terms of Service',
    RENT: 'Rent a Car',
    SUPPLIERS: 'Suppliers',
    LOCATIONS: 'Locations',
    SUPPORT: 'Support',
    CONTACT: 'Contact',
    SECURE_PAYMENT: `100% secure payment with ${env.WEBSITE_NAME}`,
    PRIVACY_POLICY: 'Privacy Policy',
    FAQ: 'FAQ',
    COOKIE_POLICY: 'Cookie Policy',
  },
  zh: {
    COPYRIGHT_PART1,
    COPYRIGHT_PART2: '. 版权所有。',
    BRAND_DESCRIPTION: '体验最顶级的豪华租车服务。我们的高端车队为您带来难忘的旅程。',
    ADDRESS: '东京都港区六本木1-1-1',
    SERVICES_TITLE: '服务',
    FOLLOW_US: '关注我们',
    SEARCH_VEHICLES: '搜索车辆',
    CORPORATE: '企业',
    ABOUT: '关于我们',
    TOS: '服务条款',
    RENT: '租车',
    SUPPLIERS: '供应商',
    LOCATIONS: '地点',
    SUPPORT: '支持',
    CONTACT: '联系我们',
    SECURE_PAYMENT: `${env.WEBSITE_NAME}提供100%安全支付`,
    PRIVACY_POLICY: '隐私政策',
    FAQ: '常见问题',
    COOKIE_POLICY: 'Cookie政策',
  },
})

langHelper.setLanguage(strings)
export { strings }
