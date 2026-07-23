"use client";

import { useState } from "react";
import SearchInput from "@/components/ui/SearchInput";

export default function ProductSearch() {
  const [search, setSearch] = useState("");

  return (
    <SearchInput
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Buscar productos..."
    />
  );
}