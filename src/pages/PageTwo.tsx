import React, { useState } from "react";
import aiImg from "../assets/ai-img.webp";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const PageTwo: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");

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
    console.log("Submitting", { companyName, description, file });
    setCompanyName("");
    setDescription("");
    setFile(null);
  };

  return (
    <div className="flex flex-row">
      <div className="absolute top-0 right-0 m-4 text-lg font-semibold flex items-center justify-center gap-2">
        <span>Page 2/3</span>
        <FaArrowRightLong className="text-4xl text-slate-700" />
      </div>
      <div className="relative w-[50%] mx-auto overflow-hidden">
        <img src={aiImg} alt="AI" className="w-full h-screen object-cover" />
        <div className="absolute top-20 left-[20%] flex flex-col items-center z-10 gap-8 bg-black bg-opacity-50 p-4 rounded-lg min-h-[80%] min-w-[60%]">
          <h2 className="text-white text-[35px] font-bold mt-[20%]">
            AI Marketing
          </h2>
          <p className="text-white mt-[10%]">Customize your campaigns</p>
          <p className="text-white">Automated way to market your brand</p>
          <p className="text-white">Continuous Learning and Optimization</p>
          <p className="text-white">Cost and Time Efficiency</p>
          <p className="text-white">Predictive Analytics</p>
          <p className="text-white">Integration with Other Channels</p>
        </div>
      </div>

      <div className="w-[50%] flex flex-col items-center justify-center bg-slate-300">
        <h1 className="font-semibold mx-auto mb-4 text-[35px]">
          Upload Your Contacts
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 space-y-6 border border-black"
        >
          <div className="mb-6">
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
          {/* <div className="mb-6">
            <label
              htmlFor="company-name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Company Name
            </label>
            <input
              id="company-name"
              name="company-name"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your company name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="A brief description"
              rows={4}
            ></textarea>
          </div> */}
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
