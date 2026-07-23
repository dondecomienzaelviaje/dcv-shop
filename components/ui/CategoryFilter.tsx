type CategoryFilterProps = {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
  };
  
  const categories = [
    "Todos",
    "Libros",
    "Papelería",
    "Accesorios",
    "Productividad",
  ];
  
  export default function CategoryFilter({
    selectedCategory,
    onCategoryChange,
  }: CategoryFilterProps) {
    return (
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[#C8A04A] text-black"
                : "border border-white/10 bg-neutral-900 text-white hover:border-[#C8A04A] hover:text-[#C8A04A]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }