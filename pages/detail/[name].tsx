import { useRef } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import numeral from "numeral";
import Image from "next/image";
import { useRouter } from "next/router";
import { InferGetServerSidePropsType, NextPage } from "next/types";
import { FlagDetailResponse } from "types";
import { Badge } from "components";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const responseData = await axios
    .get(`https://restcountries.com/v3.1/name/${context.params!.name}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err.message));

  if (!responseData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: responseData },
  };
};

const NationDetail: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const flagDetail = useRef<FlagDetailResponse>(
    (data as FlagDetailResponse[])[0]
  );
  const router = useRouter();

  const nativeNameCollection: string[] = [];

  const currenciesNameCollection: string[] = [];

  Object.keys(flagDetail.current.name.nativeName).map((key) => {
    nativeNameCollection.push(key);
  });

  Object.keys(flagDetail.current.currencies).map((key) => {
    currenciesNameCollection.push(key);
  });

  return (
    <div className="dark:bg-verydarkblue dark:text-white">
      <div className="w-11/12 mx-auto py-8 ">
        <button
          className="w-32 h-8  dark:bg-darkblue border-2"
          onClick={() => router.push("/")}
        >
          Get Back
        </button>
      </div>
      <div className="flex h-screen items-center flex-col xl:flex-row">
        <div className="xl:basis-2/4 relative w-10/12 sm:w-full min-h-[24rem]">
          <Image
            src={flagDetail.current.flags.png}
            alt={`${flagDetail.current.name.official} flag`}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="sm:basis-2/4 mt-4 sm:mt-8 xl:mt-0 w-10/12 sm:w-auto">
          <h3 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-8">
            {flagDetail.current.name.official}
          </h3>
          <div className="flex flex-col sm:flex-row">
            <div>
              <p className="mb-1">
                Native Name:
                {
                  flagDetail.current.name.nativeName[nativeNameCollection[0]]
                    .official
                }
              </p>
              <p className="mb-1">
                Population:{" "}
                {numeral(flagDetail.current.population).format("0,0")}
              </p>
              <p className="mb-1">Region: {flagDetail.current.region}</p>
              <p className="mb-1">Sub Region: {flagDetail.current.subregion}</p>
              <p className="mb-1">Capital: {flagDetail.current.capital}</p>
            </div>

            <div className="sm:ml-11">
              <p className="mb-1">
                Top level Domain: {flagDetail.current.tld[0]}
              </p>
              <p className="mb-1">
                Currencies:
                {
                  flagDetail.current.currencies[currenciesNameCollection[0]]
                    .name
                }
              </p>
              <p className="mb-1">Languages:</p>
              <ul className="list-disc list-inside">
                {Object.keys(flagDetail.current.languages).map((key, index) => {
                  return (
                    <li key={index}>{flagDetail.current.languages[key]}</li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex items-center xl:items-start mt-8 flex-col cm:flex-row">
            <p>Border:</p>
            <div className="flex flex-wrap  flex-row sm:items-center">
              {flagDetail.current.borders &&
                flagDetail.current.borders.map((item, index) => {
                  return <Badge key={index} title={item} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationDetail;
