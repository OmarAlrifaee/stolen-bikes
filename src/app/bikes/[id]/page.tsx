import { Layout } from "@/components/shared/Layout";

import BikeDetails from "./_components/BikeDetails";
import BikeImage from "./_components/BikeImage";

const page = () => {
  const src = "/temp/bike.jpg";
  return (
    <Layout variant={"row-page"} className="flex-col-reverse">
      <div className="flex-1 flex flex-col gap-12">
        <BikeDetails />
      </div>
      <BikeImage src={src} />
    </Layout>
  );
};
export default page;
