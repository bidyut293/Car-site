import Image from "next/image"

const Footer = () => {
  return (
    <footer>
      {/* Blue Contact Section */}
      <div className="bg-[#1e7bc8] text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:gap-20">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-5xl font-light mb-2">Get in touch</h2>
            <div className="w-12 h-0.5 bg-white mb-8"></div>
            <p className="text-xl mb-12 font-light">For general enquiries</p>

            <div className="space-y-6">
              <div>
                <p className="font-semibold mb-1">Address :</p>
                <p className="font-light">110, 16th Road, Chembur, Mumbai - 400071</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Phone :</p>
                <p className="font-light">+91 22 25208822</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Email :</p>
                <p className="font-light">info@supremegroup.co.in</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2">
            <form className="space-y-8">
              <div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full name"
                  className="w-full p-0 pb-3 bg-transparent border-0 border-b border-white text-white placeholder-white/70 focus:outline-none focus:border-white text-lg font-light"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  className="w-full p-0 pb-3 bg-transparent border-0 border-b border-white text-white placeholder-white/70 focus:outline-none focus:border-white text-lg font-light"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-0 pb-3 bg-transparent border-0 border-b border-white text-white placeholder-white/70 focus:outline-none focus:border-white text-lg font-light"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={1}
                  placeholder="Message"
                  className="w-full p-0 pb-3 bg-transparent border-0 border-b border-white text-white placeholder-white/70 resize-none focus:outline-none focus:border-white text-lg font-light"
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-white text-[#1e7bc8] font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* White Footer Section */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={200}
              height={60}
              className="h-15 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="font-semibold text-gray-900 mb-6 text-sm tracking-wide">APPLICATIONS</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Apparel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Automotive
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Filtration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Customised Solutions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-6 text-sm tracking-wide">COMPANY</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Innovation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Global Competency
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-6 text-sm tracking-wide">MORE</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-6 text-sm tracking-wide">FOLLOW US</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Medium
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">©2023. All Rights Reserved.</p>
            <p className="text-gray-500 text-sm">Supreme house: 110, 16th Road, Chembur, Mumbai - 400071.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
