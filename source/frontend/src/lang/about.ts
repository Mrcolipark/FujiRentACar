import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'
import env from '@/config/env.config'

const strings = new LocalizedStrings({
  ja: {
    // Hero Section
    HERO_TITLE: `${env.WEBSITE_NAME}へようこそ`,
    HERO_SUBTITLE: '信頼と快適さで、あなたの旅をサポートします',
    HERO_DESCRIPTION: '日本全国で安心・安全なレンタカーサービスを提供',

    // Company Info Section
    COMPANY_TITLE: '私たちについて',
    COMPANY_SUBTITLE: 'お客様の信頼できるレンタカーパートナー',
    COMPANY_CONTENT: `${env.WEBSITE_NAME}では、すべての旅が特別であることを理解しています。私たちは、あらゆる旅行ニーズに対応する多様な車両を提供することに取り組んでいます。都市探索、ビジネス出張、アドベンチャーなど、信頼性の高いレンタカーサービスにより、スムーズに旅をスタートできます。私たちの使命は、お客様に快適でストレスフリーな体験を提供することです。競争力のある料金、よく整備された多様な車両、そしてサポートチームが、お客様の信頼できるパートナーとなることを目指しています。`,

    // Company Overview Section
    OVERVIEW_TITLE: '会社概要',
    OVERVIEW_SUBTITLE: '企業情報',
    COMPANY_NAME_LABEL: '会社名',
    COMPANY_NAME_VALUE: 'FUJI RENT A CAR株式会社',
    ESTABLISHED_LABEL: '設立',
    ESTABLISHED_VALUE: '令和7年5月21日',
    CAPITAL_LABEL: '資本金',
    CAPITAL_VALUE: '500万円',
    HEADQUARTERS_LABEL: '本社所在地',
    HEADQUARTERS_VALUE: '〒130-0014 東京都墨田区亀沢4-23-6 4F',
    BUSINESS_LABEL: '事業内容',
    BUSINESS_VALUE: 'レンタカー事業',
    BUSINESS_HOURS_LABEL: '営業時間',
    BUSINESS_HOURS_VALUE: '08:00 - 20:00',

    // Core Values Section
    VALUES_TITLE: '企業価値観',
    VALUES_SUBTITLE: '私たちが大切にしていること',
    VALUE_1_TITLE: 'お客様第一',
    VALUE_1_DESC: 'お客様の満足と安全を最優先に考え、常に最高のサービスを提供します',
    VALUE_2_TITLE: '安全運転',
    VALUE_2_DESC: '定期的な車両点検と整備により、安全で快適なドライブを保証します',
    VALUE_3_TITLE: '誠実経営',
    VALUE_3_DESC: '透明な価格設定と誠実な対応で、お客様との信頼関係を築きます',
    VALUE_4_TITLE: '品質保証',
    VALUE_4_DESC: '厳選された車両と定期的なメンテナンスで、最高品質のサービスを保証します',

    // CTA
    CTA_PRIMARY: '車両を探す',
    CTA_SECONDARY: 'お問い合わせ',
  },
  en: {
    // Hero Section
    HERO_TITLE: `Welcome to ${env.WEBSITE_NAME}`,
    HERO_SUBTITLE: 'Supporting Your Journey with Trust and Comfort',
    HERO_DESCRIPTION: 'Providing Safe and Reliable Car Rental Services Across Japan',

    // Company Info Section
    COMPANY_TITLE: 'About Us',
    COMPANY_SUBTITLE: 'Your Trusted Partner for Car Rentals',
    COMPANY_CONTENT: `At ${env.WEBSITE_NAME}, we understand that every journey is unique. We are committed to providing our customers with a diverse selection of vehicles that cater to every travel need. Whether you're exploring a city, commuting for business, or seeking adventure, our reliable car rental services ensure that your adventure begins seamlessly. Our mission is to deliver exceptional customer service, making your experience enjoyable and stress-free. With competitive rates, a variety of well-maintained vehicles, and a dedicated team ready to assist you, we strive to be your trusted partner on the road.`,

    // Company Overview Section
    OVERVIEW_TITLE: 'Company Overview',
    OVERVIEW_SUBTITLE: 'Corporate Information',
    COMPANY_NAME_LABEL: 'Company Name',
    COMPANY_NAME_VALUE: 'FUJI RENT A CAR Co., Ltd.',
    ESTABLISHED_LABEL: 'Established',
    ESTABLISHED_VALUE: 'May 21, 2025',
    CAPITAL_LABEL: 'Capital',
    CAPITAL_VALUE: '¥5,000,000',
    HEADQUARTERS_LABEL: 'Headquarters',
    HEADQUARTERS_VALUE: '〒130-0014 4F, 4-23-6 Kamezawa, Sumida-ku, Tokyo',
    BUSINESS_LABEL: 'Business',
    BUSINESS_VALUE: 'Car Rental Services',
    BUSINESS_HOURS_LABEL: 'Business Hours',
    BUSINESS_HOURS_VALUE: '08:00 - 20:00',

    // Core Values Section
    VALUES_TITLE: 'Our Core Values',
    VALUES_SUBTITLE: 'What We Stand For',
    VALUE_1_TITLE: 'Customer First',
    VALUE_1_DESC: 'We prioritize customer satisfaction and safety, always providing the best service',
    VALUE_2_TITLE: 'Safe Driving',
    VALUE_2_DESC: 'Regular vehicle inspections and maintenance ensure safe and comfortable driving',
    VALUE_3_TITLE: 'Integrity',
    VALUE_3_DESC: 'Transparent pricing and honest service build trust with our customers',
    VALUE_4_TITLE: 'Quality Assurance',
    VALUE_4_DESC: 'Carefully selected vehicles and regular maintenance guarantee the highest quality service',

    // CTA
    CTA_PRIMARY: 'Browse Vehicles',
    CTA_SECONDARY: 'Contact Us',
  },
  zh: {
    // Hero Section
    HERO_TITLE: `欢迎来到 ${env.WEBSITE_NAME}`,
    HERO_SUBTITLE: '以信任与舒适，支持您的旅程',
    HERO_DESCRIPTION: '在日本全国提供安心、安全的租车服务',

    // Company Info Section
    COMPANY_TITLE: '关于我们',
    COMPANY_SUBTITLE: '您值得信赖的租车合作伙伴',
    COMPANY_CONTENT: `在${env.WEBSITE_NAME}，我们理解每一次旅程都是独一无二的。我们致力于为客户提供多样化的车辆选择，满足各种旅行需求。无论您是探索城市、商务出行还是寻求冒险，我们可靠的租车服务都能确保您的旅程顺利开始。我们的使命是提供卓越的客户服务，让您的体验愉快且无压力。凭借具有竞争力的价格、多种保养良好的车辆以及随时准备为您提供帮助的专业团队，我们努力成为您值得信赖的出行伙伴。`,

    // Company Overview Section
    OVERVIEW_TITLE: '公司概要',
    OVERVIEW_SUBTITLE: '企业信息',
    COMPANY_NAME_LABEL: '公司名称',
    COMPANY_NAME_VALUE: 'FUJI RENT A CAR株式会社',
    ESTABLISHED_LABEL: '成立时间',
    ESTABLISHED_VALUE: '2025年5月21日',
    CAPITAL_LABEL: '注册资本',
    CAPITAL_VALUE: '500万日元',
    HEADQUARTERS_LABEL: '总部地址',
    HEADQUARTERS_VALUE: '〒130-0014 东京都墨田区亀沢4-23-6 4F',
    BUSINESS_LABEL: '业务内容',
    BUSINESS_VALUE: '租车服务',
    BUSINESS_HOURS_LABEL: '营业时间',
    BUSINESS_HOURS_VALUE: '08:00 - 20:00',

    // Core Values Section
    VALUES_TITLE: '企业价值观',
    VALUES_SUBTITLE: '我们所重视的',
    VALUE_1_TITLE: '客户至上',
    VALUE_1_DESC: '我们将客户满意度和安全放在首位，始终提供最优质的服务',
    VALUE_2_TITLE: '安全驾驶',
    VALUE_2_DESC: '定期车辆检查和维护，确保安全舒适的驾驶体验',
    VALUE_3_TITLE: '诚信经营',
    VALUE_3_DESC: '透明的价格和诚实的服务，与客户建立信任关系',
    VALUE_4_TITLE: '品质保证',
    VALUE_4_DESC: '精选车辆和定期维护，保证最高品质的服务',

    // CTA
    CTA_PRIMARY: '浏览车辆',
    CTA_SECONDARY: '联系我们',
  },
})

langHelper.setLanguage(strings)
export { strings }
