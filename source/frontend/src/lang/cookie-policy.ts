import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'
import env from '@/config/env.config'

const strings = new LocalizedStrings({
  ja: {
    TITLE: 'Cookie（クッキー）ポリシー',
    POLICY: `
本Cookieポリシーは、${env.WEBSITE_NAME}（「当社」）がウェブサイトでCookieおよび類似の技術をどのように使用するかを説明するものです。当社のウェブサイトを使用することにより、本ポリシーに記載されているCookieの使用に同意したものとみなされます。

1. Cookieとは？

Cookieは、ウェブサイトを訪問したときにお客様のデバイス（コンピュータ、タブレット、スマートフォン）に保存される小さなテキストファイルです。お客様の設定を記憶し、関連する情報やサービスを提供することで、ブラウジング体験を向上させます。

2. 使用するCookieの種類

当社は以下の種類のCookieを使用しています：

- 必須Cookie：これらのCookieはウェブサイトの機能に不可欠であり、システムでオフにすることはできません。
- パフォーマンスCookie：これらのCookieは、訪問者が当社のウェブサイトとどのように対話するかを匿名で収集・報告することにより理解するのに役立ちます。
- 機能Cookie：これらのCookieにより、ウェブサイトは強化された機能とパーソナライゼーションを提供できます。
- ターゲティング/広告Cookie：これらのCookieは、関連する広告を配信し、広告のパフォーマンスを追跡するために使用されます。

3. Cookieの使用方法

当社はCookieを以下の目的で使用します：

- ウェブサイトの機能とパフォーマンスの向上
- サービス改善のためのサイト使用状況の分析
- お客様の体験のパーソナライズと設定の記憶
- お客様の興味に基づくターゲット広告の配信

4. Cookie設定の管理

ブラウザの設定を調整することで、いつでもCookie設定を管理できます。ほとんどのブラウザでは以下が可能です：

- すべてのCookieをブロックする
- 既存のCookieを削除する
- Cookieが設定されたときに通知を受け取る

Cookieを無効にすると、当社のウェブサイトでの体験に影響を与える可能性があることにご注意ください。

5. サードパーティCookie

サイトトラフィックの分析、広告サービスの提供、または追加機能の有効化のために、サードパーティのサービスプロバイダーが当社のウェブサイトにCookieを配置することを許可する場合があります。これらのCookieは、サードパーティのプライバシーポリシーに準拠します。

6. 本Cookieポリシーの変更

技術、法律、または当社の慣行の変更を反映するために、本Cookieポリシーを随時更新することがあります。更新されたポリシーは、改訂された「最終更新日」とともにこのページに掲載されます。

7. お問い合わせ

本Cookieポリシーに関するご質問がございましたら、${env.CONTACT_EMAIL}までお問い合わせください。
    `,
  },
  en: {
    TITLE: 'Cookie Policy',
    POLICY: `
This Cookie Policy explains how ${env.WEBSITE_NAME} ("we," "us," or "our") uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as described in this policy.

1. What Are Cookies?

Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They help improve your browsing experience by remembering your preferences and providing relevant information or services.

2. Types of Cookies We Use

We use the following types of cookies:

- Strictly Necessary Cookies: These cookies are essential for the website to function and cannot be turned off in our systems.
- Performance Cookies: These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
- Functional Cookies: These cookies enable the website to provide enhanced functionality and personalization.
- Targeting/Advertising Cookies: These cookies are used to deliver relevant advertisements and track ad performance.

3. How We Use Cookies

We use cookies to:

- Enhance website functionality and performance.
- Analyze site usage to improve our services.
- Personalize your experience and remember your preferences.
- Deliver targeted advertisements based on your interests.

4. Managing Your Cookie Preferences

You can manage your cookie preferences at any time by adjusting the settings in your browser. Most browsers allow you to:

- Block all cookies.
- Delete existing cookies.
- Receive notifications when a cookie is set.

Please note that disabling cookies may impact your experience on our website.

5. Third-Party Cookies

We may allow third-party service providers to place cookies on our website to analyze site traffic, provide advertising services, or enable additional features. These cookies are governed by the third parties' privacy policies.

6. Changes to This Cookie Policy

We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. The updated policy will be posted on this page with a revised "Last updated" date.

7. Contact Us

If you have any questions about this Cookie Policy, please contact us at: ${env.CONTACT_EMAIL}
    `,
  },
  zh: {
    TITLE: 'Cookie政策',
    POLICY: `
本Cookie政策说明${env.WEBSITE_NAME}（"我們"）如何在我們的網站上使用Cookie和类似技术。使用我們的網站即表示您同意按照本政策中所述使用Cookie。

1. 什么是Cookie？

Cookie是您访问網站时存储在您的设备（计算机、平板电脑、智慧型手機）上的小文本檔案。它們通过记住您的偏好并提供相关資訊或服務来帮助改善您的浏览體验。

2. 我們使用的Cookie类型

我們使用以下类型的Cookie：

- 必需Cookie：这些Cookie对于網站的运行至关重要，无法在我們的系统中关闭。
- 性能Cookie：这些Cookie通过匿名收集和报告資訊来帮助我們了解访问者如何与我們的網站互动。
- 功能Cookie：这些Cookie使網站能够提供增强的功能和个性化。
- 定向/廣告Cookie：这些Cookie用于投放相关廣告并跟踪廣告效果。

3. 我們如何使用Cookie

我們使用Cookie来：

- 增强網站功能和性能
- 分析網站使用情况以改进我們的服務
- 个性化您的體验并记住您的偏好
- 根据您的兴趣投放定向廣告

4. 管理您的Cookie偏好

您可以随时通过调整浏览器設定来管理Cookie偏好。大多数浏览器允许您：

- 阻止所有Cookie
- 删除现有Cookie
- 在設定Cookie时接收通知

請注意，禁用Cookie可能會影响您在我們網站上的體验。

5. 第三方Cookie

我們可能允许第三方服務提供商在我們的網站上放置Cookie，以分析網站流量、提供廣告服務或启用其他功能。这些Cookie受第三方隱私政策的约束。

6. 本Cookie政策的变更

我們可能會不时更新本Cookie政策，以反映技术、立法或我們做法的变化。更新后的政策将發布在此页面上，并附有修订的"最后更新"日期。

7. 聯絡我們

如果您对本Cookie政策有任何疑问，請通过以下方式聯絡我們：${env.CONTACT_EMAIL}
    `,
  },
})

langHelper.setLanguage(strings)
export { strings }
