import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer(){
  return (
    <footer className="border-t mt-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-lg font-semibold">Appglide</div>
          <div className="text-sm text-gray-600 mt-2">Expert engineering teams and growth operations for modern companies.</div>
        </div>
        <div className="text-sm text-gray-700">
          <div className="font-semibold mb-2">Explore</div>
          <ul className="space-y-2">
            <li><Link to="/growth">Growth Offerings</Link></li>
            <li><Link to="/priority-erp">Priority ERP Solutions</Link></li>
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </div>
        <div className="text-sm text-gray-700">
          <div className="font-semibold mb-2">Contact</div>
          <div>Email: taham@appglide.io</div>
          <div className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Appglide. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}