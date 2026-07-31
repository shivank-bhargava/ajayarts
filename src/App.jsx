import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Gallery from './components/Gallery'
import ArtworkModal from './components/ArtworkModal'
import CartModal from './components/CartModal'
import About from './components/About'
import Contact from './components/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isYellowTheme, setIsYellowTheme] = useState(false)

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork)
  }

  const closeModal = () => {
    setSelectedArtwork(null)
  }

  const addToCart = (artwork) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === artwork.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === artwork.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...artwork, quantity: 1 }]
    })
  }

  const removeFromCart = (artworkId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== artworkId))
  }

  const updateQuantity = (artworkId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(artworkId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === artworkId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={`min-h-screen ${isYellowTheme ? 'bg-yellow-50' : 'bg-amber-50'}`}>
        <Navbar 
          cartItemCount={cartItemCount}
          onCartClick={() => setIsCartOpen(true)}
          isYellowTheme={isYellowTheme}
          onThemeToggle={() => setIsYellowTheme(!isYellowTheme)}
        />
        
        <main>
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} isYellowTheme={isYellowTheme} />} />
            <Route path="/gallery" element={<Gallery onArtworkClick={handleArtworkClick} onAddToCart={addToCart} isYellowTheme={isYellowTheme} />} />
            <Route path="/about" element={<About isYellowTheme={isYellowTheme} />} />
            <Route path="/contact" element={<Contact isYellowTheme={isYellowTheme} />} />
          </Routes>
        </main>

        {selectedArtwork && (
          <ArtworkModal artwork={selectedArtwork} onClose={closeModal} onAddToCart={addToCart} isYellowTheme={isYellowTheme} />
        )}

        {isCartOpen && (
          <CartModal
            cart={cart}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onClear={clearCart}
            isYellowTheme={isYellowTheme}
          />
        )}

        {/* Footer */}
        <footer className="bg-amber-900 text-amber-100 py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} Ajay Arts. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
