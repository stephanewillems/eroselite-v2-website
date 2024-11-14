import { InputSize } from "@/types/input";

export const getInputIconSizes = (size: InputSize = "md"): [number, number] => {
  const iconSizeMap: Record<InputSize, [number, number]> = {
    sm: [16, 16],
    md: [22, 22],
    lg: [28, 28],
  };

  return iconSizeMap[size];
};
