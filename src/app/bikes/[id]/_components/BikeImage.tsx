import Image from "next/image";
type Props = {
  src: string;
};
const BikeImage = ({ src }: Props) => {
  return (
    <div className="flex justify-center items-center flex-1 border p-8 rounded-md">
      <Image
        src={src ?? "/default-image.svg"}
        alt={""}
        width={150}
        height={150}
        className="max-h-[50vh] h-auto w-full object-contain"
      />
    </div>
  );
};
export default BikeImage;
