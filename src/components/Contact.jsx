import { Mail, Phone, Instagram, MapPin, Facebook } from 'lucide-react'

export default function Contact({ isYellowTheme }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className={`text-3xl font-bold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-8`}>Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white  shadow-md p-6">
          <h2 className={`text-xl font-semibold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-6`}>Get in Touch</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Phone size={20} className={isYellowTheme ? 'text-yellow-600' : 'text-gold-600'} />
                Phone
              </h3>
              <a href="tel:+919461304074" className={`block ${isYellowTheme ? 'text-yellow-700 hover:text-yellow-900' : 'text-gold-700 hover:text-gold-900'}`}>
                +91-94613-04074
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Mail size={20} className={isYellowTheme ? 'text-yellow-600' : 'text-gold-600'} />
                Email
              </h3>
              <a href="mailto:artsajay@gmail.com" className={`block ${isYellowTheme ? 'text-yellow-700 hover:text-yellow-900' : 'text-gold-700 hover:text-gold-900'}`}>
                artsajay@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Instagram size={20} className={isYellowTheme ? 'text-yellow-600' : 'text-gold-600'} />
                Instagram
              </h3>
              <a
                href="https://www.instagram.com/artsajay_/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${isYellowTheme ? 'text-yellow-700 hover:text-yellow-900' : 'text-gold-700 hover:text-gold-900'}`}
              >
                @artsajay_
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Facebook size={20} className={isYellowTheme ? 'text-yellow-600' : 'text-gold-600'} />
                Facebook
              </h3>
              <a
                href="https://facebook.com/artsajaygarg"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${isYellowTheme ? 'text-yellow-700 hover:text-yellow-900' : 'text-gold-700 hover:text-gold-900'}`}
              >
                facebook.com/artsajaygarg
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <MapPin size={20} className={isYellowTheme ? 'text-yellow-600' : 'text-gold-600'} />
                Location
              </h3>
              <p className="text-gray-600">
                13, Avadhpuri, Janpath, Tonk Road<br />
                Jaipur-302 015 (Rajasthan), India<br />
                Available for worldwide shipping
              </p>
            </div>
          </div>
        </div>

        {/* Ordering Information */}
        <div className="bg-white  shadow-md p-6">
          <h2 className={`text-xl font-semibold ${isYellowTheme ? 'text-yellow-900' : 'text-amber-900'} mb-6`}>How to Order</h2>
          
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <span className={`${isYellowTheme ? 'bg-yellow-500' : 'bg-gold-500'} text-white  w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold`}>1</span>
              <p>Browse our gallery and select the artwork you're interested in</p>
            </div>
            <div className="flex items-start gap-3">
              <span className={`${isYellowTheme ? 'bg-yellow-500' : 'bg-gold-500'} text-white  w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold`}>2</span>
              <p>Contact us via phone or email to confirm availability</p>
            </div>
            <div className="flex items-start gap-3">
              <span className={`${isYellowTheme ? 'bg-yellow-500' : 'bg-gold-500'} text-white  w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold`}>3</span>
              <p>We'll provide payment details and shipping information</p>
            </div>
            <div className="flex items-start gap-3">
              <span className={`${isYellowTheme ? 'bg-yellow-500' : 'bg-gold-500'} text-white  w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold`}>4</span>
              <p>Your artwork will be carefully packaged and shipped to you</p>
            </div>
          </div>

          <div className={`mt-6 p-4  border ${isYellowTheme ? 'bg-yellow-50 border-yellow-200' : 'bg-amber-50 border-amber-200'}`}>
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> All artworks are original pieces. Each painting is unique 
              and comes with a certificate of authenticity.
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Follow */}
      <div className={`mt-8 bg-gradient-to-r ${isYellowTheme ? 'from-yellow-800 to-yellow-900' : 'from-amber-800 to-amber-900'}  shadow-md p-6 text-white`}>
        <h2 className="text-xl font-semibold mb-4">Follow Us on Social Media</h2>
        <p className="text-amber-100 mb-4">
          Stay updated with new artworks, exhibition news, and behind-the-scenes content
        </p>
        <a
          href="https://www.instagram.com/artsajay_/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 ${isYellowTheme ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gold-500 hover:bg-gold-600'} text-white px-6 py-3  font-medium transition-colors`}
        >
          <Instagram size={20} />
          Follow on Instagram
        </a>
      </div>
    </div>
  )
}
