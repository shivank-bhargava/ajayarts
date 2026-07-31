import { X, Mail, Phone, Instagram, ShoppingBag } from 'lucide-react'

export default function ArtworkModal({ artwork, onClose, onAddToCart, isYellowTheme }) {
  if (!artwork) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative flex flex-col md:flex-row">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
          >
            <X size={24} />
          </button>

          {/* Image */}
          <div className="w-full md:w-1/2 bg-gray-100">
            <img
              src={`/Photos/${artwork.filename}`}
              alt={artwork.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <h2 className={`text-2xl md:text-3xl font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-4`}>{artwork.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Medium</p>
                <p className="font-medium text-gray-800">{artwork.medium}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Size</p>
                <p className="font-medium text-gray-800">{artwork.size}</p>
              </div>
              {artwork.year && (
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="font-medium text-gray-800">{artwork.year}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className={`font-bold text-2xl ${isYellowTheme ? 'text-yellow-600' : 'text-gold-600'}`}>${artwork.price.toLocaleString()}</p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => onAddToCart(artwork)}
              className={`w-full ${isYellowTheme ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gold-500 hover:bg-gold-600'} text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center gap-2 mb-6`}
            >
              <ShoppingBag size={20} />
              Add to Cart
            </button>

            {/* Contact for Purchase */}
            <div className={`rounded-lg p-6 border ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
              <h3 className={`text-lg font-semibold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-4`}>Interested in this artwork?</h3>
              <p className="text-gray-700 mb-4">Contact us to purchase or inquire about this piece.</p>
              
              <div className="space-y-3">
                <a
                  href="tel:+919461304074"
                  className={`flex items-center gap-3 ${isYellowTheme ? 'text-yellow-700 hover:text-yellow-900' : 'text-gold-700 hover:text-gold-900'}`}
                >
                  <Phone size={20} />
                  <span>+91-94613-04074</span>
                </a>
                <a
                  href="mailto:artsajay@gmail.com"
                  className={`flex items-center gap-3 ${isYellowTheme ? 'text-yellow-700 hover:text-yellow-900' : 'text-gold-700 hover:text-gold-900'}`}
                >
                  <Mail size={20} />
                  <span>artsajay@gmail.com</span>
                </a>
                <a
                  href="https://www.instagram.com/artsajay_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${isYellowTheme ? 'text-yellow-700 hover:text-yellow-900' : 'text-gold-700 hover:text-gold-900'}`}
                >
                  <Instagram size={20} />
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
