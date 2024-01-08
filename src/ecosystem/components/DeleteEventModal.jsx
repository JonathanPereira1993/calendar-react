import React from "react";

const DeleteEventModal = ({ onDelete, eventText, onClose }) => {
  return (
    <>
      <div
        className="z-20 p-6 bg-[#e8f4fa] shadow-xl rounded-lg w-[350px] top-[40%] left-[50%] -translate-x-[50%] absolute"
        id="deleteEventModal"
      >
        <h2 className="text-2xl text-center pb-2">Event</h2>

        <p id="eventText">{eventText}</p>

        <div className="flex justify-between w-full mt-4">
          <button
            className="bg-[#fe7575] hover:bg-[#9ba8d1] w-[75px] cursor-pointer shadow-sm border-none outline-none p-[5px] rounded text-white"
            onClick={onDelete}
            id="deleteButton"
          >
            Delete
          </button>
          <button
            className="border hover:text-neutral-900 hover:bg-slate-100 border-neutral-700 w-[75px] cursor-pointer shadow-sm outline-none p-[5px] rounded text-neutral-500"
            onClick={onClose}
            id="closeButton"
          >
            Close
          </button>
        </div>
      </div>

      <div
        className="inset-0 z-10 w-screen h-screen absolute bg-[rgba(0,0,0,0.8)]"
        id="modalBackDrop"
      ></div>
    </>
  );
};

export default DeleteEventModal;
