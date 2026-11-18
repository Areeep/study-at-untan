import Eyebrow from "../components/Eyebrow";

export default function PontianakCity() {
  return (
    <section className="relative flex h-[40dvh] flex-col justify-center gap-2 bg-[url('/images/taman-digulis.png')] bg-cover bg-center px-4 text-white sm:h-[50dvh] sm:gap-4 sm:px-12 md:h-[70dvh] md:gap-6 md:px-16 lg:h-dvh lg:px-24">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.9)_-14.48%,rgba(0,0,0,0.4)_42.76%,rgba(0,0,0,0)_100%)]"></div>

      <div className="absolute bottom-12 flex flex-col gap-2 lg:bottom-40 lg:gap-8">
        <Eyebrow text="Kota Pontianak" />

        <h2 className="z-2 text-2xl font-black md:text-4xl md:leading-10 lg:text-6xl lg:leading-14 xl:text-8xl">
          Live In Pontianak
        </h2>

        <p className="z-2 max-w-[65ch] text-xs font-medium sm:text-sm md:text-base">
          Pontianak bukan sekadar ibu kota Kalimantan Barat, tetapi tempat yang
          nyaman untuk tinggal, ramah bagi mahasiswa, dan bersahabat di kantong.
          Kota ini menawarkan akses fasilitas umum yang lengkap, ragam kuliner
          yang menggoda, serta suasana belajar yang aktif dan penuh semangat.
        </p>
      </div>
    </section>
  );
}
