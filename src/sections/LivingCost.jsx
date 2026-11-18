import Eyebrow from "../components/Eyebrow";
import { IconHome, IconFood, IconTransport } from "../components/Icons";

const livingCostDetails = [
  {
    icon: IconHome,
    type: "Hunian",
    price: "+-600k",
  },
  {
    icon: IconFood,
    type: "Makan",
    price: "+-750k",
  },
  {
    icon: IconTransport,
    type: "Transport",
    price: "+-250k",
  },
];

function LivingCostCard({ icon: Icon, type, price }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2 rounded-lg bg-white/5 p-2 py-4 text-white md:flex-none md:p-4">
      <Icon />
      <p className="text-xs text-gray-400 uppercase sm:text-sm">{type}</p>
      <p className="text-sm font-black sm:text-base">Rp {price}</p>
      <p className="text-sm text-gray-400 sm:text-base">per bulan</p>
    </div>
  );
}

export default function LivingCost() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="relative">
        <img
          src="/images/biaya-hidup.png"
          alt="biaya hidup"
          className="h-80 w-full object-cover md:h-full md:w-120"
        />

        <div className="absolute inset-0 bg-[linear-gradient(0deg,#012338_0%,rgba(0,0,0,0.4)_55%,rgba(0,0,0,0)_100%)] md:bg-[linear-gradient(270deg,#012338_0%,rgba(0,0,0,0.4)_65%,rgba(0,0,0,0)_78%)]"></div>
      </div>

      <div className="bg-navy font-inter flex w-full flex-col gap-2 px-3 py-5 sm:px-8 sm:py-8 md:px-8 md:py-12 lg:gap-8 lg:px-16 lg:py-24 lg:pl-36 xl:gap-8">
        <Eyebrow text="Biaya Hidup Mahasiswa" />

        <h2 className="text-xl font-black tracking-tighter text-white sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Perkiraan Biaya Hidup Mahasiswa di Pontianak
        </h2>
        <p className="space-y-2 text-xs font-medium text-white sm:text-xs sm:leading-4 md:leading-6 lg:text-sm lg:leading-6 xl:text-lg xl:leading-8">
          Perencanaan keuangan yang baik membantu mahasiswa menjalani masa studi
          dengan lebih nyaman di Pontianak.
        </p>
        <span className="text-accent-light text-xs italic">
          *Biaya dapat berbeda sesuai kebutuhan dan gaya hidup masing-masing
          mahasiswa.
        </span>

        <div className="flex gap-2">
          {livingCostDetails.map((detail, index) => (
            <LivingCostCard key={index} {...detail} />
          ))}
        </div>
      </div>
    </section>
  );
}
