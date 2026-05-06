export default function Hero() {
  return (
    <section className="relative flex h-[40dvh] flex-col justify-center gap-2 bg-[url('/images/hero.jpeg')] bg-cover bg-center px-10 text-white sm:h-[50dvh] sm:gap-4 sm:px-12 md:h-[70dvh] md:gap-6 md:px-16 lg:h-[70dvh] lg:px-24">
      <div className="absolute inset-0 z-1 h-full w-full bg-[linear-gradient(270deg,rgba(0,0,0,0)_21.76%,rgba(0,0,0,0.4)_63.31%,rgba(0,49,80,0.72)_78.24%)]"></div>
      <h1 className="z-2 max-w-[8ch] text-xl font-black sm:text-2xl md:text-4xl md:leading-10 lg:text-5xl lg:leading-14">
        Study at{" "}
        <span className="text-[rgba(253,179,0,1)]">
          Universitas Tanjungpura
        </span>{" "}
        Pontianak
      </h1>
      <p className="z-2 max-w-[40ch] text-xs font-medium sm:text-sm md:text-base">
        Kuliah di kampus unggulan Kalimantan Barat dengan fasilitas lengkap,
        lingkungan nyaman dan kehidupan mahasiswa yang terjangkau
      </p>
    </section>
  );
}
