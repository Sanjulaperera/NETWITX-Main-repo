import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">NETWITX.com</h2>
            <p className="text-gray-400">Empowering businesses with cutting-edge web services and solutions.</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">API Management</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Cloud Hosting</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Analytics</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Security Solutions</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-gray-400 hover:text-white transition">Documentation</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Case Studies</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white transition">Support</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Instagram size={20} /></a>
            </div>
            <div className="flex items-center text-gray-400">
              <Mail size={20} className="mr-2" />
              <a href="mailto:sanjula.perera@netwitx.com" className="hover:text-white transition">contact@netwitx.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Netwitx. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

