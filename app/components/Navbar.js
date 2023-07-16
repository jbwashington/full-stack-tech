import Link from 'next/link'
import Logo from './Logo'

function Navbar() {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-start">
          <Link href="/">
            <Logo />
          </Link>
            <div className="hidden sm:ml-6 sm:flex sm:ml-auto">
              <div className="flex items-center space-x-4">
                <Link href="/about" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/about" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
            Contact
          </Link>
        </div>
      </div>

    </nav>
  )
}

export default Navbar;

