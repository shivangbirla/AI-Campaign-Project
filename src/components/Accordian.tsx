import React, { useState, ReactNode } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion bg-white shadow-md rounded-md overflow-hidden">
      <button
        className="accordion-title bg-blue-600 text-white p-2 md:p-4 w-full flex justify-between items-center hover:bg-blue-700 focus:outline-none focus:ring focus:ring-slate-300 transition duration-150 ease-in-out max-h-[30px] md:min-h-[50px]"
        onClick={toggleAccordion}
      >
        <h3 className="text-[13px] md:text-lg font-medium">{title}</h3>
        <span className="text-[15px] md:text-xl">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {isOpen && (
        <div className="accordion-content bg-gray-100 border-t border-gray-200 transition-max-height duration-700 ease-in-out flex justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
