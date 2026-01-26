import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItemData {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItemData[];
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-b border-border"
        >
          <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
