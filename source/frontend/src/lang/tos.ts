import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'
import env from '@/config/env.config'

const strings = new LocalizedStrings({
  ja: {
    TITLE: '利用規約・レンタル条件',
    TOS: `
FUJI RENT A CAR（東京国際株式会社）をご利用いただきありがとうございます。本サービスをご利用になる前に、以下の利用規約をよくお読みください。

━━━━━━━━━━━━━━━━━━━━━━━━
1. レンタル条件
━━━━━━━━━━━━━━━━━━━━━━━━

1.1 運転資格
• 満21歳以上（車種により25歳以上）
• 有効な運転免許証の所持
• 外国籍の方は国際運転免許証または日本語翻訳文が必要
• 運転歴1年以上

1.2 必要書類
• 運転免許証（原本）
• パスポート（外国籍の方）
• クレジットカード（デポジット用）

━━━━━━━━━━━━━━━━━━━━━━━━
2. 保険について
━━━━━━━━━━━━━━━━━━━━━━━━

基本料金に含まれる補償：
• 対人賠償：無制限
• 対物賠償：無制限（免責額：5万円）
• 車両補償：時価額まで（免責額：車種により5-10万円）
• 人身傷害：3,000万円まで

2.1 免責補償制度（CDW）
1日あたり：1,200円〜2,000円（車種により異なる）
加入することで、事故時の免責額（5-10万円）が免除されます。

2.2 車両盗難補償（TP）
1日あたり：800円〜1,500円（車種により異なる）
盗難時の免責額が免除されます。

2.3 安心フルサポート保険
1日あたり：2,000円〜3,500円（車種により異なる）
• 免責額0円
• ロードサービス込み
• タイヤ・ホイール補償
• キー紛失補償

※ 飲酒運転、無免許運転などの場合は保険適用外となります

━━━━━━━━━━━━━━━━━━━━━━━━
3. 料金・お支払い
━━━━━━━━━━━━━━━━━━━━━━━━

3.1 料金に含まれるもの
• 車両使用料
• 基本保険
• 消費税

3.2 料金に含まれないもの
• ガソリン代
• 高速道路料金
• 駐車料金
• オプション保険
• 延長料金

3.3 お支払い方法
• クレジットカード
• 現金（デポジットはクレジットカードのみ）

3.4 デポジット
車種により3万円〜5万円のデポジットが必要です。
返却時に問題がなければ全額返金いたします。

━━━━━━━━━━━━━━━━━━━━━━━━
4. キャンセル・変更
━━━━━━━━━━━━━━━━━━━━━━━━

• 3日前まで：無料
• 2日前：レンタル料金の30%
• 前日：レンタル料金の50%
• 当日・無断キャンセル：レンタル料金の100%

━━━━━━━━━━━━━━━━━━━━━━━━
5. ご利用上の注意
━━━━━━━━━━━━━━━━━━━━━━━━

5.1 禁止事項
• 飲酒運転
• 無免許運転
• ペットの同乗（ケージ使用は可）
• 車内での喫煙
• 転貸・又貸し
• 競技・テスト走行

5.2 事故発生時
① ただちに警察へ連絡（110番）
② 当社へ連絡（04-7676-9965）
③ 相手方の連絡先を確認
④ 現場の写真撮影

5.3 故障・トラブル時
24時間サポート：04-7676-9965

━━━━━━━━━━━━━━━━━━━━━━━━
6. 返却について
━━━━━━━━━━━━━━━━━━━━━━━━

• 指定時間厳守（遅延料金：30分毎に1時間分の料金）
• 満タン返し（ガソリン未補給の場合、実費+手数料）
• 車内清掃（著しい汚損の場合、清掃料金を請求）

━━━━━━━━━━━━━━━━━━━━━━━━
7. 個人情報の取り扱い
━━━━━━━━━━━━━━━━━━━━━━━━

お客様の個人情報は、プライバシーポリシーに基づき適切に管理いたします。

━━━━━━━━━━━━━━━━━━━━━━━━
8. お問い合わせ
━━━━━━━━━━━━━━━━━━━━━━━━

東京国際株式会社
FUJI RENT A CAR
TEL：04-7676-9965
E-MAIL：rentacarfuji@gmail.com

営業時間：
本店（墨田区）：9:00-18:00
成田空港店：24時間対応可能

本規約は日本国の法律に準拠します。
    `,
  },
  en: {
    TITLE: 'Terms of Service & Rental Conditions',
    TOS: `
Thank you for choosing FUJI RENT A CAR (Tokyo International Co., Ltd.). Please read the following terms carefully before using our services.

━━━━━━━━━━━━━━━━━━━━━━━━
1. Rental Requirements
━━━━━━━━━━━━━━━━━━━━━━━━

1.1 Driver Qualifications
• Minimum age: 21 years (25 years for certain vehicles)
• Valid driver's license required
• International Driving Permit (IDP) or Japanese translation for foreign nationals
• Minimum 1 year driving experience

1.2 Required Documents
• Driver's license (original)
• Passport (for foreign nationals)
• Credit card (for deposit)

━━━━━━━━━━━━━━━━━━━━━━━━
2. Insurance Coverage
━━━━━━━━━━━━━━━━━━━━━━━━

Basic Coverage (Included in rental fee):
• Personal Injury: Unlimited
• Property Damage: Unlimited (Excess: ¥50,000)
• Vehicle Damage: Up to market value (Excess: ¥50,000-100,000 depending on vehicle)
• Personal Accident: Up to ¥30,000,000

2.1 Collision Damage Waiver (CDW)
Per day: ¥1,200-¥2,000 (varies by vehicle)
Waives the excess charge (¥50,000-100,000) in case of accident.

2.2 Theft Protection (TP)
Per day: ¥800-¥1,500 (varies by vehicle)
Waives the excess charge in case of theft.

2.3 Full Protection Insurance
Per day: ¥2,000-¥3,500 (varies by vehicle)
• Zero excess
• 24/7 roadside assistance
• Tire and wheel coverage
• Key loss coverage

※ Insurance is void for drunk driving, unlicensed driving, etc.

━━━━━━━━━━━━━━━━━━━━━━━━
3. Rates & Payment
━━━━━━━━━━━━━━━━━━━━━━━━

3.1 Included in Rental Fee
• Vehicle usage
• Basic insurance
• Consumption tax

3.2 Not Included
• Fuel
• Highway tolls
• Parking fees
• Optional insurance
• Extension fees

3.3 Payment Methods
• Credit card
• Cash (Deposit requires credit card)

3.4 Deposit
¥30,000-¥50,000 deposit required depending on vehicle class.
Full refund upon trouble-free return.

━━━━━━━━━━━━━━━━━━━━━━━━
4. Cancellation & Changes
━━━━━━━━━━━━━━━━━━━━━━━━

• 3+ days before: Free
• 2 days before: 30% of rental fee
• 1 day before: 50% of rental fee
• Same day/No show: 100% of rental fee

━━━━━━━━━━━━━━━━━━━━━━━━
5. Terms of Use
━━━━━━━━━━━━━━━━━━━━━━━━

5.1 Prohibited Acts
• Drunk driving
• Unlicensed driving
• Pets (except in carrier)
• Smoking in vehicle
• Subletting
• Racing/testing

5.2 In Case of Accident
① Contact police immediately (110)
② Contact us (04-7676-9965)
③ Exchange contact information with other party
④ Take photos of the scene

5.3 Breakdown/Trouble
24-hour support: 04-7676-9965

━━━━━━━━━━━━━━━━━━━━━━━━
6. Return
━━━━━━━━━━━━━━━━━━━━━━━━

• Strictly adhere to return time (Late fee: 1-hour charge per 30 min)
• Return with full tank (Otherwise, actual cost + service fee)
• Clean interior (Excessive soiling may incur cleaning fee)

━━━━━━━━━━━━━━━━━━━━━━━━
7. Privacy
━━━━━━━━━━━━━━━━━━━━━━━━

Your personal information will be handled appropriately according to our Privacy Policy.

━━━━━━━━━━━━━━━━━━━━━━━━
8. Contact
━━━━━━━━━━━━━━━━━━━━━━━━

Tokyo International Co., Ltd.
FUJI RENT A CAR
TEL: 04-7676-9965
E-MAIL: rentacarfuji@gmail.com

Business Hours:
Main Office (Sumida): 9:00-18:00
Narita Airport: 24/7 available

These terms are governed by the laws of Japan.
    `,
  },
  zh: {
    TITLE: '使用条款及租赁条件',
    TOS: `
感谢您选择 FUJI RENT A CAR（东京国际株式会社）。使用本服务前，请仔细阅读以下条款。

━━━━━━━━━━━━━━━━━━━━━━━━
1. 租赁条件
━━━━━━━━━━━━━━━━━━━━━━━━

1.1 驾驶资格
• 年满21周岁（部分车型需25周岁以上）
• 持有效驾驶执照
• 外籍人士需持国际驾照或日语翻译件
• 驾龄1年以上

1.2 所需文件
• 驾驶执照（原件）
• 护照（外籍人士）
• 信用卡（用于押金）

━━━━━━━━━━━━━━━━━━━━━━━━
2. 保险说明
━━━━━━━━━━━━━━━━━━━━━━━━

基本保险（包含在租金内）：
• 人身伤害：无限额
• 财产损失：无限额（免赔额：5万日元）
• 车辆损失：最高至市价（免赔额：根据车型5-10万日元）
• 人身意外：最高3000万日元

2.1 碰撞损失免责险（CDW）
每日：1,200-2,000日元（根据车型不同）
购买后可免除事故时的免赔额（5-10万日元）。

2.2 盗窃保护险（TP）
每日：800-1,500日元（根据车型不同）
购买后可免除车辆被盗时的免赔额。

2.3 全方位保障险
每日：2,000-3,500日元（根据车型不同）
• 免赔额为零
• 24小时道路救援
• 轮胎及轮毂保障
• 钥匙遗失保障

※ 酒后驾驶、无证驾驶等情况保险不予赔付

━━━━━━━━━━━━━━━━━━━━━━━━
3. 费用及支付
━━━━━━━━━━━━━━━━━━━━━━━━

3.1 租金包含
• 车辆使用费
• 基本保险
• 消费税

3.2 不包含
• 燃油费
• 高速公路费
• 停车费
• 可选保险
• 延时费用

3.3 支付方式
• 信用卡
• 现金（押金仅限信用卡）

3.4 押金
根据车型需支付3-5万日元押金。
还车时无问题将全额退还。

━━━━━━━━━━━━━━━━━━━━━━━━
4. 取消及变更
━━━━━━━━━━━━━━━━━━━━━━━━

• 3天前：免费
• 2天前：租金的30%
• 1天前：租金的50%
• 当天/无故取消：租金的100%

━━━━━━━━━━━━━━━━━━━━━━━━
5. 使用注意事项
━━━━━━━━━━━━━━━━━━━━━━━━

5.1 禁止行为
• 酒后驾驶
• 无证驾驶
• 携带宠物（使用笼子除外）
• 车内吸烟
• 转租
• 竞技/测试驾驶

5.2 发生事故时
① 立即联系警察（110）
② 联系我司（04-7676-9965）
③ 记录对方联系方式
④ 拍摄现场照片

5.3 故障/问题
24小时支援：04-7676-9965

━━━━━━━━━━━━━━━━━━━━━━━━
6. 还车
━━━━━━━━━━━━━━━━━━━━━━━━

• 严格遵守还车时间（迟还费用：每30分钟按1小时收费）
• 满油还车（未加满：实际费用+手续费）
• 保持车内整洁（严重污损需支付清洁费）

━━━━━━━━━━━━━━━━━━━━━━━━
7. 个人信息保护
━━━━━━━━━━━━━━━━━━━━━━━━

您的个人信息将根据隐私政策妥善管理。

━━━━━━━━━━━━━━━━━━━━━━━━
8. 联系方式
━━━━━━━━━━━━━━━━━━━━━━━━

东京国际株式会社
FUJI RENT A CAR
电话：04-7676-9965
邮箱：rentacarfuji@gmail.com

营业时间：
总店（墨田区）：9:00-18:00
成田机场店：24小时服务

本条款适用日本法律。
    `,
  },
})

langHelper.setLanguage(strings)
export { strings }
