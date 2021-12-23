import { useEffect } from "react";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    setInterval(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <div className="text-center dark:bg-verydarkblue dark:text-white h-screen flex flex-col items-center justify-center">
      <p>Sorry, We not found it.</p>
      <p>We will get you back to the homepage</p>
    </div>
  );
};

export default Custom404;
