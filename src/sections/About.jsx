import Eyebrow from "../components/Eyebrow";

const squareSize =
  "h-37.5 w-37.5 sm:h-60 sm:w-60 md:h-70 md:w-70 lg:h-100 lg:w-100 xl:w-150 xl:h-150";

export default function About() {
  return (
    <section className="font-inter flex gap-6 px-3 py-5 sm:gap-8 sm:px-8 sm:py-8 md:px-8 md:py-12 lg:gap-16 lg:px-16 lg:py-24">
      <div className={`relative ${squareSize}`}>
        <span
          className={`bg-cream absolute -right-3 -bottom-3 rounded-md lg:-right-6 lg:-bottom-6 lg:rounded-xl ${squareSize}`}
        ></span>
        <div
          className={`${squareSize} relative z-10 bg-[url('/images/hero.jpeg')] bg-cover bg-center`}
        ></div>
      </div>

      <div className="flex flex-col gap-2 lg:gap-6 xl:gap-8">
        <Eyebrow text="Tentang Untan" />

        <h2 className="text-navy text-sm font-black tracking-tighter sm:text-xl md:text-xl lg:text-4xl xl:text-5xl">
          Kampus Unggul di Kalimantan Barat
        </h2>

        <div className="text-gray space-y-2 text-[7px] font-medium sm:text-xs sm:leading-4 md:leading-6 lg:text-sm lg:leading-6 xl:text-lg xl:leading-8">
          <p>
            Universitas Tanjungpura merupakan perguruan tinggi negeri terkemuka
            di Kalimantan Barat yang berkomitmen menghadirkan pendidikan
            berkualitas.
          </p>
          <p>
            UNTAN terus mendorong pengembangan riset, inovasi, dan kolaborasi di
            berbagai bidang.
          </p>
          <p>
            Didukung lingkungan belajar yang nyaman, mahasiswa memiliki ruang
            untuk berkembang secara akademik maupun nonakademik.
          </p>
        </div>

        <a
          href="https://www.untan.ac.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-accent-dark text-navy flex w-fit items-center gap-0.5 border-b-2 text-[7px] font-bold sm:gap-1 sm:text-xs lg:text-sm"
        >
          Kunjungi Website Resmi{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mb-0.5 h-2.5 w-2.5 rotate-90 sm:h-3 sm:w-3 lg:h-5 lg:w-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 5.714a1 1 0 0 1 1 1v12.5a1 1 0 0 1-2 0v-12.5a1 1 0 0 1 1-1"
              clipRule="evenodd"
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 4.214a1 1 0 0 1 .707.293l4.5 4.5a1 1 0 0 1-1.414 1.415L12 6.628l-3.793 3.793a1 1 0 0 1-1.414-1.415l4.5-4.5A1 1 0 0 1 12 4.214"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
