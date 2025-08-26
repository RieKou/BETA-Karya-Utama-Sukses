import { NavLink } from "react-router-dom"

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
      <p className="text-xl mb-6">Halaman tidak ditemukan</p>
      <NavLink 
        to="/Beranda" 
        className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition"
      >
        Kembali ke Beranda
      </NavLink>
    </div>
  )
}

export default NotFound
