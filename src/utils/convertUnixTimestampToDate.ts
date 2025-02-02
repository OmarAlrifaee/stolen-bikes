export function convertUnixTimestampToDate(unixTimestamp: number): string {
  // Convert the Unix timestamp to milliseconds (JavaScript uses milliseconds)
  const date = new Date(unixTimestamp * 1000);

  // Extract day, month, and year
  const day = String(date.getUTCDate()).padStart(2, "0"); // Ensure 2 digits
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = String(date.getUTCFullYear()).substring(2); // Get last 2 digits of the year

  // Format the date as dd-mm-yy
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}
