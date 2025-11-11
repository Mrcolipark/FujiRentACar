import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    FAQ_TITLE: 'よくある質問',
    MORE_QUESTIONS: 'その他のご質問は？',

    FAQ_DOCUMENTS_TITLE: 'レンタルに必要な書類は何ですか？',
    FAQ_DOCUMENTS_TEXT: 'レンタルには以下の書類が必要です：1）有効な運転免許証（国際運転免許証が必要な場合があります）、2）本人名義のクレジットカード（支払いおよび保証金のため）、3）パスポートまたは身分証明書、4）任意保険証明書（お持ちの場合）。外国籍のお客様は、日本で運転するための国際運転免許証（ジュネーブ条約加盟国発行）または日本語翻訳文付きの運転免許証が必要です。高級車種の場合、運転経験年数の証明を求められる場合があります。',

    FAQ_SERVICES_TITLE: '配送・引き取りサービスはありますか？',
    FAQ_SERVICES_TEXT: 'はい、充実した配送・引き取りサービスをご用意しております。成田空港、羽田空港、関西国際空港などの主要空港、東京・大阪・京都市内の主要ホテル、お客様のご自宅やオフィスへの配送が可能です。サービス料金は配送距離と車種によって異なります。空港での配送の場合、到着ロビーでスタッフがお名前のプレートを持ってお待ちしております。24時間前までのご予約で、深夜・早朝の配送も承ります。',

    FAQ_AGE_TITLE: 'レンタルに年齢制限はありますか？',
    FAQ_AGE_TEXT: 'はい、年齢制限がございます。基本的な乗用車のレンタルには満21歳以上、運転免許取得後1年以上の経験が必要です。高級車やスポーツカーの場合、満25歳以上で運転免許取得後3年以上の経験が必要となります。一部の大型車両やプレミアムクラスの車両では、満30歳以上の条件を設けている場合があります。25歳未満のドライバーには若年ドライバー料金が適用される場合があります。',

    FAQ_CANCEL_TITLE: '予約をキャンセルする必要がある場合はどうなりますか？',
    FAQ_CANCEL_TEXT: '柔軟なキャンセルポリシーをご用意しております。レンタル開始の7日前までのキャンセルは無料です。4-6日前のキャンセルはレンタル料金の25%、2-3日前は50%、前日は75%、当日は100%のキャンセル料が発生します。天候や航空便の遅延などやむを得ない事情の場合、証明書類をご提示いただければ個別に対応いたします。キャンセル保険オプション（レンタル料金の10%）をご購入いただくと、いかなる理由でも48時間前まで無料キャンセルが可能です。',

    FAQ_INSURANCE_TITLE: '保険はどのように機能しますか？',
    FAQ_INSURANCE_TEXT: '全てのレンタル料金には基本保険が含まれており、対人・対物賠償責任保険、車両損害補償、盗難補償が含まれます。免責額は車種によって異なりますが、通常5万円～20万円です。完全補償プラン（CDW）を追加すると、免責額がゼロになり、タイヤ・ガラス・アンダーボディの損害もカバーされます。個人傷害保険（PAI）オプションもご用意しており、運転者と同乗者の医療費をカバーします。海外旅行保険をお持ちの場合、レンタカーもカバーされているか事前にご確認ください。',

    FAQ_PAYMENT_TITLE: '支払い方法は何がありますか？',
    FAQ_PAYMENT_TEXT: '主要なクレジットカード（Visa、Mastercard、American Express、JCB、Diners Club）でお支払いいただけます。デビットカードは保証金の関係上、ご利用いただけません。現金でのお支払いは、事前予約済みで日本在住のお客様のみ可能です。レンタル料金は事前決済または当日決済をお選びいただけます。保証金はクレジットカードに一時的にブロックされ、返却時に問題がなければ3-7営業日以内に解除されます。法人のお客様には請求書払いもご用意しております。',

    FAQ_FUEL_TITLE: '燃料ポリシーはどうなっていますか？',
    FAQ_FUEL_TEXT: 'フルtoフルポリシーを採用しております。お車は満タンの状態でお渡しし、満タンにしてご返却いただきます。返却時にガソリンが満タンでない場合、市場価格に20%の手数料を加えた料金で給油させていただきます。また、事前給油オプション（満タン分の料金を前払い）もご利用いただけます。この場合、返却時の給油は不要です。電気自動車の場合、満充電でお渡しし、80%以上の充電状態でご返却いただきます。',

    FAQ_MILEAGE_TITLE: '走行距離に制限はありますか？',
    FAQ_MILEAGE_TEXT: 'ほとんどのレンタルプランには無制限の走行距離が含まれています。ただし、一部の特別割引プランや長期レンタル（30日以上）の場合、1日あたり200kmまでの制限があり、超過分は1kmあたり20円の追加料金が発生します。高級スポーツカーの場合、1日150kmの制限が設定されている場合があります。長距離ドライブを予定されている場合は、予約時に無制限走行距離プランをお選びください。',

    FAQ_ADDITIONAL_DRIVER_TITLE: '追加ドライバーを登録できますか？',
    FAQ_ADDITIONAL_DRIVER_TEXT: 'はい、追加ドライバーの登録が可能です。1人目の追加ドライバーは1日1,500円、2人目以降は1日1,000円の料金が発生します。配偶者の場合、無料で追加できます。全ての追加ドライバーは、運転免許証と身分証明書を提示する必要があり、年齢と運転経験の条件も主契約者と同じです。登録していないドライバーが運転した場合、保険が無効になりますのでご注意ください。',

    FAQ_MODIFICATION_TITLE: '予約内容の変更は可能ですか？',
    FAQ_MODIFICATION_TEXT: 'はい、レンタル開始の24時間前まで、予約内容の変更が可能です。車種のアップグレード、レンタル期間の延長、オプション装備の追加などができます。ただし、料金が変更前より高くなる場合は差額をお支払いいただきます。料金が安くなる場合、キャンセルポリシーに従って返金されます。レンタル期間中の延長も可能ですが、車両の予約状況によってはお受けできない場合があります。延長される場合は、返却予定時刻の少なくとも2時間前までにご連絡ください。',

    FAQ_ROADSIDE_TITLE: 'ロードサイドアシスタンスは含まれていますか？',
    FAQ_ROADSIDE_TEXT: 'はい、全てのレンタルに24時間365日対応のロードサイドアシスタンスが含まれています。パンク、バッテリー上がり、キー閉じ込み、燃料切れ、牽引サービスなどに対応いたします。日本全国どこでも、専用ダイヤルにお電話いただければ、最寄りのサービス拠点から駆けつけます。平均到着時間は都市部で30分、郊外で60分です。お客様の過失でない故障の場合、代替車両も無料でご提供いたします。多言語対応のオペレーターが常駐しておりますので、日本語が話せなくても安心してご利用いただけます。',
  },
  en: {
    FAQ_TITLE: 'FAQ',
    MORE_QUESTIONS: 'More questions?',

    FAQ_DOCUMENTS_TITLE: 'What documents do I need to rent a vehicle?',
    FAQ_DOCUMENTS_TEXT: "To rent a vehicle, you'll need the following documents: 1) A valid driver's license (International Driving Permit may be required), 2) A credit card in the renter's name (for payment and security deposit), 3) Passport or government-issued ID, 4) Optional insurance certificate (if you have one). Foreign nationals need an International Driving Permit (issued by Geneva Convention countries) or a driver's license with Japanese translation to drive in Japan. For luxury vehicles, proof of driving experience may be required.",

    FAQ_SERVICES_TITLE: 'Do you offer delivery and pickup services?',
    FAQ_SERVICES_TEXT: "Yes, we offer comprehensive delivery and pickup services! We deliver to major airports including Narita, Haneda, and Kansai International Airport, major hotels in Tokyo, Osaka, and Kyoto, as well as your home or office. Service fees vary based on distance and vehicle type. For airport deliveries, our staff will meet you at the arrival lobby with a name placard. We also accommodate late-night and early-morning deliveries with 24-hour advance booking.",

    FAQ_AGE_TITLE: 'Is there an age requirement for renting a vehicle?',
    FAQ_AGE_TEXT: 'Yes, age requirements apply. Standard passenger vehicles require drivers to be at least 21 years old with 1+ year of driving experience. Luxury and sports cars require drivers to be at least 25 years old with 3+ years of experience. Some large vehicles and premium classes may require drivers to be 30 years or older. Young driver fees may apply for drivers under 25.',

    FAQ_CANCEL_TITLE: 'What happens if I need to cancel my reservation?',
    FAQ_CANCEL_TEXT: 'We offer flexible cancellation policies. Cancellations made 7+ days before rental start are free. Cancellations 4-6 days prior incur 25% of rental fee, 2-3 days prior 50%, 1 day prior 75%, and same-day 100%. For unavoidable circumstances like weather or flight delays, we can make exceptions with supporting documentation. Our cancellation insurance option (10% of rental fee) allows free cancellation up to 48 hours before pickup for any reason.',

    FAQ_INSURANCE_TITLE: 'How does insurance work?',
    FAQ_INSURANCE_TEXT: 'All rentals include basic insurance covering third-party liability, vehicle damage, and theft. Deductibles vary by vehicle type, typically ranging from ¥50,000 to ¥200,000. Adding Collision Damage Waiver (CDW) reduces your deductible to zero and covers tire, glass, and underbody damage. Personal Accident Insurance (PAI) is also available to cover medical expenses for driver and passengers. If you have travel insurance, please verify if it covers rental vehicles.',

    FAQ_PAYMENT_TITLE: 'What payment methods do you accept?',
    FAQ_PAYMENT_TEXT: 'We accept major credit cards including Visa, Mastercard, American Express, JCB, and Diners Club. Debit cards are not accepted due to security deposit requirements. Cash payment is available only for pre-booked Japanese residents. You can choose prepayment or payment upon pickup. Security deposits are temporarily held on your credit card and released within 3-7 business days after return if no issues arise. Corporate billing is available for business customers.',

    FAQ_FUEL_TITLE: 'What is your fuel policy?',
    FAQ_FUEL_TEXT: 'We operate on a full-to-full fuel policy. Vehicles are provided with a full tank and should be returned full. If not returned full, we charge refueling at market rate plus 20% service fee. Alternatively, you can purchase the prepaid fuel option (paying for a full tank upfront) and return the vehicle with any fuel level. For electric vehicles, we provide full charge and request return at 80% or higher charge level.',

    FAQ_MILEAGE_TITLE: 'Are there mileage restrictions?',
    FAQ_MILEAGE_TEXT: 'Most rental plans include unlimited mileage. However, some special discount plans and long-term rentals (30+ days) have a 200km per day limit, with excess charged at ¥20 per km. Luxury sports cars may have a 150km daily limit. If planning long-distance travel, please select an unlimited mileage plan when booking.',

    FAQ_ADDITIONAL_DRIVER_TITLE: 'Can I add additional drivers?',
    FAQ_ADDITIONAL_DRIVER_TEXT: 'Yes, additional drivers can be registered. The first additional driver costs ¥1,500 per day, subsequent drivers ¥1,000 per day. Spouses can be added free of charge. All additional drivers must present their driver\'s license and ID, and meet the same age and experience requirements as the primary renter. Note that insurance is void if an unregistered driver operates the vehicle.',

    FAQ_MODIFICATION_TITLE: 'Can I modify my reservation?',
    FAQ_MODIFICATION_TEXT: 'Yes, reservations can be modified up to 24 hours before rental start. You can upgrade vehicles, extend rental periods, or add optional equipment. If the modification increases the cost, you pay the difference. If it decreases, refunds follow our cancellation policy. Extensions during the rental period are possible subject to vehicle availability. Please contact us at least 2 hours before scheduled return if extending.',

    FAQ_ROADSIDE_TITLE: 'Is roadside assistance included?',
    FAQ_ROADSIDE_TEXT: 'Yes, all rentals include 24/7/365 roadside assistance. We cover flat tires, dead batteries, lockouts, fuel delivery, and towing services. Throughout Japan, call our dedicated hotline and assistance will be dispatched from the nearest service center. Average arrival time is 30 minutes in urban areas, 60 minutes in rural areas. For mechanical failures not caused by customer negligence, we provide free replacement vehicles. Our multilingual operators ensure service even if you don\'t speak Japanese.',
  },
  zh: {
    FAQ_TITLE: '常见问题',
    MORE_QUESTIONS: '还有其他问题？',

    FAQ_DOCUMENTS_TITLE: '租車需要什么檔案？',
    FAQ_DOCUMENTS_TEXT: '租車需要以下檔案：1）有效的駕駛執照（可能需要國際駕駛執照），2）租車人名義的信用卡（用於支付和押金），3）護照或身分證明檔案，4）任意保險證明（如有）。外籍人士需要國際駕駛執照（日內瓦公約成員國發行）或附有日文翻譯的駕駛執照才能在日本駕駛。豪華車型可能需要提供駕駛經驗證明。',

    FAQ_SERVICES_TITLE: '你們提供送車和取車服務嗎？',
    FAQ_SERVICES_TEXT: '是的，我們提供全面的送車和取車服務！我們可送車至成田機場、羽田機場、關西國際機場等主要機場，東京、大阪、京都市內的主要飯店，以及您的住宅或辦公室。服務費用根據距離和車型而異。機場送車時，我們的工作人員會在抵達大廳舉牌等候您。提前24小時預訂，我們也提供深夜和清晨送車服務。',

    FAQ_AGE_TITLE: '租車有年齡要求嗎？',
    FAQ_AGE_TEXT: '是的，有年齡要求。一般乘用車要求駕駛人年滿21歲且擁有1年以上駕駛經驗。豪華車和跑車要求年滿25歲且擁有3年以上駕駛經驗。部分大型車輛和頂級車型可能要求年滿30歲。25歲以下的駕駛人可能需要支付年輕駕駛人附加費。',

    FAQ_CANCEL_TITLE: '如果我需要取消預訂會怎麼樣？',
    FAQ_CANCEL_TEXT: '我們提供靈活的取消政策。租車開始前7天以上取消免費。提前4-6天取消收取租金的25%，提前2-3天收取50%，提前1天收取75%，當天取消收取100%。如遇天氣或航班延誤等不可抗力情況，提供證明檔案後我們可以個別處理。購買取消保險選項（租金的10%），可在取車前48小時內因任何理由免費取消。',

    FAQ_INSURANCE_TITLE: '保險如何運作？',
    FAQ_INSURANCE_TEXT: '所有租車費用都包含基本保險，涵蓋第三方責任險、車輛損害險和盜竊險。自付額根據車型不同，通常在5萬至20萬日圓之間。加購碰撞損害免責險（CDW）可將自付額降至零，並涵蓋輪胎、玻璃和底盤損害。個人意外保險（PAI）選項可涵蓋駕駛人和乘客的醫療費用。如果您有旅遊保險，請事先確認是否涵蓋租車。',

    FAQ_PAYMENT_TITLE: '你們接受哪些付款方式？',
    FAQ_PAYMENT_TEXT: '我們接受主要信用卡，包括Visa、Mastercard、American Express、JCB和Diners Club。由於押金要求，不接受金融卡。現金付款僅限已預訂的日本居民。您可以選擇預付或取車時付款。押金會暫時凍結在您的信用卡上，還車時如無問題，會在3-7個工作日內解除。企業客戶可以使用發票付款。',

    FAQ_FUEL_TITLE: '燃料政策是什麼？',
    FAQ_FUEL_TEXT: '我們採用滿油對滿油政策。車輛以滿油狀態交付，還車時也應加滿油。如果還車時未加滿，我們會以市場價格加20%服務費收取加油費用。或者，您可以選擇預付燃料選項（預付一整箱油的費用），還車時無需加油。電動車以滿電狀態交付，還車時請保持80%以上電量。',

    FAQ_MILEAGE_TITLE: '有里程限制嗎？',
    FAQ_MILEAGE_TEXT: '大多數租車方案包含無限里程。但是，部分特價方案和長期租賃（30天以上）每天限制200公里，超出部分每公里收費20日圓。豪華跑車可能每天限制150公里。如果計劃長途駕駛，請在預訂時選擇無限里程方案。',

    FAQ_ADDITIONAL_DRIVER_TITLE: '可以增加額外駕駛人嗎？',
    FAQ_ADDITIONAL_DRIVER_TEXT: '是的，可以登記額外駕駛人。第一位額外駕駛人每天收費1,500日圓，第二位起每天1,000日圓。配偶可以免費增加。所有額外駕駛人必須出示駕駛執照和身分證明，並符合與主要租車人相同的年齡和經驗要求。請注意，未登記的駕駛人駕駛車輛會導致保險失效。',

    FAQ_MODIFICATION_TITLE: '可以修改預訂內容嗎？',
    FAQ_MODIFICATION_TEXT: '是的，可以在租車開始前24小時內修改預訂。您可以升級車型、延長租期或增加選配設備。如果修改後費用增加，需支付差額。如果費用減少，退款按照我們的取消政策處理。租車期間也可以延長，但需視車輛供應情況而定。如需延長，請至少在預定還車時間前2小時聯絡我們。',

    FAQ_ROADSIDE_TITLE: '包含道路救援服務嗎？',
    FAQ_ROADSIDE_TEXT: '是的，所有租車都包含24小時365天道路救援服務。我們提供爆胎、電池沒電、鑰匙鎖在車內、燃料耗盡和拖吊服務。在日本全國任何地方，只需撥打專線電話，最近的服務據點就會前來協助。城市地區平均到達時間為30分鐘，郊區為60分鐘。非客戶過失的機械故障，我們會免費提供替代車輛。我們的多語言接線員隨時待命，即使您不會說日語也能安心使用。',
  },
})

langHelper.setLanguage(strings)
export { strings }
