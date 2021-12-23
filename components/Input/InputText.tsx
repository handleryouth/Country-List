import { FaSearch } from "react-icons/fa";
import { InputTextProps } from "types";

const InputText = ({ placeholder }: InputTextProps) => {
  return (
    <div className="flex bg-darkblue items-center rounded overflow-hidden sm:w-96">
      <i className="px-4">
        <FaSearch />
      </i>
      <input
        type="text"
        className="w-full h-12 px-2 bg-darkblue text-white focus:outline-none "
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputText;
