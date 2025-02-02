import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";
const Filter = () => {
  return (
    <Form
      action={"/bikes"}
      className="grid md:grid-cols-2 grid-cols-1 gap-3 items-end"
    >
      <Input
        type="search"
        name="search"
        placeholder="Search By Title"
        className="focus-visible:ring-primary"
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        <div>
          <Label htmlFor="date-from">From</Label>
          <Input
            type="date"
            id="date-from"
            name="date-from"
            className="focus-visible:ring-primary cursor-pointer"
          />
        </div>
        <div>
          <Label htmlFor="date-to">To</Label>
          <Input
            type="date"
            id="date-to"
            name="date-to"
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
