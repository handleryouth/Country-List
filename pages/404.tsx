import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    setInterval(() => {
      router.push("/");
    }, 4000);
  }, [router]);

  return (
    <div className="text-center dark:bg-verydarkblue dark:text-white h-screen flex flex-col items-center justify-center">
      <Head>
        <title>404 Not Found</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="404 Country not Found" />
        <meta name="keywords" content="NextJS, Tailwind CSS, React, Country" />
        <meta httpEquiv="content-language" content="en-us" />
        <meta name="author" content="handleryouth" />
      </Head>
      <p>Sorry, We not found it.</p>
      <p>We will get you back to the homepage</p>
    </div>
  );
};

export default Custom404;
