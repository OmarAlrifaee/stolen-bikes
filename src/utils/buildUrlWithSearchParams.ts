function buildURLWithQueryParamsArray(
  URL: string,
  queryParamsArray: {
    key: string;
    value: string | number | boolean | undefined;
  }[]
): string {
  const searchParams = new URLSearchParams();

  queryParamsArray.forEach(({ key, value }) => {
    if (value) {
      searchParams.append(key, String(value));
    }
  });

  const queryParams = searchParams.toString();
  const fullURL = queryParams ? `${URL}?${queryParams}` : URL;

  return fullURL;
}

export default buildURLWithQueryParamsArray;
