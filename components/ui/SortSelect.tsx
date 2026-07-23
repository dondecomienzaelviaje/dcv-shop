export default function SortSelect() {
    return (
      <select
        className="
          rounded-2xl
          border
          border-white/10
          bg-neutral-900
          px-5
          py-4
          text-white
          outline-none
          transition-all
          duration-300
          focus:border-[#C8A04A]
        "
      >
        <option>Más recientes</option>
        <option>Menor precio</option>
        <option>Mayor precio</option>
        <option>Más vendidos</option>
      </select>
    );
  }