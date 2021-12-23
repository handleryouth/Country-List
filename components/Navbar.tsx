import { useContext } from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { themeContext } from "./Layout";

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useContext(themeContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between  py-6 px-4 bg-darkblue">
      <h1 className="text-2xl text-white">Where in the world?</h1>

      <div
        className="flex items-center text-lg cursor-pointer mt-4 sm:mt-0"
        onClick={() => setDarkTheme((prevState) => !prevState)}
      >
        {(darkTheme && <FaMoon />) || <FaRegMoon className="text-white" />}
        <span className={`${!darkTheme && "text-white"} ml-4`}>
          {`${darkTheme ? "Dark" : "Light"}`} Mode
        </span>
      </div>
    </div>
  );
};

export default Navbar;
