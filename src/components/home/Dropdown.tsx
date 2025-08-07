import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type DropdownProps = {
  options: string[];
  onSelect: (value: string) => void;
};

export default function Dropdown({ options, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleSelect(value: string) {
    setSelectedOption(value);
    onSelect(value);
    setIsOpen(false);
  }

  return (
    <div className="relative w-64">
      <button onClick={toggleDropdown} className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 flex justify-between items-center shadow-sm hover:border-gray-400">
        {selectedOption || "KODE DC"}
        <FaChevronDown className="ml-2 text-sm text-gray-400" />
      </button>

      {isOpen && (
        <ul className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-md z-10 max-h-60 overflow-auto">
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)} className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
