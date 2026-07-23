type SortSelectProps = {
    sortBy: string;
    onSortChange: (value: string) => void;
  };
  
  export default function SortSelect({
    sortBy,
    onSortChange,
  }: SortSelectProps) {
    return (
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
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
        <option value="recent">Más recientes</option>
        <option value="price-asc">Menor precio</option>
        <option value="price-desc">Mayor precio</option>
        <option value="name-asc">Nombre A-Z</option>
        <option value="name-desc">Nombre Z-A</option>
      </select>
    );
  }