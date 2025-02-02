import { Layout } from "@/components/shared/Layout";
import BikeCard from "./BikeCard";
import { Pagination } from "@/components/shared/Pagination";
import { getAllBikes } from "@/api/services/bikes";
import { intialPage, per_page } from "@/data/pagination";
import { Typography } from "@/components/shared/Typography";
import { filterByDateRange } from "@/utils/filterByDateRange";
import { NotFound } from "@/components/shared/NotFound";

type Props = {
  page?: string;
  search?: string;
  start_date?: string;
  end_date?: string;
};
const Bikes = async ({
  page = intialPage.toString(),
  search,
  start_date,
  end_date,
}: Props) => {
  const { data, meta } = await getAllBikes({
    location: "munich",
    stolenness: "proximity",
    per_page: per_page.toString(),
    page,
    query: search,
  });
  // this filter will only applay on the current pagination page data
  // cuz backend api does'nt provide a date filter
  const filteredData = data?.filter((b) => {
    return start_date && end_date
      ? filterByDateRange({
          target: b?.date_stolen,
          start: start_date,
          end: end_date,
        })
      : true;
  });
  if (!filteredData.length)
    return <NotFound variant="NoData" className="mt-5" />;
  return (
    <>
      <div className="flex justify-between md:flex-row flex-col">
        <Typography>
          Total In Munich:{" "}
          <span className="text-muted-foreground">{meta?.proximity} bike</span>
        </Typography>
        <Typography>
          Total In World:{" "}
          <span className="text-muted-foreground">{meta?.stolen} bike</span>
        </Typography>
      </div>
      <Layout variant={"cards"}>
        {filteredData?.map((bike) => (
          <BikeCard key={bike?.id} bike={bike} />
        ))}
      </Layout>
      <Pagination total={meta?.proximity} pageSize={per_page} />
    </>
  );
};
export default Bikes;
