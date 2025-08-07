import { motion } from "framer-motion"
import { FaShippingFast, FaStore } from "react-icons/fa"

const deliveryOptions = [
  {
    icon: <FaShippingFast className="text-5xl text-yellow-400 mb-4" />,
    title: "Tersedia Antar Barang",
    description: "Kami menyediakan layanan pengantaran barang langsung ke alamat Anda dengan cepat dan aman.",
  },
  {
    icon: <FaStore className="text-5xl text-yellow-400 mb-4" />,
    title: "Tersedia Pembelian di Tempat",
    description: "Anda bisa datang langsung ke toko kami dan membeli produk secara langsung tanpa harus menunggu.",
  },
]

function DeliveryOptions() {
  return (
    <section className="bg-gray-700 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Opsi Layanan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliveryOptions.map((option, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-white flex flex-col items-center text-center"
            >
              {option.icon}
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-300">{option.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeliveryOptions
