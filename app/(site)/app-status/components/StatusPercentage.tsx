import React from "react";

interface StatusPercentageProps {
  greenPercentage: number;
  totalDivs: number;
}

const StatusPercentage: React.FC<StatusPercentageProps> = ({
  greenPercentage,
  totalDivs,
}) => {
  const greenDivsCount = Math.round((greenPercentage / 100) * totalDivs);
  const grayDivsCount = totalDivs - greenDivsCount;

  const greenDivs = Array.from({ length: greenDivsCount }, (_, index) => (
    <div
      key={index}
      className="w-full h-10 bg-green-500 rounded-md"
    ></div>
  ));

  const grayDivs = Array.from({ length: grayDivsCount }, (_, index) => (
    <div
      key={index}
      className="w-full h-10 bg-gray-500 rounded-md"
    ></div>
  ));

  return (
    <div className="flex gap-1 mt-6">
      {greenDivs}
      {grayDivs}
    </div>
  );
};

export default StatusPercentage;
