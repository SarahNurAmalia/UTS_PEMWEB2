import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CollapseProps {
  title: string;
  description: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-300">
      
      {/* HEADER */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 text-left transition-all duration-300 ${
          isOpen ? "bg-pink-100" : "hover:bg-pink-50"
        }`}
      >
        <span className="font-medium text-gray-800">{title}</span>

        {/* ICON */}
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180 text-pink-600" : "text-gray-500"
          }`}
        />
      </button>

      {/* CONTENT */}
      <div
        className={`px-4 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 py-4" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Collapse;