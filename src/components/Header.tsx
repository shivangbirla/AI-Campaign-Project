import React from "react";

const Header: React.FC = () => (
  <header
    className="text-white py-5 text-center font-bold text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
    style={{
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      marginBottom: "1.5rem",
    }}
  >
    Company Products
  </header>
);

export default Header;
