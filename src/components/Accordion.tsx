"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { PlusMinus } from "./PlusMinus";
import { cn } from "@/utils/styleUtils";

type AccordionProps = React.ComponentProps<typeof RadixAccordion.Root> & {
  data: {
    question: React.ReactNode;
    answer: React.ReactNode;
  }[];
  className?: string;
};

export function Accordion({ data, className, ...props }: AccordionProps) {
  return (
    <RadixAccordion.Root className={cn("", className)} {...props}>
      {data.map((faq, index) => (
        <RadixAccordion.Item
          key={faq.question?.toString()}
          value={index.toString()}
          className="border-b border-[--color-border] py-6 first:pt-0 last:border-none data-[state=closed]:cursor-pointer sm:py-8"
        >
          <RadixAccordion.Header asChild>
            <RadixAccordion.Trigger
              asChild
              className="group mb-2 flex w-full items-start justify-between gap-3 text-start text-lg font-medium text-[--color-trigger] sm:text-2xl"
            >
              <h2>
                {faq.question}
                <PlusMinus className="text-[--color-icon]" />
              </h2>
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content
            className="overflow-hidden text-left text-[--color-content] data-[state=closed]:animate-accordion-slide-up data-[state=open]:animate-accordion-slide-down sm:text-lg"
            asChild
          >
            {typeof faq.answer === "string" ? <p>{faq.answer}</p> : faq.answer}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
