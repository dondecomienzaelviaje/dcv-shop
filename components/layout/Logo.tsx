import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center"
    >
      <Image
        src="/logo/logo-dcv-wordmark.png"
        alt="DCV"
        width={149}
        height={118}
        priority
        className="h-11 w-auto object-contain sm:h-12"
      />
    </Link>
  );
}