import { X, ShoppingBag, Trash2, Plus, Minus, Mail, Phone } from 'lucide-react'

export default function CartModal({ cart, isOpen, onClose, onRemove, onUpdateQuantity, onClear, isYellowTheme }) {
  if (!isOpen) return null

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className={`text-2xl font-bold flex items-center gap-2 ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>
            <ShoppingBag size={24} />
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-2">Add some beautiful artwork to get started!</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className={`flex gap-4 p-4 rounded-lg border ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
                    <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                      <img
                        src={`/Photos/${item.filename}`}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold truncate ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.size}</p>
                      <p className={`text-lg font-bold ${isYellowTheme ? 'text-yellow-600' : 'text-gold-600'}`}>${item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                        title="Remove from cart"
                      >
                        <Trash2 size={18} />
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className={`w-8 h-8 flex items-center justify-center ${isYellowTheme ? 'bg-yellow-200 hover:bg-yellow-300' : 'bg-amber-200 hover:bg-amber-300'} rounded transition-colors`}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className={`w-8 h-8 flex items-center justify-center ${isYellowTheme ? 'bg-yellow-200 hover:bg-yellow-300' : 'bg-amber-200 hover:bg-amber-300'} rounded transition-colors`}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className={`font-semibold text-xl font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Total Items</span>
                  <span className="font-semibold">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold text-amber-900">
                  <span>Total</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={onClear}
                  className="w-full py-2 px-4 border border-red-500 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                >
                  Clear Cart
                </button>
                
                <div className={`rounded-lg p-6 border mb-6 ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
                  <p className="text-sm text-gray-700 mb-3">
                    To complete your purchase, please contact us directly:
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+919461304074"
                      className={`flex items-center gap-2 ${isYellowTheme ? 'text-yellow-700 hover:text-yellow-900' : 'text-gold-700 hover:text-gold-900'}`}
                    >
                      <Phone size={18} />
                      <span>+91-94613-04074</span>
                    </a>
                    <a
                      href="mailto:artsajay@gmail.com"
                      className={`flex items-center gap-2 ${isYellowTheme ? 'text-yellow-700 hover:text-yellow-900' : 'text-gold-700 hover:text-gold-900'}`}
                    >
                      <Mail size={18} />
                      <span>artsajay@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
