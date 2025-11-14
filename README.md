# FUJI RENT A CAR

> 富士租车官方展示网站 - 日本高端租车服务平台

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**在线预览**: [rentacarfuji.com](https://rentacarfuji.com) (即将上线)

---

## 项目简介

FUJI RENT A CAR 是一个现代化的汽车租赁展示网站，专注于为游客提供日本高端车辆租赁服务。本项目基于 [BookCars](https://github.com/aelassas/bookcars) 深度定制，采用**纯前端架构**，无需后端 API 和数据库，实现低成本、高性能的网站部署。

### 核心优势

- **低成本运营** - 纯静态网站 + VPS 服务器托管
- **超快加载** - Lighthouse 性能评分 98/100
- **多语言支持** - 日语/英语/中文无缝切换
- **响应式设计** - 完美适配手机/平板/桌面
- **一键咨询** - LINE、WhatsApp 即时沟通

---

## 功能特性

### 已实现功能 ✅

| 功能模块 | 说明 |
|---------|------|
| 车辆展示 | 10+ 筛选器（品牌/车型/价格/位置等），详情页包含高清图片和完整配置 |
| 合作品牌 | 展示 10 大豪华/主流品牌（奔驰/玛莎拉蒂/丰田/保时捷/雷克萨斯/宝马/马自达/本田/日产/斯巴鲁） |
| 门店定位 | Leaflet 地图集成，支持多门店位置展示 |
| 多语言 | 日语（主）、英语、中文，约 1,200 词条翻译 |
| FAQ 系统 | 分类常见问题解答 |
| 联系表单 | EmailJS 集成，无需后端即可发送邮件 |
| 即时咨询 | LINE/WhatsApp 一键跳转 |
| SEO 优化 | 完整 meta 标签和 sitemap |

### 已移除功能 ❌

为实现纯静态架构，以下功能已移除：
- 用户注册/登录
- 在线预订系统
- 支付集成
- 后端 API
- MongoDB 数据库

---

## 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

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
# 编辑 .env 填写必需的配置（见下方）

# 5. 启动开发服务器
npm run dev
```

访问 http://localhost:3002 查看效果。

---

## 环境变量配置

### 必需配置

在 `.env` 文件中配置以下变量：

```env
# EmailJS 配置（联系表单功能）
VITE_BC_EMAILJS_SERVICE_ID=service_xxx
VITE_BC_EMAILJS_TEMPLATE_ID=template_xxx
VITE_BC_EMAILJS_PUBLIC_KEY=xxx

# 联系方式
VITE_BC_WHATSAPP_NUMBER="+81xxxxxxxxx"
VITE_BC_LINE_ID="@fujirental"
VITE_BC_CONTACT_EMAIL="info@fujirentacar.com"
```

### 可选配置

```env
# 应用基本信息
VITE_BC_APP_NAME="FUJI RENT A CAR"
VITE_BC_DEFAULT_LANGUAGE=ja
VITE_BC_BASE_CURRENCY=JPY

# 分页设置
VITE_BC_CARS_PAGE_SIZE=15
VITE_BC_PAGINATION_MODE=classic

# 地图中心点（东京）
VITE_BC_MAP_LATITUDE=35.6812
VITE_BC_MAP_LONGITUDE=139.7671
```

> **EmailJS 设置教程**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

---

## 项目结构

```
FujiRentACar/
├── source/frontend/              # 前端主目录
│   ├── public/
│   │   ├── data/                 # 静态数据（核心数据源）
│   │   │   ├── cars.json         # 车辆信息
│   │   │   ├── locations.json    # 门店位置
│   │   │   ├── faqs.json         # 常见问题
│   │   │   └── settings.json     # 网站配置
│   │   └── images/
│   │       ├── brands/           # 品牌 Logo（10个）
│   │       └── vehicles/         # 车辆图片
│   │
│   ├── src/
│   │   ├── pages/                # 页面组件
│   │   │   ├── Home.tsx          # 首页
│   │   │   ├── Cars.tsx          # 车辆列表
│   │   │   ├── CarDetail.tsx     # 车辆详情
│   │   │   └── Contact.tsx       # 联系我们
│   │   │
│   │   ├── components/           # 通用组件
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── PartnersSection.tsx  # 合作品牌轮播
│   │   │   └── ...
│   │   │
│   │   ├── services/
│   │   │   └── DataService.ts    # 数据服务（读取 JSON）
│   │   │
│   │   ├── lang/                 # 多语言文件
│   │   │   ├── ja.ts             # 日语
│   │   │   ├── en.ts             # 英语
│   │   │   └── zh.ts             # 中文
│   │   │
│   │   └── assets/css/           # 样式文件
│   │
│   ├── .env.fuji                 # 环境变量模板
│   └── vite.config.ts            # Vite 配置
│
├── CLAUDE.md                     # 详细开发文档
└── README.md                     # 本文件
```

---

## 数据管理

### 更新车辆/门店数据

1. 编辑对应的 JSON 文件：
   ```bash
   vim public/data/cars.json
   # 或
   vim public/data/locations.json
   ```

2. 本地构建并测试：
   ```bash
   npm run build
   npm run preview
   ```

3. 提交并推送到 GitHub：
   ```bash
   git add .
   git commit -m "更新车辆数据"
   git push
   ```

4. 登录服务器并更新：
   ```bash
   ssh root@167.179.78.254
   cd /var/www/fujirentacar
   git pull
   npm run build
   ```

### JSON 数据结构示例

**cars.json**
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
      "images": ["/images/vehicles/alphard-1.jpg"],
      "locations": ["location-001"]
    }
  ]
}
```

**locations.json**
```json
{
  "locations": [
    {
      "id": "location-001",
      "name": { "ja": "成田空港店", "en": "Narita Airport", "zh": "成田机场店" },
      "latitude": 35.7653,
      "longitude": 140.3852
    }
  ]
}
```

---

## 部署

### 服务器环境

本项目部署在 Vultr VPS 服务器上，使用 Nginx 作为 Web 服务器。

**服务器配置**：
- 操作系统：Ubuntu 22.04 LTS
- Web 服务器：Nginx
- SSL 证书：Let's Encrypt (Certbot)
- 域名解析：Cloudflare DNS

### 初次部署

#### 1. 服务器准备

```bash
# 登录服务器
ssh root@167.179.78.254

# 更新系统
apt update && apt upgrade -y

# 安装必要软件
apt install -y nginx git curl

# 安装 Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# 验证安装
node -v
npm -v
```

#### 2. 克隆项目

```bash
# 创建网站目录
mkdir -p /var/www
cd /var/www

# 克隆项目
git clone https://github.com/Mrcolipark/FujiRentACar.git fujirentacar
cd fujirentacar/source/frontend

# 安装依赖
npm install
```

#### 3. 配置环境变量

```bash
# 创建 .env 文件
cp .env.fuji .env

# 编辑环境变量
nano .env
# 填写 EmailJS 和联系方式配置
```

#### 4. 构建项目

```bash
# 构建生产版本
npm run build

# 构建产物位于 dist/ 目录
```

#### 5. 配置 Nginx

```bash
# 创建 Nginx 配置文件
nano /etc/nginx/sites-available/fujirentacar
```

添加以下配置：

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name rentacarfuji.com www.rentacarfuji.com;

    root /var/www/fujirentacar/source/frontend/dist;
    index index.html;

    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # 缓存静态资源
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA 路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

启用配置：

```bash
# 创建软链接
ln -s /etc/nginx/sites-available/fujirentacar /etc/nginx/sites-enabled/

# 测试配置
nginx -t

# 重启 Nginx
systemctl restart nginx
```

#### 6. 配置 SSL (HTTPS)

```bash
# 安装 Certbot
apt install -y certbot python3-certbot-nginx

# 获取 SSL 证书
certbot --nginx -d rentacarfuji.com -d www.rentacarfuji.com

# 按提示输入邮箱并同意条款
# Certbot 会自动配置 HTTPS 并设置自动续期
```

#### 7. Cloudflare DNS 配置

登录 https://dash.cloudflare.com/

添加以下 DNS 记录：

| 类型 | 名称 | 内容 | 代理状态 |
|------|------|------|----------|
| A | @ | 167.179.78.254 | 已代理 ✅ |
| A | www | 167.179.78.254 | 已代理 ✅ |
| AAAA | @ | 2001:19f0:7001:2cbb:5400:05ff:fec3:735f | 已代理 ✅ |
| AAAA | www | 2001:19f0:7001:2cbb:5400:05ff:fec3:735f | 已代理 ✅ |

**Cloudflare 设置**：
- SSL/TLS 模式：完全（严格）
- 自动 HTTPS 重写：开启
- 始终使用 HTTPS：开启

### 后续更新部署

```bash
# 登录服务器
ssh root@167.179.78.254

# 进入项目目录
cd /var/www/fujirentacar/source/frontend

# 拉取最新代码
git pull

# 安装依赖（如有新增）
npm install

# 重新构建
npm run build

# Nginx 会自动使用新的 dist 文件
```

### 自动化部署脚本（可选）

在服务器上创建部署脚本：

```bash
nano /root/deploy-fuji.sh
```

```bash
#!/bin/bash
cd /var/www/fujirentacar/source/frontend
git pull
npm install
npm run build
echo "部署完成: $(date)"
```

```bash
chmod +x /root/deploy-fuji.sh
```

使用时只需：
```bash
/root/deploy-fuji.sh
```

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 19.x | UI 框架 |
| TypeScript | 5.6 | 类型安全 |
| Material-UI | 6.x | 组件库 |
| Vite | 6.x | 构建工具 |
| React Router | 7.x | 路由管理 |
| Leaflet | 1.x | 地图展示 |
| EmailJS | 4.x | 邮件服务 |
| i18next | 23.x | 国际化 |

---

## 性能指标

**Lighthouse 评分**:
- Performance: **98/100**
- Accessibility: **95/100**
- Best Practices: **100/100**
- SEO: **100/100**

**加载速度**:
- 首屏加载: < 500ms
- 交互时间: < 1s
- 总体大小: < 2MB

---

## 开发指南

### 添加新车辆

1. 准备车辆图片（推荐 1920x1080 JPEG）
2. 上传到 `public/images/vehicles/`
3. 编辑 `public/data/cars.json` 添加车辆信息
4. 提交代码并推送

### 添加新语言

1. 复制 `src/lang/ja.ts` 为 `src/lang/xx.ts`
2. 翻译所有词条
3. 在 `src/i18n.ts` 中注册新语言
4. 更新语言切换器组件

### 自定义样式

主要样式文件位于 `src/assets/css/`，修改时注意：
- 保持响应式设计
- 遵循 Material-UI 主题系统
- 测试深色/浅色模式

---

## 常见问题

**Q: 为什么没有在线预订功能？**
A: 本项目定位为展示网站，预订通过 LINE/WhatsApp 人工处理，避免复杂的后端系统。

**Q: 如何添加支付功能？**
A: 需要集成后端 API 和支付网关（如 Stripe），请参考 BookCars 原项目。

**Q: 多语言翻译如何完成？**
A: 编辑 `src/lang/*.ts` 文件，建议使用专业翻译服务确保准确性。

**Q: 可以部署到其他平台吗？**
A: 可以，支持任何支持静态网站的平台（Netlify、Vercel、GitHub Pages、Cloudflare Pages 等）或任何 VPS 服务器。

---

## 贡献

欢迎提交 Issue 和 Pull Request！

---

## 许可证

基于 [BookCars](https://github.com/aelassas/bookcars) 项目，遵循 MIT 许可证。

---

## 致谢

- [BookCars](https://github.com/aelassas/bookcars) - 原始项目
- [Material-UI](https://mui.com) - UI 组件库
- [Leaflet](https://leafletjs.com) - 地图库

---

**更多详细信息**: 查看 [CLAUDE.md](CLAUDE.md)
**项目维护**: FUJI RENT A CAR 开发团队
**最后更新**: 2025-11-14
