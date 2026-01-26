import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

export interface FAQItemData {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItemData[];
}

// Helper to create a URL-safe slug from a question
export function createQuestionSlug(question: string): string {
  return question
    .toLowerCase()
    .replace(/[åä]/g, "a")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

export function FAQSection({ items }: FAQSectionProps) {
  const location = useLocation();
  const [openValue, setOpenValue] = useState<string | undefined>(undefined);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const hash = decodeURIComponent(location.hash.slice(1)); // Remove #
    if (hash) {
      // Find matching question by slug
      const matchIndex = items.findIndex(
        (item) => createQuestionSlug(item.question) === hash
      );
      if (matchIndex !== -1) {
        const value = `item-${matchIndex}`;
        setOpenValue(value);
        // Scroll to the item after a short delay to allow accordion to open
        setTimeout(() => {
          itemRefs.current[value]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      }
    }
  }, [location.hash, items]);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={openValue}
      onValueChange={setOpenValue}
    >
      {items.map((item, index) => {
        const value = `item-${index}`;
        return (
          <AccordionItem
            key={index}
            value={value}
            className="border-b border-border"
            ref={(el) => (itemRefs.current[value] = el)}
          >
            <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
