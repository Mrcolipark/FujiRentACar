# FUJI RENT A CAR

富士租车公司官方展示网站 - 基于 BookCars 定制开发

---

## 快速开始

### 安装依赖
```bash
cd source/frontend
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:3002

---

## 项目特点

- ✅ 纯静态网站，无需数据库
- ✅ 车辆/门店数据来自 JSON 文件
- ✅ 多语言支持（日/英/中）
- ✅ 集成 EmailJS 联系表单
- ✅ LINE/WhatsApp 一键咨询
- ✅ 部署到 Vercel 免费托管

---

## 目录结构

```
source/frontend/
├── public/data/           # 静态数据
│   ├── cars.json          # 车辆数据
│   ├── locations.json     # 门店数据
│   ├── faqs.json          # FAQ
│   └── settings.json      # 网站配置
│
├── src/
│   ├── pages/             # 页面组件
│   ├── components/        # 通用组件
│   ├── services/
│   │   └── DataService.ts # 数据服务（读取JSON）
│   └── lang/              # 多语言文件
│
└── .env.fuji              # 环境变量模板
```

---

## 更新数据

编辑 `public/data/*.json` 文件，然后：

```bash
git add .
git commit -m "更新数据"
git push
```

Vercel 会自动重新部署（约1分钟）。

---

## 部署到 Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 环境变量

复制模板并填写：
```bash
cp .env.fuji .env
```

必需配置：
- `VITE_BC_WHATSAPP_NUMBER` - WhatsApp号码
- `VITE_BC_LINE_ID` - LINE官方账号
- `VITE_BC_EMAILJS_SERVICE_ID` - EmailJS服务ID
- `VITE_BC_EMAILJS_TEMPLATE_ID` - EmailJS模板ID
- `VITE_BC_EMAILJS_PUBLIC_KEY` - EmailJS公钥

---

## 技术栈

- React 19
- TypeScript
- Material-UI
- Vite
- Leaflet (地图)

---

更多信息查看 `CLAUDE.MD`
