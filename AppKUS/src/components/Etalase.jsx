import produk1 from '../assets/PicSrcs/cat-tembok-hori.jpg'
import produk2 from '../assets/PicSrcs/E-Potret-2.jpg'
import produk3 from '../assets/PicSrcs/E-Potret-3.jpg'

function Etalase() {
  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Etalase Produk</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
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
            <h3 className="text-xl font-semibold text-white">Semen</h3>
            <p className="text-gray-400">Semen Padang, Semen Merdeka, dst.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="w-full aspect-square overflow-hidden rounded mb-4">
              <img
                src={produk1}
                alt="Cat Tembok"
                draggable="false"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 select-none pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h3 className="text-xl font-semibold text-white">Cat Tembok</h3>
            <p className="text-gray-400">No Drop, Fabio, dst.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="w-full aspect-square overflow-hidden rounded mb-4">
              <img
                src={produk3}
                alt="Papan Triplek"
                draggable="false"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 select-none pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h3 className="text-xl font-semibold text-white">Papan Triplek</h3>
            <p className="text-gray-400">3mm, 4mm, 6mm, dst.</p>
          </div>

        </div>
      </div>

      <div className="flex justify-center items-center pt-6">
        <button className="mt-4 bg-[#FFD700] hover:bg-yellow-600 text-black hover:text-white font-semibold px-6 py-3 rounded text-lg transition duration-200 flex justify-center items-center">
          Selengkapnya
        </button>
      </div>

    </section>
    
  )
}

export default Etalase
