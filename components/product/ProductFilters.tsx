import SearchInput from "@/components/ui/SearchInput";
import SortSelect from "@/components/ui/SortSelect";
import CategoryFilter from "@/components/ui/CategoryFilter";

export default function ProductFilters() {
  return (
    <>
      <div className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="w-full lg:max-w-2xl">
          <SearchInput />
        </div>

        <SortSelect />

      </div>

      <CategoryFilter />
    </>
  );
}