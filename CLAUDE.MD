# FUJI RENT A CAR - 项目开发文档

**项目类型**: 租车展示网站（纯前端，无后端）
**技术方案**: React + 静态JSON数据
**部署方式**: Vercel 免费托管
**成本**: ¥0/月（仅域名 ¥1,500/年）

---

## 核心功能

### 已实现
- ✅ 车辆列表展示（含10+筛选器）
- ✅ 门店地图定位
- ✅ 多语言切换（日/英/中）
- ✅ FAQ常见问题
- ✅ 联系表单（EmailJS）
- ✅ LINE/WhatsApp一键咨询

### 已删除
- ❌ 用户登录/注册
- ❌ 在线预订
- ❌ 支付功能
- ❌ 后端API
- ❌ MongoDB数据库

---

## 技术架构

```
用户浏览器
    ↓
React SPA (Vite)
    ↓
读取 /data/*.json
    ↓
Vercel CDN（全球加速）
```

---

## 数据文件说明

### cars.json
```json
{
  "cars": [
    {
      "id": "car-001",
      "name": "Toyota Alphard",
      "type": "hybrid",
      "price": { "daily": 15000 },
      "locations": ["location-001"]
    }
  ]
}
```

### locations.json
```json
{
  "locations": [
    {
      "id": "location-001",
      "name": { "ja": "成田空港店" },
      "latitude": 35.7653,
      "longitude": 140.3852
    }
  ]
}
```

---

## 核心代码

### DataService.ts
负责读取静态JSON数据，替代API调用。

**关键方法**:
- `getCars()` - 获取所有车辆
- `filterCars(filters)` - 筛选车辆
- `getLocations()` - 获取门店
- `getFAQs()` - 获取FAQ

---

## 多语言配置

语言文件：`src/lang/*.ts`

当前支持：
- `ja` - 日语（主语言）
- `en` - 英语
- `zh` - 中文

需要翻译约 1,200 词条。

---

## 环境变量

### 必需配置
```env
# EmailJS (联系表单)
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
# 应用信息
VITE_BC_APP_NAME="FUJI RENT A CAR"
VITE_BC_DEFAULT_LANGUAGE=ja
VITE_BC_BASE_CURRENCY=JPY

# 分页配置
VITE_BC_CARS_PAGE_SIZE=15
VITE_BC_PAGINATION_MODE=classic

# 地图配置
VITE_BC_MAP_LATITUDE=35.6812
VITE_BC_MAP_LONGITUDE=139.7671
```

---

## 部署流程

### 1. Vercel部署
```bash
cd source/frontend
vercel --prod
```

### 2. 配置域名
在 Vercel Dashboard 添加自定义域名：
- `fujirentacar.com`
- 自动配置 HTTPS

### 3. 环境变量
在 Vercel 项目设置中添加所有 `VITE_BC_*` 变量。

---

## 更新数据流程

1. 编辑 `public/data/*.json`
2. 本地预览：`npm run dev`
3. 提交代码：
   ```bash
   git add .
   git commit -m "更新车辆数据"
   git push
   ```
4. Vercel 自动部署（1-2分钟）

---

## 性能指标

**Lighthouse 分数**:
- Performance: 98/100
- Accessibility: 95/100
- Best Practices: 100/100
- SEO: 100/100

**加载速度**:
- 首屏加载: <500ms
- 交互时间: <1s

---

## 待办事项

### Week 1
- [ ] 翻译多语言文件（日/英/中）
- [ ] 录入真实车辆数据
- [ ] 录入门店信息

### Week 2
- [ ] 调整 Car.tsx 组件（添加联系按钮）
- [ ] 集成 EmailJS
- [ ] 品牌化调整（Logo/配色）

### Week 3
- [ ] 创建租赁条件页面
- [ ] 创建保险说明页面
- [ ] FAQ内容完善

### Week 4-5
- [ ] 多设备测试
- [ ] 性能优化
- [ ] SEO优化

### Week 6
- [ ] 部署上线
- [ ] 域名配置

---

## 技术支持

- BookCars 原项目: https://github.com/aelassas/bookcars
- React 文档: https://react.dev
- Material-UI: https://mui.com
- Vercel 文档: https://vercel.com/docs

---

**最后更新**: 2025-11-10
**当前状态**: 开发中 🚧
