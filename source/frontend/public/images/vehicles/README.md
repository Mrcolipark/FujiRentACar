# 车辆图片文件夹结构说明

## 文件夹组织方式

每个车辆都有自己的文件夹，文件夹名称使用车辆ID（和vehicles.json中的id字段一致）

```
public/images/vehicles/
├── mercedesbenz-g-class-400d/
│   ├── main.jpg              # 封面图（用于列表页）
│   ├── exterior-front.jpg    # 外观-正面
│   ├── exterior-side.jpg     # 外观-侧面
│   ├── exterior-rear.jpg     # 外观-后面
│   ├── interior-dashboard.jpg # 内饰-仪表盘
│   ├── interior-seats.jpg    # 内饰-座椅
│   └── interior-trunk.jpg    # 内饰-后备箱
├── mercedesbenz-c-class/
│   ├── main.jpg
│   ├── exterior-front.jpg
│   └── ...
└── ...
```

## 图片命名规则

### 必需图片
- `main.jpg` - 封面图，显示在车辆列表页

### 推荐图片（按顺序显示）
1. `exterior-front.jpg` - 外观正面
2. `exterior-side.jpg` - 外观侧面
3. `exterior-rear.jpg` - 外观后面
4. `interior-dashboard.jpg` - 内饰仪表盘
5. `interior-front-seats.jpg` - 内饰前排座椅
6. `interior-rear-seats.jpg` - 内饰后排座椅
7. `interior-trunk.jpg` - 后备箱

## 图片要求

- **格式**: JPG 或 PNG
- **尺寸**: 建议 1200x800 像素（3:2比例）
- **文件大小**: 每张图片不超过 500KB
- **质量**: 清晰、光线充足、背景干净

## 如何添加新车辆图片

1. 在 `public/images/vehicles/` 下创建新文件夹（使用车辆ID作为文件夹名）
2. 添加 `main.jpg` 作为封面图
3. 添加其他细节图片（按照上面的命名规则）
4. 在 `public/data/vehicles.json` 中配置该车辆的图片路径
