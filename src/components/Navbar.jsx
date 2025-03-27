import React from 'react'

export default function Navbar() {
  return (
    <header className="w-full p-4 flex justify-center items-center">
        <nav className="flex gap-12">
            <a href="/" className="text-white">Inicio</a>
            <a href="/psicoterapia" className="text-white">Psicoterapia</a>
            <a href="/constelaciones" className="text-white">Constelaciones</a>
            <a href="/contacto" className="text-white">Contacto</a>
        </nav>
    </header>
  )
}
