import React, { useState } from "react";
import Banner from "../components/Banner";
import { useCompanyContext } from "../ThemeContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdOutlineCloudUpload, MdOutlineCancel } from "react-icons/md";
import {
  useDropzone,
  DropzoneRootProps,
  DropzoneInputProps,
} from "react-dropzone";

type CampaignType =
  | "Email Campaign"
  | "Social Media Campaign"
  | "Content Marketing Campaign"
  | "Influencer Marketing Campaign"
  | "Search Engine Marketing (SEM) Campaign"
  | "Search Engine Optimization (SEO) Campaign"
  | "Pay-Per-Click (PPC) Campaign"
  | "Affiliate Marketing Campaign"
  | "Video Marketing Campaign";

type CampaignStyle =
  | "Newsletter"
  | "Promotional Offers"
  | "Product Announcements"
  | "Event Invitations"
  | "Welcome Series"
  | "Abandoned Cart Reminders"
  | "Customer Feedback Surveys"
  | "Educational Content";

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  file: File;
}

const PageTwo: React.FC = () => {
  const navigate = useNavigate();
  const { companyName, companyUrl, selectedCards, setCampaignId } =
    useCompanyContext();
  const [campaignTimeline, setCampaignTimeline] = useState("");
  const [campaignType, setCampaignType] = useState<CampaignType>();
  const [campaignStyle, setCampaignStyle] = useState<CampaignStyle>();
  const [campaignGoal, setCampaignGoal] = useState("");
  const [quantity, setQuantity] = useState("");
  const [customOffer, setCustomOffer] = useState("no");
  const [bannerImage, setBannerImage] = useState<File | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [customOfferValue, setCustomOfferValue] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setBannerImage(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      const files: UploadedFile[] = acceptedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        file: file,
      }));
      setUploadedFiles(files);
    },
  });

  const handleRemoveFile = (index: number) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requestData = {
      company_name: companyName,
      company_url: companyUrl,
      products: Object.keys(selectedCards).map((index) => ({
        product_name: `Product ${index + 1}`,
        product_url: `https://example.com/product${index + 1}`,
        product_price: "999",
        product_image_url: `https://example.com/image${index + 1}.jpg`,
      })),
      campaign_timeline: campaignTimeline,
      threshold: 3,
    };

    try {
      const response = await axios.post(
        "https://email-marketing.naad.tech/create_campaign",
        requestData
      );
      toast.success("Submitted Successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log("Campaign created successfully:", response.data);

      setCampaignId(response.data.campaign_id);
      navigate("/page3");

      setCampaignTimeline("");
      setCampaignType(undefined);
      setCampaignStyle(undefined);
      setCampaignGoal("");
      setQuantity("");
      setCustomOffer("no");
      setBannerImage(null);
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-screen custom-bg">
      <form
        onSubmit={handleSubmit}
        className="min-w-[60%] min-h-[60%] bg-white px-[6%] pt-[4%] pb-[2%] rounded-lg shadow-2xl"
      >
        <Banner />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="campaign-timeline"
              className="block text-[14px] font-normal text-[#181C32] mb-2"
            >
              Campaign Timelines
            </label>
            <input
              type="date"
              id="campaign-timeline"
              value={campaignTimeline}
              onChange={(e) => setCampaignTimeline(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block text-[14px] font-normal text-[#181C32] mb-2"
            >
              Quantity
            </label>
            <input
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:border-transparent"
              placeholder="Enter Quantity"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="campaign-type"
              className="block text-[14px] font-normal text-[#181C32] mb-2"
            >
              Campaign Type
            </label>
            <select
              id="campaign-type"
              value={campaignType || ""}
              onChange={(e) => setCampaignType(e.target.value as CampaignType)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-3 focus:border-transparent"
              style={{ color: "#A0AEC0" }}
            >
              <option value="" disabled hidden>
                Select Campaign Type
              </option>
              <option style={{ color: "#000000" }}>Email Campaign</option>
              <option style={{ color: "#000000" }}>
                Social Media Campaign
              </option>
              <option style={{ color: "#000000" }}>
                Content Marketing Campaign
              </option>
              <option style={{ color: "#000000" }}>
                Influencer Marketing Campaign
              </option>
              <option style={{ color: "#000000" }}>
                Search Engine Marketing (SEM) Campaign
              </option>
              <option style={{ color: "#000000" }}>
                Search Engine Optimization (SEO) Campaign
              </option>
              <option style={{ color: "#000000" }}>
                Pay-Per-Click (PPC) Campaign
              </option>
              <option style={{ color: "#000000" }}>
                Affiliate Marketing Campaign
              </option>
              <option style={{ color: "#000000" }}>
                Video Marketing Campaign
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="campaign-style"
              className="block text-[14px] font-normal text-[#181C32] mb-2"
            >
              Campaign Style
            </label>
            <select
              id="campaign-style"
              value={campaignStyle || ""}
              onChange={(e) =>
                setCampaignStyle(e.target.value as CampaignStyle)
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-3 focus:border-transparent"
              style={{ color: "#A0AEC0" }}
            >
              <option value="" disabled hidden>
                Select Campaign Style
              </option>
              <option style={{ color: "#000000" }}>Newsletter</option>
              <option style={{ color: "#000000" }}>Promotional Offers</option>
              <option style={{ color: "#000000" }}>
                Product Announcements
              </option>
              <option style={{ color: "#000000" }}>Event Invitations</option>
              <option style={{ color: "#000000" }}>Welcome Series</option>
              <option style={{ color: "#000000" }}>
                Abandoned Cart Reminders
              </option>
              <option style={{ color: "#000000" }}>
                Customer Feedback Surveys
              </option>
              <option style={{ color: "#000000" }}>Educational Content</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="campaign-goal"
            className="block text-[14px] font-normal text-[#181C32] mb-2"
          >
            Campaign Goal
          </label>
          <textarea
            id="campaign-goal"
            value={campaignGoal}
            onChange={(e) => setCampaignGoal(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3  focus:border-transparent"
            rows={4}
            placeholder="Enter Brief Campaign Goals"
          ></textarea>
        </div>

        <div className="flex flex-col mt-4 mb-4">
          <label className="block text-[14px] font-normal text-[#181C32]">
            Any Custom Offer?
          </label>
          <div className="">
            <label className="inline-flex items-center mr-6">
              <input
                type="radio"
                name="customOffer"
                value="yes"
                checked={customOffer === "yes"}
                onChange={() => setCustomOffer("yes")}
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="customOffer"
                value="no"
                checked={customOffer === "no"}
                onChange={() => setCustomOffer("no")}
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {customOffer === "yes" && (
            <textarea
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:border-transparent"
              rows={2}
              placeholder="Enter your custom offer..."
              value={customOfferValue}
              onChange={(e) => setCustomOfferValue(e.target.value)}
            ></textarea>
          )}
        </div>

        <div>
          <label
            htmlFor="campaign-banner"
            className="block text-[14px] font-normal text-[#181C32] mb-2"
          >
            Any Specific Banner
          </label>
          <input {...getInputProps()} />
          <div
            className="border border-gray-300 bg-[#F6FAFF] min-h-[55px] rounded-md flex flex-row items-center gap-2 cursor-pointer"
            {...getRootProps()}
          >
            <div className="flex flex-row items-center justify-center border border-[#2268E05C] rounded-[4px] my-1 mx-2 p-2 gap-2 min-w-[100px] bg-[#F6FAFF]">
              <MdOutlineCloudUpload className="w-[12px] h-[12px] text-[#2268E0]" />
              <span className="text-[12px] text-[#2268E0]">Choose File</span>
            </div>
            {uploadedFiles.length == 0 && (
              <p className="text-[12px] font-normal">No File chosen</p>
            )}
            {uploadedFiles.length > 0 && (
              <div className="">
                <ul className="">
                  {uploadedFiles.map((file, index) => (
                    <div
                      className="min-w-[250px] flex flex-row justify-between bg-gray-200 items-center rounded-md border border-gray-300 py-1 px-2"
                      key={index}
                    >
                      <li className="w-full text-[12px]">{file.name}</li>
                      <MdOutlineCancel
                        onClick={() => handleRemoveFile(index)}
                        className="text-[#d90429] w-[15px] h-[15px] cursor-pointer"
                      />
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {bannerImage && (
          <div className="mt-4">
            <img
              src={URL.createObjectURL(bannerImage)}
              alt="Banner preview"
              className="max-w-xs"
            />
          </div>
        )}
        <div className="flex justify-center mt-12">
          {/* <Link to="/page2"> */}
          <button
            type="submit"
            className="mt-4 py-[7px] px-[24px] md:px-[48px] md:py-[14px] bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 text-white transition ease-in duration-200 text-center text-sm font-semibold shadow-md rounded-lg mb-4 md:mb-0"
          >
            Save & Proceed
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default PageTwo;
