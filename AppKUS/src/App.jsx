import './App.css'
import { useState } from 'react'
import Logo from './assets/PicSrcs/logo-hori.png'
import Etalase1 from './assets/PicSrcs/Etalase-4.jpg'
import Etalase from './components/Etalase'
import Tentang from './components/Tentang.jsx'
import Testimoni from './components/Testimoni.jsx'
import Option from './components/Option.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [search, setSearch] = useState("")


  return (
    <main className="font-sans min-h-screen bg-gray-900 text-white">

      <section className="bg-gray-900 pt-6 pb-6 shadow-md">
        <header className="px-6 max-w-6xl mx-auto flex items-center justify-between">
          <img src={Logo} className="w-44" alt="Logo" />

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
{/* 
          <form
            className="w-full md:w-auto mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-64 px-4 py-2 rounded bg-white text-black focus:outline-none"
              placeholder="Cari produk atau jasa..."
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black hover:text-white font-semibold px-4 py-2 rounded transition"
            >
              Search
            </button>
          </form> */}

          <nav className="hidden md:flex space-x-6 text-base font-semibold">
            <a href="#" className="hover:text-yellow-400 transition font-bold">Beranda</a>
            <a href="#" className="hover:text-yellow-400 transition font-bold">Etalase</a>
            <a href="https://wa.me/+6285278016889" className="hover:text-yellow-400 transition font-bold">Hubungi</a>
          </nav>
        </header>

        {isMenuOpen && (
          <div className="md:hidden px-6 mt-4 space-y-4 font-semibold">
            <a href="#" className="block hover:text-yellow-400">Beranda</a>
            <a href="#" className="block hover:text-yellow-400">Etalase</a> 
            <a href="https://wa.me/+6285278016889" className="block hover:text-yellow-400">Hubungi</a>
            <a></a>
          </div>
        )}
      </section>

      <section className="relative bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-x-16">
          <div className="text-center md:text-left md:w-1/2 space-y-6 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fadeInUp delay-100">
              [BETA] Selamat Datang di <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent transition-all duration-500">Karya Utama Sukses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 animate-fadeInUp delay-300">
              Temukan produk berkualitas kami dan dapatkan pengalaman terbaik.
            </p>
            <button className="mt-4 bg-[#FFD700] hover:bg-yellow-600 text-black hover:text-white font-semibold px-6 py-3 rounded text-lg transition duration-200">
              Jelajahi Sekarang
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fadeInRight">
            <div className="w-full h-64 md:h-80 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
              <img src={Etalase1} alt="Karya Utama Sukses" className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      <Etalase />

      <Tentang />

      <Testimoni />

      <Option />

      <Footer />

    </main>
  )
}

export default App
