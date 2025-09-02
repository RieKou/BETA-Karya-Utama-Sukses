import { motion } from "framer-motion"
import TentangImage from "../assets/PicSrcs/Etalase-2.png"

function Tentang() {
  return (
    <section className="flex flex-col md:flex-row w-full bg-gray-800 text-white">
      <div className="md:w-1/2 w-full h-64 md:h-[500px]">
        <img
          src={TentangImage}
          alt="Tentang Kami"
          className="object-cover w-full h-full"
        />
      </div>

      <div
        className="md:w-1/2 w-full px-8 py-12 flex flex-col justify-center space-y-6"
        id="abt"
      >
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-yellow-400 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Tentang <br />
          Karya Utama <br />
          Sukses
        </motion.h2>

        <motion.p
          className="text-gray-300 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <strong>Sejak 2010,</strong> kami bergerak di bidang distribusi
          material bangunan & alat-alat listrik dan teknik. Dengan pengalaman
          bertahun-tahun, kami berkomitmen untuk menyediakan produk berkualitas
          dengan pelayanan terbaik.
        </motion.p>
      </div>
    </section>
  )
}

export default Tentang
