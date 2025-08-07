import TentangImage from '../assets/PicSrcs/Etalase-2.jpg'

function Tentang(){
    return (
        <section className="flex flex-col md:flex-row w-full bg-gray-800 text-white">
        <div className="md:w-1/2 w-full h-64 md:h-[500px]">
          <img
            src={TentangImage}
            alt="Tentang Kami"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:w-1/2 w-full px-8 py-12 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 leading-tight">
            Tentang<br />
            Karya Utama<br />
            Sukses
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Kami adalah perusahaan yang bergerak di bidang distribusi dan produksi berbagai macam kebutuhan retail dan grosir.
            Dengan pengalaman bertahun-tahun, kami berkomitmen untuk menyediakan produk berkualitas dengan pelayanan terbaik.
          </p>
        </div>
      </section>
    )
}

export default Tentang