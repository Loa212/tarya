"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGrid from "@fullcalendar/daygrid";
import timegrid from "@fullcalendar/timegrid";
import interactions from "@fullcalendar/interaction";
import { useSchedulerActions } from "@/lib/hooks/query-params";
import { SchedulerModals } from "./modals";

const Schedule = () => {
  const { addEvent } = useSchedulerActions();

  return (
    <>
      <SchedulerModals />
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
          addEvent(e.start);
        }}
        events={[
          { title: "event 1", date: "2024-02-08" },
          { title: "event 2", date: "2024-02-09" },
        ]}
      />
    </>
  );
};

export default Schedule;
