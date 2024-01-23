"use client";
import React from "react";
import { Calendar } from "../ui/calendar";

const Schedule = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <section className="flex items-start justify-between gap-4 rounded-md p-4 ring-1 ring-foreground/20">
      <div className="h-full grow rounded-md p-4 ring-1 ring-card-foreground/20"></div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="max-w-min rounded-md border"
      />
    </section>
  );
};

export default Schedule;
