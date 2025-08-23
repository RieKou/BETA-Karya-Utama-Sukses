function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">Ringkasan</h3>
          <p className="text-gray-400">
            Kami menyediakan berbagai perlengkapan listrik dan material bangunan berkualitas dengan harga terjangkau.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">Kontak</h3>
          <p className="text-gray-400">Email: karyautamasukses889@gmail.com</p>
          <p className="text-gray-400">Telepon: +62 852-7801-6889</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">Ikuti Kami</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">Tiktok</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Karya Utama Sukses. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
