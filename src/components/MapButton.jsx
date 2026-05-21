import { IconGoogleMaps } from "./Icons";

export default function MapButton({ className, href }) {
  return (
    <a
      className={`${className} flex w-fit items-center gap-2 rounded-lg bg-white p-2 text-xs font-bold hover:bg-gray-100 sm:text-sm`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconGoogleMaps />
      Open Maps
    </a>
  );
}
