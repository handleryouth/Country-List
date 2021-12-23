import { InputDropdownProps } from "types";

const InputDropdown = ({ value, toggleFunction }: InputDropdownProps) => {
  return (
    <div className="mt-4 ">
      <select
        className="w-56 h-10 text-center bg-darkbluetext-white"
        onChange={(e) => toggleFunction(e.target.value)}
        defaultValue={"Filter by Region"}
      >
        <option disabled hidden>
          Filter by Region
        </option>
        {value.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputDropdown;
