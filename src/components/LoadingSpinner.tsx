import React from "react";

interface Props {
  color?: string;
}

const LoadingSpinner: React.FC<Props> = ({ color = "blue" }) => {
  return (
    <div className="flex items-center justify-center animation-spin duration-700">
      <div
        className={`w-8 h-8 rounded-full border-2 border-transparent`}
        style={{
          borderColor: color,
          borderTopColor: color,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
