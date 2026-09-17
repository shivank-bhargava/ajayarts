import { ArrowRight, Instagram, Mail, Phone, Facebook, MapPin, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import artPieces from '../data/artData'

export default function Home({ onAddToCart, isYellowTheme }) {
  const [featuredIndex, setFeaturedIndex] = useState(0)
  // Select 4 artworks with different subjects
  const featuredArt = [
    artPieces.find(art => art.id === 1), // Dancing Ganesha - Ganesha/Deity
    artPieces.find(art => art.id === 9), // Krishna in ceremonial attire with cows - Krishna/Deity
    artPieces.find(art => art.id === 2), // Emperor Shah Jahan and Mumtaz - Royal/Mughal
    artPieces.find(art => art.id === 7), // Happiness in the Village Life - Village Life
  ].filter(Boolean)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${isYellowTheme ? 'from-yellow-900 to-yellow-800' : 'from-amber-900 to-amber-800'}  shadow-xl p-8 md:p-12 mb-12 text-white`}>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-amber-100">Ajay Arts</h1>
            <p className="text-lg md:text-xl text-amber-200 mb-2 italic">
              "Where There's a Will, There's a Way"
            </p>
            <p className="text-xl md:text-2xl text-amber-100 mb-6">
              Master of Indian Miniature Painting
            </p>
            <p className="text-amber-200 mb-8 max-w-2xl">
              Discover the timeless beauty of traditional Indian miniature paintings, 
              crafted with meticulous detail by a National Award-winning artist.
            </p>
            <Link
              to="/gallery"
              className={`inline-flex items-center gap-2 ${isYellowTheme ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gold-500 hover:bg-gold-600'} text-white px-6 py-3 rounded-md font-medium transition-colors`}
            >
              View Gallery
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="flex-1 w-full flex items-center justify-center">
            <img
              src="/Photos/ajay painting through lens.jpg"
              alt="Ajay Garg painting"
              className="max-h-80 w-auto  shadow-lg object-contain"
            />
          </div>
        </div>
      </div>

      {/* Featured Artwork */}
      <div className="mb-12">
        <h2 className={`text-3xl font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-6`}>Featured Artwork</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArt.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl relative group"
            >
              <Link to="/gallery" className="block">
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
                  <p className={`text-base font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>${art.price.toLocaleString()}</p>
                </div>
              </Link>
              
              {/* Floating Add to Cart Button */}
              <button
                onClick={(e) => {
                  e.preventDefault()
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
      </div>

      {/* About Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white  shadow-md p-6">
          <h2 className={`text-2xl font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-4`}>About the Artist</h2>
          <p className="text-gray-700 mb-4">
            Ajay Garg, born November 21, 1971 in Rajasthan, is a Deaf & Mute artist who 
            has overcome his physical inability and emerged as a specialist in Indian miniature painting.
          </p>
          <p className="text-gray-700 mb-4 italic text-sm">
            "Where There's a Will, There's a Way"
          </p>
          <p className="text-gray-700 mb-4 text-sm">
            National Award recipient (2004) by President Dr. A.P.J. Abdul Kalam. 
            Exhibitions worldwide including Jehangir Art Gallery (Mumbai), Davidson Art Gallery (Seattle), 
            and galleries in USA, UK, and Mexico.
          </p>
          <Link
            to="/about"
            className={`font-medium inline-flex items-center gap-1 ${isYellowTheme ? 'text-yellow-900 hover:text-yellow-800' : 'text-amber-900 hover:text-gold-800'}`}
          >
            Learn More <ArrowRight size={16} />
          </Link>
        </div>

        <div className="bg-white  shadow-md p-6">
          <h2 className={`text-2xl font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-4`}>Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Interested in purchasing a piece or have questions? Contact us to inquire about available artworks.
          </p>
          <div className="space-y-2 mb-4">
            <a href="tel:+919461304074" className={`flex items-center gap-2 ${isYellowTheme ? 'text-yellow-700 hover:text-yellow-900' : 'text-gold-700 hover:text-gold-900'}`}>
              <Phone size={18} />
              <span>+91-94613-04074</span>
            </a>
            <a href="mailto:artsajay@gmail.com" className={`flex items-center gap-2 ${isYellowTheme ? 'text-yellow-700 hover:text-yellow-900' : 'text-gold-700 hover:text-gold-900'}`}>
              <Mail size={18} />
              <span>artsajay@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/artsajay_/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 ${isYellowTheme ? 'text-yellow-700 hover:text-yellow-900' : 'text-gold-700 hover:text-gold-900'}`}>
              <Instagram size={18} />
              <span>@artsajay_</span>
            </a>
            <a href="https://facebook.com/artsajaygarg" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 ${isYellowTheme ? 'text-yellow-700 hover:text-yellow-900' : 'text-gold-700 hover:text-gold-900'}`}>
              <Facebook size={18} />
              <span>facebook.com/artsajaygarg</span>
            </a>
            <div className={`flex items-center gap-2 ${isYellowTheme ? 'text-yellow-700' : 'text-gold-700'}`}>
              <MapPin size={18} />
              <span className="text-sm">Jaipur, Rajasthan, India</span>
            </div>
          </div>
          <Link
            to="/contact"
            className={`font-medium inline-flex items-center gap-1 ${isYellowTheme ? 'text-yellow-900 hover:text-yellow-800' : 'text-amber-900 hover:text-gold-800'}`}
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className={` shadow-md p-8 text-center ${isYellowTheme ? 'bg-yellow-100' : 'bg-amber-100'}`}>
        <h2 className={`text-2xl font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-4`}>Own a Piece of Art</h2>
        <p className="text-gray-700 mb-6">
          Each painting is a unique masterpiece, crafted with traditional techniques by a master artist.
          Browse our gallery to find the perfect piece for your collection.
        </p>
        <Link
          to="/gallery"
          className={`inline-flex items-center gap-2 ${isYellowTheme ? 'bg-yellow-800 hover:bg-yellow-900' : 'bg-amber-800 hover:bg-amber-900'} text-white px-6 py-3  font-medium transition-colors`}
        >
          Explore Gallery
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  )
}
