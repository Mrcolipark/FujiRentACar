import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  ja: {
    PICK_UP_DATE: 'レンタル開始日',
    DROP_OFF_DATE: '返却日',
    DROP_OFF: '同じ場所に返却',
    MIN_PICK_UP_HOURS_ERROR: 'レンタル開始時刻は数時間後に設定してください',
    MIN_RENTAL_HOURS_ERROR: 'レンタル期間が短すぎます',
    INVALID_PICK_UP_TIME: '無効なレンタル開始時刻',
    INVALID_DROP_OFF_TIME: '無効な返却時刻',
  },
  en: {
    PICK_UP_DATE: 'Pick-up Date',
    DROP_OFF_DATE: 'Drop-off Date',
    DROP_OFF: 'Return to same location',
    MIN_PICK_UP_HOURS_ERROR: 'Pick-up time must be at least a few hours in the future',
    MIN_RENTAL_HOURS_ERROR: 'Rental duration is too short',
    INVALID_PICK_UP_TIME: 'Invalid pick-up time',
    INVALID_DROP_OFF_TIME: 'Invalid drop-off time',
  },
  zh: {
    PICK_UP_DATE: '取車日期',
    DROP_OFF_DATE: '还車日期',
    DROP_OFF: '在同一地点还車',
    MIN_PICK_UP_HOURS_ERROR: '取車时间必须至少提前几个小时預訂',
    MIN_RENTAL_HOURS_ERROR: '租赁时长过短',
    INVALID_PICK_UP_TIME: '无效的取車时间',
    INVALID_DROP_OFF_TIME: '无效的还車时间',
  },
})

langHelper.setLanguage(strings)
export { strings }
