"use server";

import fetchApi from "@/api/instance";
import { ApiResponse, IBike, IDataCount } from "@/api/types";
import buildURLWithQueryParamsArray from "@/utils/buildUrlWithSearchParams";

interface GetAllBikesParams {
  page?: string;
  per_page?: string;
  query?: string;
  location: string;
  stolenness: "proximity" | "all" | "non" | "stolen";
}
export const getAllBikes = async (params: GetAllBikesParams) => {
  const path = (type: "/search" | "/search/count") =>
    buildURLWithQueryParamsArray(
      type,
      Object.entries(params ?? {}).map(([key, value]) => {
        return {
          key,
          value,
        };
      })
    );
  // get the total bikes count for pagination
  const count = await fetchApi<IDataCount>(path("/search/count"));
  const data = await fetchApi<{ bikes: IBike[] }>(path("/search"));
  return {
    data: data?.bikes,
    meta: count,
  } as ApiResponse<IBike[], IDataCount>;
};
export const getBike = async ({ id }: { id: string }) => {
  const path = `/bikes/${id}`;
  const data = await fetchApi<{ bike: IBike }>(path);
  return data?.bike;
};
