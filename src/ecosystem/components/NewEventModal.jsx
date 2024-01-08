import React, { useState } from "react";

const NewEventModal = ({ onSave, onClose }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      <div
        className="z-20 p-6 bg-[#e8f4fa] shadow-xl rounded-lg w-[350px] top-[40%] left-[50%] -translate-x-[50%] absolute"
        id="newEventModal"
      >
        <h2 className="text-2xl text-center pb-2">New Event</h2>

        <input
          className={
            error
              ? "border border-red-500 rounded-md w-full px-2 h-[40px]"
              : "rounded-md w-full px-2 h-[40px]"
          }
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="eventTitleInput"
          placeholder="Event Title"
        />
        <div className="flex justify-between w-full mt-4">
          <button
            className="bg-[#92a1d1] hover:bg-[#9ba8d1] w-[75px] cursor-pointer shadow-sm border-none outline-none p-[5px] rounded text-white"
            onClick={() => {
              if (title) {
                setError(false);
                onSave(title);
              } else {
                setError(true);
              }
            }}
            id="saveButton"
          >
            Save
          </button>
          <button
            className="border hover:text-neutral-900 hover:bg-slate-100 border-neutral-700 w-[75px] cursor-pointer shadow-sm outline-none p-[5px] rounded text-neutral-500"
            onClick={onClose}
            id="cancelButton"
          >
            Cancel
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

export default NewEventModal;
