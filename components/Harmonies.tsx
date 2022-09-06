import React from "react";

export const Harmonies = ({
  list,
  title,
}: {
  list: string[];
  title: string;
}) => {
  return (
    <div className="flex items-center mb-4">
      <p className="opacity-70 font-light mr-4">{title}</p>
      <div className="flex flex-wrap space-x-3">
        {list.map((color: string) => {
          return (
            <div
              className="w-16 h-16 text-xs px-1 pt-2 border rounded-lg cursor-pointer"
              style={{
                backgroundColor: color,
              }}
            >
              {color}
            </div>
          );
        })}
      </div>
    </div>
  );
};
