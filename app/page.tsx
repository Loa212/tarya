import SignIn from "@/components/auth/SignIn";
import Schedule from "@/components/scheduler";
import { getUserAuth } from "@/lib/auth/utils";
import React from "react";

export default async function Home() {
  const { session } = await getUserAuth();

  if (session === null) {
    return <SignIn />;
  }

  return (
    <main className="flex h-full grow flex-col space-y-4 ">
      {/* {session ? (
        <pre className="bg-secondary p-4 rounded-sm shadow-sm text-secondary-foreground break-all whitespace-break-spaces">
          {JSON.stringify(session, null, 2)}
        </pre>
      ) : null} */}
      {/* <SignIn /> */}

      <Schedule />
    </main>
  );
}
