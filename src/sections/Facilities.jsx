import Eyebrow from "../components/Eyebrow";

const facilities = [
  {
    imgSrc: "/images/perpus.jpg",
    icon: "/icons/book-filled.svg",
    title: "Perpustakaan UNTAN",
    desc: "Koleksi literatur digital dan fisik terlengkap dengan ruang baca yang tenang dan modern.",
  },
  {
    imgSrc: "/images/rusunawa.jpg",
    title: "Rusunawa",
    icon: "/icons/house.svg",
    desc: "Hunian mahasiswa yang aman, terjangkau, dan berlokasi strategis di dalam lingkungan kampus.",
  },
  {
    imgSrc: "/images/rs-untan.jpg",
    icon: "/icons/hospital.svg",
    title: "Rumah Sakit Untan &  Klinik Pratama ",
    desc: "Layanan kesehatan prima bagi seluruh sivitas akademika dengan tenaga medis profesional.",
  },
  {
    imgSrc: "/images/gkb.jpg",
    icon: "/icons/building.svg",
    title: "Gedung Kuliah Bersama",
    desc: "Ruang kelas interaktif dengan dukungan teknologi multimedia terkini untuk proses belajar mengajar.",
  },
  {
    imgSrc: "/images/upt-bahasa.jpg",
    icon: "/icons/flag-indonesia.svg",
    title: "UPT Bahasa",
    desc: "Pusat pelatihan bahasa asing dan sertifikasi internasional untuk menunjang karir global.",
  },
  {
    imgSrc: "/images/area-olahraga.jpg",
    icon: "/icons/run-fill.svg",
    title: "Area Olahraga",
    desc: "Fasilitas olahraga outdoor dan indoor lengkap untuk menjaga kebugaran dan menyalurkan bakat.",
  },
];

export default function Facilities() {
  function Card({ imgSrc, title, desc, icon }) {
    return (
      <div className="rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]">
        <img src={imgSrc} alt={title} className="aspect-video rounded-t-xl" />
        <div className="relative space-y-2 px-2 py-3 sm:px-4 sm:py-5 lg:px-5 lg:py-6">
          <span className="bg-accent-light absolute -top-5 right-3 rounded-full p-2 xl:p-3">
            <img
              src={icon}
              alt=""
              className="h-3 w-3 sm:h-5 sm:w-5 xl:h-6 xl:w-6"
            />
          </span>
          <h3 className="text-[10px] font-black sm:text-sm xl:text-xl">
            {title}
          </h3>
          <p className="text-[7px] sm:text-xs xl:text-base">{desc}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="font-inter flex flex-col items-center gap-2 px-3 py-5 sm:px-8 sm:py-8 md:px-8 md:py-12 lg:gap-8 lg:px-16 lg:py-24 xl:gap-8">
      <Eyebrow text="Fasilitas Kampus" />

      <h2 className="text-navy text-center text-sm font-black tracking-tighter sm:text-xl md:text-xl lg:text-4xl xl:text-5xl">
        Fasilitas Kampus untuk Pengalaman Belajar yang Nyaman
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3">
        {facilities.map((facility, index) => (
          <Card key={index} {...facility} />
        ))}
      </div>
    </section>
  );
}
