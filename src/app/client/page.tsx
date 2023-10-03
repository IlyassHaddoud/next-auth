"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Client = () => {
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login?callbackUrl=/client");
    },
  });
  return (
    <div className="client px-4 text-3xl">
      <h1>Protected client route</h1>
      <p>Logged in as {data?.user?.email}</p>
    </div>
  );
};

export default Client;
