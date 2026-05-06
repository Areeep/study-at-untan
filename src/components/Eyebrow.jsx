export default function Eyebrow({ text }) {
  return (
    <div className="font-inter text-accent before:bg-accent relative h-fit pl-4 text-[7px] font-bold tracking-widest uppercase before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-3 before:-translate-y-1/2 before:content-[''] sm:text-xs lg:pl-8 lg:text-base lg:before:w-5">
      {text}
    </div>
  );
}
