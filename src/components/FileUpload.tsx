import React, { useState } from "react";
import axios from "axios";
import {
  useDropzone,
  DropzoneRootProps,
  DropzoneInputProps,
} from "react-dropzone";
import { useCompanyContext } from "../ThemeContext";
import { MdOutlineCloudUpload } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { toast } from "react-toastify";

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  file: File;
}

const FileUpload: React.FC = () => {
  const { campaignId } = useCompanyContext();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
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

  const handleSaveAndProceed = async () => {
    if (uploadedFiles.length === 0) {
      console.error("No file uploaded");
      return;
    }

    const formData = new FormData();
    formData.append("campaign_id", String(campaignId));
    formData.append("file", uploadedFiles[0].file);

    try {
      const response = await axios.post(
        "https://email-marketing.naad.tech/load_csv",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully:", response.data);
      toast.success("Submitted Successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <label className="mb-4 mt-[8%] flex justify-center text-[20px] font-normal text-black">
        Upload your CSV file
      </label>
      <input {...getInputProps()} />
      <div
        className="border-2 border-[#2268E059] bg-[#F6FAFF] mx-[15%] min-h-[150px] rounded-md flex flex-col items-center justify-center gap-1 cursor-pointer"
        {...getRootProps()}
      >
        <MdOutlineCloudUpload className="w-[30px] h-[20px] text-[#2268E0]" />
        <p className="text-[10px] md:text-[16px] font-medium">
          Drag and drop your files, or{" "}
          <span className="text-[#2268E0]">Browse</span>
        </p>
        {uploadedFiles.length > 0 && (
          <div className="mt-4">
            <ul className="">
              {uploadedFiles.map((file, index) => (
                <div className="md:min-w-[250px] min-w-[140px] flex flex-row justify-between bg-gray-200 items-center px-2 py-1 rounded-md border border-gray-300">
                  <li key={index} className="w-full text-[12px] md:text-[15px]">
                    {file.name}
                  </li>
                  <MdOutlineCancel
                    onClick={() => handleRemoveFile(index)}
                    className="text-[#d90429] w-[14px] h-[14px] md:w-[20px] md:h-[20px] cursor-pointer"
                  />
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-[12px] md:text-[14px] font-medium rounded-[4px] text-sm py-[7px] px-[16px] md:py-[14px] md:px-[32px] text-center mt-[10%] mb-1 md:mb-4"
          onClick={handleSaveAndProceed}
        >
          Save & Proceed
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
