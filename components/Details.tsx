import React from "react";

export const Detail = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <div className="flex space-x-4 text-xl font">
      <span className="opacity-70 font-light">{title}</span>
      <span>{value}</span>
    </div>
  );
};
