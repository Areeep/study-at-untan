import Eyebrow from "../components/Eyebrow";
import MapButton from "../components/MapButton";
import { useState } from "react";

const categories = ["Rumah Makan", "Coffee Shop"];

const cuisines = [
  {
    category: "Rumah Makan",
    image: "/images/gebuk-sambalado.png",
    name: "Gebuk Sambalado",
    desc: "Ayam gepuk pedas gurih meresap, bikin nambah tanpa terus",
    href: "https://maps.app.goo.gl/J1xCUCqVyTqPStG6A",
  },
  {
    category: "Rumah Makan",
    image: "/images/kota-sari.png",
    name: "Kota Sari",
    desc: "Hangat rumahan menggoda, sekali coba langsung jatuh cinta",
    href: "https://maps.app.goo.gl/Tx5Rbt6TxCtFuiGdA",
  },
  {
    category: "Rumah Makan",
    image: "/images/good-mom.png",
    name: "Good Mom",
    desc: "Menu rumahan enak dengan porsi besar",
    href: "https://maps.app.goo.gl/2YUa1AQDKWfVQBJcA",
  },
  {
    category: "Rumah Makan",
    image: "/images/rice-n-shine.png",
    name: "Rice n Shine",
    desc: "Nasi topping kekinian dengan tampilan menarik dan topping yang melimpah",
    href: "https://maps.app.goo.gl/mZoVi2A8EPVZQM5YA",
  },
  {
    category: "Rumah Makan",
    image: "/images/ayam-melepar.png",
    name: "Ayam Melepar",
    desc: "Ayam crispy gurih pedas favorit mahasiswa dengan ayam renyah pedas menggigit",
    href: "https://maps.app.goo.gl/DRbCvAS7EPAbxjvM6",
  },
  {
    category: "Rumah Makan",
    image: "/images/geprek-umi.png",
    name: "Geprek Umi",
    desc: "Ayam geprek pedas murah dan mengenyangkan dengan pedasnya nampol mantap",
    href: "https://maps.app.goo.gl/HV8X9qyLkjT7rULC7",
  },
  {
    category: "Coffee Shop",
    image: "/images/cw-coffee.png",
    name: "CW Coffee",
    desc: "CW Coffee awalnya berdiri pada tahun 2015 dengan nama Cyber World iCafe, sebuah kafe internet (warnet) berkecepatan tinggi yang buka 24 jam",
    href: "https://maps.app.goo.gl/xRJn6eM93PonZFfWA",
  },
  {
    category: "Coffee Shop",
    image: "/images/nordu-coffee.png",
    name: "Nordu Coffee ",
    desc: "NORDU Coffee & Eatery (populer dikenal sebagai Kopi Nomor  dua menawarkan tempat yang nyaman untuk bekerja (Work From Home) dengan menu kopi dan hidangan yang ramah di kantong",
    href: "https://maps.app.goo.gl/hZ7NM8QT1msoVXxWA",
  },
  {
    category: "Coffee Shop",
    image: "/images/toko-kami.png",
    name: "Toko Kami",
    desc: "Toko Kami didirikan pada November 2021 oleh seorang pemuda kreatif bernama Yudistira Nusantara. Nama 'Toko Kami' merupakan sebuah akronim dari Toko Kudapan dan Aneka Minuman Indonesia",
    href: "https://maps.app.goo.gl/Nc9TX7aSQAJNr7es7",
  },
  {
    category: "Coffee Shop",
    image: "/images/lokale.png",
    name: "Lokale",
    desc: "Lokale didirikan oleh Asmako pada tahun 2017. Berawal dari kecintaan pemiliknya terhadap racikan kopi, Lokale hadir untuk menciptakan cita rasa kopi modern yang pas dengan lidah masyarakat",
    href: "https://maps.app.goo.gl/uZdp47HePFmJi7GH6",
  },
  {
    category: "Coffee Shop",
    image: "/images/weng-coffee.png",
    name: "Weng Coffee",
    desc: "Weng Coffee adalah salah satu legenda hidup warung kopi di Kota Khatulistiwa yang sudah berdiri sejak tahun 1970",
    href: "https://maps.app.goo.gl/EW3C4fjh4ZEpiRf18",
  },
  {
    category: "Coffee Shop",
    image: "/images/tropic-coffee.png",
    name: "Tropic Coffee",
    desc: "Tropic Cafe Pontianak merupakan salah satu pelopor coffee shop modern berskala besar di Pontianak yang mengusung konsep 24 jam nonsenstop dengan harga super ramah kantong",
    href: "https://maps.app.goo.gl/b3P9QJMk4mBPHoQM9",
  },
];

function CategoryButton({ text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`mb-4 cursor-pointer rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 ${active ? "bg-navy text-white" : "bg-gray-100 hover:bg-gray-200"}`}
    >
      {text}
    </button>
  );
}

function CulinaryCard({ image, name, desc, href }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl shadow-lg">
      <img
        src={image}
        alt={name}
        className="aspect-video rounded-t-xl object-cover"
      />
      <div className="flex flex-col gap-2 px-4 pt-2 pb-4">
        <h3 className="font-black tracking-tight md:text-xl">{name}</h3>
        <p className="text-xs font-medium sm:text-sm">{desc}</p>
        <MapButton href={href} className="self-end border" />
      </div>
    </div>
  );
}

export default function Culinary() {
  const [activeCategory, setActiveCategory] = useState("Rumah Makan");

  const filteredCuisines = cuisines.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <section className="font-inter flex flex-col items-center gap-2 px-3 py-5 sm:px-8 sm:py-8 md:px-8 md:py-12 lg:gap-8 lg:px-16 lg:py-24 xl:gap-8">
      <Eyebrow text="Cafe & Kuliner" />

      <h2 className="text-navy text-center text-xl font-black tracking-tighter sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
        Kuliner dan Coffee Shop Favorit Mahasiswa
      </h2>

      <hr className="border-accent-light mb-4 w-[40%] border-2" />

      <div className="flex justify-center gap-4">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            text={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCuisines.map((culinary) => (
          <CulinaryCard key={culinary.name} {...culinary} />
        ))}
      </div>
    </section>
  );
}
