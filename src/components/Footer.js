// components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-white py-12">
        <div className="container mx-auto px-6">
          {/* Logo and Description Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0L30 8V24L16 32L2 24V8L16 0Z" fill="#FF4A17"/>
                  <path d="M16 4L26 10V22L16 28L6 22V10L16 4Z" fill="white"/>
                </svg>
                <span className="text-[#0B1222] text-xl font-bold">Hostrever</span>
              </div>
              
              {/* Description */}
              <p className="text-sm text-gray-600 mb-6">
                Hostrever proudly provides web hosting to over 40,000 customers with 99.9% uptime to over 750,000 websites.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
  
            {/* Navigation Links */}
            <div>
              <h3 className="font-bold text-[#0B1222] mb-4">Hosting</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Web Hosting</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">VPS Hosting</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">WordPress Hosting</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Shared Hosting</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Dedicated Hosting</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-bold text-[#0B1222] mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Client Area</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-bold text-[#0B1222] mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Cookies Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Refund Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">FAQ</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-bold text-[#0B1222] mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Mail Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Report Abuse</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Knowledge Base</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Site Map</a></li>
              </ul>
            </div>
          </div>
  
          {/* Payment Methods */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4">
              <img 
                src="https://cdn.worldvectorlogo.com/logos/mastercard-2.svg" 
                alt="Mastercard" 
                className="h-8"
              />
              <img 
                src="https://cdn.worldvectorlogo.com/logos/visa.svg" 
                alt="Visa" 
                className="h-8"
              />
              <img 
                src="https://cdn.worldvectorlogo.com/logos/american-express-2.svg" 
                alt="American Express" 
                className="h-8"
              />
              <img 
                src="https://cdn.worldvectorlogo.com/logos/discover-4.svg" 
                alt="Discover" 
                className="h-8"
              />
              <img 
                src="https://cdn.worldvectorlogo.com/logos/paypal-2.svg" 
                alt="PayPal" 
                className="h-8"
              />
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;