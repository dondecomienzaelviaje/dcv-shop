import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center"
    >
      <Image
        src="/logo/logo-dcv.png"
        alt="DCV"
        width={170}
        height={60}
        priority
        className="h-auto w-[150px] object-contain"
      />
    </Link>
  );
}