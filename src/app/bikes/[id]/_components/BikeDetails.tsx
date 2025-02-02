import { Typography } from "@/components/shared/Typography";
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
const BikeDetails = () => {
  const bikeInfo = {
    Serial: "unknown",
    Propulsion: "pedal-assist-and-throttle",
    Name: "XPeak 1.0",
    Model: "Step-thru",
    "Primary colors": "white",
  };
  const theftInfo = {
    "Stolen Date": "6:14am",
    Location: "Austin, TX 78753",
    "Report Date": "12/1/2002",
  };
  return (
    <>
      <Typography variant={"h1"}>this is the title of the bike</Typography>
      <div className="flex flex-col gap-2">
        <SectionTitle title={"Bike Info"} />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
          {Object.entries(bikeInfo).map(([title, desc]) => (
            <Detail title={title} desc={desc} key={title} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <SectionTitle title={"Description"} />
        <Typography variant={"p"} className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo tempore
          rem consequatur nobis temporibus obcaecati iste necessitatibus ad
          distinctio itaque?
        </Typography>
      </div>
      <div className="flex flex-col gap-2">
        <SectionTitle title={"Theft Details"} />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
          {Object.entries(theftInfo).map(([title, desc]) => (
            <Detail title={title} desc={desc} key={title} />
          ))}
        </div>
      </div>
    </>
  );
};
export default BikeDetails;
