import React from "react";

const Weekdays = () => {
  const weekdays = [
    { id: 1, name: "Sunday" },
    { id: 2, name: "Monday" },
    { id: 3, name: "Tuesday" },
    { id: 4, name: "Wednesday" },
    { id: 5, name: "Thursday" },
    { id: 6, name: "Friday" },
    { id: 7, name: "Saturday" },
  ];

  return (
    <div className="w-full grid grid-cols-7 text-[#7B827E] mb-2 mt-4">
      {weekdays.map((weekday) => (
        <div className="w-[100px] p-3" key={weekday.id}>
          {weekday.name}
        </div>
      ))}
    </div>
  );
};

export default Weekdays;
