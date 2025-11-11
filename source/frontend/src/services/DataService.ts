/**
 * FUJI RENT A CAR - 静态数据服务
 *
 * 策略：保留接口定义，用静态JSON替代API调用
 * 未来如需接入真实后端，只需修改此文件的实现即可
 */

// ============================================
// 类型定义（保留，便于未来扩展）
// ============================================

export interface Car {
  id: string
  name: string
  type: 'diesel' | 'gasoline' | 'electric' | 'hybrid'
  gearbox: 'manual' | 'automatic'
  seats: number
  doors: number
  aircon: boolean
  image: string
  images: string[]
  price: {
    daily: number
    weekly: number
    monthly: number
  }
  deposit: number
  mileage: number  // -1 表示无限
  fuelPolicy: string
  minimumAge: number
  range: 'mini' | 'midi' | 'maxi'
  multimedia: string[]
  rating: number
  trips: number
  co2: number
  insurance: {
    collisionDamageWaiver: number
    theftProtection: number
    fullInsurance: number
  }
  locations: string[]  // location IDs
  description: Record<string, string>
  features?: Record<string, string[]>
}

export interface Location {
  id: string
  name: Record<string, string>
  address: Record<string, string>
  latitude: number
  longitude: number
  image: string
  hours: string
  phone: string
  email: string
  parkingSpots?: Array<{
    name: string
    latitude: number
    longitude: number
  }>
  instructions?: Record<string, string>
  features?: Record<string, string[]>
}

export interface FAQ {
  id: string
  question: Record<string, string>
  answer: Record<string, string>
}

export interface FAQCategory {
  id: string
  name: Record<string, string>
  questions: FAQ[]
}

export interface Settings {
  website: {
    name: string
    tagline: Record<string, string>
    description: Record<string, string>
    logo: string
    favicon: string
  }
  contact: {
    email: string
    phone: string
    whatsapp: string
    line: string
    address: Record<string, string>
  }
  social: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
  business: {
    minimumAge: number
    currency: string
    timezone: string
    languages: string[]
  }
}

export interface GetCarsPayload {
  suppliers?: string[]
  pickupLocation?: string
  carType?: string[]
  gearbox?: string[]
  seats?: number
  minPrice?: number
  maxPrice?: number
  mileage?: string[]  // ['limited', 'unlimited']
  range?: string[]
  multimedia?: string[]
  rating?: number
}

// ============================================
// 数据服务实现
// ============================================

class DataService {
  private static carsCache: Car[] | null = null
  private static locationsCache: Location[] | null = null
  private static faqsCache: FAQCategory[] | null = null
  private static settingsCache: Settings | null = null

  /**
   * 获取所有车辆
   * TODO: 未来可替换为真实API调用
   */
  static async getCars(): Promise<Car[]> {
    if (this.carsCache) {
      return this.carsCache as Car[]
    }

    try {
      const response = await fetch('/data/cars.json')
      const data = await response.json()
      this.carsCache = data.cars || []
      return this.carsCache as Car[]
    } catch (error) {
      console.error('Failed to load cars:', error)
      return []
    }
  }

  /**
   * 获取单个车辆
   */
  static async getCar(id: string): Promise<Car | null> {
    const cars = await this.getCars()
    return cars.find(car => car.id === id) || null
  }

  /**
   * 筛选车辆（核心筛选逻辑）
   * TODO: 未来可改为调用后端API，由数据库执行查询
   */
  static async filterCars(
    filters: GetCarsPayload,
    page: number = 1,
    pageSize: number = 15
  ): Promise<{ resultData: Car[], pageInfo: { totalRecords: number } }> {

    let cars = await this.getCars()

    // 应用筛选条件
    if (filters.carType?.length) {
      cars = cars.filter(car => filters.carType!.includes(car.type))
    }

    if (filters.gearbox?.length) {
      cars = cars.filter(car => filters.gearbox!.includes(car.gearbox))
    }

    if (filters.seats) {
      cars = cars.filter(car => car.seats >= filters.seats!)
    }

    if (filters.minPrice !== undefined) {
      cars = cars.filter(car => car.price.daily >= filters.minPrice!)
    }

    if (filters.maxPrice !== undefined) {
      cars = cars.filter(car => car.price.daily <= filters.maxPrice!)
    }

    if (filters.mileage?.length) {
      if (filters.mileage.includes('unlimited')) {
        cars = cars.filter(car => car.mileage === -1)
      } else if (filters.mileage.includes('limited')) {
        cars = cars.filter(car => car.mileage > -1)
      }
    }

    if (filters.range?.length) {
      cars = cars.filter(car => filters.range!.includes(car.range))
    }

    if (filters.multimedia?.length) {
      cars = cars.filter(car =>
        filters.multimedia!.every(feature => car.multimedia.includes(feature))
      )
    }

    if (filters.rating !== undefined && filters.rating > 0) {
      cars = cars.filter(car => car.rating >= filters.rating!)
    }

    if (filters.pickupLocation) {
      cars = cars.filter(car =>
        car.locations.includes(filters.pickupLocation!)
      )
    }

    // 排序：评分高的优先
    cars.sort((a, b) => b.rating - a.rating)

    // 分页
    const start = (page - 1) * pageSize
    const end = start + pageSize
    const paginatedCars = cars.slice(start, end)

    return {
      resultData: paginatedCars,
      pageInfo: {
        totalRecords: cars.length
      }
    }
  }

  /**
   * 获取所有门店
   */
  static async getLocations(): Promise<Location[]> {
    if (this.locationsCache) {
      return this.locationsCache as Location[]
    }

    try {
      const response = await fetch('/data/locations.json')
      const data = await response.json()
      this.locationsCache = data.locations || []
      return this.locationsCache as Location[]
    } catch (error) {
      console.error('Failed to load locations:', error)
      return []
    }
  }

  /**
   * 获取单个门店
   */
  static async getLocation(id: string): Promise<Location | null> {
    const locations = await this.getLocations()
    return locations.find(loc => loc.id === id) || null
  }

  /**
   * 获取FAQ
   */
  static async getFAQs(): Promise<FAQCategory[]> {
    if (this.faqsCache) {
      return this.faqsCache as FAQCategory[]
    }

    try {
      const response = await fetch('/data/faqs.json')
      const data = await response.json()
      this.faqsCache = data.categories || []
      return this.faqsCache as FAQCategory[]
    } catch (error) {
      console.error('Failed to load FAQs:', error)
      return []
    }
  }

  /**
   * 获取网站配置
   */
  static async getSettings(): Promise<Settings | null> {
    if (this.settingsCache) {
      return this.settingsCache
    }

    try {
      const response = await fetch('/data/settings.json')
      this.settingsCache = await response.json()
      return this.settingsCache
    } catch (error) {
      console.error('Failed to load settings:', error)
      return null
    }
  }

  /**
   * 清除缓存（用于调试）
   */
  static clearCache() {
    this.carsCache = null
    this.locationsCache = null
    this.faqsCache = null
    this.settingsCache = null
  }
}

export default DataService
