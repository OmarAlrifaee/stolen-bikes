"use client";

import { Typography } from "@/components/shared/Typography";
import { Button } from "@/components/ui/button";
import { errorMessages } from "@/data/errorMessages";
import Image from "next/image";
import Link from "next/link";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col gap-3 items-center justify-center w-[50vh] mx-auto">
      <Image
        src={"/illustrations/error.svg"}
        alt="error image"
        width={400}
        height={400}
      />
      <Typography _color={"secondary"} variant={"h3"}>
        {error?.message === errorMessages.default
          ? "Something Went Wronge"
          : "We have Problems In Server, Please Try Agine Until We Fix It"}
      </Typography>
      <div className="flex flex-col gap-2 w-full">
        <Button asChild variant={"primary"}>
          <Link href={"/bikes"}>Go To Bikes</Link>
        </Button>
        <Button onClick={reset} variant={"secondary"}>
          Try Agine
        </Button>
      </div>
    </div>
  );
};
export default error;
