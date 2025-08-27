import { NavLink, Outlet } from "react-router-dom"
import BGEtalase from "../assets/PicSrcs/Etalase-0.jpg"
import produk1 from "../assets/PicSrcs/card-semen-3.jpg"
import produk2 from "../assets/PicSrcs/card-cat-1.jpg"
import produk3 from "../assets/PicSrcs/E-Potret-3.jpg"
import '../App.css'

function EtalaseLKP() {
  return (
    <main className="font-sans min-h-screen bg-gray-900 text-white">

      <section
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${BGEtalase})` }}
      >
        <div className="pt-[30.85%]"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            <span className="text-yellow-300">[BETA]</span> Etalase
          </h1>
        </div>
      </section>

      <section className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Etalase Produk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <NavLink to="Semen">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition">
                <div className="w-full aspect-square overflow-hidden rounded mb-4">
                  <img
                    src={produk1}
                    alt="Semen"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    draggable="false"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">Semen</h3>
                <p className="text-gray-400">Semen Padang, Semen Merdeka, dll.</p>
              </div>
            </NavLink>

            <NavLink to="Cat">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition">
                <div className="w-full aspect-square overflow-hidden rounded mb-4">
                  <img
                    src={produk2}
                    alt="Cat Tembok"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    draggable="false"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">Cat Tembok</h3>
                <p className="text-gray-400">No Drop, Nippon Paint, dll.</p>
              </div>
            </NavLink>

            <NavLink to="Triplek">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition">
                <div className="w-full aspect-square overflow-hidden rounded mb-4">
                  <img
                    src={produk3}
                    alt="Triplek"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    draggable="false"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">Papan Triplek</h3>
                <p className="text-gray-400">3mm, 4mm, 6mm, dll.</p>
              </div>
            </NavLink>

          </div>
        </div>
      </section>

      <Outlet />
    </main>
  )
}

export default EtalaseLKP
