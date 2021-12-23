import Image from "next/image";
import { useRouter } from "next/router";
import { FlagThumbnailResponse } from "types";

const CountryCard = ({
  capital,
  flags,
  name,
  population,
  region,
}: FlagThumbnailResponse) => {
  const router = useRouter();

  return (
    <div
      className=" dark:bg-darkblue dark:text-white rounded  min-w-[288px] overflow-hidden sm:w-80 cursor-pointer shadow-xl"
      onClick={() => {
        router.push(
          `/detail/${name.official.toLocaleLowerCase().replaceAll(" ", "_")}`
        );
      }}
    >
      <div className="relative w-full min-h-[12rem]">
        <Image
          src={flags.png}
          alt={`${name.official} flag`}
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl mb-2">{name.official}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
