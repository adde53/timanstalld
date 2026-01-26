// src/search/searchIndex.ts
export interface SearchItem {
  title: string;
  path: string;
  content: string;
}

export const searchIndex: SearchItem[] = [
  {
    title: "Sjuklön timanställd första dagen",
    path: "/sjuklon-forsta-dagen",
    content: "Hur sjuklönen beräknas och vad du behöver göra. Första sjukdagen är en karensdag ...",
  },
  // Add all FAQ questions/answers, page titles, etc.
];