'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gray-900 shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-500">SG</Link>
        <nav className="hidden md:flex space-x-6">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-teal-500 transition duration-300">
              {item}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-teal-500" /> : <Menu className="text-teal-500" />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-gray-800 py-4">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="block py-2 px-4 text-gray-300 hover:text-teal-500 transition duration-300">
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

