import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import { Navigation, Autoplay } from "swiper/modules"
import SemenPDG from "../../assets/PicSrcs/SemenPDG.png"
import SemenMDK from "../../assets/PicSrcs/semenMDK.png"
import SemenCnc from "../../assets/PicSrcs/semen-conch2.png"

const projects = [
  {
    id: 1,
    title: "Semen Padang",
    desc: "Semen legendaris dari ranah Minang, terpercaya sejak 1910. Kuat, tahan lama, dan jadi pilihan utama untuk fondasi kokoh.",
    img: SemenPDG,
    href: "#",
  },
  {
    id: 2,
    title: "Semen Merdeka",
    desc: "Pilihan modern untuk pembangunan masa kini. Ringan, efisien, dan mendukung proyek dari skala kecil hingga besar.",
    img: SemenMDK,
    href: "#",
  },
  {
    id: 3,
    title: "Semen Conch",
    desc: "Semen asal Tiongkok dengan kualitas internasional. Daya rekat tinggi, cepat kering, dan hasil kokoh, cocok untuk proyek modern yang efisien.",
    img: SemenCnc,
    href: "#",
  },
]


export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16 relative">
      <h2 className="text-3xl font-bold mb-8 text-center">Etalase - Semen</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((p) => (
          <SwiperSlide key={p.id}>
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-tr from-gray-300 to-gray-500 rounded-2xl shadow hover:shadow-lg transition flex flex-col cursor-pointer h-full">

                <div className="w-full h-120 overflow-hidden rounded-t-2xl">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover bg-white"
                  />
                </div>

                <div className="flex flex-col flex-1 p-4">
                  <h3 className="text-black text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-black mb-4 text-sm line-clamp-6">
                    {p.desc}
                  </p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
