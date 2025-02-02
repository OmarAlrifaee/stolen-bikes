import { Layout } from "@/components/shared/Layout";

import BikeDetails from "./_components/BikeDetails";
import BikeImage from "./_components/BikeImage";
import { getImageUrl } from "@/utils/getImageUrl";
import { getAllBikes, getBike } from "@/api/services/bikes";
import { IBike } from "@/api/types";
import NotFound from "@/app/not-found";
// Generate static paths for all posts
export async function generateStaticParams() {
  const { data } = await getAllBikes({
    location: "munich",
    stolenness: "proximity",
  });
  // Return an array of params for each bike
  return data.map((post: IBike) => ({
    id: post.id.toString(), // Ensure the id is a string
  }));
}
type Props = {
  params: Promise<{
    id: string;
  }>;
};
const page = async ({ params }: Props) => {
  const { id } = await params;
  const bike = await getBike({ id });
  if (!bike) NotFound();
  return (
    <Layout variant={"row-page"} className="flex-col-reverse">
      <div className="flex-1 flex flex-col gap-12">
        <BikeDetails {...bike} />
      </div>
      <BikeImage src={getImageUrl(bike?.thumb ?? bike?.large_img)} />
    </Layout>
  );
};
export default page;
