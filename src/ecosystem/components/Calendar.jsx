import React, { useEffect, useState } from "react";
import CalendarHeader from "./CalendarHeader";
import Day from "./Day";
import DeleteEventModal from "./DeleteEventModal";
import NewEventModal from "./NewEventModal";
import Weekdays from "./Weekdays";

const Calendar = () => {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [days, setDays] = useState([]);
  const [dateDisplay, setDateDisplay] = useState("");
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );

  const eventForDay = (date) => events.find((e) => e.date === date);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dt = new Date();

    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysinMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    setDateDisplay(
      `${dt.toLocaleDateString("en-us", { month: "long" })} ${year}`
    );

    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

    const daysArr = [];

    for (let i = 1; i <= paddingDays + daysinMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          event: eventForDay(dayString),
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: "padding",
          event: null,
          isCurrentDay: false,
          date: "",
        });
      }
    }

    setDays(daysArr);
  }, [events, nav]);

  return (
    <>
      <div className="bg-white shadow-xl p-8 rounded-lg">
        <CalendarHeader
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
        />
        <Weekdays />
        <div className="w-full grid grid-cols-7 m-auto flex-wrap">
          {days.map((day, index) => (
            <Day
              key={index}
              day={day}
              onClick={() => {
                if (day.value !== "padding") {
                  setClicked(day.date);
                }
              }}
            />
          ))}
        </div>
      </div>

      {clicked && !eventForDay(clicked) && (
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={(title) => {
            setEvents([...events, { title, date: clicked }]);
            setClicked(null);
          }}
        />
      )}

      {clicked && eventForDay(clicked) && (
        <DeleteEventModal
          onClose={() => setClicked(null)}
          eventText={eventForDay(clicked).title}
          onDelete={() => {
            setEvents(events.filter((e) => e.date !== clicked));
            setClicked(null);
          }}
        />
      )}
    </>
  );
};

export default Calendar;
