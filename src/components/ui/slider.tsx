import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/utils/classnames";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    className={cn(
      "relative flex w-full touch-none select-none items-center",

      className
    )}
    ref={ref}
    {...props}
  >
    <SliderPrimitive.Track className="bg-eros-grey relative h-1 w-full grow overflow-hidden rounded-full">
      <SliderPrimitive.Range className="bg-eros-purple absolute h-full" />
    </SliderPrimitive.Track>

    {props.defaultValue && Array.isArray(props.defaultValue) ? (
      props.defaultValue.map((_, index) => (
        <SliderPrimitive.Thumb
          className={cn(
            "border-eros-purple bg-foreground ring-offset-background focus-visible:ring-ring block h-5 w-5 rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",

            index === 0 ? "left-0" : "right-0"
          )}
          key={index}
        />
      ))
    ) : (
      <SliderPrimitive.Thumb className="border-eros-purple bg-foreground ring-offset-background focus-visible:ring-ring block h-5 w-5 rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    )}

    <SliderPrimitive.Thumb className="border-eros-purple bg-foreground ring-offset-background focus-visible:ring-ring block h-5 w-5 rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
