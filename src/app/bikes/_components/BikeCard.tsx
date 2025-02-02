import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/shared/Typography";
import { IBike } from "@/api/types";
import { getImageUrl } from "@/utils/getImageUrl";
import { convertUnixTimestampToDate } from "@/utils/convertUnixTimestampToDate";
type Props = {
  bike: IBike;
};
const BikeCard = ({ bike }: Props) => {
  const info = {
    Serial: bike?.serial,
    Colors: bike?.frame_colors?.join(", "),
    "Stolen Location": bike?.stolen_location,
  };
  return (
    <Card className="transition-all hover:shadow-lg min-h-[20rem] hover:border hover:border-primary overflow-hidden">
      <Link href={`/bikes/${bike?.id}`} className="block size-full">
        <CardHeader className="pb-2">
          <div className="h-40 flex justify-center">
            <Image
              src={getImageUrl(bike?.thumb ?? bike?.large_img)}
              alt={`${bike?.title}-Image`}
              width={150}
              height={150}
              className="max-h-40 h-auto w-full border rounded-sm"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Typography
            _color={"primary"}
            variant={"h3"}
            className="line-clamp-1"
          >
            {bike?.title ?? "unkown"}
          </Typography>
          <div className="grid grid-cols-1 gap-1 mt-3">
            {Object.entries(info).map(([title, desc]) => (
              <Typography
                variant={"small"}
                className="text-foreground flex gap-2"
                key={title}
              >
                {title}
                <span className="text-muted-foreground">
                  {desc ?? "unkown"}
                </span>
              </Typography>
            ))}
            <Typography
              variant={"small"}
              className="flex gap-2"
              _color={"secondary"}
            >
              Stolen Date
              <span className="text-muted-foreground">
                {convertUnixTimestampToDate(bike?.date_stolen) ?? "unkown"}
              </span>
            </Typography>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
export default BikeCard;
