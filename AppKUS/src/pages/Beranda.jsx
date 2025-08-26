import Etalase from '../components/Etalase'
import Tentang from '../components/Tentang'
import Testimoni from '../components/Testimoni'
import Option from '../components/Option'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Etalase1 from '../assets/PicSrcs/Etalase-4.jpg'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../App.css'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-yellow-400 hover:bg-yellow-600 text-black font-bold p-3 rounded-full shadow-lg transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

function Beranda() {
  return (
    <>
      <section className="relative bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-x-16">
          <div className="text-center md:text-left md:w-1/2 space-y-6 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className='text-yellow-400'>[BETA]</span> Selamat Datang di <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">Karya Utama Sukses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Temukan produk berkualitas kami dan dapatkan pengalaman terbaik.
            </p>
            <NavLink to="/etalase">
              <button className="mt-4 bg-[#FFD700] hover:bg-yellow-600 text-black hover:text-white font-semibold px-6 py-3 rounded text-lg transition duration-200">
                Jelajahi Sekarang
              </button>
            </NavLink>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
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
    </>
  )
}

export default Beranda
