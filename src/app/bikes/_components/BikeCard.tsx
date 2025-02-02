import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/shared/Typography";
const BikeCard = () => {
  const src = "/temp/bike.jpg";
  return (
    <Card className="transition-all hover:shadow-lg min-h-[20rem] hover:border hover:border-primary overflow-hidden">
      <Link href={`/bikes/1`} className="block size-full">
        <CardHeader className="pb-2">
          <div className="h-40 flex justify-center">
            <Image
              src={src ?? "/default-image.svg"}
              alt={""}
              width={150}
              height={150}
              className="max-h-40 h-auto w-full border rounded-sm"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Typography _color={"primary"} variant={"h3"}>
            this is the title of the bike
          </Typography>
          <div className="grid grid-cols-1 gap-1 mt-3">
            <Typography variant={"small"} className="text-foreground">
              Serial: <span className="text-muted-foreground">RL91061014</span>
            </Typography>
            <Typography variant={"small"} className="text-foreground">
              Colors:{" "}
              <span className="text-muted-foreground">
                ref, blue, green, blue
              </span>
            </Typography>
            <Typography variant={"small"} className="text-foreground">
              Location:{" "}
              <span className="text-muted-foreground">Kardinya, 6163, AU</span>
            </Typography>
            <Typography variant={"small"} _color={"secondary"}>
              Stolen: <span className="text-muted-foreground">2:45am</span>
            </Typography>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
export default BikeCard;
