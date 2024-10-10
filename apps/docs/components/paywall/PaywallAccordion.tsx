"use client";

import { IconHashtag } from "@repo/ui/components/icons/hashtag";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/ui/accordion";
import Image from "next/image";

const content = [
  {
    title: "10 raw AI dating photos",
    oldPrice: 49,
    newPrice: 29,
    includes: [
      "Unlimited Generations",
      "Handpicked Photos",
      "Manual Editing by Experts",
    ],
    tag: null,
    quote: false,
  },
  {
    title: "40 raw AI dating photos",
    oldPrice: 69,
    newPrice: 39,
    includes: [
      "Unlimited Generations",
      "Handpicked Photos",
      "Manual Editing by Experts",
    ],
    tag: "Most popular",
    quote: false,
  },
  {
    title: "10 Curated edited AI photos",
    oldPrice: 500,
    newPrice: 249,
    includes: [
      "Unlimited Generations",
      "Handpicked Photos",
      "Manual Editing by Experts",
    ],
    tag: "Best value !",
    quote: true,
  },
];

export const PaywallAccordion = () => {
  return (
    <Accordion
      type="single"
      defaultValue={content[content.length - 1]?.title}
      className="w-full mt-6"
    >
      {content.map((item) => (
        <AccordionItem value={item.title} key={item.title}>
          <AccordionTrigger className="uppercase text-start text-lg tracking-tighter [&[data-state=open]_#accordion-tag]:text-white [&[data-state=open]_#accordion-tag]:bg-orange-gradient">
            {item.tag && (
              <div
                id="accordion-tag"
                className="text-background normal-case flex items-center justify-center rounded-[0.5rem] absolute h-[27px] right-4 -top-[13px] p-2 font-bold bg-white"
              >
                {item.tag}
              </div>
            )}
            <div className="flex flex-1 justify-between items-center">
              <p className="font-semibold">{item.title}</p>
              <p className="flex gap-1 items-end">
                <span className="font-semibold text-sm text-[#76919A] line-through">
                  ${item.oldPrice}
                </span>
                <span className="font-bold text-xl">${item.newPrice}</span>
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {item.includes.map((include) => (
              <div className="flex items-center gap-2" key={include}>
                <IconHashtag />
                <span className="font-semibold">{include}</span>
              </div>
            ))}

            {item.quote && (
              <div className="bg-[#2F0803] p-3 rounded-[1em] mt-3 flex gap-2 items-center">
                <div className="shrink-0 size-12">
                  <Image
                    src="/expert.jpg"
                    height={48}
                    width={48}
                    alt="Ben, an expert"
                    className="rounded-full shrink-0"
                  />
                </div>

                <span className="text-sm">
                  "Hi! I'm Ben, Dating Expert. I will work with you till you get
                  the best results. Guaranteed."
                </span>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
