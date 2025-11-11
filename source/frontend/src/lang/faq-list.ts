import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    FAQ_TITLE: 'よくある質問',
    MORE_QUESTIONS: 'その他のご質問は？',
    FAQ_DOCUMENTS_TITLE: 'レンタルに必要な書類は何ですか？',
    FAQ_DOCUMENTS_TEXT: 'レンタルには、有効な運転免許証、支払いおよび保証金のためのクレジットカード、保険証明書が必要です。追加の要件は、場所や車種によって異なる場合があります。',
    FAQ_SERVICES_TITLE: '配送・引き取りサービスはありますか？',
    FAQ_SERVICES_TEXT: 'はい、ございます！空港、ホテルなど、さまざまな場所への便利な配送・引き取りサービスを提供しています。ご希望の場所をお知らせください。残りは私たちにお任せください。',
    FAQ_AGE_TITLE: 'レンタルに年齢制限はありますか？',
    FAQ_AGE_TEXT: 'はい、レンタルの最低年齢は通常18歳です。ただし、一部の場所や車種では、より高い年齢要件または追加の制限がある場合があります。',
    FAQ_CANCEL_TITLE: '予約をキャンセルする必要がある場合はどうなりますか？',
    FAQ_CANCEL_TEXT: '予定が変わることもあると理解していますので、柔軟なキャンセルポリシーを提供しています。キャンセルのタイミングによっては、手数料が発生する場合があります。キャンセルに関するサポートについては、利用規約をご参照いただくか、カスタマーサポートチームにお問い合わせください。',
  },
  en: {
    FAQ_TITLE: 'FAQ',
    MORE_QUESTIONS: 'More questions?',
    FAQ_DOCUMENTS_TITLE: 'What documents do I need to rent a vehicle?',
    FAQ_DOCUMENTS_TEXT: "To rent a vehicle, you'll typically need a valid driver's license, a credit card for payment and security deposit, and proof of insurance. Additional requirements may vary depending on your location and the type of vehicle you're renting.",
    FAQ_SERVICES_TITLE: 'Do you offer delivery and pickup services?',
    FAQ_SERVICES_TEXT: "Yes, we do! We offer convenient delivery and pickup services to various locations, including airports, hotels, and more. Just let us know your preferred location, and we'll take care of the rest.",
    FAQ_AGE_TITLE: 'Is there an age requirement for renting a vehicle?',
    FAQ_AGE_TEXT: 'Yes, the minimum age requirement for renting a vehicle is usually 18 years old. However, some locations may have higher age requirements or additional restrictions for certain vehicle types.',
    FAQ_CANCEL_TITLE: 'What happens if I need to cancel my reservation?',
    FAQ_CANCEL_TEXT: 'We understand that plans can change, which is why we offer flexible cancellation policies. Depending on the timing of your cancellation, there may be applicable fees. Please refer to our terms and conditions or contact our customer support team for assistance with cancellations.',
  },
  zh: {
    FAQ_TITLE: '常见问题',
    MORE_QUESTIONS: '还有其他问题？',
    FAQ_DOCUMENTS_TITLE: '租车需要什么文件？',
    FAQ_DOCUMENTS_TEXT: '租车通常需要有效的驾驶执照、用于支付和押金的信用卡以及保险证明。额外的要求可能因您的位置和租赁的车辆类型而异。',
    FAQ_SERVICES_TITLE: '你们提供送车和取车服务吗？',
    FAQ_SERVICES_TEXT: '是的，我们提供！我们为各种地点提供便捷的送车和取车服务，包括机场、酒店等。只需告诉我们您的首选地点，我们会处理其余的事情。',
    FAQ_AGE_TITLE: '租车有年龄要求吗？',
    FAQ_AGE_TEXT: '是的，租车的最低年龄要求通常为18岁。但是，某些地点可能对某些车型有更高的年龄要求或额外限制。',
    FAQ_CANCEL_TITLE: '如果我需要取消预订会怎么样？',
    FAQ_CANCEL_TEXT: '我们理解计划可能会改变，因此我们提供灵活的取消政策。根据取消的时间，可能会收取相应费用。请参阅我们的条款和条件或联系我们的客户支持团队以获取取消方面的帮助。',
  },
})

langHelper.setLanguage(strings)
export { strings }
