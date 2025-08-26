import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Logo from './assets/PicSrcs/logo-hori.png'
import Beranda from './pages/Beranda.jsx'
import EtalaseLKP from './pages/EtalaseLKP.jsx'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="font-sans min-h-screen bg-gray-900 text-white">
      <section className="bg-gray-900 pt-6 pb-6 shadow-md">
        <header className="px-6 max-w-6xl mx-auto flex items-center justify-between">
          <NavLink to="/" className="hover:text-yellow-400 transition font-bold">
            <img src={Logo} className="w-44" alt="Logo" />
          </NavLink>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={!isMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>

          <nav className="hidden md:flex space-x-6 text-base font-semibold">
            <NavLink to="/Beranda" className="hover:text-yellow-400 transition font-bold" end>
              Beranda
            </NavLink>
            <NavLink to="/Etalase" className="hover:text-yellow-400 transition font-bold">
              Etalase
            </NavLink>
            <a href="https://wa.me/+6285278016889" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition font-bold">
              Hubungi
            </a>
          </nav>
        </header>

        {isMenuOpen && (
          <div className="md:hidden px-6 mt-4 space-y-4 font-semibold">
            <NavLink to="/Beranda" className="block hover:text-yellow-400" end>
              Beranda
            </NavLink>
            <NavLink to="/Etalase" className="block hover:text-yellow-400">
              Etalase
            </NavLink>
            <a href="https://wa.me/+6285278016889" target="_blank" rel="noopener noreferrer" className="block hover:text-yellow-400">
              Hubungi
            </a>
          </div>
        )}
      </section>

      <Routes>
        {/* redirect default */}
        <Route path="/" element={<Navigate to="/Beranda" replace />} />
        <Route path="/Beranda" element={<Beranda />} />
        <Route path="/Etalase" element={<EtalaseLKP />} />
      </Routes>
    </main>
  )
}

export default App
