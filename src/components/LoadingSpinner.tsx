import React from "react";

interface Props {
  color?: string;
}

const LoadingSpinner: React.FC<Props> = ({ color = "gray" }) => {
  return (
    <div className="flex items-center justify-center animation-spin duration-700">
      <div
        className={`w-8 h-8 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-transparent`}
        style={{
          borderColor: color,
          borderTopColor: color,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
