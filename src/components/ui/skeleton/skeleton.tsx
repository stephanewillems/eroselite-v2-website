import { cn } from "@/utils/classnames";

export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-eros-grey opacity-5",
        className
      )}
      {...props}
    />
  );
};
