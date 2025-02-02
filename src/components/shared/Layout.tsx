import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode, forwardRef } from "react";
const layoutVariants = cva("", {
  variants: {
    variant: {
      page: "container flex flex-col gap-11 py-11", // page
      cards:
        "grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-x-8 gap-y-5",
      "row-page":
        "container flex lg:flex-row flex-col md:justify-between gap-5 py-11",
    },
  },
  defaultVariants: {
    variant: "page",
  },
});
export interface DivProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}
const Layout = forwardRef<HTMLDivElement, DivProps>(
  ({ className, variant, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(layoutVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Layout.displayName = "Layout";

export { Layout, layoutVariants };
