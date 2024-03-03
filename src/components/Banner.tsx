import React from "react";
import { Link, useLocation } from "react-router-dom";

const Banner: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-center h-10">
      <Link
        to="/"
        className={`flex-1 text-center cursor-pointer max-w-[90px] md:max-w-[200px] font-semibold ${
          pathname === "/"
            ? "text-blue-600 border-b-4 border-blue-600"
            : "text-[#C9C9C9]"
        }`}
      >
        <span className="text-[25px]">1</span>
        <span className="hidden md:inline text-[14px]">Company Info</span>
        <span className="md:hidden text-[12px]">Company</span>
      </Link>

      <Link
        to="/page2"
        className={`flex-1 text-center cursor-pointer max-w-[90px] md:max-w-[200px] font-semibold ${
          pathname === "/page2"
            ? "text-blue-600 border-b-4 border-blue-600"
            : "text-[#C9C9C9]"
        }`}
      >
        <span className="text-[25px]">2</span>
        <span className="text-[12px] md:text-[14px]">Campaign</span>
      </Link>
      <Link
        to="/page3"
        className={`flex-1 text-center cursor-pointer max-w-[90px] md:max-w-[200px] font-semibold ${
          pathname === "/page3"
            ? "text-blue-600 border-b-4 border-blue-600"
            : "text-[#C9C9C9]"
        }`}
      >
        <span className="text-[25px]">3</span>
        <span className="text-[12px] md:text-[14px]">Contact</span>
      </Link>
    </div>
  );
};

export default Banner;
