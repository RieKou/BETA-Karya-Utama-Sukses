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
        <div className="md:w-1/2 w-full px-8 py-12 flex flex-col justify-center space-y-6" id="#abt">
          <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 leading-tight">
            Tentang<br />
            Karya Utama<br />
            Sukses
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            <strong>Sejak 2010,</strong> kami adalah perusahaan yang bergerak di bidang distribusi material bangunan & alat-alat listrik dan teknik.
            Dengan pengalaman bertahun-tahun, kami berkomitmen untuk menyediakan produk berkualitas dengan pelayanan terbaik.
          </p>
        </div>
      </section>
    )
}

export default Tentang