import React, { useState } from "react";
import aiImg from "../assets/ai-img.webp";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const PageTwo: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setFile(file);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      alert("Please upload an Excel file.");
      return;
    }
    // Logic to handle file submission goes here
    console.log("Submitting", { file });
    setFile(null); // Reset file input after submission
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:hidden md:absolute top-0 right-0 m-4 text-lg font-semibold flex items-center justify-center gap-2">
        <span>Page 2/3</span>
        <FaArrowRightLong className="text-2xl text-slate-700" />
      </div>
      {/* Hide image on mobile devices */}
      <div className="hidden md:block relative w-full md:w-1/2 overflow-hidden">
        <img src={aiImg} alt="AI" className="w-full h-screen object-cover" />
        <div className="absolute top-[20%] left-[20%] flex flex-col items-center z-10 gap-8 bg-black bg-opacity-70 p-4 rounded-lg min-h-[60%] min-w-[60%]">
          <h2 className="text-white text-4xl font-bold mt-4">AI Marketing</h2>
          <p className="text-white mt-5">Customize your campaigns</p>
          <p className="text-white">Automated way to market your brand</p>
          <p className="text-white">Continuous Learning and Optimization</p>
          <p className="text-white">Cost and Time Efficiency</p>
          <p className="text-white">Predictive Analytics</p>
          <p className="text-white">Integration with Other Channels</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-slate-300 p-4">
        <h1 className="font-semibold text-3xl mb-4">Upload Your Contacts</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 space-y-6 border border-black"
        >
          <div>
            <label
              htmlFor="file-upload"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Upload your Excel file
            </label>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <Link to="/page3">
            <button
              type="submit"
              className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PageTwo;
