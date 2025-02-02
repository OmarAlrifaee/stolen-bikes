import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
const loaderVariants = cva("", {
  variants: {
    variant: {
      page: "min-h-screen flex justify-center items-center",
      spinner: "mt-16 mx-auto w-full flex items-center justify-center",
    },
  },
  defaultVariants: {
    variant: "page",
  },
});
interface LoaderProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof loaderVariants> {
  className?: string;
  children?: ReactNode;
}
const Loading = ({ className, variant }: LoaderProps) => {
  return (
    <div className={cn(loaderVariants({ variant }), className)}>
      <div className="loader" />
    </div>
  );
};
export default Loading;
