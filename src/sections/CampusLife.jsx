import Eyebrow from "../components/Eyebrow";
import { IconNetworking, IconGroup, IconCommunity } from "../components/Icons";
import { useState } from "react";

const categories = [
  {
    icon: IconNetworking,
    text: "Organisasi",
  },
  {
    icon: IconGroup,
    text: "UKM",
  },
  {
    icon: IconCommunity,
    text: "Komunitas",
  },
];

const directories = [
  {
    category: "Organisasi",
    image: "/images/bem-untan.png",
    text: "BEM UNTAN",
    desc: "Badan Eksekutif Mahasiswa tingkat universitas yang menjadi wadah aspirasi dan pergerakan mahasiswa untuk perubahan positif di kampus.",
  },
  {
    category: "Organisasi",
    image: "/images/dpm-untan.png",
    text: "DPM UNTAN",
    desc: "Dewan Perwakilan Mahasiswa yang menjalankan fungsi legislasi dan pengawasan terhadap kebijakan-kebijakan organisasi mahasiswa di universitas.",
  },
  {
    category: "Organisasi",
    image: "/images/hmif-untan.png",
    text: "HMIF UNTAN",
    desc: "Organisasi mahasiswa di bawah Program Studi Informatika yang menjadi wadah pengembangan akademik, kepemimpinan, dan jejaring bagi anggotanya.",
  },
  {
    category: "Organisasi",
    image: "/images/cafatifa-untan.png",
    text: "CAFATIFA",
    desc: "Organisasi ini menjadi wadah pelayanan, pembinaan iman, dan pengembangan karakter bagi mahasiswa Katolik di fakultas tersebut.",
  },
  {
    category: "UKM",
    image: "/images/mapala-untan.png",
    text: "MAPALA UNTAN",
    desc: "Wadah pecinta alam mahasiswa UNTAN yang membentuk karakter tangguh, peduli lingkungan, dan berjiwa petualang.",
  },
  {
    category: "UKM",
    image: "/images/lisma-untan.png",
    text: "LISMA UNTAN",
    desc: "Wadah mahasiswa yang mengembangkan minat literasi, diskusi, dan pemikiran kritis secara kolaboratif.",
  },
  {
    category: "UKM",
    image: "/images/lsmi-untan.png",
    text: "LSMI UNTAN",
    desc: "Unit kegiatan mahasiswa yang mewadahi pembinaan keagamaan, dakwah, dan pengembangan spiritual mahasiswa.",
  },
  {
    category: "UKM",
    image: "/images/sarang-semut-untan.png",
    text: "SARANG SEMUT",
    desc: "Komunitas mahasiswa yang menumbuhkan budaya literasi, diskusi kritis, dan pemikiran intelektual di lingkungan kampus.",
  },
  {
    category: "Komunitas",
    image: "/images/aiesec-untan.png",
    text: "AIESEC",
    desc: "Organisasi kepemudaan internasional di UNTAN yang mengembangkan kepemimpinan, pengalaman global, dan kolaborasi lintas budaya mahasiswa.",
  },
];

function CategoryCard({ icon: Icon, text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`font-inter flex cursor-pointer items-center gap-3 rounded-sm p-2 shadow-md transition-colors duration-300 md:p-4 ${active ? "bg-accent-light text-white" : "bg-light-gray hover:bg-accent-light hover:text-white"} `}
    >
      <Icon
        className={`h-3 w-3 md:h-5 md:w-5 lg:h-7 lg:w-7 ${
          active ? "text-white" : "group-hover:text-white"
        }`}
      />
      <p className="text-xs font-semibold group-hover:text-white sm:text-sm md:text-base lg:text-lg">
        {text}
      </p>
    </button>
  );
}

function DirectoryCard({ image, text, desc }) {
  return (
    <div className="bg-snow flex gap-2 rounded-lg p-2 shadow-lg transition-all duration-300 hover:scale-[1.02] md:gap-4 lg:p-4">
      <div className="bg-light-gray flex h-32 w-32 shrink-0 items-center justify-center rounded-lg p-4">
        <img
          src={image}
          className="object-square h-full w-full object-contain md:object-cover"
        />
      </div>
      <div className="lg:space-y-2">
        <h4 className="font-black tracking-tighter md:text-lg lg:text-xl">
          {text}
        </h4>
        <p className="text-xs md:text-sm lg:text-base">{desc}</p>
      </div>
    </div>
  );
}

export default function CampusLife() {
  const [activeCategory, setActiveCategory] = useState("Organisasi");

  const filteredDirectories = directories.filter(
    (directory) => directory.category === activeCategory,
  );

  return (
    <section className="font-inter flex flex-col items-center gap-2 px-3 py-5 sm:px-8 sm:py-8 md:px-8 md:py-12 lg:gap-8 lg:px-16 lg:py-24 xl:gap-8">
      <Eyebrow text="Kehidupan Kampus" />

      <h2 className="text-navy text-center text-2xl font-black tracking-tighter md:text-3xl lg:text-4xl xl:text-5xl">
        Aktivitas Mahasiswa & Organisasi Kampus
      </h2>

      <p className="text-gray space-y-2 text-center text-xs font-medium sm:text-xs sm:leading-4 md:leading-6 lg:text-sm lg:leading-6 xl:text-lg xl:leading-8">
        Mahasiswa UNTAN memiliki berbagai kesempatan untuk berkembang melalui
        organisasi, UKM, komunitas, dan kegiatan ekstrakurikuler.
      </p>

      <div className="flex w-full flex-col space-y-4 sm:flex-row sm:items-start sm:justify-start sm:gap-4 md:gap-12">
        <div className="flex flex-row justify-center gap-3 sm:flex-col md:w-[30%]">
          {categories.map((category) => (
            <CategoryCard
              key={category.text}
              {...category}
              active={activeCategory === category.text}
              onClick={() => setActiveCategory(category.text)}
            />
          ))}
        </div>

        <div className="flex flex-1 flex-col gap-4">
          {filteredDirectories.map((directory) => (
            <DirectoryCard key={directory.text} {...directory} />
          ))}
        </div>
      </div>
    </section>
  );
}
