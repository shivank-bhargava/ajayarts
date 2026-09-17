import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { X, ShoppingBag, Trash2, Plus, Minus, Mail, Phone, MessageCircle } from 'lucide-react'

emailjs.init('eX05VBvRMVyyHwxUu')

export default function CartModal({ cart, isOpen, onClose, onRemove, onUpdateQuantity, onClear, isYellowTheme }) {
  const [showInquiryForm, setShowInquiryForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isOpen) return null

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

  const handleInquirySubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target)
    const templateParams = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      preferred_contact: formData.get('preferred_contact'),
      cart_items: formData.get('cart_items'),
      total_price: formData.get('total_price'),
    }

    try {
      await emailjs.send('service_golbjtl', 'template_klbvvcm', templateParams)
      setIsSuccess(true)
    } catch (error) {
      console.error('EmailJS error:', error)
      alert('There was an error submitting your inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess && showInquiryForm) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white max-w-md w-full p-8 text-center">
          <div className="mb-4">
            <div className={`w-16 h-16 mx-auto ${isYellowTheme ? 'bg-yellow-100' : 'bg-amber-100'} rounded-full flex items-center justify-center`}>
              <Mail size={32} className={isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} />
            </div>
          </div>
          <h2 className={`text-2xl font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-4`}>
            Thank You!
          </h2>
          <p className="text-gray-700 mb-6">
            Your inquiry has been submitted successfully. We will get back to you within 3 business days.
          </p>
          <button
            onClick={() => {
              setShowInquiryForm(false)
              onClear()
              onClose()
            }}
            className={`px-6 py-3 ${isYellowTheme ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gold-500 hover:bg-gold-600'} text-white rounded-md font-medium transition-colors`}
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white  max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className={`text-2xl font-bold flex items-center gap-2 ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>
            <ShoppingBag size={24} />
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100  transition-colors"
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
                  <div key={item.id} className={`flex gap-4 p-4  border ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
                    <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                      <img
                        src={`/Photos/${item.filename}`}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-lg ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} truncate`}>{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.size}</p>
                      <p className={`text-base font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>${item.price.toLocaleString()}</p>
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
                {showInquiryForm ? (
                  <div className={`p-6 border ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
                    <h3 className={`font-semibold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-4`}>Inquire About These Artworks</h3>
                    <form onSubmit={handleInquirySubmit} className="space-y-4">
                      {/* Hidden fields for cart info */}
                      <input type="hidden" name="cart_items" value={cart.map(item => item.title).join(', ')} />
                      <input type="hidden" name="total_price" value={totalPrice} />
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Mode of Contact *</label>
                        <div className="space-y-2">
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name="preferred_contact"
                              value="phone"
                              className="w-4 h-4 text-amber-600"
                            />
                            <Phone size={18} className="text-gray-600" />
                            <span className="text-gray-700">Phone Call</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name="preferred_contact"
                              value="whatsapp"
                              className="w-4 h-4 text-amber-600"
                            />
                            <MessageCircle size={18} className="text-gray-600" />
                            <span className="text-gray-700">WhatsApp</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name="preferred_contact"
                              value="email"
                              className="w-4 h-4 text-amber-600"
                            />
                            <Mail size={18} className="text-gray-600" />
                            <span className="text-gray-700">Email</span>
                          </label>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`flex-1 ${isYellowTheme ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gold-500 hover:bg-gold-600'} text-white py-3 px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowInquiryForm(false)}
                          className="px-4 py-3 border border-gray-300 hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => setShowInquiryForm(true)}
                      className={`w-full ${isYellowTheme ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gold-500 hover:bg-gold-600'} text-white py-3 px-6 font-medium transition-colors flex items-center justify-center gap-2`}
                    >
                      <MessageCircle size={20} />
                      Inquire About These Artworks
                    </button>
                    
                    <button
                      onClick={onClear}
                      className="w-full py-2 px-4 border border-red-500 text-red-500 hover:bg-red-50 transition-colors"
                    >
                      Clear Cart
                    </button>
                    
                    <div className={`p-6 border ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
                      <p className="text-sm text-gray-700 mb-3">
                        Or contact us directly:
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
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
