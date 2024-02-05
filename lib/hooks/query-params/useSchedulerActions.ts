import { BooleanParam, useQueryParams, DateParam } from "use-query-params";

export default function Func() {
  const [actions, setActions] = useQueryParams({
    New: BooleanParam,
    Date: DateParam,
    From: DateParam,
    To: DateParam,
  });

  const addEvent = (date: Date) => {
    setActions({
      ...actions,
      New: true,
      Date: date,
    });
  };

  const addRange = (from: Date, to: Date) => {
    setActions({
      ...actions,
      New: true,
      From: from,
      To: to,
    });
  };

  const close = () => {
    setActions({
      ...actions,
      New: undefined,
      Date: undefined,
      From: undefined,
      To: undefined,
    });
  };

  return {
    addEvent,
    addRange,
    close,

    SelectedDate: actions.Date,
    From: actions.From,
    New: actions.New,
    actions,
  };
}
