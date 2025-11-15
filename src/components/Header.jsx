import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to='/' className="flex items-center">
          <img 
            src="https://appglide.io/wp-content/uploads/2023/03/Appglide-logo.png" 
            alt="Appglide Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <Link to="/growth" className="hover:underline">Growth Offerings</Link>
          <Link to="/priority-erp" className="hover:underline">Priority ERP Solutions</Link>
          <Link to="/case-studies" className="hover:underline">Case Studies</Link>
          <Link to="/blogs" className="hover:underline">Blogs</Link>
          <Link to="/careers" className="hover:underline">Careers</Link>
          <Link to="/resources" className="hover:underline">Resources</Link>
          <Link to="/contact" className="px-3 py-2 border rounded-md text-sm">Contact Us</Link>
        </nav>

        {/* Mobile */}
        <div className="md:hidden text-sm">
          <Link to="/contact" className="px-3 py-2 border rounded-md">Contact</Link>
        </div>
      </div>
    </header>
  )
}
