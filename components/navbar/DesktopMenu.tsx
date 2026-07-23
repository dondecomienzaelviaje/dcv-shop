import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function DesktopMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="
            relative
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-white/80
            transition-all
            duration-300
            hover:text-[#C8A04A]
            after:absolute
            after:left-0
            after:-bottom-2
            after:h-[2px]
            after:w-0
            after:bg-[#C8A04A]
            after:transition-all
            after:duration-300
            hover:after:w-full
          "
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}