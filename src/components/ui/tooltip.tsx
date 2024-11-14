import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "@/lib/utils";

interface TooltipContentProps extends TooltipPrimitive.TooltipContentProps {
  tooltip: React.ReactNode;
}

type TooltipWrappedComponentProps<E extends React.ElementType> = React.FC<
  React.ComponentPropsWithoutRef<E> & {
    tooltipProps: TooltipContentProps;
  }
>;

function TooltipWrap<E extends React.ElementType>(
  ComposedComponent: E
): TooltipWrappedComponentProps<E> {
  const WrappedComponent: TooltipWrappedComponentProps<E> = ({
    tooltipProps,
    children,
    ...props
  }) => {
    const { side = "top", tooltip, ...tooltipContentProps } = tooltipProps;

    return (
      <TooltipPrimitive.TooltipProvider>
        <TooltipPrimitive.Tooltip>
          <TooltipPrimitive.TooltipTrigger asChild>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-expect-error */}
            <ComposedComponent {...(props as React.ComponentProps<E>)}>
              {children}
            </ComposedComponent>
          </TooltipPrimitive.TooltipTrigger>
          <TooltipPrimitive.Content
            {...tooltipContentProps}
            className={cn(
              "z-50 overflow-hidden rounded-md bg-tooltip px-3 py-1.5 text-xs text-tooltip-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            )}
            side={side}
            sideOffset={4}
          >
            {tooltip}
            <TooltipPrimitive.Arrow
              className="TooltipArrow"
              color="var(--tooltip)"
              fill="var(--tooltip)"
            />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Tooltip>
      </TooltipPrimitive.TooltipProvider>
    );
  };

  return WrappedComponent;
}

export { TooltipWrap };
