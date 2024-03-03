// Card.tsx
import React from "react";

interface CardProps {
  imgSrc: string;
  price: string;
  description: string;
  isSelected: boolean;
  onToggle: () => void;
}

const Card: React.FC<CardProps> = ({
  imgSrc,
  price,
  description,
  isSelected,
  onToggle,
}) => (
  <div className="relative w-[190px] h-[250px] bg-white rounded-lg shadow-md">
    <input
      type="checkbox"
      checked={isSelected}
      onChange={onToggle}
      className="absolute top-2 right-2 h-5 w-5 cursor-pointer"
    />
    <img
      className="w-full h-[60%] object-contain rounded-t-lg"
      src={imgSrc}
      alt="Product"
    />
    <div className="p-4 mt-3">
      <h5 className="text-[14px] font-medium">{`${price}`}</h5>
      <p className="text-gray-700 text-[14px]">{description}</p>
    </div>
  </div>
);

export default Card;
