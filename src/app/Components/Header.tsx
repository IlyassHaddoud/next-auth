"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { log } from "console";

const Header = () => {
  const { data } = useSession();

  return (
    <div className="header">
      <ul className="flex bg-slate-300 items-center justify-between px-3 h-16 mb-6">
        <li className="cursor-pointer">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link href={"/server"}>Protected (Server)</Link>
        </li>
        <li className="cursor-pointer">
          <Link href={"/client"}>Protected (Client)</Link>
        </li>
        <li className="cursor-pointer">
          {!data && <Link href={"/login"}>Login</Link>}
          {data && <button onClick={() => signOut()}>Sign out</button>}
        </li>
      </ul>
    </div>
  );
};

export default Header;
