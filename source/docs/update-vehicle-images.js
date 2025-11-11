/**
 * FUJI RENT A CAR - 车辆图片URL更新辅助脚本
 * 用于批量更新 vehicles.json 中的图片链接
 *
 * 使用方法:
 * node update-vehicle-images.js
 */

const fs = require('fs');
const path = require('path');

// 图片URL映射表 - 从Unsplash精选的高质量汽车图片
// 你可以根据实际情况修改这些URL
const imageUrls = {
  // Mercedes-Benz
  'mercedesbenz-g-class-400d': 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&h=800&fit=crop&auto=format',
  'mercedesbenz-c-class': 'https://images.unsplash.com/photo-1618843479619-fe69b29c9826?w=1200&h=800&fit=crop&auto=format',
  'mercedesbenz-e-class': 'https://images.unsplash.com/photo-1617531653520-bd788a273fdf?w=1200&h=800&fit=crop&auto=format',
  'mercedesbenz-s-class': 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200&h=800&fit=crop&auto=format',
  'mercedesbenz-v-class-220d': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&h=800&fit=crop&auto=format',

  // Maserati
  'maserati-levante': 'https://images.unsplash.com/photo-1621135802920-5e9ff8c0f077?w=1200&h=800&fit=crop&auto=format',

  // Toyota
  'toyota-land-cruiser-250': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&h=800&fit=crop&auto=format',
  'toyota-alphard-40': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&h=800&fit=crop&auto=format',
  'toyota-alphard-30': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&h=800&fit=crop&auto=format',
  'toyota-alphard-20': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&h=800&fit=crop&auto=format',
  'toyota-86': 'https://images.unsplash.com/photo-1629897048514-3dd7414fe72a?w=1200&h=800&fit=crop&auto=format',
  'toyota-hiace': 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=1200&h=800&fit=crop&auto=format',
  'toyota-supra': 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&h=800&fit=crop&auto=format',

  // Porsche
  'porsche-panamera': 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&h=800&fit=crop&auto=format',

  // Lexus
  'lexus-c-class': 'https://images.unsplash.com/photo-1621135802920-133df1dd1e5d?w=1200&h=800&fit=crop&auto=format', // LC500
  'lexus-lm': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&h=800&fit=crop&auto=format',

  // BMW
  'bmw-m4': 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200&h=800&fit=crop&auto=format',
  'bmw-z4': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop&auto=format',
  'bmw-x5': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop&auto=format',

  // Mazda
  'mazda-atenza': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=800&fit=crop&auto=format',
  'mazda-mx-5-roadster': 'https://images.unsplash.com/photo-1566024287286-457247b70310?w=1200&h=800&fit=crop&auto=format',

  // Honda
  'honda-step-wgn': 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=1200&h=800&fit=crop&auto=format',
  'honda-fit': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop&auto=format',

  // Nissan
  'nissan-serena': 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=1200&h=800&fit=crop&auto=format',
  'nissan-gt-r': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&h=800&fit=crop&auto=format',

  // Subaru
  'subaru-xv': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=800&fit=crop&auto=format',
  'subaru-forester': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&h=800&fit=crop&auto=format',
};

// 如果你已经下载了本地图片，使用这个映射表
const localImagePaths = {
  'mercedesbenz-g-class-400d': '/images/vehicles/mercedesbenz-g-class.jpg',
  'mercedesbenz-c-class': '/images/vehicles/mercedesbenz-c-class.jpg',
  // ... 添加其他本地图片路径
};

// 读取 vehicles.json
const vehiclesPath = path.join(__dirname, '../frontend/public/data/vehicles.json');
let vehicles = [];

try {
  const data = fs.readFileSync(vehiclesPath, 'utf8');
  vehicles = JSON.parse(data);
  console.log(`✅ 成功读取 ${vehicles.length} 辆车的数据\n`);
} catch (err) {
  console.error('❌ 读取 vehicles.json 失败:', err.message);
  process.exit(1);
}

// 更新图片URL
let updatedCount = 0;
let missingCount = 0;

vehicles.forEach(vehicle => {
  const vehicleId = vehicle.id;

  // 优先使用本地图片路径，否则使用Unsplash URL
  if (localImagePaths[vehicleId]) {
    vehicle.image = localImagePaths[vehicleId];
    console.log(`📁 [本地] ${vehicleId}: ${vehicle.image}`);
    updatedCount++;
  } else if (imageUrls[vehicleId]) {
    vehicle.image = imageUrls[vehicleId];
    console.log(`🌐 [Unsplash] ${vehicleId}: ${vehicle.image.substring(0, 60)}...`);
    updatedCount++;
  } else {
    console.log(`⚠️  [缺失] ${vehicleId}: 未找到图片URL`);
    missingCount++;
  }
});

// 备份原文件
const backupPath = vehiclesPath.replace('.json', '.backup.json');
try {
  fs.copyFileSync(vehiclesPath, backupPath);
  console.log(`\n💾 已备份原文件到: ${backupPath}`);
} catch (err) {
  console.error('❌ 备份失败:', err.message);
}

// 写入更新后的数据
try {
  fs.writeFileSync(vehiclesPath, JSON.stringify(vehicles, null, 2), 'utf8');
  console.log(`\n✅ 成功更新 vehicles.json`);
  console.log(`   - 已更新: ${updatedCount} 辆`);
  console.log(`   - 缺失图片: ${missingCount} 辆`);

  if (missingCount > 0) {
    console.log('\n⚠️  请为以下车辆添加图片URL:');
    vehicles.forEach(v => {
      if (!imageUrls[v.id] && !localImagePaths[v.id]) {
        console.log(`   - ${v.id}`);
      }
    });
  }
} catch (err) {
  console.error('\n❌ 写入文件失败:', err.message);
  process.exit(1);
}

console.log('\n🎉 图片URL更新完成！\n');
