function isValidDate(dateStr: string): boolean {
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
}
export const filterByDateRange = ({
  end,
  start,
  target,
}: {
  start: string;
  end: string;
  target: number;
}) => {
  if (!isValidDate(start) || !isValidDate(end)) {
    return true;
  }
  const parsedStartDate = new Date(start).toISOString();
  const parsedEndDate = new Date(end).toISOString();
  const parsedTargetDate = new Date(target * 1000).toISOString();
  return (
    parsedTargetDate >= parsedStartDate && parsedTargetDate <= parsedEndDate
  );
};
