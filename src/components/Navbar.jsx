import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag, Sun } from 'lucide-react'

export default function Navbar({ cartItemCount, onCartClick, isYellowTheme, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={`bg-gradient-to-r ${isYellowTheme ? 'from-yellow-900 to-yellow-800' : 'from-amber-900 to-amber-800'} text-white shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-amber-100 hover:text-amber-200 transition-colors"
            >
              Ajay Arts
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? `${isYellowTheme ? 'bg-yellow-600' : 'bg-gold-600'} text-white`
                      : 'text-amber-100 hover:bg-amber-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className="ml-4 p-2 text-amber-100 hover:text-yellow-400 transition-colors"
              title={isYellowTheme ? 'Switch to Amber Theme' : 'Switch to Yellow Theme'}
            >
              <Sun size={24} className={isYellowTheme ? 'text-yellow-400' : ''} />
            </button>
            
            {/* Cart Icon */}
            <button
              onClick={onCartClick}
              className="ml-2 relative p-2 text-amber-100 hover:text-gold-400 transition-colors"
            >
              <ShoppingBag size={24} />
              {cartItemCount > 0 && (
                <span className={`absolute -top-1 -right-1 ${isYellowTheme ? 'bg-yellow-500' : 'bg-gold-500'} text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold`}>
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button and cart */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className="p-2 text-amber-100 hover:text-yellow-400 transition-colors"
              title={isYellowTheme ? 'Switch to Amber Theme' : 'Switch to Yellow Theme'}
            >
              <Sun size={24} className={isYellowTheme ? 'text-yellow-400' : ''} />
            </button>
            
            {/* Cart Icon */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-amber-100 hover:text-gold-400 transition-colors"
            >
              <ShoppingBag size={24} />
              {cartItemCount > 0 && (
                <span className={`absolute -top-1 -right-1 ${isYellowTheme ? 'bg-yellow-500' : 'bg-gold-500'} text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold`}>
                  {cartItemCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-100 hover:bg-amber-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden ${isYellowTheme ? 'bg-yellow-800' : 'bg-amber-800'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? `${isYellowTheme ? 'bg-yellow-600' : 'bg-gold-600'} text-white`
                    : 'text-amber-100 hover:bg-amber-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
