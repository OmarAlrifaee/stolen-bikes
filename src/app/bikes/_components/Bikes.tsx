import { Layout } from "@/components/shared/Layout";
import BikeCard from "./BikeCard";
import { Pagination } from "@/components/shared/Pagination";

const Bikes = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <Layout variant={"cards"}>
        {arr.map((n) => (
          <BikeCard key={n} />
        ))}
      </Layout>
      <Pagination total={arr.length} pageSize={1} />
    </>
  );
};
export default Bikes;
