import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import NotFoundImage from "../../../public/illustrations/404-error.svg";
import NoDataImage from "../../../public/illustrations/no-data.svg";
import Link from "next/link";
const NotFoundTypes = {
  NoData: "NoData",
  NotFoundPage: "NotFoundPage",
};
export interface DivProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  errorMessage?: string;
  withErrorMessage?: boolean;
  variant?: keyof typeof NotFoundTypes;
}

export const NotFound = ({ variant = "NoData", className }: DivProps) => {
  const variants = {
    [NotFoundTypes.NotFoundPage]: {
      src: NotFoundImage,
      title: "Sorry This Page Does'nt Exist",
      action: {
        title: "Bikes",
        href: "/bikes",
      },
    },
    [NotFoundTypes.NoData]: {
      title: "No Data",
      // description: t("NoData.description"),
      src: NoDataImage,
    },
  };
  const { title, action, src } = variants[variant];
  return (
    variant in variants && (
      <div
        className={cn(
          "px-1 max-w-xs mx-auto flex flex-col justify-center items-center text-center gap-3",
          className
        )}
      >
        <Image src={src} alt={` image`} className="border rounded-md" />
        <div className="font-semibold text-lg">{title}</div>
        {action && (
          <Button asChild variant={"primary"} className="w-full">
            <Link href={`${action.href}`}>{action.title}</Link>
          </Button>
        )}
      </div>
    )
  );
};
NotFound.displayName = "NotFound";
