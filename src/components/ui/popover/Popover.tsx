"use client";

import { PopoverContentProps } from "@radix-ui/react-popover";
import { ChevronsLeft } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/utils/classnames";

import { PopoverContent, PopoverRoot, PopoverTrigger } from "./components";

interface CustomPopoverProps extends PopoverContentProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Popover = ({
  trigger,
  children,
  className,
  ...rest
}: CustomPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PopoverRoot modal onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        align="start"
        className={cn("p-half max-h-[60vh] overflow-scroll hide-scrollbar md:max-h-full", className)}
        {...rest}
      >
        <div className="flex flex-col">
          <div className="flex justify-end">
            <ChevronsLeft
              className="cursor-pointer border border-foreground rounded-full p-quarter hover:border-gray-400"
              height={30}
              onClick={() => setIsOpen(false)}
              width={30}
            />
          </div>
          {children}
        </div>
      </PopoverContent>
    </PopoverRoot>
  );
};
