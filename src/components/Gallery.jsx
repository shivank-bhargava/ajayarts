import { useState } from 'react'
import { Search, X, ShoppingBag } from 'lucide-react'
import artPieces from '../data/artData'

export default function Gallery({ onArtworkClick, onAddToCart, isYellowTheme }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [selectedMedium, setSelectedMedium] = useState('all')
  const [selectedSize, setSelectedSize] = useState('all')
  const [selectedSubject, setSelectedSubject] = useState('all')

  // Get unique years for filter
  const years = ['all', ...new Set(artPieces.filter(p => p.year).map(p => p.year))].sort()

  // Get unique mediums for filter
  const mediums = ['all', ...new Set(artPieces.map(p => p.medium))].sort()

  // Get unique tags for subject filter
  const allTags = artPieces.flatMap(art => art.tags || [])
  const subjects = ['all', ...new Set(allTags)].sort()

  // Helper function to extract width from size string
  const extractWidth = (size) => {
    const match = size.match(/(\d+\.?\d*)\s*x/i)
    return match ? parseFloat(match[1]) : 0
  }

  // Helper function to extract height from size string
  const extractHeight = (size) => {
    const match = size.match(/x\s*(\d+\.?\d*)/i)
    return match ? parseFloat(match[1]) : 0
  }

  // Calculate area for size categorization
  const getArea = (size) => {
    const width = extractWidth(size)
    const height = extractHeight(size)
    return width * height
  }

  // Filter artworks
  const filteredArt = artPieces.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = selectedYear === 'all' || art.year === parseInt(selectedYear)
    const matchesMedium = selectedMedium === 'all' || art.medium === selectedMedium
    const matchesSubject = selectedSubject === 'all' || (art.tags && art.tags.includes(selectedSubject))
    
    let matchesPrice = true
    if (priceRange === 'under500') {
      matchesPrice = art.price < 500
    } else if (priceRange === '500to1000') {
      matchesPrice = art.price >= 500 && art.price < 1000
    } else if (priceRange === '1000to1500') {
      matchesPrice = art.price >= 1000 && art.price < 1500
    } else if (priceRange === '1500plus') {
      matchesPrice = art.price >= 1500
    }

    let matchesSize = true
    const area = getArea(art.size)
    if (selectedSize === 'small') {
      matchesSize = area < 50
    } else if (selectedSize === 'medium') {
      matchesSize = area >= 50 && area < 100
    } else if (selectedSize === 'large') {
      matchesSize = area >= 100
    }

    return matchesSearch && matchesYear && matchesPrice && matchesMedium && matchesSize && matchesSubject
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className={`text-3xl font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-8`}>Art Gallery</h1>
      
      {/* Filters */}
      <div className="bg-white  shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 ${isYellowTheme ? 'focus:ring-yellow-500' : 'focus:ring-gold-500'}`}
            />
          </div>

          {/* Subject Filter */}
          <div>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 ${isYellowTheme ? 'focus:ring-yellow-500' : 'focus:ring-gold-500'}`}
            >
              <option value="all">All Subjects</option>
              {subjects.filter(s => s !== 'all').map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>

          {/* Medium Filter */}
          <div>
            <select
              value={selectedMedium}
              onChange={(e) => setSelectedMedium(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 ${isYellowTheme ? 'focus:ring-yellow-500' : 'focus:ring-gold-500'}`}
            >
              <option value="all">All Mediums</option>
              {mediums.filter(m => m !== 'all').map(medium => (
                <option key={medium} value={medium}>{medium}</option>
              ))}
            </select>
          </div>

          {/* Size Filter */}
          <div>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 ${isYellowTheme ? 'focus:ring-yellow-500' : 'focus:ring-gold-500'}`}
            >
              <option value="all">All Sizes</option>
              <option value="small">Small (under 50 sq. in.)</option>
              <option value="medium">Medium (50-100 sq. in.)</option>
              <option value="large">Large (100+ sq. in.)</option>
            </select>
          </div>

          {/* Year Filter */}
          <div>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 ${isYellowTheme ? 'focus:ring-yellow-500' : 'focus:ring-gold-500'}`}
            >
              <option value="all">All Years</option>
              {years.filter(y => y !== 'all').map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 ${isYellowTheme ? 'focus:ring-yellow-500' : 'focus:ring-gold-500'}`}
            >
              <option value="all">All Prices</option>
              <option value="under500">Under $500</option>
              <option value="500to1000">$500 - $1,000</option>
              <option value="1000to1500">$1,000 - $1,500</option>
              <option value="1500plus">$1,500+</option>
            </select>
          </div>
        </div>

        {/* Clear Filters */}
        {(searchTerm || selectedYear !== 'all' || priceRange !== 'all' || selectedMedium !== 'all' || selectedSize !== 'all' || selectedSubject !== 'all') && (
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedYear('all')
              setPriceRange('all')
              setSelectedMedium('all')
              setSelectedSize('all')
              setSelectedSubject('all')
            }}
            className={`mt-4 flex items-center gap-1 text-sm ${isYellowTheme ? 'text-yellow-900 hover:text-yellow-800' : 'text-amber-900 hover:text-gold-800'}`}
          >
            <X size={16} />
            Clear filters
          </button>
        )}
      </div>

      {/* Results count */}
      <p className="text-gray-600 mb-4">Showing {filteredArt.length} artwork{filteredArt.length !== 1 ? 's' : ''}</p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredArt.map((art) => (
          <div
            key={art.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl relative group"
          >
            <div
              onClick={() => onArtworkClick(art)}
              className="cursor-pointer"
            >
              <div className="aspect-square bg-gray-100">
                <img
                  src={`/Photos/${art.filename}`}
                  alt={art.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className={`font-semibold text-lg ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-1 truncate`}>{art.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{art.size}</p>
                {art.year && <p className="text-sm text-gray-500 mb-2">{art.year}</p>}
                <p className={`text-base font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>${art.price.toLocaleString()}</p>
              </div>
            </div>
            
            {/* Floating Add to Cart Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                onAddToCart(art)
              }}
              className={`absolute bottom-4 right-4 ${isYellowTheme ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gold-500 hover:bg-gold-600'} text-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}
              title="Add to Cart"
            >
              <ShoppingBag size={20} />
            </button>
          </div>
        ))}
      </div>

      {filteredArt.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>No artworks found matching your filters.</p>
        </div>
      )}
    </div>
  )
}
