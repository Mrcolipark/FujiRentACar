import * as bookcarsTypes from ':bookcars-types'
import axiosInstance from './axiosInstance'
import * as UserService from './UserService'

/**
 * Get locations.
 *
 * @param {string} keyword
 * @param {number} page
 * @param {number} size
 * @returns {Promise<bookcarsTypes.Result<bookcarsTypes.Location>>}
 */
export const getLocations = (keyword: string, page: number, size: number): Promise<bookcarsTypes.Result<bookcarsTypes.Location>> =>
  axiosInstance
    .get(
      `/api/locations/${page}/${size}/${UserService.getLanguage()}/?s=${encodeURIComponent(keyword)}`
    )
    .then((res) => res.data)

/**
 * Get locations with position.
 *
 * @returns {Promise<bookcarsTypes.Result<bookcarsTypes.Location>>}
 */
export const getLocationsWithPosition = async (): Promise<bookcarsTypes.Location[]> => {
  try {
    // 读取本地 JSON 文件
    const response = await fetch('/data/locations.json')
    const data = await response.json()

    const language = UserService.getLanguage()

    // 转换数据格式以匹配 bookcarsTypes.Location
    const locations: bookcarsTypes.Location[] = data.locations.map((loc: any) => ({
      _id: loc.id,
      name: loc.name[language] || loc.name.ja,
      latitude: loc.latitude,
      longitude: loc.longitude,
      // 添加其他必要字段
    }))

    console.log('📍 加载门店位置:', locations)
    return locations
  } catch (error) {
    console.error('❌ 加载门店位置失败:', error)
    return []
  }
}

/**
 * Get a Location by ID.
 *
 * @param {string} id
 * @returns {Promise<bookcarsTypes.Location>}
 */
export const getLocation = (id: string): Promise<bookcarsTypes.Location> =>
  axiosInstance
    .get(
      `/api/location/${encodeURIComponent(id)}/${UserService.getLanguage()}`
    )
    .then((res) => res.data)

/**
 * Get Loaction ID by name (en).
 *
 * @param {string} name
 * @param {string} language
 * @returns {Promise<{ status: number, data: string }>}
 */
export const getLocationId = async (name: string, language: string): Promise<{ status: number, data: string }> => {
  try {
    // 读取本地 JSON 文件
    const response = await fetch('/data/locations.json')
    const data = await response.json()

    // 根据名称查找对应的 location
    const location = data.locations.find((loc: any) =>
      loc.name.ja === name ||
      loc.name.en === name ||
      loc.name.zh === name
    )

    if (location) {
      return { status: 200, data: location.id }
    } else {
      return { status: 404, data: '' }
    }
  } catch (error) {
    console.error('❌ 获取门店ID失败:', error)
    return { status: 500, data: '' }
  }
}
