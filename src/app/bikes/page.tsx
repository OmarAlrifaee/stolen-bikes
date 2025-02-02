import { Layout } from "@/components/shared/Layout";
import { Typography } from "@/components/shared/Typography";
import { Suspense } from "react";
import Bikes from "./_components/Bikes";
import Filter from "./_components/Filter";
import Loading from "@/components/shared/Loading";
type Props = {
  searchParams: Promise<{
    search: string;
    pageNumber: string;
    start_date: string;
    end_date: string;
  }>;
};
const page = async ({ searchParams }: Props) => {
  const { pageNumber, search, end_date, start_date } = await searchParams;
  return (
    <Layout>
      <Typography variant={"h1"} _color={"primary"}>
        Stolen Bikes In Munich Area
      </Typography>
      <Filter search={search} start_date={start_date} end_date={end_date} />
      <Suspense
        key={`${pageNumber}-${search}`}
        fallback={<Loading variant={"spinner"} />}
      >
        <Bikes
          page={pageNumber}
          search={search}
          end_date={end_date}
          start_date={start_date}
        />
      </Suspense>
    </Layout>
  );
};
export default page;
