import { motion } from "framer-motion"
import { FaStar, FaUserCircle } from "react-icons/fa"

const testimonials = [
  {
    name: "User A",
    feedback: "Lengkap dan berkualitas! Produk yang saya beli sangat memuaskan.",
    role: "Local Guide",
    rating: 5,
  },
  {
    name: "User B",
    feedback: "Pengantaran cepat dan produk sesuai deskripsi. Sangat direkomendasikan!",
    role: "User Google",
    rating: 5,
  },
  {
    name: "User C",
    feedback: "Kokohnya asik diajak bercanda, jadi betah belanja di sini wkwkwk",
    role: "Ibu Rumah Tangga",
    rating: 5,
  },
]

function Testimoni() {
  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Pendapat Pelanggan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-white"
            >
              <div className="flex mb-2 text-yellow-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="italic mb-4">"{t.feedback}"</p>
              <div className="flex items-center gap-2">
                <FaUserCircle className="text-2xl text-white" />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimoni
