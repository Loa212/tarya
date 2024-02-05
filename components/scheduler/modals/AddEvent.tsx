"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMediaQuery } from "usehooks-ts";
import { useSchedulerActions } from "../../../lib/hooks/query-params";
import { format as dateFormat } from "date-fns";
import { it, enUS } from "date-fns/locale";

export function AddEvent() {
  const { actions, close, SelectedDate } = useSchedulerActions();

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const title =
    "Add event on " +
    (SelectedDate
      ? dateFormat(SelectedDate || new Date(), "do MMM yyyy", { locale: enUS })
      : "");

  const description = "Add a new event to your calendar.";

  if (isDesktop) {
    return (
      <Dialog open={!!actions.New} onOpenChange={close}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={!!actions.New} onOpenChange={close}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const { close } = useSchedulerActions();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        close();
      }}
      className={cn("grid items-start gap-4", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="username">Title</Label>
        <Input id="title" defaultValue="my event" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
