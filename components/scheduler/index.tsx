"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGrid from "@fullcalendar/daygrid";
import timegrid from "@fullcalendar/timegrid";
import interactions from "@fullcalendar/interaction";
import { format, subMinutes } from "date-fns";

const Schedule = () => {
  return (
    <FullCalendar
      headerToolbar={{
        left: "title",
        center: "prev,next",
        right: "today,dayGridMonth,timeGridWeek,timeGridDay",
      }}
      initialView="dayGridMonth"
      height={640}
      plugins={[dayGrid, timegrid, interactions]}
      editable={true}
      selectable={true}
      select={(e) => {
        alert(
          "selected " +
            e.startStr +
            " to " +
            format(subMinutes(e.end, 1), "yyyy-MM-dd") +
            " (all-day: " +
            e.allDay +
            ")",
        );
      }}
      events={[
        { title: "event 1", date: "2024-02-08" },
        { title: "event 2", date: "2024-02-09" },
      ]}
    />
  );
};

export default Schedule;
