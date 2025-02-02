import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";
type Props = {
  start_date: string;
  end_date: string;
  search: string;
};
const Filter = ({ end_date, search, start_date }: Props) => {
  return (
    <Form
      action={"/bikes"}
      className="grid md:grid-cols-2 grid-cols-1 gap-3 items-end"
    >
      <Input
        type="search"
        name="search"
        defaultValue={search}
        placeholder="Search By Title"
        className="focus-visible:ring-primary"
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        <div>
          <Label htmlFor="start_date">From</Label>
          <Input
            type="date"
            id="start_date"
            defaultValue={start_date}
            name="start_date"
            className="focus-visible:ring-primary cursor-pointer"
          />
        </div>
        <div>
          <Label htmlFor="end-date">To</Label>
          <Input
            type="date"
            id="end_date"
            defaultValue={end_date}
            name="end_date"
            className="focus-visible:ring-primary cursor-pointer"
          />
        </div>
      </div>
      <Button
        variant="primary"
        className="w-full md:col-span-2 font-semibold"
        type="submit"
      >
        Filter
      </Button>
    </Form>
  );
};
export default Filter;
