import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'
import env from '@/config/env.config'

const strings = new LocalizedStrings({
  ja: {
    TITLE: 'プライバシーポリシー',
    PRIVACY_POLICY: `
FUJI RENT A CAR（東京国際株式会社）は、お客様の個人情報の保護を重要視しています。本プライバシーポリシーは、当社がどのように個人情報を収集・利用・保護するかを説明するものです。

━━━━━━━━━━━━━━━━━━━━━━━━
1. 収集する情報
━━━━━━━━━━━━━━━━━━━━━━━━

当社は、以下の情報を収集する場合があります：

• 氏名
• 連絡先（電話番号・メールアドレス）
• 運転免許証情報
• パスポート情報（外国籍の方）
• レンタル履歴
• お問い合わせ内容

━━━━━━━━━━━━━━━━━━━━━━━━
2. 情報の利用目的
━━━━━━━━━━━━━━━━━━━━━━━━

収集した個人情報は、以下の目的で利用します：

• レンタカーサービスの提供
• ご予約の確認・管理
• お客様からのお問い合わせへの対応
• サービス向上のための分析
• 重要なお知らせの送付

━━━━━━━━━━━━━━━━━━━━━━━━
3. 個人情報の保護
━━━━━━━━━━━━━━━━━━━━━━━━

当社は、お客様の個人情報を適切に管理し、以下の対策を講じています：

• 不正アクセス・紛失・破壊・改ざん・漏洩の防止
• 従業員への適切な監督
• 委託先の適切な選定と管理

━━━━━━━━━━━━━━━━━━━━━━━━
4. 第三者への提供
━━━━━━━━━━━━━━━━━━━━━━━━

以下の場合を除き、お客様の同意なく第三者に個人情報を提供することはありません：

• 法令に基づく場合
• 人の生命・身体・財産の保護に必要な場合
• サービス提供に必要な業務委託先への提供

━━━━━━━━━━━━━━━━━━━━━━━━
5. Cookie（クッキー）の使用
━━━━━━━━━━━━━━━━━━━━━━━━

当ウェブサイトでは、サービス向上のためCookieを使用しています。
Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。

━━━━━━━━━━━━━━━━━━━━━━━━
6. 個人情報の開示・訂正・削除
━━━━━━━━━━━━━━━━━━━━━━━━

お客様は、ご自身の個人情報について、開示・訂正・削除を求めることができます。
ご希望の場合は、下記連絡先までお問い合わせください。

━━━━━━━━━━━━━━━━━━━━━━━━
7. プライバシーポリシーの変更
━━━━━━━━━━━━━━━━━━━━━━━━

当社は、本プライバシーポリシーを適宜変更することがあります。
変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じます。

━━━━━━━━━━━━━━━━━━━━━━━━
8. お問い合わせ
━━━━━━━━━━━━━━━━━━━━━━━━

個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：

東京国際株式会社
FUJI RENT A CAR
〒130-0014 東京都墨田区亀沢4丁目-23-6
TEL：04-7676-9965
E-MAIL：rentacarfuji@gmail.com

制定日：2025年1月1日
最終更新日：2025年1月1日
    `,
  },
  en: {
    TITLE: 'Privacy Policy',
    PRIVACY_POLICY: `
FUJI RENT A CAR (Tokyo International Co., Ltd.) values the protection of your personal information. This Privacy Policy explains how we collect, use, and protect your personal data.

━━━━━━━━━━━━━━━━━━━━━━━━
1. Information We Collect
━━━━━━━━━━━━━━━━━━━━━━━━

We may collect the following information:

• Name
• Contact information (phone number, email address)
• Driver's license information
• Passport information (for foreign nationals)
• Rental history
• Inquiry content

━━━━━━━━━━━━━━━━━━━━━━━━
2. Purpose of Use
━━━━━━━━━━━━━━━━━━━━━━━━

We use collected personal information for the following purposes:

• Providing car rental services
• Confirming and managing reservations
• Responding to customer inquiries
• Service improvement and analysis
• Sending important notifications

━━━━━━━━━━━━━━━━━━━━━━━━
3. Protection of Personal Information
━━━━━━━━━━━━━━━━━━━━━━━━

We properly manage customer personal information and implement the following measures:

• Prevention of unauthorized access, loss, destruction, alteration, and leakage
• Appropriate supervision of employees
• Proper selection and management of subcontractors

━━━━━━━━━━━━━━━━━━━━━━━━
4. Disclosure to Third Parties
━━━━━━━━━━━━━━━━━━━━━━━━

We will not provide personal information to third parties without customer consent, except in the following cases:

• When required by law
• When necessary to protect human life, body, or property
• Provision to subcontractors necessary for service delivery

━━━━━━━━━━━━━━━━━━━━━━━━
5. Use of Cookies
━━━━━━━━━━━━━━━━━━━━━━━━

This website uses cookies to improve services.
If you do not wish to use cookies, you can disable them in your browser settings.

━━━━━━━━━━━━━━━━━━━━━━━━
6. Disclosure, Correction, and Deletion of Personal Information
━━━━━━━━━━━━━━━━━━━━━━━━

Customers can request disclosure, correction, or deletion of their personal information.
If you wish to do so, please contact us using the information below.

━━━━━━━━━━━━━━━━━━━━━━━━
7. Changes to Privacy Policy
━━━━━━━━━━━━━━━━━━━━━━━━

We may change this Privacy Policy from time to time.
The revised Privacy Policy will be effective from the time it is posted on this website.

━━━━━━━━━━━━━━━━━━━━━━━━
8. Contact
━━━━━━━━━━━━━━━━━━━━━━━━

For inquiries regarding the handling of personal information, please contact:

Tokyo International Co., Ltd.
FUJI RENT A CAR
4-23-6 Kamezawa, Sumida-ku, Tokyo 130-0014, Japan
TEL: 04-7676-9965
E-MAIL: rentacarfuji@gmail.com

Established: January 1, 2025
Last Updated: January 1, 2025
    `,
  },
  zh: {
    TITLE: '隐私政策',
    PRIVACY_POLICY: `
FUJI RENT A CAR（东京国际株式会社）重视保护您的个人信息。本隐私政策说明我们如何收集、使用和保护您的个人数据。

━━━━━━━━━━━━━━━━━━━━━━━━
1. 收集的信息
━━━━━━━━━━━━━━━━━━━━━━━━

我们可能会收集以下信息：

• 姓名
• 联系方式（电话号码、电子邮件地址）
• 驾驶执照信息
• 护照信息（外籍人士）
• 租赁历史记录
• 咨询内容

━━━━━━━━━━━━━━━━━━━━━━━━
2. 使用目的
━━━━━━━━━━━━━━━━━━━━━━━━

我们将收集的个人信息用于以下目的：

• 提供租车服务
• 确认和管理预订
• 回复客户咨询
• 服务改进和分析
• 发送重要通知

━━━━━━━━━━━━━━━━━━━━━━━━
3. 个人信息保护
━━━━━━━━━━━━━━━━━━━━━━━━

我们妥善管理客户个人信息，并实施以下措施：

• 防止未经授权的访问、丢失、破坏、篡改和泄漏
• 对员工进行适当监督
• 对分包商进行适当选择和管理

━━━━━━━━━━━━━━━━━━━━━━━━
4. 向第三方披露
━━━━━━━━━━━━━━━━━━━━━━━━

除以下情况外，未经客户同意，我们不会向第三方提供个人信息：

• 法律要求时
• 为保护人的生命、身体或财产所必需时
• 向服务提供所需的分包商提供

━━━━━━━━━━━━━━━━━━━━━━━━
5. Cookie 的使用
━━━━━━━━━━━━━━━━━━━━━━━━

本网站使用 Cookie 来改善服务。
如果您不希望使用 Cookie，可以在浏览器设置中禁用它们。

━━━━━━━━━━━━━━━━━━━━━━━━
6. 个人信息的公开、更正和删除
━━━━━━━━━━━━━━━━━━━━━━━━

客户可以要求公开、更正或删除其个人信息。
如需申请，请使用下方联系方式与我们联系。

━━━━━━━━━━━━━━━━━━━━━━━━
7. 隐私政策的更改
━━━━━━━━━━━━━━━━━━━━━━━━

我们可能会不时更改本隐私政策。
修订后的隐私政策将从发布在本网站上的时间起生效。

━━━━━━━━━━━━━━━━━━━━━━━━
8. 联系方式
━━━━━━━━━━━━━━━━━━━━━━━━

有关个人信息处理的咨询，请联系：

东京国际株式会社
FUJI RENT A CAR
〒130-0014 东京都墨田区龟泽4丁目-23-6
电话：04-7676-9965
邮箱：rentacarfuji@gmail.com

制定日期：2025年1月1日
最后更新：2025年1月1日
    `,
  },
})

langHelper.setLanguage(strings)
export { strings }
