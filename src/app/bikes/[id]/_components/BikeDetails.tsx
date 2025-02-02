import { IBike } from "@/api/types";
import { Typography } from "@/components/shared/Typography";
import { convertUnixTimestampToDate } from "@/utils/convertUnixTimestampToDate";
import { ReactNode } from "react";

const Detail = ({ title, desc }: { title: ReactNode; desc: ReactNode }) => (
  <Typography variant={"h4"} className="text-foreground flex gap-2">
    {title}:<span className="text-muted-foreground font-normal">{desc}</span>
  </Typography>
);
const SectionTitle = ({ title }: { title: string }) => (
  <Typography variant={"h2"} _color={"secondary"}>
    {title}
  </Typography>
);
const BikeDetails = (bike: IBike) => {
  const bikeInfo = {
    Serial: bike?.serial,
    "Propulsion Type": bike?.propulsion_type_slug,
    Model: bike?.frame_model,
    "Primary colors": bike?.frame_colors?.join(", "),
  };
  const theftInfo = {
    "Stolen Date": convertUnixTimestampToDate(bike?.date_stolen),
    "Stolen Location": bike?.stolen_location,
  };
  return (
    <>
      <Typography variant={"h1"}>{bike?.title}</Typography>
      <div className="flex flex-col gap-2">
        <SectionTitle title={"Bike Info"} />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
          {Object.entries(bikeInfo).map(([title, desc]) => (
            <Detail title={title} desc={desc ?? "unkown"} key={title} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <SectionTitle title={"Description"} />
        <Typography variant={"p"} className="text-muted-foreground">
          {bike?.description ?? "unkown"}
        </Typography>
      </div>
      <div className="flex flex-col gap-2">
        <SectionTitle title={"Theft Details"} />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
          {Object.entries(theftInfo).map(([title, desc]) => (
            <Detail title={title} desc={desc ?? "unkown"} key={title} />
          ))}
        </div>
      </div>
    </>
  );
};
export default BikeDetails;
