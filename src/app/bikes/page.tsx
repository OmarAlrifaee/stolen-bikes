import { Layout } from "@/components/shared/Layout";
import { Typography } from "@/components/shared/Typography";
import { Suspense } from "react";
import Bikes from "./_components/Bikes";
import Filter from "./_components/Filter";

const page = () => {
  return (
    <Layout>
      <Typography variant={"h1"} _color={"primary"}>
        Stolen Bikes In Munich Area
      </Typography>
      <Filter />
      <Suspense fallback>
        <Bikes />
      </Suspense>
    </Layout>
  );
};
export default page;
