import SearchInput from "@/components/ui/SearchInput";
import SortSelect from "@/components/ui/SortSelect";
import CategoryFilter from "@/components/ui/CategoryFilter";

type ProductFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
};

export default function ProductFilters({
  search,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: ProductFiltersProps) {
  return (
    <>
      <div className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:max-w-2xl">
          <SearchInput
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <SortSelect
          sortBy={sortBy}
          onSortChange={onSortChange}
        />
      </div>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
    </>
  );
}