import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'
import env from '@/config/env.config'

const strings = new LocalizedStrings({
  ja: {
    TITLE1: `${env.WEBSITE_NAME} - 信頼できるレンタカーサービス`,
    SUBTITLE1: 'お客様の信頼できるレンタカーパートナー',
    CONTENT1: `${env.WEBSITE_NAME}では、すべての旅が特別であることを理解しています。私たちは、あらゆる旅行ニーズに対応する多様な車両を提供することに取り組んでいます。都市探索、ビジネス出張、アドベンチャーなど、信頼性の高いレンタカーサービスにより、スムーズに旅をスタートできます。私たちの使命は、お客様に快適でストレスフリーな体験を提供することです。競争力のある料金、よく整備された多様な車両、そしてサポートチームが、お客様の信頼できるパートナーとなることを目指しています。すべてのレンタカーニーズに${env.WEBSITE_NAME}をお選びいただき、自由に探索する喜びを体験してください。`,
    TITLE2: `${env.WEBSITE_NAME}を選ぶ理由`,
    SUBTITLE2: 'すべての旅で卓越したサービスを',
    CONTENT2: '便利で信頼性が高く、優れた価値を提供するレンタカーサービス。簡単な予約から高品質な車両まで、私たちはお客様の信頼できる旅のパートナーです。',
    FIND_DEAL: 'プランを見る',
  },
  en: {
    TITLE1: `${env.WEBSITE_NAME} - Your Premier Car Rental Service`,
    SUBTITLE1: 'Your Trusted Partner for Car Rentals',
    CONTENT1: `At ${env.WEBSITE_NAME}, we understand that every journey is unique. We are committed to providing our customers with a diverse selection of vehicles that cater to every travel need. Whether you're exploring a city, commuting for business, or seeking adventure, our reliable car rental services ensure that your adventure begins seamlessly. Our mission is to deliver exceptional customer service, making your experience enjoyable and stress-free. With competitive rates, a variety of well-maintained vehicles, and a dedicated team ready to assist you, we strive to be your trusted partner on the road. Choose ${env.WEBSITE_NAME} for all your car rental needs and experience the freedom to explore at your own pace.`,
    TITLE2: `Why Choose ${env.WEBSITE_NAME}`,
    SUBTITLE2: 'Experience Excellence in Every Journey',
    CONTENT2: "Enjoy unmatched convenience, reliability, and value with our premier car rental service. From effortless bookings to high-quality vehicles, we're your trusted travel partner.",
    FIND_DEAL: 'Find Deal',
  },
  zh: {
    TITLE1: `${env.WEBSITE_NAME} - 值得信赖的租車服務`,
    SUBTITLE1: '您值得信赖的租車合作伙伴',
    CONTENT1: `在${env.WEBSITE_NAME}，我們理解每一次旅程都是独一无二的。我們致力于為客户提供多样化的車輛選擇，满足各种旅行需求。无论您是探索城市、商務出行还是寻求冒险，我們可靠的租車服務都能确保您的旅程顺利开始。我們的使命是提供卓越的客户服務，让您的體验愉快且无压力。凭借具有竞爭力的價格、多种保养良好的車輛以及随时准备為您提供帮助的专业团队，我們努力成為您值得信赖的出行伙伴。選擇${env.WEBSITE_NAME}满足您的所有租車需求，體验自由探索的樂趣。`,
    TITLE2: `為什么選擇${env.WEBSITE_NAME}`,
    SUBTITLE2: '每次旅程都卓越非凡',
    CONTENT2: '通过我們優质的租車服務，享受无与伦比的便利性、可靠性和价值。從轻松預訂到高品质車輛，我們是您值得信赖的旅行伙伴。',
    FIND_DEAL: '查看方案',
  },
})

langHelper.setLanguage(strings)
export { strings }
