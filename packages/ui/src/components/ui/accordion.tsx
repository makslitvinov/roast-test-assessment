"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { cn } from "@repo/ui/lib/utils";

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn("flex flex-col gap-5", className)}
    {...props}
  />
));
Accordion.displayName = AccordionPrimitive.Root.displayName;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "relative flex flex-1 items-center px-4 py-6 font-medium  rounded-[1rem] border border-bunker-400 bg-bunker-800 data-[state=open]:border-2  data-[state=open]:bg-[#450C05] data-[state=open]:pb-4 data-[state=open]:border-b-0 data-[state=open]:border-orange-500 data-[state=open]:rounded-b-none [&[data-state=open]>#checkbox-border]:border-[#FF6B17] [&[data-state=open]_#checkbox-point]:opacity-100",
        className,
      )}
      {...props}
    >
      <span
        id="checkbox-border"
        className="size-6 shrink-0 mr-2 rounded-full border-2 border-bunker-400 flex justify-center items-center"
      >
        <span
          id="checkbox-point"
          className="size-2.5 block rounded-full bg-white opacity-0 "
        ></span>
      </span>

      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden rounded-[1rem] border-2 bg-[#450C05] border-t-0 border-orange-500 rounded-t-none"
    {...props}
  >
    <div className={cn("pb-4 pt-0 px-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
