import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { InputTextProps } from "types";

const InputText = ({ placeholder, toggleFunction }: InputTextProps) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="flex dark:bg-darkblue bg-white items-center rounded overflow-hidden sm:w-96 border-2 ">
      <i
        className="px-4 cursor-pointer"
        onClick={() => toggleFunction(searchText)}
      >
        <FaSearch />
      </i>
      <input
        type="text"
        className="w-full h-12 px-2 dark:bg-darkblue text-white focus:outline-none "
        placeholder={placeholder}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
    </div>
  );
};

export default InputText;
