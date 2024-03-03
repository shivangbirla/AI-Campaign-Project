import React, { useState } from "react";
import Banner from "../components/Banner";
import FileUpload from "../components/FileUpload";

const PageThree: React.FC = () => {
  return (
    <div className="flex justify-center items-center custom-bg min-h-screen">
      <div className="min-w-[85%] md:min-w-[65%] flex flex-col bg-white rounded-lg shadow-2xl p-6 space-y-4 h-[60%]">
        <Banner />
        <FileUpload />
      </div>
    </div>
  );
};

export default PageThree;
