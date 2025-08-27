import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import { Navigation, Autoplay } from "swiper/modules"
import Nippon from "../../assets/PicSrcs/nippon.jpg"
import Jotun from "../../assets/PicSrcs/jotun.jpg"
import NoDrop from "../../assets/PicSrcs/nodrop.jpg"

const projects = [
  {
    id: 1,
    title: "Nippon Paint",
    desc: "Cat tembok berkualitas tinggi yang memberikan warna tahan lama dan perlindungan ekstra. Pilihan utama untuk mempercantik rumah maupun bangunan besar dengan hasil yang elegan.",
    img: Nippon,
    href: "#",
  },
  {
    id: 2,
    title: "JOTUN",
    desc: "Cat premium dengan teknologi perlindungan cuaca ekstrem. Tahan lama, mudah diaplikasikan, dan tersedia dalam berbagai pilihan warna modern yang elegan.",
    img: Jotun,
    href: "#",
  },
  {
    id: 3,
    title: "No Drop",
    desc: "Cat pelapis anti-bocor yang efektif melindungi dinding dari rembesan air. Cocok untuk bagian luar rumah dan bangunan agar tetap awet dan bebas dari masalah kebocoran.",
    img: NoDrop,
    href: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16 relative">
      <h2 className="text-3xl font-bold mb-8 text-center">Etalase - Cat Tembok</h2>

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
              <div className="bg-gradient-to-tr from-yellow-300 to-yellow-500 rounded-2xl shadow hover:shadow-lg transition flex flex-col cursor-pointer h-full">

                <div className="w-full h-60 overflow-hidden rounded-t-2xl">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
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
