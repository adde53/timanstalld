import React, { createContext, useContext, useState } from "react";
import { searchIndex, SearchItem } from "./searchIndex";

const SearchContext = createContext<{
  query: string;
  setQuery: (q: string) => void;
  results: SearchItem[];
}>({
  query: "",
  setQuery: () => {},
  results: [],
});

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [query, setQuery] = useState("");
  const results = query
    ? searchIndex.filter(
        item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.content.toLowerCase().includes(query.toLowerCase())
      )
    : [];
  return (
    <SearchContext.Provider value={{ query, setQuery, results }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
