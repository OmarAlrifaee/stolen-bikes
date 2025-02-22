import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
const typographyVariants = cva("font-bold", {
  variants: {
    variant: {
      h1: "md:text-xl text-lg",
      h2: "md:text-lg text-md",
      h3: "text-md",
      h4: "text-[1rem]",
      p: "text-[1rem] leading-[1.7] text-justify font-normal",
      small: "text-sm line-clamp-1",
    },
    _color: {
      primary: "text-primary",
      secondary: "text-secondary",
    },
  },
  defaultVariants: {
    variant: "h2",
    _color: "primary",
  },
});
export interface DivProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}
export function Typography({
  className,
  variant,
  _color,
  // asChild = false,
  children,
  ...props
}: DivProps) {
  return (
    <div
      className={cn(typographyVariants({ variant, _color, className }))}
      {...props}
    >
      {children}
    </div>
  );
}
