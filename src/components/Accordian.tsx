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
        className="accordion-title bg-slate-500 text-white p-4 w-full flex justify-between items-center hover:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-300 transition duration-150 ease-in-out"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <span className="text-xl">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {isOpen && (
        <div className="accordion-content bg-gray-50 p-4 border-t border-gray-200 transition-max-height duration-700 ease-in-out">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
