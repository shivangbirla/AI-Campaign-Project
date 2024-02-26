import React, { useState } from "react";
import Card from "../components/Card";
import iphoneImg from "../assets/iphone-img.jpg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const PageOne: React.FC = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [selectedCards, setSelectedCards] = useState<{
    [key: number]: boolean;
  }>({});

  const cardsData = [
    { imgSrc: iphoneImg, price: "100", description: "Product 1" },
    { imgSrc: iphoneImg, price: "200", description: "Product 2" },
    { imgSrc: iphoneImg, price: "300", description: "Product 3" },
    { imgSrc: iphoneImg, price: "400", description: "Product 4" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", companyName, companyUrl, selectedCards);
    // Implementation for form submission, such as sending data to a server
  };

  const handleScanUrl = () => {
    console.log("Scanning URL:", companyUrl);
    // Implementation for scanning URL, such as a backend call to validate the URL
  };

  const toggleSelectCard = (index: number) => {
    setSelectedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-300">
      <div className="absolute top-0 right-0 m-4 text-lg font-semibold flex items-center justify-center gap-2">
        <span>Page 1/3</span>
        <FaArrowRightLong className="text-4xl text-slate-700" />
      </div>
      <h1 className="font-semibold mx-auto mt-6 text-[45px]">
        Welcome to Campaign Marketing
      </h1>
      <p className="mx-auto">
        Let’s discuss your project and find out what we can do to provide value.
      </p>
      <main className="flex-grow p-8">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto border border-black"
        >
          <div>
            <label
              htmlFor="companyName"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Company Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="companyName"
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="companyUrl"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Company URL
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
              id="companyUrl"
              type="text"
              placeholder="Company URL"
              value={companyUrl}
              onChange={(e) => setCompanyUrl(e.target.value)}
            />
            <button
              type="button"
              className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              onClick={handleScanUrl}
            >
              Scan URL
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                imgSrc={card.imgSrc}
                price={card.price}
                description={card.description}
                isSelected={!!selectedCards[index]}
                onToggle={() => toggleSelectCard(index)}
              />
            ))}
          </div>
          <Link to="/page2">
            <button
              className="mt-4 px-4 py-2 bg-slate-700 hover:bg-slate-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default PageOne;
