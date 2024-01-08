import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
  return (
    <div
      className="flex justify-between align-middle px-4 py-4 mt-4"
      id="header"
    >
      <button
        className="hover:bg-[#7B61FF] hover:text-white p-2 rounded-full hover:shadow-md transition-all duration-200"
        onClick={onBack}
        id="backButton"
      >
        <FaAngleLeft />
      </button>
      <div className="text-indigo-600 font-bold text-3xl" id="monthDisplay">
        {dateDisplay}
      </div>

      <button
        className="hover:bg-[#7B61FF] hover:text-white p-2 rounded-full hover:shadow-md transition-all duration-200"
        onClick={onNext}
        id="nextButton"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default CalendarHeader;
