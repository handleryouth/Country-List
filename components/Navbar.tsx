import { useTheme } from "next-themes";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row justify-between  py-6 px-4 dark:bg-darkblue border-b-4">
      <h1 className="text-2xl dark:text-white">Where in the world?</h1>

      <div
        className="flex items-center text-lg cursor-pointer mt-4 sm:mt-0"
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        {theme === "dark" ? <FaMoon /> : <FaRegMoon />}

        <span className={`dark:text-white ml-4`}>
          {`${theme === "light" ? "dark" : "light"}`} Mode
        </span>
      </div>
    </div>
  );
};

export default Navbar;
