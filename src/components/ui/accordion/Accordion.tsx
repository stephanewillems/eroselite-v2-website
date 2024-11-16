import * as React from "react";

import {
  AccordionComponent,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components";

interface AccordionProps {
  items: {
    value: string;
    trigger: string;
    content: React.ReactNode;
  }[];
  collapsible?: boolean;
  type?: "single" | "multiple";
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  collapsible = false,
  type = "single",
}) => {
  return (
    <div className="w-full">
      <AccordionComponent
        className="w-full"
        collapsible={collapsible}
        type={type}
      >
        {items.map(({ value, trigger, content }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger>{trigger}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}
      </AccordionComponent>
    </div>
  );
};
