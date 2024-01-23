"use client";
import React from "react";
import { Calendar } from "../ui/calendar";
import { it } from "date-fns/locale";

const Schedule = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <section className="flex h-full items-start justify-between gap-4 rounded-md">
      <div className="grid h-full w-full grid-cols-12">
        {/* // hours from 6 am to 10 pm */}
        <div className="col-span-1 flex flex-col justify-between divide-y-2 divide-background">
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            7:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            8:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            9:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            10:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            11:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            12:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            13:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            14:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            15:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            16:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            17:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            18:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            19:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            20:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            21:00
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            22:00
          </div>
        </div>
        {/* // slot for what you need to do */}
        <div className="col-span-11 flex flex-col justify-between divide-y-2 divide-background">
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 7:00 */}
            Wake up
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 8:00 */}
            Edge
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 9:00 */}
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 10:00 */}
            Get to work
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 11:00 */}
            💩 💩 💩 💩 💩
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            start the grind
            {/* 12:00 */}
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 13:00 */}
            lunch break
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 14:00 */}
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 15:00 */}
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 16:00 */}
            work more
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 17:00 */}
            go home
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 18:00 */}
            Edge
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 19:00 */}
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 20:00 */}
          </div>
          <div className="flex min-h-12 items-center bg-card-foreground/10 px-2">
            {/* 21:00 */}
          </div>
          <div className="flex min-h-12 items-center justify-center bg-card-foreground/10">
            {/* 22:00 */}
          </div>
        </div>
      </div>

      <Calendar
        showOutsideDays={false}
        weekStartsOn={1}
        locale={it}
        mode="single"
        selected={date}
        onSelect={setDate}
        className="grow-0 rounded-md border"
      />
    </section>
  );
};

export default Schedule;
