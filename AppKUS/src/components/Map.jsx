function Map() {
  return (
    <section className="flex flex-col items-center gap-6 p-10">
      <div className="text-center">
        <h1 className="font-bold text-5xl p-3 text-yellow-400">
          Lokasi <span className="text-white">Toko</span>
        </h1>
        <p className="p-3">
          Jl. Srikandi No.88 E, Delima, Kec. Tampan, <br />
          Kota Pekanbaru, Riau 28292
        </p>
      </div>

      <div className="w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6769964395085!2d101.40434391090581!3d0.48224769951099844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a91ec5e1d771%3A0x10d0d3f7ae5b370e!2sKarya%20Utama%20Sukses!5e0!3m2!1sid!2sid!4v1755944092558!5m2!1sid!2sid"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Jam Operasional</h2>
        <p>Buka setiap hari pukul 07.30 – 20.00</p>
        <p className="text-sm text-gray-500 mt-1">Tutup pada hari libur Tahun Baru Imlek</p>
      </div>
    </section>
  );
}

export default Map;
