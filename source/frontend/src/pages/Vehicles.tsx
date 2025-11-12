/**
 * FUJI RENT A CAR - Vehicles Catalog Page
 * 車両カタログページ：全車両を表示・フィルタ・ソート機能付き
 */

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent
} from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import { strings } from '@/lang/vehicles'
import * as UserService from '@/services/UserService'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'
import '@/assets/css/vehicles.css'

interface MultiLangText {
  ja: string
  zh: string
  en: string
}

interface Vehicle {
  id: string
  name: MultiLangText
  brand: string
  model: MultiLangText
  category: MultiLangText
  image: string
  isSuperior: boolean
  seats: number
  price: number
  transmission: string
}

type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'

const Vehicles: React.FC = () => {
  const navigate = useNavigate()
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedBrand, setSelectedBrand] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('price-desc')
  const language = UserService.getLanguage()

  // Load vehicles data
  useEffect(() => {
    fetch('/data/vehicles.json')
      .then(response => response.json())
      .then((data: Vehicle[]) => {
        setVehicles(data)
        setFilteredVehicles(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('車両データの読み込みに失敗しました:', error)
        setLoading(false)
      })
  }, [])

  // Get text based on current language
  const getText = (text: MultiLangText | string): string => {
    if (typeof text === 'string') return text
    return text[language as keyof MultiLangText] || text.en
  }

  // Get unique categories
  const getCategories = (): string[] => {
    const categorySet = new Set<string>()
    vehicles.forEach(vehicle => {
      categorySet.add(getText(vehicle.category))
    })
    return Array.from(categorySet).sort()
  }

  // Get unique brands
  const getBrands = (): string[] => {
    const brandSet = new Set<string>()
    vehicles.forEach(vehicle => {
      brandSet.add(vehicle.brand)
    })
    return Array.from(brandSet).sort()
  }

  // Filter and sort vehicles
  useEffect(() => {
    let result = [...vehicles]

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(vehicle => getText(vehicle.category) === selectedCategory)
    }

    // Filter by brand
    if (selectedBrand !== 'all') {
      result = result.filter(vehicle => vehicle.brand === selectedBrand)
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name-asc':
          return getText(a.name).localeCompare(getText(b.name))
        case 'name-desc':
          return getText(b.name).localeCompare(getText(a.name))
        default:
          return 0
      }
    })

    setFilteredVehicles(result)
  }, [vehicles, selectedCategory, selectedBrand, sortBy, language])

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value)
  }

  const handleBrandChange = (event: SelectChangeEvent) => {
    setSelectedBrand(event.target.value)
  }

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as SortOption)
  }

  const handleViewDetails = (vehicleId: string) => {
    navigate(`/vehicles/${vehicleId}`)
  }

  return (
    <Layout strict={false}>
      <div className="vehicles-page">

        {/* Page Header with Background */}
        <div className="vehicles-header">
          <Container maxWidth="xl">
            <h1 className="vehicles-title">{strings.PAGE_TITLE}</h1>
            <p className="vehicles-subtitle">{strings.PAGE_SUBTITLE}</p>
          </Container>
        </div>

        <Container maxWidth="xl">
          {/* Filters and Sort */}
          <div className="vehicles-controls">
            <div className="vehicles-filters">
              <FormControl className="filter-control" size="small">
                <InputLabel>{strings.FILTER_BY_CATEGORY}</InputLabel>
                <Select
                  value={selectedCategory}
                  label={strings.FILTER_BY_CATEGORY}
                  onChange={handleCategoryChange}
                >
                  <MenuItem value="all">{strings.ALL_CATEGORIES}</MenuItem>
                  {getCategories().map(category => (
                    <MenuItem key={category} value={category}>{category}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl className="filter-control" size="small">
                <InputLabel>{strings.FILTER_BY_BRAND}</InputLabel>
                <Select
                  value={selectedBrand}
                  label={strings.FILTER_BY_BRAND}
                  onChange={handleBrandChange}
                >
                  <MenuItem value="all">{strings.ALL_BRANDS}</MenuItem>
                  {getBrands().map(brand => (
                    <MenuItem key={brand} value={brand}>{brand}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl className="filter-control" size="small">
                <InputLabel>{strings.SORT_BY}</InputLabel>
                <Select
                  value={sortBy}
                  label={strings.SORT_BY}
                  onChange={handleSortChange}
                >
                  <MenuItem value="price-desc">{strings.SORT_PRICE_DESC}</MenuItem>
                  <MenuItem value="price-asc">{strings.SORT_PRICE_ASC}</MenuItem>
                  <MenuItem value="name-asc">{strings.SORT_NAME_ASC}</MenuItem>
                  <MenuItem value="name-desc">{strings.SORT_NAME_DESC}</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="vehicles-count">
              {filteredVehicles.length} {strings.VEHICLES_FOUND}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="vehicles-loading">{strings.LOADING}</div>
          )}

          {/* No Results */}
          {!loading && filteredVehicles.length === 0 && (
            <div className="vehicles-no-results">{strings.NO_VEHICLES}</div>
          )}

          {/* Vehicles Grid */}
          {!loading && filteredVehicles.length > 0 && (
            <div className="vehicles-grid">
              {filteredVehicles.map((vehicle) => (
                <div key={vehicle.id} className="vehicle-card">

                  {/* Vehicle Image */}
                  <div className="vehicle-image-wrapper">
                    <img
                      src={vehicle.image}
                      alt={getText(vehicle.name)}
                      className="vehicle-image"
                    />

                    {/* Superior Badge */}
                    {vehicle.isSuperior && (
                      <div className="superior-badge">SUPERIOR</div>
                    )}

                    {/* Hover Overlay */}
                    <div className="vehicle-overlay">
                      <Button
                        variant="contained"
                        className="view-details-btn"
                        endIcon={<ArrowForward />}
                        onClick={() => handleViewDetails(vehicle.id)}
                      >
                        {strings.VIEW_DETAILS}
                      </Button>
                    </div>
                  </div>

                  {/* Vehicle Info */}
                  <div className="vehicle-info">
                    <div className="vehicle-brand">{vehicle.brand}</div>
                    <h3 className="vehicle-name">{getText(vehicle.name)}</h3>
                    <div className="vehicle-category">{getText(vehicle.category)}</div>

                    <div className="vehicle-specs">
                      <span className="vehicle-spec">
                        {vehicle.seats} {strings.PASSENGERS}
                      </span>
                      <span className="vehicle-spec-divider">•</span>
                      <span className="vehicle-spec">{vehicle.transmission}</span>
                    </div>

                    <div className="vehicle-price">
                      ¥{vehicle.price.toLocaleString()}
                      <span className="price-unit">{strings.PER_DAY}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </Container>
      </div>
      <Footer />
    </Layout>
  )
}

export default Vehicles
