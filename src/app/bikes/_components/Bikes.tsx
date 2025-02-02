import { Layout } from "@/components/shared/Layout";
import BikeCard from "./BikeCard";
import { Pagination } from "@/components/shared/Pagination";
import { IBike, IDataCount } from "@/api/types";

const Bikes = async () => {
  const res = await fetch(
    `https://bikeindex.org/api/v3/search?location=munich&per_page=10&stolenness=proximity&page=2`
  );
  const countRes = await fetch(
    "https://bikeindex.org/api/v3/search/count?location=munich&distance=10&stolenness=proximity"
  );
  const countData: IDataCount = await countRes.json();
  const data: { bikes: IBike[] } = await res.json();
  return (
    <>
      <Layout variant={"cards"}>
        {data?.bikes?.map((bike) => (
          <BikeCard key={bike?.id} bike={bike} />
        ))}
      </Layout>
      <Pagination total={countData.proximity} pageSize={10} />
    </>
  );
};
export default Bikes;
