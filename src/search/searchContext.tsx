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


import { useSearch } from "@/search/SearchContext";

export function SearchField() {
  const { query, setQuery, results } = useSearch();
  return (
    <div className="relative">
      <input
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Sök på hela webbplatsen..."
        className="input"
      />
      {query && (
        <div className="absolute bg-white border rounded w-full z-10">
          {results.length === 0 && <div className="p-2 text-sm">Inga träffar</div>}
          {results.map(item => (
            <a key={item.path} href={item.path} className="block p-2 hover:bg-muted">
              <div className="font-semibold">{item.title}</div>
              <div className="text-xs text-muted-foreground">{item.content.slice(0, 80)}...</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}