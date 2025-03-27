import React from 'react'

export default function Navbar() {
  return (
    <header className="w-full p-4 flex justify-center items-center">
        <nav className="flex gap-12">
            <a href="#" className="text-white">Nosotros</a>
            <a href="#" className="text-white">Experiencia</a>
            <a href="#" className="text-white">Contacto</a>
        </nav>
    </header>
  )
}
