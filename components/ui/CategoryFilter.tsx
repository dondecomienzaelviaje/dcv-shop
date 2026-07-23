const categories = [
    "Todos",
    "Libros",
    "Accesorios",
    "Academia",
  ];
  
  export default function CategoryFilter() {
    return (
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              index === 0
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