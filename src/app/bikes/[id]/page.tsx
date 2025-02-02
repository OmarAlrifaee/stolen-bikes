import { Layout } from "@/components/shared/Layout";

import BikeDetails from "./_components/BikeDetails";
import BikeImage from "./_components/BikeImage";
import { IBike } from "@/api/types";
import { getImageUrl } from "@/utils/getImageUrl";
type Props = {
  params: Promise<{
    id: string;
  }>;
};
const page = async ({ params }: Props) => {
  const { id } = await params;
  const res = await fetch(`https://bikeindex.org/api/v3/bikes/${id}`);
  const data: { bike: IBike } = await res.json();
  return (
    <Layout variant={"row-page"} className="flex-col-reverse">
      <div className="flex-1 flex flex-col gap-12">
        <BikeDetails {...data?.bike} />
      </div>
      <BikeImage
        src={getImageUrl(data?.bike?.thumb ?? data?.bike?.large_img)}
      />
    </Layout>
  );
};
export default page;
