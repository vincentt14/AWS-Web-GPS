import { useState, useRef, useEffect } from "react";

type DropdownCheckboxProps = {
  options: string[];
  onSelect: (selected: string[]) => void;
};

export default function DropdownCheckbox({ options, onSelect }: DropdownCheckboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (value: string) => {
    const updatedSelected = selectedOptions.includes(value) ? selectedOptions.filter((v) => v !== value) : [...selectedOptions, value];

    setSelectedOptions(updatedSelected);
    onSelect(updatedSelected);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-96" ref={dropdownRef}>
      <button type="button" onClick={toggleDropdown} className="w-full border border-gray-300 bg-white text-left px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center">
        <span>{selectedOptions.length > 0 ? selectedOptions.join(", ") : "Kode Mobil"}</span>
        <svg className="w-4 h-4 transform transition-transform" style={{ transform: isOpen ? "rotate(180deg)" : "" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-60 overflow-y-auto">
          {/* <div className="px-4 py-2 border-b  mibold text-sm text-gray-500">Kode Mobil</div> */}

          {options.map((option) => (
            <label key={option} className="flex items-center p-4 text-sm cursor-pointer hover:bg-gray-100">
              <input type="checkbox" className="form-checkbox rounded text-blue-500 focus:ring-0 mr-2" checked={selectedOptions.includes(option)} onChange={() => handleCheckboxChange(option)} />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
