import { useState } from 'react'
import Logo from '../assets/PicSrcs/logo-hori.png'
import BGEtalase from '../assets/PicSrcs/Etalase-0.jpg'
import { NavLink } from 'react-router-dom'
import produk1 from '../assets/PicSrcs/card-semen-3.jpg'
import produk2 from '../assets/PicSrcs/card-cat-1.jpg'
import produk3 from '../assets/PicSrcs/E-Potret-3.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="font-sans min-h-screen bg-gray-900 text-white">

      <section className="bg-gray-900 pt-6 pb-6 shadow-md">
        <header className="px-6 max-w-6xl mx-auto flex items-center justify-between">
          <NavLink to="/Beranda" className="hover:text-yellow-400 transition font-bold" end>
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
            <NavLink to="/Beranda" className="hover:text-yellow-400 transition font-bold">Beranda</NavLink>
            <NavLink to="/Etalase" className="hover:text-yellow-400 transition font-bold">Etalase</NavLink>
            <a href="https://wa.me/+6285278016889" target="_blank" rel='noopener noreferrer' className="hover:text-yellow-400 transition font-bold">Hubungi</a>
          </nav>
        </header>

        {isMenuOpen && (
          <div className="md:hidden px-6 mt-4 space-y-4 font-semibold">
            <NavLink to="/Beranda" className="block hover:text-yellow-400">Beranda</NavLink>
            <NavLink to="/Etalase" className="block hover:text-yellow-400">Etalase</NavLink>
            <a href="https://wa.me/+6285278016889" target="_blank" rel='noopener noreferrer' className="block hover:text-yellow-400">Hubungi</a>
          </div>
        )}
      </section>

      <section 
        className="relative w-full bg-cover bg-center" 
        style={{ backgroundImage: `url(${BGEtalase})` }}
      >
        <div className="pt-[30.85%]"></div> 
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white animate-fadeInUp delay-100">
            <span className='text-yellow-300'>[BETA]</span> Etalase
          </h1>
        </div>
      </section>

      <section className="bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Etalase Produk</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="w-full aspect-square overflow-hidden rounded mb-4">
              <img
                src={produk1}
                alt="Semen"
                draggable="false"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 select-none pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h3 className="text-xl font-semibold text-white">Semen</h3>
            <p className="text-gray-400">Semen Padang, Semen Merdeka, dll.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="w-full aspect-square overflow-hidden rounded mb-4">
              <img
                src={produk2}
                alt="Semen"
                draggable="false"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 select-none pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h3 className="text-xl font-semibold text-white">Cat Tembok</h3>
            <p className="text-gray-400">No Drop, Nippon Paint, dll.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="w-full aspect-square overflow-hidden rounded mb-4">
              <img
                src={produk3}
                alt="Semen"
                draggable="false"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 select-none pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h3 className="text-xl font-semibold text-white">Papan Triplek</h3>
            <p className="text-gray-400">3mm, 4mm, 6mm, dll.</p>
          </div>

        </div>
      </div>

    </section>

    

    </main>
  )
}

export default App