"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const Schedule = () => {
  return (
    <FullCalendar
      height={640}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: "event 1", date: "2024-02-08" },
        { title: "event 2", date: "2024-02-09" },
      ]}
    />
  );
};

export default Schedule;
