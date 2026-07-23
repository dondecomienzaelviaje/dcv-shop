import { Search } from "lucide-react";

type SearchInputProps = {
  placeholder?: string;
};

export default function SearchInput({
  placeholder = "Buscar productos...",
}: SearchInputProps) {
  return (
    <div className="relative">
      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-500"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-neutral-900
          py-4
          pl-14
          pr-5
          text-white
          outline-none
          transition-all
          duration-300
          placeholder:text-neutral-500
          focus:border-[#C8A04A]
          focus:ring-2
          focus:ring-[#C8A04A]/20
        "
      />
    </div>
  );
}