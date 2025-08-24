import './App.css'
import { useState, useEffect } from 'react'
import Logo from './assets/PicSrcs/logo-hori.png'
import Etalase1 from './assets/PicSrcs/Etalase-4.jpg'
import Etalase from './components/Etalase'
import Tentang from './components/Tentang.jsx'
import Testimoni from './components/Testimoni.jsx'
import Option from './components/Option.jsx'
import Footer from './components/Footer.jsx'
import Map from './components/Map.jsx'
import { NavLink } from 'react-router-dom' 

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-yellow-400 hover:bg-yellow-600 text-black font-bold p-3 rounded-full shadow-lg transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

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
            <NavLink to="/Beranda" className="hover:text-yellow-400 transition font-bold" end>
              Beranda
            </NavLink>
            <NavLink to="/Etalase" className="hover:text-yellow-400 transition font-bold">
              Etalase
            </NavLink>
            <a href="https://wa.me/+6285278016889" target="_blank" rel='noopener noreferrer' className="hover:text-yellow-400 transition font-bold">
              Hubungi
            </a>
          </nav>
        </header>

        {isMenuOpen && (
          <div className="md:hidden px-6 mt-4 space-y-4 font-semibold">
            <NavLink to="/" className="block hover:text-yellow-400" end>
              Beranda
            </NavLink>
            <NavLink to="/etalase" className="block hover:text-yellow-400">
              Etalase
            </NavLink>
            <a href="https://wa.me/+6285278016889" target="_blank" rel='noopener noreferrer' className="block hover:text-yellow-400">
              Hubungi
            </a>
          </div>
        )}
      </section>

      <section className="relative bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-x-16">
          <div className="text-center md:text-left md:w-1/2 space-y-6 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fadeInUp delay-100">
              <span className='text-yellow-400'>[BETA]</span> Selamat Datang di <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent transition-all duration-500">Karya Utama Sukses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 animate-fadeInUp delay-300">
              Temukan produk berkualitas kami dan dapatkan pengalaman terbaik.
            </p>
            <NavLink to="/Etalase">
              <button className="mt-4 bg-[#FFD700] hover:bg-yellow-600 text-black hover:text-white font-semibold px-6 py-3 rounded text-lg transition duration-200">
                Jelajahi Sekarang
              </button>
            </NavLink>
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

      <Map />

      <Footer />

      <BackToTop />

    </main>
  )
}

export default App