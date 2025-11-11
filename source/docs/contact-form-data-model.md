# 联系表单数据模型文档

## 概述

联系表单支持4种类型的咨询，每种类型有不同的数据结构。所有表单都有基础联系信息，然后根据选择的类型包含特定的字段。

---

## 1. 车辆预订表单 (Vehicle Booking)

### 用户填写示例

```
联系类型: 车辆预订
姓名: 山田太郎
邮箱: yamada@example.com
电话: +81 90-1234-5678
联系方式: LINE

车辆选择: Toyota Alphard 40
取车日期: 2025-12-20
取车时间: 10:00
上门送车: ✓ (勾选)
送车地址: 東京都新宿区西新宿1-1-1
还车日期: 2025-12-25
还车时间: 18:00
上门取车: ✗ (未勾选)
还车地点: 成田空港店
乘客人数: 5
额外驾驶: 1
需要保险: ✓ (勾选)
婴儿座椅: 2
ETC卡: ✓ (勾选)
手机支架: ✓ (勾选)
特别要求: 希望提供中文GPS导航
```

### 输出的JSON数据

```json
{
  "contactType": "vehicle_booking",
  "name": "山田太郎",
  "email": "yamada@example.com",
  "phone": "+81 90-1234-5678",
  "preferredContactMethod": "line",
  "vehicleBooking": {
    "vehicleId": "toyota-alphard-40",
    "vehicleName": "Toyota Alphard 40",
    "pickupDate": "2025-12-20",
    "pickupTime": "10:00",
    "pickupLocation": "東京都新宿区西新宿1-1-1",
    "homeDeliveryPickup": true,
    "pickupAddress": "東京都新宿区西新宿1-1-1",
    "returnDate": "2025-12-25",
    "returnTime": "18:00",
    "returnLocation": "成田空港店",
    "homeDeliveryReturn": false,
    "returnAddress": "",
    "sameLocation": false,
    "passengers": 5,
    "additionalDrivers": 1,
    "insurance": true,
    "babySeats": 2,
    "etc": true,
    "phoneHolder": true,
    "specialRequests": "希望提供中文GPS导航"
  }
}
```

### 发送到EmailJS的模板参数

```json
{
  "to_email": "rentacarfuji@gmail.com",
  "contact_type": "Vehicle booking",
  "name": "山田太郎",
  "email": "yamada@example.com",
  "phone": "+81 90-1234-5678",
  "preferred_contact": "Line",
  "vehicle_name": "Toyota Alphard 40",
  "pickup_date": "2025-12-20",
  "pickup_time": "10:00",
  "pickup_location": "Home Delivery: 東京都新宿区西新宿1-1-1",
  "home_delivery_pickup": "Yes",
  "return_date": "2025-12-25",
  "return_time": "18:00",
  "return_location": "成田空港店",
  "home_delivery_return": "No",
  "passengers": 5,
  "additional_drivers": 1,
  "insurance_required": "Yes",
  "baby_seats": 2,
  "etc_card": "Yes",
  "phone_holder": "Yes",
  "special_requests": "希望提供中文GPS导航"
}
```

---

## 2. 一般咨询表单 (General Inquiry)

### 用户填写示例

```
联系类型: 一般咨询
姓名: 佐藤花子
邮箱: sato@example.com
电话: +81 80-5678-1234
联系方式: 邮件

咨询类别: 价格咨询
主题: 长期租赁优惠
留言: 我们公司想要租用5辆车，租期3个月，请问有什么优惠政策吗？
```

### 输出的JSON数据

```json
{
  "contactType": "general_inquiry",
  "name": "佐藤花子",
  "email": "sato@example.com",
  "phone": "+81 80-5678-1234",
  "preferredContactMethod": "email",
  "generalInquiry": {
    "category": "pricing",
    "subject": "長期レンタル割引について",
    "message": "当社では5台の車を3ヶ月間レンタルしたいと考えています。何か割引制度はありますか？"
  }
}
```

### 发送到EmailJS的模板参数

```json
{
  "to_email": "rentacarfuji@gmail.com",
  "contact_type": "General inquiry",
  "name": "佐藤花子",
  "email": "sato@example.com",
  "phone": "+81 80-5678-1234",
  "preferred_contact": "Email",
  "inquiry_category": "Pricing",
  "subject": "長期レンタル割引について",
  "message": "当社では5台の車を3ヶ月間レンタルしたいと考えています。何か割引制度はありますか？"
}
```

---

## 3. 技术支持表单 (Technical Support)

### 用户填写示例

```
联系类型: 技术支持
姓名: 田中一郎
邮箱: tanaka@example.com
电话: +81 70-9999-8888
联系方式: 电话

问题类型: 预订问题
订单号: FJ-20251115-001
紧急程度: 高
问题描述: 我在网上预订了车辆，但是一直没有收到确认邮件，预订编号是FJ-20251115-001，请尽快帮我确认。
```

### 输出的JSON数据

```json
{
  "contactType": "technical_support",
  "name": "田中一郎",
  "email": "tanaka@example.com",
  "phone": "+81 70-9999-8888",
  "preferredContactMethod": "phone",
  "technicalSupport": {
    "issueType": "booking_issue",
    "orderNumber": "FJ-20251115-001",
    "urgency": "high",
    "description": "オンラインで車を予約しましたが、確認メールが届きません。予約番号はFJ-20251115-001です。至急確認をお願いします。"
  }
}
```

### 发送到EmailJS的模板参数

```json
{
  "to_email": "rentacarfuji@gmail.com",
  "contact_type": "Technical support",
  "name": "田中一郎",
  "email": "tanaka@example.com",
  "phone": "+81 70-9999-8888",
  "preferred_contact": "Phone",
  "issue_type": "Booking issue",
  "order_number": "FJ-20251115-001",
  "urgency": "HIGH",
  "description": "オンラインで車を予約しましたが、確認メールが届きません。予約番号はFJ-20251115-001です。至急確認をお願いします。"
}
```

---

## 4. 企业合作表单 (Business Partnership)

### 用户填写示例

```
联系类型: 企业合作
姓名: 李明
邮箱: li@travel-agency.jp
电话: +81 3-1234-5678
联系方式: WhatsApp

公司名称: 東京観光株式会社
联系人: 李明
职位: 采购经理
合作类型: 旅行社长期合作
公司网站: https://tokyo-travel.jp
合作说明: 我们是一家专注于接待中国游客的旅行社，每年有约500组客户需要租车服务，希望建立长期合作关系。
```

### 输出的JSON数据

```json
{
  "contactType": "business_partnership",
  "name": "李明",
  "email": "li@travel-agency.jp",
  "phone": "+81 3-1234-5678",
  "preferredContactMethod": "whatsapp",
  "businessPartnership": {
    "companyName": "東京観光株式会社",
    "contactPerson": "李明",
    "position": "購買マネージャー",
    "partnershipType": "旅行会社との長期提携",
    "website": "https://tokyo-travel.jp",
    "description": "中国人観光客向けの旅行会社です。年間約500組のお客様がレンタカーサービスを必要としています。長期的な協力関係を築きたいと考えています。"
  }
}
```

### 发送到EmailJS的模板参数

```json
{
  "to_email": "rentacarfuji@gmail.com",
  "contact_type": "Business partnership",
  "name": "李明",
  "email": "li@travel-agency.jp",
  "phone": "+81 3-1234-5678",
  "preferred_contact": "Whatsapp",
  "company_name": "東京観光株式会社",
  "contact_person": "李明",
  "position": "購買マネージャー",
  "partnership_type": "旅行会社との長期提携",
  "website": "https://tokyo-travel.jp",
  "business_description": "中国人観光客向けの旅行会社です。年間約500組のお客様がレンタカーサービスを必要としています。長期的な協力関係を築きたいと考えています。"
}
```

---

## 数据流程

```
用户填写表单
    ↓
React Hook Form收集数据
    ↓
Zod验证数据格式和必填项
    ↓
EmailService格式化数据
    ↓
EmailJS发送邮件到 rentacarfuji@gmail.com
    ↓
系统显示成功消息
```

---

## 验证规则

### 基础信息验证
- **姓名**: 至少2个字符
- **邮箱**: 有效的邮箱格式
- **电话**: 国际格式，包含国家代码（如 +81）
- **联系方式**: 必选（邮件/电话/WhatsApp/LINE）

### 车辆预订特殊验证
- **还车时间**: 必须晚于取车时间
- **上门送车**: 如果勾选，必须填写送车地址
- **上门取车**: 如果勾选，必须填写取车地址
- **乘客人数**: 1-12人
- **额外驾驶**: 0-5人
- **婴儿座椅**: 0-4个

### 一般咨询验证
- **主题**: 5-100个字符
- **留言**: 20-2000个字符

### 技术支持验证
- **问题描述**: 20-2000个字符

### 企业合作验证
- **公司名称**: 2-100个字符
- **合作说明**: 20-2000个字符
- **网站**: 有效的URL格式（可选）

---

## 控制台输出示例

当用户提交表单时，在浏览器控制台会看到：

```javascript
📝 提交表单数据: {
  contactType: "vehicle_booking",
  name: "山田太郎",
  email: "yamada@example.com",
  phone: "+81 90-1234-5678",
  preferredContactMethod: "line",
  vehicleBooking: {
    vehicleId: "toyota-alphard-40",
    vehicleName: "Toyota Alphard 40",
    pickupDate: "2025-12-20",
    pickupTime: "10:00",
    homeDeliveryPickup: true,
    pickupAddress: "東京都新宿区西新宿1-1-1",
    // ... 其他字段
  }
}

📧 发送邮件: {
  serviceId: "service_xxx",
  templateId: "template_booking",
  params: { /* EmailJS模板参数 */ }
}

✅ 邮件发送成功: { status: 200, text: "OK" }
```

---

## 开发模式

在开发环境中（`NODE_ENV === 'development'`），如果EmailJS未配置：

```javascript
📧 [DEV MODE] 邮件数据: {
  contactType: "vehicle_booking",
  name: "山田太郎",
  // ... 完整的表单数据
}

✅ 开发模式：邮件已模拟发送
```

---

## 生产环境配置

需要在环境变量中配置：

```env
VITE_BC_EMAILJS_ENABLED=true
VITE_BC_EMAILJS_SERVICE_ID=service_xxx
VITE_BC_EMAILJS_TEMPLATE_ID=template_xxx
VITE_BC_EMAILJS_PUBLIC_KEY=your_public_key
VITE_BC_CONTACT_EMAIL=rentacarfuji@gmail.com
```
