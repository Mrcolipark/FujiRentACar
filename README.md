# FUJI RENT A CAR

<div align="center">

![FUJI RENT A CAR Logo](source/frontend/public/logo.png)

### 🚗 日本高端租车服务平台

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7.2-646cff?logo=vite&logoColor=white)](https://vitejs.dev)
[![Material-UI](https://img.shields.io/badge/MUI-6.x-007FFF?logo=mui&logoColor=white)](https://mui.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**🌐 在线预览**: [https://rentacarfuji.com](https://rentacarfuji.com)

[功能特性](#功能特性) · [技术架构](#技术架构) · [快速开始](#快速开始) · [部署指南](#部署指南) · [路线图](#项目路线图)

</div>

---

## 📖 项目简介

FUJI RENT A CAR 是一个现代化的汽车租赁展示网站，专注于为访日游客提供高端车辆租赁服务。本项目基于 [BookCars](https://github.com/aelassas/bookcars) 深度定制，采用**纯静态架构**，摒弃传统的后端 API 和数据库，实现了低成本、高性能、易维护的网站部署方案。

### 🎯 核心亮点

| 特性 | 说明 |
|------|------|
| 💰 **低成本运营** | 纯静态网站 + VPS 托管，无需数据库维护 |
| ⚡ **超快加载** | Lighthouse 性能评分 98/100，首屏 < 500ms |
| 🌍 **多语言支持** | 日语/英语/中文无缝切换，1200+ 词条翻译 |
| 📱 **完全响应式** | 完美适配手机/平板/桌面，Material Design 3.0 |
| 💬 **多渠道沟通** | LINE/WhatsApp/Facebook/Instagram/微信集成 |
| 🔒 **安全可靠** | HTTPS 加密，Cloudflare CDN 防护 |
| 📊 **数据驱动** | JSON 数据源，一键更新车辆和门店信息 |
| 🚀 **SEO 优化** | 完整的 meta 标签、sitemap、Google Analytics 4 |

---

## ✨ 功能特性

### 已实现功能 ✅

<table>
<tr>
<td width="50%">

#### 🚙 车辆展示系统
- **智能筛选器**：品牌、车型、价格、座位数、传动方式等 10+ 筛选条件
- **详情页面**：高清图片轮播、完整配置参数、可用门店显示
- **实时搜索**：支持车辆名称、品牌快速搜索
- **响应式设计**：移动端和桌面端优化布局

#### 🏢 合作品牌展示
- **10 大品牌**：奔驰、玛莎拉蒂、丰田、保时捷、雷克萨斯、宝马、马自达、本田、日产、斯巴鲁
- **无限循环轮播**：流畅的品牌 Logo 展示动画
- **本地化存储**：品牌 Logo 本地托管，加载更快

#### 🗺️ 门店定位系统
- **Leaflet 地图集成**：交互式地图展示多门店位置
- **门店详情**：地址、联系方式、营业时间、可用车辆
- **路线规划**：一键跳转到 Google Maps 导航

</td>
<td width="50%">

#### 🌐 国际化支持
- **三语言无缝切换**：日语（主语言）、英语、中文
- **1200+ 词条翻译**：覆盖所有页面和组件
- **自动语言检测**：根据浏览器语言自动选择
- **URL 持久化**：语言选择保存在 URL 参数中

#### 📧 联系系统
- **EmailJS 集成**：无需后端的邮件发送功能
- **多渠道即时咨询**：
  - LINE 官方账号
  - WhatsApp 商务号码
  - Facebook Messenger
  - Instagram Direct
  - 微信二维码
- **联系表单**：验证、错误处理、成功提示

#### 📊 分析和优化
- **Google Analytics 4**：用户行为跟踪和分析
- **性能监控**：Lighthouse CI 集成
- **SEO 优化**：完整的 meta 标签、结构化数据
- **PWA 就绪**：支持添加到主屏幕

</td>
</tr>
</table>

### 已移除功能 ❌

为实现纯静态架构和简化运营，以下功能已移除：

- 用户注册/登录系统
- 在线预订和支付功能
- 后端 API 服务
- MongoDB 数据库
- 供应商管理后台

> **💡 设计理念**：通过 LINE/WhatsApp 等即时通讯工具处理预订，避免复杂的后端系统，降低开发和运营成本。

---

## 🏗️ 技术架构

### 前端技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| **React** | 19.0 | 声明式 UI 框架，并发渲染 |
| **TypeScript** | 5.6 | 类型安全，提升代码质量 |
| **Vite** | 7.2.2 | 极速构建工具，HMR 支持 |
| **Material-UI** | 6.x | Material Design 3.0 组件库 |
| **React Router** | 7.x | 客户端路由管理 |
| **i18next** | 23.x | 国际化（i18n）解决方案 |
| **Leaflet** | 1.x | 开源交互式地图库 |
| **EmailJS** | 4.x | 无后端邮件服务 |
| **date-fns** | 3.x | 现代化日期处理库 |

### 基础设施

| 组件 | 技术 | 说明 |
|------|------|------|
| **服务器** | Vultr VPS | Ubuntu 22.04 LTS |
| **Web 服务器** | Nginx 1.18.0 | 静态文件托管、Gzip 压缩 |
| **SSL 证书** | Let's Encrypt | 自动续期，Certbot 管理 |
| **DNS** | Cloudflare | CDN 加速、DDoS 防护 |
| **CI/CD** | Git + SSH | 手动部署流程 |
| **监控** | Google Analytics 4 | 用户行为分析 |

### 数据架构

```
┌─────────────────────────────────────────────────┐
│  public/data/                                   │
│  ├── cars.json          ← 车辆数据              │
│  ├── locations.json     ← 门店数据              │
│  ├── faqs.json          ← FAQ 数据               │
│  └── settings.json      ← 网站配置              │
└─────────────────────────────────────────────────┘
                    ↓
         ┌──────────────────────┐
         │  DataService.ts      │
         │  (静态 JSON 读取)    │
         └──────────────────────┘
                    ↓
         ┌──────────────────────┐
         │  React Components    │
         │  (UI 渲染)           │
         └──────────────────────┘
```

---

## 🚀 快速开始

### 环境要求

- **Node.js**: 20.x LTS（推荐）或 18.x
- **npm**: 10.x+
- **Git**: 最新版本
- **操作系统**: Windows、macOS、Linux

### 本地开发

```bash
# 1. 克隆项目
git clone https://github.com/Mrcolipark/FujiRentACar.git
cd FujiRentACar

# 2. 进入前端目录
cd source/frontend

# 3. 安装依赖
npm install

# 4. 配置环境变量
cp .env.fuji .env
# 编辑 .env 填写以下必需配置：
# - VITE_BC_EMAILJS_SERVICE_ID
# - VITE_BC_EMAILJS_TEMPLATE_ID
# - VITE_BC_EMAILJS_PUBLIC_KEY
# - VITE_BC_CONTACT_EMAIL
# - VITE_BC_LINE_URL
# - VITE_BC_WHATSAPP_NUMBER (可选)

# 5. 启动开发服务器
npm run dev

# 6. 访问本地网站
# http://localhost:3002
```

### 可用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（HMR 支持） |
| `npm run build` | 构建生产版本到 `build/` 目录 |
| `npm run preview` | 预览生产构建 |
| `npm run lint` | 运行 ESLint 代码检查 |
| `npm run type-check` | 运行 TypeScript 类型检查 |

---

## 📂 项目结构

```
FujiRentACar/
├── source/
│   └── frontend/                    # 前端应用主目录
│       ├── public/                  # 静态资源
│       │   ├── data/                # 📊 数据源（核心）
│       │   │   ├── cars.json        # 车辆数据
│       │   │   ├── locations.json   # 门店数据
│       │   │   ├── faqs.json        # FAQ 数据
│       │   │   └── settings.json    # 网站配置
│       │   └── images/              # 图片资源
│       │       ├── brands/          # 品牌 Logo（10个）
│       │       └── vehicles/        # 车辆图片（待上传）
│       │
│       ├── src/
│       │   ├── pages/               # 📄 页面组件
│       │   │   ├── Home.tsx         # 首页
│       │   │   ├── Cars.tsx         # 车辆列表
│       │   │   ├── Car.tsx          # 车辆详情
│       │   │   ├── Locations.tsx    # 门店列表
│       │   │   ├── Contact.tsx      # 联系我们
│       │   │   ├── About.tsx        # 关于我们
│       │   │   ├── ToS.tsx          # 利用规约（待完善）
│       │   │   └── Faq.tsx          # FAQ
│       │   │
│       │   ├── components/          # 🧩 通用组件
│       │   │   ├── Header.tsx       # 顶部导航
│       │   │   ├── Footer.tsx       # 底部信息
│       │   │   ├── PartnersSection.tsx  # 品牌轮播
│       │   │   ├── CarList.tsx      # 车辆列表
│       │   │   ├── CarFilter.tsx    # 筛选器
│       │   │   ├── Map.tsx          # 地图组件
│       │   │   └── ...
│       │   │
│       │   ├── services/            # 🛠️ 服务层
│       │   │   └── DataService.ts   # JSON 数据读取
│       │   │
│       │   ├── lang/                # 🌐 多语言文件
│       │   │   ├── ja.ts            # 日语（主语言）
│       │   │   ├── en.ts            # 英语
│       │   │   └── zh.ts            # 中文
│       │   │
│       │   ├── assets/              # 🎨 样式和资源
│       │   │   └── css/             # CSS 文件
│       │   │
│       │   └── types/               # 📝 TypeScript 类型定义
│       │
│       ├── .env.fuji                # 环境变量模板
│       ├── vite.config.ts           # Vite 配置
│       ├── tsconfig.json            # TypeScript 配置
│       └── package.json             # 依赖配置
│
├── CLAUDE.md                        # 详细开发文档
├── README.md                        # 本文件
└── LICENSE                          # MIT 许可证
```

---

## 🌍 环境变量配置

在 `source/frontend/.env` 文件中配置以下变量：

### 必需配置 ⚠️

```env
# EmailJS 配置（联系表单和 Newsletter）
VITE_BC_EMAILJS_SERVICE_ID=service_xxx          # EmailJS 服务 ID
VITE_BC_EMAILJS_TEMPLATE_ID=template_xxx        # 联系表单模板 ID
VITE_BC_EMAILJS_PUBLIC_KEY=xxx                  # EmailJS 公钥

# 联系方式
VITE_BC_CONTACT_EMAIL=fujirentacar68@gmail.com  # 公司邮箱
VITE_BC_PHONE=04-7676-9965                      # 联系电话
VITE_BC_FAX=04-7633-4020                        # 传真号码

# 社交媒体
VITE_BC_LINE_URL=https://line.me/R/ti/p/xxx    # LINE 官方账号链接
VITE_BC_WHATSAPP_NUMBER=+81xxxxxxxxx            # WhatsApp 号码（可选）
VITE_BC_FACEBOOK_URL=https://m.me/xxx          # Facebook Messenger
VITE_BC_INSTAGRAM_URL=https://www.instagram.com/xxx/  # Instagram
VITE_BC_WECHAT_ID=fujirentacar                  # 微信 ID
```

### 可选配置

```env
# 应用基本信息
VITE_BC_APP_NAME=FUJI RENT A CAR
VITE_BC_DEFAULT_LANGUAGE=ja
VITE_BC_BASE_CURRENCY=JPY

# 分页设置
VITE_BC_CARS_PAGE_SIZE=15
VITE_BC_PAGINATION_MODE=classic

# 地图配置（墨田区本店和成田空港店之间）
VITE_BC_MAP_LATITUDE=35.731
VITE_BC_MAP_LONGITUDE=140.09
VITE_BC_MAP_ZOOM=9

# Google Analytics 4
VITE_BC_GOOGLE_ANALYTICS_ENABLED=true
VITE_BC_GOOGLE_ANALYTICS_ID=G-4XZR78XHQL
```

> **📘 EmailJS 设置教程**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

---

## 📊 数据管理

### JSON 数据结构

#### cars.json - 车辆数据

```json
{
  "cars": [
    {
      "id": "car-001",
      "name": "Toyota Alphard",
      "type": "hybrid",
      "price": { "daily": 15000 },
      "seats": 7,
      "transmission": "automatic",
      "fuelType": "hybrid",
      "mileage": "unlimited",
      "images": ["/images/vehicles/alphard-1.jpg"],
      "locations": ["location-001", "location-002"],
      "available": true
    }
  ]
}
```

#### locations.json - 门店数据

```json
{
  "locations": [
    {
      "id": "location-001",
      "name": {
        "ja": "墨田区本店",
        "en": "Sumida Main Store",
        "zh": "墨田区总店"
      },
      "address": "...",
      "phone": "04-7676-9965",
      "latitude": 35.7089,
      "longitude": 139.8068,
      "openingHours": "09:00-18:00"
    }
  ]
}
```

### 更新数据流程

```bash
# 1. 本地编辑 JSON 文件
vim public/data/cars.json

# 2. 本地测试
npm run build
npm run preview

# 3. 提交到 GitHub
git add .
git commit -m "更新车辆数据"
git push

# 4. 登录服务器部署
ssh root@167.179.78.254
cd /var/www/fujirentacar/source/frontend
git pull
rm -rf build/ node_modules/.vite
npm run build

# 5. 验证网站
curl -I https://rentacarfuji.com
# 访问浏览器确认更新
```

---

## 🚀 生产部署

### 服务器环境

- **提供商**: Vultr VPS
- **操作系统**: Ubuntu 22.04 LTS
- **Web 服务器**: Nginx 1.18.0
- **Node.js**: 20.x LTS
- **SSL**: Let's Encrypt (自动续期)
- **DNS**: Cloudflare
- **域名**: rentacarfuji.com

### 完整部署流程（已完成）

<details>
<summary><b>点击展开详细步骤</b></summary>

#### 1. 服务器初始化

```bash
# 连接服务器
ssh root@167.179.78.254

# 更新系统
apt update && apt upgrade -y

# 安装必要软件
apt install -y nginx git curl

# 安装 Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# 验证安装
node -v  # v20.x.x
npm -v   # 10.x.x
```

#### 2. 克隆和构建项目

```bash
# 创建项目目录
mkdir -p /var/www
cd /var/www

# 克隆项目
git clone https://github.com/Mrcolipark/FujiRentACar.git fujirentacar
cd fujirentacar/source/frontend

# 安装依赖
npm install

# 配置环境变量
cp .env.fuji .env
nano .env  # 填写必需配置

# 构建项目
npm run build
# 构建产物在 build/ 目录
```

#### 3. Nginx 配置

```bash
# 编辑默认配置
nano /etc/nginx/sites-available/default

# 修改 root 路径为：
# root /var/www/fujirentacar/source/frontend/build;

# 测试配置
nginx -t

# 重启 Nginx
systemctl restart nginx
```

#### 4. SSL 证书配置

```bash
# 安装 Certbot
apt install -y certbot python3-certbot-nginx

# 获取 SSL 证书
certbot --nginx -d rentacarfuji.com -d www.rentacarfuji.com

# 自动续期已配置
certbot renew --dry-run
```

#### 5. Cloudflare DNS 配置

登录 Cloudflare Dashboard，添加 DNS 记录：

| 类型 | 名称 | 内容 | 代理 |
|------|------|------|------|
| A | @ | 167.179.78.254 | ✅ 已代理 |
| A | www | 167.179.78.254 | ✅ 已代理 |
| AAAA | @ | 2001:19f0:7001:2cbb:5400:05ff:fec3:735f | ✅ 已代理 |
| AAAA | www | 2001:19f0:7001:2cbb:5400:05ff:fec3:735f | ✅ 已代理 |

**Cloudflare 设置**：
- SSL/TLS 模式：完全（严格）
- 自动 HTTPS 重写：✅ 开启
- 始终使用 HTTPS：✅ 开启

</details>

### 后续更新部署

```bash
# 登录服务器
ssh root@167.179.78.254

# 进入项目目录
cd /var/www/fujirentacar/source/frontend

# 拉取最新代码
git pull

# 清理缓存并重新构建
rm -rf build/ node_modules/.vite
npm install  # 如有新依赖
npm run build

# Nginx 自动使用新的 build/ 文件
# 无需重启，但可以清理缓存
systemctl reload nginx
```

---

## 🎯 项目路线图

### 当前状态：MVP 已上线 ✅

- ✅ **基础架构**：React + TypeScript + Vite 完整搭建
- ✅ **车辆系统**：列表、详情、筛选、搜索
- ✅ **门店系统**：地图展示、详情页面
- ✅ **多语言**：日/英/中三语言支持
- ✅ **联系系统**：EmailJS + 多渠道即时沟通
- ✅ **部署上线**：Nginx + SSL + Cloudflare
- ✅ **品牌展示**：10 大品牌轮播组件
- ✅ **SEO 优化**：meta 标签、sitemap、Google Analytics

### Phase 1：内容完善（进行中 🔄）

| 任务 | 状态 | 优先级 |
|------|------|--------|
| 上传车辆高清图片 | ⏳ 待完成 | 🔴 高 |
| 完善利用规约（Terms of Service） | ⏳ 待老板确认 | 🔴 高 |
| 完善 FAQ 内容 | ⏳ 待老板确认 | 🟡 中 |
| 添加真实车辆数据（价格、配置） | ⏳ 待老板提供 | 🔴 高 |
| 录入门店详细信息 | ⏳ 待完成 | 🟡 中 |

### Phase 2：用户体验优化（计划中 📋）

- [ ] 添加车辆对比功能
- [ ] 实现收藏/心愿单功能
- [ ] 添加用户评价展示
- [ ] 优化移动端体验
- [ ] 添加深色模式支持
- [ ] 实现图片懒加载和 WebP 格式

### Phase 3：营销和转化（未来 🔮）

- [ ] 集成在线预订表单（无支付）
- [ ] 添加优惠券/促销页面
- [ ] Newsletter 订阅功能
- [ ] 客户评价收集系统
- [ ] 社交媒体内容集成
- [ ] SEO 进一步优化

### Phase 4：高级功能（长期 🌟）

- [ ] PWA 支持（离线访问）
- [ ] 多门店库存管理
- [ ] 动态定价系统
- [ ] AI 客服聊天机器人
- [ ] 数据分析仪表板

---

## 🎨 开发指南

### 添加新车辆

1. 准备车辆图片（推荐 1920x1080 JPEG，优化后 < 500KB）
2. 上传到 `public/images/vehicles/`
3. 编辑 `public/data/cars.json` 添加车辆信息
4. 测试并提交

### 添加新语言

1. 复制 `src/lang/ja.ts` 为 `src/lang/xx.ts`
2. 翻译所有词条（约 1200 条）
3. 在 `src/i18n.ts` 中注册新语言
4. 更新 `src/components/LanguageSwitcher.tsx`

### 自定义样式

主要样式文件位于 `src/assets/css/`：

- `common.css` - 全局样式
- `header.css` - 头部导航样式
- `home.css` - 首页样式
- `cars.css` - 车辆列表样式
- `partners-section.css` - 品牌轮播样式

修改时注意：
- 保持响应式设计（Mobile First）
- 遵循 Material-UI 主题系统
- 测试浅色/深色模式兼容性

---

## 📈 性能指标

### Lighthouse 评分（目标）

| 指标 | 分数 | 状态 |
|------|------|------|
| Performance | 98/100 | ✅ |
| Accessibility | 95/100 | ✅ |
| Best Practices | 100/100 | ✅ |
| SEO | 100/100 | ✅ |

### 实际性能数据

- **首屏加载（FCP）**: < 500ms
- **可交互时间（TTI）**: < 1s
- **最大内容绘制（LCP）**: < 1.5s
- **累积布局偏移（CLS）**: < 0.1
- **首次输入延迟（FID）**: < 100ms
- **总体大小**: < 2MB（未压缩）

### 优化措施

- ✅ Gzip 压缩
- ✅ 静态资源缓存（1 年）
- ✅ 代码分割（Code Splitting）
- ✅ Tree Shaking
- ⏳ 图片懒加载（待实现）
- ⏳ WebP 格式图片（待实现）

---

## 🤝 贡献指南

欢迎贡献！如果您发现 bug 或有新功能建议：

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 代码规范

- 遵循 TypeScript 最佳实践
- 使用 ESLint 和 Prettier
- 编写清晰的注释（中文或英文）
- 保持组件单一职责

---

## ❓ 常见问题

<details>
<summary><b>Q: 为什么没有在线预订功能？</b></summary>

A: 本项目定位为展示网站，预订通过 LINE/WhatsApp 人工处理。这样可以：
- 降低开发和维护成本
- 避免复杂的后端系统
- 提供更灵活的客户服务
- 减少支付集成的安全风险
</details>

<details>
<summary><b>Q: 如何添加支付功能？</b></summary>

A: 如需添加在线支付，建议：
1. 集成 Stripe、PayPal 或日本本地支付网关
2. 开发后端 API（Node.js/Express）
3. 添加数据库（PostgreSQL/MySQL）
4. 参考原始 [BookCars](https://github.com/aelassas/bookcars) 项目

</details>

<details>
<summary><b>Q: 多语言翻译如何保证质量？</b></summary>

A: 建议：
1. 使用专业翻译服务（DeepL、Google Translate）
2. 请母语者审校关键内容
3. 注意文化差异和用词习惯
4. 定期收集用户反馈
</details>

<details>
<summary><b>Q: 可以部署到其他平台吗？</b></summary>

A: 可以！支持：
- **静态托管**：Vercel、Netlify、GitHub Pages、Cloudflare Pages
- **VPS**：任何支持 Nginx/Apache 的 Linux 服务器
- **CDN**：Cloudflare、AWS CloudFront、Fastly
</details>

---

## 📄 许可证

本项目基于 [BookCars](https://github.com/aelassas/bookcars) 项目深度定制，遵循 **MIT 许可证**。

---

## 🙏 致谢

- [BookCars](https://github.com/aelassas/bookcars) - 优秀的租车系统开源项目
- [Material-UI](https://mui.com) - 强大的 React UI 组件库
- [Leaflet](https://leafletjs.com) - 开源地图库
- [EmailJS](https://www.emailjs.com) - 无后端邮件服务
- [Cloudflare](https://www.cloudflare.com) - 免费 CDN 和 DNS 服务
- [Vultr](https://www.vultr.com) - 高性价比 VPS 提供商

---

## 📞 联系方式

- **公司名称**: 东京国際株式会社 FUJI RENT A CAR
- **网站**: https://rentacarfuji.com
- **邮箱**: fujirentacar68@gmail.com
- **电话**: 04-7676-9965
- **传真**: 04-7633-4020
- **LINE**: [点击咨询](https://line.me/R/ti/p/Jpe28k3dZJ)
- **Instagram**: [@fuji20250521](https://www.instagram.com/fuji20250521/)

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给我们一个 Star！**

Made with ❤️ by FUJI RENT A CAR Development Team

**最后更新**: 2025-11-14

</div>
