import React from "react";

const Day = ({ day, onClick }) => {
  const dayStyle = `aspect-square p-3 cursor-pointer bg-white m-[5px] shadow-md rounded-md flex flex-col justify-between hover:bg-[#e8faed] 
  ${
    day.value === "padding"
      ? "cursor-default bg-[#FFFCFF] shadow-none hover:bg-transparent"
      : ""
  } ${day.isCurrentDay ? "bg-[#d7d0ff] text-white" : ""}`;

  return (
    <div onClick={onClick} className={dayStyle}>
      {day.value === "padding" ? "" : day.value}

      {day.event && (
        <div className="bg-sky-400 px-2 text-xs text-white rounded-md shadow-lg">
          {day.event.title}
        </div>
      )}
    </div>
  );
};

export default Day;
