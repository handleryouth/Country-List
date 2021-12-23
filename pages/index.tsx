import { useCallback, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { NextPage } from "next";
import axios from "axios";
import { FlagThumbnailResponse } from "types";
import Head from "next/head";
import { CountryCard, InputDropdown, InputText } from "components";

export const getServerSideProps: GetServerSideProps = async () => {
  let responseData = await axios
    .get("https://restcountries.com/v3.1/all")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err.message));

  return {
    props: { data: responseData },
  };
};

const Home: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [initialData, setInitialData] = useState<
    FlagThumbnailResponse[] | undefined
  >(data);

  const handleLoadData = useCallback(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setInitialData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const handleFilterRegion = useCallback(
    (value: string) => {
      if (value === "All") {
        handleLoadData();
      } else {
        axios
          .get(
            `https://restcountries.com/v3.1/region/${value.toLocaleLowerCase()}`
          )
          .then((res) => setInitialData(res.data))
          .catch((err) => console.log(err.message));
      }
    },
    [handleLoadData]
  );

  return (
    <div className="dark:bg-verydarkblue">
      <Head>
        <title>Country Around The World</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Country Around the world" />
        <meta name="keywords" content="NextJS, Tailwind CSS, React, Country" />
        <meta httpEquiv="content-language" content="en-us" />
        <meta name="author" content="handleryouth" />
      </Head>
      <div className="flex justify-center flex-col py-8 items-center">
        <InputText placeholder="Search for a country" />
        <InputDropdown
          value={["All", "Africa", "Americas", "Asia", "Europe", "Oceania"]}
          toggleFunction={(value) => handleFilterRegion(value)}
        />
      </div>

      <div className="flex flex-wrap gap-11 justify-center h-full">
        {initialData &&
          initialData.map((item, index) => {
            return <CountryCard key={index} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Home;
