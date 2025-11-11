import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    SECTION_TITLE: 'レンタカー営業所マップ',
    SECTION_SUBTITLE: '2つの便利な拠点でお客様をお待ちしております',
    MAIN_OFFICE: '本店',
    NARITA_OFFICE: '成田空港店',
    ADDRESS: '住所',
    PHONE: '電話',
    FAX: 'FAX',
    EMAIL: 'メール',
    OPEN_IN_MAPS: 'Google Mapsで開く',
    COMPANY_NAME: '東京国際株式会社',
    BRAND_NAME: 'FUJI RENT A CAR',
  },
  en: {
    SECTION_TITLE: 'Our Rental Locations',
    SECTION_SUBTITLE: 'Two convenient locations to serve you better',
    MAIN_OFFICE: 'Main Office',
    NARITA_OFFICE: 'Narita Airport',
    ADDRESS: 'Address',
    PHONE: 'Phone',
    FAX: 'Fax',
    EMAIL: 'Email',
    OPEN_IN_MAPS: 'Open in Google Maps',
    COMPANY_NAME: 'Tokyo International Co., Ltd.',
    BRAND_NAME: 'FUJI RENT A CAR',
  },
  zh: {
    SECTION_TITLE: '租車營業所地圖',
    SECTION_SUBTITLE: '兩個便利據點為您服務',
    MAIN_OFFICE: '總店',
    NARITA_OFFICE: '成田機場店',
    ADDRESS: '地址',
    PHONE: '電話',
    FAX: '傳真',
    EMAIL: '電子郵件',
    OPEN_IN_MAPS: '在Google地圖中打開',
    COMPANY_NAME: '東京國際株式會社',
    BRAND_NAME: 'FUJI RENT A CAR',
  },
})

langHelper.setLanguage(strings)
export { strings }
