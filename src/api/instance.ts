"use server";
import { errorMessages } from "@/data/errorMessages";
import { FetchError } from "@/utils/customError";
import { RequestInit } from "next/dist/server/web/spec-extension/request";
const baseUrl = process.env.BASE_URL;

const fetchApi = async <T>(
  path: string,
  requestInit?: RequestInit
): Promise<T> => {
  const init: RequestInit = {
    method: requestInit?.method ?? "GET",
    headers: [["Content-Type", "application/json"]] as HeadersInit,
    cache: "force-cache",
    next: {
      revalidate: 3600 * 3, // 3 hours
    },
    ...requestInit,
  };
  try {
    const url = `${baseUrl}${path || ""}`;
    const response = await fetch(url, init);
    if (!response.ok) {
      const error = new FetchError("error while fetching data");
      error.status = response.status;
      error.info = await response.json();
      if (error.status >= 500) error.message = errorMessages.serverError;
      else error.message = errorMessages.default;
      throw error;
    }
    if (response.status === 204) return true as T;
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default fetchApi;
