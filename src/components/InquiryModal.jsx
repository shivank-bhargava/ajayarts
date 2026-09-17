import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { X, Mail, Phone, MessageCircle } from 'lucide-react'

emailjs.init('eX05VBvRMVyyHwxUu')

export default function InquiryModal({ artwork, isOpen, onClose, isYellowTheme }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target)
    const templateParams = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      preferred_contact: formData.get('preferred_contact'),
      artwork_title: formData.get('artwork_title'),
      artwork_id: formData.get('artwork_id'),
      artwork_price: formData.get('artwork_price'),
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

  if (isSuccess) {
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
            onClick={onClose}
            className={`px-6 py-3 ${isYellowTheme ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gold-500 hover:bg-gold-600'} text-white rounded-md font-medium transition-colors`}
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white  max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className={`text-2xl font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>
            Inquire About This Artwork
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100  transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Artwork Info */}
          <div className={`mb-6 p-4  border ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
            <h3 className={`font-semibold text-lg ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-1`}>
              {artwork.title}
            </h3>
            <p className={`text-base font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'}`}>
              ${artwork.price.toLocaleString()}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Hidden fields for artwork info */}
            <input type="hidden" name="artwork_title" value={artwork.title} />
            <input type="hidden" name="artwork_id" value={artwork.id} />
            <input type="hidden" name="artwork_price" value={artwork.price} />
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone/WhatsApp */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your email address"
              />
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Mode of Contact *
              </label>
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${isYellowTheme ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gold-500 hover:bg-gold-600'} text-white py-3 px-6 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            We'll get back to you within 3 business days
          </p>
        </div>
      </div>
    </div>
  )
}
