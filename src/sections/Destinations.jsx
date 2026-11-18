import Eyebrow from "../components/Eyebrow";
import MapButton from "../components/MapButton";

const destinations = [
  {
    image: "/images/khatulistiwa.png",
    name: "Tugu Khatulistiwa",
    desc: "Ikon kota yang menandakan posisi garis lintang nol derajat di bumi.",
    href: "https://maps.app.goo.gl/BUw4GWfSSDxvMCKA6",
  },
  {
    image: "/images/waterfront.png",
    name: "Waterfront",
    desc: "Area pedestrian tepi sungai Kapuas yang populer untuk menikmati senja.",
    href: "https://maps.app.goo.gl/2uo4jwNZtGTsvogU6",
  },
  {
    image: "/images/qubu-resort.png",
    name: "Qubu Resort",
    desc: "Kawasan taman wisata terpadu dan resort bintang 4 di Kubu Raya",
    href: "https://maps.app.goo.gl/dfLJPdFJMK9ifja66",
  },
  {
    image: "/images/rumah-radank.png",
    name: "Rumah Radank",
    desc: "Rumah adat suku Dayak dan merupakan simbol harmoni budaya.",
    href: "https://maps.app.goo.gl/UqBchR3zimQSdTqW6",
  },
  {
    image: "/images/museum.png",
    name: "Museum",
    desc: "Koleksi Geografika/Geologika berupa peta dan jenis batu-batuan.",
    href: "https://maps.app.goo.gl/2SWXaJB3D9VXx9Kg7",
  },
  {
    image: "/images/amalzone.png",
    name: "Amalzone",
    desc: "Destinasi wisata alam dan rekreasi keluarga yang populer.",
    href: "https://maps.app.goo.gl/386expVMhHgMAmXA9",
  },
  {
    image: "/images/hutan-mangrove.png",
    name: "Hutan Mangrove",
    desc: "Pemandangan alami yang menakjubkan jalur trekking kayu",
    href: "#",
  },
  {
    image: "/images/mujahidin.png",
    name: "Masjid Mujahidin",
    desc: "Pemandangan alami yang menakjubkan jalur trekking kayu",
    href: "https://maps.app.goo.gl/zuvQv2CyH2yWayKp9",
  },
];

function DestinationCard({ image, name, desc, href }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="relative h-100 overflow-hidden rounded-lg bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0)_100%)]"></div>

      <div className="relative bottom-4 z-10 flex h-full max-w-72 flex-col justify-end gap-2 p-4 pb-0">
        <h3 className="font-black tracking-tight text-white md:text-xl">
          {name}
        </h3>
        <p className="text-xs text-gray-300 sm:text-sm">{desc}</p>
        <MapButton href={href} />
      </div>
    </div>
  );
}

export default function Destination() {
  return (
    <section className="font-inter flex flex-col items-center gap-2 px-3 py-5 sm:px-8 sm:py-8 md:px-8 md:py-12 lg:gap-8 lg:px-16 lg:py-24 xl:gap-8">
      <Eyebrow text="Wisata & Destinasi" />

      <h2 className="text-navy text-center text-xl font-black tracking-tighter sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
        Tempat Menarik di Pontianak
      </h2>

      <hr className="border-accent-light mb-4 w-[40%] border-2" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {destinations.map((destination) => (
          <DestinationCard key={destination.name} {...destination} />
        ))}
      </div>
    </section>
  );
}
